import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import { URL_LOGIN } from '../endpoints';

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const isMounted = true;

    const getUser = async () => {
      try {
        const options = {
          body: '{"userName":"pato@hotmail.com","password":"Pato123."}',
        };
        helpHttp()
          .post(URL_LOGIN, options)
          .then((res) => console.log(res));
      } catch (error) {
        console.error(error);
      }
    };
  }, []);
  return (
    <article>
      <h2>Users list</h2>
      {users?.length ? (
        <ul>
          {users.map((user, index) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>Sin usuario a mostrar</p>
      )}
    </article>
  );
};

export default Users;
