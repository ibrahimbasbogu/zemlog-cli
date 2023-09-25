import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { MinusSquare, PlusSquare } from "react-feather";
import post from "../../services/post";
import get from "../../services/get";

import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const CreateConsignment = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState(1);
    const [countryList, setCountryList] = useState([])
    const [stateListTo, setStateListTo] = useState([])
    const [stateListFrom, setStateListFrom] = useState([])
    const [form, setForm] = useState({
        'shipTo': {
            'name': '',
            'address': '',
            'city': '',
            'state': '',
            'code': '',
            'country': '',
            'phone': '',
            'email': '',
        },
        'shipFrom': {
            'name': '',
            'address': '',
            'city': '',
            'state': '',
            'code': '',
            'country': '',
            'phone': '',
            'email': '',
        },
        'currency': '',
        'desc': '',
        'referanceNumber': '',
        'weight': '',
        'width': '',
        'length': '',
        'height': '',
        'packageNumber': number
    })
    const [products, setProducts] = useState([
        {
            'productContent': '',
            'numberOfProducts': '',
            'unitPrice': '',
            'skuCode': '',
            'hsCode': '',
        }
    ])
    const [load, setLoad] = useState(false)
    useEffect(() => {
        getCountryList()
        setLoad(true)
    }, [])
    const handleIncrement = () => {
        setNumber(number + 1);
        setForm({
            ...form,
            packageNumber: number + 1
        });
    };

    const handleDecrement = () => {
        if (number > 1) {
            setNumber(number - 1)
            setForm({
                ...form,
                packageNumber: number - 1
            });
        }
    };

    const addProductButton = () => {
        setProducts([...products,
        {
            'productContent': '',
            'numberOfProducts': '',
            'unitPrice': '',
            'skuCode': '',
            'hsCode': '',
        }])
    }
    const handleProduct = (event, index1) => {
        const { name, value, id } = event.target;
        let obj = products[index1]
        obj = {
            ...obj,
            [name || id]: value,
        }
        let arr = products
        let miniArr = []
        setProducts(arr?.map((item, index) => {
            if (index == index1) {
                miniArr.push(obj)
            }
            else {
                miniArr.push(item)
            }
        }))
        setProducts(miniArr)
    }
    const handleInput = (event) => {
        const { name, value, id } = event.target;

        let innerObjName = name.split('.')[0]
        let innerObjNameDataName = name.split('.')[1]
        let innerObjNameDataId = id.split('.')[1]

        if (innerObjName == 'shipFrom') {
            setForm({
                ...form,
                shipFrom: {
                    ...form.shipFrom,
                    [innerObjNameDataName || innerObjNameDataId]: value,
                },
                packageNumber: number
            });
        } else if (innerObjName == 'shipTo') {
            setForm({
                ...form,
                shipTo: {
                    ...form.shipTo,
                    [innerObjNameDataName || innerObjNameDataId]: value,
                },
                packageNumber: number
            });
        }
        else {
            setForm({
                ...form,
                [name || id]: value,
                packageNumber: number
            });
        }
    }
    const objHelperForService = () => {
        let obj = {
            "ShipmentRequest": {
                "Shipment": {
                    "Description": form.desc,
                    "ShipTo": {
                        "Name": form.shipTo.name,
                        "AttentionName": "1160b_74",
                        "Phone": {
                            "Number": form.shipTo.phone
                        },
                        "Address": {
                            "AddressLine": form.shipTo.address,
                            "City": form.shipTo.city,
                            "StateProvinceCode": form.shipTo.state,
                            "PostalCode": form.shipTo.code,
                            "CountryCode": form.shipTo.country
                        },
                        "Residential": ""
                    },
                    "ShipFrom": {
                        "Name": form.shipFrom.name,
                        "AttentionName": "1160b_74",
                        "Phone": {
                            "Number": form.shipFrom.phone
                        },
                        "FaxNumber": "1234567890",
                        "Address": {
                            "AddressLine": form.shipFrom.address,
                            "City": form.shipFrom.city,
                            "StateProvinceCode": form.shipFrom.state,
                            "PostalCode": form.shipFrom.code,
                            "CountryCode": form.shipFrom.country
                        }
                    },
                    "Package": {
                        "Description": " ",
                        "Packaging": {
                            "Code": "02",
                            "Description": "Nails"
                        },
                        "Dimensions": {
                            "UnitOfMeasurement": {
                                "Code": "CM",
                                "Description": "Centimeter"
                            },
                            "Length": form.length,
                            "Width": form.width,
                            "Height": form.height
                        },
                        "PackageWeight": {
                            "UnitOfMeasurement": {
                                "Code": "KGS",
                                "Description": "Pounds"
                            },
                            "Weight": form.weight
                        }
                    }
                }
            }
        }

        return obj
    }
    const handleCreateOrder = () => {
        post("https://api.zemlog.com/api/user/shipments", objHelperForService()).
            then(async (res) => {
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Gonderi Basariyla Olusturuldu',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/orders')
            }).catch(err => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: err.response.data.response.errors[0].message,
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }
    const deleteButton = (id) => {
        let arr = products
        let miniArr = []
        arr?.map((item, index) => {
            if (index != id) {
                miniArr.push(item)
            }
        })
        setProducts(miniArr)
    }
    const getCountryList = () => {
        get(`https://api.zemlog.com/api/country`).then(res => {
            console.log(res)
            setCountryList(res)
        })
    }
    const getStateListTo = (data) => {
        get(`https://api.zemlog.com/api/state?country_id=${data}`).then(res => {
            setStateListTo(res)
        })
    }
    const getStateListFrom = (data) => {
        get(`https://api.zemlog.com/api/state?country_id=${data}`).then(res => {
            setStateListFrom(res)
        })
    }
    return (
        load && <div className="d-flex flex-column">
            <Header />
            <div className="m-4 border rounded shadow-lg p-5">
                <form className="border rounded shadow-md p-5 m-1">
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipFrom.name} onChange={handleInput} name="shipFrom.name" id="shipFrom.name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="shipFrom.name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gönderen İsim</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipFrom.address} onChange={handleInput} name="shipFrom.address" id="shipFrom.address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="shipFrom.address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gönderen Adres</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipFrom.city} onChange={handleInput} name="shipFrom.city" id="shipFrom.city" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="shipFrom.city" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gönderen Mahalle</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <label for="shipFrom.state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gönderen Şehir</label>
                            <select id="shipFrom.state" name="shipFrom.state" disabled={form.shipFrom.country.length == 0} value={form.shipFrom.state} onChange={handleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {stateListFrom?.map(item => {
                                    return (
                                        <option value={item.iso}>{item.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipFrom.code} onChange={handleInput} name="shipFrom.code" id="shipFrom.code" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="shipFrom.code" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gönderen Posta Kodu</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <label for="shipFrom.country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gönderen Ülke</label>

                            <select id="shipFrom.country" name="shipFrom.country" value={form.shipFrom.country} onChange={(e) => {
                                let miniId = countryList.find(item => {
                                    if (item.iso == e.target.value) {
                                        return item.id
                                    }
                                })
                                handleInput(e)
                                getStateListFrom(miniId.id)

                            }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {countryList?.map(item => {
                                    return (
                                        <option value={item.iso}>{item.title}</option>
                                    )
                                })}
                            </select>

                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipFrom.phone} onChange={handleInput} name="shipFrom.phone" id="shipFrom.phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="shipFrom.phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gönderen Telefon</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="shipFrom.email" value={form.shipFrom.email} onChange={handleInput} id="shipFrom.email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="shipFrom.email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gönderen E-Mail</label>
                        </div>
                    </div>
                </form>
                <form className="border rounded shadow-md p-5 m-1">
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipTo.name} onChange={handleInput} name="shipTo.name" id="shipTo.name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alıcı İsim</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipTo.address} onChange={handleInput} name="shipTo.address" id="shipTo.address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alıcı Adres</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipTo.city} onChange={handleInput} name="shipTo.city" id="shipTo.city" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="city" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alıcı Mahalle</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <label for="shipTo.state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alıcı Şehir</label>
                            <select id="shipTo.state" name="shipTo.state" disabled={form.shipTo.country.length == 0} value={form.shipTo.state} onChange={handleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {stateListTo?.map(item => {
                                    return (
                                        <option value={item.iso}>{item.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipTo.code} onChange={handleInput} name="shipTo.code" id="shipTo.code" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="shipTo.code" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alıcı Posta Kodu</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ulke</label>

                            <select id="shipTo.country" name="shipTo.country" value={form.shipTo.country} onChange={(e) => {
                                let miniId = countryList.find(item => {
                                    if (item.iso == e.target.value) {
                                        return item.id
                                    }
                                })
                                handleInput(e)
                                getStateListTo(miniId.id)

                            }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {countryList?.map(item => {
                                    return (
                                        <option value={item.iso}>{item.title}</option>
                                    )
                                })}
                            </select>

                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={form.shipTo.phone} onChange={handleInput} name="shipTo.phone" id="shipTo.phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="shipTo.phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alıcı Telefon</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="shipTo.email" value={form.shipTo.email} onChange={handleInput} id="shipTo.email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="shipTo.email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alıcı E-Mail</label>
                        </div>
                    </div>
                </form>
                <form className="border rounded shadow-md p-5 m-1">
                    <div class="grid md:grid-cols-4 md:gap-6 align-items-center">
                        <div class="relative z-0 w-full mb-2 group">
                            <label for="currency" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Para Birimi
                            </label>
                            <select id="currency" value={form.currency} onChange={handleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value={'TL'}>TL</option>
                                <option value={'USD'}>USD</option>
                                <option value={'EURO'}>EURO</option>
                            </select>
                        </div>
                        <div class="relative z-0 w-full mb-6 group ml-4 mt-5">
                            <input type="desc" value={form.desc} onChange={handleInput} name="desc" id="desc" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="desc" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Siparis Açıklaması</label>
                        </div>
                    </div>
                    <div class="relative z-0 w-full mb-2 group">
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Ürün İçeriği

                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Urunlerin Numarasi
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Birim Fiyat
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Sku kodu
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            HS kodu
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            #
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.map((item, index) => {
                                        return (
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div class="relative z-0 w-full mb-6 group">
                                                        <input type="productContent" value={products[index]?.productContent} onChange={(event) => {
                                                            handleProduct(event, index)
                                                        }} name="productContent" id="productContent" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label for="productContent" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ürün İçeriği</label>
                                                    </div>
                                                </th>
                                                <td class="px-6 py-4">
                                                    <div class="relative z-0 w-full mb-6 group">
                                                        <input type="numberOfProducts" name="numberOfProducts" id="numberOfProducts" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label for="numberOfProducts" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Urunlerin Numarasi</label>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="relative z-0 w-full mb-6 group">
                                                        <input type="unitPrice" name="unitPrice" id="unitPrice" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label for="unitPrice" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birim Fiyat</label>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="relative z-0 w-full mb-6 group">
                                                        <input type="skuCode" name="skuCode" id="skuCode" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label for="skuCode" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sku Kodu</label>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="relative z-0 w-full mb-6 group">
                                                        <input type="hsCode" name="hsCode" id="hsCode" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label for="hsCode" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hs Kodu</label>
                                                    </div>
                                                </td>
                                                {index != 0 &&
                                                    <td class="px-6 py-4">
                                                        <div class="relative z-0 w-full mb-6 group">
                                                            <button type="button" onClick={() => deleteButton(index)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sil</button>
                                                        </div>
                                                    </td>
                                                }
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <button type="addProduct" onClick={addProductButton} class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ürün Ekle</button>
                        </div>
                    </div>
                </form>
                <form className="border rounded shadow-md p-5 m-1">
                    <div class="grid md:grid-cols-4 md:gap-6 align-items-center">
                        <div class="relative z-0 w-full mb-2 group">
                            <label class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Paket Numarası</label>
                            <div className="mt-4 number-input d-flex flex-row  aling-items-center">
                                <MinusSquare style={{ cursor: 'pointer' }} color="grey" onClick={handleDecrement} className="mr-2" />
                                <p>{number}</p>
                                <PlusSquare style={{ cursor: 'pointer' }} color="grey" onClick={handleIncrement} className="ml-2" />
                            </div>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-5 md:gap-6 align-items-center mt-3">
                        <div class="relative z-0 w-full mb-2 group">
                            <input type="referanceNumber" value={form.referanceNumber} onChange={handleInput} name="referanceNumber" id="referanceNumber" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="referanceNumber" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Referans Numarası</label>
                        </div>
                        <div class="relative z-0 w-full mb-2 group">
                            <input type="weight" value={form.weight} onChange={handleInput} name="weight" id="weight" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="wight" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ağırlık</label>
                        </div>
                        <div class="relative z-0 w-full mb-2 group">
                            <input type="width" value={form.width} onChange={handleInput} name="width" id="width" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="width" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Genişlik</label>
                        </div>
                        <div class="relative z-0 w-full mb-2 group">
                            <input type="length" value={form.length} onChange={handleInput} name="length" id="length" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="length" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Uzunluk</label>
                        </div>
                        <div class="relative z-0 w-full mb-2 group">
                            <input type="height" value={form.height} onChange={handleInput} name="height" id="height" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="height" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Yükseklik</label>
                        </div>
                    </div>
                </form>
                <div className="d-flex flex-row justify-content-center">
                    <button onClick={() => handleCreateOrder()} class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Gönderi Olustur</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default CreateConsignment;