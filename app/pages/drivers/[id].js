import React from 'react'
import { useRouter } from 'next/router'

const DriverDetail = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>{id}</div>
    )
}

export default DriverDetail