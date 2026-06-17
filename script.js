function showPage(pageId, clickedButton) {
  const pages = document.querySelectorAll(".page");
  const tabs = document.querySelectorAll(".tab");

  pages.forEach(page => {
    page.classList.remove("active-page");
  });

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active-page");
  clickedButton.classList.add("active");
}