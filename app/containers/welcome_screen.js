import React, { Component, PropTypes } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import Button from 'react-native-button'
import Routes from '../navigation/routes'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../styles'
import {Format} from '../Format';

@observer
export default class WeclomeScreen extends Component {
  static propTypes = {
    counterStore: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.props.counterStore.getFromRemote()
  }

  render() {
    let length = this.props.counterStore.topics.length;
    let media = this.props.counterStore.topics.map(function(topic) {
      return (
        <View key={topic.id}>
          <View style={styles.cententLi}>
            <Image source={{uri: topic.user.avatar_url}} style={styles.cententImg} />
            <View style={styles.rightCentent}>
              <Text style={styles.cententTitle}>{topic.title}</Text>
              <View style={styles.infos}>
                <Text style={styles.cententCentent}>
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
    paddingTop: 5,
  },
  cententWrap: {
    flex:1,
    flexDirection:'column',
  },
  centent: {
    flex:1,
    flexDirection:'column',
    borderBottomWidth:1,
  },
  cententLi: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  cententImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cententTitle: {
    fontSize: 15,
    color: '#222',
    marginBottom: 3,
  },
  cententCentent: {
    fontSize: 12,
  },
  rightCentent: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
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
    minWidth: 10,
    top: 20,
    paddingTop: 15,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 1,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#777',
    borderRadius: 10,
  },
});
