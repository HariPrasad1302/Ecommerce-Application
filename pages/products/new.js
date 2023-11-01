
import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";

export default function NewProduct(){
    return (
      <Layout>
        <h2 class=" font-medium text-2xl">New Product</h2>
        <ProductForm/>
      </Layout>
    )
}