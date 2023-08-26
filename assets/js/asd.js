const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const icon = darkModeToggle.querySelector("i");
    if (body.classList.contains("dark")) {
        icon.classList.remove("bi-chevron-right");
        icon.classList.add("bi-sun");
    } else {
        icon.classList.remove("bi-sun");
        icon.classList.add("bi-chevron-right");
    }
});
