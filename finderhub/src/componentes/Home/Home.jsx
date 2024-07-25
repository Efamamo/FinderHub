import socialMedia from "../core/SocialMedia";
import SocialMediaCard from "../core/SocialMediaCard";
import Header from "../Header/Header";
import './Home.css'
import people from '../../images/search.png'
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div>
        <p>
          Welcome to FinderHub - your go-to platform for finding people across
          the top social media networks. Whether reconnecting with old friends,
          networking with professionals, or exploring new connections, FinderHu
          makes it easy to search for users on Facebook, Twitter, Instagram,
          LinkedIn, Snapchat, TikTok, Reddit, Pinterest,Youtube and GitHub.
          Start your search today and discover the convenience of FinderHub!
        </p>
        <img src={people}/>



        {/* <div className="social-media-container">
            {socialMedia.map((sc,i)=>(
                <SocialMediaCard name={sc.name} description={sc.desc} image={sc.image}/>
            ))}
        </div> */}
        </div>
        <button className="start-button">Get Started</button>

      </div>
    </>
  );
}

export default Home;
