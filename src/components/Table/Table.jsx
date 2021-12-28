import { Input } from "components";
import { Navigate, useNavigate } from "react-router-dom";
import { sort } from "utils/sort";
import "./styles.scss";

const Table = ({ users }) => {
  let navigate = useNavigate();
  return (
    <div className="table__Wrapper">
      <div className="filter__Area">
        <Input placeholder="Search Users by Name" />
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
          {sort(users).map((user, key) => (
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
