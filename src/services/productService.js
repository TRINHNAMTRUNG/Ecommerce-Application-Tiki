


import axios from "../utils/customAxios"


const getListTopDeal = async () => {
    let limit = 8;
    let page = 1;
    try {
        const response = await axios.get(
            `product/top-deal?limit=${limit}&page=${page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
        );
        return response;
    } catch (error) {
        console.error("Error fetching category data:", error);
        return error;
    }
};
const getListTopDealBook = async () => {
    let limit = 8;
    let page = 1;
    try {
        const response = await axios.get(
            `product/top-deal-book?limit=${limit}&page=${page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
        );
        return response;
    } catch (error) {
        console.error("Error fetching category data:", error);
        return error;
    }
};


export {
    getListTopDeal,
    getListTopDealBook
}