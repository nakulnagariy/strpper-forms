import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        name: 'Nakul',
        age: 34,
        cool: true
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                growOneYearOlder: () => { this.setState({
                    age: this.state.age + 1
                })}
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

const Family = (props) => (
    <div className="family">
        <Person />
    </div>
)


class Person extends Component {
    render() {
        return(
            <div className="person">
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p> Name  :: {context.state.name} </p>
                            <p> Age  :: {context.state.age} </p>
                            <button onClick={context.growOneYearOlder}>Tap me</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}


class ContextApp extends Component {
    render() {
        return (
            <MyProvider>
                <div>
                    <p>here we're.</p>
                    <Family />
                </div>
            </MyProvider>            
        );
    }
}

export default ContextApp;