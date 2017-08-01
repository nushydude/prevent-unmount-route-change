import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
    };
  }

  componentDidMount() {
    console.log('Home: ComponentDidMount');
  }

  componentWillUnmount() {
    console.log('Home: ComponentWillUnmount');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.status !== nextProps.status) {
      this.setState({ status: nextProps.status });
    }
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>This is the home page</p>
        <p>
          Status: {this.state.status}
        </p>
      </div>
    );
  }
}

Home.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Home;
