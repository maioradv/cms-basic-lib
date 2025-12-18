import { createReadStream, writeFile } from "fs";
import { maiorCmsApiClient, ApiVersion, Gid, toGlobalId } from "../src";
import { join } from "path";
import Credentials from './credentials.json'

async function example() {
  const api = maiorCmsApiClient({
    disableCache:true,
    version:ApiVersion.October25,
    ...Credentials
  })
  await api.auth()
  api.configs.TiDelizioConfig().then(config => console.log(config))
  const file = createReadStream(join(__dirname,'pizza1.jpg'))
  /*await api.popups.createImage(9,{
    file
  })*/
  //api.io.downloadPdf().then(v => writeFile(join(__dirname,'test.pdf'),v,(err) => console.log(err)) )
}

example()