import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export default function UpdateContact(props) {
  // we need variables to hold the user information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [useInformation, setUserInformation] = useState({name: "", email:"", phone:"", address:""}) another option
  const { store, actions } = useContext(Context);
  let navigate = useNavigate(); //navigate from one page to another

  // so the main difference of create and update is you need to know who you are updating and what their previous information is.
  // if I user only wants to update their name and doesn't touch the other inputs those values will be null and we dont want that
  // so WE NEED THIS USERS INFROMATION.
  // we need to make a the post request with the user information

  useEffect(() => {
    let thisContact = store.contacts.find((contact) => contact.id == props.id); //filtering over the contact to find the one with the matching id
    setName(thisContact.name);
    setEmail(thisContact.email);
    setPhone(thisContact.phone);
    setAddress(thisContact.address);
  }, []);

  const handleSubmit = () => {
    actions.updateContact(name, email, phone, address, props.id);
    // if this works then I want to redirect it to the home page
    actions.getContacts();
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
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
          value={phone}
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <button className="btn btn-success" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
