import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export default function CreateContact() {
  // we need variables to hold the user information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [useInformation, setUserInformation] = useState({name: "", email:"", phone:"", address:""}) another option
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  // we need to make a the post request with the user information
  const handleSubmit = () => {
    actions.createContact(name, email, phone, address); //pass infomation about the user to the function
    // make sure the information in the same order that the function expects to recieve it
    // if this works then I want to redirect it to the home page
    navigate("/");
  };

  return (
    // we need input to enter in the user information
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Name
        </span>
        <input
          onChange={(e) => setName(e.target.value)} //updates the variable as the user types
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Email
        </span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Phone
        </span>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Address
        </span>
        <input
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <button className="btn btn-success" onClick={() => handleSubmit()}>
        Submit
      </button>
    </div>
  );
}
