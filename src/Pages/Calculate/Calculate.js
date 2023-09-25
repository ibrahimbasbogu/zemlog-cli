import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import get from "../../services/get";
import post from "../../services/post";

const Calculate = () => {
    const [countryList, setCountryList] = useState([])
    const [desiValue, setDesiValue] = useState(0)
    const [resPrice, setResPrice] = useState(null)
    const [form, setForm] = useState({
        'country': '',
        'width': null,
        'length': null,
        'heigth': null,
        'weigth': null,
        'desi': null,
    })
    useEffect(() => { getCountryList() }, [])
    useEffect(() => { setDesi() }, [form])
    const getCountryList = () => {
        get(`https://api.zemlog.com/api/country`).then(res => {
            setCountryList(res.data)
        })
    }
    const handleInput = (event) => {
        const { name, value, id } = event.target;
        setForm({
            ...form,
            [name || id]: Number(value),
        });
    }
    const setDesi = () => {
        if (form.heigth && form.width && form.length) {
            setDesiValue(handleDesi())
        }
    }
    const handleDesi = () => {
        let value1 = (form.heigth * form.width * form.length) / 5000;
        let value2 = form.weigth
        return value1 > value2 ? value1 : value2
    }

    return (
        <div>
            <Header />
            <div className="m-4 border rounded shadow-lg p-5">
                <div class="relative z-0 w-full mb-6 group">
                    <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ship To Country</label>
                    <select id="country" value={form.country} onChange={handleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {countryList?.map(countryItem => {
                            return (
                                <option value={countryItem.id}>{countryItem.title}</option>
                            )
                        })}
                    </select>
                </div>
                <div class="grid md:grid-cols-5 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="width" value={form.width} onChange={handleInput} name="width" id="width" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="width" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Genislik</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="length" value={form.length} onChange={handleInput} name="length" id="length" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="length" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Uzunluk</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="heigth" value={form.heigth} onChange={handleInput} name="heigth" id="heigth" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="heigth" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Yükseklik</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="weigth" value={form.weigth} onChange={handleInput} name="weigth" id="weigth" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="weigth" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ağırlık</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="desi" disabled value={desiValue} name="desi" id="desi" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="desi" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Desi</label>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button onClick={() => get(`https://api.zemlog.com/api/get-offer?country_id=${form.country}&desi=${handleDesi()}`).then(res => {
                        setResPrice(res)
                    })} class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Hesapla</button>
                </div>
                {resPrice &&
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Kargo Sirketi
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Fiyat
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white  dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {resPrice.title}
                                </th>
                                <td class="px-6 py-4">
                                    {resPrice.price}
                                </td>
                                <td class="px-6 py-4">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
            <Footer />
        </div>
    )

}
export default Calculate;