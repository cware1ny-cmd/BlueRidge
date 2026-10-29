// =========================================================================
// 1. ICON CONSTANTS
// =========================================================================

// CONSTANT FOR LESSON ICON
const LESSON_ICON_SVG = `<svg aria-hidden="true" fill="currentColor" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
  <path d="M8.4148147,12 L1.05185184,12 C0.471229623,12 0,11.552 0,11 C0,10.448 0.471229623,10 1.05185184,10 L8.4148147,10 C8.99543692,10 9.46666654,10.448 9.46666654,11 C9.46666654,11.552 8.99543692,12 8.4148147,12"></path>
  <path d="M12.2500002,2 L0.816666683,2 C0.365866674,2 0,1.552 0,1 C0,0.448 0.365866674,0 0.816666683,0 L12.2500002,0 C12.7008002,0 13.0666669,0.448 13.0666669,1 C13.0666669,1.552 12.7008002,2 12.2500002,2"></path>
  <path d="M15,7 L1,7 C0.448,7 0,6.552 0,6 C0,5.448 0.448,5 1,5 L15,5 C15.552,5 16,5.448 16,6 C16,6.552 15.552,7 15,7"></path>
</svg>`;

// CONSTANT FOR QUIZ ICON
const QUIZ_ICON_SVG = `<svg aria-hidden="true" fill="currentColor" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <path d="M14,14 L2,14 L2,2 L14,2 L14,14 Z M15,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L15,16 C15.6,16 16,15.6 16,15 L16,1 C16,0.4 15.6,0 15,0 L15,0 Z"></path>
  <path d="M7.9997,11 C8.5517,11 8.9997,11.448 8.9997,12 C8.9997,12.552 8.5517,13 7.9997,13 C7.4477,13 6.9997,12.552 6.9997,12 C6.9997,11.448 7.4477,11 7.9997,11"></path>
  <path d="M7.0997,5.5 C7.2997,5.2 7.5997,5 7.9997,5 C8.5997,5 8.9997,5.4 8.9997,6 C8.9997,6.3 8.8997,6.4 8.3997,6.7 C7.7997,7.1 6.9997,7.7 6.9997,9 L6.9997,10 L8.9997,10 L8.9997,9 C8.9997,8.8 8.9997,8.7 9.4997,8.4 C10.0997,8 10.9997,7.4 10.9997,6 C10.9997,4.3 9.6997,3 7.9997,3 C6.8997,3 5.8997,3.6 5.3997,4.5 L4.8997,5.4 L6.5997,6.4 L7.0997,5.5 Z"></path>
</svg>`;

// CONSTANT FOR PROGRESS ICON
const PROGRESS_ICON_SVG = `<svg aria-label="Course Progress" class="progress-circle" fill="none" focusable="false" role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <circle class="progress-track" cx="8" cy="8" fill="transparent" r="7" stroke-width="2" transform="rotate(-89.9 8 8)"></circle>
  <circle class="progress-unstarted" cx="8" cy="8" fill="transparent" r="7" stroke-dasharray="43.982297150257104" stroke-dashoffset="43.9822971502571" stroke-width="2" transform="rotate(-89.9 8 8)"></circle>
  <path class="progress-pass" d="M11.3227 6.65905C11.6133 6.37599 11.6347 5.89413 11.3705 5.58277C11.1063 5.27141 10.6566 5.24847 10.366 5.53152L6.93323 8.87512L5.6338 7.60944C5.3432 7.32639 4.89345 7.34933 4.62927 7.66069C4.36509 7.97205 4.38651 8.45391 4.67711 8.73697L6.45488 10.4686C6.72611 10.7328 7.14034 10.7328 7.41157 10.4686L11.3227 6.65905Z"></path>
  <path class="progress-fail" clip-rule="evenodd" d="M9.46967 10.5303C9.76256 10.8232 10.2374 10.8232 10.5303 10.5303C10.8232 10.2374 10.8232 9.76256 10.5303 9.46967L9.06066 8L10.5303 6.53033C10.8232 6.23744 10.8232 5.76256 10.5303 5.46967C10.2374 5.17678 9.76256 5.17678 9.46967 5.46967L8 6.93934L6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.93934 8L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303C5.76256 10.8232 6.23744 10.8232 6.53033 10.5303L8 9.06066L9.46967 10.5303Z" fill-rule="evenodd"></path>
</svg>`;

// =========================================================================
// 2. POPULATE METADATA & BUILD MODULE LISTS
// =========================================================================
function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("LocalStorage write failed:", e);
  }
}

function getProgress(id) {
  const n = parseInt(storageGet(`rcic_module_progress_${id}`), 10);
  return Number.isFinite(n) ? Math.min(100, Math.max(0, n)) : 0;
}

function isModuleCompleted(id) {
  return storageGet(`rcic_module_completed_${id}`) === "true";
}

function isModuleLocked(id) {
  return storageGet(`rcic_module_locked_${id}`) === "true";
}

function init() {
  // 1. Synchronize the accessibility attribute for screen readers once the button element exists
  if (document.body.classList.contains("sidebar-collapsed")) {
    const toggleBtn = document.getElementById("sidebarToggle");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
  }

  // 2. Allow transitions to run normally now that layout initialization is done
  setTimeout(() => {
    document.body.classList.remove("preload");
  }, 1);

  // Initialize module lock states if no storage data is present
  if (window.CourseManifest) {
    initializeModuleLocks();
  }

  if (
    window.NavigationContext &&
    document.getElementById("moduleContentArea") &&
    isModuleLocked(window.NavigationContext.currentModuleId)
  ) {
    window.location.replace("./index.html");
    return;
  }

  // 1. Process Dashboard Elements
  if (window.CourseMetadata) {
    populateDashboardMetadata(window.CourseMetadata);
  }

  if (document.getElementById("dashboardProgressContainer")) {
    renderDashboardOverallProgress();
  }

  if (!window.CourseManifest) return;

  // 2. Setup Modular Lists
  const mainListContainer = document.getElementById("mainCourseList");
  const sidebarListContainer = document.getElementById("sidebarCourseList");

  if (mainListContainer) {
    renderList(mainListContainer, "main-view");
  }

  if (sidebarListContainer) {
    renderList(sidebarListContainer, "sidebar-view");

    if (document.getElementById("sidebarProgressContainer")) {
      renderSidebarOverallProgress();
    }

    setupActiveState();
    setupNavigationButtons();
    // Dynamic generation step injection for the specific content module
    if (window.ModuleData) {
      renderActiveModuleContent(window.ModuleData);
    }
  }

  setupSidebarToggleListener();
  
  // 3. Setup Scroll Progress Live Event Engine
  setupScrollProgressTracker();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

/**
 * Automatically unlocks the first module and locks all subsequent modules
 * if no lock data exists in localStorage yet.
 */
function initializeModuleLocks() {
  window.CourseManifest.forEach((module, index) => {
    const lockKey = `rcic_module_locked_${module.id}`;

    if (storageGet(lockKey) === null) {
      storageSet(lockKey, index === 0 ? "false" : "true");
    }
  });
}

/**
 * Handles Dashboard-specific global metadata injection
 */
function populateDashboardMetadata(meta) {
  if (meta.docTitle && document.getElementById("mainCourseList")) {
    document.title = meta.docTitle;
  }

  const mainTitleContainer = document.getElementById("mainTitle");
  if (mainTitleContainer && meta.pageTitle) mainTitleContainer.textContent = meta.pageTitle;

  const logoContainer = document.getElementById("courseLogo");
  if (logoContainer && meta.courseLogo) {
    logoContainer.src = meta.courseLogo;
    logoContainer.alt = meta.pageTitle || "Logo";
  }

  const textInsertionAnchor = document.getElementById("dashTextAnchor");
  if (textInsertionAnchor && meta.dashText) {
    textInsertionAnchor.innerHTML = meta.dashText.map((text) => `<div class="dash-text"><p>${text}</p></div>`).join("");
  }

  // UPDATED: Wraps the course-specific custom sidebar branding header in a hyperlink
  const sidebarHeading = document.getElementById("sidebarHeaderTitle");
  if (sidebarHeading && meta.sidebarTitle) {
    sidebarHeading.innerHTML = `<a href="./index.html" class="sidebar-header-link">${meta.sidebarTitle}</a>`;
  }
}

/**
 * Dynamic Content Factory rendering data payloads cleanly into module.html wrappers
 */
function renderActiveModuleContent(data) {
  const headerBox = document.getElementById("moduleHeaderArea");
  const contentBox = document.getElementById("moduleContentArea");
  if (!contentBox || !window.NavigationContext) return;

  contentBox.innerHTML = "";

  // 1. Locate the active module configuration entry out of the main manifest array
  const activeId = window.NavigationContext.currentModuleId;
  const currentModInfo = window.CourseManifest.find((m) => m.id === activeId);

  if (currentModInfo) {
    // 2. Set browser tab <title> to strictly "Module xx" format
    document.title = `Module ${currentModInfo.id}`;

    // 3. NEW: Find the sequential index position and total count
    const currentModuleIndex = window.CourseManifest.findIndex((m) => m.id === activeId);
    const totalModulesCount = window.CourseManifest.length;
    const progressCounterString = `Module ${currentModuleIndex + 1} of ${totalModulesCount}`;

    // 4. UPDATED: Inject both the dynamic tracker string and main h1 header element
    if (headerBox) {
      headerBox.innerHTML = `
        <span class="module-sequence-tracker">${progressCounterString}</span>
        <h1>${currentModInfo.title}</h1>
      `;
    }
  }

  // Step through each unique item config defined inside the loaded lesson file
  data.content.forEach((block) => {
    const componentWrapper = document.createElement("div");

    switch (block.type) {
      case "text-block":
        componentWrapper.className = "main-text";
        const headingMarkup = block.heading ? `<h2>${block.heading}</h2>` : "";
        componentWrapper.innerHTML = `
          ${headingMarkup}
          <p>${block.text}</p>
        `;
        break;

      case "image":
        componentWrapper.className = block.style || "standard-image";
        componentWrapper.innerHTML = `<img src="${block.url}" alt="${block.altText || "Content Asset"}">`;
        break;

      case "mod-num-list":
        componentWrapper.className = "mod-num-list";
        const standardListItems = block.items.map((txt) => `<li>${txt}</li>`).join("");
        componentWrapper.innerHTML = `<ol>${standardListItems}</ol>`;
        break;

      case "mod-bullet-list":
        componentWrapper.className = "mod-bullet-list-block";
        
        // Map list items safely inside a clean un-ordered list layout
        const bulletListItems = block.items.map((txt) => `<li>${txt}</li>`).join("");
        
        componentWrapper.innerHTML = `
          <div class="mod-bullet-list-card">
            <ul>
              ${bulletListItems}
            </ul>
          </div>
        `;
        break;

      case "accordion":
        componentWrapper.className = "accordion-block";
        componentWrapper.innerHTML = block.panels
          .map(
            (panel) => `
                    <details class="item">
                        <summary class="trigger">${panel.header}</summary>
                        <div class="text"><p>${panel.text}</p></div>
                    </details>
                `
          )
          .join("");
        break;

      case "flashcard":
        componentWrapper.className = "flashcards-block";
        
        // Loop through the cards sub-array to cleanly assemble the collection
        componentWrapper.innerHTML = block.cards
          .map(
            (card) => `
              <div class="flashcard-container">
                <div class="flashcard-card">
                  <div class="flashcard-face flashcard-front">
                    <div class="flashcard-content">${card.front}</div>
                  </div>
                  <div class="flashcard-face flashcard-back">
                    <div class="flashcard-content">${card.back}</div>
                  </div>
                </div>
              </div>
            `
          )
          .join("");
        
        // Bind the 3D flipping animation engine logic natively to each created card container
        componentWrapper.querySelectorAll('.flashcard-container').forEach((element) => {
          element.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('flipped');
          });
        });
        break;

      case "process-carousel":
        componentWrapper.className = "process-carousel-component";
        
        // 1. Build out individual step layouts safely
        const introMarkup = `
          <div class="carousel-step active-step" data-step-index="0">
            <h3>${block.intro.title}</h3>
            <p>${block.intro.text}</p>
          </div>
        `;

        const stepsMarkup = block.steps.map((step, index) => `
          <div class="carousel-step" data-step-index="${index + 1}">
            <h3>Step ${index + 1}: ${step.title}</h3>
            <p>${step.text}</p>
          </div>
        `).join("");

        const summaryMarkup = `
          <div class="carousel-step" data-step-index="${block.steps.length + 1}">
            <h3>${block.summary.title}</h3>
            <p>${block.summary.text}</p>
          </div>
        `;

        // 2. Build the control panel indicators (dots)
        const totalStepsCount = block.steps.length + 2; // Intro + Steps + Summary
        let dotsMarkup = "";
        for (let i = 0; i < totalStepsCount; i++) {
          dotsMarkup += `<button class="carousel-dot ${i === 0 ? 'active-dot' : ''}" data-target-index="${i}" aria-label="Go to slide ${i + 1}"></button>`;
        }

        // 3. Assemble complete structural inner HTML
        componentWrapper.innerHTML = `
          <div class="carousel-container">
            <div class="carousel-slides-window">
              ${introMarkup}
              ${stepsMarkup}
              ${summaryMarkup}
            </div>
            <div class="carousel-controls-bar">
              <button class="carousel-nav-btn prev-btn" disabled aria-label="Previous step">← Prev</button>
              <div class="carousel-dots-indicator">
                ${dotsMarkup}
              </div>
              <button class="carousel-nav-btn next-btn" aria-label="Next step">Next →</button>
            </div>
          </div>
        `;

        // 4. Bind interactive state engine behaviors
        let currentActiveSlideIndex = 0;
        const allSlides = componentWrapper.querySelectorAll(".carousel-step");
        const allDots = componentWrapper.querySelectorAll(".carousel-dot");
        const prevButton = componentWrapper.querySelector(".prev-btn");
        const nextButton = componentWrapper.querySelector(".next-btn");

        const updateCarouselView = (targetIndex) => {
          // Clear active classes from old slide and dot nodes
          allSlides[currentActiveSlideIndex].classList.remove("active-step");
          allDots[currentActiveSlideIndex].classList.remove("active-dot");

          // Update tracking variable to target position
          currentActiveSlideIndex = targetIndex;

          // Assign active classes to new nodes
          allSlides[currentActiveSlideIndex].classList.add("active-step");
          allDots[currentActiveSlideIndex].classList.add("active-dot");

          // Enforce boundary configurations for buttons
          prevButton.disabled = currentActiveSlideIndex === 0;
          nextButton.disabled = currentActiveSlideIndex === totalStepsCount - 1;
        };

        // Navigation click event bindings
        prevButton.addEventListener("click", () => {
          if (currentActiveSlideIndex > 0) {
            updateCarouselView(currentActiveSlideIndex - 1);
          }
        });

        nextButton.addEventListener("click", () => {
          if (currentActiveSlideIndex < totalStepsCount - 1) {
            updateCarouselView(currentActiveSlideIndex + 1);
          }
        });

        // Direct dot navigation selection binding
        allDots.forEach((dot) => {
          dot.addEventListener("click", (e) => {
            const indexValue = parseInt(e.currentTarget.getAttribute("data-target-index"), 10);
            updateCarouselView(indexValue);
          });
        });
        break;

      case "quiz":
        componentWrapper.className = "quiz-component";
        
        // Build the unique layout for the quiz block
        const choicesMarkup = block.choices.map((choice, index) => `
          <div class="quiz-choice-item">
            <label class="quiz-choice-label">
              <input type="radio" name="quiz_question" value="${index}" class="quiz-radio-input">
              <span class="quiz-choice-text">${choice.text}</span>
            </label>
          </div>
        `).join("");

        componentWrapper.innerHTML = `
          <div class="quiz-container">
            <div class="quiz-question-header">
              <h2>Knowledge Check</h2>
              <p class="quiz-question-text">${block.question}</p>
            </div>
            <form class="quiz-choices-form">
              ${choicesMarkup}
              <div class="quiz-action-bar">
                <button type="submit" class="quiz-submit-btn">Submit Answer</button>
              </div>
            </form>
            <div class="quiz-feedback-box" style="display: none;"></div>
          </div>
        `;

        const choicesForm = componentWrapper.querySelector(".quiz-choices-form");
        const feedbackBox = componentWrapper.querySelector(".quiz-feedback-box");
        const submitButton = componentWrapper.querySelector(".quiz-submit-btn");
        const radioInputs = componentWrapper.querySelectorAll(".quiz-radio-input");

        choicesForm.addEventListener("submit", (e) => {
          e.preventDefault();

          // Find the selected choice
          const selectedInput = choicesForm.querySelector('input[name="quiz_question"]:checked');
          
          if (!selectedInput) {
            feedbackBox.className = "quiz-feedback-box feedback-warning";
            feedbackBox.innerHTML = "<p>Please select an option before submitting.</p>";
            feedbackBox.style.display = "block";
            return;
          }

          const selectedIndex = parseInt(selectedInput.value, 10);
          const chosenOption = block.choices[selectedIndex];

          if (chosenOption.isCorrect) {
            radioInputs.forEach(input => {
              if (!input.checked) {
                input.disabled = true;
              }
            });

            submitButton.disabled = true;
            
            feedbackBox.className = "quiz-feedback-box feedback-success";
            feedbackBox.innerHTML = `
              <strong>Correct!</strong>
              <p>${chosenOption.feedback}</p>
            `;
            feedbackBox.style.display = "block";
          } else {
            // Display targeted incorrect feedback. Do not lock options or reveal correct item.
            feedbackBox.className = "quiz-feedback-box feedback-error";
            feedbackBox.innerHTML = `
              <strong>Incorrect</strong>
              <p>${chosenOption.feedback}</p>
              <p class="quiz-retry-prompt">Please review your choice and try again.</p>
            `;
            feedbackBox.style.display = "block";
          }
        });

        // Hide old feedback as soon as a user selects a new radio choice to try again
        radioInputs.forEach(input => {
          input.addEventListener("change", () => {
            feedbackBox.style.display = "none";
          });
        });
        break;

      case "pdf":
        componentWrapper.className = "pdf-component full-viewport-pdf";
        
        const pdfUrl = block.url;
        const displayMode = block.mode || "embed"; // Options: 'embed' or 'link-only'

        // 1. Build out the frame markup if embed mode is chosen
        let viewerMarkup = "";
        if (displayMode === "embed") {
          viewerMarkup = `
            <div class="pdf-viewer-window">
              <iframe src="${pdfUrl}" title="Embedded Document" type="application/pdf" width="100%" height="100%">
                <p>Your browser does not support inline PDFs. Please use the button below to view the file.</p>
              </iframe>
            </div>
          `;
        }

        // 2. Assemble structural markup footprint
        componentWrapper.innerHTML = `
          <div class="pdf-container ${displayMode}-layout">
            ${viewerMarkup}
            <div class="pdf-action-footer">
              <a href="${pdfUrl}" target="_blank" rel="noopener noreferrer" class="pdf-download-btn">
                <span>Open / Download PDF</span>
                <span class="pdf-btn-arrow">↗</span>
              </a>
            </div>
          </div>
        `;
        break;

      case "tabbed-panel":
        componentWrapper.className = "tabbed-panel-block";
        
        // 1. Establish structural conditional modifiers based on array count
        const totalTabsCount = block.panels.length;
        const layoutModifierClass = totalTabsCount <= 3 ? "tabs-split-width" : "tabs-scroll-width";

        // 2. Map tab headers safely
        const tabHeadersMarkup = block.panels.map((panel, index) => `
          <button class="tab-nav-btn ${index === 0 ? 'active-tab' : ''}" data-tab-target="${index}">
            <span>${panel.heading}</span>
          </button>
        `).join("");

        // 3. Map body panels safely
        const tabPanelsMarkup = block.panels.map((panel, index) => `
          <div class="tab-content-panel ${index === 0 ? 'active-panel' : ''}" data-panel-index="${index}">
            <p>${panel.text}</p>
          </div>
        `).join("");

        // 4. Assemble the unified DOM payload structure
        componentWrapper.innerHTML = `
          <div class="tabbed-panel-container">
            <div class="tabbed-nav-header-bar ${layoutModifierClass}">
              ${tabHeadersMarkup}
            </div>
            <div class="tabbed-content-body-window">
              ${tabPanelsMarkup}
            </div>
          </div>
        `;

        // 5. Bind dynamic click interaction toggles
        const navButtons = componentWrapper.querySelectorAll(".tab-nav-btn");
        const bodyPanels = componentWrapper.querySelectorAll(".tab-content-panel");

        navButtons.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const targetIndex = e.currentTarget.getAttribute("data-tab-target");

            // Deactivate prior header states
            navButtons.forEach(b => b.classList.remove("active-tab"));
            bodyPanels.forEach(p => p.classList.remove("active-panel"));

            // Activate chosen panel states
            e.currentTarget.classList.add("active-tab");
            componentWrapper.querySelector(`.tab-content-panel[data-panel-index="${targetIndex}"]`).classList.add("active-panel");
          });
        });
        break;
    }
    contentBox.appendChild(componentWrapper);
  });
}

/**
 * Builds standard layout tracking loops with conditional dynamic locking
 */
function renderList(containerElement, dynamicViewClass) {
  containerElement.classList.add("course-list-container", dynamicViewClass);
  containerElement.innerHTML = "";

  window.CourseManifest.forEach((module) => {
    const listItem = document.createElement("li");
    listItem.classList.add("course-list-item");
    listItem.setAttribute("data-module-id", module.id);

    // Get locking data indicators from localStorage
    const isLocked = isModuleLocked(module.id);
    const isCompleted = isModuleCompleted(module.id);
    const currentProgress = getProgress(module.id);

    let itemIcon = LESSON_ICON_SVG;
    let layoutIconModifierClass = "lesson-icon";
    if (module.iconType === "quiz") {
      itemIcon = QUIZ_ICON_SVG;
      layoutIconModifierClass = "quiz-icon";
    }

    const prefixLabel = dynamicViewClass === "main-view" ? "Module " : "M";

    // Setup structural wrapper markup depending on access state
    let componentStructureOpening;
    let componentStructureClosing;

    if (isLocked) {
      listItem.classList.add("course-module-locked");
      componentStructureOpening = `<div class="course-list-link placement-locked-wrapper">`;
      componentStructureClosing = `</div>`;
    } else {
      componentStructureOpening = `<a href="module.html?id=${module.id}" class="course-list-link">`;
      componentStructureClosing = `</a>`;
    }

    // Process progress and node tracking injections
    let progressInnerMarkup = PROGRESS_ICON_SVG;

    if (isLocked) {
      // Overwrite completely with a static lock badge
      progressInnerMarkup = `<span style="font-size:1.4rem; color:#a0aec0; display:inline-flex; align-items:center; justify-content:center;">🔒</span>`;
    }

    // Calculate current string representation for tooltips
    const percentageText = isCompleted || currentProgress >= 100 ? "100% completed" : `${currentProgress}% completed`;

    listItem.innerHTML = `
            ${componentStructureOpening}
                <span class="module-icon ${layoutIconModifierClass}">${itemIcon}</span>
                <span class="module-number">${prefixLabel}${module.id}</span>
                <span class="module-title" title="${module.title}">${module.title}</span>
                <span class="progress-container" data-tooltip="${isLocked ? 'Locked' : percentageText}">${progressInnerMarkup}</span>
            ${componentStructureClosing}
        `;

    // Fine-tune SVG element rendering vectors dynamically if the route is open
    if (!isLocked) {
      updateItemProgressUI(listItem, currentProgress, isCompleted);
    }

    containerElement.appendChild(listItem);
  });
}

/**
 * Isolated method to adjust individual layout node icons based on completion percent values
 */
function updateItemProgressUI(listItem, percentage, isCompleted) {
  const passIcon = listItem.querySelector(".progress-pass");
  const unstartedIcon = listItem.querySelector(".progress-unstarted");

  if (isCompleted || percentage >= 100) {
    if (passIcon) passIcon.style.display = "block";
    if (unstartedIcon) unstartedIcon.style.display = "none";
  } else if (percentage > 0) {
    const circumference = 43.982297150257104;
    const offset = circumference - (percentage / 100) * circumference;

    if (unstartedIcon) {
      unstartedIcon.style.display = "block";
      unstartedIcon.style.strokeDasharray = `${circumference}`;
      unstartedIcon.style.strokeDashoffset = `${offset}`;
      unstartedIcon.style.stroke = "#0076d6";
      unstartedIcon.style.strokeWidth = "2";
    }
    if (passIcon) passIcon.style.display = "none";
  } else {
    if (passIcon) passIcon.style.display = "none";
    if (unstartedIcon) {
      unstartedIcon.style.display = "block";
      unstartedIcon.style.strokeDashoffset = "43.9822971502571";
    }
  }
}

function setupActiveState() {
  if (!window.NavigationContext) return;
  const activeId = window.NavigationContext.currentModuleId;
  const targetItem = document.querySelector(`#sidebarCourseList .course-list-item[data-module-id="${activeId}"]`);
  if (targetItem) {
    targetItem.classList.add("active-module-highlight");
    targetItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

function setupNavigationButtons() {
  const nextBtn = document.getElementById("continueBtn");
  if (!nextBtn || !window.NavigationContext) return;
  
  if (!window.NavigationContext.hasNext) {
    nextBtn.textContent = "Return to Dashboard";
  }
  
  nextBtn.addEventListener("click", () => {
    if (isModuleLocked(window.NavigationContext.currentModuleId)) return;

    const currentId = window.NavigationContext.currentModuleId;
    
    // 1. Mark current module as completed and 100% progress
    if (currentId) {
      storageSet(`rcic_module_completed_${currentId}`, "true");
      storageSet(`rcic_module_progress_${currentId}`, "100");
    }

    // 2. Determine and unlock the next module sequential structure
    if (window.CourseManifest && currentId) {
      // Find the position index of the current active module
      const currentIndex = window.CourseManifest.findIndex(m => m.id === currentId);
      
      // If there is a next index position, unlock that module ID array pointer
      if (currentIndex !== -1 && currentIndex + 1 < window.CourseManifest.length) {
        const nextModule = window.CourseManifest[currentIndex + 1];
        storageSet(`rcic_module_locked_${nextModule.id}`, "false");
      }
    }

    // 3. Perform standard template navigation routing
    if (window.NavigationContext.nextFile) {
      window.location.href = window.NavigationContext.nextFile;
    }
  });
}

/**
 * Isolated toggle binder avoiding page crashes
 */
function setupSidebarToggleListener() {
  const toggleBtn = document.getElementById("sidebarToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isCollapsed = document.body.classList.toggle("sidebar-collapsed");
      toggleBtn.setAttribute("aria-expanded", (!isCollapsed).toString());
      // Save the current state to localStorage
      localStorage.setItem("sidebar_collapsed", isCollapsed.toString());
    });
  }
}

/**
 * Renders an overall course progress tracker widget for the main Dashboard view.
 * Expects a container element with id="dashboardProgressContainer" in your HTML.
 */
function renderDashboardOverallProgress() {
  const container = document.getElementById("dashboardProgressContainer");
  if (!container || !window.CourseManifest) return;

  const totalModules = window.CourseManifest.length;
  let completedCount = 0;
  let accumulatedProgress = 0;

  window.CourseManifest.forEach((module) => {
    const isCompleted = isModuleCompleted(module.id);
    const currentProgress = getProgress(module.id);
    
    if (isCompleted || currentProgress >= 100) {
      completedCount++;
      accumulatedProgress += 100;
    } else {
      accumulatedProgress += currentProgress;
    }
  });

  // Calculate overall arithmetic average percentage
  const totalPercentage = totalModules > 0 ? Math.round(accumulatedProgress / totalModules) : 0;

  // Build a beautiful, accessible component container structure
  container.className = "dashboard-overall-progress-card";
  container.innerHTML = `
    <div class="progress-meta">
      <h3>Course Progress</h3>
      <span class="progress-stats">
        <strong>${completedCount}</strong> of <strong>${totalModules}</strong> Modules Completed
      </span>
    </div>
    <div class="progress-bar-wrapper">
      <progress max="100" value="${totalPercentage}" aria-label="Overall course progress"></progress>
      <span class="progress-percentage-label">${totalPercentage}%</span>
    </div>
  `;
}

/**
 * Renders a compact overall course progress layout for the Sidebar menu view.
 * Expects a container element with id="sidebarProgressContainer" in your HTML.
 */
function renderSidebarOverallProgress() {
  const container = document.getElementById("sidebarProgressContainer");
  if (!container || !window.CourseManifest) return;

  const totalModules = window.CourseManifest.length;
  let completedCount = 0;
  let accumulatedProgress = 0;

  window.CourseManifest.forEach((module) => {
    const isCompleted = isModuleCompleted(module.id);
    const currentProgress = getProgress(module.id);

    if (isCompleted || currentProgress >= 100) {
      completedCount++;
      accumulatedProgress += 100;
    } else {
      accumulatedProgress += currentProgress;
    }
  });

  const totalPercentage = totalModules > 0 ? Math.round(accumulatedProgress / totalModules) : 0;

  // Ultra-compact inline structural design for tight spaces
  container.className = "sidebar-overall-progress-mini";
  container.innerHTML = `
    <div class="sidebar-progress-text">
      <span>Course Progress</span>
      <strong>${totalPercentage}%</strong>
    </div>
    <div class="sidebar-mini-track">
      <div class="sidebar-mini-fill" style="width: ${totalPercentage}%" role="progressbar" aria-valuenow="${totalPercentage}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  `;
}

// =========================================================================
// 3. VISUAL PROGRESS SCROLL MONITOR & REAL-TIME REDRAW ENGINE
// =========================================================================
function setupScrollProgressTracker() {
  const scrollFieldTarget = document.querySelector(".main-content");
  if (!scrollFieldTarget) return;

  scrollFieldTarget.addEventListener("scroll", () => {
    // Universal ID Fallback Detection
    const lessonPageId = window.NavigationContext ? window.NavigationContext.currentModuleId : "1";

    const isAlreadyCompleted = localStorage.getItem(`rcic_module_completed_${lessonPageId}`) === "true";
    
    let finalizedPercentage = 0;
    
    if (isAlreadyCompleted) {
      finalizedPercentage = 100;
    } else {
      const totalScrollableHeight = scrollFieldTarget.scrollHeight - scrollFieldTarget.clientHeight;
      const currentScrollPosition = scrollFieldTarget.scrollTop;

      if (totalScrollableHeight > 0) {
        const rawPercentage = (currentScrollPosition / totalScrollableHeight) * 100;
        finalizedPercentage = Math.min(100, Math.max(0, Math.round(rawPercentage)));
        
        // Cap visual progress calculation at 93% until continuation action resolves it
        if (finalizedPercentage > 93) {
          finalizedPercentage = 93;
        }
      } else {
        finalizedPercentage = 93;
      }
    }

    // 1. Save data value instantly to memory via persistence parameters
    try {
      const previousSavedProgress = parseInt(
        localStorage.getItem(`rcic_module_progress_${lessonPageId}`) || "0",
        10
      );
      if (finalizedPercentage > previousSavedProgress) {
        localStorage.setItem(`rcic_module_progress_${lessonPageId}`, finalizedPercentage.toString());
      }
    } catch (e) {
      console.warn("LocalStorage progress update failed: ", e);
    }

    // 2. Synchronize layout nodes inside both list targets in real-time
    const highestSavedProgress = parseInt(localStorage.getItem(`rcic_module_progress_${lessonPageId}`) || "0", 10);
    const renderPercentage = Math.max(finalizedPercentage, highestSavedProgress);

    // Query across both sidebar lists and dashboard lists simultaneously
    const activeListItems = document.querySelectorAll(`.course-list-item[data-module-id="${lessonPageId}"]`);
    activeListItems.forEach((item) => {
      updateItemProgressUI(item, renderPercentage, isAlreadyCompleted);
      
      // Real-time text calculation logic for tooltips
      const progressContainer = item.querySelector(".progress-container");
      if (progressContainer && !item.classList.contains("course-module-locked")) {
        const liveText = isAlreadyCompleted || renderPercentage >= 100 ? "100% completed" : `${renderPercentage}% completed`;
        progressContainer.setAttribute("data-tooltip", liveText);
      }
    });
  });
}
