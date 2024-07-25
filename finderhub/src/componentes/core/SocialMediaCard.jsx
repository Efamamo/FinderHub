import { Link } from "react-router-dom";
import './SocialMedia.css'



function SocialMediaCard({ name, description, image }) {
  return (
    <div className="exam-card">
      <img className="exam-icon" src={image} />
      <div className="desc">
        <h2>{name}</h2>
        <p>{description}</p>
        
      </div>
    </div>
  );
}

export default SocialMediaCard;