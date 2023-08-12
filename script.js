// Generating the date
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Nav Functionality

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// Toggling the Service Buttons on click
const servicesNodeList = document.querySelectorAll(".service-button");

servicesNodeList.forEach((button) => {
  button.addEventListener("click", () => {
    servicesNodeList.forEach((btn) => {
      const parentNode = btn.parentNode;
      if (btn === button) {
        parentNode.classList.toggle("active");
      } else {
        parentNode.classList.remove("active");
      }
    });
  });
});

// Popup functionality

const closePopupBtn = document.querySelector(".closePopupBtn");
const popupElement = document.getElementById("popupElement");

function hidePopup() {
  popupElement.classList.add("hidden");
  popupElement.classList.remove("popup");
}

closePopupBtn.addEventListener("click", hidePopup);

//////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Close mobile Nav
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
console.log(allLinks);
