import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterButton extends Component {
  // Define the initial state in Constructor
  // state => counter 0
  constructor() {
    super(); // Always call super() as the first method, to use "this"
    // this.state = {
    //   counter: 0,
    // };
    // always bind the method to the class otherwise it cannot find the method
    // If we do not want this we can comment the below code and use the "=>"
    // "fat arrow" function in "increment method"
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }
  render() {
    //const style = { fontSize: '50px', padding: '15px 30px' };
    return (
      <div className='counterbutton'>
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
      </div>
    );
  }

  // Here the "=>" arrow function is used to do the binding.
  // "increment = () => "
  //   increment() {
  //     //update the state -> counter++
  //     //console.log('increment');
  //     // In react we cannot directly update the state of the components
  //     //hence we use the setState() method and pass an object with the new state
  //     this.setState((prevState) => {
  //       return { counter: prevState.counter + this.props.by };
  //     });

  //     this.props.incrementMethod(this.props.by);
  //   }

  //   decrement() {
  //     this.setState((prevState) => {
  //       return { counter: prevState.counter - this.props.by };
  //     });

  //     this.props.decrementMethod(this.props.by);
  //   }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default CounterButton;
