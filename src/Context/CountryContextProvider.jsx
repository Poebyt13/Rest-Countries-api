import { createContext } from "react";
import { useState, useEffect } from "react";
import App from "../App";

export const CountryContext = createContext();

export function CountryContextProvider(props) {
  const [Paesi, setPaesi] = useState([]);
  const [NameCountry, setNameCountry] = useState("Italy");

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders"
      )
      .then((e) => {
        setPaesi(e.data);
      });

    const container_country =
      document.getElementsByClassName("country__container");

    for (let i = 0; i < container_country.length; i++) {
      container_country[i].addEventListener("click", (e) => {
        let info = container_country[i].childNodes;
        let info_children = info[1].childNodes;
        let h4Text = info_children[0].innerHTML;
        setNameCountry(h4Text);
      });
    }
  }, [Paesi, NameCountry]);

  return (
    <CountryContext.Provider value={{
      Paesi,
      NameCountry,
    }}>
      {props.childen}
      <App></App>
    </CountryContext.Provider>
  );
}
