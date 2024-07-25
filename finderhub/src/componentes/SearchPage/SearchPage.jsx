import Search from "../core/Search";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import tiktok from '../../images/tiktok.png'
import './SearchPage.css'

function SearchPage() {
  return (
    <>
      <Header />
      <div className="search-page">
        <img src={tiktok} alt="tiktok"/>
        <h2>Welcome to X Search Page</h2>
        <Search />
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
