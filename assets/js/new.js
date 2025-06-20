function enterWebsite() {
    document.getElementById("thankOverlay").style.transition = "opacity 0.8s ease";
    document.getElementById("mainContent").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("thankOverlay").style.display = "none";
        const main = document.getElementById("mainContent");
        main.style.display = "block";
        setTimeout(() => {
            main.style.opacity = "1";
        }, 50); // short delay for fade-in
    }, 800);
}

function enterWebsite() {
    const overlay = document.getElementById("thankOverlay");
    overlay.classList.add("exit"); // Add exit animation

    // Wait for animation to finish (600ms), then hide
    setTimeout(() => {
        overlay.style.display = "none";
        const main = document.getElementById("mainContent");
        main.style.display = "block";
        setTimeout(() => {
            main.style.opacity = "1";
        }, 50);
    }, 600); // Match with pageExit animation duration
}