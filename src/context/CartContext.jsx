import { data } from "autoprefixer";
import { createContext,useState,useEffect } from "react";
export const CartContext = createContext()
 export const CartProvider = ({children})=>{
    const data =  [ 
        {
        id:1,
        price:"15.000",
        category : "ice", 
        name : "Cone Combo"},]
    const [cart,setCart]= useState(() => {
        // Load cart from localStorage
        const savedCart = localStorage.getItem('MyCart');
        return savedCart ? JSON.parse(savedCart) : [];
    })
    useEffect(() => {
        localStorage.setItem('MyCart', JSON.stringify(cart));
    }, [cart]);
    const AddToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
            if (existingItem) {
                // Jika item sudah ada, perbarui jumlahnya
                return prevCart.map((cartItem) =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + 1,total:parseFloat(cartItem.total) + parseFloat(cartItem.price) }
                        : cartItem
                );
            }
            // Jika item baru, tambahkan ke cart
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const removeItem = (id) => {
        setCart(prevItems => prevItems.filter(item => item.id !== id));
    };

    const totalPrice=()=>{
        const total =cart.map(e=>parseFloat(e.total))
        if (cart.length == 0) return 0
        const totalPrice = total.reduce((a,b)=>{
            return a+b
        })
        return totalPrice
    }
    return(
        <CartContext.Provider  value={{cart,setCart,AddToCart,removeItem,totalPrice}}>
            {children}
        </CartContext.Provider >
    )
}

