import React, { useEffect, useRef, useContext } from 'react'
import AuthContext from '../context/auth-context';
import './cockpit.css'

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[cockpit.js] useEffect');

    // const timer = setTimeout(() => {
    //   alert('saved data on cloud');
    // }, 1000);

    // setTimeout(() => {
    //   alert('saved data on cloud');
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      console.log('[cockpit.js] cleanup work can be done in hooks by return a callback function.')
      // clearTimeout(timer);
    }
  }, [])

  useEffect(() => {
    console.log('[cockpit.js] 2nd useEffect');
  })

  const assginedClasses = [];
  if (props.personsLength <= 2) {
    assginedClasses.push('red');
  }
  if (props.personsLength <= 1) {
    assginedClasses.push('bold');
  }

  return (
    <div className="cockpit">
      <h1 className="my-4">{props.title}</h1>
      <p className={assginedClasses.join(' ')}>This is really working...</p>
      <button
        ref={toggleBtnRef}
        className="btn btn-lg btn-primary mr-2"
        onClick={props.click}>
        Toggle Person
      </button>
      <button
        onClick={authContext.login}
        className="btn btn-lg btn-dark-ghost">Log in</button>
    </div>
  )
}

// React memo is just like shouldComponentUpdate in class based components
export default React.memo(cockpit);