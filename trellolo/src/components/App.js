import React, { Component } from "react";
import TrelloloList from './trelloloList';
import {connect} from 'react-redux';
import ActionButton from './actionButton';



// function App() {
class App extends Component{
  render() {
    const {lists} = this.props;
    return (
      <div className="App">
        <h2>hello world</h2>
        <div style = {styles.listsContainer}>
          {lists.map(list => <TrelloloList key = {list.id} title = {list.title} cards = {list.cards} /> ) }
          <ActionButton list />
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
