import "./CharacterList.css";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
  let userName = `/User/${props.item.id}`;
  let keys = Math.random().toString(36);
  console.log(props.item.id);
  return (
    <Link className="characters-list" to={userName}>
      <div key={props.item.id} className="character-card">
        <img
          src={props.item.imageUrl + `?v=${props.item.id}`}
          alt="charImage"
        />
        <h1 className="character-name">
          {props.item.prefix} {props.item.name} {props.item.lastName}
        </h1>

        <h1 className="character-description">{props.item.title}</h1>
      </div>
    </Link>
  );
};

export default CharacterList;
