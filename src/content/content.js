const　HASHTAG = "#100DaysOfCode";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        document.activeElement.innerText = `Day3 ${HASHTAG}`;
    }
);