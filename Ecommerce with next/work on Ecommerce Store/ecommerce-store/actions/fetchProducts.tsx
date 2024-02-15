import qs, { Stringifiable } from "query-string"

import { Product } from "@/types";

import axios from 'axios'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
// const URL = `http://localhost:3000/api/25568edc-9181-489a-a99a-fe5ad3ff7ce4/products`;

interface Query {
    // categoryId: String
    categoryId?: Stringifiable | readonly Stringifiable[];
    colorId?: Stringifiable | readonly Stringifiable[];
    sizeId?: Stringifiable | readonly Stringifiable[];
    isFeatured?: boolean
}

const fetchProducts = async (query: Query) =>{
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId:  query.colorId,
            sizeId:   query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured ? 1 : 0

        }
    })

    try {
        const res = await axios.get(URL)
        console.log(res.data, 'RESPONSE');
        return res.data;
    } catch (error) {
        
        console.log(error, 'RESPONSE_____FETCH');
    }
    
}

export default fetchProducts;