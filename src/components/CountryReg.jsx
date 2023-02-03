import { useState, useEffect, useContext } from "react";
import {  NavLink} from "react-router-dom";
import { CountryContext } from "../Context/CountryContextProvider";

function CountryReg({ reg, name, DarkMode }) {
  const [Paese, setPaese] = useState([]);
  const [Dark, setDark] = useState(0);

  const { Paesi } = useContext(CountryContext);

  useEffect(() => {
    setDark(DarkMode);

    if (reg.length == 0) {
      setPaese(Paesi);
    } else if (reg.length >= 1) {
      let support = Paesi;
      let nuevoArray = [];
      let x = 0;

      support.map((ogniReg, index) => {
        if (ogniReg.region == reg) {
          nuevoArray[x] = support[index];
          x++;
        }
      });
      setPaese(nuevoArray);
    }

    if (name.length > 1) {
      let support = Paesi;
      let nuevoArray = [];
      let x = 0;
      let boolean = false;

      support.map((ogniReg, index) => {
        boolean = ogniReg.name.common.includes(name);

        if (boolean == true) {
          nuevoArray[x] = support[index];
          x++;
        }
      });

      setPaese(nuevoArray);
    } else if (reg.length == 0 && name.length <= 1) {
      setPaese(Paesi);
    }



  }, [Paesi]);


  return (
    <>
      {Paese.map((ogniPaese, key) => (
        <div className="country" key={key}>
          <NavLink
            to={"/Country/" + ogniPaese.name.common}
            className="country__container"
            style={
              Dark == 1
                ? {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "white",
                    boxShadow: "rgba(44, 44, 44, 0.2) 0px 2px 8px 0px",
                  }
                : {
                    backgroundColor: "white",
                  }
            }
          >
            <div className="country__img">
              <img src={ogniPaese.flags.svg} alt="flag" />
            </div>
            <div className="country__info">
              <h4>{ogniPaese.name.common}</h4>
              <p>
                Popolation:{" "}
                <span
                  className="span"
                  style={Dark == 1 ? { color: "white" } : { color: "black" }}
                >
                  {ogniPaese.population}
                </span>
              </p>
              <p>
                Region:{" "}
                <span
                  className="span"
                  style={Dark == 1 ? { color: "white" } : { color: "black" }}
                >
                  {ogniPaese.region}
                </span>
              </p>
              <p>
                Capital:{" "}
                <span
                  className="span"
                  style={Dark == 1 ? { color: "white" } : { color: "black" }}
                >
                  {ogniPaese.capital[0]}
                </span>
              </p>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
}

export default CountryReg;
