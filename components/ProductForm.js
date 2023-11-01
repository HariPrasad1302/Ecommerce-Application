import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";


export default function ProductForm({
    _id,
  title: existingTitle,
  descriptions: existingDescriptions,
  price: existingPrice,
}) {
    const [title, setTitle] = useState(existingTitle || '');
    const [descriptions, setDescriptions] = useState( existingDescriptions || '');
    const [price, setPrice] = useState( existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
    console.log(_id);
    async function saveProduct(ev){
        ev.preventDefault();
        const data = {title, descriptions, price};
        if(_id){
            await axios.put('/api/products', {...data, _id});

        }else{
        
        await axios.post('/api/products', data);
        }
        setGoToProducts(true);
        
    }
    if(goToProducts){
      router.push('/products');
    }

    return(
            <div class="min-h-screen p-6 bg- flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>


      <div class="bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 mb-12">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2">
            <form onSubmit={saveProduct}>
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Product Name</label>
                <input type="text" name="product_name"  
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                placeholder="Enter the product name" 
                value={title}

                onChange={ev => setTitle(ev.target.value)} />
              </div>

              <div class="md:col-span-5">
                <label for="email">Descriptions</label>
                <textarea  rows="4" 
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter the product details"
                    value={descriptions}
                    
                    onChange={ev => setDescriptions(ev.target.value)}>
                </textarea>              
              </div>

              <div class="md:col-span-2">
                <label for="address">Price</label>
                <input type="text" 
                name="price"  
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                value={price}
                
                placeholder="Enter the product price"
                onChange={ev => setPrice(ev.target.value)} />
              </div>

              
      
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                </div>
              </div>

            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>


  </div>
</div>
    )
}
