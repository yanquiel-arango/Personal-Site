import   {useState} from 'react'


const NavBar = () => {
    const [active, setActive] = useState(false)
   
    const handleClicked = () => {
      setActive(!active)
      console.log(active)
    }
    
  return (
    <>
      <nav className="navbar has-shadow is-primary" >
        <div className="container ">
            <div className="navbar-brand">
              <a className="navbar-item" >
              <p className="subtitle is-3  has-text-white is-family-code" > Yanquieldev👨🏾‍💻</p>
              </a>

              <a role="button"
                className={`navbar-burger  ${active ? 'is-active' : ''}` }
                aria-label="menu"
                aria-expanded="false"
                onClick={handleClicked}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div  className={`navbar-menu  ${active ? 'is-active' : ''}` }>
              <div className="navbar-end is-uppercase is-family-code ">
                <a className="navbar-item " href='/'> 🏠 Home</a>
                <a className="navbar-item" href='/portfolio'>💼 Portfolio</a>
                <a className="navbar-item" href='/contact'>📧 Contact</a>
              </div>
            </div>
          </div>
      </nav>
    </>
  )
}

export default NavBar