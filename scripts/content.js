const CHECK_INTERVAL_MS = 250;
const PHRASES = ["without supporting", "without disabling"];


setInterval(() =>
{
    const elements = document.querySelectorAll("*");

    elements.forEach(el =>
    {
        PHRASES.forEach(phrase =>
        {
            if (el.textContent.toLowerCase().includes(phrase.toLowerCase()))
            {
                el.click();
            }
        });
    });
}, CHECK_INTERVAL_MS);