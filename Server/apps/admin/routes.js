const express = require('express');
const admin = require('./Controllers/adminController');

const router = express.Router();
router.post('/approvalStatus/:id',admin.userApproval);
router.post('/loanApprovalStatus/:userId',admin.loanApproval);
router.get('/update',admin.adminProfile);
router.post('/update',admin.adminProfileUpdate);

module.exports = router;