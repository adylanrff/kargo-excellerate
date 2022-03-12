
import { Link } from 'blitz'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">LMS &nbsp; |</button>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <button className="btn-navbar">Shipments</button>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <button className="btn-navbar">Trucks</button>
                    </Link>
                </li>
                <li>
                    <Link href="/auth">
                        <button className="btn-blue">Drivers</button>
                    </Link>
                </li>
                <li className='push-left'>
                    <Link href="/auth">
                        <button className="btn-blue">Transporter</button>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar