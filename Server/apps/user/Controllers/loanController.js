const { User, Account, Transaction, Loan } = require('../../../data/models');

module.exports.ApplyLoan = async (req, res) => {

    console.log(req.body)
     await Loan.create({ 

        amount: req.body.amount,
        loanTypeId : req.body.loantype,
        accountId:1,
        userId: 1



    })

        .then(data=>{
       return res.json('success')

        })



}

