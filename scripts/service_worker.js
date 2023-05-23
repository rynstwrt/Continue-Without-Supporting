// function sendToContentScript(message, data)
// {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
//     {
//         chrome.tabs.sendMessage(tabs[0].id, {
//             message : message,
//             data: data
//         }, function(response)
//         {
//             console.log(response);
//         });
//     });
// }

// chrome.runtime.onMessage.addListener(msg =>
// {
//     console.log(msg);
//     return true;
// });