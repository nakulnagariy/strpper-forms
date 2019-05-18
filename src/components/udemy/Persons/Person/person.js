import React, { Component } from 'react'
import "./person.css"
import Aux from '../../hoc/Auxuliry';
import AuthContext from '../../context/auth-context';
import withClass from '../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;
  
  componentDidMount() {
    // this.inputElement.focus();  
    this.inputElementRef.current.focus();
  }
  
  render() {
    console.log('[person.js] rendering....')
    return (
      <Aux>
          {/*<AuthContext.Consumer>
            {context => context.authenticated ? <p> Authinticated </p> : null}
          </AuthContext.Consumer>*/}
          {this.context.authenticated ? <p> Authinticated </p> : null}
          {/*this.props.isAuth ? <p> Authinticated </p> : null*/}
          <p>My name is {this.props.name} and i'm {this.props.age} old.</p>
          <input 
            onChange={this.props.changed} 
            // ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}
            value={this.props.name}/>
          <p>{this.props.children}</p>
          <button onClick = {this.props.click}>Delete this</button>
      </Aux>
    )
  }
}


export default withClass(Person, 'person');