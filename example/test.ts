import { createReadStream } from "fs";
import { maiorCmsApiClient, ApiVersion, PopupModal, TiDelizioPlan } from "../src";
import { join } from "path";
import { PopupTarget, PopupTriggerRule } from "../src/popups/types";

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
  //const file = createReadStream(join(__dirname,'Immagine2.png'))
  
  
}

example()