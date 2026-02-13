import { createReadStream, writeFile } from "fs";
import { maiorCmsApiClient, ApiVersion, Gid, toGlobalId, ReservationSource } from "../src";
import { join } from "path";
import Credentials from './credentials.json'

async function example() {
  const api = maiorCmsApiClient({
    disableCache:true,
    version:ApiVersion.October25,
    ...Credentials
  })
  await api.auth()
  //api.configs.TiDelizioConfig().then(config => console.log(config))
  const file = createReadStream(join(__dirname,'pizza1.jpg'))
  /*await api.popups.createImage(9,{
    file
  })*/
  //api.io.downloadPdf().then(v => writeFile(join(__dirname,'test.pdf'),v,(err) => console.log(err)) )
  await api.reservations.push({
    date: new Date(),
    guestCount: 2,
    name: 'John',
    phone: '+393331234567',
    source: ReservationSource.admin
  })
  api.reservations.findAll().then(res => console.log(res))
}

example()