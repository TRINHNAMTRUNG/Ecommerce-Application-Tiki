import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Modal, Button } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStore, faChevronRight, faTruck } from '@fortawesome/free-solid-svg-icons';
import { removeProductFromCart } from '../../services/cartService';
import { useSelector } from 'react-redux';
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
};

const ShoppingCart = ({ cartItems, setSubtotal }) => {
    console.log("DITTTTTTTTTTTTTTTTTTTTTTTT CMMMMMMMMMM                   ", cartItems);
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [cart, setCart] = useState(cartItems ? cartItems : []);
    const [inputValue, setInputValue] = useState(""); // Giá trị nhập vào
    const [currentProductIndex, setCurrentProductIndex] = useState(null);
    const [currentSellerIndex, setCurrentSellerIndex] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const customer = useSelector((state) => state.auth.user);
    useEffect(() => {
        let total = 0;
        cart.forEach((seller) => {
            seller.listProduct.forEach((product) => {
                if (product.checked) {
                    total += (product.price * 0.45) * product.itemsQty;
                }
            });
        });
        console.log("PRICEEEEEEEE  ", total);
        setSubtotal(total);
    }, [cart])

    const handleCheckAll = () => {
        const newCheckedState = !isAllChecked;
        setIsAllChecked(newCheckedState);
        const updatedCart = cart.map((seller) => ({
            ...seller,
            listProduct: seller.listProduct.map((product) => ({
                ...product,
                checked: newCheckedState,
            })),
        }));
        setCart(updatedCart);
    };

    const handleOpenModal = (indexProduct, indexSeller, quantity) => {
        console.log("QUANTITY  ", quantity)
        setInputValue(quantity);
        setCurrentProductIndex(indexProduct);
        setCurrentSellerIndex(indexSeller);
        setIsModalVisible(true);
    };
    const handleUpdateQuantity = () => {
        if (inputValue > 0) {
            const newCart = [...cart];
            const productNeedUpdate = newCart[currentSellerIndex].listProduct[currentProductIndex];
            newCart[currentSellerIndex].listProduct[currentProductIndex] = { ...productNeedUpdate, itemsQty: inputValue }
            setCart(newCart);
            setIsModalVisible(false);
        }
    };
    const handleUpdateIncDecQuantity = (inputValue, type, indexProduct, indexSeller) => {
        console.log("AAA DUUUU MA NO ", inputValue)
        const newCart = [...cart];
        const productNeedUpdate = newCart[indexSeller].listProduct[indexProduct];
        let newQty = inputValue;
        if (type === "Dec" && inputValue - 1 !== 0) {
            newQty -= 1;
        } else if (type === "Inc") {
            newQty += 1;
        }
        console.log("AAA CAI DAU XANH NO ", newQty)
        newCart[indexSeller].listProduct[indexProduct] = { ...productNeedUpdate, itemsQty: newQty }
        setCart(newCart);
    };
    const handleProductCheck = (sellerIndex, productIndex) => {
        const updatedCart = [...cart];
        const product = updatedCart[sellerIndex].listProduct[productIndex];
        product.checked = !product.checked;

        const allChecked = updatedCart.every((seller) =>
            seller.listProduct.every((product) => product.checked)
        );
        setCart(updatedCart);
        setIsAllChecked(allChecked);
    };
    const handleRemoveProduct = async (productIndex, sellerIndex) => {
        try {
            const updatedCart = [...cart];
            const productNeedDelete = updatedCart[sellerIndex].listProduct[productIndex];
            const dataDelete = {
                product: productNeedDelete._id,
                customer: customer._id
            };
            const result = await removeProductFromCart(dataDelete);
            if (result.success) {
                updatedCart[sellerIndex].listProduct.splice(productIndex, 1);
                setCart(updatedCart);
            }
            console.log("DELLXOA")
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm trong giỏ:", error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Nhập số lượng {inputValue}</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={String(inputValue)}
                            onChangeText={(value) => setInputValue(value)}
                        />
                        <View style={styles.modalButtons}>
                            <Button title="Hủy" onPress={() => setIsModalVisible(false)} />
                            <Button title="Đồng ý" onPress={handleUpdateQuantity} />
                        </View>
                    </View>
                </View>
            </Modal>
            {cart.map((seller, sellerIndex) => (
                <View key={`seller-${seller.selerId}`}>
                    <View style={styles.headershop}>
                        <CheckBox checked={isAllChecked} onPress={handleCheckAll} />
                        <FontAwesomeIcon icon={faStore} style={styles.icon} color="blue" />
                        <Text style={styles.label}>{seller.nameStore}</Text>
                        <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
                    </View>
                    {seller.listProduct.map((product, productIndex) => (
                        <View key={productIndex} style={[styles.container, styles.productBorder]}>
                            <View style={styles.product}>
                                <CheckBox
                                    checked={product.checked || false}
                                    onPress={() => handleProductCheck(sellerIndex, productIndex)}
                                />
                                <Image
                                    style={styles.image}
                                    source={{ uri: product.images[0] }}
                                />
                                <View style={styles.productDetails}>
                                    <View style={styles.badges}>
                                        <Text style={styles.badgeOfficial}>CHÍNH HÃNG</Text>
                                        <Text style={styles.badgeReturn}>30 NGÀY ĐỔI TRẢ</Text>
                                    </View>
                                    <Text style={styles.title}>{product.name}</Text>
                                    <Text>
                                        <Text style={styles.price}>{formatCurrency(product.price * 0.45)}₫</Text>
                                        <Text style={styles.originalPrice}>{formatCurrency(product.price)}₫</Text>
                                    </Text>
                                    <View style={styles.delivery}>
                                        <FontAwesomeIcon icon={faTruck} />
                                        <Text>Giao chiều mai</Text>
                                    </View>
                                    <Text style={styles.bookcare}>Chưa áp dụng khuyến mãi</Text>
                                    <View style={styles.quantityContainer}>
                                        <View style={styles.quantity}>
                                            <TouchableOpacity style={styles.quantityButton} onPress={() => handleUpdateIncDecQuantity(product.itemsQty, "Dec", productIndex, sellerIndex)}>
                                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>-</Text>
                                            </TouchableOpacity>
                                            {/* <TextInput style={styles.quantityInput} value={product.itemsQty} /> */}
                                            <TouchableOpacity onPress={() => handleOpenModal(productIndex, sellerIndex, product.itemsQty)}>
                                                <Text style={styles.quantityInput}>
                                                    {product.itemsQty}
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.quantityButton} onPress={() => handleUpdateIncDecQuantity(product.itemsQty, "Inc", productIndex, sellerIndex)}>
                                                <Text style={{ fontSize: 16, }}>+</Text>
                                            </TouchableOpacity>
                                        </View>

                                        {/* Nút "Xóa" nằm bên phải */}
                                        <TouchableOpacity onPress={() => handleRemoveProduct(productIndex, sellerIndex)} style={styles.removeButton}>
                                            <Text style={styles.remove}>Xóa</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.bookcare}>Còn 5 sản phẩm</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            ))}

            {/* PromoComponent content here */}
            <View style={styles.container}>
                <View style={styles.promoCode}>
                    <Icon name="tag" type="font-awesome" size={20} color="#007bff" style={styles.icon} />
                    <Text style={styles.text}>Thêm mã khuyến mãi của Shop</Text>
                    <Icon name="chevron-right" type="font-awesome" size={16} color="#888" />
                </View>
                <View style={styles.freeship}>
                    <Text style={styles.title}>
                        FREESHIP XTRA{' '}
                        <Icon name="info-circle" type="font-awesome" size={14} color="#007bff" />
                    </Text>
                    <Text style={styles.info}>
                        Freeship 15k đơn từ 45k, Freeship 70k đơn từ 100k
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingTop: 10,
    },
    headershop: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    icon: {
        marginRight: 10,
    },
    label: {
        paddingRight: 10,
        fontWeight: 'bold',
    },
    productBorder: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    promo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    link: {
        color: '#007bff',
    },
    product: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
    },
    badges: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    badgeOfficial: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: 4,
        borderRadius: 4,
        marginRight: 4,
        fontSize: 12,
        textAlign: 'center'
    },
    badgeReturn: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: 4,
        borderRadius: 4,
        fontSize: 12,
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    price: {
        fontSize: 18,
        color: '#d9534f',
        marginRight: 5,
    },
    originalPrice: {
        fontSize: 14,
        textDecorationLine: 'line-through',
        color: '#999',
    },
    delivery: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    bookcare: {
        color: '#888',
        fontSize: 12,
    },
    quantityContainer: {
        flexDirection: 'row', // Để các phần tử nằm ngang
        justifyContent: 'space-between', // Tách đều các phần tử
        alignItems: 'center', // Canh giữa dọc
        width: '100%',
    },
    quantity: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, // Đặt độ rộng cho đường viền
        borderColor: '#ccc', // Đặt màu cho đường viền (khung)
        borderRadius: 4, // Đặt bo góc nếu cần
    },

    quantityButton: {
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        marginHorizontal: 5,
        borderRadius: 4,

    },
    quantityInput: {
        width: 30,
        textAlign: 'center',
        fontSize: 16,
    },
    removeButton: {
        marginLeft: 10, // Khoảng cách giữa nút xóa và các phần tử khác
        justifyContent: 'center',
    },
    remove: {
        marginTop: 10,
        color: 'blue',
        fontSize: 14,
    },
    promoCode: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    text: {
        flexGrow: 1,
    },
    freeship: {
        padding: 10,
    },
    info: {
        color: '#555',
        marginBottom: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default ShoppingCart;
