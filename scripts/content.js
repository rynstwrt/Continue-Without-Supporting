const CHECK_INTERVAL_MS = 250;
const PHRASES = ["Without Supporting"];


setInterval(() =>
{
    const elements = document.querySelectorAll("*");

    elements.forEach(el =>
    {
        PHRASES.forEach(phrase =>
        {
            if (el.textContent.includes(phrase))
            {
                el.click();
            }
        });
    });
}, CHECK_INTERVAL_MS);