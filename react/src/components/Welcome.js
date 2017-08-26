import React from 'react'

const Welcome = () => {
  return (
    <div className="centered row">
      <h1>Welcome to Voiceover Voter</h1>
      <br />
      <div className="small-1 columns"><i className="fa fa-book fa-5x"></i></div>
      <div className="small-10 columns">
        <h2>To begin, you must first create an account</h2>
        <h5>Or log in as "example@example.com", password "example"</h5>
        <br />
        <h4>Click "New Book" at the top to create books</h4>
        <br />
        <h4>Once you have a book, click on it and hit the "Generate random voice" to begin hearing voiceover samples of actual voiceover actors!*</h4>
        <br />
        <p>*These are samples of real voiceover actors provided by the awesome people of <a href="https://voicebunny.com/">VoiceBunny.com</a></p>
        <p>Occasionally an audio sample will be NSFW</p>
      </div>
      <div className="small-1 columns"><i className="fa fa-headphones fa-5x"></i></div>
    </div>
  )
}
export default Welcome;
