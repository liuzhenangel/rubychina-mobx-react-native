import {observable} from 'mobx'
import api from './api'

class CounterStore {
  @observable counter = 0;
  @observable topics = [];

  constructor() {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  incrementAsync() {
    setTimeout(() => {
      this.counter++;
      }, 500);
  }

  getFromRemote() {
    api.get('/topics')
      .then( (r)=> {
        if (r.ok) {
          this.topics = r.data.topics;
        }else{
          console.log(r);
        }
      })
      .then( console.log )
  }
}

const counterStore = new CounterStore;

export default counterStore;
