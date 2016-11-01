import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import STabNavigator from 'react-native-tab-navigator'
import { observer } from 'mobx-react/native'

import Routes from './routes'

@observer
export default class TabNavigator extends Component {
  static propTypes = {
    tabStore: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired,
    view: PropTypes.object.isRequired,
  };

  selectTab(which) {
    this.props.tabStore.selected = which;
    switch(which) {
      case 'topics':
        this.props.navigator.resetTo(Routes.TopicsScreen);
        break;
      case 'wiki':
        this.props.navigator.resetTo(Routes.TaskScreen);
        break;
      case 'task':
        this.props.navigator.resetTo(Routes.TaskScreen);
        break;
      case 'profile':
        this.props.navigator.resetTo(Routes.ProfileScreen);
        break;
    }
  }

  render() {
    return (
      <STabNavigator>
        <STabNavigator.Item
          selected={this.props.tabStore.selected === 'topics'}
          title="话题"
          renderIcon={() => <Image source={require('../images/home.png')} style={{width: 24, height: 24}}/>}
          onPress={() => this.selectTab('topics')}>
          {this.props.view}
        </STabNavigator.Item>
        <STabNavigator.Item
          selected={this.props.tabStore.selected === 'wiki'}
          title="知识库"
          renderIcon={() => <Image source={require('../images/checkin.png')} style={{width: 24, height: 24}}/>}
          onPress={() => this.selectTab('wiki')}>
          {this.props.view}
        </STabNavigator.Item>
        <STabNavigator.Item
          selected={this.props.tabStore.selected === 'task'}
          title="收藏"
          renderIcon={() => <Image source={require('../images/task.png')} style={{width: 24, height: 24}}/>}
          onPress={() => this.selectTab('task')}>
          {this.props.view}
        </STabNavigator.Item>
        <STabNavigator.Item
          selected={this.props.tabStore.selected === 'profile'}
          title="通知"
          renderIcon={() => <Image source={require('../images/profile.png')} style={{width: 24, height: 24}}/>}
          onPress={() => this.selectTab('profile')}>
          {this.props.view}
        </STabNavigator.Item>
      </STabNavigator>
    )
  }
}
