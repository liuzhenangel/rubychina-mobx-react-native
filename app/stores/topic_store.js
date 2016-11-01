import {observable} from 'mobx'
import api from './api'

class TopicStore {
  @observable currcentTopic = {};
  @observable replies = [];

  constructor() {
  }

  getTopic(){
    api.get('/topics/31143')
      .then( (r)=> {
        if (r.ok) {
          this.currcentTopic = r.data.topic;
        }else{
          console.log(r);
        }
      })
      .then( console.log )
  }

  getReplies() {
    api.get('/topics/31143/replies')
      .then( (r)=> {
        if (r.ok) {
          this.replies = r.data.replies;
        }else{
          console.log(r);
        }
      })
      .then( console.log )
  }
}

const topicStore = new TopicStore;

export default topicStore;
