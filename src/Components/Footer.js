import React from "react";

import mainLogo from '../img/adz_cargo_beyaz_turuncu.png'
import img6 from '../img/images/card_img.png'
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer-wrap pt-190 pb-40" data-background="img/bg/footer_bg.jpg">
                    <div class="container">
                        <div class="d-flex flex-row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="footer-widget mb-50">
                                    <div class="footer-logo mb-35">
                                        <a href="index.html"><img src={mainLogo} alt="img" /></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>Sosyal Medya
                                        </p>
                                    </div>
                                    <div class="footer-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="footer-widget mb-50">
                                    <div class="fw-title mb-30">
                                        <h5>Kullanışlı Linkler</h5>
                                    </div>
                                    <div class="fw-link">
                                        <ul>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Hakkımızda</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Teslimat Bilgisi</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Şartlar ve koşullar</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Gizlilik Politikası</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Geri ödeme politikası</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-wrap">
                    <div class="d-flex justify-content-center">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-7">
                                <div class="copyright-text text-nowrap mr-10">
                                    <p>Copyright© <span>Ibrahim Basbug </span> | Tüm hakları saklıdır</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-5">
                                <div class="f-payment-method text-center text-md-right">
                                    <img src={img6} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;