import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    console.log('Subpage: ComponentDidMount');
  }

  componentWillUnmount() {
    console.log('Subpage: ComponentWillUnmount');
  }

  render() {
    return (
      <div>
        <h2>Subpage</h2>
        <p>This is the sub page</p>
      </div>
    );
  }
}

export default Home;
