import Search from "../core/Search";
import { useRef, useState } from "react";
import "./SearchPage.css";
import socialMediaData from "../../data/socialMediaData";
import { useParams } from "react-router-dom";

function SearchPage() {
  const param = useParams();
  const media = socialMediaData.find((sm) => sm.name === param.name);

  const userRef = useRef(<input/>);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [noUser, setNoUser] = useState(false)

  async function handleSubmit() {
    const username = userRef.current.value.trim();
    if (username === "") {
      setError(true);
      setUsers([])
      setNoUser(false)
      return;
    }

    setError(false);
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}`
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json(); 
      if(data.items == 0){
        setNoUser(true)
      }
      else{
        setNoUser(false)
      }
      setUsers(data.items || []); 

    } 
    catch (error) {
      setUsers([]); 

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="search-page">
      <img src={media.image} alt="tiktok" />
      <h2>Welcome to {media.name} Search Page</h2>
      <Search setUser={setUsers} refer={userRef} onSearch={handleSubmit}/>
      {error && <p style={{color:"red"}}>Please Enter a username</p>}
      {loading && <p>Loading...</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <img src={user.avatar_url} alt={user.login} width="50" />
              {user.login}
            </a>
          </li>
        ))}
      </ul>
      {noUser && <h3>No User</h3>}

    </div>
  );
}
export default SearchPage

  
