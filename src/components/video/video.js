import React, { Component } from 'react'
import styles from './video.scss'
import Scroll from '../scroll'

export default class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      didLoad: false
    }
  }
  render() {
    return <div className={styles.videoContainer} ref={(r) => this.topFrame = r}>
      <iframe
        onLoad={() => {
          this.setState({
            didLoad: true
          })
        }}
        width="560" scrolling="no" height="360" src="https://www.youtube.com/embed/6rI4QEeajCA" frameborder="0" allowfullscreen>
      </iframe>
      <iframe style={{}}
        src="https://player.vimeo.com/video/196987303"
        width="640"
        height="360"
        scrolling="no"
        frameborder="0"
        webkitallowfullscreen mozallowfullscreen allowfullscreen>
      </iframe>
      <iframe src="https://player.vimeo.com/video/135618601"
        width="640"
        height="360"
        frameborder="0"
        scrolling="no"
        webkitallowfullscreen mozallowfullscreen allowfullscreen>
      </iframe>
      {
        this.state.didLoad ? <Scroll container={this.topFrame}/> : null
      }
    </div>
  }
}
