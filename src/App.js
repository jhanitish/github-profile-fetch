import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from "react-redux";
import UserInfo from "./userInfo";
import { thunk_action_creator } from './actions/fetchAction';

const Button = styled.button`
  background: #fff;
  border: 1.2px solid #141414;
  padding: 15px 25px;
  border-radius: 40px;
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    background: #141414;
    color: #fff;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  margin: 60px;
`;

const Input = styled.input`
  border: 1.2px solid #141414;
  background: #fff;
  width: 50%;
  font-size: 1.2rem;
  padding: 10px;
  outline: none;
  border-radius: 2px;

  &::placeholder {
    font-size: 1.2rem;
    font-family: "Brandon Grotesque";
  }
`;
const Error = styled.h3`
  color: #ff5a5f;
  text-align: center;
  font-size: 2rem;
`;
class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      getUsername: ""
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      getUsername: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("user", this.state.getUsername)
    if(this.state.getUsername.length > 0 && this.state.getUsername !== " "){
      this.props.dispatch(thunk_action_creator(this.state.getUsername));
    }

    this.setState ({
      getUsername: ""
    });
  }

  render() {
    return (
      <div className="container">
          <Form onSubmit = {this.handleSubmit}>
              <Title>Enter the Github Username</Title>
              <Input type="text" onChange={this.handleChange} placeholder="Enter Github Username" required
              value= {this.state.getUsername} />
              <Button>Submit</Button>
          </Form>
          {this.props.isFetching ? <h3>Loading...</h3> : null}
          {this.props.data.isError ? (
            <Error >No such user exists.</Error>
          ) : null}
          {this.props.emptyUsername ? (
            <Error >Please enter a User Name to search.</Error>
          ) : null }
          {Object.keys(this.props.data.userData).length > 0 ? (
            <UserInfo user={this.props.data.userData} />
          ) : null }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

export default connect(mapStateToProps) (App);
