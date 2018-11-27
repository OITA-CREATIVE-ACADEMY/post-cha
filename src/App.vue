<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" class="btn btn-dark">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" class="btn btn-success">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank" class="btn btn-danger">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" class="btn btn-dark">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <!-- header -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><b>POST-cha！</b></a>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="ナビゲーションの切替">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item js-signed-in">
            <a class="nav-link" id="js-user-email" href="#"></a>
          </li>
          <li class="nav-item login js-signed-out" id="login">
            <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Login</a>
          </li>
          <li class="nav-item logout js-signed-in">
            <a class="nav-link" href="javascript:void(0);" id="js-signOut">Log out</a>
          </li>
          <li class="nav-item signup js-signed-out" id="signup">
            <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- /header -->
    <!-- Modal -->
    <div class="sign_modal modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login/Sign up</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control input_email" id="js-email" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control input_password" id="js-password" placeholder="Password">
                    </div>
                  </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button id="js-signIn" type="button" class="btn btn-primary input_login">Login</button>
              <button id="js-signUp" type="button" class="btn btn-primary input_signup">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    <!-- /Modal -->



    <div class="wrapper">
      <!-- 新規投稿用カード -->
      <div class="jumbotron">
          <h2 class="display-5">POST-cha!へようこそ</h2>
          <p class="lead">まずはあなたの言葉で、気楽にPOSTしてみてください。そこから新たな出会いが生まれるかもしれません。</p>
          <hr class="my-4">
          <p class="attention">入力文字200文字以内</p>
          <div class="input-group mb-3">
             <textarea name="postdata"></textarea><br>
              <div class="input-group-append">
              </div>
            </div>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">POST</a>
          </p>
        </div>

      <!-- /新規投稿用カード -->
      <!-- 投稿一覧 -->
      <div class="card">
          <h5 class="card-header">（名前）</h5>
          <div class="card-body">
            <div class="icon">
            </div>
            <p class="card-text">今日はOCAです！頑張ろう♫</p>
            <i class="far fa-kiss-wink-heart heartIcon"></i>
            <div class="btnWrapper">
              <a href="#" class="btn btn-primary">EDIT</a>
              <a href="#" class="btn btn-primary">DELETE</a>
            </div>
          </div>
       </div>

       <div class="card">
          <h5 class="card-header">（名前）</h5>
          <div class="card-body">
            <div class="icon">
            </div>
            <p class="card-text">今日はOCAです！頑張ろう♫</p>
            <div class="btnWrapper">
              <a href="#" class="btn btn-primary">EDIT</a>
              <a href="#" class="btn btn-primary">DELETE</a>
            </div>
          </div>
       </div>
      <!-- /投稿一覧 -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
/* POST-cha!のCSSです */
header {
    width: 100%;
    height: 50px;
    background-color: black;
}

p{
    margin-bottom: 0;
}

p.title {
    color: white;
    font-size: 15px;

}

.wrapper {
    padding: 20px;
}

.btnWrapper {
    text-align: right;
}

.icon {
    width: 100px;
    height: 100px;
    background-color: aqua;
    float: left;
}

.card {
    margin: 20px;
}

.heartIcon {
    color: tomato;
    font-size: 30px;
}

.attention{
    padding-bottom: 1px;
}

textarea {
    resize: none;
    width:100%;
    height:100px;
}

</style>
