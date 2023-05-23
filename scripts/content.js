const storageKey = "CWS_storage";
let phrases = ["continue without supporting"];

/*
    1. on load, get phrases from storage and set textarea
    2.
*/



function getPhrases()
{
    return new Promise((res, rej) =>
    {
        chrome.storage.sync.get("a", obj =>
        {
            res(obj[storageKey]);
        });
    });
}


function savePhrases()
{
    chrome.storage.sync.set({[storageKey]: phrases});
}


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>
// {
//     console.log(request, sender, sendResponse);
//     sendResponse("TEST");
// });

function sendMessageToPopup(action, data)
{
    chrome.runtime.sendMessage({
        action: action,
        data: data,
    }, response =>
    {
        // console.log(response);
    });
}


chrome.runtime.onMessage.addListener((req, sender, sendResponse) =>
{
    if (req["type"] === "getPhrases")
    {
        getPhrases.then(phrases =>
        {
            console.log("SENDING PHRASES");
            console.log(phrases);
            sendResponse(phrases);
            return true;
        });
    }
});


getPhrases().then(p =>
{
    phrases = p ? phrases.concat(p) : phrases;
});