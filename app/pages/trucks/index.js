import { useContext } from 'react'
import { RoleContext } from 'app/lib/context';

const Truck = () => {
    const { role } = useContext(RoleContext);
    return (
        <div>{role}</div>
    )
}

export default Truck