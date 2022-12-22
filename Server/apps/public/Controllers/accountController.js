const { User, Bank } = require('../../../data/models')
const ResponseModel = require('../../../utilities/responseModel');
const tokenHandler = require('../../../utilities/tokenHandler')
const nodemailer=require('nodemailer');




// module.exports.login = async (req, res) => {
//     const { email, password } = req.body;
//     console.log(req.body)


//    const userData= await User.findOne(
//         {
//             where : {
//                 email : email,
//                 password : password
//             }
//         }
//     )
//     if(userData==null){
//         const bankData= await Bank.findOne(
//             {
//                 where : {
//                     email : email,
//                     password : password
//                 }
//             }
//         )
//         if(bankData==null){
//             res.json(new ResponseModel(null, null, ['User not found']))

//         }
//         else{
//            const token=  tokenHandler.createToken({
//                 id: bankData.id,
//                 role: bankData.role
//             });
//             console.log(token)
//             return res.json(new ResponseModel(token));
//         }

//     }
//     else{
//       const token =  tokenHandler.createToken({
//             id: userData.id,
//             role: userData.role
//         });

//         console.log(token)
//         // res.json(new ResponseModel(userData))
//         return res.json(new ResponseModel(token));
//     }

module.exports.login = async (req, res) => {
    

    const userData = await User.findOne(
        {
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }
    )
    if (userData == null) {
        res.json(new ResponseModel(null, null, ['User not found']))

    }
    else if (userData.approvalStatus == 'pending') {
    
        res.json(new ResponseModel(null, null, ['Waiting for approval']))
    }
    else {

        var otp = Math.random();
         otp = otp * 1000000;
       otp = parseInt(otp);
       console.log(otp);

        


        User.update({
            otp:otp
        },
        {
            where:{
                email:userData.email,
                password:userData.password
            }
        })
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            service : 'Gmail',
            
            auth: {
              user: 'lingeswaranlinga842@gmail.com',
              pass: 'lephfdrvseilelwv',
            }
            
        });

        var mailOptions = {
            from: 'lingeswaranlinga842@gmail.com',
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: String(otp)
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

       
        return res.json(new ResponseModel(userData.id));

    }

}





// }
//User registration 
module.exports.otp = async (req, res) => {
    console.log(req.params.id)
    console.log(req.body.otp)
   const data=await User.findOne({where: {id: req.params.id,otp:req.body.otp}})
    if(data==null)
    {
        return res.json(new ResponseModel(null, null, ['Wrong otp']));
    }
    else{
        const token =  tokenHandler.createToken({
                        id: data.id,
                        role: data.role
                    });
            
                    console.log(token)
                   
                    return res.json(new ResponseModel(token));

      
    }

    
}

module.exports.register = async (req, res) => {
    try {
        const { name, email, phone, address, panNumber, aadhaarNumber, password } = req.body;

        console.log(aadhaarNumber)


        // Check if user already exists.
        const userExists = await User.findOne({ where: { email: email } });
        if (userExists) {
            return res.status(400)
                .json(new ResponseModel(null, null, ['User already exists.']));
        }

        var user = await User.create({
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address,
            panNumber: panNumber,
            aadhaarNumber: aadhaarNumber

        });
        res.json(new ResponseModel(user));
    }
    catch (err) {
        console.log(err);
        res.status(500).json(new ResponseModel(null, null, ['Unable to create user.']));
    }
}