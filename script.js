document.addEventListener("DOMContentLoaded", () => {

    //Timer in About Me section

    /*const startTime = new Date("January 11, 2024 00:00:00").getTime();

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
    updateTimer();*/

    //Projects dropdown section

    /*document.querySelectorAll('.projects h3').forEach(heading => {
        heading.addEventListener('click', handleHeadingClick);
    });

    function handleHeadingClick(event) {
        const headingId = event.target.id;

        let targetProject;
        switch(headingId) {
            case 'project-1':
                targetProject = document.getElementById('projects-text-1');
                break;
            case 'project-2':
                targetProject = document.getElementById('projects-text-2');
                break;
            case 'project-3':
                targetProject = document.getElementById('projects-text-3');
                break;
            case 'project-4':
                targetProject = document.getElementById('projects-text-4');
                break;
            case 'project-5':
                targetProject = document.getElementById('projects-text-5');
                break;
            case 'project-6':
                targetProject = document.getElementById('projects-text-6');
                break;
            default:
                return;
        }

        const isCurrentlyVisible = targetProject.classList.contains('visible');

        document.querySelectorAll('.projects p').forEach(p => {
            p.classList.remove('visible');
            p.classList.add('hidden');
        });

        if (!isCurrentlyVisible) {
            targetProject.classList.remove('hidden');
            targetProject.classList.add('visible');
        }
    } */

    //Skills icon dropdown section

    document.querySelectorAll('#skills-section i').forEach(icon => {
        icon.addEventListener('click', handleIconClick);
    });

    function handleIconClick(event) {
        const iconId = event.target.id;

        let targetParagraph;
        switch(iconId) {
            case 'icon-html':
                targetParagraph = document.getElementById('text-html');
                break;
            case 'icon-css':
                targetParagraph = document.getElementById('text-css');
                break;
            case 'icon-js':
                targetParagraph = document.getElementById('text-js');
                break;
            case 'icon-python':
                targetParagraph = document.getElementById('text-python');
                break;
            case 'icon-ruby':
                targetParagraph = document.getElementById('text-ruby');
                break;
            case 'icon-vs':
                targetParagraph = document.getElementById('text-vs');
                break;
            case 'icon-md':
                targetParagraph = document.getElementById('text-md');
                break;
            case 'icon-node':
                targetParagraph = document.getElementById('text-node');
                break;
            case 'icon-git':
                targetParagraph = document.getElementById('text-git');
                break;
            case 'icon-github':
                targetParagraph = document.getElementById('text-github');
                break;
            default:
                return;
        }

        const isCurrentlyVisible = targetParagraph.classList.contains('visible');

        document.querySelectorAll('#skills-section p').forEach(p => {
            p.classList.remove('visible');
            p.classList.add('hidden');
        });

        if (!isCurrentlyVisible) {
            targetParagraph.classList.remove('hidden');
            targetParagraph.classList.add('visible');
            targetParagraph.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

});