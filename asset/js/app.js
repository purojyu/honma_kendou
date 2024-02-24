// ヘッダー固定のための実装
// let header = document.querySelector("header");
// let headerHeight = header.offsetHeight;
// let isHeaderFixed = false;
// let originalOffset = 0;

// window.onscroll = function () {
//   fixHeader();
// };
// //ヘッダー固定
// function fixHeader() {
//   let sticky = header.offsetTop;
//   //スクロール量がヘッダーの位置まを超えた場合
//   if (window.pageYOffset > sticky && !isHeaderFixed) {
//     originalOffset = sticky;
//     document.body.style.paddingTop = headerHeight + "px";
//     header.classList.add("fixed");
//     isHeaderFixed = true;
//   } else if (window.pageYOffset <= originalOffset && isHeaderFixed) {
//     document.body.style.paddingTop = 0;
//     header.classList.remove("fixed");
//     isHeaderFixed = false;
//   }
// }

//ホームページを開く前に文字を表示する
document.addEventListener("DOMContentLoaded", function () {
  //文字表示用
  const animationContainer = document.getElementById("animation-container");
  //ホームページ表示用
  const actualContent = document.getElementById("actual-content");
  const textToDisplay = "剣は心なり\n心正しからざれば\n剣また正しからず\n剣を学ばんと欲すれば\nまず心より学ぶべし";

  function animateText(index) {
    if (index < textToDisplay.length) {
      const char = textToDisplay.charAt(index);
      animationContainer.innerText += char; // innerTextに変更
      setTimeout(function () {
        animateText(index + 1);
      }, 100);
    } else {
      // すべての文字が表示された後に本来のコンテンツを表示
      animationContainer.style.display = "none";
      actualContent.style.display = "block";
    }
  }
  // アニメーションを開始
  animateText(0);
});

// ハンバーガーメニューのメニュー表示
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav");
const close = document.querySelector("#close-item");
const body = document.body;
ham.addEventListener("click", function () {
  ham.classList.toggle("active"); // ハンバーガーメニューにactiveクラスを付け外し
  nav.classList.toggle("active"); // ナビゲーションメニューにactiveクラスを付け外し
  body.classList.toggle("no-scroll");
});
// ナビゲーションメニューのリンクがクリックされたときの処理
document.querySelectorAll("#js-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function () {
    ham.classList.toggle("active"); // ハンバーガーメニューにactiveクラスを付け外し
    nav.classList.toggle("active"); // ナビゲーションメニューにactiveクラスを付け外し
    body.classList.toggle("no-scroll");
  });
});
close.addEventListener("click", function () {
  const headernav = document.getElementById("header-nav");
  headernav.style.display = "none";
});
