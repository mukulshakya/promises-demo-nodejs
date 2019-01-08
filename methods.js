const os = require('os');
const yargs = require('yargs');

var argv = yargs.options({
    username: {
        describe: "Name of User",
        demand: true,
        alias: "u"
    }
}    
).help().argv;

var userData = argv.username;

var userDataCapitalize = userData.charAt(0).toUpperCase() + userData.substr(1).toLowerCase();

// using promises
var userDetail = new Promise((resolve, reject) => {
    if(userDataCapitalize === os.userInfo().username) {
        resolve({authority: "Authorised User", userName: userDataCapitalize});  
    }
    else {
        reject({authority: "Unauthorised User", userName: userData}); 
    }
});

//using normal callback
// var userDetail = (callback) => {
//     if(userDataCapitalize === os.userInfo().username) {
//         callback(undefined, {authority: "Authorised User", userName: userDataCapitalize});  
//     }
//     else {
//         callback({authority: "Unauthorised User", userName: userData}); 
//     }
// };

module.exports.userDetail = userDetail;