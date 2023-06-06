const CHECK_INTERVAL_MS = 500;
const CHECK_TIMEOUT_SECONDS = 10;
const PHRASES = ["continue without supporting", "continue without disabling"];

const startTime = Date.now();
const interval = setInterval(() =>
{
    if (Date.now() - startTime > CHECK_TIMEOUT_SECONDS * 1000)
        clearInterval(interval);

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
                    // alert("CLICK");
                }

                el.click();
                clearInterval(interval);
            }
        });
    });
}, CHECK_INTERVAL_MS);
