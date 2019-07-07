chrome.contextMenus.create({
	"title": "100DaysOfRecord",
	"type": "normal",
    "contexts": ["all"],
    "id": "parent"
});

chrome.contextMenus.onClicked.addListener(function (info, tab){
    chrome.tabs.sendMessage(tab.id, "action");
});

