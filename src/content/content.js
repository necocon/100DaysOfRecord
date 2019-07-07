chrome.tabs.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("hoge");
    }
);