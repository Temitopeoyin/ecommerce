import { Category } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
const URL = `http://localhost:3000/api/25568edc-9181-489a-a99a-fe5ad3ff7ce4/categories`;

const getCategories = async (): Promise<Category[]> =>{
    const res = await fetch(URL)
    console.log(res.body, 'RESPONSE_____');
    return res.json();
}

export default getCategories;