import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  // handleSubmit = (event) => {
  //   //prevent a refresh, or attempt to redirect to the current page
  //   event.preventDefault()
  //   //build a formData hash with the current form data
  //   let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
  //   //handle this request with Asynchronous JavaScript
  //   //  code that handles sending our form Data
  //   //  might be defined in the same form component, but is 
  //   //  more often provided as a prop
  //   this.sendFormDataSomewhere(formData)
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({ submittedData: dataArray})
  }
  listOfSubmission = () => {
    return this.state.submittedData.map( data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
    <div>
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" 
         onChange={event => this.handleFirstNameChange(event)} 
         value={this.state.firstName} />
        <input type="text"  
        onChange={event => this.handleLastNameChange(event)} 
        value={this.state.lastName} />
      <input type="submit" />
      </form>
      {this.listOfSubmission()}
    </div>
    )
  }
}

export default Form;