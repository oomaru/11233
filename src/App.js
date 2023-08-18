import Navbar from "./components/navbar";
import Card from "./components/card";
import { Component } from "react";
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {

  state = {
    cards:
    [
      {id: 0, name: "California", price: 1.99, img: california, number: 0},
      {id: 1, name: "Dragon", price: 3.49, img: dragon, number: 0},
      {id: 2, name: "Dynamite", price: 2.49, img: dynamite, number: 0},
      {id: 3, name: "Philadelphia", price: 0.99, img: philadelphia, number: 0},
      {id: 4, name: "Rainbow", price: 2.99, img: rainbow, number: 0},
      {id: 5, name: "Shrimp", price: 1.49, img: shrimp, number: 0},
  ]
}

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards});
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    card[id].number++;
    this.setState({cards});

  }

  render(){
  return (
    <>
   <Navbar/>
   <div className="container">
      <h1>Cosa desideri ordinare?</h1>
        <hr/>
        <div className="row">
          {this.state.cards.map(card => (
            <Card
            key={card.id}
            name={card.name}
            price={card.price}
            img={card.img}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            />
          ))}
        </div>
    </div>
   </>
    
    );
  }
}

export default App;
