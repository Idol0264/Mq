const TALLY_FORMS = {
  JOBS: "https://tally.so/r/VLry4E",
  PORTFOLIOS: "https://tally.so/r/Xxjy2d"
};
const EMAIL_KEY = "mq_user_email";
const SELECTION_KEY = "mq_platform_selections";

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
   GTS GALLERY
   ===================================================== */

const gallery = {

  BET: [
    { id: "bet9ja", name: "Bet9ja", url: "https://www.bet9ja.com" },
    { id: "sportybet", name: "SportyBet", url: "https://www.sportybet.com" },
    { id: "betpawa", name: "betPawa", url: "https://www.betpawa.com" },
    { id: "betway", name: "Betway", url: "https://www.betway.com" },
    { id: "betking", name: "BetKing", url: "https://www.betking.com" },
    { id: "1xbet", name: "1xBet", url: "https://1xbet.com" },
    { id: "bet365", name: "bet365", url: "https://www.bet365.com" },
    { id: "betika", name: "Betika", url: "https://www.betika.com" },
    { id: "betwinner", name: "Betwinner", url: "https://betwinner.com" }
  ],

  BROKERS: [
    { id: "ngx", name: "NGX", url: "https://www.ngxgroup.com" },
    { id: "bamboo", name: "Bamboo", url: "https://investbamboo.com" },
    { id: "cowrywise", name: "Cowrywise", url: "https://cowrywise.com" },
    { id: "trove", name: "Trove", url: "https://troveapp.co" },
    { id: "chaka", name: "Chaka", url: "https://chaka.com" },
    { id: "rise", name: "Rise", url: "https://risevest.com" },
    { id: "stanbic-ibtc", name: "Stanbic IBTC", url: "https://www.stanbicibtcbank.com" },
    { id: "gse", name: "Ghana Stock Exchange", url: "https://gse.com.gh" },
    { id: "ic-securities", name: "IC Securities", url: "https://icsecurities.com" }
  ],

  BANKS: [
    { id: "access-bank", name: "Access Bank", url: "https://www.accessbankplc.com" },
    { id: "gtco", name: "GTCO / GTBank", url: "https://www.gtbank.com" },
    { id: "uba", name: "UBA", url: "https://www.ubagroup.com" },
    { id: "firstbank", name: "FirstBank", url: "https://www.firstbanknigeria.com" },
    { id: "zenith", name: "Zenith Bank", url: "https://www.zenithbank.com" },
    { id: "stanbic-ibtc-bank", name: "Stanbic IBTC", url: "https://www.stanbicibtcbank.com" },
    { id: "gcb", name: "GCB Bank", url: "https://www.gcb.com.gh" },
    { id: "ecobank", name: "Ecobank", url: "https://www.ecobank.com" },
    { id: "absa-ghana", name: "Absa Ghana", url: "https://www.absa.com.gh" }
  ],

  /* JOBS and PORTFOLIOS use Tally only */

  JOBS: [],

  PORTFOLIOS: []

};


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
    selections[category] = new Array(9).fill(null);
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
   RENDER CATEGORY
   ===================================================== */

function renderCategory(category) {

  const grid =
    document.querySelector(
      `.platform-grid[data-category="${category}"]`
    );

  if (!grid) return;

  const selected =
    getSelections(category);

  grid.innerHTML = "";

  /*
   * JOBS / PORTFOLIOS
   * Approved listings are displayed first.
   * Empty positions remain + slots for new submissions.
   */

  if (
    category === "JOBS" ||
    category === "PORTFOLIOS"
  ) {

    const approved =
      category === "JOBS"
        ? approvedJobs
        : approvedPortfolios;

    for (let index = 0; index < 9; index++) {

      const listing =
        approved[index];

      const slot =
        document.createElement("button");

      slot.className = "slot";

      if (listing) {

        slot.classList.add("listing-slot");

        const image =
          listing.image ||
          listing.logo ||
          "";

        slot.innerHTML = `
          ${
            image
              ? `<img
                   src="${image}"
                   alt=""
                   class="listing-image"
                 >`
              : ""
          }

          <strong>
            ${
              listing.title ||
              listing.name ||
              listing.company ||
              "Listing"
            }
          </strong>

          <small>
            ${
              listing.subtitle ||
              listing.profession ||
              listing.location ||
              ""
            }
          </small>
        `;

        slot.addEventListener(
          "click",
          () => openListing(
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
          () => openGallery(
            category,
            index
          )
        );

      }

      grid.appendChild(slot);

    }

    return;

  }


  /*
   * BET / BROKERS / BANKS
   */

  for (let index = 0; index < 9; index++) {

    const platform =
      selected[index];

    const slot =
      document.createElement("button");

    slot.className = "slot";


    if (!platform) {

      slot.classList.add("plus");

      slot.innerHTML = `
        <span class="plus-symbol">+</span>
        <small>Add platform</small>
      `;

      slot.addEventListener(
        "click",
        () => openGallery(
          category,
          index
        )
      );

    } else {

      slot.innerHTML = `
        <strong>
          ${platform.name}
        </strong>

        <small>
          Tap to open
        </small>
      `;

      slot.addEventListener(
        "click",
        () => openPlatform(
          platform
        )
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
    category => renderCategory(category)
  );

}


/* =====================================================
   OPEN GALLERY
   ===================================================== */

function openGallery(category, slotIndex) {

  pendingCategory = category;
  pendingSlot = slotIndex;

  const title =
    document.getElementById("galleryTitle");

  const list =
    document.getElementById("galleryList");

  list.innerHTML = "";


  /* JOBS / PORTFOLIOS */

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
        Your submission will open inside MQ.
      </span>
    `;

    button.addEventListener(
      "click",
      () => openTallyForm(category)
    );

    list.appendChild(button);

  }


  /* NORMAL GALLERY */

  else {

    title.textContent =
      `Select a ${category.toLowerCase()} platform`;


    const selected =
      getSelections(category);

    const alreadySelected =
      new Set(
        selected
          .filter(Boolean)
          .map(platform => platform.id)
      );


    gallery[category].forEach(platform => {

      const button =
        document.createElement("button");

      button.className =
        "gallery-item";


      const used =
        alreadySelected.has(platform.id);


      button.innerHTML = `
        <strong>${platform.name}</strong>
        <span>
          ${
            used
              ? "Already selected"
              : "Tap to add"
          }
        </span>
      `;


      button.addEventListener(
        "click",
        () => selectPlatform(platform)
      );


      list.appendChild(button);

    });

  }


  document
    .getElementById("galleryOverlay")
    .classList.remove("hidden");

}


/* =====================================================
   TALLY FORM
   ONLY JOBS AND PORTFOLIOS USE IFRAME
   ===================================================== */

function openTallyForm(category) {

  const tallyUrl = TALLY_FORMS[category];

  if (!tallyUrl) {
    closeGallery();
    showToast("Tally form unavailable.");
    return;
  }

  closeGallery();

  document
    .getElementById("homeView")
    .classList.add("hidden");

  document
    .getElementById("iframeView")
    .classList.remove("hidden");

  document
    .getElementById("iframeTitle")
    .textContent =
    category === "JOBS"
      ? "Submit Job Opportunity"
      : "Submit Portfolio";

  const frame =
    document.getElementById("platformFrame");

  const separator =
    tallyUrl.includes("?")
      ? "&"
      : "?";

  frame.src =
    `${tallyUrl}${separator}category=${encodeURIComponent(category)}`;

  window.scrollTo(0, 0);
}

/* =====================================================
   OPEN APPROVED LISTING
   ===================================================== */

function openListing(listing, category) {

  if (!listing) {
    showToast("Listing unavailable.");
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
    document.getElementById("platformFrame");

  const iframeView =
    document.getElementById("iframeView");

  const homeView =
    document.getElementById("homeView");

  homeView.classList.add("hidden");
  iframeView.classList.remove("hidden");

  document
    .getElementById("iframeTitle")
    .textContent = title;

  /*
   * Approved listings are currently displayed
   * through a simple MQ-generated page.
   */

  const imageHTML =
    image
      ? `
        <img
          src="${image}"
          alt="${title}"
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

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0"
      >
      <title>${title}</title>

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
          ${categoryLabel}
        </div>

        ${imageHTML}

        <h1>${title}</h1>

        <div class="details">
          ${details || "No additional details available."}
        </div>

      </main>

    </body>
    </html>
  `;

  frame.srcdoc = html;

  window.scrollTo(0, 0);
}

/* =====================================================
   SELECT PLATFORM
   ===================================================== */

function selectPlatform(platform) {

  if (
    pendingCategory === null ||
    pendingSlot === null
  ) {
    return;
  }


  const selected =
    getSelections(pendingCategory);


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


  selected[pendingSlot] =
    platform;

  saveSelections();

  closeGallery();

  renderCategory(
    pendingCategory
  );

  showToast(
    `${platform.name} added`
  );


  pendingCategory = null;
  pendingSlot = null;

}


/* =====================================================
   SEE MORE / ADD MORE
   ===================================================== */

document
  .querySelectorAll("[data-more]")
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
    .getElementById("galleryOverlay")
    .classList.add("hidden");

}


document
  .getElementById("galleryClose")
  .addEventListener(
    "click",
    closeGallery
  );


document
  .getElementById("galleryOverlay")
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
   OPEN EXTERNAL PLATFORM
   IMPORTANT:
   EXTERNAL WEBSITES ARE NOT IFRAMED.
   THEY OPEN DIRECTLY IN A NEW TAB.
   ===================================================== */

function openPlatform(platform) {

  if (!platform || !platform.url) {

    showToast(
      "Platform link unavailable."
    );

    return;

  }

  window.location.href = platform.url;

}


/* =====================================================
   CLOSE TALLY VIEW
   ===================================================== */

function closePlatform() {

  const frame =
    document.getElementById(
      "platformFrame"
    );

  frame.src =
    "about:blank";


  document
    .getElementById("iframeView")
    .classList.add("hidden");


  document
    .getElementById("homeView")
    .classList.remove("hidden");


  window.scrollTo(
    0,
    0
  );

}


document
  .getElementById("backBtn")
  .addEventListener(
    "click",
    closePlatform
  );


/* =====================================================
   MQ LOGO
   ===================================================== */

document
  .getElementById("homeLogo")
  .addEventListener(
    "click",
    closePlatform
  );


/* =====================================================
   SIDE MENU
   ===================================================== */

const sideMenu =
  document.getElementById("sideMenu");


document
  .getElementById("menuBtn")
  .addEventListener(
    "click",
    () => {
      sideMenu.classList.add("open");
    }
  );


document
  .getElementById("menuClose")
  .addEventListener(
    "click",
    () => {
      sideMenu.classList.remove("open");
    }
  );


/* =====================================================
   ABOUT GTH
   ===================================================== */

document
  .getElementById("aboutGthBtn")
  .addEventListener(
    "click",
    () => {

      showToast(
        "God’stime Holdings (GTH)"
      );

    }
  );


/* =====================================================
   HEADER BUTTONS
   ===================================================== */

document
  .getElementById("discoverBtn")
  .addEventListener(
    "click",
    () => {
      showToast("Discover");
    }
  );


document
  .getElementById("supportBtn")
  .addEventListener(
    "click",
    () => {
      showToast("Customer Service");
    }
  );


document
  .getElementById("telegramBtn")
  .addEventListener(
    "click",
    () => {
      showToast("Telegram");
    }
  );


/* =====================================================
   EMAIL GATE
   ===================================================== */

const emailGate =
  document.getElementById("emailGate");

const emailForm =
  document.getElementById("emailForm");

const emailInput =
  document.getElementById("emailInput");


function closeEmailGate() {

  emailGate.classList.add("hidden");

}


function openEmailGate() {

  emailGate.classList.remove("hidden");

}


const savedEmail =
  localStorage.getItem(EMAIL_KEY);


if (savedEmail) {

  closeEmailGate();

} else {

  openEmailGate();

}


/* =====================================================
   EMAIL SUBMISSION
   ===================================================== */

emailForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    const email =
      emailInput.value.trim();


    if (!email) {

      emailInput.reportValidity();

      return;

    }


    localStorage.setItem(
      EMAIL_KEY,
      email
    );


    closeEmailGate();


    showToast(
      "Welcome to MQ"
    );

  }
);


/* =====================================================
   TOAST
   ===================================================== */

function showToast(message) {

  const toast =
    document.getElementById("toast");


  toast.textContent =
    message;


  toast.classList.add("show");


  clearTimeout(
    window.mqToastTimer
  );


  window.mqToastTimer =
    setTimeout(
      () => {
        toast.classList.remove("show");
      },
      2200
    );

}


/* =====================================================
   INITIALISE
   ===================================================== */

renderAllCategories();
