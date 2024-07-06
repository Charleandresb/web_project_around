export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo() {
    return {
      userName: this._name.textContent,
      userJob: this._job.textContent,
    };
  }

  setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
