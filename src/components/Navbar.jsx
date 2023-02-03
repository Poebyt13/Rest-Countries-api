

function Navbar() {

  return (
    <nav className="Navbar">
        <div className="Navbar__titolo">
            <h3>Where in the world?</h3>
        </div>
        <div className="Navbar__change-background">
            <button className="tasto">
                <img src="src\assets\moon-outline.svg" alt="moon"/>
                <p>Dark Mode</p>
            </button>
        </div>

    </nav>
  )
}

export default Navbar