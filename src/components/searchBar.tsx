import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classes from "./styles/searchBar.module.css";

// TODO: refactor
export function SearchBar() {
  let handleSearch = (value: string) => {
    var lowerCase = value.toLowerCase();
    lowerCase;
  };

  return (
    <div className={classes.search_container}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        placeholder="Buscar.."
        className={classes.search_bar}
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
    </div>
  );
}
