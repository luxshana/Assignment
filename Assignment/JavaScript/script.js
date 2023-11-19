const tabLinks = document.querySelectorAll(".tab-links a");
const tabs = document.querySelectorAll(".tab");
function showTab(tabId) {
  tabs.forEach((tab) => {
    tab.style.display = "none";
  });
  document.querySelector(tabId).style.display = "block";
}
tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", (event) => {
    event.preventDefault();
    const tabId = tabLink.getAttribute("href");
    showTab(tabId);
  });
});
showTab("#tab1");
