import React, { Component } from 'react'

export default function FooterCard() {
    return (
        <div className="row" style={{
            padding: '100px',
            margin: '0'
            }}>
            <div className="col-3"
                style={{
                    flexDirection: 'column',
                }}>
                <h2><strong>MAHARDIKA CAKE</strong></h2>
                <p className=""
                    style={{
                        lineHeight: '25px',
                        fontSize: '15px'
                    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu tellus mi. Vestibulum lacus ante, sodales vitae pellentesque eu, ultricies vehicula nibh. </p>
                <div style={{
                    flexDirection: 'row',
                    display: 'flex'
                }}>
                    <p style={{ fontSize: '15px', width: '100px' }}>follow us:</p>
                    <div style={{ marginLeft: "10px" }}>
                        <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "30px" }} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "30px" }} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "30px" }} />
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div style={{
                    flexDirection: 'column',
                    display:'flex'
                }}>
                    <h3>Our Online Channel</h3>
                    <div style={{
                        flexWrap: 'wrap',
                        display: 'flex'
                     }}>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                    </div>
                </div>
                <div style={{
                    flexDirection: 'column',
                }}>
                    <h3>We Accept</h3>
                    <div style={{
                        flexWrap: 'wrap',
                        display: 'flex'
                     }}>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                        <div style={{ margin: "10px" }}>
                            <img src="https://i.imgur.com/ePYInFy.png" alt="" style={{ width: "60px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3" style={{
                    flexDirection: 'column',
                    display:'flex',
                    lineHeight:'40px'
                }}>
                <h3>Company</h3>
                <a href="" style={{fontSize: '20px', color:'black',textDecoration:'none'}}>Our Contact & Location</a>
                <a href="" style={{fontSize: '20px', color:'black',textDecoration:'none'}}>Company Profile</a>
                <a href="" style={{fontSize: '20px', color:'black',textDecoration:'none'}}>Partnership</a>
                <a href="" style={{fontSize: '20px', color:'black',textDecoration:'none'}}>Careers</a>
            </div>



            <div className="col-3" style={{
                    flexDirection: 'column',
                    display:'flex',
                }}>
                <div className="" style={{
                    marginBottom: '30px',
                }}>
                    <h3>Jam Operasional</h3>
                    <p style={{fontSize: '20px', color:'black', margin:'0'}}>Senin s/d Sabtu 06.45 - 21.00</p>
                    <p style={{fontSize: '20px', color:'black', margin:'0'}}>Minggu 09.00 - 18.</p>    
                </div>

                <div className="" style={{
                    marginBottom: '30px',
                }}>
                    <h3>Lokasi</h3>
                    <p style={{fontSize: '20px', color:'black', margin:'0'}}>Jl.Kuta Kencana no.17</p>
                </div>

                <div className="" style={{
                    marginBottom: '30px',
                }}>
                    <h3>Kontak</h3>
                    <p style={{fontSize: '20px', color:'black', margin:'0'}}>Email: admin@mahardikasolusi.com</p>
                </div>
            </div>

        </div>
    )
}
