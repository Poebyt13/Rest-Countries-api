
function Search({darkMode}) {  

  return (
    <div className="Search">
      <div className="Search__text input" style={darkMode == 1 ? {backgroundColor:"hsl(209, 23%, 22%)"} : { }}>
        <div className="Search__text__img input" style={darkMode == 1 ? {backgroundColor:"hsl(209, 23%, 22%)"} : { }}>
          <img src="src\assets\search-outline.svg" alt="search" />
        </div>
        <input type="text" placeholder="Search for a country..." className={darkMode == 1 ? "inputBlack": "input"} />
      </div>
      <div className={darkMode == 1 ? "inputBlack Search__region" : "Search__region input"}>
        <select name="choise" className={darkMode == 1 ? "choise input inputBlack" : "choise input"}>
          <option value="5" disabled selected hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
