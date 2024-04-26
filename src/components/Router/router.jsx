import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'
import NavBar from "../NavBar"
export default function Router() {

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                
            </Routes>
        </BrowserRouter>
    )
}