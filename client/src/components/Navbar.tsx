import React, { Component } from 'react'

export default function Navbar() {
    return (
        <div>
            <nav 
                className="navbar navbar-light bg-white justify-content-between" 
                style={{
                    marginTop: "10px", 
                    marginLeft: "30px",
                    marginRight: "30px"
                }}>
            <h4><strong>MAHARDIKA CAKE</strong></h4>
            <a className="navbar-brand" href="#">HOME</a>
            </nav>
            <hr className="m-0"/>
        </div>
    )
}
