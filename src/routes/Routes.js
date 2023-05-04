import { BrowserRouter, Routes, Route } from "react-router-dom"

// screens
import { Profile, Login, Signup } from '../components/screens'

function Routes_() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/Profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes_