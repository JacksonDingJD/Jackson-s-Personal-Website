document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const projects = {
        1: {
            title: "Compliant End Effector",
            description: "A smart and compliant end effector project."
        },
        2: {
            title: "Cycloidal Drive",
            description: "A 1:9 gear ratio homemade cycloidal drive."
        }
    };

    if (projectId && projects[projectId]) {
        document.getElementById("project-title").innerText = projects[projectId].title;
        document.getElementById("project-description").innerText = projects[projectId].description;
    }
});
