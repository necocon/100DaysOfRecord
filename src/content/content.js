const　HASHTAG = "<p>#100DaysOfCode</p>";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        const activeElement = document.activeElement;
        console.log(activeElement);
        activeElement.innerHTML = HASHTAG;
        console.log(activeElement.innerHTML);
    }
);