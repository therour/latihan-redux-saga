import React from 'react'
import { useSelector } from 'react-redux'

function Card() {
    const AuthState = useSelector(state => state.Auth);

    return (
        <div style={{ padding: 50, boxShadow: '8px 8px 20px rgba(0,0,0,0.125)' }}>
            <pre>
                {JSON.stringify(AuthState, null, 2)}
            </pre>
        </div>
    )
}

export default Card
