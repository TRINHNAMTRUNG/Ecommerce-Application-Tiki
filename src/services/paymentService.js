


import axios from "../utils/customAxios"


const postPayment = async (dataPayment) => {
    try {
        const response = await axios.post(
            `/payment`,
            dataPayment,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

            }
        );
        return response;
    } catch (error) {
        console.error("Error handle payment:", error);
        throw error;
    }
};

export {
    postPayment
}