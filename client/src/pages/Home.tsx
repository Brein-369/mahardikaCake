import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CakeCard from '../components/CakeCard'
import FooterCard from '../components/FooterCard'
import {useSelector} from 'react-redux'

export default function Home() {
    const [mainPicHeight, setmainPicHeight] = useState<number>(0)
    // let img = new Image();
    //  img.src = 'https://i.imgur.com/PibWzxZ.jpg'
    //  img.onload = () => setmainPicHeight(img.height)
    // console.log(mainPicHeight);
    const allState:any = useSelector(state => state)
    const allCakes = allState.cakes

    return (
        <div>
            <Navbar></Navbar>
            <div className='position-relative '>
                <div className='text-center position-absolute' style={{ left: "100px", top: '400px' }}>
                    <h2>Hari sempurna dengan kue sempurna</h2>
                    <h1 style={{ color: "#754e1d", fontSize: '100px' }}>Kue Cokelat</h1>
                    <div style={{
                        backgroundColor: '#ad7c32',
                        color: 'white',
                        height: '80px',
                        width: '250px',
                        justifyContent: 'center',
                        margin: "0 auto",
                        position: 'relative'
                    }}>
                        <a href="" style={{ color: 'inherit' }}>
                            <div style={{
                                top: '50%',
                                left: '50%',
                                width: '100%',
                                transform: 'translate(-50%, -50%)'
                            }} className="position-absolute">
                                <h4><strong>HUBUNGI KAMI</strong></h4>
                            </div>
                        </a>
                    </div>
                </div>
                <img src="https://i.imgur.com/PibWzxZ.jpg"
                    alt="main pic cake"
                    style={{
                        width:'100%'
                        // width: document.body.clientWidth,
                    }} />
            </div>



            <div className='container-fluid p-3'
                style={{
                    marginTop: "100px",
                    marginBottom: '100px',
                    width: '100%'
                }}>
                <div className="d-flex row px-5">
                    <div className="col-6 p-5">
                        <h1 className="pb-3" style={{ color: "#754e1d", fontSize: '50px' }}>Resep Menuju Kebahagiaan</h1>
                        <p className="" style={{ lineHeight: '35px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam eu tellus mi. Vestibulum lacus ante, sodales vitae pellentesque eu, ultricies vehicula nibh. </p>
                        <p className="" style={{ lineHeight: '35px' }}>Edge Themes give you
                        everything you need to create an amazing website. Designed and built with care,
                        filled with creative element and useful options, and completely user-friendly. Set up your website quickly
                        and with ease. Tons of shortcodes provide countless options. From image galleries
                         to infographics.</p>
                        <div className="row px-3">

                            <div style={{
                                backgroundColor: '#ad7c32',
                                color: 'white',
                                height: '80px',
                                width: '200px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex'
                            }}>
                                <a href="" style={{
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}>
                                    <div style={{
                                        width: '100%',
                                    }} className="">
                                        <h4><strong>CARI TAHU</strong></h4>
                                    </div>
                                </a>
                            </div>
                            <div style={{
                                backgroundColor: 'white',
                                color: '#ad7c32',
                                border: '1px solid #000',
                                height: '80px',
                                width: '200px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                marginLeft: '30px'
                            }}>
                                <a href="" style={{
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}>
                                    <div style={{
                                        width: '100%',
                                    }} className="">
                                        <h4><strong>CARI TAHU</strong></h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img src="https://images.pexels.com/photos/2878737/pexels-photo-2878737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            style={{
                                height: "600px"
                            }} />
                    </div>
                    <div className="col">
                        <img src="https://images.pexels.com/photos/4051550/pexels-photo-4051550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            style={{
                                height: "600px",
                                width: 'auto'
                            }} />
                    </div>
                </div>
            </div>




            <div className="container-fluid my-5">
                <div className="row justify-content-between">
                    <div className="col"
                        style={{
                            height: '800px',
                            position:'relative',
                            background: "url('https://images.pexels.com/photos/3026809/pexels-photo-3026809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                        }}>
                        <div style={{
                            backgroundColor: 'rgba(0,0,0, 0.5)',
                            width:'100%',
                            height:"100%",
                            position: 'absolute',
                            top: '0',
                            left: '0'
                        }}>
                            <div style={{
                                top: '50%',
                                left: '50%',
                                width: '70%',
                                color: 'white',
                                textAlign: 'center',
                                transform: 'translate(-50%, -50%)'
                            }} className="position-absolute">
                                <h1 style={{fontSize: '50px'}}><strong>Best Selling</strong></h1>
                                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nullam eu tellus mi. Vestibulum lacus ante, sodales vitae pellentesque eu, ultricies vehicula nibh. </p>

                                <div className="d-flex justify-content-center align-items-center">
                                    <div style={{
                                        backgroundColor: '#ad7c32',
                                        color: 'white',
                                        height: '60px',
                                        width: '180px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex',
                                    }}>
                                        <a href="" style={{
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}>
                                            <div style={{
                                                width: '100%',
                                            }} className="">
                                                <h4><strong>SHOP NOW</strong></h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"
                        style={{
                            height: '800px',
                            backgroundColor: 'red',
                            marginLeft: '50px',
                            marginRight: "50px",
                            backgroundImage: "url('https://images.pexels.com/photos/3740177/pexels-photo-3740177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                            backgroundPosition: 'center'
                        }}>
                        <div style={{
                            backgroundColor: 'rgba(0,0,0, 0.5)',
                            width:'100%',
                            height:"100%",
                            position: 'absolute',
                            top: '0',
                            left: '0'
                        }}>
                            <div style={{
                                top: '50%',
                                left: '50%',
                                width: '70%',
                                color: 'white',
                                textAlign: 'center',
                                transform: 'translate(-50%, -50%)'
                            }} className="position-absolute">
                                <h1 style={{fontSize: '50px'}}><strong>Paling Populer</strong></h1>
                                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nullam eu tellus mi. Vestibulum lacus ante, sodales vitae pellentesque eu, ultricies vehicula nibh. </p>

                                <div className="d-flex justify-content-center align-items-center">
                                    <div style={{
                                        color: 'white',
                                        border: '2px solid #FFFFFF',
                                        height: '60px',
                                        width: '180px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex',
                                    }}>
                                        <a href="" style={{
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}>
                                            <div style={{
                                                width: '100%',
                                            }} className="">
                                                <h4><strong>SHOP NOW</strong></h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col"
                        style={{
                            height: '800px',
                            backgroundColor: 'red',
                            backgroundImage: "url('https://images.pexels.com/photos/3913295/pexels-photo-3913295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                            backgroundPositionX: '-980px',
                            backgroundPositionY: '-200px',
                            backgroundRepeat: 'no-repeat',
                        }}>
                        <div style={{
                            backgroundColor: 'rgba(0,0,0, 0.5)',
                            width:'100%',
                            height:"100%",
                            position: 'absolute',
                            top: '0',
                            left: '0'
                        }}>
                            <div style={{
                                top: '50%',
                                left: '50%',
                                width: '70%',
                                color: 'white',
                                textAlign: 'center',
                                transform: 'translate(-50%, -50%)'
                            }} className="position-absolute">
                                <h1 style={{fontSize: '50px'}}><strong>Kue Anak</strong></h1>
                                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nullam eu tellus mi. Vestibulum lacus ante, sodales vitae pellentesque eu, ultricies vehicula nibh. </p>

                                <div className="d-flex justify-content-center align-items-center">
                                    <div style={{
                                        color: 'white',
                                        border: '2px solid #FFFFFF',
                                        height: '60px',
                                        width: '180px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex',
                                    }}>
                                        <a href="" style={{
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}>
                                            <div style={{
                                                width: '100%',
                                            }} className="">
                                                <h4><strong>SHOP NOW</strong></h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid p-5">
                <div className="row pb-5">
                    <div className="col-3 mx-5">
                        <h1 className="" style={{ color: "#754e1d", fontSize: '50px' }}>Resep Kue Modern & Kontemporer </h1>
                    </div>
                    <div className="col justify-content-center d-flex">
                        <div className="w-75">
                            <p className="" style={{ lineHeight: '35px', fontSize: "25px" }}>Souffle caramels sweet roll powder jelly-o
                            cake apple pie dansih liquorice marshmallow. Halvah tart topping lemon drops icing cookie cheesecake croissant.
                                Cookie muffin chocolate apple pie. Chocolate bar carrot cake ice cream caramels. Lolipop cupcake cookie.</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around pt-5"
                    style={{
                        width: "100%",
                        flexWrap: 'wrap',
                    }}>
                    {
                        allCakes.map((cake:any) => {
                            return <CakeCard key={cake.id} id={cake.id} name={cake.name} price={cake.price} imageUrl={cake.imageUrl}></CakeCard>
                        })
                    }
                </div>
            </div>
            <hr style={{
                border: '1px solid #754e1d'
            }} />

            <FooterCard></FooterCard>
        </div>
    )
}
