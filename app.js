const TALLY_FORMS = {
  EMAIL: "https://tally.so/r/7RGXBR",
  JOBS: "https://tally.so/r/VLry4E",
  PORTFOLIOS: "https://tally.so/r/Xxjy2d"
};

const GTH_ECOSYSTEM_URL = "https://idol0264.github.io/gth-webapp/";

const EMAIL_KEY = "mq_user_email";
const SELECTION_KEY = "mq_platform_selections";

/* =====================================================
   HEADER DESTINATIONS
   ===================================================== */

const TELEGRAM_URL = "";
const CUSTOMER_SERVICE_URL = "";

/* =====================================================
   CATEGORIES
   ===================================================== */

const categories = [
  "BET",
  "BROKERS",
  "BANKS",
  "JOBS",
  "PORTFOLIOS"
];

const approvedJobs =
  Array.isArray(window.MQ_JOBS)
    ? window.MQ_JOBS
    : [];

const approvedPortfolios =
  Array.isArray(window.MQ_PORTFOLIOS)
    ? window.MQ_PORTFOLIOS
    : [];

/* =====================================================
   PLATFORM GALLERY
   ===================================================== */

const gallery = {

  BET: [
    {
      id: "bet9ja",
      name: "Bet9ja",
      url: "https://www.bet9ja.com",
      description:
        "A sports betting platform where users can place bets on sporting events."
    },
    {
      id: "sportybet",
      name: "SportyBet",
      url: "https://www.sportybet.com",
      description:
        "A sports betting platform offering betting markets across different sports."
    },
    {
      id: "betpawa",
      name: "betPawa",
      url: "https://www.betpawa.com",
      description:
        "A digital sports betting platform offering sports betting services."
    },
    {
      id: "betway",
      name: "Betway",
      url: "https://www.betway.com",
      description:
        "A sports betting platform with betting markets for multiple sports."
    },
    {
      id: "betking",
      name: "BetKing",
      url: "https://www.betking.com",
      description:
        "A sports betting platform providing betting markets and related services."
    },
    {
      id: "1xbet",
      name: "1xBet",
      url: "https://1xbet.com",
      description:
        "An online betting platform offering sports betting and other gaming services."
    },
    {
      id: "bet365",
      name: "bet365",
      url: "https://www.bet365.com",
      description:
        "An online sports betting platform with a wide range of sporting markets."
    },
    {
      id: "betika",
      name: "Betika",
      url: "https://www.betika.com",
      description:
        "A sports betting platform providing betting opportunities across various sports."
    },
    {
      id: "betwinner",
      name: "Betwinner",
      url: "https://betwinner.com",
      description:
        "An online betting platform offering sports betting and gaming services."
    }
  ],

  BROKERS: [
    {
      id: "ngx",
      name: "NGX",
      url: "https://www.ngxgroup.com",
      description:
        "The Nigerian Exchange provides a marketplace for buying and selling securities in Nigeria."
    },
    {
      id: "bamboo",
      name: "Bamboo",
      url: "https://investbamboo.com",
      description:
        "An investment platform that gives users access to investment opportunities."
    },
    {
      id: "cowrywise",
      name: "Cowrywise",
      url: "https://cowrywise.com",
      description:
        "A digital savings and investment platform."
    },
    {
      id: "trove",
      name: "Trove",
      url: "https://troveapp.co",
      description:
        "An investment platform providing access to financial markets and investment products."
    },
    {
      id: "chaka",
      name: "Chaka",
      url: "https://chaka.com",
      description:
        "A digital investment platform providing access to different investment opportunities."
    },
    {
      id: "rise",
      name: "Rise",
      url: "https://risevest.com",
      description:
        "A digital investment platform focused on investment products and wealth-building opportunities."
    },
    {
      id: "stanbic-ibtc",
      name: "Stanbic IBTC",
      url: "https://www.stanbicibtcbank.com",
      description:
        "A financial services institution offering banking and investment-related services."
    },
    {
      id: "gse",
      name: "Ghana Stock Exchange",
      url: "https://gse.com.gh",
      description:
        "Ghana's securities exchange where listed securities can be traded."
    },
    {
      id: "ic-securities",
      name: "IC Securities",
      url: "https://icsecurities.com",
      description:
        "A financial services firm providing investment and securities-related services."
    }
  ],

  BANKS: [
    {
      id: "access-bank",
      name: "Access Bank",
      url: "https://www.accessbankplc.com",
      description:
        "A commercial bank providing banking and financial services."
    },
    {
      id: "gtco",
      name: "GTCO / GTBank",
      url: "https://www.gtbank.com",
      description:
        "A financial institution providing banking and related financial services."
    },
    {
      id: "uba",
      name: "UBA",
      url: "https://www.ubagroup.com",
      description:
        "A banking group providing personal, business and corporate financial services."
    },
    {
      id: "firstbank",
      name: "FirstBank",
      url: "https://www.firstbanknigeria.com",
      description:
        "A Nigerian bank offering personal, business and corporate banking services."
    },
    {
      id: "zenith",
      name: "Zenith Bank",
      url: "https://www.zenithbank.com",
      description:
        "A financial institution providing banking and financial services."
    },
    {
      id: "stanbic-ibtc-bank",
      name: "Stanbic IBTC",
      url: "https://www.stanbicibtcbank.com",
      description:
        "A financial services institution offering banking and investment-related services."
    },
    {
      id: "gcb",
      name: "GCB Bank",
      url: "https://www.gcb.com.gh",
      description:
        "A Ghanaian bank providing banking and financial services."
    },
    {
      id: "ecobank",
      name: "Ecobank",
      url: "https://www.ecobank.com",
      description:
        "A pan-African banking group providing banking and financial services."
    },
    {
      id: "absa-ghana",
      name: "Absa Ghana",
      url: "https://www.absa.com.gh",
      description:
        "A Ghanaian banking institution providing financial and banking services."
    }
  ],

  JOBS: [],
  PORTFOLIOS: []
};

/* =====================================================
   DISCOVER DATA
   ===================================================== */

const discoverPlatforms = [
  ...gallery.BET.map(platform => ({
    ...platform,
    category: "BET"
  })),

  ...gallery.BROKERS.map(platform => ({
    ...platform,
    category: "BROKERS"
  })),

  ...gallery.BANKS.map(platform => ({
    ...platform,
    category: "BANKS"
  }))
];

/* =====================================================
   STORAGE
   ===================================================== */

let selections =
  JSON.parse(
    localStorage.getItem(SELECTION_KEY) || "{}"
  );

let pendingCategory = null;
let pendingSlot = null;

/* =====================================================
   HELPERS
   ===================================================== */

function getSelections(category) {

  if (!Array.isArray(selections[category])) {
    selections[category] =
      new Array(9).fill(null);
  }

  return selections[category];
}

function saveSelections() {

  localStorage.setItem(
    SELECTION_KEY,
    JSON.stringify(selections)
  );

}

/* =====================================================
   SAFE HTML
   ===================================================== */

function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}

/* =====================================================
   PLATFORM LOGO
   ===================================================== */

function platformLogoHTML(
  platform,
  size = "slot"
) {

  if (!platform || !platform.url) {
    return "";
  }

  let hostname = "";

  try {

    hostname =
      new URL(platform.url)
        .hostname
        .replace(/^www\./, "");

  } catch {

    hostname = "";

  }

  const logoUrl =
    hostname
      ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=128`
      : "";

  const initials =
    String(platform.name || "MQ")
      .replace(/[^A-Za-z0-9 ]/g, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map(word => word[0])
      .join("")
      .toUpperCase() || "MQ";

  return `
    <span class="platform-logo platform-logo-${size}">

      ${
        logoUrl
          ? `
            <img
              src="${logoUrl}"
              alt="${escapeHTML(platform.name)} logo"
              loading="lazy"
              onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='grid';
              "
            >
          `
          : ""
      }

      <span
        class="platform-logo-fallback"
        style="display:${logoUrl ? "none" : "grid"}"
      >
        ${escapeHTML(initials)}
      </span>

    </span>
  `;

}

/* =====================================================
   RENDER CATEGORY
   ===================================================== */

function renderCategory(category) {

  const grid =
    document.querySelector(
      `.platform-grid[data-category="${category}"]`
    );

  if (!grid) {
    return;
  }

  const selected =
    getSelections(category);

  grid.innerHTML = "";

  /* ===================================================
     JOBS / PORTFOLIOS
     =================================================== */

  if (
    category === "JOBS" ||
    category === "PORTFOLIOS"
  ) {

    const approved =
      category === "JOBS"
        ? approvedJobs
        : approvedPortfolios;

    for (
      let index = 0;
      index < 9;
      index++
    ) {

      const listing =
        approved[index];

      const slot =
        document.createElement("button");

      slot.className = "slot";

      if (listing) {

        slot.classList.add(
          "listing-slot"
        );

        const image =
          listing.image ||
          listing.logo ||
          "";

        const displayTitle =
          listing.title ||
          listing.name ||
          listing.company ||
          "Listing";

        const displaySubtitle =
          listing.subtitle ||
          listing.profession ||
          listing.category ||
          listing.location ||
          "";

        slot.innerHTML = `
          ${
            image
              ? `
                <img
                  src="${escapeHTML(image)}"
                  alt="${escapeHTML(displayTitle)}"
                  class="listing-image"
                >
              `
              : `
                <span class="listing-placeholder">
                  ${
                    category === "JOBS"
                      ? "JOB"
                      : "PORTFOLIO"
                  }
                </span>
              `
          }

          <strong>
            ${escapeHTML(displayTitle)}
          </strong>

          <small>
            ${escapeHTML(displaySubtitle)}
          </small>
        `;

        slot.addEventListener(
          "click",
          () =>
            openListing(
              listing,
              category
            )
        );

      } else {

        slot.classList.add("plus");

        slot.innerHTML = `
          <span class="plus-symbol">+</span>

          <small>
            ${
              category === "JOBS"
                ? "Submit job"
                : "Submit portfolio"
            }
          </small>
        `;

        slot.addEventListener(
          "click",
          () =>
            openGallery(
              category,
              index
            )
        );

      }

      grid.appendChild(slot);

    }

    return;
  }

  /* ===================================================
     PLATFORM CATEGORIES
     =================================================== */

  for (
    let index = 0;
    index < 9;
    index++
  ) {

    const platform =
      selected[index];

    const slot =
      document.createElement("button");

    slot.className = "slot";

    if (!platform) {

      slot.classList.add("plus");

      slot.innerHTML = `
        <span class="plus-symbol">+</span>

        <small>
          Add platform
        </small>
      `;

      slot.addEventListener(
        "click",
        () =>
          openGallery(
            category,
            index
          )
      );

    } else {

      slot.innerHTML = `
        ${platformLogoHTML(platform, "slot")}

        <strong>
          ${escapeHTML(platform.name)}
        </strong>

        <small>
          Tap to open
        </small>
      `;

      slot.addEventListener(
        "click",
        () =>
          openPlatform(platform)
      );

    }

    grid.appendChild(slot);

  }

}

/* =====================================================
   RENDER ALL
   ===================================================== */

function renderAllCategories() {

  categories.forEach(
    category =>
      renderCategory(category)
  );

}

/* =====================================================
   OPEN CATEGORY GALLERY
   ===================================================== */

function openGallery(
  category,
  slotIndex
) {

  pendingCategory = category;
  pendingSlot = slotIndex;

  const title =
    document.getElementById(
      "galleryTitle"
    );

  const list =
    document.getElementById(
      "galleryList"
    );

  list.innerHTML = "";

  /* ===================================================
     JOBS / PORTFOLIOS
     =================================================== */

  if (
    category === "JOBS" ||
    category === "PORTFOLIOS"
  ) {

    title.textContent =
      category === "JOBS"
        ? "Submit a job opportunity"
        : "Submit a portfolio";

    const button =
      document.createElement("button");

    button.className =
      "gallery-item";

    button.innerHTML = `
      <strong>
        ${
          category === "JOBS"
            ? "Submit Job Opportunity"
            : "Submit Portfolio"
        }
      </strong>

      <span>
        Open the submission form inside MQ.
      </span>
    `;

    button.addEventListener(
      "click",
      () =>
        openTallyForm(category)
    );

    list.appendChild(button);

  }

  /* ===================================================
     PLATFORM CATEGORIES
     =================================================== */

  else {

    title.textContent =
      `Select a ${category.toLowerCase()} platform`;

    const selected =
      getSelections(category);

    const alreadySelected =
      new Set(
        selected
          .filter(Boolean)
          .map(
            platform =>
              platform.id
          )
      );

    gallery[category]
      .forEach(platform => {

        const button =
          document.createElement("button");

        button.className =
          "gallery-item";

        const used =
          alreadySelected.has(
            platform.id
          );

        button.innerHTML = `
          ${platformLogoHTML(platform, "gallery")}

          <strong>
            ${escapeHTML(platform.name)}
          </strong>

          <span>
            ${
              used
                ? "Already selected"
                : "Tap to add"
            }
          </span>
        `;

        if (used) {

          button.disabled = true;

        } else {

          button.addEventListener(
            "click",
            () =>
              selectPlatform(platform)
          );

        }

        list.appendChild(button);

      });

  }

  document
    .getElementById(
      "galleryOverlay"
    )
    .classList.remove(
      "hidden"
    );

}

/* =====================================================
   DISCOVER
   ===================================================== */

function openDiscover() {

  pendingCategory = null;
  pendingSlot = null;

  const title =
    document.getElementById(
      "galleryTitle"
    );

  const list =
    document.getElementById(
      "galleryList"
    );

  title.textContent =
    "Discover Platforms";

  list.innerHTML = "";

  discoverPlatforms.forEach(
    platform => {

      const card =
        document.createElement("div");

      card.className =
        "discover-item";

      let hostname = "";

      try {

        hostname =
          new URL(platform.url)
            .hostname
            .replace(/^www\./, "");

      } catch {

        hostname = "";

      }

      const logoUrl =
        hostname
          ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=128`
          : "";

      const initials =
        String(
          platform.name || "MQ"
        )
          .replace(
            /[^A-Za-z0-9 ]/g,
            ""
          )
          .split(" ")
          .filter(Boolean)
          .slice(0, 2)
          .map(
            word =>
              word[0]
          )
          .join("")
          .toUpperCase() || "MQ";

      card.innerHTML = `
        <div class="discover-top">

          <div class="discover-logo">

            ${
              logoUrl
                ? `
                  <img
                    src="${logoUrl}"
                    alt="${escapeHTML(platform.name)} logo"
                    loading="lazy"
                    onerror="
                      this.style.display='none';
                      this.nextElementSibling.style.display='grid';
                    "
                  >
                `
                : ""
            }

            <span
              class="discover-logo-fallback"
              style="display:${logoUrl ? "none" : "grid"}"
              aria-hidden="true"
            >
              ${escapeHTML(initials)}
            </span>

          </div>

          <div class="discover-title">

            <strong>
              ${escapeHTML(platform.name)}
            </strong>

            <span class="discover-category">
              ${escapeHTML(platform.category)}
            </span>

          </div>

        </div>

        <p>
          ${escapeHTML(platform.description)}
        </p>

        <button
          class="discover-add"
          type="button"
        >
          Add to ${escapeHTML(platform.category)}
        </button>
      `;

      const addButton =
        card.querySelector(
          ".discover-add"
        );

      addButton.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          discoverAdd(platform);

        }
      );

      list.appendChild(card);

    }
  );

  document
    .getElementById(
      "galleryOverlay"
    )
    .classList.remove(
      "hidden"
    );

}

/* =====================================================
   ADD FROM DISCOVER
   ===================================================== */

function discoverAdd(platform) {

  if (
    !platform ||
    !platform.category
  ) {

    showToast(
      "Platform unavailable."
    );

    return;
  }

  const category =
    platform.category;

  const selected =
    getSelections(category);

  const duplicate =
    selected.some(
      item =>
        item &&
        item.id === platform.id
    );

  if (duplicate) {

    showToast(
      `${platform.name} is already selected`
    );

    return;
  }

  const firstEmpty =
    selected.findIndex(
      item => !item
    );

  if (firstEmpty === -1) {

    showToast(
      `${category} is full`
    );

    return;
  }

  selected[firstEmpty] =
    platform;

  saveSelections();

  closeGallery();

  renderCategory(category);

  showToast(
    `${platform.name} added to ${category}`
  );

}

/* =====================================================
   TALLY FORM
   ===================================================== */

function openTallyForm(category) {

  const tallyUrl =
    TALLY_FORMS[category];

  if (!tallyUrl) {

    closeGallery();

    showToast(
      "Tally form unavailable."
    );

    return;
  }

  closeGallery();

  const homeView =
    document.getElementById(
      "homeView"
    );

  const iframeView =
    document.getElementById(
      "iframeView"
    );

  const frame =
    document.getElementById(
      "platformFrame"
    );

  const title =
    document.getElementById(
      "iframeTitle"
    );

  homeView.classList.add(
    "hidden"
  );

  iframeView.classList.remove(
    "hidden"
  );

  title.textContent =
    category === "JOBS"
      ? "Submit Job Opportunity"
      : "Submit Portfolio";

  frame.removeAttribute(
    "srcdoc"
  );

  frame.src =
    "about:blank";

  /* External fallback link */

  const iframeHeader =
    document.querySelector(
      ".iframe-header"
    );

  const oldLink =
    document.getElementById(
      "iframeExternalLink"
    );

  if (oldLink) {
    oldLink.remove();
  }

  const externalLink =
    document.createElement("a");

  externalLink.id =
    "iframeExternalLink";

  externalLink.href =
    tallyUrl;

  externalLink.target =
    "_blank";

  externalLink.rel =
    "noopener noreferrer";

  externalLink.textContent =
    "Open form ↗";

  externalLink.style.cssText = `
    margin-left:auto;
    color:inherit;
    font-size:13px;
    font-weight:700;
    text-decoration:none;
  `;

  iframeHeader.appendChild(
    externalLink
  );

  setTimeout(() => {

    const separator =
      tallyUrl.includes("?")
        ? "&"
        : "?";

    frame.src =
      `${tallyUrl}${separator}category=${encodeURIComponent(category)}&hideTitle=1`;

  }, 100);

  window.scrollTo(
    0,
    0
  );

}

/* =====================================================
   APPROVED LISTING
   ===================================================== */

function openListing(
  listing,
  category
) {

  if (!listing) {

    showToast(
      "Listing unavailable."
    );

    return;
  }

  const title =
    listing.title ||
    listing.name ||
    listing.company ||
    "Listing";

  const image =
    listing.image ||
    listing.logo ||
    "";

  const details = [
    listing.company,
    listing.profession,
    listing.location,
    listing.workType,
    listing.description,
    listing.bio,
    listing.skills,
    listing.services,
    listing.salary,
    listing.contact
  ]
    .filter(Boolean)
    .join("\n\n");

  const frame =
    document.getElementById(
      "platformFrame"
    );

  document
    .getElementById(
      "homeView"
    )
    .classList.add(
      "hidden"
    );

  document
    .getElementById(
      "iframeView"
    )
    .classList.remove(
      "hidden"
    );

  document
    .getElementById(
      "iframeTitle"
    )
    .textContent =
    title;

  const oldLink =
    document.getElementById(
      "iframeExternalLink"
    );

  if (oldLink) {
    oldLink.remove();
  }

  const imageHTML =
    image
      ? `
        <img
          src="${escapeHTML(image)}"
          alt="${escapeHTML(title)}"
          style="
            width:100%;
            max-width:320px;
            border-radius:20px;
            display:block;
            margin:0 auto 24px;
          "
        >
      `
      : "";

  const categoryLabel =
    category === "JOBS"
      ? "JOB OPPORTUNITY"
      : "PORTFOLIO";

  frame.removeAttribute(
    "src"
  );

  frame.srcdoc = `
    <!DOCTYPE html>

    <html lang="en">

    <head>

      <meta charset="UTF-8">

      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0"
      >

      <title>
        ${escapeHTML(title)}
      </title>

      <style>

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 24px;
          font-family: Arial, sans-serif;
          background: #f7f7f7;
          color: #111;
        }

        .listing {
          max-width: 650px;
          margin: 0 auto;
        }

        .label {
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 700;
          opacity: .6;
          margin-bottom: 10px;
        }

        h1 {
          margin: 0 0 20px;
          font-size: 30px;
        }

        .details {
          white-space: pre-line;
          line-height: 1.7;
          font-size: 16px;
        }

      </style>

    </head>

    <body>

      <main class="listing">

        <div class="label">
          ${escapeHTML(categoryLabel)}
        </div>

        ${imageHTML}

        <h1>
          ${escapeHTML(title)}
        </h1>

        <div class="details">
          ${
            escapeHTML(
              details ||
              "No additional details available."
            )
          }
        </div>

      </main>

    </body>

    </html>
  `;

  window.scrollTo(
    0,
    0
  );

}

/* =====================================================
   SELECT PLATFORM FROM +
   ===================================================== */

function selectPlatform(
  platform
) {

  if (
    pendingCategory === null ||
    pendingSlot === null
  ) {
    return;
  }

  const category =
    pendingCategory;

  const slotIndex =
    pendingSlot;

  const selected =
    getSelections(category);

  const duplicate =
    selected.some(
      item =>
        item &&
        item.id === platform.id
    );

  if (duplicate) {

    showToast(
      "This platform is already selected."
    );

    return;
  }

  if (
    selected[slotIndex]
  ) {

    showToast(
      "That slot is already occupied."
    );

    return;
  }

  selected[slotIndex] =
    platform;

  saveSelections();

  closeGallery();

  renderCategory(category);

  showToast(
    `${platform.name} added`
  );

  pendingCategory =
    null;

  pendingSlot =
    null;

}

/* =====================================================
   SEE MORE / ADD MORE
   ===================================================== */

document
  .querySelectorAll(
    "[data-more]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const category =
          button.dataset.more;

        const selected =
          getSelections(category);

        const firstEmpty =
          selected.findIndex(
            item => !item
          );

        openGallery(
          category,
          firstEmpty === -1
            ? 0
            : firstEmpty
        );

      }
    );

  });

/* =====================================================
   CLOSE GALLERY
   ===================================================== */

function closeGallery() {

  document
    .getElementById(
      "galleryOverlay"
    )
    .classList.add(
      "hidden"
    );

  pendingCategory =
    null;

  pendingSlot =
    null;

}

document
  .getElementById(
    "galleryClose"
  )
  .addEventListener(
    "click",
    closeGallery
  );

document
  .getElementById(
    "galleryOverlay"
  )
  .addEventListener(
    "click",
    event => {

      if (
        event.target.id ===
        "galleryOverlay"
      ) {

        closeGallery();

      }

    }
  );

/* =====================================================
   EXTERNAL PLATFORM
   ===================================================== */

function openPlatform(
  platform
) {

  if (
    !platform ||
    !platform.url
  ) {

    showToast(
      "Platform link unavailable."
    );

    return;
  }

  window.location.href =
    platform.url;

}

/* =====================================================
   CLOSE PLATFORM VIEW
   ===================================================== */

function closePlatform() {

  const frame =
    document.getElementById(
      "platformFrame"
    );

  frame.src =
    "about:blank";

  frame.srcdoc =
    "";

  const externalLink =
    document.getElementById(
      "iframeExternalLink"
    );

  if (externalLink) {
    externalLink.remove();
  }

  document
    .getElementById(
      "iframeView"
    )
    .classList.add(
      "hidden"
    );

  document
    .getElementById(
      "homeView"
    )
    .classList.remove(
      "hidden"
    );

  window.scrollTo(
    0,
    0
  );

}

/* =====================================================
   MQ LOGO
   ===================================================== */

document
  .getElementById(
    "backBtn"
  )
  .addEventListener(
    "click",
    closePlatform
  );

document
  .getElementById(
    "homeLogo"
  )
  .addEventListener(
    "click",
    closePlatform
  );

/* =====================================================
   SIDE MENU
   ===================================================== */

const sideMenu =
  document.getElementById(
    "sideMenu"
  );

document
  .getElementById(
    "menuBtn"
  )
  .addEventListener(
    "click",
    () => {

      sideMenu.classList.add(
        "open"
      );

    }
  );

document
  .getElementById(
    "menuClose"
  )
  .addEventListener(
    "click",
    () => {

      sideMenu.classList.remove(
        "open"
      );

    }
  );

/* =====================================================
   ABOUT GTH / GTS
   ===================================================== */

function openAboutGTS() {

  sideMenu.classList.remove(
    "open"
  );

  const title =
    document.getElementById(
      "galleryTitle"
    );

  const list =
    document.getElementById(
      "galleryList"
    );

  title.textContent =
    "About GTS";

  list.innerHTML = `

    <div class="discover-item">

      <div class="discover-top">

        <div class="discover-logo">
          <span
            class="discover-logo-fallback"
            style="display:grid"
          >
            GTS
          </span>
        </div>

        <div class="discover-title">

          <strong>
            God’stime Softwares
          </strong>

          <span class="discover-category">
            GTH SUBSIDIARY
          </span>

        </div>

      </div>

      <p>
        GTS (God’stime Softwares) is the software
        and digital solutions subsidiary of
        God’stime Holdings (GTH).
      </p>

      <p>
        GTS is focused on creating and developing
        useful digital platforms, software products,
        tools and technology-driven experiences
        designed to make everyday digital activities
        simpler, more accessible and more connected.
      </p>

      <p>
        Through GTS, GTH explores practical
        technology solutions across different areas —
        from digital platforms and information tools
        to products that connect people with useful
        online services and opportunities.
      </p>

      <p>
        <strong>MQ — Money Making Menu</strong>
        is one of the products within the GTS
        ecosystem. MQ is designed as a simple
        discovery platform that brings different
        money-making platforms and digital
        opportunities into one organized experience,
        helping users discover and access services
        from different categories.
      </p>

      <p>
        GTS is part of GTH's broader vision of
        building an ecosystem of digital products
        and platforms under one holding company,
        while allowing each subsidiary and product
        to develop its own purpose, identity and
        functionality.
      </p>

      <p>
        <strong>
          GTS. Building useful technology.
          Creating digital possibilities.
        </strong>
      </p>

      <button
        type="button"
        class="discover-add"
        id="ecosystemBtn"
      >
        Explore the GTH Ecosystem →
      </button>

    </div>

  `;

  document
    .getElementById(
      "ecosystemBtn"
    )
    .addEventListener(
      "click",
      () => {

        window.location.href =
          GTH_ECOSYSTEM_URL;

      }
    );

  document
    .getElementById(
      "galleryOverlay"
    )
    .classList.remove(
      "hidden"
    );

}

document
  .getElementById(
    "aboutGthBtn"
  )
  .addEventListener(
    "click",
    openAboutGTS
  );

/* =====================================================
   HEADER — DISCOVER
   ===================================================== */

document
  .getElementById(
    "discoverBtn"
  )
  .addEventListener(
    "click",
    openDiscover
  );

/* =====================================================
   TELEGRAM
   ===================================================== */

document
  .getElementById("telegramBtn")
  .addEventListener(
    "click",
    () => {

      window.open(
        "https://t.me/gt_softwares",
        "_blank",
        "noopener,noreferrer"
      );

    }
  );


/* =====================================================
   CUSTOMER SERVICE — WHATSAPP
   ===================================================== */

document
  .getElementById("supportBtn")
  .addEventListener(
    "click",
    () => {

      window.open(
        "https://wa.me/qr/VGCCQ6WUPR4SO1",
        "_blank",
        "noopener,noreferrer"
      );

    }
  );

/* =====================================================
   EMAIL GATE — TALLY
   ===================================================== */

const emailGate =
  document.getElementById("emailGate");

const emailInput =
  document.getElementById("emailInput");

function openEmailGate() {

  if (!emailGate) {
    return;
  }

  emailGate.classList.remove("hidden");

}

function closeEmailGate() {

  if (!emailGate) {
    return;
  }

  emailGate.classList.add("hidden");

}

/*
 * If this device has already completed the MQ email gate,
 * allow the user into MQ without showing the gate again.
 */
const savedEmail =
  localStorage.getItem(EMAIL_KEY);

if (savedEmail) {

  closeEmailGate();

} else {

  openEmailGate();

}

/*
 * The email gate uses the Tally collection form.
 *
 * The existing email input is kept only as a fallback
 * if the current HTML still contains it.
 */
const emailForm =
  document.getElementById("emailForm");

if (emailForm) {

  emailForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const email =
        emailInput
          ? emailInput.value.trim()
          : "";

      if (!email) {

        if (emailInput) {
          emailInput.reportValidity();
        }

        return;
      }

      /*
       * Open the official MQ email collection form.
       *
       * The email is also passed as a hidden-field value.
       * Your Tally form should have a hidden field named:
       *
       * email
       *
       * if you want Tally to receive this value automatically.
       */
      const tallyUrl =
        `${TALLY_FORMS.EMAIL}?email=${encodeURIComponent(email)}`;

      window.open(
        tallyUrl,
        "_blank",
        "noopener,noreferrer"
      );

      /*
       * Remember the email locally so the gate does not
       * repeatedly appear on this device.
       */
      localStorage.setItem(
        EMAIL_KEY,
        email
      );

      closeEmailGate();

      showToast(
        "Email submitted. Welcome to MQ."
      );

    }
  );

}

/*
 * Allow the user to open the Tally email form directly
 * if an element with this ID exists in the HTML.
 */
const tallyEmailButton =
  document.getElementById("tallyEmailButton");

if (tallyEmailButton) {

  tallyEmailButton.addEventListener(
    "click",
    () => {

      window.open(
        TALLY_FORMS.EMAIL,
        "_blank",
        "noopener,noreferrer"
      );

    }
  );

}

/* =====================================================
   TOAST
   ===================================================== */

function showToast(
  message
) {

  const toast =
    document.getElementById(
      "toast"
    );

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    window.mqToastTimer
  );

  window.mqToastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2200
    );

}

/* =====================================================
   INITIALISE
   ===================================================== */

renderAllCategories();

/* =====================================================
   PWA SERVICE WORKER
===================================================== */

if ("serviceWorker" in navigator) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register("./sw.js")
        .then(() => {
          console.log("MQ service worker registered.");
        })
        .catch(error => {
          console.error(
            "MQ service worker registration failed:",
            error
          );
        });

    }
  );

}
