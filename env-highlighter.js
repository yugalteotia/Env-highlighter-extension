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

    function addEnvLabel() {
        if (document.getElementById("env-label")) return;

        const marker = document.createElement("div");
        marker.id = "env-label";

        marker.innerHTML = label.split('').join('<br>');

        Object.assign(marker.style, {
            position: "fixed",
            left: "8px",
            top: "35%",
            zIndex: "9999",
            padding: "10px",
            backgroundColor: bgColor,
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "30px",
            lineHeight: "1.2",
            borderRadius: "8px",
            textAlign: "center",
            pointerEvents: "none",
            whiteSpace: "pre-line"
        });

        document.body.appendChild(marker);
    }


    function applyStyles() {
        const menuBar = document.querySelector('.vertical-main-menu-bar');
        if (menuBar) {
            menuBar.style.backgroundColor = bgColor;
            addEnvLabel();

            if (shouldBlink) {
                let blinkState = true;
                setInterval(() => {
                    document.title = blinkState ? "⚠️ PRODUCTION ⚠️" : "🚨🚨 CAREFUL 🚨🚨";
                    blinkState = !blinkState;
                }, 1000);
            } else {
                document.title = `⚠️ ${label} ⚠️`;
            }

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
