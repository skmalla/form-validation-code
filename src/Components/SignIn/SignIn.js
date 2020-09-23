import React, { Component } from "react";

class UserLogin extends Component {
  state = {
    email: "",
    pass: "",
    msg: "",
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePass = (event) => {
    this.setState({
      pass: event.target.value,
    });
  };

  login = () => {
    if (this.state.email === "test@gmail.com" && this.state.pass === "123") {
      this.setState({
        msg: "Login success! Redirecting....",
      });
      sessionStorage.setItem("username", "SK Malla!");
      window.location.reload(); //to reload the current page
    } else {
      this.setState({
        msg: "Please enter correct login details!",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <b>
              NOTE: Enter the below Email-Id and Password to get into this App!
            </b>
            <br />
            <b>Email-Id: test@gmail.com</b>
            <br />
            <b>Password: 123</b>
          </div>
          <div className="col-md-3"></div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card mt-5">
              <div className="card-header bg-secondary text-white bold">
                Login
              </div>
              <div className="card-body">
                <p className="text-center text-primary">{this.state.msg}</p>
                <div className="form-group">
                  <i
                    class="fa fa-user-circle fa-2x text-primary"
                    aria-hidden="true"
                  ></i>
                  <label htmlFor="" className="ml-2">
                    Username:
                  </label>
                  <input
                    type="text"
                    onChange={this.handleEmail}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <i
                    class="fa fa-lock fa-2x text-primary"
                    aria-hidden="true"
                  ></i>
                  <label htmlFor="" className="ml-2">
                    Password:
                  </label>
                  <input
                    type="password"
                    onChange={this.handlePass}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="card-footer text-center">
                <button onClick={this.login} className="btn btn-danger btn-sm">
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default UserLogin;
