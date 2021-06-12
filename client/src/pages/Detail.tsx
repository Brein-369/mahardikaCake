import React, { useEffect, useState } from 'react'
import FooterCard from '../components/FooterCard'
import Navbar from '../components/Navbar'
import CakeCard from '../components/CakeCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const allState:any = useSelector(state => state)
    const [thisCake, setthisCake] = useState(Object)
    const params:any = useParams()
    const allCakes = allState.cakes
    useEffect(() => {
        const theCake = allCakes.filter((cake:any) => {
            if (cake.id === Number(params.idCake)) {
                return cake
            }
        })
        setthisCake(theCake[0])
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="mx-5">
                    <div className="row my-4">
                        <div className="col-6">
                            <div className="d-flex w-100 mb-4">
                                <img src={thisCake.imageUrl} alt=""
                                    style={{
                                        width: '100%',
                                        height: 'auto'
                                    }} />
                            </div>
                            <div className="d-flex w-100"
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'flex-start'
                                }}>
                                <div className="">
                                    <img src={thisCake.imageUrl} alt=""
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            marginRight: '20px'
                                        }} />
                                </div>
                                <div className="">
                                    <img src={thisCake.imageUrl} alt=""
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            marginRight: '20px'
                                        }} />
                                </div>
                                <div className="">
                                    <img src={thisCake.imageUrl} alt=""
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            marginRight: '20px'
                                        }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-5">
                            <div className="row">
                                <h1 className="pb-2" style={{ color: "#754e1d", fontSize: '50px' }}>{thisCake.name}</h1>
                            </div>
                            <div className="row py-2">
                                <h4>IDR {thisCake.price}</h4>
                            </div>
                            <div className="row pt-2 pb-5">
                                <div className='pr-3'>
                                    <i className="fa fa-star" style={{ color: 'yellow' }} aria-hidden="true"></i>
                                    <i className="fa fa-star" style={{ color: 'yellow' }} aria-hidden="true"></i>
                                    <i className="fa fa-star" style={{ color: 'yellow' }} aria-hidden="true"></i>
                                    <i className="fa fa-star" style={{ color: 'yellow' }} aria-hidden="true"></i>
                                    <i className="fa fa-star-o" style={{ color: 'brown' }} aria-hidden="true"></i>
                                </div>
                                <div className=''>
                                    <p>1 Review</p>
                                </div>
                            </div>
                            <div className="row pb-5">
                                <div style={{ lineHeight: "20px" }}>
                                    <h5>SKU : 111</h5>
                                    <h5>tes</h5>
                                    <h5>tes</h5>
                                </div>
                            </div>
                            <div className="row pb-5">
                                <p className="" style={{ lineHeight: '35px' }}>Edge Themes give you
                                everything you need to create an amazing website. Designed and built with care,
                                filled with creative element and useful options, and completely user-friendly. Set up your website quickly
                                and with ease. Tons of shortcodes provide countless options. From image galleries
                                to infographics.</p>
                            </div>
                            <div className="row pb-5 align-items-center">
                                <div className="col-2 pl-0">
                                    <h5>Bentuk</h5>
                                </div>
                                <div className="col-2 pl-0">
                                    <button className="btn btn-primary"
                                        style={{
                                            backgroundColor: '#f2dbbd',
                                            color: '#db9d4d',
                                            border: '1px solid #db9d4d',
                                            borderRadius: 0,
                                            width: '100px',
                                            height: '60px'
                                        }}
                                    >BULAT</button>
                                </div>
                                <div className="col-2 pl-0">
                                    <button className="btn btn-primary"
                                        style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            border: '1px solid grey',
                                            borderRadius: 0,
                                            width: '100px',
                                            height: '60px'
                                        }}
                                    >KOTAK</button>
                                </div>
                            </div>
                            <div className="row pb-5 align-items-center">
                                <div className="col-2 pl-0">
                                    <h5>Ukuran</h5>
                                </div>
                                <div className="col-2 pl-0">
                                    <button className="btn btn-primary"
                                        style={{
                                            backgroundColor: '#f2dbbd',
                                            color: '#db9d4d',
                                            border: '1px solid #db9d4d',
                                            borderRadius: 0,
                                            width: '100px',
                                            height: '60px'
                                        }}
                                    >15 CM</button>
                                </div>
                                <div className="col-2 pl-0">
                                    <button className="btn btn-primary"
                                        style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            border: '1px solid grey',
                                            borderRadius: 0,
                                            width: '100px',
                                            height: '60px'
                                        }}
                                    >16 CM</button>
                                </div>
                                <div className="col-2 pl-0">
                                    <button className="btn btn-primary"
                                        style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            border: '1px solid grey',
                                            borderRadius: 0,
                                            width: '100px',
                                            height: '60px'
                                        }}
                                    >22 CM</button>
                                </div>
                            </div>
                            <div className="row pb-5 align-items-center">
                                <div className="col-2 pl-0">
                                    <h5>Topping</h5>
                                </div>
                                <div className="col-5 pl-0">
                                    <select className="form-control form-control-lg" style={{ borderRadius: '0', border: "1px solid grey", height: '60px' }}>
                                        <option>Full Chocolate</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pb-5 align-items-center">
                                <div className="col-2 pl-0">
                                    <h5>Tambah Dekorasi</h5>
                                </div>
                                <div className="col-5 pl-0">
                                    <select className="form-control form-control-lg" style={{ borderRadius: '0', border: "1px solid grey", height: '60px' }}>
                                        <option>Pilih Dekorasi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pb-5 align-items-center">
                                <div className="col-2 pl-0">
                                    <h5>Total</h5>
                                </div>
                                <div className="col-5 pl-0">
                                    <h3>IDR 20312398</h3>
                                </div>
                            </div>
                            <div className="row pb-5 align-items-center">
                                <div className="col-2 pl-0">
                                    <h5>Jumlah</h5>
                                </div>
                                <input type="number" className="form-control col-2 pl-5 mr-5" value="1" style={{ borderRadius: '0', border: "1px solid grey", height: '60px' }} />
                                <div className="col-4 pl-0">
                                    <button className="btn btn-primary"
                                        style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            border: '1px solid grey',
                                            borderRadius: 0,
                                            width: '250px',
                                            height: '60px'
                                        }}
                                    >TAMBAH KE KERANJANG</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mx-5 align-items-center">
                    <div className="col-3 pl-0">
                        <h1 className="pb-2" style={{ color: "#754e1d", fontSize: '50px' }}>Full Chocolate</h1>  
                    </div>
                    <div className="col-3 pr-0 text-right">
                        <a href="">Lihat Semua</a>
                    </div>
                </div>
                <div className="d-flex justify-content-around"
                    style={{
                        width: "100%",
                        flexWrap: 'wrap',
                    }}>
                    {
                        allCakes.map((cake:any) => {
                            if (cake.id >= 1 && cake.id <= 5) {
                                return <CakeCard key={cake.id} id={cake.id} name={cake.name} price={cake.price} imageUrl={cake.imageUrl}></CakeCard>
                            }
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
