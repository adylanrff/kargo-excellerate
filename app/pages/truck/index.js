import { useContext } from 'react'
import { RoleContext } from 'app/lib/context';

const Truck = () => {
    const { role } = useContext(RoleContext);
    return (
        <div>{role === 'Transporter' ? 'banaa' : 'aa'}</div>
    )
}

export default Truck