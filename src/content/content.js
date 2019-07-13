'use strict';
const MIN_COUNT = 1;
const templateText = (text) => `Day${text} #100DaysOfCode`;

// backgrounから通知を受け取る
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 何も選択されていない場合はbodyかnullが返ってくる。
    const activeElement = document.activeElement;
    if (activeElement === null) {
        return;
    }
    if (activeElement.tagName === 'BODY') {
        return;
    }

    chrome.storage.local.get(['days'], result => {
        if (result.days) {
            document.execCommand('insertText', false, templateText(result.days));
        } else {
            document.execCommand('insertText', false, templateText(MIN_COUNT));
        }
    });
});