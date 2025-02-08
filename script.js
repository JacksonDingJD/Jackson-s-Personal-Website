document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const projects = {
        1: {
            title: "Robotic Arm",
            description: "A smart, soft, and compliant end effector project."
        },
        2: {
            title: "Solar Car Suspension",
            description: "Enhancing the suspension system of a solar car."
        }
    };

    if (projectId && projects[projectId]) {
        document.getElementById("project-title").innerText = projects[projectId].title;
        document.getElementById("project-description").innerText = projects[projectId].description;
    }
});
