import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage(){
    const router = useRouter();
    const [productInfo, setProductInfo] = useState();
    const {id} = router.query;

    useEffect(() =>{
        if(!id){
            return;
        }
        axios.get('/api/products?id='+id).then(response =>{
            setProductInfo(response.data);
        });
    }, [id]);
    function goBack(){
        router.push('/products');
    }

    return (
        <Layout>
            <h1>Do you really want to delete &nbsp; "{productInfo?.title}" ? </h1>
            
            <button className="bg-red-500 mr-1 rounded-md text-white text-sm inline-flex gap-1 py-1 px-2">Yes</button>
            <button className="bg-blue-900 rounded-md text-white text-sm inline-flex gap-1 py-1 px-2" onClick={goBack}>No</button>
        </Layout>
    )
}