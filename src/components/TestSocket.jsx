import { useEffect, useState } from "react";

export default function TestSocket({ socket }) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);;

    const handleClick = () => {
        socket.emit('new_message', message);
        setMessages((prevState) => {
            return [
                ...prevState,
                <div style={{ backgroundColor: '#25D366' }}>{message}</div>
            ]
        })
        setMessage("");
    }

    const joinRoom = () => {
        socket.emit('join_room', {name: 'Anonimo'})
    }

    useEffect(() => {
        socket.on('recieved_message', (msg) => {
            console.log("Se ha recibido un mensaje")
            setMessages((prevState) => {
                return [
                    ...prevState,
                    <div style={{ backgroundColor: '#075E54' }}>{msg}</div>
                ]
            })
            console.log(msg)
        })

        return () => socket.off('recieved_message');
    }, [socket])

    return (<>
        <input 
            type="text"
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
        />
        <button onClick={handleClick}>Enviar mensaje</button>
        <button onClick={joinRoom}>Unirse a la sala</button>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {messages}
        </div>
    </>)
}