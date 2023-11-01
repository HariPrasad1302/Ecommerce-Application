import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";

export default function EditProductPage(){
    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() =>{
        if(!id){
            return;
        }
        axios.get('/api/products?id='+id).then(response => {
             setProductInfo(response.data);
        });
    }, [id]);
    console.log({router});
    return(
        <Layout>
                    <h2 class=" font-medium text-2xl">Edit Product</h2>

            {productInfo && (
            <ProductForm {...productInfo}/>
            )}
            
        </Layout>
    )
}