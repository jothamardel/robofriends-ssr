import React from 'react';
import CardList from '../components/cardList/cardList';
import SearchBox from '../components/searchBox/searchBox';
import { robots } from '../utils/data';


class Index extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: robots,
      seachfield: ''
    }
  }

  onSearchChange(event) {
    console.log(event.target.value)
  }

  render() {

    return (
      <div className='tc'>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <div>
          <CardList robots={ this.state.robots }/>  
        </div>
      </div>
    )
  }
};

export default Index;