import "./styles.scss";

const Table = () => {
  return (
    <div className="table__Wrapper">
      <div></div>
      <table>
        <tbody>
          <tr className="table__Top">
            <td>NAME</td>
            <td>PHONE NUMBER</td>
          </tr>
          <tr>
            <td>Knocky</td>
            <td>Flor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
