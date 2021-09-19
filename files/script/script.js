const hamburguerBtn = document.getElementById("hamburguerBtn");
const overlay = document.getElementById("overlay")

hamburguerBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (hamburguerBtn.classList.contains("open")) {
		hamburguerBtn.classList.remove("open");
        overlay.style.display = 'none'
	} else {
		hamburguerBtn.classList.add("open");
        overlay.style.display = 'block'

	}
});
