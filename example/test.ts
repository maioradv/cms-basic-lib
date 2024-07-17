import { createReadStream } from "fs";
import { maiorCmsApiClient, ApiVersion } from "../src";
import { join } from "path";

async function example() {
  const api = maiorCmsApiClient({
    sandbox:true,
    host:'localhost:3001',
    version:ApiVersion.July24,
    credentials:{
      apiToken:'9cc62cbe-73ba-4450-a84c-4f2b55e0fd2c'
    }
  })
  await api.auth()

  /*const res = await api.collections.createImage(1,{
    file: createReadStream(join(__dirname,'Immagine2.png')),
    locale:'it',
    position:11
  })
  console.log(res)
  //await api.images.remove(3)*/

  api.collections.findAllProducts(1,{
    where:{
      productAttributeValueId:[1,2]
    }
  }).then(v => console.log(v.data))
  await api.collections.createProduct(2,{
    productId:1
  })
  
}

example()