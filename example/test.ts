import { maiorCmsApiClient, ApiVersion } from "../src";

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
  
}

example()