const storageKey = "kalterkrieg-in-europa-progress";
const teacherPassword = "kalter_krieg";
const teacherPasswordAliases = ["kalter_krieg", "kalter krieg", "kalter-krieg", "kalterkrieg"];
const modules = window.COLD_WAR_MODULES || [];
const structureSpec = {
  thesis: ["ich argumentiere", "ich vertrete", "meine these", "entscheidend ist", "zentral ist", "ich bewerte"],
  evidence: ["das video", "das material", "die quelle", "zeigt", "deutlich wird", "im video", "im material"],
  comparison: ["waehrend", "hingegen", "im unterschied", "gemeinsam", "im vergleich", "andererseits"],
  nuance: ["jedoch", "allerdings", "zugleich", "nicht nur", "einerseits", "andererseits", "dennoch", "spannungsfeld"],
  conclusion: ["insgesamt", "daher", "somit", "deshalb", "abschliessend", "fazit"]
};

const state = {
  activeModuleId: modules[0]?.id || null,
  teacherAuthorized: false,
  teacherMode: false,
  teacherAccessOpen: false,
  answers: {}
};

const elements = {
  statsGrid: document.getElementById("stats-grid"),
  moduleNav: document.getElementById("module-nav"),
  moduleHeader: document.getElementById("module-header"),
  teacherAccessPanel: document.getElementById("teacher-access-panel"),
  teacherPanel: document.getElementById("teacher-panel"),
  resourceGroups: document.getElementById("resource-groups"),
  questionList: document.getElementById("question-list"),
  startRouteButton: document.getElementById("start-route-button"),
  openFirstOpenButton: document.getElementById("open-first-open-button"),
  teacherModeButton: document.getElementById("teacher-mode-button")
};

function loadStore() {
  try {
    const raw = localStorage.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== "object") {
      return { answers: {}, teacherMode: false, teacherAuthorized: false };
    }
    if ("answers" in parsed || "teacherMode" in parsed) {
      return {
        answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {},
        teacherMode: Boolean(parsed.teacherMode),
        teacherAuthorized: Boolean(parsed.teacherAuthorized)
      };
    }
    return { answers: parsed, teacherMode: false, teacherAuthorized: false };
  } catch {
    return { answers: {}, teacherMode: false, teacherAuthorized: false };
  }
}

function saveStore() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      answers: state.answers,
      teacherMode: state.teacherMode,
      teacherAuthorized: state.teacherAuthorized
    })
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[„“"']/g, "")
    .replace(/[-/]/g, " ")
    .replace(/[.,;:!?()[\]]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizePasswordEntry(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isTeacherPasswordValid(value = "") {
  const normalizedValue = normalizePasswordEntry(value);
  return [teacherPassword, ...teacherPasswordAliases].some(
    (entry) => normalizePasswordEntry(entry) === normalizedValue
  );
}

function wordCount(value = "") {
  return normalizeText(value).split(" ").filter(Boolean).length;
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function getModuleById(moduleId) {
  return modules.find((entry) => entry.id === moduleId) || modules[0] || null;
}

function getActiveModule() {
  return getModuleById(state.activeModuleId);
}

function getModuleScore(module) {
  const questionCount = module.questions.length || 1;
  const totalScore = module.questions.reduce((sum, question) => sum + (getAnswer(question.id)?.result?.score || 0), 0);
  return totalScore / questionCount;
}

function isModuleUnlocked(moduleIndex) {
  if (moduleIndex <= 0) return true;
  const previousModule = modules[moduleIndex - 1];
  return getModuleScore(previousModule) >= 60;
}

function getFirstLockedModuleIndex() {
  return modules.findIndex((_, index) => !isModuleUnlocked(index));
}

function getFirstAvailableModuleId() {
  const firstLocked = getFirstLockedModuleIndex();
  if (firstLocked === -1) return modules[modules.length - 1]?.id || modules[0]?.id || null;
  return modules[Math.max(0, firstLocked - 1)]?.id || modules[0]?.id || null;
}

function getAnswer(questionId) {
  return state.answers[questionId] || null;
}

function setAnswer(questionId, payload) {
  state.answers[questionId] = payload;
  saveStore();
}

function getQuestionById(questionId) {
  for (const module of modules) {
    const question = module.questions.find((entry) => entry.id === questionId);
    if (question) return question;
  }
  return null;
}

function getResourceMap(module) {
  return new Map(module.resources.map((resource) => [resource.id, resource]));
}

function formatPercent(value) {
  return `${Math.round(value)}%`;
}

function containsVariant(normalizedAnswer, variant) {
  return normalizedAnswer.includes(normalizeText(variant));
}

function countMatchedConceptGroups(answer, question) {
  const normalizedAnswer = normalizeText(answer);
  const hits = [];
  const missing = [];

  (question.conceptGroups || []).forEach((group) => {
    const matched = group.variants.some((variant) => containsVariant(normalizedAnswer, variant));
    if (matched) {
      hits.push(group.label);
    } else {
      missing.push(group.label);
    }
  });

  return { hits, missing };
}

function evaluateStructure(normalizedAnswer, question) {
  const hits = [];
  const missing = [];

  Object.entries(structureSpec).forEach(([group, markers]) => {
    const matched = markers.some((marker) => containsVariant(normalizedAnswer, marker));
    if (matched) hits.push(group);
    else missing.push(group);
  });

  const mandatory = question.structureExpectations?.mandatory || ["thesis", "evidence"];
  const mandatoryMissing = mandatory.filter((entry) => !hits.includes(entry));
  return { hits, missing, mandatoryMissing };
}

function evaluateSingleChoice(question, answerValue) {
  if (!answerValue) {
    return {
      status: "error",
      score: 0,
      title: "Noch keine Entscheidung",
      body: "Wähle zuerst eine Antwort aus.",
      missing: [],
      strengths: []
    };
  }

  const correct = answerValue === question.correctOptionId;
  return {
    status: correct ? "success" : "error",
    score: correct ? 100 : 0,
    title: correct ? "Treffer" : "Noch nicht passend",
    body: question.explanation,
    missing: correct ? [] : ["Prüfe den Kernbegriff der Aufgabe erneut."],
    strengths: correct ? ["Die zentrale Aussage ist korrekt erkannt."] : []
  };
}

function evaluateMultiSelect(question, selectedIds) {
  if (!selectedIds.length) {
    return {
      status: "error",
      score: 0,
      title: "Noch nichts markiert",
      body: "Markiere mindestens eine Antwort.",
      missing: [],
      strengths: []
    };
  }

  const correctSet = new Set(question.correctOptionIds || []);
  const selectedSet = new Set(selectedIds);
  let hits = 0;
  let wrong = 0;

  selectedSet.forEach((id) => {
    if (correctSet.has(id)) hits += 1;
    else wrong += 1;
  });

  const score = clamp(Math.round(((hits - wrong * 0.75) / correctSet.size) * 100));
  const fullyCorrect = hits === correctSet.size && wrong === 0;

  return {
    status: fullyCorrect ? "success" : score >= 55 ? "warn" : "error",
    score,
    title: fullyCorrect ? "Vollständig richtig" : score >= 55 ? "Teilweise richtig" : "Zu ungenau",
    body: question.explanation,
    missing: fullyCorrect ? [] : ["Vergleiche die markierten Aussagen nochmals mit der historischen Logik."],
    strengths: hits ? [`Du hast ${hits} zutreffende Aussage${hits === 1 ? "" : "n"} markiert.`] : []
  };
}

function evaluateDragOrder(question, orderedIds) {
  const expectedOrder = question.correctOrder || [];
  if (!orderedIds.length) {
    return {
      status: "error",
      score: 0,
      title: "Noch nicht sortiert",
      body: "Ordne zuerst die Karten per Drag-and-drop.",
      missing: [],
      strengths: []
    };
  }

  let correctPositions = 0;
  const misplaced = [];
  orderedIds.forEach((id, index) => {
    if (expectedOrder[index] === id) {
      correctPositions += 1;
    } else {
      const item = (question.items || []).find((entry) => entry.id === id);
      if (item) misplaced.push(item.label);
    }
  });

  const score = clamp(Math.round((correctPositions / expectedOrder.length) * 100));
  const fullyCorrect = correctPositions === expectedOrder.length;

  return {
    status: fullyCorrect ? "success" : score >= 60 ? "warn" : "error",
    score,
    title: fullyCorrect ? "Chronologie stimmig" : score >= 60 ? "Teilweise stimmig" : "Reihenfolge noch unsicher",
    body: question.explanation,
    missing: fullyCorrect ? [] : misplaced.slice(0, 4).map((item) => `Noch prüfen: ${item}`),
    strengths: fullyCorrect ? ["Die Abfolge ist historisch schlüssig geordnet."] : [`${correctPositions} von ${expectedOrder.length} Positionen stimmen bereits.`]
  };
}

function evaluateShortText(question, answer) {
  const trimmed = answer.trim();
  if (!trimmed) {
    return {
      status: "error",
      score: 0,
      title: "Noch keine Antwort",
      body: "Schreibe zuerst eine kurze Erklärung.",
      missing: [],
      strengths: []
    };
  }

  const { hits, missing } = countMatchedConceptGroups(trimmed, question);
  const score = clamp(Math.round((hits.length / question.conceptGroups.length) * 100));
  const success = hits.length >= (question.successThreshold || question.conceptGroups.length);

  return {
    status: success ? "success" : score >= 50 ? "warn" : "error",
    score,
    title: success ? "Begrifflich tragfähig" : score >= 50 ? "Teilweise tragfähig" : "Noch zu dünn",
    body: success
      ? "Die Antwort deckt die geforderten Sinnschichten ab."
      : "Die Antwort hat bereits einen Kern, braucht aber noch mehr historische Präzision.",
    missing,
    strengths: hits
  };
}

function evaluateOpenAnalysis(question, answer) {
  const trimmed = answer.trim();
  if (!trimmed) {
    return {
      status: "error",
      score: 0,
      title: "Noch keine Antwort",
      body: "Schreibe zuerst eine zusammenhängende Deutung.",
      missing: [],
      strengths: []
    };
  }

  const normalizedAnswer = normalizeText(trimmed);
  const wc = wordCount(trimmed);
  const reasoningMarkers = ["weil", "deshalb", "somit", "waehrend", "hingegen", "einerseits", "andererseits"];
  const nuanceMarkers = ["jedoch", "allerdings", "zugleich", "dennoch", "nicht nur", "spannungsfeld", "ambivalent"];
  const chronologyMarkers = ["1945", "1948", "1949", "1953", "1956", "1961", "1968", "1980", "1981", "1989", "1990"];
  const reasoningHits = reasoningMarkers.filter((marker) => containsVariant(normalizedAnswer, marker));
  const nuanceHits = nuanceMarkers.filter((marker) => containsVariant(normalizedAnswer, marker));
  const chronologyHits = chronologyMarkers.filter((marker) => containsVariant(normalizedAnswer, marker));
  const sourceHits = (question.sourceHints || []).filter((hint) => containsVariant(normalizedAnswer, hint));
  const structure = evaluateStructure(normalizedAnswer, question);

  const strengths = [];
  const missing = [];
  let conceptHits = 0;

  (question.rubric || []).forEach((criterion) => {
    const found = criterion.keywords.some((keyword) => containsVariant(normalizedAnswer, keyword));
    if (found) {
      conceptHits += 1;
      strengths.push(criterion.concept);
    } else {
      missing.push(criterion.concept);
    }
  });

  const targetStructureHits = question.structureExpectations?.targetHits || 4;
  const conceptScore = Math.round((conceptHits / question.rubric.length) * 50);
  const structureScore = Math.round((Math.min(structure.hits.length, targetStructureHits) / targetStructureHits) * 20);
  const sourceScore = Math.min(10, sourceHits.length * 4 + Math.min(2, chronologyHits.length) * 1);
  const nuanceScore = Math.min(10, nuanceHits.length * 3 + reasoningHits.length * 2);
  const lengthScore = Math.min(10, Math.round((wc / question.minWords) * 10));
  let total = clamp(conceptScore + structureScore + sourceScore + nuanceScore + lengthScore);

  if (wc < Math.round(question.minWords * 0.65)) total = Math.min(total, 54);
  if (conceptHits < Math.ceil(question.rubric.length / 2)) total = Math.min(total, 59);
  if (structure.mandatoryMissing.length) total = Math.min(total, 64);
  if (sourceHits.length === 0) total = Math.min(total, 69);

  let title = "Ausbaufähig";
  let status = "error";
  let body =
    "Die Antwort hat eine Richtung, braucht aber noch mehr Struktur, Materialbezug und begriffliche Schärfe.";

  if (total >= 85) {
    title = "Sehr differenziert";
    status = "success";
    body =
      "Die Antwort verbindet mehrere Erklärungsebenen, arbeitet mit Materialbezug und zeigt eine eigene historische Gewichtung.";
  } else if (total >= 68) {
    title = "Differenziert";
    status = "warn";
    body =
      "Die Antwort ist tragfähig, kann aber noch klarer gewichten oder genauer auf einzelne Materialien Bezug nehmen.";
  } else if (total >= 50) {
    title = "Teilweise tragfähig";
    status = "warn";
    body =
      "Wichtige Aspekte sind angesprochen, aber die Antwort bleibt noch zu kurz oder zu wenig verknüpft.";
  }

  return {
    status,
    score: total,
    title,
    body,
    missing: [...missing, ...structure.mandatoryMissing.map((item) => `Strukturbaustein: ${item}`)],
    strengths,
    breakdown: [
      `Inhalt: ${conceptHits}/${question.rubric.length} Kriterien`,
      `Struktur: ${structure.hits.length}/${targetStructureHits} Signale`,
      `Materialbezug: ${sourceHits.length} Treffer`,
      `Nuancierung: ${nuanceHits.length + reasoningHits.length} Signale`,
      `Umfang: ${wc} Wörter`
    ]
  };
}

function evaluateQuestion(question, userInput) {
  if (question.type === "single-choice") {
    return evaluateSingleChoice(question, userInput.answerValue || "");
  }

  if (question.type === "multi-select") {
    return evaluateMultiSelect(question, userInput.selectedIds || []);
  }

  if (question.type === "drag-order") {
    return evaluateDragOrder(question, userInput.orderedIds || []);
  }

  if (question.type === "short-text") {
    return evaluateShortText(question, userInput.answerText || "");
  }

  return evaluateOpenAnalysis(question, userInput.answerText || "");
}

function isMastered(questionId) {
  const answer = getAnswer(questionId);
  if (!answer?.result) return false;
  const question = getQuestionById(questionId);
  if (!question) return false;
  if (question.type === "single-choice") return answer.result.score === 100;
  if (question.type === "multi-select") return answer.result.score >= 80;
  if (question.type === "drag-order") return answer.result.score >= 80;
  return answer.result.score >= 68;
}

function buildStats() {
  const allQuestions = modules.flatMap((module) => module.questions);
  const answered = allQuestions.filter((question) => Boolean(getAnswer(question.id)?.result));
  const mastered = allQuestions.filter((question) => isMastered(question.id));
  const masteredModules = modules.filter((module) => module.questions.every((question) => isMastered(question.id)));
  const unlockedModules = modules.filter((module, index) => isModuleUnlocked(index));
  const averageScore = answered.length
    ? answered.reduce((sum, question) => sum + (getAnswer(question.id)?.result?.score || 0), 0) / answered.length
    : 0;

  return [
    { label: "Freigeschaltet", value: `${unlockedModules.length} / ${modules.length}` },
    { label: "Fragen gelöst", value: `${answered.length} / ${allQuestions.length}` },
    { label: "Sicher gemeistert", value: `${mastered.length}` },
    { label: "Durchschnitt", value: formatPercent(averageScore) }
  ];
}

function renderStats() {
  elements.statsGrid.innerHTML = buildStats()
    .map(
      (stat) => `
        <article class="stat-card">
          <span>${escapeHtml(stat.label)}</span>
          <strong>${escapeHtml(stat.value)}</strong>
        </article>
      `
    )
    .join("");
}

function getTeacherSummary(question) {
  if (question.type === "single-choice") {
    return "Prüft die zentrale historische Grundentscheidung dieser Station.";
  }
  if (question.type === "multi-select") {
    return "Prüft, ob mehrere historische Faktoren gleichzeitig erkannt und gegeneinander abgegrenzt werden.";
  }
  if (question.type === "drag-order") {
    return "Prüft Chronologie, Strukturverständnis und die Fähigkeit, Ereignisse oder Entwicklungsschritte sinnvoll zu ordnen.";
  }
  if (question.type === "short-text") {
    return `Diagnose der Begriffsarbeit: ${question.conceptGroups.map((group) => group.label).join("; ")}.`;
  }
  return `Diagnose der Transferleistung: ${question.rubric.map((entry) => entry.concept).join("; ")}.`;
}

function renderModuleNav() {
  elements.moduleNav.innerHTML = modules
    .map((module, index) => {
      const masteredCount = module.questions.filter((question) => isMastered(question.id)).length;
      const isActive = module.id === state.activeModuleId;
      const score = getModuleScore(module);
      const unlocked = isModuleUnlocked(index);
      const previousModule = modules[index - 1];
      return `
        <button class="module-button${isActive ? " active" : ""}${unlocked ? "" : " locked"}" type="button" data-module-id="${escapeHtml(module.id)}" ${unlocked ? "" : "disabled"}>
          <div>
            <span class="module-step">${escapeHtml(module.step)}</span>
            <h3>${escapeHtml(module.title)}</h3>
          </div>
          <p>${escapeHtml(module.intro)}</p>
          <div class="module-button-footer">
            <span>${unlocked ? escapeHtml(module.era) : "gesperrt"}</span>
            <span>${formatPercent(score)}</span>
          </div>
          <div class="module-button-footer">
            <span>${masteredCount}/${module.questions.length} gemeistert</span>
            <span>${unlocked ? "freigeschaltet" : `ab 60 % in ${escapeHtml(previousModule?.title || "Station 1")}`}</span>
          </div>
        </button>
      `;
    })
    .join("");

  elements.moduleNav.querySelectorAll("[data-module-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeModuleId = button.dataset.moduleId;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderModuleHeader(module) {
  const masteredCount = module.questions.filter((question) => isMastered(question.id)).length;
  const moduleIndex = modules.findIndex((entry) => entry.id === module.id);
  const unlocked = isModuleUnlocked(moduleIndex);
  const moduleScore = getModuleScore(module);

  elements.moduleHeader.innerHTML = `
    <div class="module-title-row">
      <div>
        <p class="eyebrow">Station ${escapeHtml(module.step)}</p>
        <h2>${escapeHtml(module.title)}</h2>
        <p class="module-copy">${escapeHtml(module.intro)}</p>
        <div class="module-kicker">
          <span class="module-pill">${escapeHtml(module.era)}</span>
          <span class="module-pill">${module.resources.length} Materialien</span>
          <span class="module-pill">${masteredCount}/${module.questions.length} Fragen gemeistert</span>
          <span class="module-pill">${formatPercent(moduleScore)} Modulscore</span>
          <span class="module-pill">${unlocked ? "freigeschaltet" : "gesperrt"}</span>
        </div>
      </div>
      <aside class="module-meta-card">
        <strong>Lernziel</strong>
        <p class="module-copy">${escapeHtml(module.goal)}</p>
      </aside>
    </div>

    <div class="module-grid">
      <article class="module-box">
        <h3>Arbeitsroute</h3>
        <p class="module-copy">${escapeHtml(module.route)}</p>
      </article>
      <article class="module-box">
        <h3>${state.teacherMode ? "Lehrpersonenhinweis" : "Arbeitsfokus"}</h3>
        <p class="module-copy">${escapeHtml(state.teacherMode ? module.teacherNote : module.goal)}</p>
      </article>
      <article class="module-box">
        <h3>Arbeitsaufträge</h3>
        <ul class="module-list">
          ${module.prompts.map((prompt) => `<li>${escapeHtml(prompt)}</li>`).join("")}
        </ul>
      </article>
      <article class="module-box">
        <h3>Didaktischer Fokus</h3>
        <p class="module-copy">
          Diese Station verbindet Materialerschließung mit sofort rückgemeldeter Begriffsarbeit
          und einer offenen Transferfrage.
        </p>
      </article>
    </div>
  `;
}

function renderTeacherPanel(module) {
  if (!state.teacherMode) {
    elements.teacherPanel.classList.add("hidden");
    elements.teacherPanel.innerHTML = "";
    return;
  }

  const toolkit = module.teacherToolkit || {};
  elements.teacherPanel.classList.remove("hidden");
  elements.teacherPanel.innerHTML = `
    <details class="teacher-details">
      <summary>Lehrpersonenansicht dieser Station öffnen</summary>
      <div class="teacher-details-body">
        <div class="section-head">
          <div>
            <p class="eyebrow">Lehrpersonenmodus</p>
            <h2>Didaktische Zusatzansicht</h2>
          </div>
          <p class="section-copy">
            Die bearbeitbaren Fragen stehen oberhalb. Diese Zusatzansicht bündelt Zeitbedarf,
            Diagnosefokus, Fehlvorstellungen und Kommentare zu jeder Aufgabe.
          </p>
        </div>
        <div class="teacher-grid">
          <article class="teacher-card">
            <h3>Zeitbedarf</h3>
            <p>${escapeHtml(toolkit.duration || "45 Minuten")}</p>
          </article>
          <article class="teacher-card">
            <h3>Sozialformen</h3>
            <ul class="module-list">
              ${(toolkit.socialForms || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
          <article class="teacher-card">
            <h3>Diagnosefokus</h3>
            <ul class="module-list">
              ${(toolkit.assessmentFocus || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
          <article class="teacher-card">
            <h3>Typische Fehlvorstellungen</h3>
            <ul class="module-list">
              ${(toolkit.misconceptions || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
          <article class="teacher-card">
            <h3>Möglicher Leistungsnachweis</h3>
            <p>${escapeHtml(toolkit.product || "Vergleichender Kurzkommentar oder strukturierte Transferantwort.")}</p>
          </article>
          <article class="teacher-card">
            <h3>Erweiterung</h3>
            <p>${escapeHtml(toolkit.extension || "Materialien im Plenum kontrovers sichern und anschließend schriftlich verdichten.")}</p>
          </article>
        </div>
        <div class="teacher-map">
          ${module.questions
            .map(
              (question, index) => `
                <article class="teacher-map-card">
                  <h4>Lehrkommentar zu Aufgabe ${index + 1}</h4>
                  <p><strong>Arbeitsfrage:</strong> ${escapeHtml(question.prompt)}</p>
                  <p>${escapeHtml(getTeacherSummary(question))}</p>
                  ${
                    question.teacherPrompt
                      ? `<p><strong>Impuls:</strong> ${escapeHtml(question.teacherPrompt)}</p>`
                      : ""
                  }
                  ${
                    question.commonPitfall
                      ? `<p><strong>Typische Schwachstelle:</strong> ${escapeHtml(question.commonPitfall)}</p>`
                      : ""
                  }
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </details>
  `;
}

function groupResources(resources) {
  const map = new Map();
  resources.forEach((resource) => {
    if (!map.has(resource.bucket)) {
      map.set(resource.bucket, []);
    }
    map.get(resource.bucket).push(resource);
  });
  return Array.from(map.entries());
}

function renderResources(module) {
  const moduleIndex = modules.findIndex((entry) => entry.id === module.id);
  const unlocked = isModuleUnlocked(moduleIndex);
  if (!unlocked) {
    const previousModule = modules[moduleIndex - 1];
    elements.resourceGroups.innerHTML = `
      <section class="resource-group">
        <h3>Ressourcen noch gesperrt</h3>
        <p class="module-copy">
          Diese Station wird erst freigeschaltet, wenn du in
          <strong>${escapeHtml(previousModule?.title || "der vorangehenden Station")}</strong>
          mindestens 60 % erreichst.
        </p>
      </section>
    `;
    return;
  }

  elements.resourceGroups.innerHTML = groupResources(module.resources)
    .map(([bucket, resources]) => {
      return `
        <section class="resource-group">
          <h3>${escapeHtml(bucket)}</h3>
          <div class="resource-grid">
            ${resources
              .map((resource) => {
                const actionLabel = resource.type === "Video" ? "Video öffnen" : "Material öffnen";
                return `
                  <article class="resource-card">
                    <h4>${escapeHtml(resource.title)}</h4>
                    <div class="resource-type-row">
                      <span class="tag">${escapeHtml(resource.type)}</span>
                      ${resource.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
                    </div>
                    <p>${escapeHtml(resource.focus)}</p>
                    <div class="resource-actions">
                      <a class="btn ghost small" href="${escapeHtml(resource.link)}" target="_blank" rel="noreferrer">${actionLabel}</a>
                    </div>
                    ${
                      resource.type === "Audio"
                        ? `
                          <audio controls preload="none" class="audio-frame">
                            <source src="${escapeHtml(resource.link)}" type="audio/mpeg" />
                          </audio>
                        `
                        : ""
                    }
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderSourceChips(question, resourceMap) {
  return (question.sourceIds || [])
    .map((resourceId) => resourceMap.get(resourceId))
    .filter(Boolean)
    .map((resource) => `<span class="source-chip">${escapeHtml(resource.title)}</span>`)
    .join("");
}

function renderFeedback(result) {
  if (!result) {
    return `
      <div class="feedback-box neutral">
        <p class="feedback-title">Noch nicht korrigiert</p>
        <div class="feedback-body">Löse die Frage, um sofort Rückmeldung zu erhalten.</div>
      </div>
    `;
  }

  return `
    <div class="feedback-box ${escapeHtml(result.status)}">
      <p class="feedback-title">
        <span>${escapeHtml(result.title)}</span>
        <span>${escapeHtml(formatPercent(result.score))}</span>
      </p>
      <div class="feedback-body">${escapeHtml(result.body)}</div>
      ${
        result.strengths && result.strengths.length
          ? `<ul class="feedback-list">${result.strengths
              .map((item) => `<li>Stark: ${escapeHtml(item)}</li>`)
              .join("")}</ul>`
          : ""
      }
      ${
        result.missing && result.missing.length
          ? `<ul class="feedback-list">${result.missing
              .map((item) => `<li>Noch ausbauen: ${escapeHtml(item)}</li>`)
              .join("")}</ul>`
          : ""
      }
      ${
        state.teacherMode && result.breakdown && result.breakdown.length
          ? `<ul class="feedback-breakdown">${result.breakdown
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}</ul>`
          : ""
      }
    </div>
  `;
}

function renderDragOrderField(question, answer) {
  const savedOrder = answer?.userInput?.orderedIds || [];
  const itemMap = new Map((question.items || []).map((item) => [item.id, item]));
  const orderedItems = savedOrder.length
    ? savedOrder.map((id) => itemMap.get(id)).filter(Boolean)
    : question.items || [];

  return `
    <div class="drag-order" data-drag-question="${escapeHtml(question.id)}">
      ${orderedItems
        .map(
          (item, index) => `
            <div class="drag-card" draggable="true" data-drag-item-id="${escapeHtml(item.id)}">
              <span class="drag-index">${index + 1}</span>
              <div class="drag-copy">
                <strong>${escapeHtml(item.label)}</strong>
                ${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ""}
              </div>
              <span class="drag-handle" aria-hidden="true">⋮⋮</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderQuestionCard(question, index, resourceMap) {
  const answer = getAnswer(question.id);
  const sourceChips = renderSourceChips(question, resourceMap);
  let answerField = "";

  if (question.type === "single-choice") {
    const savedValue = answer?.userInput?.answerValue || "";
    answerField = `
      <div class="option-list">
        ${question.options
          .map(
            (option) => `
              <label class="option-item">
                <input type="radio" name="${escapeHtml(question.id)}" value="${escapeHtml(option.id)}" ${
                  savedValue === option.id ? "checked" : ""
                } />
                <span>${escapeHtml(option.text)}</span>
              </label>
            `
          )
          .join("")}
      </div>
    `;
  } else if (question.type === "multi-select") {
    const savedIds = new Set(answer?.userInput?.selectedIds || []);
    answerField = `
      <div class="option-list">
        ${question.options
          .map(
            (option) => `
              <label class="option-item">
                <input type="checkbox" value="${escapeHtml(option.id)}" ${
                  savedIds.has(option.id) ? "checked" : ""
                } data-question-checkbox="${escapeHtml(question.id)}" />
                <span>${escapeHtml(option.text)}</span>
              </label>
            `
          )
          .join("")}
      </div>
    `;
  } else if (question.type === "drag-order") {
    answerField = renderDragOrderField(question, answer);
  } else {
    const savedText = answer?.userInput?.answerText || "";
    const fieldClass = question.type === "open-analysis" ? "answer-field large" : "answer-field";
    answerField = `
      <textarea
        class="${fieldClass}"
        data-question-text="${escapeHtml(question.id)}"
        placeholder="${escapeHtml(question.placeholder || "")}"
      >${escapeHtml(savedText)}</textarea>
    `;
  }

  return `
    <article class="question-card${isMastered(question.id) ? " mastered" : ""}" id="${escapeHtml(question.id)}">
      <div class="question-topline">
        <div>
          <span class="question-type">${escapeHtml(question.challenge)}</span>
          <h3>Frage ${index + 1}: ${escapeHtml(question.prompt)}</h3>
        </div>
        <div class="question-score">${escapeHtml(answer?.result ? formatPercent(answer.result.score) : "offen")}</div>
      </div>
      <p class="question-help">${escapeHtml(question.help)}</p>
      <div class="source-row">${sourceChips}</div>
      ${answerField}
      <div class="question-actions">
        <button class="btn primary small" type="button" data-evaluate-question="${escapeHtml(question.id)}">
          Sofortkorrektur
        </button>
      </div>
      ${renderFeedback(answer?.result)}
      ${
        state.teacherMode
          ? `
            <div class="teacher-inline">
              <h4>Lehrpersonenkommentar</h4>
              <p>${escapeHtml(question.teacherPrompt || getTeacherSummary(question))}</p>
              ${
                question.commonPitfall
                  ? `<p><strong>Typische Schwachstelle:</strong> ${escapeHtml(question.commonPitfall)}</p>`
                  : ""
              }
            </div>
          `
          : ""
      }
      <details>
        <summary>Musterlösung anzeigen</summary>
        <div class="model-answer">${escapeHtml(question.modelAnswer)}</div>
      </details>
    </article>
  `;
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".drag-card:not(.dragging)")];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY, element: null }
  ).element;
}

function activateDragAndDrop() {
  elements.questionList.querySelectorAll("[data-drag-question]").forEach((container) => {
    let dragged = null;

    container.querySelectorAll(".drag-card").forEach((card) => {
      card.addEventListener("dragstart", () => {
        dragged = card;
        card.classList.add("dragging");
      });

      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
        dragged = null;
      });
    });

    container.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (!dragged) return;
      const afterElement = getDragAfterElement(container, event.clientY);
      if (!afterElement) {
        container.appendChild(dragged);
      } else if (afterElement !== dragged) {
        container.insertBefore(dragged, afterElement);
      }
    });

    container.addEventListener("drop", (event) => {
      event.preventDefault();
    });
  });
}

function renderQuestions(module) {
  const moduleIndex = modules.findIndex((entry) => entry.id === module.id);
  const unlocked = isModuleUnlocked(moduleIndex);
  if (!unlocked) {
    const previousModule = modules[moduleIndex - 1];
    elements.questionList.innerHTML = `
      <article class="question-card locked">
        <div class="question-topline">
          <div>
            <span class="question-type">Freischaltung</span>
            <h3>Nächste Station gesperrt</h3>
          </div>
          <div class="question-score">${formatPercent(getModuleScore(previousModule))}</div>
        </div>
        <p class="question-help">
          Erreiche zuerst mindestens 60 % im vorangehenden Modul
          <strong>${escapeHtml(previousModule?.title || "")}</strong>. Danach werden Fragen und
          Materialien dieser Station automatisch freigeschaltet.
        </p>
      </article>
    `;
    return;
  }

  const resourceMap = getResourceMap(module);
  elements.questionList.innerHTML = module.questions
    .map((question, index) => renderQuestionCard(question, index, resourceMap))
    .join("");

  elements.questionList.querySelectorAll("[data-evaluate-question]").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.dataset.evaluateQuestion;
      evaluateAndStore(questionId);
      renderApp();
      const target = document.getElementById(questionId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  activateDragAndDrop();
}

function collectUserInput(question) {
  if (question.type === "single-choice") {
    const selected = document.querySelector(`input[name="${question.id}"]:checked`);
    return { answerValue: selected?.value || "" };
  }

  if (question.type === "multi-select") {
    const selectedIds = Array.from(document.querySelectorAll(`[data-question-checkbox="${question.id}"]:checked`)).map(
      (input) => input.value
    );
    return { selectedIds };
  }

  if (question.type === "drag-order") {
    const orderedIds = Array.from(
      document.querySelectorAll(`[data-drag-question="${question.id}"] [data-drag-item-id]`)
    ).map((item) => item.dataset.dragItemId);
    return { orderedIds };
  }

  const textarea = document.querySelector(`[data-question-text="${question.id}"]`);
  return { answerText: textarea?.value || "" };
}

function evaluateAndStore(questionId) {
  const question = getQuestionById(questionId);
  if (!question) return;
  const userInput = collectUserInput(question);
  const result = evaluateQuestion(question, userInput);
  setAnswer(questionId, { userInput, result, updatedAt: Date.now() });
}

function jumpToFirstOpenQuestion() {
  for (const module of modules) {
    const moduleIndex = modules.findIndex((entry) => entry.id === module.id);
    if (!isModuleUnlocked(moduleIndex)) continue;
    const question = module.questions.find((entry) => entry.type === "open-analysis");
    if (question) {
      state.activeModuleId = module.id;
      renderApp();
      requestAnimationFrame(() => {
        const target = document.getElementById(question.id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
  }
}

function unlockTeacherMode() {
  state.teacherAuthorized = true;
  state.teacherMode = true;
  state.teacherAccessOpen = false;
  saveStore();
  renderApp();
  requestAnimationFrame(() => {
    elements.questionList.closest(".panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function lockTeacherMode() {
  state.teacherAuthorized = false;
  state.teacherMode = false;
  state.teacherAccessOpen = false;
  saveStore();
  renderApp();
}

function renderTeacherAccessPanel() {
  if (!elements.teacherAccessPanel) return;

  if (!state.teacherAuthorized && !state.teacherAccessOpen) {
    elements.teacherAccessPanel.classList.add("hidden");
    elements.teacherAccessPanel.innerHTML = "";
    return;
  }

  elements.teacherAccessPanel.classList.remove("hidden");

  if (!state.teacherAuthorized) {
    elements.teacherAccessPanel.innerHTML = `
      <div class="teacher-access-wrap">
        <div>
          <p class="eyebrow">Lehrer*innenzugang</p>
          <h2>Lehrpersonenmodus freischalten</h2>
          <p class="section-copy">
            Der Lehrpersonenmodus zeigt didaktische Hinweise direkt bei den Aufgaben und zusätzlich
            eine einklappbare Diagnoseansicht unter dem Fragenraum.
          </p>
        </div>
        <form class="teacher-access-form" id="teacher-access-form">
          <label for="teacher-access-password">Passwort</label>
          <input
            id="teacher-access-password"
            name="teacher-access-password"
            type="password"
            autocomplete="current-password"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            placeholder="Passwort eingeben"
            required
          />
          <div class="teacher-access-actions">
            <button class="btn primary" type="submit">Freischalten</button>
            <button class="btn ghost" type="button" id="teacher-access-close">Schließen</button>
          </div>
          <p class="teacher-access-status" id="teacher-access-status" aria-live="polite"></p>
        </form>
      </div>
    `;

    const form = document.getElementById("teacher-access-form");
    const input = document.getElementById("teacher-access-password");
    const status = document.getElementById("teacher-access-status");
    const closeButton = document.getElementById("teacher-access-close");

    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = input?.value.trim() || "";
      if (!isTeacherPasswordValid(value)) {
        if (status) status.textContent = "Passwort nicht korrekt.";
        return;
      }
      unlockTeacherMode();
    });

    closeButton?.addEventListener("click", () => {
      state.teacherAccessOpen = false;
      renderTeacherAccessPanel();
    });

    requestAnimationFrame(() => input?.focus());
    return;
  }

  elements.teacherAccessPanel.innerHTML = `
    <div class="teacher-access-wrap teacher-access-status-card">
      <div>
        <p class="eyebrow">Lehrpersonenmodus</p>
        <h2>${state.teacherMode ? "Didaktische Hinweise sind aktiv" : "Lehrkommentare sind ausgeblendet"}</h2>
        <p class="section-copy">
          ${state.teacherMode
            ? "Unter den Aufgaben erscheinen jetzt Lehrkommentare. Die vertiefte Diagnoseansicht liegt eingeklappt unter dem Fragenraum."
            : "Der Zugang ist freigeschaltet. Du kannst die Lehrkommentare jederzeit wieder einblenden."}
        </p>
      </div>
      <div class="teacher-access-actions">
        <button class="btn primary" type="button" id="teacher-access-toggle">
          ${state.teacherMode ? "Lehrkommentare ausblenden" : "Lehrkommentare einblenden"}
        </button>
        <button class="btn ghost" type="button" id="teacher-access-lock">Zugang sperren</button>
      </div>
    </div>
  `;

  document.getElementById("teacher-access-toggle")?.addEventListener("click", () => {
    state.teacherMode = !state.teacherMode;
    saveStore();
    renderApp();
  });

  document.getElementById("teacher-access-lock")?.addEventListener("click", lockTeacherMode);
}

function renderApp() {
  const activeIndex = modules.findIndex((entry) => entry.id === state.activeModuleId);
  if (activeIndex > -1 && !isModuleUnlocked(activeIndex)) {
    state.activeModuleId = getFirstAvailableModuleId();
  }

  const module = getActiveModule();
  if (!module) return;
  if (!state.teacherAuthorized) {
    state.teacherMode = false;
  }
  elements.teacherModeButton.textContent = state.teacherMode
    ? "Lehrkommentare ausblenden"
    : state.teacherAuthorized
      ? "Lehrkommentare einblenden"
      : "Lehrer*innenzugang";
  elements.teacherModeButton.classList.toggle("is-active", state.teacherMode);
  renderTeacherAccessPanel();
  renderStats();
  renderModuleNav();
  renderModuleHeader(module);
  renderTeacherPanel(module);
  renderResources(module);
  renderQuestions(module);
}

elements.startRouteButton.addEventListener("click", () => {
  state.activeModuleId = modules[0]?.id || null;
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

elements.openFirstOpenButton.addEventListener("click", jumpToFirstOpenQuestion);
elements.teacherModeButton.addEventListener("click", () => {
  if (!state.teacherAuthorized) {
    state.teacherAccessOpen = !state.teacherAccessOpen;
    renderTeacherAccessPanel();
    if (state.teacherAccessOpen) {
      requestAnimationFrame(() => {
        elements.teacherAccessPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    return;
  }
  state.teacherMode = !state.teacherMode;
  saveStore();
  renderApp();
});

const persisted = loadStore();
state.answers = persisted.answers;
state.teacherMode = persisted.teacherMode;
state.teacherAuthorized = persisted.teacherAuthorized;
renderApp();
