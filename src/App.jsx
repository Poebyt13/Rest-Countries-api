import Navbar from "./components/Navbar";
import Article from "./components/Article";
import { useEffect, useState} from "react";
import NewCountry from "./Country/NewCountry";
import { Route, Routes} from "react-router-dom";

var bianco;

function App() {
  const [DarkMode, setDarkMode] = useState(0);

  useEffect(() => {

    const tasto = document.querySelector(".tasto");
    const article = document.querySelector(".Article");
    const navBar = document.querySelector(".Navbar");
    const paises = document.getElementsByClassName("country__container");
    const span = document.getElementsByClassName("span");
    const input = document.getElementsByClassName("input");
    const body = document.querySelector(".body");

    bianco = false;


    tasto.addEventListener("click", () => {
      if (bianco == false) {

        body.classList.add("bodyBlack");
        article.classList.add("ArticleBlack");
        navBar.classList.add("NavbarBlack");
        tasto.classList.add("tastoBlack");

        for (let i = 0; i < paises.length; i++) {
          paises[i].classList.add("paisesBlack");
        }

        for (let i = 0; i < span.length; i++) {
          span[i].classList.add("spanBlack");
        }

        for (let i = 0; i < input.length; i++) {
          input[i].classList.add("inputBlack");
        }

        bianco = true;
        setDarkMode(1);
      } else if (bianco == true) {

        body.classList.remove("bodyBlack");
        article.classList.remove("ArticleBlack");
        navBar.classList.remove("NavbarBlack");
        tasto.classList.remove("tastoBlack");

        for (let i = 0; i < paises.length; i++) {
          paises[i].classList.remove("paisesBlack");
        }

        for (let i = 0; i < span.length; i++) {
          span[i].classList.remove("spanBlack");
        }

        for (let i = 0; i < input.length; i++) {
          input[i].classList.remove("inputBlack");
        }

        bianco = false;
        setDarkMode(0);
      }
    });

  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Article darkMode={DarkMode} />}></Route>
        <Route path="/Country" element={<NewCountry darkMode={DarkMode}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
