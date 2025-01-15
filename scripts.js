
var projects = document.getElementsByClassName("project")
let currentIndex = 1; // Start with the center project

let currentSlide;

function updateProjects() {
    for(var index = 0; index < projects.length; index++) {
        project = projects[index];
        project.className = 'project';
        if (index === currentIndex) {
            project.classList.add('proj-center');
        } else if (index === (currentIndex - 2 + projects.length) % projects.length) {
            project.classList.add('proj-left-hidden');
        } else if (index === (currentIndex + 2) % projects.length) {
            project.classList.add('proj-right-hidden');
        } else if (index === (currentIndex - 1 + projects.length) % projects.length) {
            project.classList.add('proj-left');
        } else if (index === (currentIndex + 1) % projects.length) {
            project.classList.add('proj-right');
        } else {
            console.log("asdasd");
            project.opacity = 0;
        }
    }
}

function nextProject() {
    currentSlide.innerHTML = currentIndex + 1;
    currentIndex = (currentIndex + 1) % projects.length;
    updateProjects();
}

function prevProject() {
    currentSlide.innerHTML = currentIndex + 1;
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProjects();
}

// Initialize projects
updateProjects();

// Optional: Add event listeners for arrow key navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextProject();
    if (e.key === 'ArrowLeft') prevProject();
});

var darkMode = true;

function toggleMode() {
    const switchIcon = document.getElementById("switch");
    if(darkMode) {
        document.body.classList.remove('dark')
        document.body.classList.add('light'); 
        switchIcon.src = "./icons/sun.svg";
    }
    else {
        document.body.classList.remove('light')
        document.body.classList.add('dark');
        switchIcon.src = "./icons/moon.svg";
    }
    document.body.classList.toggle("t")
    console.log(darkMode)
    darkMode = !darkMode;
}

document.addEventListener("DOMContentLoaded", function(e) {
    projects = document.getElementsByClassName("project")
    const totalSlides = document.getElementById("total-slides")
    totalSlides.innerHTML = projects.length;
    currentSlide = document.getElementById("current-slide")
    currentSlide.innerHTML = currentIndex + 1;
    const themeSwitch = document.getElementById('theme-switch-container');
    themeSwitch.addEventListener('click', () => {
        toggleMode();
    }) 
    updateProjects()
})