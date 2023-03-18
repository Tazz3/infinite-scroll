import "./FriendList.css";
import { Link } from "react-router-dom";

const FriendList = (props) => {
  let userName = `/User/${props.item.id}`;
  let keys = props.item.id + "fr";

  return (
    <Link className="characters-lists" to={userName}>
      <div key={keys} className="character-cards">
        <img
          src={props.item.imageUrl + `?v=${props.item.id}`}
          alt="charImage"
        />
        <h1 className="character-names">
          {props.item.prefix} {props.item.name} {props.item.lastName}
        </h1>

        <h1 className="character-descriptions">{props.item.title}</h1>
      </div>
    </Link>
  );
};

export default FriendList;
