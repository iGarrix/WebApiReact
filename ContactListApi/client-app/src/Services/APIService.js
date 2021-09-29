class ContactListService {
    //URL = "https://react-68461-default-rtdb.firebaseio.com/list.json";
    ROOT_URL = "/api/ContactList";
    GET_LIST = "/GetContactList";
    ADD_CONTACT = "/AddNewContact";
    REMOVE_CONTACT = "/RemoveContact";
    UPDATE_CONTACT = "/UpdateContact";
    UPDATE_STATUS = "/UpdateContactStatus"

    async fetchContactList() {
        const List = await fetch(this.ROOT_URL + this.GET_LIST)
            .then(responce => {
                return responce.json();
            }).then(data => {
                if (data == null) {
                    return {
                        List: []
                    }

                } else {
                    return {
                        List: data
                    }
                }
            })
            .catch(err => console.log(err))
        return List;
    }

    updateDatabse = (List) => {
        fetch(this.URL,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(List)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    AddContactDatabase = (Contact) => {
        const returncontact = fetch(this.ROOT_URL + this.ADD_CONTACT,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Contact)
            })
            .then(res => {return res})
            .catch(res => {return res})
            return returncontact;
    }

    RemoveContactDatabase = (Id) => {
        const returndata = fetch(this.ROOT_URL + this.REMOVE_CONTACT,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(Id)
            })
            .then(res => { return res; })
            .catch(res => { return res; })
            return returndata;
    }

    UpdateContactDatabase = (Contact) => {
              
       const NewContact = fetch(this.ROOT_URL + this.UPDATE_CONTACT,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(Contact)
            })
            .then(res => { return res.json() })
            .then(data => { return data; })
            .catch(res => { return res })
    
        return NewContact;
    }

    UpdateContactStatusDatabase = (Id, Status) => {
        const prop = {
            Id,
            Status
        }      
        const UpdatedContact = fetch(this.ROOT_URL + this.UPDATE_STATUS,
             {
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 method: "PUT",
                 body: JSON.stringify(prop)
             })
             .then(res => { return res.json() })
             .then(data => { return data; })
             .catch(res => { return res })
     
         return UpdatedContact;
     }
}

const apiService = new ContactListService();
export default apiService;