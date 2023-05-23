const storageKey = "CWS_storage";
let phrases = ["continue without supporting", "A", "B", "C"];


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

// function sendMessageToPopup(action, data)
// {
//     chrome.runtime.sendMessage({
//         action: action,
//         data: data,
//     }, response =>
//     {
//         // console.log(response);
//     });
// }


chrome.runtime.onMessage.addListener((req, sender, sendResponse) =>
{
    if (req.type === "getPhrases")
    {
        sendResponse(phrases);
    }

    return true;
});


getPhrases().then(p =>
{
    phrases = p ? phrases.concat(p) : phrases;
});