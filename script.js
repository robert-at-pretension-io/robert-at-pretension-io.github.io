const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const servicesNodeList = document.querySelectorAll(".service-button");

// Toggling the Service Buttons on click
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
