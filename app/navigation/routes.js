export default new class Routes {
  get TopicsScreen () {
    return {
      title: '话题列表',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/topics_screen').default,
      store: {
        topicsStore: require('../stores/topics_store').default,
      }
    }
  }

  get TopicScreen () {
    return {
      title: '话题',
      component: require('../containers/topic_screen').default,
      store: {
        topicStore: require('../stores/topic_store').default,
      }
    }
  }
  get CheckinScreen () {
    return {
      title: 'Wiki',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/checkin_screen').default,
    }
  }

  get TaskScreen () {
    return {
      title: 'Task',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/task_screen').default,
    }
  }

  get ProfileScreen () {
    return {
      title: 'Profile',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/profile_screen').default,
    }
  }

  get SecondScreen () {
    return {
      title: 'Second Screen',
      component: require('../containers/second_screen').default,
    }
  }

  get CounterScreen () {
    return {
      title: 'Counter Screen',
      component: require('../containers/counter_screen').default,
    }
  }
}
