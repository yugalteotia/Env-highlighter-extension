(function () {
    'use strict';

    const hostname = window.location.hostname;

    let bgColor = "white";
    let label = "";
    let shouldBlink = false;

    if (hostname === "revplan.ideasrms.com") {
        bgColor = "#cc6666";
        label = "PRODUCTION";
        shouldBlink = true;
    } else if (hostname === "revplan.stage.ideasrms.com") {
        bgColor = "#d1bf80";
        label = "STAGING";
    } else if (hostname === "revplan.dev.ideasrms.com") {
        bgColor = "#76b58a";
        label = "DEVELOPMENT";
    }



    function applyStyles() {
        const menuBar = document.querySelector('.vertical-main-menu-bar');
        if (menuBar) {
            menuBar.style.backgroundColor = bgColor;
            if (shouldBlink) {
                let blinkState = true;
                setInterval(() => {
                    document.title = blinkState ? "⚠️ PRODUCTION ⚠️" : "🚨🚨 CAREFUL 🚨🚨";
                    blinkState = !blinkState;
                }, 1000);
            } else
                document.title = `⚠️ ${label} ⚠️`;

            return true;
        }

        console.warn(".vertical-main-menu-bar not found yet. Retrying...");
        return false;
    }

    let retries = 0;
    const maxRetries = 100;
    const interval = setInterval(() => {
        if (applyStyles() || ++retries > maxRetries) {
            clearInterval(interval);
        }
    }, 300);
})();
