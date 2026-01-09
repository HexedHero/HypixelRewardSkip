const MAX_ATTEMPTS = 20;
const CHECK_INTERVAL_MS = 500;

let attempts = 0;
let task;

function scanAndClick() {
    attempts++;
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        // Check if the button's text contains "Skip"
        if (button.textContent.includes("Skip")) {
            button.click();
            clearInterval(task);
            return;
        }
    }

    if (attempts >= MAX_ATTEMPTS) {
        clearInterval(task);
    }
}

task = setInterval(scanAndClick, CHECK_INTERVAL_MS);