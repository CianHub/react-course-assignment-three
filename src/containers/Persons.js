import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import ACTIONS from "../store/actions/actions";

class Persons extends Component {
  state = {
    persons: []
  };

  render() {
    let generateNewPerson = () => {
      return {
        id: Math.random(),
        name: "Max",
        age: Math.floor(Math.random() * 40)
      };
    };

    return (
      <div>
        <AddPerson
          personAdded={() => this.props.addNewPerson(generateNewPerson())}
        />
        {this.props.ppl.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.removePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const stateToProps = state => {
  return { ppl: state.persons };
};

const dispatchToProps = dispatch => {
  return {
    addNewPerson: newPerson => dispatch({ type: ACTIONS.ADD, newPerson }),
    removePerson: id => dispatch({ type: ACTIONS.REMOVE, id })
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Persons);
