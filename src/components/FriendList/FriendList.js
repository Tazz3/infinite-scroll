import "./FriendList.css";
import { Link } from "react-router-dom";

const FriendList = (props) => {
  let userName = `/User/${props.item.id}`;
  let keys = Math.random().toString(36);
  return (
    <Link className="characters-list" to={userName}>
      <div key={keys} className="character-card">
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

export default FriendList;
