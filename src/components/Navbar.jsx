
import moonOutline from "../assets/moon-outline.svg";

function Navbar() {

  return (
    <nav className="Navbar">
        <div className="Navbar__titolo">
            <h3>Where in the world?</h3>
        </div>
        <div className="Navbar__change-background">
            <button className="tasto">
                <img src={moonOutline} alt="moon"/>
                <p>Dark Mode</p>
            </button>
        </div>

    </nav>
  )
}

export default Navbar