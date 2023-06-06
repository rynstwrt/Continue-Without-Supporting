const CHECK_INTERVAL_MS = 500;
const CHECK_TIMEOUT_SECONDS = 10;
const PHRASES = ["continue without supporting", "continue without disabling"];
const CONSOLE_PREFIX = "CONTINUE WITHOUT SUPPORTING: ";
const DEV_MODE = false;


chrome.runtime.sendMessage({type: "iconChange", options: {isGreen: false}});
const startTime = Date.now();
const interval = setInterval(() =>
{
    if (Date.now() - startTime > CHECK_TIMEOUT_SECONDS * 1000)
    {
        if (DEV_MODE) console.log(CONSOLE_PREFIX + "Timed out. No relevant links found.");
        clearInterval(interval);
    }

    let hasFound = false;
    document.querySelectorAll("*").forEach(el =>
    {
        PHRASES.forEach(phrase =>
        {
            if (el.textContent.toLowerCase().includes(phrase.toLowerCase()))
            {
                if (!hasFound)
                {
                    hasFound = true;
                    chrome.runtime.sendMessage({type: "iconChange", options: {isGreen: true}});
                    if (DEV_MODE) console.log(CONSOLE_PREFIX + "Found a link! Clicking!");
                }

                el.click();
                clearInterval(interval);
            }
        });
    });
}, CHECK_INTERVAL_MS);



