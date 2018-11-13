// Initialize Firebase
const config = {
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
        alert("いまログイン中!!!");
        $("#signup, #login").hide();
        console.log(user);
    }
    else {
        // ログアウト状態の処理
        alert("いまはログインしてません！！");
        $("#signup, #login").show();
        $("#logout").hide();
    }
});

window.onload = function () {

  // ボタンがクリックされた時の処理
    $("#js-signUp").on('click', function (e) {
        signUp()
    });

    $("#js-signIn").on('click', function (e) {
        signIn()
    });

    $("#js-signOut").on('click', function (e) {
        signOut()
    });
};

function signUp() {
  var email = $("#js-email").val();
  var password = $("#js-password").val();

  firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
          console.log(error);
      });
}

function signIn() {
    var email = $("#js-email").val();
    var password = $("#js-password").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            console.log(error);
        });
}

function signOut() {
    firebase.auth().signOut();
    alert("ログアウトしました");
}