import { Router } from 'express'

import {
  sellerbuyerlogin,
  forgotPassword,
  chnagepassword,
  SellerBuyerRegister,
  viewSellerBuyerProfile,
  viewSellerBuyer,
  showSellerBuyer,
  updateSellerBuyer,
  addbuyingcar,
  buycarindex,
  showbuyedcars,
  carstore,
  carindex,
  viewStoreCar,
  showcars,
  updatecars,
  destroycars,
  addtestcar,
  testdrivecarindex,

  showtestdrivecars,

  addleasecar,

  leasecarindex,

  showleasecars




} from './controller'

const router = new Router()

router.get('/sellbuylogin', sellerbuyerlogin)

router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)

router.post('/register', SellerBuyerRegister)

router.put('/update/:id', updateSellerBuyer)

router.get('/viewprofile', viewSellerBuyerProfile)

router.get('/viewsellerbuyer', viewSellerBuyer)

router.get('/viewstorecar', carindex)


router.get('/viewstorecar2', viewStoreCar)

router.get('/:id', showSellerBuyer)

router.post('/buycar', addbuyingcar)

router.get('/viewbuycar', buycarindex)

router.get('/:id', showbuyedcars)

router.post('/storecar', carstore)

router.put('/updatestorecar/:id', updatecars)


router.get('/:id', showcars)

router.delete('/destroystorecar/:id', destroycars)

router.post('/testcar', addtestcar)

router.get('/viewtestcar', testdrivecarindex)

router.get('/:id', showtestdrivecars)


router.post('/leasecar', addleasecar)

router.get('/viewleasecar', leasecarindex)

router.get('/:id', showleasecars)




export default router