import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "components";

import { sort, filter } from "utils";

import "./styles.scss";

const Table = ({ users }) => {
  let navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="table__Wrapper">
      <div className="filter__Area">
        <Input
          value={inputValue}
          onChange={setInputValue}
          placeholder="Search Users by Name"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>PHONE NUMBER</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filter(sort(users), inputValue.toLowerCase()).map((user, key) => (
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>
                <p
                  className="view__More"
                  onClick={() => {
                    navigate(`${user.id}`);
                  }}
                >
                  View More
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
