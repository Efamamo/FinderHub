import { createBrowserRouter } from "react-router-dom";
import Home from "./componentes/Home/Home";
import SocialMedias from "./componentes/SocialMedia/SocialMedias";
import About from "./componentes/About/About";
import SearchPage from "./componentes/SearchPage/SearchPage";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";

function Page(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

const routes = [
  {
    path: "/",
    element: (
      <Page>
        <Home />
      </Page>
    ),
  },
  {
    path: "/about",
    element: (
      <Page>
        <About />
      </Page>
    ),
  },
  {
    path: "/socials",
    element: (
      <Page>
        <SocialMedias />
      </Page>
    ),
  },
  {
    path: "/socials/:name",
    element: (
      <Page>
        <SearchPage />
      </Page>
    ),
  },
];

const router = createBrowserRouter(routes);

export default router;
