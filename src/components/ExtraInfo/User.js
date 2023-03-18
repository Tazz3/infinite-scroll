import "./User.css";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import DetailedUser from "../DetailedUser/DetailedUser";
import FriendList from "../FriendList/FriendList";

const User = () => {
  const { id } = useParams();
  const [thisStates, setThisStates] = useState("");
  const [thisStateUs, setThisStateUs] = useState([]);
  const [isLoadingUs, setIsLoadingUs] = useState(false);
  const [pageNums, setPageNums] = useState(1);

  useEffect(() => {
    const character = async () => {
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
      );
      const newDatas = await response.json();

      setThisStates((old) => newDatas);
    };
    character();
  }, [id]);

  useEffect(() => {
    const friends = async () => {
      setIsLoadingUs(true);
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${pageNums}/20`
      );
      const newDataUs = await response.json();

      setThisStateUs((old) => [...old, ...newDataUs.list]);
    };
    friends();
    setIsLoadingUs(false);
  }, [pageNums]);

  useEffect(() => {
    const handleScrolls = async () => {
      const windowHeights = window.innerHeight;
      const scrollHeights = document.documentElement.scrollHeight;
      const scrollTops =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTops + windowHeights >= scrollHeights && !isLoadingUs) {
        console.log("it should work");
        await setPageNums((prev) => (prev += 1));
      }
    };

    window.addEventListener("scroll", handleScrolls);

    return () => {
      window.removeEventListener("scroll", handleScrolls);
    };
  }, []);

  return (
    <>
      <div className="user-container">
        <DetailedUser itemUs={thisStates} />
        <h1>Friends:</h1>
        <div className="container">
          {thisStateUs.map((item) => (
            <FriendList item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
