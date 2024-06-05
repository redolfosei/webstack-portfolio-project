import { Link } from "react-router-dom"
import { useState } from "react"
import "./navbar.scss"

function Navbar() {
  const [open, setOpen] = useState(false)

  const user = true
  return (
    <nav>
      <div className="left">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>SunyaniRent</span>
        </Link>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://media.licdn.com/dms/image/D4E03AQFIr0pmhfMyuw/profile-displayphoto-shrink_800_800/0/1683710898586?e=1723075200&v=beta&t=xUyQmRzKiYvcbik29N-VxH_YTocRnz95aW5EOs30EC4" alt="" />
          <span>Redolf Osei</span>
          <Link to="/profile" className="profile">
            <div className="notification">3</div>
            <span>Profile</span>
          </Link>
          </div>
        ) : (
          <>
            <Link href="/">Sign In</Link>
            <Link href="/" className="register">
              Sign Up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu_logo"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Agents</Link>
          <Link href="/">Sign In</Link>
          <Link href="/">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
