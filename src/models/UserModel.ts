import { observable } from "mobx";

export default class UserModel {
  @observable public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
