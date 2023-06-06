chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>
{
    if (request.type === "iconChange")
    {
        const isGreen = request.options.isGreen;

        const icon16 = isGreen ? "../assets/16-green.png" : "../assets/16.png"
        const icon48 = isGreen ? "../assets/48-green.png" : "../assets/48.png"
        const icon128 = isGreen ? "../assets/128-green.png" : "../assets/128.png"

        const path = {
            "16": icon16,
            "48": icon48,
            "128": icon128
        };

        chrome.action.setIcon({path: path});
    }
});
