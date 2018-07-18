import { observable } from "mobx";

export default class GenreModel {
  id = Math.random();
  @observable name;
  @observable finished = false;

  constructor(name) {
    this.name = name;
  }
}