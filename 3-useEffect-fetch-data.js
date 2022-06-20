// In this small project, we consume data from a Rest Api that contains Github account information.
// The useEffect cannot be an async function , so we created a getUsers function, to do the fecth of 
// the API, this being an async function, and that will be the first parameter of the useEffect. As a
// second parameter we pass an empty array, so the page doesn't render infinitely. After that we create 
// the html structure, making the API map, and passing the variables of this API inside the HTML elements,
// to generate the page dynamically.

import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
