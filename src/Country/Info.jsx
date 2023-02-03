import { CountryContext } from "../Context/CountryContextProvider";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Info({darkMode}) {
  const { NameCountry } = useContext(CountryContext);
  const [Paesi, setPaesi] = useState([]);

  const { countryId } = useParams();

  const [CountryTarget, setCountryTarget] = useState([]);
  const [img, setImg] = useState("");
  const [NomePaese, setNomePaese] = useState("");
  const [NativeName, setNativeName] = useState("");
  const [Population, setPopulation] = useState("");
  const [Region, setRegion] = useState("");
  const [SubRegion, setSubRegion] = useState("");
  const [Capital, setCapital] = useState("");
  const [TopLevelDomain, setTopLevelDomain] = useState("");
  const [Currencies, setCurrencies] = useState("");
  const [Languages, setLanguages] = useState("");
  const [Border, setBorder] = useState([]);

  useEffect(() => {
    
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders"
      )
      .then((e) => {
        setPaesi(e.data);
      });

    Paesi.map((PaeseSingolo, index) => {
      if (PaeseSingolo.name.common == NameCountry || PaeseSingolo.name.common == countryId) {
        setCountryTarget((CountryTarget[0] = PaeseSingolo));

        setImg(CountryTarget[0].flags.svg);
        setNomePaese(CountryTarget[0].name.common);
        setNativeName(CountryTarget[0].name.official);
        setPopulation(CountryTarget[0].population);
        setRegion(CountryTarget[0].region);
        setSubRegion(CountryTarget[0].subregion);
        setCapital(CountryTarget[0].capital[0]);
        setTopLevelDomain(CountryTarget[0].tld[0]);

        let arrayCurrencies = CountryTarget[0].currencies;
        const CurrenciesValues = Object.keys(arrayCurrencies);
        let stringCurrencies = CurrenciesValues.join(", ");
        setCurrencies(stringCurrencies); //DEVO VEDERE

        let arrayLanguages = CountryTarget[0].languages;
        const LanguagesValues = Object.values(arrayLanguages);
        let stringLanguages = LanguagesValues.join(", ");
        setLanguages(stringLanguages);

        setBorder(CountryTarget[0].borders);
      }
    });

  });

  return (
    <div className={darkMode == 1 ? "nuovoSitoInfo nuovoSitoInfoBlack" : "nuovoSitoInfo"}>
      <section className="nuovoSitoInfo__flag">
        <div className="flag__container">
          <img src={img} alt="flag" />
        </div>
      </section>
      <aside className="nuovoSitoInfo__aside">
        <h2>{NomePaese}</h2>
        <div className="nuovoSitoInfo__aside__info">
          <div>
            <p>
              Native Name: <span>{NativeName}</span>
            </p>
            <p>
              Population <span>{Population}</span>
            </p>
            <p>
              Region <span>{Region}</span>
            </p>
            <p>
              Sub Region: <span>{SubRegion}</span>
            </p>
            <p>
              Capital: <span>{Capital}</span>
            </p>
          </div>
          <div>
            <p>
              Top Level Domain: <span>{TopLevelDomain}</span>
            </p>
            <p>
              Currencies: <span>{Currencies}</span>
            </p>
            <p>
              Languages: <span>{Languages}</span>
            </p>
          </div>
        </div>
        <footer className="nuovoSitoInfo__footer">
          <p>Border Countries:</p>
          {Border.map((ogniBordo, key) => {
            return <span key={key}>{ogniBordo}</span>;
          })}
        </footer>
      </aside>
    </div>
  );
}

export default Info;
