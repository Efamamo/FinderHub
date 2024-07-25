import socialMedia from "../core/SocialMedia";
import SocialMediaCard from "../core/SocialMediaCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./SocialMedias.css";

function SocialMedias() {
  return (
    <>
    <Header/>
    <div className="social-medias">
      <div className="social-media-container">
        <h2>Choose The Social Media</h2>
        {socialMedia.map((sc, i) => (
          <SocialMediaCard
            name={sc.name}
            description={sc.desc}
            image={sc.image}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SocialMedias;
