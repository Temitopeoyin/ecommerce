import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
// const URL = `http://localhost:3000/api/25568edc-9181-489a-a99a-fe5ad3ff7ce4/billboards`;

const fetchBillboard = async (id: String) => {
  const res = await fetch(`${URL}/${id}`);
  try {
    const res = await axios.get(`${URL}/${id}`);
    console.log(res.data, "RESPONSE___BILLBOARD");
    return res.data;
  } catch (error: any) {
    console.log(error, "RESPONSE_____FETCH");
    return error?.response?.data || null;
  }
};

export default fetchBillboard;
