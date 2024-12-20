import { createContext, useContext, useEffect, useState } from "react";


export const WishistContext = createContext();


export const WishlistContextProvider = ({ children }) => {



    const [products, setProducts] = useState(null)


    const fetchProducts = () => {
        if (localStorage.getItem("wishlistitems")) {
            setProducts(JSON.parse(localStorage.getItem("wishlistitems")))
        }
        else {
            setProducts([])
        }
    }


    const addProduct = obj => {
        // creating an copy of products state 
        let prevProducts = products;
        prevProducts.push(obj)
        
        setProducts(prevProducts)
        localStorage.setItem("wishlistitems", JSON.stringify(products));
    }

    const removeProduct = (id, index) => {
        // creating an copy of products state 
        let prevProducts = products
        
        setProducts(prevProducts.forEach((ele, ind) => ele.id == id ? prevProducts.splice(ind, 1) : prevProducts))
        localStorage.setItem("wishlistitems", JSON.stringify(products))
    }
    
    const checkProductIsSaveWishlist = id => {
        
        if (products.length <= 0) return false;
        else {
            // creating an copy of products state 
            const prev = products;



            const checExists = prev.map(ele => ele.id == id);

            if (checExists.includes(true)) {
                return true;
            }

            else {
                return false;
            }


        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    return <WishistContext.Provider value={{
        products,
        addProduct,
        removeProduct,
        checkProductIsSaveWishlist,
        fetchProducts
    }}>
        {children}
    </WishistContext.Provider>
}


export const useWishlist = () => {
    const wishlistCtxUsing = useContext(WishistContext);
    if (!wishlistCtxUsing) {
        throw new Error("outside of wishlist context")
    }
    else {
        return wishlistCtxUsing
    }
}

