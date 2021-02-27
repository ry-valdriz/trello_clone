import React, { Component } from "react";
import TrelloloList from './trelloloList';
import {connect} from 'react-redux';


// function App() {
class App extends Component{
  render() {
    const {lists} = this.props;
    return (
      <div className="App">
        <h2>hello world</h2>
        <div style = {styles.listsContainer}>
          {lists.map(list => <TrelloloList title = {list.title} cards = {list.cards} /> ) }
        </div>
      </div>
    );
  }
}


const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
