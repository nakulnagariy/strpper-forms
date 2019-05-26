import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Person from "./Persons/Person/person";
import Persons from './Persons/Persons';
import Cockpit from './Cockpit/cockpit';
import withClass from '../udemy/hoc/withClass';
import Aux from '../udemy/hoc/Auxuliry';
import AuthContext from './context/auth-context';
import "./Persons/Person/person.css";

class App extends Component {
    constructor (props) {
        super(props)
        console.log('[app.js] constructor');
    }

    state = {
        persons: [
            { id: "geer", name: "max", age: 28 },
            { id: "gedsr", name: "maxmillian !", age: 23 },
            { id: "gegr", name: "maxi...", age: 26 },
            { id: "sdf", name: "ravii...", age: 34 },
        ],
        otherstate: "some other value",
        showPerson: false,
        authenticated: false
    }

    static getDerivedStateFromProps(props, state = this.state) {
        console.log('[app.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[app.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[app.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return { message: 'this is from getSnapshotBeforeUpdate' }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[app.js] componentDidUpdate', snapshot);
    }

    nameChangedHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex],
        }

        // const person = Object.assign({}, this.state.persons[personIndex]);
        // old way of doing this, instead go with spread operator

        person.name = e.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })
    }

    togglePerson = () => {
        this.setState((prevState) => {
            return { showPerson: !prevState.showPerson }
        })
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        // adding slice on persons can give you the new array but this approce is not advisable and has a bad impact
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }

    loginHandler = () => {
        this.setState({ authenticated: true })
    }

    render() {
        let person = null;
        console.log('[app.js] rendering....');
        if (this.state.showPerson) {
            person = [...this.state.persons]
            person = (
                <div>
                    <Persons
                        changedEvent={this.nameChangedHandler}
                        clickEvent={this.deletePersonHandler}
                        persons={person}
                        isAuthenticated={this.state.authenticated}
                    />
                </div>
            )
        }
        return (
            <Aux>
                <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
                    <Cockpit
                        title="Person Managaer, This practical is from Udemy course on React!..."
                        personsLength={this.state.persons.length}
                        click={this.togglePerson}
                        login={this.loginHandler}>
                    </Cockpit>

                    {person}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, 'container');