const HASHTAG = "#100DaysOfCode";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    document.getElementById('tweet-box-home-timeline').focus();
    chrome.runtime.sendMessage({ method: 'getDays' }, function (response) {
        document.activeElement.innerText += `Day${response.data} ${HASHTAG}`;
    });
});