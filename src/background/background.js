'use strict';
const MIN_COUNT = 1;

chrome.storage.local.get(['days'], result => {
    if (!result.days) {
        result.days = MIN_COUNT;
    }
    chrome.browserAction.setBadgeText({ text: String(result.days) });
});

