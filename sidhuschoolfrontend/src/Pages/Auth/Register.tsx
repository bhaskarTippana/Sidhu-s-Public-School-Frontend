import React from 'react'
import { useSelector } from 'react-redux'

const Register = () => {
    const role = useSelector((state: { user: { role: string } }) => state.user.role);
    return (
        <div>
            {role && (role[0].toUpperCase() + role.slice(1))} register
        </div>
    )
}

export default Register
