import { computed, observable } from "mobx";

import UserModel from "../models/UserModel";

export default class AccountStore {
  @observable public user: UserModel;

  constructor(user?: UserModel) {
    this.user = user;
  }

  @computed
  get loggedIn() {
    return !!this.user;
  }
}
