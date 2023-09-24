import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import get from "../../services/get";
import { File } from "react-feather";

const Order = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [meta, setMeta] = useState([])
    useEffect(() => { getOrders() }, [])
    const getOrders = (value = false) => {
        get(`https://api.zemlog.com/api/user/shipments?page=${value ? value : page}`,).then(res => {
            setData(res.data)
            setMeta(res.meta.pagination)
        }
        ).catch(err => console.log(err))
    }
    const handleButtonClick = (value) => {
        const imageSrc = value;
        const newTab = window.open();
        newTab.document.body.innerHTML = `<img src="${imageSrc}" />`;
    };
    console.log(meta);
    return (
        <div>
            <Header />
            <div className="m-4 border rounded shadow-lg p-5">
                <form className=" p-5 m-1">
                    <div class="relative overflow-x-auto sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Gönderen
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Fiyat
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Takip Numarasi
                                    </th>
                                    <th scope="col" class="px-6 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => {
                                    return (
                                        <tr class="bg-white  dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.user.firstName}
                                            </th>
                                            <td class="px-6 py-4">
                                                {item.totalCharges.MonetaryValue}-{item.totalCharges.CurrencyCode}
                                            </td>
                                            <td class="px-6 py-4">
                                                <a target="_blank" href={`https://www.ups.com/track?loc=tr_TR&tracknum=${item.trackingNumber}&requester=WT/trackdetails`} style={{ fontWeight: 'bold', fontSize: 16, cursor: 'pointer' }}> {item.trackingNumber}</a>
                                            </td>
                                            <td class="px-6 py-4">
                                                <File size={18} style={{ cursor: 'pointer' }} onClick={async () => {
                                                    await get(`https://api.zemlog.com/api/user/shipments-label?trackNumber=${item.trackingNumber}`, localStorage.getItem('token')).then(res => {
                                                        handleButtonClick(res.base64_image_file)
                                                    })
                                                }} />
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                </form>
                <div className="d-flex justify-content-center ">
                    <ul class="inline-flex -space-x-px text-sm">
                        <li>
                            <button
                                onClick={() => {
                                    if (page > 1) {
                                        setPage(page - 1)
                                        getOrders(page - 1)
                                    }
                                    else {
                                        return
                                    }
                                }}
                                class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Önceki</button>
                        </li>
                        <li>
                            <p class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</p>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    if (page < meta.total_pages) {
                                        setPage(page + 1)
                                        getOrders(page + 1)
                                    } else {
                                        return
                                    }
                                }}
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Sonraki</button>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Order;