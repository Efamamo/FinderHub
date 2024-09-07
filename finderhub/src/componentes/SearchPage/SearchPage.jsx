import Search from "../core/Search";
import { useEffect, useRef, useState } from "react";
import "./SearchPage.css";
import socialMediaData from "../../data/socialMediaData";
import { useParams } from "react-router-dom";
import PaginationComponent from "../core/Pagination";
import UserCard from "../core/UserCard";
import api from "../../apis/api";
import axios from "axios";

function SearchPage() {
  const param = useParams();
  const media = socialMediaData.find((sm) => sm.name === param.name);

  const userRef = useRef(<input />);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [noUser, setNoUser] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / 6)-1;
  const [currentUsers, setCurrentUsers] = useState(users.slice(0, 6));
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setCurrentUsers(users.slice(page * 6, (page + 1) * 6));
  };

  async function handleSubmit() {
    if (media.name === "GitHub") {
      const username = userRef.current.value.trim();
      if (username === "") {
        setError(true);
        setUsers([]);
        setNoUser(false);
        return;
      }

      setError(false);
      setLoading(true);

      try {
        const res = await api.get(`/users?q=${username}`);
        const data = res.data;
        if (data.items == 0) {
          setNoUser(true);
        } else {
          setNoUser(false);
        }
        setUsers(data.items || []);
      } catch (error) {
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }
    else if (media.name == "Twitter"){
      const username = userRef.current.value.trim();
      if (username === "") {
        setError(true);
        setUsers([]);
        setNoUser(false);
        return;
      }

      setError(false);
      setLoading(true);

      try {
        
        
        try {
          const res = await axios.get(`http://localhost:3333/twitter/user/${username}`)
          console.log(res)
        } catch (error) {
          console.error(error)
        }
        
        // const data = res.data;
        // if (data.items == 0) {
        //   setNoUser(true);
        // } else {
        //   setNoUser(false);
        // }
        // setUsers(data.items || []);
      } catch (error) {
        setUsers([]);
      } finally {
        setLoading(false);
      }

    }
  }

  useEffect(() => {
    setCurrentUsers(users.slice(0, 6));
  }, [users]);

  return (
    <div className="search-page">
      <img src={media.image} alt="tiktok" />
      <h2>Welcome to {media.name} Search Page</h2>
      <Search setUser={setUsers} refer={userRef} onSearch={handleSubmit} />
      {error && <p style={{ color: "red" }}>Please Enter a username</p>}
      {loading && <p>Loading...</p>}

      {!(media.name === "GitHub") && <h2>Not Implemented</h2>}
      {noUser && <h2>No User</h2>}

      <div className="users">
        {currentUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.login}
            image={user.avatar_url}
            link={user.html_url}
          />
        ))}
      </div>

      {media.name === "GitHub" && (
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
export default SearchPage;
