import React, { Component } from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({ monsters: users}));
  }
  
  render() {
    //OBJECT DESTRUCTURING (pinagsama lang at mas pinadali)
    const { monsters, searchField} = this.state;
    // same as const monsters = this.state.monsters
    // same as const searchField = this.state.searchField 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
    
      <h1>MOnster Rolodex</h1>
      
        <SearchBox
          placeholder='search monsters' 
          handleChange={ e => this.setState({ searchField: e.target.value }) 
        }
        
        /> 
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}
export default App;
