import React from 'react'
import styled from 'styled-components'
import Button from './styles/button'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value
    console.log(name + " " + value)
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit && this.props.onSubmit(this.state)
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.changeHandler}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
          </label>
        <Button type="submit">Button</Button>
        </form>
      </Wrapper>
    )
  }
}

export default Login