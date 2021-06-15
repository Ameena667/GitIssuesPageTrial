import React, { Component } from "react";
import PropTypes from "prop-types";
const person = {
  name: "ameena",
  age: 90,
};
class TypeCheckingPractice extends Component {
  state = {
    nameTwo: "shaik",
  };
  render() {
    return (
      <div>
        <p> This is parent component</p>
        {/*<ChildComponent name={this.state.name} age={this.state.age} />*/}
        <ChildComponent person={person} />
      </div>
    );
  }
}
const ChildComponent = (props) => {
  return (
    <>
      {props.person.name}-{props.person.age} - {props.nameTwo}
    </>
  );
};
ChildComponent.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};
ChildComponent.defaultProps = {
  nameTwo: "unkown",
};
export default TypeCheckingPractice;
