import { createReadStream } from "fs";
import { maiorCmsApiClient, ApiVersion, PopupModal, PopupTarget, PopupTriggerRule } from "../src";
import { join } from "path";

async function example() {
  const api = maiorCmsApiClient({
    sandbox:true,
    disableCache:true,
    host:'localhost:3001',
    version:ApiVersion.July24,
    credentials:{
      apiToken:'9cc62cbe-73ba-4450-a84c-4f2b55e0fd2c'
    }
  })
  await api.auth()
  const file = createReadStream(join(__dirname,'pizza1.jpg'))
  //api.popups.findAll().then(({data,meta}) => console.log(data))
  /*await api.popups.createImage(9,{
    file
  })*/
  /*await api.popups.create({
    name:'test menu',
    modal:PopupModal.standard,
    target:PopupTarget.menuDetail,
    triggers:[
      {
        name:'test',
        rule: PopupTriggerRule.eventName,
        value: 'pageView'
      },
      {
        name:'element',
        rule: PopupTriggerRule.elementDetailId,
        value: '1'
      }
    ],
    metafields:[
      {
        key:'title',
        value:'titolo popup menu'
      },
      {
        key:'body',
        value:'corpo del popup menu'
      }
    ]
  })*/
}

example()