import Info from "./Info";
import TornaIndietro from "./TornaIndietro";


function NewCountry({darkMode}) {

  return (
    <article className="nuovoSito Article" style={darkMode == 1 ? { backgroundColor: "hsl(207, 26%, 17%)" } : { }}>
      <TornaIndietro darkMode = {darkMode}></TornaIndietro>
      <Info darkMode = {darkMode}></Info>
    </article>
  );
}

export default NewCountry;
