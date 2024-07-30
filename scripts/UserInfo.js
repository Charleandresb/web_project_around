export default class UserInfo {
  constructor({ nameSelector, jobSelector, userId, userAvatar }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._userId = userId;
    this._userAvatar = document.querySelector(userAvatar);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo() {
    return {
      userName: this._name.textContent,
      userJob: this._job.textContent,
      userId: this._userId,
      userAvatar: this._userAvatar.src,
    };
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.about;
    this._userId = data._id;
    this._userAvatar.src = data.avatar;
  }
}

// export default class UserInfo {
//   constructor({ nameSelector, jobSelector }) {
//     this._name = document.querySelector(nameSelector);
//     this._job = document.querySelector(jobSelector);
//     this.getUserInfo = this.getUserInfo.bind(this);
//   }

//   getUserInfo() {
//     return {
//       userName: this._name.textContent,
//       userJob: this._job.textContent,
//     };
//   }

//   setUserInfo({ name, job }) {
//     this._name.textContent = name;
//     this._job.textContent = job;
//   }
// }
