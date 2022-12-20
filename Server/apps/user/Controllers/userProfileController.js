const { User } = require('../../../data/models');
const ResponseModel = require('../../../utilities/responseModel');

// Get user profile details 
/**
 * user id is passed as parameter, we have to change it when the login functionality is completed
 */
module.exports.userProfile = async (req, res) => {
    console.log('i am from user profile')
    const userId = 2
    try {
        const user = await User.findByPk(userId);
        res.json(new ResponseModel(user));
    }
    catch (err) {
        res.json(new ResponseModel(err));
    }

}

// Edit user profile 
/**
 * user id is passed as parameter, we have to change it when the login functionality is completed
 */
module.exports.editUserProfile = (req, res, next) => {

    try {
        User.update({
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
        },
            {
                where: {
                    id: 2
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


