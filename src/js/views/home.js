import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "../component/card";
import CreateContact from "./createContact";
import "../../styles/home.css";

export const Home = () => {
  // we will need a variable to hold the contacts
  const { store, actions } = useContext(Context);

  // here we will create the agenda/user
  useEffect(() => {
    actions.createAgenda();
    // after we create the agenda we want to get all our contacts
    actions.getContacts();
  }, []); // dependency array determines when the function runs
  // empty depedency array means to run the function 'onLoad' so when the page is done loading

  // we will need to fetch the contacts and display them
  // we will need a way to navigate to create contact page
  return (
    <div className="text-center mt-5">
      {store.contacts?.map((contact, index) => (
        <Card //feeding information to the card to be used as props
          key={index}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          address={contact.address}
          id={contact.id}
        />
      ))}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Contact
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <CreateContact />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
