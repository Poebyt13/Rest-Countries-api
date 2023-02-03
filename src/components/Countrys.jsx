
import CountryReg from "./CountryReg";

function Countrys({ reg , name, DarkMode}) {
  
  return (
    <section className="Countrys">
      <CountryReg reg={reg} name = {name} DarkMode={DarkMode}></CountryReg>
    </section>
  );
}

export default Countrys;
