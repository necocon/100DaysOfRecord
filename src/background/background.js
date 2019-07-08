chrome.contextMenus.create({
	"title": "日数と100DaysOfCodeのハッシュタグを貼り付け",
	"type": "normal",
    "contexts": ["all"],
    "id": "parent"
});

chrome.contextMenus.onClicked.addListener(function (info, tab){
    chrome.tabs.sendMessage(tab.id, "action");
});

