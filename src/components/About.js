import React from 'react'

export default function About() {
  return (
    <div className="w3-container mb-5"  id="about">
            <h3 className="mb-4 w3-center w3-xlarge"><b>ABOUT THE COMPANY</b></h3>
            <p className="w3-center w3-xlarge"><b>Key features of our company</b></p>
            <div className="w3-row-padding w3-center py-10" style={{marginTop:"64px",backgroundColor:"white"}}>
                <div className="w3-quarter mb-2 px-2 py-3 border-success" style={{border:"1px solid black",borderRadius:"5%"}}>
                    <i className="fa-solid fa-heart-pulse w3-margin-bottom w3-jumbo"></i>
                    <p className="w3-large">Health Monitoring</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore.</p>
                </div>
                <div className="w3-quarter mb-2 px-2 py-3 border-danger" style={{border:"1px solid black",borderRadius:"5%"}}>
                    <i className="fa-solid fa-dumbbell w3-margin-bottom w3-jumbo"></i>
                    <p className="w3-large">Training</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore.</p>
                </div>
                <div className="w3-quarter mb-2 px-2 py-3 border-info" style={{border:"1px solid black",borderRadius:"5%"}}>
                    <i className="fa-solid fa-cart-shopping w3-margin-bottom w3-jumbo"></i>
                    <p className="w3-large">Store</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore.</p>
                </div>
                <div className="w3-quarter px-2 py-3 border-primary" style={{border:"1px solid black",borderRadius:"5%"}}>
                    <i className="fa-solid fa-burger w3-margin-bottom w3-jumbo"></i>
                    <p className="w3-large">Blogs About Fitness</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore.</p>
                </div>
            </div>
        </div>
  )
}
