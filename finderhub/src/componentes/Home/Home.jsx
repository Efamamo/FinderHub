import "./Home.css";
import people from "../../images/search.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    
      <div className="home">
        <div>
          <p>
            Welcome to FinderHub - your go-to platform for finding people across
            the top social media networks. Whether reconnecting with old
            friends, networking with professionals, or exploring new
            connections, FinderHub makes it easy to search for users on Facebook,
            Twitter, Instagram, LinkedIn, Snapchat, TikTok, Reddit,
            Pinterest,Youtube and GitHub. Start your search today and discover
            the convenience of FinderHub!
          </p>
          <img src={people} />
        </div>
        <Link to="/socials"><button className="start-button">Get Started</button></Link>
      </div>
  );
}

export default Home;
