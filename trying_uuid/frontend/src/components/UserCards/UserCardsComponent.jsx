import { useState, useEffect } from "react";

import { API_URL } from "../../constants/index";

import SingleUserCardComponent from "../SingleUserCard/SingleUserCardComponent";

const UserCardsComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsers(data);
  };
  return (
    <>
      <section>
        {users.map((user) => {
          return <SingleUserCardComponent key={user.pk} {...user} />;
        })}
      </section>
    </>
  );
};

export default UserCardsComponent;
