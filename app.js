const TALLY_FORM_URL = "https://tally.so/r/REPLACE_WITH_YOUR_TALLY_FORM";

const EMAIL_KEY = "mq_user_email";
const SELECTION_KEY = "mq_platform_selections";

const categories = [
  "BET",
  "BROKERS",
  "BANKS",
  "JOBS",
  "PORTFOLIOS"
];


/* =====================================================
   GTS GALLERY
   Replace these example URLs with the real platforms
   ===================================================== */

const gallery = {

  BET: [
    { id: "bet1", name: "Bet Platform 01", url: "https://example.com" },
    { id: "bet2", name: "Bet Platform 02", url: "https://example.com" },
    { id: "bet3", name: "Bet Platform 03", url: "https://example.com" },
    { id: "bet4", name: "Bet Platform 04", url: "https://example.com" },
    { id: "bet5", name: "Bet Platform 05", url: "https://example.com" },
    { id: "bet6", name: "Bet Platform 06", url: "https://example.com" },
    { id: "bet7", name: "Bet Platform 07", url: "https://example.com" },
    { id: "bet8", name: "Bet Platform 08", url: "https://example.com" },
    { id: "bet9", name: "Bet Platform 09", url: "https://example.com" }
  ],

  BROKERS: [
    { id: "broker1", name: "Broker Platform 01", url: "https://example.com" },
    { id: "broker2", name: "Broker Platform 02", url: "https://example.com" },
    { id: "broker3", name: "Broker Platform 03", url: "https://example.com" },
    { id: "broker4", name: "Broker Platform 04", url: "https://example.com" },
    { id: "broker5", name: "Broker Platform 05", url: "https://example.com" },
    { id: "broker6", name: "Broker Platform 06", url: "https://example.com" },
    { id: "broker7", name: "Broker Platform 07", url: "https://example.com" },
    { id: "broker8", name: "Broker Platform 08", url: "https://example.com" },
    { id: "broker9", name: "Broker Platform 09", url: "https://example.com" }
  ],

  BANKS: [
    { id: "bank1", name: "Bank Platform 01", url: "https://example.com" },
    { id: "bank2", name: "Bank Platform 02", url: "https://example.com" },
    { id: "bank3", name: "Bank Platform 03", url: "https://example.com" },
    { id: "bank4", name: "Bank Platform 04", url: "https://example.com" },
    { id: "bank5", name: "Bank Platform 05", url: "https://example.com" },
    { id: "bank6", name: "Bank Platform 06", url: "https://example.com" },
    { id: "bank7", name: "Bank Platform 07", url: "https://example.com" },
    { id: "bank8", name: "Bank Platform 08", url: "https://example.com" },
    { id: "bank9", name: "Bank Platform 09", url: "https://example.com" }
  ],

  JOBS: [
    { id: "job1", name: "Jobs Platform 01", url: "https://example.com" },
    { id: "job2", name: "Jobs Platform 02", url: "https://example.com" },
    { id: "job3", name: "Jobs Platform 03", url: "https://example.com" },
    { id: "job4", name: "Jobs Platform 04", url: "https://example.com" },
    { id: "job5", name: "Jobs Platform 05", url: "https://example.com" },
    { id: "job6", name: "Jobs Platform 06", url: "https://example.com" },
    { id: "job7", name: "Jobs Platform 07", url: "https://example.com" },
    { id: "job8", name: "Jobs Platform 08", url: "https://example.com" },
    { id: "job9", name: "Jobs Platform 09", url: "https://example.com" }
  ],

  PORTFOLIOS: [
    { id: "portfolio1", name: "Portfolio Platform 01", url: "https://example.com" },
    { id: "portfolio2", name: "Portfolio Platform 02", url: "https://example.com" },
    { id: "portfolio3", name: "Portfolio Platform 03", url: "https://example.com" },
    { id: "portfolio4", name: "Portfolio Platform 04", url: "https://example.com" },
    { id: "portfolio5", name: "Portfolio Platform 05", url: "https://example.com" },
    { id: "portfolio6", name: "Portfolio Platform 06", url: "https://example.com" },
    { id: "portfolio7", name: "Portfolio Platform 07", url: "https://example.com" },
    { id: "portfolio8", name: "Portfolio Platform 08", url: "https://example.com" },
    { id: "portfolio9", name: "Portfolio Platform 09", url: "https://example.com" }
  ]

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
   CREATE THE 9 SLOTS
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


  for (let index = 0; index < 9; index++) {

    const platform = selected[index];

    const slot =
      document.createElement("button");

    slot.className = "slot";


    /* ============================
       EMPTY SLOT
       ============================ */

    if (!platform) {

      slot.classList.add("plus");

      slot.innerHTML = `
        <span class="plus-symbol">+</span>
        <small>Add platform</small>
      `;

      slot.addEventListener(
        "click",
        () => openGallery(category, index)
      );

    }


    /* ============================
       SELECTED PLATFORM
       ============================ */

    else {

      slot.innerHTML = `
        <strong>${platform.name}</strong>
        <small>Tap to open</small>
      `;

      slot.addEventListener(
        "click",
        () => openPlatform(platform)
      );

    }


    grid.appendChild(slot);

  }

}


/* =====================================================
   RENDER EVERYTHING
   ===================================================== */

function renderAllCategories() {

  categories.forEach(
    category => renderCategory(category)
  );

}


/* =====================================================
   OPEN GTS GALLERY
   ===================================================== */

function openGallery(category, slotIndex) {

  pendingCategory = category;
  pendingSlot = slotIndex;


  const title =
    document.getElementById("galleryTitle");

  title.textContent =
    `Select a ${category.toLowerCase()} platform`;


  const list =
    document.getElementById("galleryList");

  list.innerHTML = "";


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

    button.className = "gallery-item";


    const used =
      alreadySelected.has(platform.id);


    button.innerHTML = `
      <strong>${platform.name}</strong>
      <span>
        ${used
          ? "Already selected"
          : "Tap to add"}
      </span>
    `;


    button.addEventListener(
      "click",
      () => selectPlatform(platform)
    );


    list.appendChild(button);

  });


  document
    .getElementById("galleryOverlay")
    .classList.remove("hidden");

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


  /*
     Prevent duplicate selection
  */

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


  /*
     Put platform into the exact
     + slot that was tapped.
  */

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


        /*
           Find the first empty position.
        */

        const firstEmpty =
          selected.findIndex(
            item => !item
          );


        /*
           If all 9 slots are full,
           open the gallery anyway.
        */

        if (firstEmpty === -1) {

          openGallery(
            category,
            0
          );

          return;

        }


        openGallery(
          category,
          firstEmpty
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
   OPEN PLATFORM IN IFRAME
   ===================================================== */

function openPlatform(platform) {

  document
    .getElementById("homeView")
    .classList.add("hidden");


  document
    .getElementById("iframeView")
    .classList.remove("hidden");


  document
    .getElementById("iframeTitle")
    .textContent =
    platform.name;


  const frame =
    document.getElementById(
      "platformFrame"
    );


  frame.src =
    platform.url;


  window.scrollTo(
    0,
    0
  );

}


/* =====================================================
   BACK FROM IFRAME
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
   MQ LOGO = HOME
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
  document.getElementById(
    "sideMenu"
  );


document
  .getElementById("menuBtn")
  .addEventListener(
    "click",
    () => {

      sideMenu.classList.add(
        "open"
      );

    }
  );


document
  .getElementById("menuClose")
  .addEventListener(
    "click",
    () => {

      sideMenu.classList.remove(
        "open"
      );

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

      showToast(
        "Discover"
      );

    }
  );


document
  .getElementById("supportBtn")
  .addEventListener(
    "click",
    () => {

      showToast(
        "Customer Service"
      );

    }
  );


document
  .getElementById("telegramBtn")
  .addEventListener(
    "click",
    () => {

      showToast(
        "Telegram"
      );

    }
  );


/* =====================================================
   EMAIL GATE
   ===================================================== */

const emailGate =
  document.getElementById(
    "emailGate"
  );


const emailForm =
  document.getElementById(
    "emailForm"
  );


const emailInput =
  document.getElementById(
    "emailInput"
  );


function closeEmailGate() {

  emailGate.classList.add(
    "hidden"
  );

}


function openEmailGate() {

  emailGate.classList.remove(
    "hidden"
  );

}


/*
   Check whether the user has
   already supplied an email.
*/

const savedEmail =
  localStorage.getItem(
    EMAIL_KEY
  );


if (savedEmail) {

  closeEmailGate();

}

else {

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


    /*
       Save email locally so the
       access gate does not return
       every time the page reloads.
    */

    localStorage.setItem(
      EMAIL_KEY,
      email
    );


    closeEmailGate();


    /*
       Tally is connected here once
       the real Tally form URL is
       inserted above.
    */

    if (
      !TALLY_FORM_URL.includes(
        "REPLACE_WITH_YOUR_TALLY_FORM"
      )
    ) {

      window.open(
        TALLY_FORM_URL,
        "_blank",
        "noopener,noreferrer"
      );

    }


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
