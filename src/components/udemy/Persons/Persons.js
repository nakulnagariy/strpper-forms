import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Person from './Person/person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('[personss.js] getDerivedStateFromProps', nextProps);
    //     return prevState;
    // }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    // componentWillReceiveProps(nextProps) {
    //     console.log('[personss.js] componentWillReceiveProps', nextProps);
    // }

    // shouldComponentUpdate doesn't required if you are using PureComponent because it does the same thing as shoouldComponentUpdate
    // with complete props check

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[personss.js] shouldComponentUpdate');
    //     if(
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changedEvent !== this.props.changedEvent ||
    //         nextProps.clickEvent !== this.props.clickEvent
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[personss.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot!.'};
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[personss.js] componentDidUpdate', snapshot);
    }

    componentWillUnmount() {
        console.log('[personss.js] componentWillUnmount');
    }
    
    render(){
        console.log('[personss.js] rendering...');
        return (
            <div>
                 {this.props.persons.map((ind, index) => (
                    <Person 
                        key = {ind.id}
                        name = {ind.name}
                        age = {ind.age} 
                        // isAuth={this.props.isAuthenticated}
                        changed = {(e) => this.props.changedEvent(e, ind.id)} 
                        click = {() => this.props.clickEvent(index)}/>
                ))}
            </div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Persons;