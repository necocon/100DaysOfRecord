const HASHTAG = "#100DaysOfCode";
const MIN_COUNT = 1;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.storage.local.get(['days'], result => {
        //FIXME: HTMLの構造をぶっ壊してしまうので修正が必要
        if (result.days === undefined) {
            document.activeElement.innerText = `Day${MIN_COUNT} ${HASHTAG}`;
        } else {
            document.activeElement.innerText = `Day${result.days} ${HASHTAG}`;
        }
    });
});