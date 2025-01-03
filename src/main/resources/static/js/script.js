console.log("Script loaded");

let currentTheme = getTheme();
let themePage = document.querySelector("html");
document.addEventListener("DOMContentLoaded", () => {
    changeTheme();
});

function changeTheme() {
    changePageTheme(currentTheme, currentTheme);

    const changeThemeButton = document.querySelector("#theme_change_button");

    const oldTheme = currentTheme;
    changeThemeButton.addEventListener("click", (event) => {
        console.log("change theme button clicked");
        if (currentTheme === "dark") {
            currentTheme = "light";
        } else {
            currentTheme = "dark";
        }
        changePageTheme(currentTheme, oldTheme);
    });
}

function setTheme(theme) {
    localStorage.setItem("theme", theme);
}

function getTheme() {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "light";
}

function changePageTheme(theme, oldTheme) {
    setTheme(theme);
    themePage.classList.remove(oldTheme);
    themePage.classList.add(theme);

    document
        .querySelector("#theme_change_button")
        .querySelector("span").textContent =
        theme == "light" ? "Dark" : "Light";
}

// const changeThemeButton = document.querySelector("#theme_change_button");

// changeThemeButton.addEventListener("click", () => {
//     themePage.classList.toggle("dark");

//     if (themePage.classList.contains("dark")) {
//         changeThemeButton.querySelector("span").textContent = "Light";
//     } else {
//         changeThemeButton.querySelector("span").textContent = "Dark";
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    navbarFunction();
});

function navbarFunction() {
    let navUrl = document.querySelector(".navUrl").textContent;
    if (
        navUrl == "home1" ||
        navUrl == "contact1" ||
        navUrl == "services1" ||
        navUrl == "about1"
    ) {
        let navlink = document.getElementsByClassName(navUrl);
        navlink[0].classList.add(
            "bg-blue-700",
            "md:bg-transparent",
            "md:text-blue-700",
            "md:dark:text-blue-500"
        );

        navlink[0].classList.remove("hover:bg-gray-200");
        if (themePage.classList.contains("dark")) {
            navlink[0].classList.add("text-gray-900");
        } else {
            navlink[0].classList.add("text-white");
        }
    }
}
// class=" text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
//                         class="text-gray-900"
