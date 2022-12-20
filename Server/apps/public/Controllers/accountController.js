const { User, Bank } = require('../../../data/models')
const ResponseModel = require('../../../utilities/responseModel');
const tokenHandler = require('../../../utilities/tokenHandler')




// const Bank = require('../../../data/models')

//User login 

// module.exports.login = async (req, res, next) => {
//     const { email, password } = req.body;
//     console.log(req.body)
//     const userData = await User.findOne(
//         {
//             where: {
//                 email: email,
//                 password: password
//             }
//         }
//     )

//     if (userData != null) {
//         const token = tokenHandler.createToken({
//             id: 1
//             // role: bankData.role
//         });
//     }
//     res.json(new ResponseModel(userData))

// };

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)


   const userData= await User.findOne(
        {
            where : {
                email : email,
                password : password
            }
        }
    )
    if(userData==null){
        const bankData= await Bank.findOne(
            {
                where : {
                    email : email,
                    password : password
                }
            }
        )
        if(bankData==null){
            res.json(new ResponseModel(null, null, ['User not found']))

        }
        else{
           const token=  tokenHandler.createToken({
                id: bankData.id,
                role: bankData.role
            });
            console.log(token)
            return res.json(new ResponseModel(token));
        }

    }
    else{
      const token =  tokenHandler.createToken({
            id: userData.id,
            role: userData.role
        });

        console.log(token)
        // res.json(new ResponseModel(userData))
        return res.json(new ResponseModel(token));
    }





}
//User registration 

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