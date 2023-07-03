import { useState } from "react";
import "./SearchPage.css";
import UserCard from "../component/UserCard";
export default function SearchPage() {
  const [userName, setUserName] = useState("");
  const [apiData, setApiData] = useState([]);
  console.log(apiData);

  const url = "https://api.github.com/search/users";

  function searchHandle() {
    fetch(`${url}?q=${userName}`)
      .then((response) => response.json())
      .then((data) => setApiData(data.items));
  }

  return (
    <div className="github-search-page">
      <div className="search-btn-wrap">
        <h2>Github User Search</h2>
        <div className="search-btn">
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
          <button onClick={searchHandle}>Search</button>
        </div>
      </div>
      <div className="card-wrapper">
        {apiData &&
          apiData.map((item) => {
            return <UserCard item={item} />;
          })}
      </div>
    </div>
  );
}
