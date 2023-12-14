import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./styles/header.module.css";
import { faBell, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function Header({ ...props }) {
  const navigate = useNavigate();

  return (
    <div className={classes.header}>
      <FontAwesomeIcon
        icon={faCaretLeft}
        color="yellow"
        size="xl"
        onClick={() => navigate("/")}
      />
      <span>{props.title}</span>
      <FontAwesomeIcon
        icon={faBell}
        color="yellow"
        size="xl"
        onClick={() => alert("Notificación")}
      />
    </div>
  );
}
