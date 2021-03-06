import React, { useEffect, useState } from "react";

import { Table } from "components";

import { getUsers } from "api/axios";

import "styles/pages/candidates.scss";

const Candidates = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <div className="candidates__Container">
      {users && <Table users={users} />}
    </div>
  );
};

export default Candidates;
