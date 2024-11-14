


import axios from "../utils/customAxios"


const getListTopDeal = async () => {
    try {
        const response = await axios.get("product/top-deal?limit=8&page=1", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response;  // Trả về phần dữ liệu mà bạn cần
    } catch (error) {
        console.error("Error fetching category data:", error);
        return { success: false };  // Đảm bảo trả về một đối tượng với `success` nếu có lỗi
    }
};


export {
    getListTopDeal
}