const { User, Account, Transaction, Loan } = require('../../../data/models');
const ResponseModel = require('../../../utilities/responseModel');

module.exports.ApplyLoan = async (req, res) => {

    try {
        var accountHolder = await Account.findOne({

            where: {
                userId: req.user.id
            }
        })

    } catch (error) {
        res.json(new ResponseModel(err));
    }

    await Loan.create({

        amount: req.body.amount,
        loanTypeId: req.body.loantype,
        accountId: accountHolder.accountId,
        userId: req.user.id,
        duration: req.body.time,
        loanTypeId: req.body.loantype

    })
        .then(data => {
            return res.json('success')

        })



}

