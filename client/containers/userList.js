import React, { Component } from 'react';
import UserList from '../components/userGrid';
// import Users from './Users';
// import { List } from 'immutable';

// This stateful component maps users collection to its state and provides
// event hooks that are calling methods from Users API. Once users collection
// is updated, the component updates its state and shows updated list.
// On the UI, React will update only necessary things.
export default class UserListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onEdit = this.updateUser.bind(this);
        this.onDestroy = this.destroyUser.bind(this);
    }

    async updateUser (userData) {
        // let userData = user;

        let formBody = [];
        for (let property in userData) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(userData[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://localhost:3000/user/' + userData.userID, {
            method: "PUT",
            body: formBody,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(response => {
            response.json().then(data => {
                if (data.errors !== undefined) alert(data.errors[0].message)
                else console.log("Successful saved data");
            })
        })
    }

    async destroyUser (userData) {
        fetch('http://localhost:3000/user/' + userData.userID, {
            method: "DELETE"
        }).then(response => {
            response.json().then(data => {
                if (data.errors !== undefined) alert(data.errors[0].message)
                else this.loadUser()
            })
        })
    }

    async componentDidMount () {
        this.loadUser()
    }

    async loadUser () {
        const response = await fetch(`http://localhost:3000/user`);
        const json = await response.json();
        this.setState({ users: json });
    }
    render () {
        const users = this.state.users;

        if (!users) {
            return <p>Loading...</p>;
        }

        return (
            <div class="row">
                <div class="col-lg-12">
                    <h1>User List</h1>
                    {/* <hr /> */}
                    <UserList
                        users={users}
                        onEdit={this.onEdit}
                        onDestroy={this.onDestroy} />
                </div>
            </div>
        );
    }
}