import { createReadStream, writeFile } from "fs";
import { maiorCmsApiClient, ApiVersion, PopupModal, PopupTarget, PopupTriggerRule, TiDelizioPlan } from "../src";
import { join } from "path";
import Credentials from './credentials.json'

async function example() {
  const api = maiorCmsApiClient({
    //sandbox:true,
    disableCache:true,
    //host:'localhost:3001',
    version:ApiVersion.July24,
    /*credentials:{
      apiToken:'9cf4e869-dd35-4857-9480-10ac40973c26'
    },*/
    ...Credentials
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
  //api.collections.count(2).then(v => console.log(v))
  //api.io.downloadPdf().then(v => writeFile(join(__dirname,'test.pdf'),v,(err) => console.log(err)) )
  //api.images.findAll().then(({data,meta}) => console.log(data))
  /*api.bundles.create({
    title:'prova',
    collections:[195],
    description:'test di est',
    products:[180,181,182],
    variants:[
      {
        price:40
      }
    ]
  })*/
  api.bundles.list().then(v => console.log(v.nodes.map(v => v.BundleProduct)))
  /*api.bundles.updateBundleProducts({
    bundleId:3,
    updateList:[
      {
        productId:180,
        position:3
      },
      {
        productId:181,
        position:2
      },
      {
        productId:182,
        position:1
      }
    ]
  }).then(v => console.log(v))*/
}

example()