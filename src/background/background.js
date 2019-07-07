function paste() {
    console.log("hoge");
}

chrome.contextMenus.create({
	"title": "100DaysOfRecord",
	"type": "normal",
    "contexts": ["all"],
    "id": "parent",
    "onclick": paste()
});

