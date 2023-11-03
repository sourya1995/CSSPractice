var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// backdrop.style.display = 'block';

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open';
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);

  });
}

backdrop.addEventListener("click", function () {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  this.closeModal();
});
modalNoButton.addEventListener("click", closeModal);

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modalNoButton.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function () {

    backdrop.style.display = "none";
  }, 200);

}

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
