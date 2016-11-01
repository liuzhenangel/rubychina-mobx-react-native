import {observable} from 'mobx'
import api from './api'

class TopicsStore {
  @observable topics = [];

  constructor() {
  }

  getTopics() {
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

const topicsStore = new TopicsStore;

export default topicsStore;
