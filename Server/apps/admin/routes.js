const express = require('express');
const admin = require('./Controllers/adminController');

const router = express.Router();
router.post('/approvalStatus/:id',admin.userApproval);
router.post('/loanApprovalStatus/:userId',admin.loanApproval);
router.get('/update',admin.adminProfile);
router.post('/update',admin.adminProfileUpdate);
router.get('/adminProfile',admin.adminProfile);
router.get('/loanApprovalList', admin.loanApprovalList);
router.get('/accountApproveList', admin.userApprovalList);
router.post('/loanApprove/:loanId', admin.loanApproval);
router.post('/accountApproval/:id',admin.userApproval);
router.get('/allAccountDetails',admin.allAccountDetails);
router.get('/allLoanDetails',admin.allLoanDetails);
module.exports = router;