chrome.contextMenus.create({
	"title": "100DaysOfRecord",
	"type": "normal",
    "contexts": ["all"],
    "id": "parent_id"
});

chrome.contextMenus.onClicked.addListener(function (info, tab){
    console.log(tab);
    chrome.tabs.sendMessage(tab.id, "action");
});

