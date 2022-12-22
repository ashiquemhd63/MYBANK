const { User, Loan, Bank, Account, sequelize } = require('../../../data/models');
const ResponseModel = require('../../../utilities/responseModel');

module.exports.adminProfile = async (req, res) => {

    const userId = req.user.id;
    try {
        const user = await User.findByPk(userId);
        res.json(user)
    }
    catch (err) {
        res.json(err)
    }


}
//display user account approval pending list 
module.exports.userApprovalList = async (req, res) => {
    try {
        User.findAll({
            where: { approvalStatus: "pending" }
        }).then((user => {
            console.log(user);
            return res.json(user);

        }))
    }
    catch (err) {
        res.json(err);
    }




}

//Admin approval of user
module.exports.userApproval = (req, res) => {
    const userId = req.params.id;
    function randomNumberGenerator() {
        return Math.floor(Math.random() * 9999999999) + 1000000000;
    }
    var date = new Date();
    todayDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    try {
        User.findByPk(userId).then(
            User.update({
                approvalStatus: "approved"
            },
                {
                    where: { id: userId }
                }
            ).then(
                Account.create({
                    accountNumber: randomNumberGenerator(),
                    dateOpened: todayDate,
                    userId: userId
                },
                    {
                        where: { userId: userId }
                    })
            )

        )
    }
    catch (err) {
        res.json(err);
    }

}

//display loan approval pending list
module.exports.loanApprovalList = async (req, res) => {
    sequelize.query('select * from  accounts inner join loans on   accounts.accountId = loans.accountId  inner join loantypes on loans.loanTypeId = loantypes.loanTypeId inner join users on accounts.userId = users.id where loans.approvalStatus = "pending"'
    ).then(data => {
        data = data.pop()
        res.json(data)
    })
    
}

//Admin approval of loan
module.exports.loanApproval = async (req, res) => {
    const loanId = req.params.loanId;

    
    try {

        const loanFind = await Loan.findOne({ where: { loanId: loanId } })
        if (loanFind) {
            
            var month = loanFind.duration
            var date = new Date()
            var actualDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            console.log(actualDate)
            var newdate = date.setMonth( date.getMonth() + month );
            const loanUpdate = await Loan.update({
                approvalStatus: "approved",
                startDate : actualDate,
                endDate : newdate
            },
                {
                    where: { loanId: loanId }
                })
            
        }



    }
    catch (err) {
        res.json(err)
    }

}


module.exports.adminProfileUpdate = async (req, res) => {
    try {
        Bank.update({
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
        },
            {
                where: {
                    id: req.user.id
                }
            }).then(data => {
                res.json(new ResponseModel(data));
            }

            );
    }
    catch (err) {
        res.json(new ResponseModel(err));
    }

}

//All Account details  admin   can view 
module.exports.allAccountDetails = (req, res) => {
    try {
        sequelize.query('select * from users inner join accounts on accounts.userId=users.id').then(accountData => {
            accountData = accountData.pop()
            res.json(new ResponseModel(accountData));
        })
    }
    catch (err) {
        res.json(err)
    }
}


//all loan details admin can view

module.exports.allLoanDetails = (req, res) => {
    try {
        // const loanDetails = await Loan.findAll() 

        sequelize.query('select * from users inner join loans on loans.userId=users.id').then(loanData => {
            loanData = loanData.pop()
            res.json(new ResponseModel(loanData));
        })
    }
    catch (err) {
        res.json(err)
    }
}