import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Categories from '../components/Categories';
import News from '../components/News';
import Recomendation from '../components/Recomendation';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBox></SearchBox>
        <Categories></Categories>
        <News></News>
        <Recomendation></Recomendation>
        <News sideImg></News>
        <News sideImg></News>
        <News sideImg></News>
      </div>
    );
  }
}

export default Home;
