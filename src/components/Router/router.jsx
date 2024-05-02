import ProductList from '../ProductsData/ProductsList'
import ProductDetail from '../ProductDetail'
import ProductItem from '../ProductItem'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import NavBar from '../NavBar'
import { useState } from 'react'
import { useEffect } from 'react'
import LandingPage from '../LandingPage'
import Reservas from '../Reservas'
export default function Router() {

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/category" element={<ProductItem />}/>
                <Route path="/category/:id" element={<ProductItem/>}/>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/reservas" element={<Reservas/>}/>
            </Routes>
        </BrowserRouter>
    )
}