import axios from "axios";
import React from "react";

const post = async (url,params) => {
    let token = localStorage.getItem('token')
    try {
        const response = await axios.post(url,params, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json'
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
export default post;