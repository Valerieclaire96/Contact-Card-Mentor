import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  // we will need a variable to hold the contacts
  const [contacts, setContacts] = useState([]);
  const { store, actions } = useContext(Context);

  // here we will create the agenda/user
  useEffect(() => {
    actions.createAgenda();
  }, []); // dependency array determines when the function runs
  // empty depedency array means to run the function 'onLoad' so when the page is done loading
  // we will need to fetch the contacts and display them
  // we will need a way to navigate to create contact page
  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!</h1>
      <p>
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button, bootstrap is working
      </a>
    </div>
  );
};
