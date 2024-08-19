const getState = ({ getStore, getActions, setStore }) => {
  return {
    // variables
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contacts: [],
    },
    actions: {
      // functions
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      // getAgenda: () => {}, come back to

      createAgenda: async () => {
        let response = await fetch(
          "http://playground.4geeks.com/contact/agendas/vdubach",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        let data = await response.json();
        console.log(data); // we don't have a need to store this data so we can just console.log it
      },
      createContact: async (name, email, phone, address) => {
        let response = await fetch(
          "https://playground.4geeks.com/contact/agendas/vdubach/contacts",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: name,
              phone: phone,
              email: email,
              address: address,
            }),
          }
        );
        let data = await response.json();
        window.location.reload();
        console.log(data);
      },
      getContacts: async () => {
        let response = await fetch(
          "https://playground.4geeks.com/contact/agendas/vdubach/contacts"
        );
        let data = await response.json();
        setStore({ contacts: data.contacts });
      },
      updateContact: async (name, email, phone, address, id) => {
        let response = await fetch(
          "https://playground.4geeks.com/contact/agendas/vdubach/contacts/" +
            id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: name,
              phone: phone,
              email: email,
              address: address,
            }),
          }
        );
        let data = await response.json();
        window.location.reload();
        console.log(data);
      },
      delectContact: async (id) => {
        let response = await fetch(
          "https://playground.4geeks.com/contact/agendas/vdubach/contacts/" +
            id,
          {
            method: "DELETE",
          }
        );
        let data = response.json();
        console.log(data);
        window.location.reload();
      },
    },
  };
};

export default getState;
