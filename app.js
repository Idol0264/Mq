/* =========================================================
   MQ — MONEY MAKING MENU
   GTS SOFTWARES (GTH PRODUCT)
   Complete replacement app.js
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     CONFIGURATION
     ========================================================= */

  const EMAIL_KEY = "mq_user_email";
  const SELECTION_KEY = "mq_platform_selections";

  const TALLY_FORMS = {
    EMAIL: "https://tally.so/r/7RGXBR",
    JOBS: "https://tally.so/r/VLry4E",
    PORTFOLIOS: "https://tally.so/r/Xxjy2d"
  };

  const GTH_ECOSYSTEM_URL =
    "https://idol0264.github.io/gth-webapp/";

  const TELEGRAM_URL =
    "https://t.me/gt_softwares";

  const CUSTOMER_SERVICE_URL =
    "https://wa.me/qr/VGCCQ6WUPR4SO1";

  const CATEGORIES = [
    "BET",
    "BROKERS",
    "BANKS",
    "JOBS",
    "PORTFOLIOS"
  ];

  /* =========================================================
     PLATFORM DATA
     ========================================================= */

  const PLATFORMS = {
    BET: [
      {
        name: "Bet9ja",
        url: "https://www.bet9ja.com"
      },
      {
        name: "SportyBet",
        url: "https://www.sportybet.com"
      },
      {
        name: "betPawa",
        url: "https://www.betpawa.com"
      },
      {
        name: "Betway",
        url: "https://www.betway.com"
      },
      {
        name: "BetKing",
        url: "https://www.betking.com"
      },
      {
        name: "1xBet",
        url: "https://1xbet.com"
      },
      {
        name: "bet365",
        url: "https://www.bet365.com"
      },
      {
        name: "Betika",
        url: "https://www.betika.com"
      },
      {
        name: "Betwinner",
        url: "https://betwinner.com"
      }
    ],

    BROKERS: [
      {
        name: "NGX",
        url: "https://www.ngxgroup.com"
      },
      {
        name: "Bamboo",
        url: "https://investbamboo.com"
      },
      {
        name: "Cowrywise",
        url: "https://cowrywise.com"
      },
      {
        name: "Trove",
        url: "https://troveapp.co"
      },
      {
        name: "Chaka",
        url: "https://chaka.com"
      },
      {
        name: "Rise",
        url: "https://risevest.com"
      },
      {
        name: "Stanbic IBTC",
        url: "https://www.stanbicibtcbank.com"
      },
      {
        name: "Ghana Stock Exchange",
        url: "https://gse.com.gh"
      },
      {
        name: "IC Securities",
        url: "https://icsecurities.com"
      }
    ],

    BANKS: [
      {
        name: "Access Bank",
        url: "https://www.accessbankplc.com"
      },
      {
        name: "GTCO / GTBank",
        url: "https://www.gtbank.com"
      },
      {
        name: "UBA",
        url: "https://www.ubagroup.com"
      },
      {
        name: "FirstBank",
        url: "https://www.firstbanknigeria.com"
      },
      {
        name: "Zenith Bank",
        url: "https://www.zenithbank.com"
      },
      {
        name: "Stanbic IBTC",
        url: "https://www.stanbicibtcbank.com"
      },
      {
        name: "GCB Bank",
        url: "https://www.gcb.com.gh"
      },
      {
        name: "Ecobank",
        url: "https://www.ecobank.com"
      },
      {
        name: "Absa Ghana",
        url: "https://www.absa.com.gh"
      }
    ],

    JOBS: [],
    PORTFOLIOS: []
  };

  /* =========================================================
     DOM HELPERS
     ========================================================= */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

  function byId(id) {
    return document.getElementById(id);
  }

  /* =========================================================
     SAFE HTML
     ========================================================= */

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* =========================================================
     STORAGE
     ========================================================= */

  function getSavedEmail() {
    return localStorage.getItem(EMAIL_KEY) || "";
  }

  function saveEmail(email) {
    localStorage.setItem(EMAIL_KEY, email);
  }

  function getSelections() {
    try {
      return JSON.parse(
        localStorage.getItem(SELECTION_KEY) || "{}"
      );
    } catch {
      return {};
    }
  }

  function saveSelections(data) {
    localStorage.setItem(
      SELECTION_KEY,
      JSON.stringify(data)
    );
  }

  /* =========================================================
     APPROVED DATA
     ========================================================= */

  function getApprovedJobs() {
    if (Array.isArray(window.MQ_JOBS)) {
      return window.MQ_JOBS;
    }

    return [];
  }

  function getApprovedPortfolios() {
    if (Array.isArray(window.MQ_PORTFOLIOS)) {
      return window.MQ_PORTFOLIOS;
    }

    return [];
  }

  /* =========================================================
     PLATFORM LOGO
     ========================================================= */

  function getInitials(name) {
    const clean = String(name || "").trim();

    if (!clean) return "MQ";

    const words = clean
      .replace(/[^\w\s/&-]/g, "")
      .split(/\s+/)
      .filter(Boolean);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }

    return (
      words[0].charAt(0) +
      words[1].charAt(0)
    ).toUpperCase();
  }

  function platformLogoHTML(item) {
    const name =
      item?.name ||
      item?.title ||
      item?.company ||
      "MQ";

    if (item?.logo || item?.image) {
      return `
        <div class="platform-logo image-logo">
          <img
            src="${escapeHTML(item.logo || item.image)}"
            alt="${escapeHTML(name)}"
            loading="lazy"
          >
        </div>
      `;
    }

    return `
      <div class="platform-logo">
        ${escapeHTML(getInitials(name))}
      </div>
    `;
  }

  /* =========================================================
     CATEGORY HELPERS
     ========================================================= */

  function getCategoryItems(category) {
    if (category === "JOBS") {
      return getApprovedJobs();
    }

    if (category === "PORTFOLIOS") {
      return getApprovedPortfolios();
    }

    return PLATFORMS[category] || [];
  }

  function getGrid(category) {
    return $(
      `.platform-grid[data-category="${category}"]`
    );
  }

  /* =========================================================
     RENDER HOME
     ========================================================= */

  function renderAllCategories() {
    CATEGORIES.forEach(renderCategory);
  }

  function renderCategory(category) {
    const grid = getGrid(category);

    if (!grid) return;

    grid.innerHTML = "";

    const items = getCategoryItems(category);

    for (let i = 0; i < 9; i++) {
      const item = items[i];

      const slot = document.createElement("button");

      slot.type = "button";
      slot.className = "platform-slot";

      if (item) {
        slot.classList.add("filled");
        slot.innerHTML = `
          ${platformLogoHTML(item)}
          <span class="platform-name">
            ${escapeHTML(
              item.name ||
              item.title ||
              item.company ||
              "View"
            )}
          </span>
        `;

        slot.addEventListener("click", () => {
          if (
            category === "JOBS" ||
            category === "PORTFOLIOS"
          ) {
            openListing(item, category);
          } else {
            openExternalPlatform(item);
          }
        });
      } else {
        slot.classList.add("empty");

        slot.innerHTML = `
          <span class="plus-symbol">+</span>
          <span class="slot-label">Add</span>
        `;

        slot.addEventListener("click", () => {
          openGallery(category, i);
        });
      }

      grid.appendChild(slot);
    }

    updateSeeMoreButton(category, items.length);
  }

  /* =========================================================
     SEE MORE
     ========================================================= */

  function updateSeeMoreButton(category, count) {
    const section = $(
      `[data-category-section="${category}"]`
    );

    if (!section) return;

    const seeMore =
      $(".see-more-btn", section);

    if (!seeMore) return;

    seeMore.style.display =
      count > 9 ? "" : "none";
  }

  function openMorePlatforms(category) {
    const items = getCategoryItems(category);

    const section = $(
      `[data-category-section="${category}"]`
    );

    if (!section) return;

    const existing = $(".more-items", section);

    if (existing) {
      existing.remove();
      return;
    }

    if (items.length <= 9) return;

    const wrapper =
      document.createElement("div");

    wrapper.className = "more-items";

    items.slice(9).forEach(item => {
      const card =
        document.createElement("button");

      card.type = "button";
      card.className = "platform-slot filled";

      card.innerHTML = `
        ${platformLogoHTML(item)}
        <span class="platform-name">
          ${escapeHTML(
            item.name ||
            item.title ||
            item.company ||
            "View"
          )}
        </span>
      `;

      card.addEventListener("click", () => {
        if (
          category === "JOBS" ||
          category === "PORTFOLIOS"
        ) {
          openListing(item, category);
        } else {
          openExternalPlatform(item);
        }
      });

      wrapper.appendChild(card);
    });

    const button =
      $(".see-more-btn", section);

    if (button) {
      button.parentNode.insertBefore(
        wrapper,
        button
      );
    } else {
      section.appendChild(wrapper);
    }
  }

  /* =========================================================
     EXTERNAL PLATFORM
     ========================================================= */

  function openExternalPlatform(item) {
    if (!item?.url) return;

    window.location.href = item.url;
  }

  /* =========================================================
     MAIN VIEW CONTROL
     ========================================================= */

  function showHome() {
    const home = byId("homeView");
    const iframeView = byId("iframeView");

    if (home) {
      home.style.display = "";
    }

    if (iframeView) {
      iframeView.style.display = "none";
    }

    document.body.classList.remove("iframe-open");
  }

  function showIframeView(
    url,
    title = "MQ"
  ) {
    const home = byId("homeView");
    const iframeView = byId("iframeView");
    const iframe = byId("mainIframe");
    const iframeTitle = byId("iframeTitle");

    if (!iframeView || !iframe) {
      window.location.href = url;
      return;
    }

    if (home) {
      home.style.display = "none";
    }

    iframeView.style.display = "";

    if (iframeTitle) {
      iframeTitle.textContent = title;
    }

    iframe.src = url;

    document.body.classList.add("iframe-open");
  }

  /* =========================================================
     TALLY
     ========================================================= */

  function buildTallyURL(url, category) {
    const params = new URLSearchParams();

    if (category) {
      params.set("category", category);
    }

    const email = getSavedEmail();

    if (email) {
      params.set("email", email);
    }

    return `${url}?${params.toString()}`;
  }

  function openTally(category) {
    const url = TALLY_FORMS[category];

    if (!url) return;

    showIframeView(
      buildTallyURL(url, category),
      category === "JOBS"
        ? "Submit a Job"
        : "Submit a Portfolio"
    );
  }

  /* =========================================================
     EMAIL GATE
     ========================================================= */

  function openEmailGate() {
    const gate =
      byId("emailGate");

    if (!gate) return;

    gate.classList.add("active");
    gate.style.display = "";
  }

  function closeEmailGate() {
    const gate =
      byId("emailGate");

    if (!gate) return;

    gate.classList.remove("active");
    gate.style.display = "none";
  }

  function setupEmailGate() {
    const existingEmail = getSavedEmail();

    if (existingEmail) {
      closeEmailGate();
      return;
    }

    const gate =
      byId("emailGate");

    if (!gate) return;

    gate.classList.add("active");
    gate.style.display = "";
  }

  function handleEmailSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const input =
      form.querySelector(
        'input[type="email"]'
      );

    if (!input) return;

    const email =
      input.value.trim();

    if (!email || !input.checkValidity()) {
      input.reportValidity();
      return;
    }

    saveEmail(email);
    closeEmailGate();

    initializeApp();
  }

  /* =========================================================
     GALLERY
     ========================================================= */

  function getGalleryElements() {
    return {
      overlay: byId("galleryOverlay"),
      content: byId("galleryContent"),
      title: byId("galleryTitle")
    };
  }

  function closeGallery() {
    const {
      overlay
    } = getGalleryElements();

    if (!overlay) return;

    overlay.classList.remove("active");
    overlay.style.display = "none";
  }

  function openGallery(
    category,
    slotIndex = null
  ) {
    const {
      overlay,
      content,
      title
    } = getGalleryElements();

    if (!overlay || !content) return;

    content.innerHTML = "";

    if (title) {
      title.textContent =
        category === "JOBS"
          ? "Submit a Job"
          : category === "PORTFOLIOS"
          ? "Submit a Portfolio"
          : `Add ${category}`;
    }

    if (
      category === "JOBS" ||
      category === "PORTFOLIOS"
    ) {
      const submit =
        document.createElement("button");

      submit.type = "button";
      submit.className = "gallery-submit";

      submit.innerHTML = `
        <span class="gallery-plus">+</span>
        <span>
          Submit ${
            category === "JOBS"
              ? "a Job"
              : "a Portfolio"
          }
        </span>
      `;

      submit.addEventListener(
        "click",
        () => {
          closeGallery();
          openTally(category);
        }
      );

      content.appendChild(submit);

      overlay.classList.add("active");
      overlay.style.display = "";
      return;
    }

    const items =
      PLATFORMS[category] || [];

    items.forEach(item => {
      const card =
        document.createElement("button");

      card.type = "button";
      card.className = "gallery-card";

      card.innerHTML = `
        ${platformLogoHTML(item)}
        <span>
          ${escapeHTML(item.name)}
        </span>
      `;

      card.addEventListener(
        "click",
        () => {
          closeGallery();

          addPlatformToSlot(
            category,
            item,
            slotIndex
          );
        }
      );

      content.appendChild(card);
    });

    overlay.classList.add("active");
    overlay.style.display = "";
  }

  /* =========================================================
     ADD PLATFORM TO SLOT
     ========================================================= */

  function addPlatformToSlot(
    category,
    item,
    slotIndex
  ) {
    if (!item) return;

    const selections =
      getSelections();

    if (!Array.isArray(selections[category])) {
      selections[category] = [];
    }

    if (
      !selections[category].some(
        x => x.url === item.url
      )
    ) {
      selections[category].push(item);
    }

    saveSelections(selections);

    renderSelectedCategory(category);
  }

  function renderSelectedCategory(category) {
    const grid = getGrid(category);

    if (!grid) return;

    const selections =
      getSelections();

    const selected =
      Array.isArray(selections[category])
        ? selections[category]
        : [];

    const base =
      PLATFORMS[category] || [];

    const combined = [
      ...selected
    ];

    base.forEach(item => {
      if (
        !combined.some(
          x => x.url === item.url
        )
      ) {
        combined.push(item);
      }
    });

    grid.innerHTML = "";

    for (let i = 0; i < 9; i++) {
      const item = combined[i];

      const slot =
        document.createElement("button");

      slot.type = "button";
      slot.className = "platform-slot";

      if (item) {
        slot.classList.add("filled");

        slot.innerHTML = `
          ${platformLogoHTML(item)}
          <span class="platform-name">
            ${escapeHTML(item.name)}
          </span>
        `;

        slot.addEventListener(
          "click",
          () => openExternalPlatform(item)
        );
      } else {
        slot.classList.add("empty");

        slot.innerHTML = `
          <span class="plus-symbol">+</span>
          <span class="slot-label">Add</span>
        `;

        slot.addEventListener(
          "click",
          () => openGallery(category, i)
        );
      }

      grid.appendChild(slot);
    }
  }

  /* =========================================================
     LISTINGS
     ========================================================= */

  function getListingTitle(item) {
    return (
      item?.title ||
      item?.name ||
      item?.company ||
      "Listing"
    );
  }

  function getListingSubtitle(item) {
    return (
      item?.subtitle ||
      item?.profession ||
      item?.category ||
      item?.location ||
      ""
    );
  }

  function getListingImage(item) {
    return (
      item?.image ||
      item?.logo ||
      ""
    );
  }

  function openListing(
    item,
    category
  ) {
    const title =
      getListingTitle(item);

    const image =
      getListingImage(item);

    const subtitle =
      getListingSubtitle(item);

    const details = [];

    const fields = [
      ["Company", item?.company],
      ["Profession", item?.profession],
      ["Location", item?.location],
      ["Work Type", item?.workType],
      ["Salary", item?.salary],
      ["Skills", item?.skills],
      ["Services", item?.services],
      ["Contact", item?.contact]
    ];

    fields.forEach(
      ([label, value]) => {
        if (value) {
          details.push(`
            <div class="listing-detail">
              <strong>
                ${escapeHTML(label)}
              </strong>
              <span>
                ${escapeHTML(value)}
              </span>
            </div>
          `);
        }
      }
    );

    const description =
      item?.description ||
      item?.bio ||
      "";

    const imageHTML = image
      ? `
        <img
          class="listing-image"
          src="${escapeHTML(image)}"
          alt="${escapeHTML(title)}"
        >
      `
      : "";

    const srcdoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        >
        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 24px;
            font-family:
              system-ui,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
            background: #f7f7fb;
            color: #151515;
          }

          .card {
            max-width: 760px;
            margin: 0 auto;
            background: #fff;
            border-radius: 22px;
            padding: 24px;
            box-shadow:
              0 12px 35px rgba(0,0,0,.08);
          }

          .listing-image {
            width: 100%;
            max-height: 320px;
            object-fit: contain;
            border-radius: 18px;
            margin-bottom: 20px;
            background: #f0f0f5;
          }

          h1 {
            margin: 0 0 8px;
            font-size: 28px;
          }

          .subtitle {
            color: #6d6d78;
            margin-bottom: 22px;
          }

          .description {
            line-height: 1.65;
            margin-bottom: 24px;
          }

          .listing-detail {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 13px 0;
            border-top: 1px solid #ececf1;
          }

          .listing-detail strong {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: .06em;
            color: #777;
          }

          .listing-detail span {
            line-height: 1.5;
          }
        </style>
      </head>

      <body>
        <div class="card">
          ${imageHTML}

          <h1>
            ${escapeHTML(title)}
          </h1>

          <div class="subtitle">
            ${escapeHTML(subtitle)}
          </div>

          ${
            description
              ? `
                <div class="description">
                  ${escapeHTML(description)}
                </div>
              `
              : ""
          }

          ${details.join("")}
        </div>
      </body>
      </html>
    `;

    showListingIframe(
      srcdoc,
      category === "JOBS"
        ? "Job Details"
        : "Portfolio Details"
    );
  }

  function showListingIframe(
    srcdoc,
    title
  ) {
    const home =
      byId("homeView");

    const iframeView =
      byId("iframeView");

    const iframe =
      byId("mainIframe");

    const iframeTitle =
      byId("iframeTitle");

    if (
      !iframeView ||
      !iframe
    ) {
      return;
    }

    if (home) {
      home.style.display = "none";
    }

    iframeView.style.display = "";

    if (iframeTitle) {
      iframeTitle.textContent = title;
    }

    iframe.removeAttribute("src");
    iframe.srcdoc = srcdoc;

    document.body.classList.add(
      "iframe-open"
    );
  }

  /* =========================================================
     DISCOVER
     ========================================================= */

  function getDiscoverItems() {
    return [
      ...(PLATFORMS.BET || []).map(
        item => ({
          ...item,
          category: "BET"
        })
      ),

      ...(PLATFORMS.BROKERS || []).map(
        item => ({
          ...item,
          category: "BROKERS"
        })
      ),

      ...(PLATFORMS.BANKS || []).map(
        item => ({
          ...item,
          category: "BANKS"
        })
      )
    ];
  }

  function openDiscover() {
    const {
      overlay,
      content,
      title
    } = getGalleryElements();

    if (!overlay || !content) return;

    content.innerHTML = "";

    if (title) {
      title.textContent =
        "Discover Platforms";
    }

    getDiscoverItems().forEach(
      item => {
        const card =
          document.createElement("button");

        card.type = "button";
        card.className = "gallery-card";

        card.innerHTML = `
          ${platformLogoHTML(item)}

          <span>
            ${escapeHTML(item.name)}
          </span>

          <small>
            ${escapeHTML(item.category)}
          </small>
        `;

        card.addEventListener(
          "click",
          () => {
            closeGallery();

            addPlatformToSlot(
              item.category,
              item,
              null
            );
          }
        );

        content.appendChild(card);
      }
    );

    overlay.classList.add(
      "active"
    );

    overlay.style.display = "";
  }

  /* =========================================================
     ABOUT GTS
     ========================================================= */

  function openAboutGTS() {
    const modal =
      byId("aboutModal");

    if (!modal) return;

    modal.classList.add("active");
    modal.style.display = "";
  }

  function closeAboutGTS() {
    const modal =
      byId("aboutModal");

    if (!modal) return;

    modal.classList.remove("active");
    modal.style.display = "none";
  }

  /* =========================================================
     SIDE MENU
     ========================================================= */

  function openSideMenu() {
    const menu =
      byId("sideMenu");

    if (!menu) return;

    menu.classList.add("active");
    menu.style.display = "";
  }

  function closeSideMenu() {
    const menu =
      byId("sideMenu");

    if (!menu) return;

    menu.classList.remove("active");
    menu.style.display = "none";
  }

  /* =========================================================
     HEADER ACTIONS
     ========================================================= */

  function setupHeader() {
    const menuButton =
      byId("menuButton");

    const discoverButton =
      byId("discoverButton");

    const telegramButton =
      byId("telegramButton");

    const supportButton =
      byId("customerServiceButton");

    const backButton =
      byId("iframeBackButton");

    if (menuButton) {
      menuButton.addEventListener(
        "click",
        openSideMenu
      );
    }

    if (discoverButton) {
      discoverButton.addEventListener(
        "click",
        openDiscover
      );
    }

    if (telegramButton) {
      telegramButton.addEventListener(
        "click",
        () => {
          window.location.href =
            TELEGRAM_URL;
        }
      );
    }

    if (supportButton) {
      supportButton.addEventListener(
        "click",
        () => {
          window.location.href =
            CUSTOMER_SERVICE_URL;
        }
      );
    }

    if (backButton) {
      backButton.addEventListener(
        "click",
        () => {
          const iframe =
            byId("mainIframe");

          if (iframe) {
            iframe.removeAttribute(
              "srcdoc"
            );
            iframe.src = "about:blank";
          }

          showHome();
        }
      );
    }
  }

  /* =========================================================
     CATEGORY BUTTONS
     ========================================================= */

  function setupCategoryButtons() {
    $$(".see-more-btn").forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            const category =
              button.dataset.category;

            if (category) {
              openMorePlatforms(
                category
              );
            }
          }
        );
      }
    );

    $$(".add-more-btn").forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            const category =
              button.dataset.category;

            if (category) {
              openGallery(
                category
              );
            }
          }
        );
      }
    );
  }

  /* =========================================================
     MODAL / OVERLAY EVENTS
     ========================================================= */

  function setupOverlays() {
    const galleryClose =
      byId("galleryClose");

    const aboutClose =
      byId("aboutClose");

    const sideMenuClose =
      byId("sideMenuClose");

    const galleryOverlay =
      byId("galleryOverlay");

    const aboutModal =
      byId("aboutModal");

    if (galleryClose) {
      galleryClose.addEventListener(
        "click",
        closeGallery
      );
    }

    if (aboutClose) {
      aboutClose.addEventListener(
        "click",
        closeAboutGTS
      );
    }

    if (sideMenuClose) {
      sideMenuClose.addEventListener(
        "click",
        closeSideMenu
      );
    }

    if (galleryOverlay) {
      galleryOverlay.addEventListener(
        "click",
        event => {
          if (
            event.target ===
            galleryOverlay
          ) {
            closeGallery();
          }
        }
      );
    }

    if (aboutModal) {
      aboutModal.addEventListener(
        "click",
        event => {
          if (
            event.target ===
            aboutModal
          ) {
            closeAboutGTS();
          }
        }
      );
    }
  }

  /* =========================================================
     SIDE MENU LINKS
     ========================================================= */

  function setupSideMenu() {
    const aboutButton =
      byId("aboutGTSButton");

    const ecosystemButton =
      byId("ecosystemButton");

    if (aboutButton) {
      aboutButton.addEventListener(
        "click",
        () => {
          closeSideMenu();
          openAboutGTS();
        }
      );
    }

    if (ecosystemButton) {
      ecosystemButton.addEventListener(
        "click",
        () => {
          window.location.href =
            GTH_ECOSYSTEM_URL;
        }
      );
    }
  }

  /* =========================================================
     EMAIL FORM
     ========================================================= */

  function setupEmailForm() {
    const form =
      byId("emailForm");

    if (!form) return;

    form.addEventListener(
      "submit",
      handleEmailSubmit
    );
  }

  /* =========================================================
     MQ TALLY EMAIL FALLBACK
     ========================================================= */

  function createEmailTallyFallback() {
    const gate =
      byId("emailGate");

    if (!gate) return;

    /*
      If the new HTML contains
      #emailTallyContainer, use the
      embedded Tally form.
    */

    const container =
      byId("emailTallyContainer");

    if (!container) return;

    container.innerHTML = "";

    const iframe =
      document.createElement("iframe");

    iframe.src =
      buildTallyURL(
        TALLY_FORMS.EMAIL,
        "EMAIL"
      );

    iframe.title =
      "MQ Email Registration";

    iframe.loading =
      "lazy";

    iframe.style.width =
      "100%";

    iframe.style.height =
      "520px";

    iframe.style.border =
      "0";

    iframe.setAttribute(
      "allowtransparency",
      "true"
    );

    container.appendChild(
      iframe
    );
  }

  /* =========================================================
     TALLY MESSAGE HANDLING
     ========================================================= */

  function setupTallyMessages() {
    window.addEventListener(
      "message",
      event => {
        if (
          !event.origin.includes(
            "tally.so"
          )
        ) {
          return;
        }

        const data =
          event.data;

        if (
          typeof data ===
          "string" &&
          data.toLowerCase().includes(
            "submit"
          )
        ) {
          return;
        }

        /*
          Tally may send different
          event structures. We don't
          automatically assume a submission
          unless an email is available.
        */
      }
    );
  }

  /* =========================================================
     THEME / DEVICE
     ========================================================= */

  function applyDeviceClass() {
    const isDark =
      window.matchMedia &&
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

    document.body.classList.toggle(
      "device-dark",
      isDark
    );

    document.body.classList.toggle(
      "device-light",
      !isDark
    );
  }

  /* =========================================================
     SERVICE WORKER
     ========================================================= */

  function registerServiceWorker() {
    if (
      "serviceWorker" in navigator
    ) {
      navigator.serviceWorker
        .register("./sw.js")
        .catch(() => {
          /* Silent failure */
        });
    }
  }

  /* =========================================================
     INITIAL RENDER
     ========================================================= */

  function initializeApp() {
    /*
      Approved data is refreshed every
      time the app initializes.
    */

    if (
      Array.isArray(
        window.MQ_JOBS
      )
    ) {
      PLATFORMS.JOBS =
        window.MQ_JOBS;
    } else {
      PLATFORMS.JOBS = [];
    }

    if (
      Array.isArray(
        window.MQ_PORTFOLIOS
      )
    ) {
      PLATFORMS.PORTFOLIOS =
        window.MQ_PORTFOLIOS;
    } else {
      PLATFORMS.PORTFOLIOS = [];
    }

    renderAllCategories();

    /*
      Keep user selections for the
      normal platform categories.
    */

    [
      "BET",
      "BROKERS",
      "BANKS"
    ].forEach(
      renderSelectedCategory
    );
  }

  /* =========================================================
     DOM READY
     ========================================================= */

  function start() {
    setupHeader();
    setupCategoryButtons();
    setupOverlays();
    setupSideMenu();
    setupEmailForm();
    setupTallyMessages();

    applyDeviceClass();

    window
      .matchMedia(
        "(prefers-color-scheme: dark)"
      )
      ?.addEventListener(
        "change",
        applyDeviceClass
      );

    initializeApp();

    /*
      The email gate is shown only
      when the user has not already
      supplied an email.
    */

    if (!getSavedEmail()) {
      setupEmailGate();
    } else {
      closeEmailGate();
    }

    createEmailTallyFallback();

    registerServiceWorker();
  }

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      start
    );
  } else {
    start();
  }

})();
