const { getUserbyNamePwdAsync } = require("../services/userServices");

function passwordCheck(req, res) {
    getUserbyNamePwdAsync(req.body.username, req.body.password)
    .then(result => {
        console.log(result[0]);
            if (!result[0].username) {
                res.status(403).json({
                   message: "Invalid username or password",
                 });
                 return;
           }
        res.json(result);
    })
}

module.exports = {
    passwordCheck
};