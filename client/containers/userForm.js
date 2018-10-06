import React, { Component } from "react";
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
// import '../styles/App.css';

class userCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userEntity: {
                name: '',
                email: '',
                phoneNumber: '',
                address: ''
            }
        }

        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleFormSubmit (e) {
        e.preventDefault();
        let userData = this.state.userEntity;

        let formBody = [];
        for (let property in userData) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(userData[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://localhost:3000/user/add', {
            method: "POST",
            body: formBody,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(response => {
            response.json().then(data => {
                if (data.errors !== undefined) alert(data.errors[0].message)
                else alert("Data Saved")
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleInput (e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => ({
            userEntity:
            {
                ...prevState.userEntity, [name]: value
            }
        }), () => console.log(this.state.userEntity))
    }

    handleTextArea (e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => ({
            userEntity: {
                ...prevState.userEntity, [name]: value
            }
        }), () => console.log(this.state.userEntity))
    }

    handleClearForm (e) {
        e.preventDefault();
        this.setState({
            userEntity: {
                name: '',
                email: '',
                phoneNumber: '',
                address: ''
            },
        })
    }
    render () {
        return (
            <div class="row">
                <div class="col-lg-12">
                    <h1>Create New User</h1>
                    <hr />
                    <form onSubmit={this.handleFormSubmit}>
                        <Input inputType={'text'}
                            title={'Name'}
                            name={'name'}
                            value={this.state.userEntity.name}
                            placeholder={'Name'}
                            handleChange={this.handleInput}
                        />
                        <Input inputType={'text'}
                            title={'Email'}
                            name={'email'}
                            value={this.state.userEntity.email}
                            placeholder={'Email'}
                            handleChange={this.handleInput}
                        />
                        <Input inputType={'text'}
                            title={'Phone Number'}
                            name={'phoneNumber'}
                            value={this.state.userEntity.phoneNumber}
                            placeholder={'PhoneNumber'}
                            handleChange={this.handleInput}
                        />
                        <TextArea
                            title={'Address'}
                            rows={10}
                            value={this.state.userEntity.address}
                            name={'address'}
                            handleChange={this.handleTextArea}
                            placeholder={'Describe your past experience and skills'} />

                        <Button
                            action={this.handleFormSubmit}
                            type={'primary'}
                            title={'Submit'}
                            style={buttonStyle}
                        />

                        <Button
                            action={this.handleClearForm}
                            type={'secondary'}
                            title={'Clear'}
                            style={buttonStyle}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

const buttonStyle = {
    margin: '10px 10px 10px 10px'
}

export default userCreate;