import React, { Component } from "react";
import Form from "../Components/Form/Form";

class App extends Component {
  state = {
    fields: {},
    errors: {},
    msg: "",
  };

  inputFieldsHandler = (event) => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields,
    });
  };

  saveDataHandler = () => {
    if (this.validateForm()) {
      alert("Data Sent To Server Successfully By Axios post Method!");
      let fields = {};
      fields["fname"] = "";
      fields["email"] = "";
      fields["mobile"] = "";
      fields["message"] = "";

      this.setState({
        msg: "Data Sent To Server Successfully!",
        fields: fields,
      });
    }
  };

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formStatus = true;

    if (!fields["fname"]) {
      formStatus = false;
      errors["fname"] = "Please Enter Your Name!";
    }

    if (!fields["email"]) {
      formStatus = false;
      errors["email"] = "Please Enter Your Email-Id!";
    }

    let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (fields["email"] !== undefined) {
      if (!epattern.test(fields["email"])) {
        formStatus = false;
        errors["email"] = "Please Enter A Valid Email-Id!";
      }
    }

    if (!fields["mobile"]) {
      formStatus = false;
      errors["mobile"] = "Please Enter Your Mobile Number!";
    }

    let mpattern = /^[0-9]{10}$/;
    if (fields["mobile"] !== undefined) {
      if (!fields["mobile"].match(mpattern)) {
        formStatus = false;
        errors["mobile"] = "Please Enter A valid Mobile Number!";
      }
    }

    this.setState({
      errors: errors,
    });

    return formStatus;
  };

  logoutHandler = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <div className="container">
        <Form
          fields={this.state.fields}
          errors={this.state.errors}
          logout={this.logoutHandler}
          saveData={this.saveDataHandler}
          handleInput={this.inputFieldsHandler}
          msg={this.state.msg}
        />
      </div>
    );
  }
}

export default App;
