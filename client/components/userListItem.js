import React, { Component } from 'react';

export default class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      user: props.user,
    };
  }

  toggleEditMode() {
    this.setState(() => ({ isEditing: !this.state.isEditing }));
  }

  updateField(field, value) {
    var user = this.state.user
    user[field] = value;
    this.setState(() => ({ user }));
  }

  async submitChanges(user) {
    await this.props.onEdit(user);
    this.toggleEditMode();
  }

  cancelEdit() {
    this.setState(() => ({
      isEditing: false,
      user: this.props.user,
    }));
  }

  renderControls() {
    if (this.state.isEditing) {
      return (
        <td>
          <button class="btn btn-sm btn-primary" onClick={() => this.submitChanges(this.state.user)}>Submit</button>
          <button class="btn btn-sm btn-default" onClick={() => this.cancelEdit()}>Cancel</button>
        </td>
      );
    }

    return (
      <td>
        <button class="btn btn-sm btn-primary" onClick={() => this.toggleEditMode()}>Edit</button>
        <button class="btn btn-sm btn-danger" onClick={() => this.props.onDestroy(this.state.user)}>Delete</button>
      </td>
    );
  }

  renderUserField(field) {
    const value = this.state.user[field];

    if (this.state.isEditing) {
      const onChange = event => this.updateField(field, event.target.value);
      return <input class="form-control" value={value} onChange={onChange} />;
    }

    return <span>{value}</span>;
  }

  render() {
    return (
      <tr>
        {/* <td>{this.renderUserField('userID')}</td> */}
        <td>{this.renderUserField('name')}</td>
        <td>{this.renderUserField('email')}</td>
        <td>{this.renderUserField('phoneNumber')}</td>
        <td>{this.renderUserField('address')}</td>
        {this.renderControls()}
      </tr>
    );
  }
}