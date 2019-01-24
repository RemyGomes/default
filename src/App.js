import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import GuessCount from './GuessCount';


/*
function FormComponent() {
  return <form method="post" action="" onSubmit={this.handleSubmit}>
              <p className="field">
                  <label>
                      E-mail
                      <input
                      type="email"
                      name="email"
                      required
                      autoFocus
                      value={this.state.email}
                      onChange={this.handleChange}
                      />
                  </label>
              </p>
          <button type="submit" value="Connexion" />
  </form>
}

function CoolComponent() {
  return <p>Youpi, so cool !</p>
} 
*/  



class App extends Component {

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  
  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        <Card card="💖" feedback="justMismatched" onClick={this.handleCardClick} />
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
      </div>  
    )
  }
}

export default App;
