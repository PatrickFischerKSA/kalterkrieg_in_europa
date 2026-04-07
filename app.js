const storageKey = "kalterkrieg-in-europa-progress";
const modules = window.COLD_WAR_MODULES || [];
const audioItems = window.COLD_WAR_AUDIO || [];
const structureSpec = {
  thesis: ["ich argumentiere", "ich vertrete", "meine these", "entscheidend ist", "zentral ist", "ich bewerte"],
  evidence: ["das video", "das material", "die quelle", "zeigt", "deutlich wird", "im video", "im material"],
  comparison: ["waehrend", "hingegen", "im unterschied", "gemeinsam", "im vergleich", "andererseits"],
  nuance: ["jedoch", "allerdings", "zugleich", "nicht nur", "einerseits", "andererseits", "dennoch", "spannungsfeld"],
  conclusion: ["insgesamt", "daher", "somit", "deshalb", "abschliessend", "fazit"]
};

const state = {
  activeModuleId: modules[0]?.id || null,
  teacherMode: false,
  answers: {}
};

const elements = {
  statsGrid: document.getElementById("stats-grid"),
  moduleNav: document.getElementById("module-nav"),
  moduleHeader: document.getElementById("module-header"),
  teacherPanel: document.getElementById("teacher-panel"),
  resourceGroups: document.getElementById("resource-groups"),
  questionList: document.getElementById("question-list"),
  audioLounge: document.getElementById("audio-lounge"),
  startRouteButton: document.getElementById("start-route-button"),
  openFirstOpenButton: document.getElementById("open-first-open-button"),
  teacherModeButton: document.getElementById("teacher-mode-button")
};

function loadStore() {
  try {
    const raw = localStorage.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== "object") {
      return { answers: {}, teacherMode: false };
    }
    if ("answers" in parsed || "teacherMode" in parsed) {
      return {
        answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {},
        teacherMode: Boolean(parsed.teacherMode)
      };
    }
    return { answers: parsed, teacherMode: false };
  } catch {
    return { answers: {}, teacherMode: false };
  }
}

function saveStore() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      answers: state.answers,
      teacherMode: state.teacherMode
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
      body: "Waehle zuerst eine Antwort aus.",
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
    missing: correct ? [] : ["Pruefe den Kernbegriff der Aufgabe erneut."],
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
    title: fullyCorrect ? "Vollstaendig richtig" : score >= 55 ? "Teilweise richtig" : "Zu ungenau",
    body: question.explanation,
    missing: fullyCorrect ? [] : ["Vergleiche die markierten Aussagen nochmals mit der historischen Logik."],
    strengths: hits ? [`Du hast ${hits} zutreffende Aussage${hits === 1 ? "" : "n"} markiert.`] : []
  };
}

function evaluateShortText(question, answer) {
  const trimmed = answer.trim();
  if (!trimmed) {
    return {
      status: "error",
      score: 0,
      title: "Noch keine Antwort",
      body: "Schreibe zuerst eine kurze Erklaerung.",
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
    title: success ? "Begrifflich tragfaehig" : score >= 50 ? "Teilweise tragfaehig" : "Noch zu duenn",
    body: success
      ? "Die Antwort deckt die geforderten Sinnschichten ab."
      : "Die Antwort hat bereits einen Kern, braucht aber noch mehr historische Praezision.",
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
      body: "Schreibe zuerst eine zusammenhaengende Deutung.",
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

  let title = "Ausbaufaehig";
  let status = "error";
  let body =
    "Die Antwort hat eine Richtung, braucht aber noch mehr Struktur, Materialbezug und begriffliche Schaerfe.";

  if (total >= 85) {
    title = "Sehr differenziert";
    status = "success";
    body =
      "Die Antwort verbindet mehrere Erklaerungsebenen, arbeitet mit Materialbezug und zeigt eine eigene historische Gewichtung.";
  } else if (total >= 68) {
    title = "Differenziert";
    status = "warn";
    body =
      "Die Antwort ist tragfaehig, kann aber noch klarer gewichten oder genauer auf einzelne Materialien Bezug nehmen.";
  } else if (total >= 50) {
    title = "Teilweise tragfaehig";
    status = "warn";
    body =
      "Wichtige Aspekte sind angesprochen, aber die Antwort bleibt noch zu kurz oder zu wenig verknuepft.";
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
      `Umfang: ${wc} Woerter`
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
  return answer.result.score >= 68;
}

function buildStats() {
  const allQuestions = modules.flatMap((module) => module.questions);
  const answered = allQuestions.filter((question) => Boolean(getAnswer(question.id)?.result));
  const mastered = allQuestions.filter((question) => isMastered(question.id));
  const masteredModules = modules.filter((module) => module.questions.every((question) => isMastered(question.id)));
  const averageScore = answered.length
    ? answered.reduce((sum, question) => sum + (getAnswer(question.id)?.result?.score || 0), 0) / answered.length
    : 0;

  return [
    { label: "Stationen", value: `${masteredModules.length} / ${modules.length}` },
    { label: "Fragen geloest", value: `${answered.length} / ${allQuestions.length}` },
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
    return "Prueft die zentrale historische Grundentscheidung dieser Station.";
  }
  if (question.type === "multi-select") {
    return "Prueft, ob mehrere historische Faktoren gleichzeitig erkannt und gegeneinander abgegrenzt werden.";
  }
  if (question.type === "short-text") {
    return `Diagnose der Begriffsarbeit: ${question.conceptGroups.map((group) => group.label).join("; ")}.`;
  }
  return `Diagnose der Transferleistung: ${question.rubric.map((entry) => entry.concept).join("; ")}.`;
}

function renderModuleNav() {
  elements.moduleNav.innerHTML = modules
    .map((module) => {
      const masteredCount = module.questions.filter((question) => isMastered(question.id)).length;
      const isActive = module.id === state.activeModuleId;
      return `
        <button class="module-button${isActive ? " active" : ""}" type="button" data-module-id="${escapeHtml(module.id)}">
          <div>
            <span class="module-step">${escapeHtml(module.step)}</span>
            <h3>${escapeHtml(module.title)}</h3>
          </div>
          <p>${escapeHtml(module.intro)}</p>
          <div class="module-button-footer">
            <span>${escapeHtml(module.era)}</span>
            <span>${masteredCount}/${module.questions.length} gemeistert</span>
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
        <h3>Arbeitsauftraege</h3>
        <ul class="module-list">
          ${module.prompts.map((prompt) => `<li>${escapeHtml(prompt)}</li>`).join("")}
        </ul>
      </article>
      <article class="module-box">
        <h3>Didaktischer Fokus</h3>
        <p class="module-copy">
          Diese Station verbindet Materialerschliessung mit sofort rueckgemeldeter Begriffsarbeit
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
    <div class="section-head">
      <div>
        <p class="eyebrow">Lehrpersonenmodus</p>
        <h2>Unterrichtsarchitektur der Station</h2>
      </div>
      <p class="section-copy">
        Diese Zusatzansicht zeigt Zeitbedarf, Diagnosefokus, typische Fehlvorstellungen und die
        fachliche Funktion jeder eingebauten Frage.
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
        <h3>Moeglicher Leistungsnachweis</h3>
        <p>${escapeHtml(toolkit.product || "Vergleichender Kurzkommentar oder strukturierte Transferantwort.")}</p>
      </article>
      <article class="teacher-card">
        <h3>Erweiterung</h3>
        <p>${escapeHtml(toolkit.extension || "Materialien im Plenum kontrovers sichern und anschliessend schriftlich verdichten.")}</p>
      </article>
    </div>
    <div class="teacher-map">
      ${module.questions
        .map(
          (question, index) => `
            <article class="teacher-map-card">
              <h4>Frage ${index + 1}</h4>
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
  elements.resourceGroups.innerHTML = groupResources(module.resources)
    .map(([bucket, resources]) => {
      return `
        <section class="resource-group">
          <h3>${escapeHtml(bucket)}</h3>
          <div class="resource-grid">
            ${resources
              .map((resource) => {
                const actionLabel = resource.type === "Video" ? "Video oeffnen" : "Material oeffnen";
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
        <div class="feedback-body">Loese die Frage, um sofort Rueckmeldung zu erhalten.</div>
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
        <summary>Musterloesung anzeigen</summary>
        <div class="model-answer">${escapeHtml(question.modelAnswer)}</div>
      </details>
    </article>
  `;
}

function renderQuestions(module) {
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
}

function renderAudioLounge() {
  elements.audioLounge.innerHTML = audioItems
    .map(
      (item) => `
        <article class="audio-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="resource-actions">
            <a class="btn ghost small" href="${escapeHtml(item.src)}" target="_blank" rel="noreferrer">Datei oeffnen</a>
          </div>
          <audio controls preload="none">
            <source src="${escapeHtml(item.src)}" type="audio/mpeg" />
          </audio>
        </article>
      `
    )
    .join("");
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

function renderApp() {
  const module = getActiveModule();
  if (!module) return;
  elements.teacherModeButton.textContent = state.teacherMode ? "Lehrpersonenmodus an" : "Lehrpersonenmodus aus";
  elements.teacherModeButton.classList.toggle("is-active", state.teacherMode);
  renderStats();
  renderModuleNav();
  renderModuleHeader(module);
  renderTeacherPanel(module);
  renderResources(module);
  renderQuestions(module);
  renderAudioLounge();
}

elements.startRouteButton.addEventListener("click", () => {
  state.activeModuleId = modules[0]?.id || null;
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

elements.openFirstOpenButton.addEventListener("click", jumpToFirstOpenQuestion);
elements.teacherModeButton.addEventListener("click", () => {
  state.teacherMode = !state.teacherMode;
  saveStore();
  renderApp();
});

const persisted = loadStore();
state.answers = persisted.answers;
state.teacherMode = persisted.teacherMode;
renderApp();
