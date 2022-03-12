
import { Link } from 'blitz'
import { useContext } from 'react'
import { RoleContext } from '../lib/context';

const Navbar = () => {
    const { role } = useContext(RoleContext)
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
                {role === 'Transporter' && (
                    <>
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
                    </>
                )}

                <li className='push-left'>
                    <Link href="/auth">
                        <button className="btn-blue">{role}</button>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar