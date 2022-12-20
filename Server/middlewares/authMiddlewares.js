//Middle ware
// const tokenHandler = require('../utilities/tokenHandler')

// module.exports = (req, res, next) => {
//     if(req.url.startsWith('/auth')){
//         return next();
//     }


//     let token = req.headers['authorization'];
//     console.log(token);
//     token = token ? token.split(' ')[1] : null;

//     if(!token){
//         return res.status(401)
//             .send('Unauthorized');
//     }

//     try{
//         const tokenResult = tokenHandler.verifyToken(token);
//         req.user = tokenResult;
//         return next();
//     }
//     catch(err){

//         return res.status(401)
// .send('Unauthorized');
//     }
// }


const ResponseModel = require('../utilities/responseModel');
const tokenHandler = require('../utilities/tokenHandler');

function authMiddleware(req, res, next){
    if(req.url=='/auth/login' || req.url=='/' || req.url=='/auth/register'){
        return next();
    }
    // Fetch the token.
    let token = req.headers['authorization'];
    if(!token){
        res.status(401);
        return res.json(new ResponseModel(null, null, ['No token found.']));
    }

    // Verify the token.
    try{
        token = token.split(' ')[1];
        const decodedToken = tokenHandler.verifyToken(token);
        req.user=decodedToken
        console.log(decodedToken);
        return next();
    }
    catch{
        res.status(401);
        return res.json(new ResponseModel(null, null, ['Invalid token.']));
    }
}

module.exports = authMiddleware;