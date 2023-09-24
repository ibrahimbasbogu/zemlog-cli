import axios from "axios";
import React from "react";

const get = async (url, params) => {
    let token = localStorage.getItem('token')
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
export default get;