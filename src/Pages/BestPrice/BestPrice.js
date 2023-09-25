import React, { useEffect, useState } from "react";
import { Table } from "react-feather";
import Header from "../../Components/Header";
import { Footer } from "flowbite-react";
import get from "../../services/get";
import post from "../../services/post";

const BestPrice = () => {
    const [priceType, setPriceType] = useState(1)
    const [user, setUser] = useState('*')
    let defObj = {
        "user": null,
        "eph": 1.0,
        "yakit": 1.0,
        "datas": [
            {
                "data": 0.25,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 0.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 1.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 2.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 2.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 3.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 3.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 4.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 4.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 5.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 5.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 6.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 6.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 7.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 7.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 8.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 8.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 9.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 9.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 10.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 11.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 12.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 13.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 14.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 15.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 16.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 17.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 18.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 19.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 20.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 21.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 22.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 23.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 24.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 25.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 26.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 27.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 28.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 29.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 30.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            }
        ],
        "raw_data": [
            {
                "data": 0.25,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 0.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 1.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 2.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 2.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 3.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 3.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 4.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 4.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 5.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 5.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 6.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 6.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 7.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 7.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 8.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 8.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 9.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 9.5,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 10.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 11.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 12.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 13.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 14.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 15.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 16.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 17.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 18.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 19.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 20.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 21.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 22.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 23.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 24.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 25.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 26.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 27.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 28.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 29.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            },
            {
                "data": 30.0,
                "bolge1": 1.0,
                "bolge2": 1.0,
                "bolge3": 1.0,
                "bolge4": 1.0,
                "bolge5": 1.0,
                "bolge6": 1.0,
                "bolge7": 1.0,
                "bolge8": 1.0,
                "bolge9": 1.0
            }
        ]
    }
    const [userList, setUserList] = useState([])
    const [obj, setObj] = useState({
    })
    const [ephValue, setEphValue] = useState(null)
    const [oldData,setOldData] = useState([])
    const [yakitEk, setYakitEk] = useState(null)
    const [load, setLoad] = useState(false)
    const [checkValue, setCheckValue] = useState(false)
    const [rawData, setRawData] = useState([])
    useEffect(() => {
        getPrices()
      //  getUserList()
    }, [priceType, user])
    const getUserList = () => {
        get(`https://api.zemlog.com/api/user`).then(res => {
            setUserList(res)
        })
    }
    const getPrices = (data = false) => {
        setLoad(false)
        let bigObj = {}
        let rawData = {}

        let url;
        if (user == '*') {
            url = `https://api.zemlog.com/api/best-price?type=${data ? data : priceType}`
        } else {
            url = `https://api.zemlog.com/api/best-price?type=${data ? data : priceType}&user_id=${Number(user)}`
        }
        get(url).then(async (res) => {
            if(!res){
                res=defObj
            }
            setEphValue(res?.eph)
            setYakitEk(res?.yakit)
            user ? setUser(user) : setUser('*')
            await res?.datas?.map(item => {
                let obj = { [item.data]: item }
                bigObj = { ...bigObj, ...obj }
            })
            await res?.raw_data?.map(item1 => {
                let obj1 = { [item1.data]: item1 }
                rawData = { ...rawData, ...obj1 }
            })
            setOldData(bigObj)
            setRawData(rawData)
            setObj(bigObj)
            renderObj(bigObj)
            setLoad(true)

        })
    }
    const updateDatas = () => {
        setLoad(false)
        setObj(rawData)
        renderObj(rawData)
        setLoad(true)

    }
    const backDatas = () => {
        setLoad(false)
        setObj(oldData)
        renderObj(oldData)
        setLoad(true)

    }
    const postPrices = () => {
        setLoad(false)
        let bigObj = {}

        post(`https://api.zemlog.com/api/best-price`, { datas: Object.values(obj), eph: Number(ephValue), yakit: Number(yakitEk), type: Number(priceType), user_id: user }).then(res => {
            setEphValue(res.eph)
            setYakitEk(res.yakit)
            setUser(user ? user : '*')
            res.datas?.map(item => {
                let obj = { [item.data]: item }
                bigObj = { ...bigObj, ...obj }
            })
            setObj(bigObj)
            renderObj(bigObj)
            setLoad(true)

        })

    }
    const renderObj = (obj1) => {
        return Object.keys(obj1)?.map((kgName, kgNameIndex) => {
            return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {Object.keys(obj1[kgName])?.map((kgValue, index) => {
                        return (
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input
                                    type="text"
                                    id={obj1[kgName][kgValue]}
                                    name={obj1[kgName][kgValue]}
                                    defaultValue={obj1[kgName][kgValue]}
                                    disabled={!checkValue}
                                    onChange={(e) => {
                                        setObj((prevObj) => ({
                                            ...prevObj,
                                            [kgName]: {
                                                ...prevObj[kgName],
                                                [kgValue]: Number(e.target.value)
                                            }
                                        }));

                                    }}
                                    style={{ minWidth: 50 }}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </td>
                        )
                    })}
                </tr>
            )
        })
    }
    return (
        load && <div>
            <Header />
            <div className="m-4 border rounded shadow-lg p-5">
                <div className="d-flex flex-row justify-content-between">
                    <div className="w-50">
                        <label for="firma"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Musteri Adi
                        </label>
                        <select id="small"
                            value={user}
                            onChange={(e) => {
                                if (e.target.value != '*') {
                                    setUser(Number(e.target.value))
                                } else {
                                    setUser(e.target.value)
                                }
                            }}
                            class="block w-25 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="*">Hepsi</option>
                            {userList?.map(item => {
                                return (
                                    <option value={item.id}>{item.first_name} {item.last_name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="w-50 d-flex justify-content-end align-items-center">
                        <div>
                            <button
                                hidden={!checkValue}
                                class="focus:outline-none mt-4  text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900"
                                onClick={() => {
                                    postPrices()
                                    setCheckValue(false)
                                }}>Kaydet
                            </button>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <label for={'changes'}>Duzenleme Modu</label>
                            <input id="changes" style={{ height: 30, width: 30 }} value={checkValue} onChange={(e) => {
                                console.log(checkValue);
                                setCheckValue(!checkValue)
                                if(!checkValue){
                                    updateDatas()
                                }else{
                                    backDatas()
                                }
                              
                            }} type="checkbox" />

                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row  w-50 ">
                    <div className="w-25 flex-column  align-items-center d-flex">
                        <label for="firma"
                            class="block  text-sm font-medium text-gray-900 dark:text-white">
                            Firma
                        </label>
                        <select id="small"
                            defaultValue={priceType}
                            onChange={(e) => {
                                setPriceType(e.target.value)
                            }}
                            class="block w-75 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value={1}>ZELO</option>
                            <option value={2}>SEH2</option>
                        </select>
                    </div>
                    <div className="w-25 d-flex flex-column  align-items-center">
                        <label>Yakit Ek Ucreti</label>
                        <input value={yakitEk} disabled={!checkValue} onChange={(e) => { setYakitEk(e.target.value) }} className="border rounded" type="text" />
                    </div>

                    <div className="w-25 d-flex flex-column align-items-center">
                        <label>EPH</label>
                        <input value={ephValue} disabled={!checkValue} onChange={(e) => { setEphValue(e.target.value) }} className="border rounded" type="text" />
                    </div>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                    <table key={checkValue} class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">

                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bolge 1
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bolge 2
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bolge 3
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bolge 4
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bolge 5
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bolge 6
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bolge 7
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bolge 8
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bolge 9
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderObj(obj)}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default BestPrice;