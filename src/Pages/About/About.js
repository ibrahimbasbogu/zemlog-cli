import React from "react";
import playBtnIcon from '../../img/icon/play_btn.png'
import img1 from '../../img/images/services_img01.jpg'
import img2 from '../../img/images/services_img02.jpg'
import img3 from '../../img/images/services_img03.jpg'
import img4 from '../../img/images/int_cargo_img.png'
import img11 from '../../img/brand/brnad_logo01.png'
import img22 from '../../img/brand/brnad_logo02.png'
import img33 from '../../img/brand/brnad_logo03.png'
import img44 from '../../img/brand/brnad_logo04.png'
import img55 from '../../img/brand/brnad_logo05.png'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
const About = () => {
    return (
        <div>
            <Header />
            <main>
                <div class="breadcrumb-area breadcrumb-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="breadcrumb-content">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="dots"></li>
                                            <li class="breadcrumb-item"><a href="#">Ana sayfa</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">Hakkımızda</li>
                                            <li class="dots2"></li>
                                        </ol>
                                    </nav>
                                    <h2>Hakkımızda</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="services-area delivery-bg pt-110 pb-90">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-7 col-lg-10">
                                <div class="s-section-title text-center mb-60">
                                    <h2>
                                        Kargo Teslimatı</h2>
                                    <p>Ekspres teslimat, yenilikçi bir hizmettir ve etkili bir lojistik çözümüdür.
                                        Küçük kargo teslimatı için ideal bir hizmettir. Bu hizmet çeşitli şirketler için faydalıdır.</p>
                                </div>
                            </div>
                        </div>
                        <div class="services-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-services mb-30">
                                        <div class="services-thumb">
                                            <a href="#"><img src={img1} alt="img" /></a>
                                        </div>
                                        <div class="services-content">
                                            <div class="services-icon">
                                                <i class="flaticon-shipping-and-delivery"></i>
                                            </div>
                                            <h3><a href="#">Daha Fazla Kontrol, Ücretsiz</a></h3>
                                            <span>Teslimat Hizmeti</span>
                                            <p>Ekspres teslimat, küçük kargo teslimatı için etkili bir lojistik çözümüdür.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-services mb-30">
                                        <div class="services-thumb">
                                            <a href="#"><img src={img2} alt="img" /></a>
                                        </div>
                                        <div class="services-content">
                                            <div class="services-icon">
                                                <i class="flaticon-shipping"></i>
                                            </div>
                                            <h3><a href="#">E-Ticaret ile Genişleyin</a></h3>
                                            <span>Teslimat Hizmeti</span>
                                            <p>Ekspres teslimat, küçük kargo teslimatı için etkili bir lojistik çözümüdür.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-services mb-30">
                                        <div class="services-thumb">
                                            <a href="#"><img src={img3} alt="img" /></a>
                                        </div>
                                        <div class="services-content">
                                            <div class="services-icon">
                                                <i class="flaticon-location"></i>
                                            </div>
                                            <h3><a href="#">Herhangi Bir Yere Teslimat</a></h3>
                                            <span>Teslimat Hizmeti</span>
                                            <p>Ekspres teslimat, küçük kargo teslimatı için etkili bir lojistik çözümüdür.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="international-services position-relative pb-120 fix">
                    <div class="container">
                        <div class="services-wrapper">
                            <div class="row align-items-center">
                                <div class="col-lg-6 order-0 order-lg-2">
                                    <div class="int-services-img text-center text-lg-right">
                                        <img src={img4} alt="img" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="s-section-title mb-30">
                                        <h2>Uluslararası Kargo</h2>
                                        <h6>Ekspres teslimat, yenilikçi bir hizmettir</h6>
                                    </div>
                                    <div class="int-services-content">
                                        <p>Ekspres teslimat, küçük kargo teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, farklı
                                            ölçeklerdeki çeşitli şirketler için faydalıdır.</p>
                                        <a href="#" class="btn red-btn">Karşılaştırma</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overlay-title paroller" data-paroller-factor="0.15" data-paroller-factor-lg="0.15"
                        data-paroller-factor-md="0.15" data-paroller-factor-sm="0.15" data-paroller-type="foreground"
                        data-paroller-direction="horizontal">Kargo</div>
                </section>


                <section class="video-area video-bg">
                    <div class="container">
                        <div class="video-overlay s-video-overlay">
                            <div class="row align-items-center">
                                <div class="col-xl-5 col-lg-8 order-2 order-lg-0">
                                    <div class="video-title">
                                        <span>Zorluklarımız</span>
                                        <h2> Sözümüzü Tutariz</h2>
                                        <a href="#">Daha fazla hizmet<span></span></a>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="video-play">
                                        <a href="https://www.youtube.com/watch?v=iWKu6WNFf9M" class="popup-video"><img
                                            src={playBtnIcon} alt="img" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="faq-area faq-bg pt-110 pb-120">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-7 col-lg-10">
                                <div class="s-section-title text-center mb-60">
                                    <h2>Sıkça Sorulan Sorular</h2>
                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır.</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-wrapper">
                            <div class="row">
                                <div class="col-xl-4 col-lg-5">
                                    <div class="nav flex-column nav-pills faq-tab-pills" id="v-pills-tab" role="tablist"
                                        aria-orientation="vertical">
                                        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home"
                                            role="tab" aria-controls="v-pills-home" aria-selected="true">
                                            <div class="faq-tab-icon">
                                                <i class="far fa-bell"></i>
                                            </div>
                                            <div class="faq-tab-content d-none d-lg-block">
                                                <h5>Her Yere Kargo</h5>
                                                <p>Express teslimat, etkili lojistik sağlayan yenilikçi bir hizmettir.</p>
                                            </div>
                                        </a>
                                        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                                            role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                            <div class="faq-tab-icon">
                                                <i class="fas fa-award"></i>
                                            </div>
                                            <div class="faq-tab-content d-none d-lg-block">
                                                <h5>Kargo Lojistiği Sağlar</h5>
                                                <p>Express teslimat, etkili lojistik sağlayan yenilikçi bir hizmettir.</p>
                                            </div>
                                        </a>
                                        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill"
                                            href="#v-pills-messages" role="tab" aria-controls="v-pills-messages"
                                            aria-selected="false">
                                            <div class="faq-tab-icon">
                                                <i class="fas fa-bullseye"></i>
                                            </div>
                                            <div class="faq-tab-content d-none d-lg-block">
                                                <h5>Kelimeler Kargo Taşımacılığı</h5>
                                                <p>Express teslimat, etkili lojistik sağlayan yenilikçi bir hizmettir.</p>
                                            </div>
                                        </a>
                                        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill"
                                            href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                                            aria-selected="false">
                                            <div class="faq-tab-icon">
                                                <i class="fas fa-cog"></i>
                                            </div>
                                            <div class="faq-tab-content d-none d-lg-block">
                                                <h5>Taşıma Hatları</h5>
                                                <p>Express teslimat, etkili lojistik sağlayan yenilikçi bir hizmettir.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-xl-8 col-lg-7">
                                    <div class="tab-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                            aria-labelledby="v-pills-home-tab">
                                            <div class="faq-accordion">
                                                <div class="faq-tab-icon">
                                                    <i class="far fa-bell"></i>
                                                </div>
                                                <div class="faq-accordion-content fix">
                                                    <div class="faq-tab-content mb-30">
                                                        <h5>Her Yere Kargo</h5>
                                                        <p>Express teslimat, etkili lojistik sağlayan yenilikçi bir hizmettir.</p>
                                                    </div>
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="card">
                                                            <div class="card-header" id="headingOne">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseOne"
                                                                        aria-expanded="true" aria-controls="collapseOne">
                                                                        ADZ Kargo Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                                                                data-parent="#accordionExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingTwo">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link" data-toggle="collapse"
                                                                        data-target="#collapseTwo" aria-expanded="false"
                                                                        aria-controls="collapseTwo">
                                                                        Kargo ve Lojistik Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" class="collapse show"
                                                                aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingThree">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseThree"
                                                                        aria-expanded="false" aria-controls="collapseThree">
                                                                        Navlun ve Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" class="collapse"
                                                                aria-labelledby="headingThree" data-parent="#accordionExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingFour">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseFour"
                                                                        aria-expanded="false" aria-controls="collapseFour">
                                                                        Gönderim Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseFour" class="collapse"
                                                                aria-labelledby="headingFour" data-parent="#accordionExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingFive">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseFive"
                                                                        aria-expanded="false" aria-controls="collapseFive">
                                                                        Kargo Türleri Nelerdir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseFive" class="collapse"
                                                                aria-labelledby="headingFive" data-parent="#accordionExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingSix">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseSix"
                                                                        aria-expanded="false" aria-controls="collapseSix">
                                                                        Navlun Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseSix" class="collapse" aria-labelledby="headingSix"
                                                                data-parent="#accordionExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                            aria-labelledby="v-pills-profile-tab">
                                            <div class="faq-accordion">
                                                <div class="faq-tab-icon">
                                                    <i class="fas fa-award"></i>
                                                </div>
                                                <div class="faq-accordion-content fix">
                                                    <div class="faq-tab-content mb-30">
                                                        <h5>Kargo Lojistiği Sağlar</h5>
                                                        <p>Express teslimat, etkili lojistik sağlayan yenilikçi bir hizmettir.</p>
                                                    </div>
                                                    <div class="accordion" id="accordionAwardExample">
                                                        <div class="card">
                                                            <div class="card-header" id="headingAwardOne">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseAwardOne"
                                                                        aria-expanded="true" aria-controls="collapseAwardOne">
                                                                        ADZ Kargo Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseAwardOne" class="collapse"
                                                                aria-labelledby="headingAwardOne"
                                                                data-parent="#accordionAwardExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingAwardTwo">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link" data-toggle="collapse"
                                                                        data-target="#collapseAwardTwo" aria-expanded="false"
                                                                        aria-controls="collapseAwardTwo">
                                                                        Kargo ve Lojistik Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseAwardTwo" class="collapse show"
                                                                aria-labelledby="headingAwardTwo"
                                                                data-parent="#accordionAwardExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingAwardThree">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseAwardThree"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseAwardThree">
                                                                        Navlun ve Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseAwardThree" class="collapse"
                                                                aria-labelledby="headingAwardThree"
                                                                data-parent="#accordionAwardExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingAwardFour">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseAwardFour"
                                                                        aria-expanded="false" aria-controls="collapseAwardFour">
                                                                        Gönderim Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseAwardFour" class="collapse"
                                                                aria-labelledby="headingAwardFour"
                                                                data-parent="#accordionAwardExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingAwardFive">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseAwardFive"
                                                                        aria-expanded="false" aria-controls="collapseAwardFive">
                                                                        Kargo Türleri Nelerdir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseAwardFive" class="collapse"
                                                                aria-labelledby="headingAwardFive"
                                                                data-parent="#accordionAwardExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingAwardSix">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseAwardSix"
                                                                        aria-expanded="false" aria-controls="collapseAwardSix">
                                                                        Navlun Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseAwardSix" class="collapse"
                                                                aria-labelledby="headingAwardSix"
                                                                data-parent="#accordionAwardExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                            aria-labelledby="v-pills-messages-tab">
                                            <div class="faq-accordion">
                                                <div class="faq-tab-icon">
                                                    <i class="fas fa-bullseye"></i>
                                                </div>
                                                <div class="faq-accordion-content fix">
                                                    <div class="faq-tab-content mb-30">
                                                        <h5>Kelimeler Kargo Navlun</h5>
                                                        <p>Express teslimat, etkili bir lojistik sağlayan yenilikçi bir hizmettir.</p>
                                                    </div>
                                                    <div class="accordion" id="accordionBullseyeExample">
                                                        <div class="card">
                                                            <div class="card-header" id="headingBullseyeOne">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse"
                                                                        data-target="#collapseBullseyeOne" aria-expanded="true"
                                                                        aria-controls="collapseBullseyeOne">
                                                                        ADZ Kargo Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseBullseyeOne" class="collapse"
                                                                aria-labelledby="headingBullseyeOne"
                                                                data-parent="#accordionBullseyeExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingBullseyeTwo">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link" data-toggle="collapse"
                                                                        data-target="#collapseBullseyeTwo" aria-expanded="false"
                                                                        aria-controls="collapseBullseyeTwo">
                                                                        Kargo ve Lojistik Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseBullseyeTwo" class="collapse show"
                                                                aria-labelledby="headingBullseyeTwo"
                                                                data-parent="#accordionBullseyeExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingBullseyeThree">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse"
                                                                        data-target="#collapseBullseyeThree"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseBullseyeThree">
                                                                        Navlun ve Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseBullseyeThree" class="collapse"
                                                                aria-labelledby="headingBullseyeThree"
                                                                data-parent="#accordionBullseyeExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingBullseyeFour">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse"
                                                                        data-target="#collapseBullseyeFour"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseBullseyeFour">
                                                                        Gönderim Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseBullseyeFour" class="collapse"
                                                                aria-labelledby="headingBullseyeFour"
                                                                data-parent="#accordionBullseyeExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingBullseyeFive">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse"
                                                                        data-target="#collapseBullseyeFive"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseBullseyeFive">
                                                                        Kargo Türleri Nelerdir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseBullseyeFive" class="collapse"
                                                                aria-labelledby="headingBullseyeFive"
                                                                data-parent="#accordionBullseyeExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingBullseyeSix">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse"
                                                                        data-target="#collapseBullseyeSix" aria-expanded="false"
                                                                        aria-controls="collapseBullseyeSix">
                                                                        Navlun Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseBullseyeSix" class="collapse"
                                                                aria-labelledby="headingBullseyeSix"
                                                                data-parent="#accordionBullseyeExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                            aria-labelledby="v-pills-settings-tab">
                                            <div class="faq-accordion">
                                                <div class="faq-tab-icon">
                                                    <i class="fas fa-cog"></i>
                                                </div>
                                                <div class="faq-accordion-content fix">
                                                    <div class="faq-tab-content mb-30">
                                                        <h5>Taşıma Hatları</h5>
                                                        <p>Express teslimat, etkili lojistik sağlayan yenilikçi bir hizmettir.</p>
                                                    </div>
                                                    <div class="accordion" id="accordionCogExample">
                                                        <div class="card">
                                                            <div class="card-header" id="headingCogOne">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseCogOne"
                                                                        aria-expanded="true" aria-controls="collapseCogOne">
                                                                        ADZ Kargo Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseCogOne" class="collapse"
                                                                aria-labelledby="headingCogOne"
                                                                data-parent="#accordionCogExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingCogTwo">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link" data-toggle="collapse"
                                                                        data-target="#collapseCogTwo" aria-expanded="false"
                                                                        aria-controls="collapseCogTwo">
                                                                        Kargo ve Lojistik Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseCogTwo" class="collapse show"
                                                                aria-labelledby="headingCogTwo"
                                                                data-parent="#accordionCogExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingCogThree">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseCogThree"
                                                                        aria-expanded="false" aria-controls="collapseCogThree">
                                                                        Navlun ve Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseCogThree" class="collapse"
                                                                aria-labelledby="headingCogThree"
                                                                data-parent="#accordionCogExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingCogFour">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseCogFour"
                                                                        aria-expanded="false" aria-controls="collapseCogFour">
                                                                        Gönderim Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseCogFour" class="collapse"
                                                                aria-labelledby="headingCogFour"
                                                                data-parent="#accordionCogExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingCogFive">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseCogFive"
                                                                        aria-expanded="false" aria-controls="collapseCogFive">
                                                                        Kargo Türleri Nelerdir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseCogFive" class="collapse"
                                                                aria-labelledby="headingCogFive"
                                                                data-parent="#accordionCogExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingCogSix">
                                                                <h5 class="mb-0">
                                                                    <a href="#" class="btn-link collapsed"
                                                                        data-toggle="collapse" data-target="#collapseCogSix"
                                                                        aria-expanded="false" aria-controls="collapseCogSix">
                                                                        Navlun Kargo Arasındaki Fark Nedir?
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseCogSix" class="collapse"
                                                                aria-labelledby="headingCogSix"
                                                                data-parent="#accordionCogExample">
                                                                <div class="card-body">
                                                                    <p>Express teslimat, küçük kargoların teslimatı için etkili bir lojistik çözümüdür. Bu hizmet, çeşitli şirketler için faydalıdır ve etkili bir lojistik ölçeğidir.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="brand-area gray-bg pt-85 pb-85">
                    <div class="container d-flex flex-row justify-content-around">
                        <div class="signle-brand">
                            <img src={img11} alt="img" />
                        </div>
                        <div class="signle-brand">
                            <img src={img22} alt="img" />
                        </div>
                        <div class="signle-brand">
                            <img src={img33} alt="img" />
                        </div>
                        <div class="signle-brand">
                            <img src={img44} alt="img" />
                        </div>
                        <div class="signle-brand">
                            <img src={img55} alt="img" />
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default About;