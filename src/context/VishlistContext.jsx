import { createContext, useContext, useEffect, useState } from "react";


export const WishistContext = createContext();


export const WishlistContextProvider = ({ children }) => {

    // const [products, setProducts] = useState(localStorage.getItem("wishlistitems") ? Array.from(JSON.parse(localStorage.getItem("wishlistitems")).map((ele, obj) => ele)) : [])

    // console.log(Array.isArray(products),);

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
        let prevProducts = products;
        prevProducts.push(obj)

        setProducts(prevProducts)

        // console.log(typeof products)

        // console.log('the products is', products)
        localStorage.setItem("wishlistitems", JSON.stringify(products));
    }

    const removeProduct = (id, index) => {
        let prevProducts = products
        // let prevProducts = []
        // setProducts(prevProducts.splice(index, 1))
        setProducts(prevProducts.forEach((ele, ind) => ele.id == id ? prevProducts.splice(ind, 1) : prevProducts))
        console.log(prevProducts);
        localStorage.setItem("wishlistitems", JSON.stringify(products))
    }

    const getProduct = id => {

        if (products.length <= 0) return false;
        else {
            const prev = products;



            const checExists = prev.map(ele => ele.id == id);


            // console.log(checExists)
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
        getProduct,
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

