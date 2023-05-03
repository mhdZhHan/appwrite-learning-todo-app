import { BrowserRouter, Routes, Route } from "react-router-dom"

// screens
import { Home, Login, Signup } from '../components/screens'

function Routes_() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes_