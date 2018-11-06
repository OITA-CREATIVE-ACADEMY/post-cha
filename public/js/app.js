// Initialize Firebase
var config = {
  apiKey: "AIzaSyAASntGfp-FPAUHu-5II9y3s8pI0XppIZI",
  authDomain: "post-cha.firebaseapp.com",
  databaseURL: "https://post-cha.firebaseio.com",
  projectId: "post-cha",
  storageBucket: "post-cha.appspot.com",
  messagingSenderId: "656801433168"
};
firebase.initializeApp(config);
// 認証状態の確認
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
    
        // ログイン状態の処理
        alert("いまログイン中！");
    
    }
    else {
    
        // ログアウト状態の処理
        alert("いまはログインしてません！！");
    }
});
window.onload = function () {

  var button;

  // ボタンがクリックされた時の処理
  $("#newuser, #login").on('click', function (e) {

    // メールアドレス・パスワードを取得
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // 新規ユーザーを登録
    firebase.auth().createUserWithEmailAndPassword(email, password)

  });
  $("#logout").on('click', function (e) {

    firebase.auth().signOut();

  });
};
