import { maiorCmsApiClient, ApiVersion } from "../src";

async function example() {
  const api = maiorCmsApiClient({
    sandbox:true,
    host:'localhost:3001',
    version:ApiVersion.July24
  })
  await api.auth()
  
  api.authentication.me().then(v => console.log(v.Customer?.DashboardAccess)).catch(e => console.log(e))
}

example()