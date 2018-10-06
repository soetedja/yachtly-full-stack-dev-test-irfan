import React from 'react';
import UserListItem from './userListItem';
import { Table } from 'reactstrap';

export default function UserList({ users, onEdit, onDestroy }) {
  return (
    <Table>
      <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
      <tbody>
        {users.map((user, userID) => (
          <UserListItem
            key={userID}
            user={user}
            onEdit={onEdit}
            onDestroy={onDestroy} />
        ))}
      </tbody>
    </Table>
  );
}