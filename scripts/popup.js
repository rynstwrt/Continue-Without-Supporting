const textArea = document.querySelector("#phrases-textarea");
const saveButton = document.querySelector("#save-button");
let phrases;


async function getCurrentTab()
{
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    return tabs[0];
}


function sendMessageToContent(type)
{
    getCurrentTab().then(async tab =>
    {
        const response = await chrome.tabs.sendMessage(tab.id, type);
        textArea.innerHTML = response;
    });
}

sendMessageToContent("getPhrases");

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>
// {
//     const data = message.data;
//
//     if (message.action === "setTextArea")
//     {
//         phrases = data;
//         setTextAreaText();
//     }
//
//     return true;
// });


// saveButton.addEventListener("click", () =>
// {
//     getCurrentTab().then(tab =>
//     {
//         // chrome.tabs.sendMessage(tab, {message: "save"});
//     });
// });

