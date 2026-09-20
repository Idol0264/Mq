/*
  MQ — Money Making Menu
  GT Softwares / GTH

  IMPORTANT:
  1. Replace TALLY_FORM_URL with your actual Tally form embed URL.
  2. Replace/add platform URLs in the gallery data below.
  3. A platform can only render in an iframe if its provider permits framing.
*/

const TALLY_FORM_URL = "https://tally.so/r/REPLACE_WITH_YOUR_FORM";

const STORAGE_KEY = "mq_user_email";
const ADDED_KEY = "mq_added_platforms";

const gallery = {
  BET: [
    { id:"bet-1", name:"Bet Platform 01", url:"https://example.com" },
    { id:"bet-2", name:"Bet Platform 02", url:"https://example.com" },
    { id:"bet-3", name:"Bet Platform 03", url:"https://example.com" },
    { id:"bet-4", name:"Bet Platform 04", url:"https://example.com" },
    { id:"bet-5", name:"Bet Platform 05", url:"https://example.com" },
    { id:"bet-6", name:"Bet Platform 06", url:"https://example.com" },
    { id:"bet-7", name:"Bet Platform 07", url:"https://example.com" },
    { id:"bet-8", name:"Bet Platform 08", url:"https://example.com" },
    { id:"bet-9", name:"Bet Platform 09", url:"https://example.com" }
  ],
  BROKERS: [
    { id:"broker-1", name:"Broker Platform 01", url:"https://example.com" },
    { id:"broker-2", name:"Broker Platform 02", url:"https://example.com" },
    { id:"broker-3", name:"Broker Platform 03", url:"https://example.com" },
    { id:"broker-4", name:"Broker Platform 04", url:"https://example.com" },
    { id:"broker-5", name:"Broker Platform 05", url:"https://example.com" },
    { id:"broker-6", name:"Broker Platform 06", url:"https://example.com" },
    { id:"broker-7", name:"Broker Platform 07", url:"https://example.com" },
    { id:"broker-8", name:"Broker Platform 08", url:"https://example.com" },
    { id:"broker-9", name:"Broker Platform 09", url:"https://example.com" }
  ],
  BANKS: [
    { id:"bank-1", name:"Bank Platform 01", url:"https://example.com" },
    { id:"bank-2", name:"Bank Platform 02", url:"https://example.com" },
    { id:"bank-3", name:"Bank Platform 03", url:"https://example.com" },
    { id:"bank-4", name:"Bank Platform 04", url:"https://example.com" },
    { id:"bank-5", name:"Bank Platform 05", url:"https://example.com" },
    { id:"bank-6", name:"Bank Platform 06", url:"https://example.com" },
    { id:"bank-7", name:"Bank Platform 07", url:"https://example.com" },
    { id:"bank-8", name:"Bank Platform 08", url:"https://example.com" },
    { id:"bank-9", name:"Bank Platform 09", url:"https://example.com" }
  ],
  JOBS: [
    { id:"job-1", name:"Jobs Platform 01", url:"https://example.com" },
    { id:"job-2", name:"Jobs Platform 02", url:"https://example.com" },
    { id:"job-3", name:"Jobs Platform 03", url:"https://example.com" },
    { id:"job-4", name:"Jobs Platform 04", url:"https://example.com" },
    { id:"job-5", name:"Jobs Platform 05", url:"https://example.com" },
    { id:"job-6", name:"Jobs Platform 06", url:"https://example.com" },
    { id:"job-7", name:"Jobs Platform 07", url:"https://example.com" },
    { id:"job-8", name:"Jobs Platform 08", url:"https://example.com" },
    { id:"job-9", name:"Jobs Platform 09", url:"https://example.com" }
  ],
  PORTFOLIOS: [
    { id:"portfolio-1", name:"Portfolio Platform 01", url:"https://example.com" },
    { id:"portfolio-2", name:"Portfolio Platform 02", url:"https://example.com" },
    { id:"portfolio-3", name:"Portfolio Platform 03", url:"https://example.com" },
    { id:"portfolio-4", name:"Portfolio Platform 04", url:"https://example.com" },
    { id:"portfolio-5", name:"Portfolio Platform 05", url:"https://example.com" },
    { id:"portfolio-6", name:"Portfolio Platform 06", url:"https://example.com" },
    { id:"portfolio-7", name:"Portfolio Platform 07", url:"https://example.com" },
    { id:"portfolio-8", name:"Portfolio Platform 08", url:"https://example.com" },
    { id:"portfolio-9", name:"Portfolio Platform 09", url:"https://example.com" }
  ]
};

const $ = (id) => document.getElementById(id);

const categoriesEl = $("categories");
const addedGrid = $("addedGrid");
const addedCounter = $("addedCounter");
const emailGate = $("emailGate");
const gateBackdrop = $("gateBackdrop");
const emailForm = $("emailForm");
const emailInput = $("emailInput");
const iframeView = $("iframeView");
const homeView = $("homeView");
const platformFrame = $("platformFrame");
const iframeTitle = $("iframeTitle");
const iframeLoading = $("iframeLoading");

let selectedCategory = "BET";
let added = JSON.parse(localStorage.getItem(ADDED_KEY) || "[]");

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function renderCategories() {
  categoriesEl.innerHTML = "";
  Object.keys(gallery).forEach(category => {
    const btn = document.createElement("button");
    btn.className = "category-card";
    btn.innerHTML = `<strong>${category}</strong><span>9 platforms available in the GTS Gallery.</span>`;
    btn.addEventListener("click", () => openCategory(category));
    categoriesEl.appendChild(btn);
  });
}

function openCategory(category) {
  selectedCategory = category;
  const list = gallery[category];
  const section = document.querySelector(".added-section");
  section.scrollIntoView({ behavior:"smooth", block:"start" });
  renderCategoryPreview(list);
}

function renderCategoryPreview(list) {
  addedGrid.innerHTML = "";
  const currentIds = new Set(added.map(item => item.id));

  list.forEach(item => {
    const card = document.createElement("article");
    card.className = "platform-card";
    const isAdded = currentIds.has(item.id);
    card.innerHTML = `
      <strong>${item.name}</strong>
      <small>${selectedCategory}</small>
      <button>${isAdded ? "Open" : "+ Add to MQ"}</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      if (isAdded) openPlatform(item);
      else addPlatform(item);
    });
    addedGrid.appendChild(card);
  });
  addedCounter.textContent = `${added.length} added`;
}

function renderAdded() {
  if (!added.length) {
    addedGrid.innerHTML = `<div class="empty">Choose a category above and add a platform to your MQ menu.</div>`;
    addedCounter.textContent = "0 added";
    return;
  }

  addedGrid.innerHTML = "";
  added.forEach(item => {
    const card = document.createElement("article");
    card.className = "platform-card";
    card.innerHTML = `
      <strong>${item.name}</strong>
      <small>${item.category}</small>
      <button>Open platform</button>
    `;
    card.querySelector("button").addEventListener("click", () => openPlatform(item));
    addedGrid.appendChild(card);
  });
  addedCounter.textContent = `${added.length} added`;
}

function addPlatform(item) {
  if (!added.some(x => x.id === item.id)) {
    added.push({ ...item, category: selectedCategory });
    localStorage.setItem(ADDED_KEY, JSON.stringify(added));
    showToast(`${item.name} added to MQ`);
  }
  renderAdded();
}

function openPlatform(item) {
  homeView.hidden = true;
  iframeView.hidden = false;
  iframeTitle.textContent = item.name;
  iframeLoading.hidden = false;
  platformFrame.src = item.url;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function closePlatform() {
  platformFrame.src = "about:blank";
  iframeView.hidden = true;
  homeView.hidden = false;
  renderAdded();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function openDrawer() {
  $("drawer").classList.add("open");
  $("drawer").setAttribute("aria-hidden", "false");
  $("drawerBackdrop").classList.add("open");
}

function closeDrawer() {
  $("drawer").classList.remove("open");
  $("drawer").setAttribute("aria-hidden", "true");
  $("drawerBackdrop").classList.remove("open");
}

function requireEmailGate() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    emailGate.classList.add("open");
    gateBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => emailInput.focus(), 450);
  }
}

function closeEmailGate() {
  emailGate.classList.remove("open");
  gateBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (!email || !emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  // The email is stored locally for the MQ session.
  // Tally should be configured separately for the actual submission/collection.
  localStorage.setItem(STORAGE_KEY, email);
  $("welcomeTitle").textContent = "Welcome back to MQ";
  closeEmailGate();

  if (TALLY_FORM_URL.includes("REPLACE_WITH_YOUR_FORM")) {
    showToast("Email saved. Add your Tally form URL in app.js.");
  } else {
    window.open(TALLY_FORM_URL, "_blank", "noopener,noreferrer");
  }
});

$("menuBtn").addEventListener("click", openDrawer);
$("drawerClose").addEventListener("click", closeDrawer);
$("drawerBackdrop").addEventListener("click", closeDrawer);
$("drawerHome").addEventListener("click", () => {
  closeDrawer();
  closePlatform();
});

$("homeBtn").addEventListener("click", closePlatform);
$("backBtn").addEventListener("click", closePlatform);
$("galleryBtn").addEventListener("click", () => {
  selectedCategory = "BET";
  renderCategoryPreview(gallery.BET);
  document.querySelector(".added-section").scrollIntoView({ behavior:"smooth" });
});

document.querySelectorAll("[data-action]").forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    closeDrawer();
    if (action === "discover") showToast("Discover is ready for your GTS Gallery content.");
    if (action === "support") showToast("Customer Service will connect users to GTS support.");
    if (action === "telegram") showToast("Add your official GTH/GTS Telegram link here.");
  });
});

platformFrame.addEventListener("load", () => {
  iframeLoading.hidden = true;
});

if (localStorage.getItem(STORAGE_KEY)) {
  $("welcomeTitle").textContent = "Welcome back to MQ";
}

renderCategories();
renderAdded();
requireEmailGate();
