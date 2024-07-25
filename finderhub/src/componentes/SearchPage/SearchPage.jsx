import Search from "../core/Search";
import tiktok from '../../images/tiktok.png'
import './SearchPage.css'
import socialMediaData from "../../data/socialMediaData";
import { useParams } from "react-router-dom";

function SearchPage() {
    const param = useParams()
    const media = socialMediaData.find(sm => sm.name === param.name)
  return (
      <div className="search-page">
        <img src={media.image} alt="tiktok"/>
        <h2>Welcome to {media.name} Search Page</h2>
        <Search />
      </div>
  );
}

export default SearchPage;
