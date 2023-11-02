import { Link } from "react-router-dom";
import { Button } from "./Button";
import { BiEdit } from "react-icons/bi"

export const Section = ({ title, children, url }) => {
  return (
    <div className="section">
      <div className="section-title">
        <h4>{title}</h4>
        <Link className={`btn-edit`} to={url}>
          <BiEdit />
        </Link>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div className="section-row">{children}</div>;
};