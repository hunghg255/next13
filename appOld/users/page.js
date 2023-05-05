'use client';

import React, { use } from 'react';

const getUsers = async () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((r) =>
    r.json()
  );
};

const Users = () => {
  const users = use(getUsers());
  console.log(users);

  return (
    <>
      <h1>Hello Users</h1>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Users;
