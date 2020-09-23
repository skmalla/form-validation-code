import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-10'>
          <h4 className='text-danger bold textHover'>
            Welcome , {sessionStorage.getItem("username")}
          </h4>
          <hr />
        </div>
        <div className='col-md-2'>
          <button className='btn btn-primary' onClick={props.logout}>
            LOGOUT
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <div className='card mt-3'>
            <div className='card-header text-center text-dark bg-secondary'>
              <h5>
                <i
                  class='fa fa-address-book text-success mr-2'
                  aria-hidden='true'
                ></i>
                Enter Employee Data
              </h5>
              <b className='text-success'>{props.msg}</b>
            </div>
            <div className='card-body bg-light'>
              <b>All "*" fields are compulsory!</b>
              <hr />
              <div className='form-group'>
                <i
                  class='fa fa-user-circle text-primary'
                  aria-hidden='true'
                ></i>
                <label htmlFor='username' className='ml-2'>
                  Username: <span>*</span>
                </label>
                <input
                  type='text'
                  name='fname'
                  value={props.fields.fname}
                  onChange={props.handleInput}
                  className='form-control'
                />
                <p className='text-danger bold'>{props.errors.fname}</p>
              </div>
              <div className='form-group'>
                <i class='fa fa-envelope text-primary' aria-hidden='true'></i>
                <label htmlFor='email' className='ml-2'>
                  Email: <span>*</span>
                </label>
                <input
                  type='email'
                  name='email'
                  value={props.fields.email}
                  onChange={props.handleInput}
                  className='form-control'
                />
                <p className='text-danger bold'>{props.errors.email}</p>
              </div>
              <div className='form-group'>
                <i
                  class='fa fa-phone-square text-primary'
                  aria-hidden='true'
                ></i>
                <label htmlFor='mobile' className='ml-2'>
                  Mobile: <span>*</span>
                </label>
                <input
                  type='number'
                  name='mobile'
                  value={props.fields.mobile}
                  onChange={props.handleInput}
                  className='form-control'
                />
                <p className='text-danger bold'>{props.errors.mobile}</p>
              </div>
              <div className='form-group'>
                <i class='fa fa-comment text-primary' aria-hidden='true'></i>
                <label htmlFor='message' className='ml-2'>
                  Comments:
                </label>
                <textarea
                  name='message'
                  value={props.fields.message}
                  onChange={props.handleInput}
                  className='form-control'
                  cols='30'
                  rows='3'
                ></textarea>
              </div>
            </div>
            <div className='card-footer text-center bg-secondary'>
              <button
                onClick={props.saveData}
                className='text-center text-white btn btn-primary'
              >
                SEND ENQUIRY
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  );
};

export default Form;
