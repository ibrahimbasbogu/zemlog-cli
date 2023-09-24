import React, { useState } from "react";
import './../../css/bootstrap.min.css'
import './../../css/animate.min.css'
import './../../css/magnific-popup.css'
import './../../css/fontawesome-all.min.css'
import './../../css/aos.css'
import './../../css/nice-select.css'
import './../../css/flaticon.css'
import './../../css/meanmenu.css'
import './../../css/slick.css'
import './../../css/default.css'
import './../../css/style.css'
import './../../css/responsive.css'

import img2 from '../../img/icon/contact_box_icon02.png'
import img3 from '../../img/icon/contact_box_icon03.png'
import img4 from '../../img/icon/contact_box_icon04.png'
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import get from "../../services/get";
import post from "../../services/post";

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        'email': '',
        'password': ''
    })
    const handleInput = (event) => {
        const { name, value, id } = event.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleLogin = () => {
        post("https://api.zemlog.com/api/auth/login", form).then(res => {
            localStorage.setItem('token', res.token)
            navigate({ pathname: "/" })
        }).catch(err => console.log('armagan'))
    }
    return (
        
        <div>
            <div >
                <div class="support-area support-bg pt-110 pb-120 border rounded  mx-auto m-5 shadow-sm w-50"   >
                    <div class="d-flex flex-column aling-items-center jusitfy-content-between">
                        <div class="row justify-content-center">
                            <div class="col-xl-7 col-lg-10">
                                <div class="s-section-title text-center mb-60">
                                    <h2>Giriş</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <div class="support-form text-center">
                                    <form action="index.html">
                                        <div class="col-md-5" style={{ float: 'none', margin: 'auto' }}>
                                            <input id="email" name='email' value={form.email} onChange={handleInput} className="shadow-lg" placeholder="Email" />
                                        </div>
                                        <div class="col-md-5" style={{ float: 'none', margin: 'auto' }}>
                                            <input id="password" name='password' type="password" value={form.password} onChange={handleInput} className="shadow-lg" placeholder="Password" />
                                        </div>
                                    </form>
                                    <button onClick={() => handleLogin()} class="btn btn-danger w-25  shadow-lg rounded">Giriş Yap</button>
                                </div>
                            </div>
                            <div class="m-2 col-lg-10 border rounded  justify-content-center w-75 d-flex flex-row align-items-center">
                                <p style={{ marginTop: 20, marginRight: 40 }}>Hala uye degil misin? <span onClick={() => navigate({ pathname: '/register' })} style={{ fontSize: 18, fontWeight: 'bold', color: 'red', cursor: 'pointer' }}>Kayit Ol</span></p>
                            </div>
                        </div>

                    </div>
                </div>
                <section class="contact-area primary-bg pt-70 pb-15">
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-3 col-sm-6" >
                                <div class="single-contact-box mb-50">
                                    <div class="contact-icon mb-30 d-flex justify-content-center">
                                        <img src={img2} alt="img" />
                                    </div>
                                    <div class="contact-content">
                                        <h5>Telefon Numarası</h5>
                                        <span>+1 212-226-3126</span>
                                        <span>+1 212-226-3126</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 d-flex" >
                                <div class="single-contact-box mb-50">
                                    <div class="contact-icon mb-30 d-flex justify-content-center">
                                        <img src={img3} alt="img" />
                                    </div>
                                    <div class="contact-content">
                                        <h5>E-Mail Bilgileri</h5>
                                        <span>info@ADZ Cargo@gmail.com</span>
                                        <span>info@ADZ Cargo@com</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6" >
                                <div class="single-contact-box mb-50">
                                    <div class="contact-icon mb-30 d-flex justify-content-center">
                                        <img src={img4} alt="img" />
                                    </div>
                                    <div class="contact-content">
                                        <h5>Adres Bilgileri</h5>
                                        <span>99 NY Address street, Bronk Center Brooklyn</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>

    )
}
export default Login;
