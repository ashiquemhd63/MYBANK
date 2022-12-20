const express = require('express');


const user = require('./Controllers/userProfileController');

const userController = require('./Controllers/userController');
const Deposit = require('./Controllers/DepositWithdrawController');




const router = express.Router();


router.get('/update',user.userProfile);


router.post('/update',user.editUserProfile);


router.get('/transaction/:id',Deposit.getAll);

router.get('/deposit',Deposit.getAccountData);
router.get('/withdraw',Deposit.getAccountData);

router.post('/deposit',Deposit.deposit_funds);
router.post('/withdraw',Deposit.withdrawal_funds);





module.exports = router;