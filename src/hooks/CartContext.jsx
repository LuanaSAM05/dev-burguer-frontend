import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    
    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex(
            (prd) => prd.id === product.id
        );

        let newProductsInCart = [...cartProducts];

        if (cartIndex >= 0) {
            newProductsInCart[cartIndex] = {
                ...newProductsInCart[cartIndex],
                quantity: newProductsInCart[cartIndex].quantity + 1
            };
        } else {
            newProductsInCart.push({ ...product, quantity: 1 });
        }

        setCartProducts(newProductsInCart);
        updateCartProducts(newProductsInCart);
    };

    
    const clearCart = () => {
        setCartProducts([]);
        updateCartProducts([]);
    };

    
    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter(
            (prd) => prd.id !== productId
        );

        setCartProducts(newCart);
        updateCartProducts(newCart);
    };

   
    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) =>
            prd.id === productId
                ? { ...prd, quantity: prd.quantity + 1 }
                : prd
        );

        setCartProducts(newCart);
        updateCartProducts(newCart);
    };

    
    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex(
            (prd) => prd.id === productId
        );

        if (cartProducts[cartIndex]?.quantity > 1) {
            const newCart = cartProducts.map((prd) =>
                prd.id === productId
                    ? { ...prd, quantity: prd.quantity - 1 }
                    : prd
            );

            setCartProducts(newCart);
            updateCartProducts(newCart);
        } else {
            deleteProduct(productId);
        }
    };

    
    const updateCartProducts = (products) => {
        localStorage.setItem(
            "devburguer:cartInfo",
            JSON.stringify(products)
        );
    };

    
    useEffect(() => {
        const clientCartData = localStorage.getItem(
            "devburguer:cartInfo"
        );

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);

    
    const cartQuantity = cartProducts.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                cartQuantity, 
                putProductInCart,
                clearCart,
                deleteProduct,
                increaseProduct,
                decreaseProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a context");
    }

    return context;
};