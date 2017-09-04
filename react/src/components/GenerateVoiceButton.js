import React from 'react';

class GenerateVoiceButton extends React.Component {
  constructor(props){
    super(props);
    this.fetchFromVoicebunny = this.fetchFromVoicebunny.bind(this)
  };

  fetchFromVoicebunny() {
    this.props.beginVoicebunnyFetch();
    fetch(`/api/v1/voicebunnies`, {
      method: 'POST',
      credentials: 'same-origin',
      body: this.props.gender
    })
    .then(response => response.json())
    .then(data => {
      this.props.completeVoicebunnyFetch(data);
    })
  };

  render(){

    return (
        <button className="generateButton" onClick={this.fetchFromVoicebunny}>
          {this.props.gender}
        </button>

    )
  }
};

export default GenerateVoiceButton;
