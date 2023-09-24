import React, { useState } from "react";
import Footer from "../../Components/Footer";
import img2 from '../../img/icon/contact_box_icon02.png'
import img3 from '../../img/icon/contact_box_icon03.png'
import img4 from '../../img/icon/contact_box_icon04.png'
import post from "../../services/post";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        'first_name': '',
        'last_name': '',
        'email': '',
        'phone_number': '',
        'password': '',
        'repassword': ''
    })
    const handleInput = (event) => {
        const { name, value, id } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleRegister = () => {
        post("https://api.zemlog.com/auth/user/registration", form).then(res => {
            navigate({ pathname: '/login' })
        }).catch(err => console.log('armagan'))

    }
    return (
        <div>
            <div>
                <div class="support-area support-bg pt-110 pb-120 border rounded  mx-auto m-5 shadow-sm" style={{ width: '90%' }}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-7 col-lg-10">
                                <div class="s-section-title text-center mb-60">
                                    <h2>Kayıt Ol
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <div class="support-form text-center">
                                    <form action="index.html">
                                        <div class="row m-4">
                                            <div class="col-md-5" style={{ float: 'none', margin: 'auto' }}>
                                                <input value={form.first_name} id="first_name" name="first_name" onChange={handleInput} type="text" className="shadow-lg" placeholder="İsim" />
                                            </div>
                                            <div class="col-md-5" style={{ float: 'none', margin: 'auto' }}>
                                                <input value={form.last_name} id="last_name" name="last_name" onChange={handleInput} type="text" className="shadow-lg" placeholder="Soyisim" />
                                            </div>
                                            <div class="col-md-5" style={{ float: 'none', margin: 'auto' }}>
                                                <input value={form.email} id="email" name="email" onChange={handleInput} type="text" className="shadow-lg" placeholder="E-Mail" />
                                            </div>
                                            <div class="col-md-5" style={{ float: 'none', margin: 'auto' }}>
                                                <input value={form.phone_number} id="phone_number" name="phone_number" onChange={handleInput} type="text" className="shadow-lg" placeholder="Telefon Numarasi" />
                                            </div>
                                            <div class="col-md-5" style={{ float: 'none', margin: 'auto' }}>
                                                <input value={form.password} id="password" name="password" onChange={handleInput} type="password" className="shadow-lg" placeholder="Şifre" />
                                            </div>
                                            <div class="col-md-5" style={{ float: 'none', margin: 'auto' }}>
                                                <input value={form.repassword} id="repassword" name="repassword" onChange={handleInput} type="password" className="shadow-lg" placeholder="Tekrar Şifre" />
                                            </div>
                                        </div>
                                    </form>
                                    <button onClick={() => handleRegister()} class="btn btn-danger w-25  shadow-lg rounded">Kayıt Ol</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="contact-area primary-bg pt-70 pb-15">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6" style={{ float: 'none', margin: 'auto' }}>
                                <div class="single-contact-box mb-50 ">
                                    <div class="contact-icon mb-30 d-flex justify-content-center">
                                        <img src={img2} alt="img" />
                                    </div>
                                    <div class="contact-content">
                                        <h5>Telefon Numarasi</h5>
                                        <span>+1 212-226-3126</span>
                                        <span>+1 212-226-3126</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6" style={{ float: 'none', margin: 'auto' }}>
                                <div class="single-contact-box mb-50">
                                    <div class="contact-icon mb-30 d-flex justify-content-center">
                                        <img src={img3} alt="img" />
                                    </div>
                                    <div class="contact-content">
                                        <h5>E-Mail bilgileri</h5>
                                        <span>info@ADZ Cargo@gmail.com</span>
                                        <span>info@ADZ Cargo@com</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6" style={{ float: 'none', margin: 'auto' }}>
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
export default Register;