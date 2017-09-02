import React, { Component } from 'react';

class ButtonPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: false
    }
  this.playSound = this.playSound.bind(this);
  }

  playSound() {
    const player = document.querySelector(`audio[id="clip${this.props.data.id}"]`);
    if (this.state.playStatus) {
      player.pause();
      this.setState({ playStatus: false })
    } else {
      player.currentTime = 0;
      player.play();
      this.setState({ playStatus: true })
      setTimeout(function() { this.setState({ playStatus: false}); }.bind(this), (player.duration*1000));
    }
  }

  render() {
    let icon;
    if (this.state.playStatus){
      icon = <i className="fa fa-stop fa-5x" aria-hidden="true"></i>
    } else {
      icon = <i className="fa fa-play fa-5x" aria-hidden="true"></i>
    }

    return (
      <div className="centered" id={`clip${this.props.data.id}`} onClick={this.playSound}>
        {icon}
        <audio id={`clip${this.props.data.id}`}>
          <source src={this.props.data.url} />
          Your user agent does not support the HTML5 Audio element.
        </audio>
      </div>
    )
  }
}

export default ButtonPlayer;
