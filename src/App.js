 import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/Search-box.components'

class App extends Component{
  constructor(){
    super();

    this.state = { 
      monisters:[],
      searchField: ''
  };
}

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => this.setState({monisters:users}));
} 

render(){
    const{monisters, searchField}=this.state;
    const filteredMonister = monisters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search Monesters'
      handleChange={e=>this.setState({searchField: e.target.value})}/>
      <CardList monisters={filteredMonister}/>
      </div>
    );
  }
}

export default App;
