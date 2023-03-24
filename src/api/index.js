import { Router } from 'express'

import SellerBuyer from './SellerBuyer'

import admin from './Admin'

const router = new Router()

router.use('/Admin', admin)

router.use('/SellerBuyer', SellerBuyer)


export default router
