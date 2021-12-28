import { Search } from "components/icons";

import "./styles.scss";

const Input = ({ placeholder, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="input__Wrapper">
      <div className="input__Container">
        <Search className="search__Icon" />
        <input
          placeholder={placeholder}
          type="text"
          name="search"
          value={value}
          onChange={handleChange}
          id="search"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Input;
