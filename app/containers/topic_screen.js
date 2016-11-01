import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react/native'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import HTMLView from 'react-native-htmlview'
import Button from 'react-native-button'
import MarkdownStyles from '../styles/markdown'
import {Format} from '../Format';

@observer
export default class TopicScreen extends Component {
  static propTypes = {
    topicStore: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.props.topicStore.getTopic()
    this.props.topicStore.getReplies()
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.cententWrap}>
          { this.props.topicStore.currcentTopic.user &&
            <View style={styles.header}>
              <View style={styles.cententLi}>
                <View style={styles.rightCentent}>
                  <Text style={styles.cententTitle}>{this.props.topicStore.currcentTopic.title}</Text>
                  <View>
                    <Text style={styles.infos}>
                      {this.props.topicStore.currcentTopic.node_name} • {this.props.topicStore.currcentTopic.user.name} • 发布于 {Format.date(this.props.topicStore.currcentTopic.created_at)}
                    </Text>
                  </View>
                </View>
                <View style={styles.mediaRight}>
                  <Image source={{uri: this.props.topicStore.currcentTopic.user.avatar_url}} style={styles.cententImg} />
                </View>
              </View>
              <View style={styles.line}></View>
            </View>
          }
          <ScrollView>
            <View style={styles.centent}>
              <HTMLView value={this.props.topicStore.currcentTopic.body_html} stylesheet={MarkdownStyles} />
            </View>
            <View style={styles.replies}>

            </View>
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
  infos: {
    paddingTop: 5,
    color: '#737372',
    fontSize: 12,
  },
});
