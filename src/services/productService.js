


import axios from "../utils/customAxios"


const getListTopDeal = async (page, isShowLoading) => {
    const limit = 8;
    try {
        const response = await axios.get(
            `product/top-deal?limit=${limit}&page=${page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                showLoading: isShowLoading
            }
        );
        return response;
    } catch (error) {
        console.error("Error fetching category data:", error);
        throw error;
    }
};
const getListTopDealNew = async (page, isShowLoading) => {
    const limit = 8;
    try {
        const response = await axios.get(
            `product/top-deal-new?limit=${limit}&page=${page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                showLoading: isShowLoading
            }
        );
        return response;
    } catch (error) {
        console.error("Error fetching category data:", error);
        throw error;
    }
};
const getListTopDealBook = async (page, isShowLoading) => {
    const limit = 8;
    try {
        const response = await axios.get(
            `product/top-deal-book?limit=${limit}&page=${page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                showLoading: isShowLoading
            }
        );
        return response;
    } catch (error) {
        console.error("Error fetching category data:", error);
        throw error;
    }
};
const getSearchProduct = async (name, page, isShowLoading) => {
    const limit = 8;
    try {
        const response = await axios.get(
            `product/search?name=${name}&limit=${limit}&page=${page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                showLoading: isShowLoading
            }
        );
        return response;
    } catch (error) {
        console.error("Error fetching category data:", error);
        throw error;
    }
};


export {
    getListTopDeal,
    getListTopDealBook,
    getListTopDealNew,
    getSearchProduct
}