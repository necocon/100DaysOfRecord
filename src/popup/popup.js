'use strict';
// name属性は複数ある場合があるので、返り値はNodeListになる。今回は要素が1つしかないので先頭の要素を取得している。
const decreaseBtnElement = document.getElementsByName('decrease_button')[0];
const inputCounterElement = document.getElementsByName('input_counter')[0];
const increaseBtnElement = document.getElementsByName('increase_button')[0];
const displayDaysElement = document.getElementsByClassName('days')[0];

const MIN_COUNT = inputCounterElement.min;
const MAX_COUNT = inputCounterElement.max;

// 文字列の先頭の数字部分のみ取得する
// 例 1234hoge -> 1234
const getLeadingNumber = (value) => {
    let until = 0;
    // 文字列が数値のときにtrueとなる正規表現。
    const isNumber = new RegExp('^[0-9]+$');
    for (let i = 1; i <= value.length; i++) {
        if (!isNumber.test(String(value).slice(0, i))) {
            break;
        }
        until = i;
    }
    return String(value).slice(0, until);
}

const setDays = days => {
    displayDaysElement.textContent = days;
    chrome.storage.local.set({days: days});
    chrome.browserAction.setBadgeText({ text: String(days) });
};

// chromeのストレージから'days'キーでセットした値を取得する。結果はresult.キー名で取得できる。
chrome.storage.local.get(['days'], result => {
    if (!result.days) {
        chrome.storage.local.set({days: MIN_COUNT});
    }
    let beforeInputValue = String(result.days);
    inputCounterElement.value = result.days;
    setDays(result.days);
    
    // 入力フィールドに値が入力される度に第2引数に渡した関数が実行される。
    // 要素からvalueを取得した場合、valueは数値以外のとき空文字になる。
    inputCounterElement.addEventListener('input', (event) => {
        const inputValue = inputCounterElement.value;
        if (event.data === '.') {
            // '.'が入力されたとき入力フィールドを毎回空にする。
            // 例 '4.'を入力 -> inputCounterElement.valueは4、入力フィールドの表示は4.になっている。
            inputCounterElement.value = '';
            if (beforeInputValue.length > 0) {
                inputCounterElement.value = beforeInputValue;
            }
        }
        // 文字列の先頭が0以外の数値のときにtrueになる正規表現。
        const isNumberExcept0 = new RegExp('^[1-9]{1}$');
        if (isNumberExcept0.test(inputValue.slice(0, 1))) {
            // 文字列の先頭から数値の部分のみ抽出して、表示できる最大桁数分の文字列を取得する。
            inputCounterElement.value = getLeadingNumber(inputValue).slice(0, String(MAX_COUNT).length);
            setDays(inputCounterElement.value);
        } else {
            inputCounterElement.value = '';
            setDays(MIN_COUNT);
        }
        beforeInputValue = inputCounterElement.value; 
    });
    
    // フォーカスを外したきときに第2引数に渡した関数が実行される。
    inputCounterElement.addEventListener('blur', (event) => {
        if (inputCounterElement.value === '') {
            inputCounterElement.value = MIN_COUNT;
            setDays(MIN_COUNT);
        }
    });
    
    // -ボタンがクリックされたときに第2引数に渡した関数が実行される。
    decreaseBtnElement.addEventListener('click', (event) => {
        if (inputCounterElement.value > MIN_COUNT) {
            inputCounterElement.value = Number(inputCounterElement.value) - 1;
            setDays(inputCounterElement.value);
        }
    });
    
    // +ボタンがクリックされたときに第2引数に渡した関数が実行される。
    increaseBtnElement.addEventListener('click', (event) => {
        if (inputCounterElement.value < MAX_COUNT) {
            inputCounterElement.value = Number(inputCounterElement.value) + 1;
            setDays(inputCounterElement.value);
        }
    });
});
