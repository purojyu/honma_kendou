// select要素とテキストボックス要素を取得
const selectBox = document.getElementById("experience");
const textBox = document.getElementById("level");

// selectboxの値が変更された時の処理
selectBox.addEventListener("change", function () {
    // 選択された値を取得
    const selectedValue = selectBox.value;

    // 特定の値であればテキストボックスを無効化、そうでなければ有効化する
    if (selectedValue === "1" /* ここに条件となる特定の値を記述 */) {
        textBox.disabled = true; // テキストボックスを無効化
    } else {
        textBox.disabled = false; // テキストボックスを有効化
    }
});
