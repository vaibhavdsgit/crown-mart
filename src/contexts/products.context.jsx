import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocumnents } from "../utils/firebase/firebase.utils";

// import PRODUCTS from "../shop-data.json";
import SHOP_DATA from '../shop-data';


export const ProductsContext = createContext({
    products:[], 
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocumnents();
            console.log(categoryMap);
        };
        getCategoriesMap();
    }, [])

    const value = {products};
    return(
        <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
    )
}