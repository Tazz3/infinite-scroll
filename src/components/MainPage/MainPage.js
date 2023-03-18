import "./MainPage.css";

import React, { useState, useEffect } from "react";
import CharacterList from "../CharacterList/CharacterList";

const MainPage = () => {
  const [thisState, setThisState] = useState([]);
  const [curPage, setCurPage] = useState(true);
  const [perPage, setPerPage] = useState(20);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const characters = async () => {
      setIsLoading(true);
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNum}/${perPage}`
      );
      const newData = await response.json();

      setThisState((old) => [...old, ...newData.list]);

      console.log(thisState, "this is the state");
    };
    characters();
    setIsLoading(false);
  }, [pageNum]);

  useEffect(() => {
    const handleScroll = async () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop + windowHeight >= scrollHeight && !isLoading) {
        await setPageNum((prev) => (prev += 1));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        {curPage && thisState.map((item) => <CharacterList item={item} />)}
      </div>
    </>
  );
};

export default MainPage;
