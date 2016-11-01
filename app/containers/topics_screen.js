import React, { Component, PropTypes } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import Button from 'react-native-button'
import Routes from '../navigation/routes'
import { observer } from 'mobx-react/native'
import ApplicationStyles from '../styles'
import {Format} from '../Format';

@observer
export default class WeclomeScreen extends Component {
  static propTypes = {
    topicsStore: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.props.topicsStore.getTopics();
  }
  render() {
    let length = this.props.topicsStore.topics.length;
    let media = this.props.topicsStore.topics.map((topic)=> {
      return (
        <View key={topic.id}>
          <View style={styles.cententLi}>
            <Image source={{uri: topic.user.avatar_url}} style={styles.cententImg} />
            <View style={styles.rightCentent}>
              <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigator.push(Routes.TopicScreen) }>
                <Text style={styles.cententTitle}>{topic.title}</Text>
              </Button>
              <View>
                <Text style={styles.infos}>
                  {topic.node_name} • {topic.user.name} • 发布于 {Format.date(topic.created_at)}
                </Text>
              </View>
            </View>
            <View style={styles.mediaRight}>
              <Text style={styles.badge}>{topic.replies_count}</Text>
            </View>
          </View>
          <View style={styles.line}></View>
        </View>
      );
    });
    return (
      <View style={styles.wrap}>
        <View style={styles.cententWrap}>
          <ScrollView style={styles.centent}>
            { media }
            { length <= 0 && <Text>Loading</Text> }
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex:1,
    flexDirection:'column',
  },
  cententWrap: {
    flex:1,
    flexDirection:'column',
  },
  centent: {
    flex:1,
    flexDirection:'column',
  },
  cententLi: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  cententImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    top: 5,
  },
  cententTitle: {
    fontSize: 13,
    color: '#000',
    marginBottom: 3,
  },
  cententCentent: {
    fontSize: 12,
  },
  rightCentent: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 5,
    paddingRight: 8,
    paddingBottom: 5,
  },
  cententType: {
    width: 40,
    height: 22,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  bottom: {
    height: 40,
  },
  line: {
    height: 1,
    backgroundColor: '#E4E4E4',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7,
    marginBottom: 7,
  },
  badge: {
    fontSize: 10,
    top: 5,
    color: '#222',
  },
  infos: {
    paddingTop: 5,
    color: '#737372',
    fontSize: 12,
  },
});
