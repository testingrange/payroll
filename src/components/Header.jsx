import logo from '../assets/payroll-icon.jpg'

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Coins in a hand" />
            <h1>Web payroll app</h1>
        </header>
    )
}