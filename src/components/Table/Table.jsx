import { Input } from "components";
import "./styles.scss";

const Table = () => {
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
          <tr>
            <td>Knocky sdfsda</td>
            <td>0556486468</td>
            <td>
              <p
                className="view__More"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                View More
              </p>
            </td>
          </tr>
          <tr>
            <td>Knocky sdfsda</td>
            <td>0556486468</td>
            <td>
              <p
                className="view__More"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                View More
              </p>
            </td>
          </tr>
          <tr>
            <td>Knocky sdfsda</td>
            <td>0556486468</td>
            <td>
              <p
                className="view__More"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                View More
              </p>
            </td>
          </tr>
          <tr>
            <td>Knocky sdfsda</td>
            <td>0556486468</td>
            <td>
              <p
                className="view__More"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                View More
              </p>
            </td>
          </tr>
          <tr>
            <td>Knocky sdfsda</td>
            <td>0556486468</td>
            <td>
              <p
                className="view__More"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                View More
              </p>
            </td>
          </tr>
          <tr>
            <td>Knocky sdfsda</td>
            <td>0556486468</td>
            <td>
              <p
                className="view__More"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                View More
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
