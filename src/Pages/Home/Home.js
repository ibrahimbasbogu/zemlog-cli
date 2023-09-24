import React from "react";

import img1 from '../../img/brand/brnad_logo01.png'
import img2 from '../../img/brand/brnad_logo02.png'
import img3 from '../../img/brand/brnad_logo03.png'
import img4 from '../../img/brand/brnad_logo04.png'
import img5 from '../../img/brand/brnad_logo05.png'

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section class="s-slider-area">
                    <div class="s-slider-bg fix">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="s-slider-content text-center">
                                        <h6><span class="dots"></span>lojistik kargo hizmeti<span class="dots2"></span></h6>
                                        <h2 class="frame-1"><span>ZEMLOG</span> Express</h2>
                                        <h2 class="frame-2"><span>ZEMLOG</span> Express</h2>
                                        <h2 class="frame-3"><span>ZEMLOG</span> Express</h2>
                                        <h2 class="frame-4"><span>ZEMLOG</span> Express</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#category-section" class="icon-scroll">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                        <div class="slider-golve">
                            <img src="img/slider/golve.png" class="rotateme" alt="" />
                        </div>
                        <div class="slider-golve-bike">
                            <img src="img/slider/bike.png" alt="" />
                        </div>
                        <div class="slide-golve-car">
                            <img src="img/slider/car.png" alt="" />
                        </div>
                        <div class="slider-plane">
                            <img src="img/slider/plane.png" alt="" />
                        </div>
                    </div>
                </section>

                <section id="category-section" class="s-category-area">
                    <div class="container">
                        <div class="s-category-wrap">
                            <div class="row d-flex flex-row justify-content-center">
                                <div class="col-lg-3 col-sm-6">
                                    <a href="/create" class="s-single-cat mb-30">
                                        <div class="s-cat-icon">
                                            <i class="flaticon-cruise"></i>
                                        </div>
                                        <div class="s-cat-content">
                                            <h5>Gonderi Olustur</h5>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <a href="calculate" class="s-single-cat mb-30">
                                        <div class="s-cat-icon">
                                            <i class="flaticon-delivery-1"></i>
                                        </div>
                                        <div class="s-cat-content">
                                            <h5>Kargo Hesapla</h5>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <a href="orders" class="s-single-cat mb-30">
                                        <div class="s-cat-icon">
                                            <i class="flaticon-package"></i>
                                        </div>
                                        <div class="s-cat-content">
                                            <h5>Siparislerim</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="fact-area pt-120 pb-65">
                    <div class="container">
                        <div class="d-flex flex-row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                <div class="single-fact mb-50">
                                    <div class="fact-icon mb-25">
                                        <i class="flaticon-package"></i>
                                    </div>
                                    <div class="fact-content">
                                        <h4><span class="count">3,560</span> km</h4>
                                        <h6>Paket Teslim Edildi</h6>
                                        <p>Ekspres teslimat, yaratıcı bir hizmet etkili lojistik çözümüdür</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                <div class="single-fact mb-50">
                                    <div class="fact-icon mb-25">
                                        <i class="flaticon-placeholder"></i>
                                    </div>
                                    <div class="fact-content">
                                        <h4><span class="count">195</span></h4>
                                        <h6>Kapsanan Ülkeler</h6>
                                        <p>Ekspres teslimat, yaratıcı bir hizmet etkili lojistik çözümüdür</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                <div class="single-fact mb-50">
                                    <div class="fact-icon mb-25">
                                        <i class="flaticon-user"></i>
                                    </div>
                                    <div class="fact-content">
                                        <h4><span class="count">456</span> k</h4>
                                        <h6>Başarılı Gönderi</h6>
                                        <p>Ekspres teslimat, yaratıcı bir hizmet etkili lojistik çözümüdür</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                <div class="single-fact mb-50">
                                    <div class="fact-icon mb-25">
                                        <i class="flaticon-like"></i>
                                    </div>
                                    <div class="fact-content">
                                        <h4><span class="count">99</span> Yr</h4>
                                        <h6>Deneyim</h6>
                                        <p>Ekspres teslimat, yaratıcı bir hizmet etkili lojistik çözümüdür</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="brand-area gray-bg pt-85 pb-85">
                    <div class="container d-flex flex-row justify-content-around">
                        <div class="signle-brand">
                            <img src={img1} alt="img" />
                        </div>
                        <div class="signle-brand">
                            <img src={img2} alt="img" />
                        </div>
                        <div class="signle-brand">
                            <img src={img3} alt="img" />
                        </div>
                        <div class="signle-brand">
                            <img src={img4} alt="img" />
                        </div>
                        <div class="signle-brand">
                            <img src={img5} alt="img" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Home;