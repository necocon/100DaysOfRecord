const HASHTAG = "#100DaysOfCode";
const MIN_COUNT = 1;

    navigator.clipboard.writeText("テスト");

    const inputedText = document.activeElement.value;
    if (typeof inputedText === undefined) {
        return;
    }

    chrome.storage.local.get(['days'], result => {
        const selectionStart = document.activeElement.sleectionStart;
        const leftSideText = inputedText.substr(0, selectionStart);
        const rightSideText = inputedText.substr(selectionStart, inputedText.length);
        if (result.days) {
            document.activeElement.value = `${leftSideText}Day${result.days} ${HASHTAG}${rightSideText}`;
        } else {
            document.activeElement.value = `${leftSideText}Day${MIN_COUNT} ${HASHTAG}${rightSideText}`;
        }
    });
});