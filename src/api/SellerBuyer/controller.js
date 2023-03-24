import SellerBuyer from '../Common/SellerBuyerRegisterModel';
import Buycar from '../Common/BuyCarModel';
import StoreCar from '../Common/StoreCarsmodel';
import TestDrive from '../Common/TestDriverModel';
import Leasecar from '../Common/LeaseCarsModel';
import {sendEmail} from '../Common/email';

export const SellerBuyerRegister = (req, res) => {
  SellerBuyer.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
        }
      })
}


export const sellerbuyerlogin = (req, res) => {
  SellerBuyer.findOne({ "emailid": req.query.emailid, "password": req.query.password }, (err, result) => {
    res.send(result);

  })
}

export const forgotPassword = (req, res) => {
  console.log(req.query.emailid);
  SellerBuyer.findOne({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
    
      res.send(err);
    }
     else {
		 result.map(results => {
		  const subject = 'Credentials Recived';
		  const body = `Emailid: ${results.emailid}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
		  sendEmail(req.query.emailid, subject, body);
		 })
      res.send(result);
    }
  })
}

export const chnagepassword = (req, res) => {
  SellerBuyer.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const viewSellerBuyerProfile = (req, res) => {
  SellerBuyer.find({ "emailid": req.query.emailid }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}


export const showSellerBuyer = (req, res) =>
  SellerBuyer.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })


export const viewSellerBuyer = (req, res) =>
  SellerBuyer.find({}, (err, seller) => {
    if (err) {
      res.send(err);
    } else {
      res.send(seller);
    }
  })



export const updateSellerBuyer = (req, res) => {
  SellerBuyer.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}




//*BuyCars*//

export const addbuyingcar = (req, res) => {
  Buycar.create(req.body, (err, result) => {

    if (err) {
      res.send(err);
    } else {
      const subject = 'Buyer  Details';
      const body = `Your car is successfully sold out.... <br><br>emailid: ${req.body.bemailid}<br>Thank You.`;      
      sendEmail(req.body.semailid, subject, body);
      res.send(result);
      }
    })
  
}



export const showbuyedcars = (req, res) =>
  Buycar.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
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



//*StoreCars*//


export const carstore = (req, res) => {
  console.log(req.body);
  StoreCar.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      StoreCar.find({}, (err, seller) => {
        if (err) {
          res.send(err);
        } else {
          res.send(seller);
        }
      })
    }
  })
}

export const showcars = (req, res) =>
  StoreCar.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })



export const carindex = (req, res) =>
  StoreCar.find({"status": "Available", "cartype": req.query.cartype }, (err, seller) => {
    if (err) {
      res.send(err);
    } else {
      res.send(seller);
    }
  })

export const viewStoreCar = (req, res) => {
  StoreCar.find({ "emailid": req.query.emailid}, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}




export const updatecars = (req, res) => {
  StoreCar.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}



export const destroycars = (req, res) =>
  StoreCar.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  })




//*TestCars*//

export const addtestcar = (req, res) => {
  
  TestDrive.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(req.body);
      const subject = 'test drive  Details';
      const body = `The Test drive timings successfully done.. <br><br>emailid: ${req.body.temail}<br>Thank You.`;      
      sendEmail(req.body.email, subject, body);
      res.send(result);
      }
    })
  
}


export const showtestdrivecars = (req, res) =>
  TestDrive.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
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





//*LeaseCars*//

export const addleasecar = (req, res) => {
  console.log(req.body);
  Leasecar.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Lease Details';
      const body = `Lease taken By <br><br>emailid: ${req.body.lbemailid}<br>Thank You.`;      
      sendEmail(req.body.lsemailid, subject, body);
      res.send(result);
     
    }
  })
}

export const showleasecars = (req, res) =>
  Leasecar.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
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

