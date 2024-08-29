document.addEventListener("DOMContentLoaded", () => {

const startTime = new Date("January 11, 2024 00:00:00").getTime();

const updateTimer = () => {
    const now = new Date().getTime();
    const timeDifference = now - startTime;
    
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    document.getElementById("hours").innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

setInterval (updateTimer, 1000);
updateTimer();

const project1 = document.getElementById("project-1");
const projectsText = document.getElementById("projects-text-1");

//Change getElementById to QuerySelectorAll or some way to use same function/event handler for all projects rather than individuals

const projectsToggle = () => {
    projectsText.classList.toggle("hidden");
}

project1.addEventListener("click", projectsToggle);

});