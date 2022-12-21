const { User, Loan, Bank, Account } = require('../../../data/models');
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
module.exports.userApprovalList =  async (req,res) =>


{
    try{
        User.findAll({
            where : {approvalStatus : "pending"}
        }).then((user =>{
            console.log(user);
            return res.json(user);
    
        }))
    }
    catch(err)
    {
        res.json(err);
    }

    
    
  
}

//Admin approval of user
module.exports.userApproval = (req, res) => {
    const userId = req.params.id;
    function randomNumberGenerator()
    {
        return Math.floor(Math.random() * 9999999999) + 1000000000;
    }
    var date =new Date();
    todayDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
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
                    accountNumber : randomNumberGenerator(),
                    dateOpened : todayDate,
                    userId : userId
                },
                {
                    where : {userId : userId}
                })
            )

        )
    }
    catch (err) {
        res.json(err);
    }

}

//display loan approval pending list
module.exports.loanApprovalList =  async (req,res) =>
{
    try{
       const loan = await  Loan.findAll({
            where : {approvalStatus : "pending"}
        })
        return res.json(loan);
    }
    catch(err)
    {
        return res.json(err)
    }
}

//Admin approval of loan
module.exports.loanApproval = async (req, res) => {
    const loanId = req.params.loanId;
    console.log("hello loan aproval")
    try {

        const loanFind = await Loan.findOne({ where: { loanId:loanId } })
        if(loanFind)
        {
            const loanUpdate = await Loan.update({
                approvalStatus: "approved"
            },
                {
                    where: { loanId: loanId }
            })
            // console.log(loanUpdate);
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
