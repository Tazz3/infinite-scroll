import "./User.css";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import DetailedUser from "../DetailedUser/DetailedUser";
import FriendList from "../FriendList/FriendList";
import LoadingScreen from "../UI/LoadingScreen";

const User = () => {
  const { id } = useParams();
  const [thisStates, setThisStates] = useState("");
  const [thisStateUs, setThisStateUs] = useState([]);
  const [isLoadingUs, setIsLoadingUs] = useState(false);
  const [pageNums, setPageNums] = useState(1);
  const [mainUser, setMainUser] = useState(false);
  const [loadingScreens, setLoadingScreens] = useState(true);

  useEffect(() => {
    const character = async () => {
      setLoadingScreens(true);
      setMainUser(false);
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
      );
      const newDatas = await response.json();

      setThisStates((old) => newDatas);
      console.log(newDatas);
    };
    character();
    setMainUser(true);
  }, [id]);

  useEffect(() => {
    const friends = async () => {
      setLoadingScreens(true);
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
        setLoadingScreens(true);
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
        {mainUser && <DetailedUser itemUs={thisStates} />}

        <h1>Friends:</h1>
        <div className="container">
          {thisStateUs.map((item) => (
            <FriendList item={item} />
          ))}
        </div>
        {loadingScreens && <LoadingScreen />}
      </div>
    </>
  );
};

export default User;
