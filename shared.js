const backdrop = document.querySelector(".backdrop");
// console.dir(backdrop);
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");

for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener("click", function () {
		// backdrop.style.display = "block";
		// modal.style.display = "block";
		backdrop.classList.add("open");
		backdrop.style.display = "block";
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
	backdrop.classList.remove("open");
	setTimeout(function () {
		backdrop.style.display = "none";
	}, 200);
}

toggleButton.addEventListener("click", function () {
	// mobileNav.style.display = "block";
	// backdrop.style.display = "block";
	mobileNav.classList.add("open");
	backdrop.style.display = "block";
	setTimeout(function () {
		backdrop.classList.add("open");
	}, 10);
});

ctaButton.addEventListener("animationstart", function (event) {
	console.log("Animation started", event);
});
ctaButton.addEventListener("animationend", function (event) {
	console.log("Animation ended", event);
});
ctaButton.addEventListener("animationiteration", function (event) {
	console.log("Animation iteration", event);
});
