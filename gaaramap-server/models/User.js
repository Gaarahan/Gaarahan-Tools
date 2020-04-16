class User {
  constructor ({ id, username, password, email, registerTime }) {
    this._username = username
    this._password = password
    this._email = email
    this._registerTime = registerTime
    this._id = id
  }

  getInfo () {
    return {
      username: this.username,
      email: this.email,
      registerTime: this.registerTime
    }
  }

  get id () {
    return this._id
  }

  get registerTime () {
    return this._registerTime
  }

  get username () {
    return this._username
  }

  get password () {
    return this._password
  }

  get email () {
    return this._email
  }
}

module.exports = User
