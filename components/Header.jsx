import logo from "../images/chef_logo.png"
export default function Header() {
    return (
        <header>
            <img className="logo-image" src={logo} alt="Chef-Logo" />
            <span>Chef Claude</span>
        </header>
    )
}