import {observable} from 'mobx'

class TabStore {
  @observable selected = 'topics';
}

const tabStore = new TabStore;
export default tabStore;
