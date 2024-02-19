import {Product} from "@/types"
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
// const URL = `http://localhost:3000/api/25568edc-9181-489a-a99a-fe5ad3ff7ce4/products`;

const getProduct = async (id: String) => {
  const res = await fetch(`${URL}/${id}`);
  try {
    const res = await axios.get(`${URL}/${id}`);
    console.log(res.data, "RESPONSE___PRODUCT");
    return res.data;
  } catch (error: any) {
    console.log(error, "RESPONSE_____FETCH");
    return error?.response?.data || null;
  }
};




export default getProduct;
