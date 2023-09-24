import React from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const Tracking = () => {
    const navigate = useNavigate()
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return (
        <div>
            <Header />
            <main>
                <div class="tracking-area pt-95 pb-115">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-8 col-lg-10">
                                <div class="tracking-id-info text-center">
                                    <p>Enter Your Cargo Tracking, Door to Door Office <a href="#">Order Number.</a></p>
                                    <form action="#" class="tracking-id-form">
                                        <input type="text" placeholder="Tracking id" defaultValue={id} />
                                        <button class="btn red-btn">Tracking</button>
                                    </form>
                                    <div class="tracking-list">
                                        <ul>
                                            <li > 
                                                <div class="tracking-list-icon">
                                                    <i class="flaticon-box"></i>
                                                </div>
                                                <div class="tracking-list-content">
                                                    <p>Dispatch</p>
                                                </div>
                                            </li>
                                            <li class="active">
                                                <div class="tracking-list-icon">
                                                    <i class="flaticon-warehouse"></i>
                                                </div>
                                                <div class="tracking-list-content">
                                                    <p>departed country</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tracking-list-icon">
                                                    <i class="flaticon-placeholder"></i>
                                                </div>
                                                <div class="tracking-list-content">
                                                    <p>Destination</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tracking-list-icon">
                                                    <i class="flaticon-audit"></i>
                                                </div>
                                                <div class="tracking-list-content">
                                                    <p>Successful</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tracking-help">
                                        <p>MULTIPLE TRACKING NUMBERS | <a href="#">NEED HELP?</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Tracking;