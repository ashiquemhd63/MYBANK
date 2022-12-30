const { Account, Transaction} = require('../../../data/models');
const ResponseModel = require('../../../utilities/responseModel');

//Get specific transaction details
module.exports.getAll = async (req, res) => {

    const id = req.params.id;
    console.log(id)
    const Transactions = await Transaction.findAll({
        where: { transactionId: id }
    });
    console.log(Transactions)
    res.send(Transactions);
}

//To  deposite amount in account and also  available in tranasaction
module.exports.deposit_funds = async (req, res) => {
    const userId = req.user.id
    // const userId = 2
    console.log(req.user)
 
    const accountData = await Account.findOne({
        where: { userId: userId }
    })
    console.log(accountData)
    await Transaction.create({
        accountId: accountData.accountId,
        userId: userId,
        amount: req.body.amount,
        transactionType: 'Deposit',
        dateOfTrasaction: new Date().toISOString().slice(0, 10)

    })
    
    await Account.update(
        {
            currentBalance: parseInt(accountData.currentBalance)+parseInt(req.body.amount)
        },
        {
            where: { userId: userId }
        }

    ).then(data=>{
        // res.send('Deposit amount is successfully')
        res.json(new ResponseModel('Deposit amount is successfully'));
    })

}


module.exports.withdrawal_funds = async (req, res) => {
    const userId = req.user.id; //should take it from token as req.user.id

    const accountData = await Account.findOne({
        where: { userId: userId }
    })

    if (  parseInt(accountData.currentBalance) >= parseInt(req.body.amount) )
    {
        await Transaction.create({
            accountId: accountData.accountId,
            userId: userId,
            amount: req.body.amount,
            transactionType: 'Withdrawal',
            dateOfTrasaction: new Date().toISOString().slice(0, 10)
    
        })
        
        await Account.update(
            {
                currentBalance: parseInt(accountData.currentBalance) - parseInt(req.body.amount)
            },
            {
                where: { userId: userId }
            }
    
        ).then(data=>{
            res.json(new ResponseModel('Withdrawal is successfully'));
        })

    }
    else{
        res.json(new ResponseModel('Not enough balance'));
    }
    
    

}

module.exports.getAccountData = async (req, res) => {

    const id = req.user.id
    console.log(id)
    const Accounts = await Account.findOne({
        where: { userId: id }
    });
    res.json(new ResponseModel(Accounts));
}







