const {User,Loan,Bank} = require('../../../data/models');
const ResponseModel = require('../../../utilities/responseModel');

//Admin approval of user
module.exports.userApproval =  (req,res) =>
{
    const userId = req.params.id;
    try{
        User.findByPk(userId).then(
            User.update({
                approvalStatus : "approved"
            },
            {
                where : {id : userId}
            }
            ).then(res.send("ok"))
        
        )  
    }
    catch(err)
    {
        res.json(err);
    }  

}

//Admin approval of loan
module.exports.loanApproval = (req,res) =>
{
    const id = req.params.userId;
    try{
        Loan.findOne({where : {userId : id}}).then(
            Loan.update({
                approvalStatus : "approved"
            },
            {
                where : { userId : id}
            }).then(res.send("ok"))
        )
    
    }
    catch(err){
        res.json(err)
    }
   
}
module.exports.adminProfile = async(req,res) => {
        const userId =1
        try {
            const user = await Bank.findByPk(userId);
            res.json(new ResponseModel(user));
        }
        catch(err)
        {
                res.json(new ResponseModel(err));
        }
        
    }
    module.exports.adminProfileUpdate = async(req,res) => {
        try{
                     Bank.update({
                        phone : req.body.phone,
                        email : req.body.email,
                        password : req.body.password
                    },
                    {
                        where : {
                            id : 1
                        }
                    }).then(data=>{
                res.json(new ResponseModel(data));
            }
                        
            );
                }
                catch(err)
                {
                        res.json(new ResponseModel(err));
                }
                
        }
