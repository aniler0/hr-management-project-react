import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserById } from "api/axios";

import "styles/pages/userdetail.scss";

const UserDetail = () => {
  const params = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    getUserById(setUser, params.id);
  }, []);

  return (
    <div className="userDetail__Container">
      <div className="user__Card">
        <h1>Candidate Information</h1>
        <div className="user">
          {user && (
            <>
              <p>
                <strong>Name: </strong>
                {user.name}
              </p>
              <p>
                <strong>Phone: </strong>
                {user.phone}
              </p>
              <p>
                <strong>Email: </strong>
                {user.email}
              </p>
              <p>
                <strong>Website: </strong>
                {user.website}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
