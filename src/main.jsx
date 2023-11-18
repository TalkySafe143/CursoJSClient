import React from 'react'
import ReactDOM from 'react-dom/client'
import io from 'socket.io-client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Login from './components/Login.jsx'
import NASA from './components/NASA.jsx'
import TestSocket from './components/TestSocket.jsx'

const socket = io.connect('http://localhost:3000');

const router = createBrowserRouter([
  {
    path: '/',
    element: <App socket={socket}/>
  },
  {
    path: '/example',
    element: (<><div>Hola, soy un elemento</div></>)
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/nasa',
    element: <NASA />
  },
  {
    path: '/socket',
    element: <TestSocket socket={socket}/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
