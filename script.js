
    document.addEventListener("DOMContentLoaded", function () {
        const video = document.querySelector(".product-details .video-container video");
        if (video) {
            video.style.transform = "rotate(180deg)"; // Ensures the rotation persists
        }
    });
