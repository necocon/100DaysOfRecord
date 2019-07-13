chrome.contextMenus.create({
	'title': '日数とハッシュタグを貼り付け',
	'type': 'normal',
    'contexts': ['all'],
    'id': 'parent'
});

// ContextMenuaから「日数とハッシュタグを貼り付け」をクリックしたときに第2引数に渡した関数が実行される。
chrome.contextMenus.onClicked.addListener(function (info, tab){
    // backgroundからcontentやpopupにメッセージを通知する。
    chrome.tabs.sendMessage(tab.id, 'action');
});

