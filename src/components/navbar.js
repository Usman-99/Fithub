import React, { useContext } from 'react';
import logo from "../Images/logo2.jpeg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { storeContext } from '../Context and Reduce/StoreContext';

export default function Navbar() {
    const {products}=useContext(storeContext)
    const navigate = useNavigate();
    return (<>
        <nav className='navbar' style={{ height: "5px" }}>
            <div className="w3-top">
                <div className="w3-bar w3-black w3-card container-fluid py-0" id="myNavbar">
                    <button className='navbar-brand mx-2 my-0 py-0' >
                        <img src={logo} alt="Company logo" width="70" height="60" className="d-inline-block align-text-top" onClick={() => {
                            window.scrollTo(0,0)
                            navigate("/")
                        }} /></button>

                    <div className="w3-right w3-hide-small">
                    <button className='w3-bar-item w3-button w3-hover-blue' onClick={() => {
                            window.scrollTo(0,0)
                            navigate("/")
                        }}><i className="fa fa-home"></i> HOME</button>
                        <button className='w3-bar-item w3-button w3-hover-blue' onClick={() => {
                            window.scrollTo(0,0)
                            navigate("/About")                            
                        }}><i className="fa fa-globe"></i> ABOUT</button>
                        <button className='w3-bar-item w3-button w3-hover-blue' onClick={() => {
                            window.scrollTo(0,0)
                            navigate("/Team")
                        }}><i className="fa fa-children"></i> TEAM</button>
                        <button className='w3-bar-item w3-button w3-hover-blue' onClick={() => {
                            window.scrollTo(0,0)
                            navigate("/Blog")
                        }}><i className="fas fa-comment-alt"></i> BLOGS</button>
                        <button className='w3-bar-item w3-button w3-hover-blue' onClick={() => {
                            window.scrollTo(0,0)
                            navigate("/Contact")
                        }}><i className="fa fa-envelope"></i> CONTACT</button>
                        <div className="w3-dropdown-hover w3-hover-teal">
                            <button className="w3-button w3-bar-item w3-hover-blue" onClick={() => {
                            window.scrollTo(0,0)
                            navigate("/Products")
                        }} ><i className="fas fa-shopping-basket"></i> PRODUCTS</button>
                        </div>
                        <HashLink to="/#review" className="w3-bar-item w3-button w3-hover-blue"><i class="fa fa-comment"></i> REVIEWS</HashLink>
                        <button className="w3-bar-item w3-button w3-hover-blue" onClick={() => {
                            window.scrollTo(0,0)
                            navigate("/Account")                  
                        }}><i className="fa fa-user"></i> MY ACCOUNT</button>
                        <button className='w3-bar-item w3-button w3-hover-blue' onClick={()=>{
                            window.scrollTo(0,0)
                            navigate("/Cart")                        
                        }}><i class="fa-solid fa-cart-shopping"></i><sup>&nbsp;&nbsp;({products.length})</sup></button>             
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}
