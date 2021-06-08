const backdrop = document.querySelector(".backdrop");
// console.dir(backdrop);
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener("click", function () {
		// backdrop.style.display = "block";
		// modal.style.display = "block";
		backdrop.classList.add("open");
		modal.classList.add("open");
	});
}

backdrop.addEventListener("click", function () {
	// mobileNav.style.display = "none";
	mobileNav.classList.remove("open");
	closeModal();
});

if (modalNoButton) {
	modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
	// backdrop.style.display = "none";
	// modal.style.display = "none";
	backdrop.classList.remove("open");

	if (modal) {
		modal.classList.remove("open");
	}
}

toggleButton.addEventListener("click", function () {
	// mobileNav.style.display = "block";
	// backdrop.style.display = "block";
	mobileNav.classList.add("open");
	backdrop.classList.add("open");
});
