import React, { useEffect, useState } from "react";

import getFareRateIcon from '../img/icon/calculator-symbols.png'
import logo2 from '../img/logo/logo.png'
import mainLogo from '../img/adz_cargo_beyaz_turuncu.png'
import UserIcon from "../Components/UserIcon";
import get from "../services/get";

const Header = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        get(`http://zemlog-api.test/api/user/profile`).then(res => setIsAdmin(res.is_admin))
    }, [])
    return (
        <header>
            <div id="header-sticky" class="main-header" style={{ backgroundColor: '#22123A' }}>
                <div class="container-fluid header-container-p">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-6">
                            <div class="logo">
                                <a href="/"><img src={mainLogo} class="mobile-logo logo-sticky-none" alt="Logo" /></a>
                                <a href="/"><img src={logo2} class="mobile-logo s-logo-none" alt="Logo" /></a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-6 d-none d-md-block">
                            <div class="menu-area">
                                <div class="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li ><a style={{ color: 'white' }} href="/">Ana Sayfa</a></li>
                                            <li ><a style={{ color: 'white' }} href="/about">Hakkımızda</a></li>
                                            {isAdmin && <li ><a style={{ color: 'white' }} href="/bestprice">En iyi Fiyat</a></li>}
                                        </ul>
                                    </nav>
                                </div>
                                <div class="header-search">
                                    <a href="#" style={{ color: 'white' }} data-toggle="modal" data-target="#search-modal"><i class="flaticon-magnifying-glass"></i></a>
                                </div>
                                <div class="header-btn">
                                    <a href="/calculate" class="btn d-flex flex-row" data-toggle="modal" data-target="#exampleModalLong"><img src={getFareRateIcon} alt="icon" />Teklif Al</a>
                                </div>
                                <UserIcon />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile-menu"></div>
                        </div>
                    </div>

                    <div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <form>
                                    <input type="text" placeholder="Search here..." />
                                    <button><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content fare-rate-modal">
                                <ul class="nav nav-tabs setup-panel">
                                    <li class="nav-item single-steps">
                                        <a class="nav-link btn-amber" href="#step-1">Select Your Destination</a>
                                    </li>
                                    <li class="nav-item single-steps">
                                        <a class="nav-link btn-blue-grey" href="#step-2">ITEMS TO BE SHIPPED</a>
                                    </li>
                                </ul>
                                <form action="#" method="post">
                                    <div class="single-setup" id="step-1">
                                        <div class="fare-rate-tab-content">
                                            <div class="modal-shipping-info">
                                                <ul>
                                                    <li>
                                                        <div class="shipping-step-count">
                                                            <h5>A</h5>
                                                        </div>
                                                        <div class="shipping-address-form">
                                                            <div class="shipping-country-box form-group">
                                                                <label for="from-country">from country</label>
                                                                <select class="custom-select">
                                                                    <option selected="">From Country</option>
                                                                    <option value="United States">United States</option>
                                                                    <option value="United Kingdom">United Kingdom</option>
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                    <option value="Andorra">Andorra</option>
                                                                    <option value="Angola">Angola</option>
                                                                    <option value="Anguilla">Anguilla</option>
                                                                    <option value="Antarctica">Antarctica</option>
                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Armenia">Armenia</option>
                                                                    <option value="Aruba">Aruba</option>
                                                                    <option value="Australia">Australia</option>
                                                                    <option value="Austria">Austria</option>
                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                    <option value="Bahamas">Bahamas</option>
                                                                    <option value="Bahrain">Bahrain</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Barbados">Barbados</option>
                                                                    <option value="Belarus">Belarus</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Belize">Belize</option>
                                                                    <option value="Benin">Benin</option>
                                                                    <option value="Bermuda">Bermuda</option>
                                                                    <option value="Bhutan">Bhutan</option>
                                                                    <option value="Bolivia">Bolivia</option>
                                                                </select>
                                                            </div>
                                                            <div class="shipping-address-box form-group">
                                                                <label for="from-country-location">add your location</label>
                                                                <select class="custom-select">
                                                                    <option selected="">From Country</option>
                                                                    <option value="United States">United States</option>
                                                                    <option value="United Kingdom">United Kingdom</option>
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                    <option value="Andorra">Andorra</option>
                                                                    <option value="Angola">Angola</option>
                                                                    <option value="Anguilla">Anguilla</option>
                                                                    <option value="Antarctica">Antarctica</option>
                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Armenia">Armenia</option>
                                                                    <option value="Aruba">Aruba</option>
                                                                    <option value="Australia">Australia</option>
                                                                    <option value="Austria">Austria</option>
                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                    <option value="Bahamas">Bahamas</option>
                                                                    <option value="Bahrain">Bahrain</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Barbados">Barbados</option>
                                                                    <option value="Belarus">Belarus</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Belize">Belize</option>
                                                                    <option value="Benin">Benin</option>
                                                                    <option value="Bermuda">Bermuda</option>
                                                                    <option value="Bhutan">Bhutan</option>
                                                                    <option value="Bolivia">Bolivia</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="shipping-step-count">
                                                            <h5>B</h5>
                                                        </div>
                                                        <div class="shipping-address-form">
                                                            <div class="shipping-country-box form-group">
                                                                <label for="to-country">TO country</label>
                                                                <select class="custom-select">
                                                                    <option selected="">From Country</option>
                                                                    <option value="United States">United States</option>
                                                                    <option value="United Kingdom">United Kingdom</option>
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                    <option value="Andorra">Andorra</option>
                                                                    <option value="Angola">Angola</option>
                                                                    <option value="Anguilla">Anguilla</option>
                                                                    <option value="Antarctica">Antarctica</option>
                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Armenia">Armenia</option>
                                                                    <option value="Aruba">Aruba</option>
                                                                    <option value="Australia">Australia</option>
                                                                    <option value="Austria">Austria</option>
                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                    <option value="Bahamas">Bahamas</option>
                                                                    <option value="Bahrain">Bahrain</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Barbados">Barbados</option>
                                                                    <option value="Belarus">Belarus</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Belize">Belize</option>
                                                                    <option value="Benin">Benin</option>
                                                                    <option value="Bermuda">Bermuda</option>
                                                                    <option value="Bhutan">Bhutan</option>
                                                                    <option value="Bolivia">Bolivia</option>
                                                                </select>
                                                            </div>
                                                            <div class="shipping-address-box form-group">
                                                                <label for="to-country-location">add your location</label>
                                                                <select class="custom-select">
                                                                    <option selected="">From Country</option>
                                                                    <option value="United States">United States</option>
                                                                    <option value="United Kingdom">United Kingdom</option>
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                    <option value="Andorra">Andorra</option>
                                                                    <option value="Angola">Angola</option>
                                                                    <option value="Anguilla">Anguilla</option>
                                                                    <option value="Antarctica">Antarctica</option>
                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Armenia">Armenia</option>
                                                                    <option value="Aruba">Aruba</option>
                                                                    <option value="Australia">Australia</option>
                                                                    <option value="Austria">Austria</option>
                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                    <option value="Bahamas">Bahamas</option>
                                                                    <option value="Bahrain">Bahrain</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Barbados">Barbados</option>
                                                                    <option value="Belarus">Belarus</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Belize">Belize</option>
                                                                    <option value="Benin">Benin</option>
                                                                    <option value="Bermuda">Bermuda</option>
                                                                    <option value="Bhutan">Bhutan</option>
                                                                    <option value="Bolivia">Bolivia</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="modal-shipping-more-list">
                                                <ul>
                                                    <li><a href="#"><i class="flaticon-credit-card"></i> Don't have an account? No problem
                                                        Pay by credit card or cash.</a></li>
                                                    <li><a href="#"><i class="flaticon-sings"></i> Get a quick quote and start shipping</a>
                                                    </li>
                                                    <li><a href="#"><i class="flaticon-track"></i> Consult your packaging and delivery
                                                        options</a></li>
                                                </ul>
                                            </div>
                                            <button class="btn f-right nextBtn-2 btn-success" type="button">one more step</button>
                                        </div>
                                    </div>
                                    <div class="single-setup" id="step-2">
                                        <div class="fare-rate-tab-content">
                                            <div class="modal-shipping-details">
                                                <div class="modal-shipping-title">
                                                    <h2>items <span>details</span></h2>
                                                </div>
                                                <div class="shipping-details-info">
                                                    <div class="single-shipping-details-box">
                                                        <label for="packaging-size">packaging size</label>
                                                        <select class="custom-select" id="packaging-size">
                                                            <option selected="">Standart Size ( 42” x 36” )</option>
                                                            <option>Standart Size ( 82” x 86” )</option>
                                                            <option>Standart Size ( 102” x 165” )</option>
                                                            <option>Standart Size ( 110” x 205” )</option>
                                                            <option>Standart Size ( 120” x 250” )</option>
                                                        </select>
                                                    </div>
                                                    <div class="single-shipping-details-box shipping-qty">
                                                        <label for="QTY-number">QTY</label>
                                                        <input type="number" value="1" id="QTY-number" required="required" />
                                                    </div>
                                                    <div class="single-shipping-details-box shipping-weight">
                                                        <label for="packaging-weight">TOTAL WEIGHT</label>
                                                        <select class="custom-select" id="packaging-weight">
                                                            <option selected="">KG</option>
                                                            <option>20KG</option>
                                                            <option>30KG</option>
                                                            <option>50KG</option>
                                                            <option>80KG</option>
                                                            <option>100KG</option>
                                                        </select>
                                                    </div>
                                                    <div class="single-shipping-details-box shipping-transport">
                                                        <label for="cargo-transport">cargo transport</label>
                                                        <select class="custom-select" id="cargo-transport">
                                                            <option selected="">IN</option>
                                                            <option>1500in</option>
                                                            <option>2000in</option>
                                                            <option>2500in</option>
                                                            <option>3000in</option>
                                                            <option>3500in</option>
                                                            <option>4000in</option>
                                                        </select>
                                                    </div>
                                                    <div class="single-shipping-details-box shipping-product">
                                                        <label for="product-category">product category</label>
                                                        <select class="custom-select" id="product-category">
                                                            <option selected="">Glass Product</option>
                                                            <option>Glass Product</option>
                                                            <option>Glass Product</option>
                                                            <option>Glass Product</option>
                                                            <option>Glass Product</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" required="required" class="custom-control-input"
                                                        id="customControlInline" />
                                                    <label class="custom-control-label" for="customControlInline">Logistics is generally the
                                                        detailed organization and implementation of a complex operation. In a general
                                                        business sense, logistics is the management of the flow of things between the point
                                                        of origin and the point</label>
                                                </div>
                                            </div>
                                            <button class="btn f-left prevBtn-2 btn-success" type="button">Previous</button>
                                            <button class="btn f-right nextBtn-2 btn-success" type="button"><span></span>
                                                Booking</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header