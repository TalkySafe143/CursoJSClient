import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginHandle = () => {
        fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(`${email}:${password}`)}`
            }
        }).then(res => res.json())
            .then(json => {
                localStorage.setItem('jwt', json.token);
                navigate('/users')
            })
            .catch(e => console.log(e))
    }

    return (<>
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <input type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button
                onClick={loginHandle}
            >Ingresar</button>
        </div>
    </>)
}