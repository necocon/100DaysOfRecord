const HASHTAG = "#100DaysOfCode";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.runtime.sendMessage({ method: 'getDays' }, function (response) {
        document.activeElement.innerText += `Day${response.data} ${HASHTAG}`;
    });
});
