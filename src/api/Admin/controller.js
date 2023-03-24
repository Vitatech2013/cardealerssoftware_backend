import AdminLogin from './AdminLoginModel';
import SellerBuyer from '../Common/SellerBuyerRegisterModel';
import Buycar from '../Common/BuyCarModel';
import StoreCar from '../Common/StoreCarsmodel';
import TestDrive from '../Common/TestDriverModel';
import Leasecar from '../Common/LeaseCarsModel';
import {sendEmail} from '../Common/email';

export const adminlogin = (req, res) =>{
  AdminLogin.findOne( {"username":req.query.username, "password":req.query.password},(err,result)=> {
  res.send(result);
  })
  }

  export const forgotPassword = (req, res) => {
    console.log(req.query.emailid);
    AdminLogin.findOne({"emailid":req.query.emailid}, (err, result) => {
      if (err) {      
        res.send(err);
      }
       else {
		   result.map(results => {
			const subject = 'Credentials Recived';
			const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
			sendEmail(req.query.emailid, subject, body);
		   })
        res.send(result);
      }
    })
  }
  
  export const chnagepassword = (req, res) => {
    AdminLogin.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
      }
    })
  }

  export const viewSellerBuyer = (req, res) =>
  SellerBuyer.find({}, (err, seller) => {
    if (err) {
      res.send(err);
    } else {
      res.send(seller);
    }
  })

  export const viewStoreCar = (req, res) =>
  StoreCar.find({}, (err, seller) => {
    if (err) {
      res.send(err);
    } else {
      res.send(seller);
    }
  })

  export const buycarindex = (req, res) =>
    Buycar.find({}, (err, seller) => {
        if (err) {
            res.send(err);
        } else {
            res.send(seller);
        }
    })

    export const testdrivecarindex = (req, res) =>
    TestDrive.find({}, (err, seller) => {
      if (err) {
        res.send(err);
      } else {
        res.send(seller);
      }
    })

    export const leasecarindex = (req, res) =>
    Leasecar.find({}, (err, seller) => {
      if (err) {
        res.send(err);
      } else {
        res.send(seller);
      }
    })
    