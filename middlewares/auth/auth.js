const auth = require('../../services/firebase/authentication');

const DUMMY_TOKEN = "test";

async function authenticateUser(req, res, next){

    const token = req.header("Authorization");

    if(DUMMY_TOKEN.toLowerCase() === token.toLowerCase()){
        next();
    }else{
        return res.status(403).send();
    }

}

module.exports = {
    authenticateUser
}