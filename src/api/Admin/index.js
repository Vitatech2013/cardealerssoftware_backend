import { Router } from 'express'

import {

  adminlogin,

  forgotPassword,

  chnagepassword,
  
  viewSellerBuyer,
  
  buycarindex,
  
  viewStoreCar,

  testdrivecarindex,

  leasecarindex

} from './controller'

const router = new Router()

router.get('/Adminlogin', adminlogin)

router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)

router.get('/viewsellerbuyer', viewSellerBuyer)


router.get('/viewbuycar', buycarindex)


router.get('/viewstorecar',viewStoreCar)


router.get('/viewtestcar', testdrivecarindex)


router.get('/viewleasecar', leasecarindex)


export default router
