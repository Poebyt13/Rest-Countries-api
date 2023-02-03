
import Search from "./Search";
import Countrys from "./Countrys";
import { useEffect, useState } from "react";

function Article( { darkMode } ) {
  var valoreRegion = "";
  var valoreName = "";

  const [Region, setRegion] = useState("")
  const [Name, setName] = useState("");

  
  useEffect(() => {

    const choise = document.querySelector(".choise");
    choise.addEventListener("change",e=>{
      valoreRegion = e.target.value;
      setRegion(valoreRegion);
    })

    const input = document.querySelector(".input");
    input.addEventListener("keydown",e=>{

      valoreName = e.target.value;
      setName(valoreName);
    })

  }, [])
  

  return (
    <article className='Article' style={darkMode == 1 ? { backgroundColor: "hsl(207, 26%, 17%)" } : { color: "white" }}>
      <Search darkMode = {darkMode}></Search>
      <Countrys reg = {Region} name = {Name} DarkMode = {darkMode}/>
    </article>
  )
}

export default Article
