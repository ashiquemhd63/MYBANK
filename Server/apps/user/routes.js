const express = require('express');


const user = require('./Controllers/userProfileController');

const userController = require('./Controllers/userController');
const Deposit = require('./Controllers/DepositWithdrawController');
const userProfileController = require('./Controllers/userProfileController');

const Loan = require('./Controllers/loanController');



const router = express.Router();


router.get('/update',user.userProfile);


router.post('/update',user.editUserProfile);
router.get('/', userProfileController.userProfile)
router.post('/applyLoan',Loan.ApplyLoan)


router.get('/transaction/:id',Deposit.getAll);

router.get('/deposit',Deposit.getAccountData);
router.get('/withdraw',Deposit.getAccountData);

router.post('/deposit',Deposit.deposit_funds);
router.post('/withdraw',Deposit.withdrawal_funds);





module.exports = router;