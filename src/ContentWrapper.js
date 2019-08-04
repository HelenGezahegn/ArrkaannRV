import React from 'react';
import InternalForm from './Components/InternalForm/InternalForm.js'

export default class ContentWrapper extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        {/* this is where we will have to change content based on react router*/}
        <InternalForm />
      </div>
    )
  }

}
