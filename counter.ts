import { makeObservable, observable, action } from "mobx";

// create a mobx observable
class Counter {
  public list = [];

  public sort = 'ASC';


  public sortAsc() {
    this.sort = 'ASC';
  }

  public sortDesc() {
    this.sort = 'DESC';
  }

  public add(dings) {
    this.list.push(dings);
  }

  public constructor() {
    makeObservable(this, {
      add: action,
      sortAsc: action,
      sortDesc: action,
      list: observable,
      sort: observable
    });
  }
}

const Count = new Counter();

export default Count;
