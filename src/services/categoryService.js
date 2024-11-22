import axios from "../utils/customAxios"


const getListRootCategory = async() => {
    try {
        const response = await axios.get("category/root", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response; // Trả về phần dữ liệu mà bạn cần
    } catch (error) {
        console.error("Error fetching category data:", error);
        return { success: false }; // Đảm bảo trả về một đối tượng với `success` nếu có lỗi
    }
};
const getLeafCategory = (categories) => {
    let leafCategories = [];

    categories.forEach((category) => {
        // Kiểm tra xem danh mục có children không, nếu có thì tiếp tục đệ quy
        if (category.children && category.children.length > 0) {
            leafCategories = [...leafCategories, ...getLeafCategory(category.children)];
        } else {
            // Nếu không có children, thêm vào danh mục lá
            leafCategories.push(category);
        }
    });

    return leafCategories; // Trả về danh mục lá
};
export {
    getListRootCategory,
    getLeafCategory
}