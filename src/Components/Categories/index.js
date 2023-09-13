import "./index.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <ul className="propertites-un-ordered-list-contianer">
      <li className="propertites-list-item">
        <Link className="link-css" to="/properties">
          Property's
        </Link>
      </li>

      <li className="propertites-list-item">
        <Link className="link-css" to="/automobiles">
          Automobiles
        </Link>
      </li>

      <li className="propertites-list-item">
        <Link className="link-css" to="/electronics">
          Electronics
        </Link>
      </li>

      <li className="propertites-list-item">
        <Link className="link-css" to="/jobs">
          Jobs
        </Link>
      </li>

      <li className="propertites-list-item">
        <Link className="link-css" to="/freelancing">
          FreeLancing
        </Link>
      </li>
    </ul>
  );
};

export default Categories;
