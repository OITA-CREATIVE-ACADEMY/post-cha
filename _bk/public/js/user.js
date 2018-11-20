class User {
  constructor(user){
    this.email = user.email
    this.nickname = user.nickname
  }

  displayName(){
    return this.email || this.nickname
  }
