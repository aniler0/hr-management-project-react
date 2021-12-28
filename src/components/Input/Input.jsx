import { Search } from "components/icons";
import "./styles.scss";
const Input = ({ placeholder }) => {
  return (
    <div className="input__Wrapper">
      <div className="input__Container">
        <Search className="search__Icon" />
        <input
          placeholder={placeholder}
          type="text"
          name="search"
          id="search"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Input;
