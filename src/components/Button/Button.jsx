import { Arrow } from "components/icons";

import "./styles.scss";

const Button = ({ children }) => {
  return (
    <>
      <button className="button__Wrapper">
        <Arrow />
        {children}
      </button>
    </>
  );
};

export default Button;
