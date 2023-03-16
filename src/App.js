import "./App.css";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/UI/LoadingScreen";

function App() {
  const [thisState, setThisState] = useState([]);
  const [curPage, setCurPage] = useState(true);
  const [perPage, setPerPage] = useState(20);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const characters = async () => {
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNum}/${perPage}`
      );
      const newData = await response.json();

      setThisState((old) => [...old, ...newData.list]);

      console.log(thisState, "this is the state");
      setIsLoading(false);
    };
    characters();
  }, [pageNum]);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop + windowHeight >= scrollHeight) {
        setPageNum((prev) => (prev += 1));
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        {curPage &&
          thisState.map((item) => (
            <div
              key={item.id}
              style={{
                height: "auto",
                width: "25%",
                border: "2px solid black",
              }}
            >
              <h1>{item.name}</h1>
              <h1>{item.lastName}</h1>
              <h1>{item.prefix}</h1>
              <h1>{item.title}</h1>
              <img
                src={item.imageUrl + `?v=${item.id}`}
                style={{ height: "200px", width: "200px" }}
                alt="charImage"
              />
            </div>
          ))}

        {isLoading && <LoadingScreen />}
      </div>
    </>
  );
}

export default App;
