// var Linkedin = require('node-linkedin')('77uspc57urzj7c', 'NpKq7jWcWDhXnBGs');
// Linkedin.auth.setCallback('https://reactives-searchingyou.web.app');
// var linkedin = Linkedin.init('AQWTI3x2TUrtiS416Tbup1NVTd69fKDn-AZ0LWoD8tcMGsJp41caGrP4X3I2-XvBNKu_zfInVdgl1JxRmWSfzAFwO9vc2FVULUnbMywl-1CV8tPbdnHnDP6hYNYNKuv7LO_uoayPFv_-1HkBXEE9xdDXQepn8SuFGzWa4FqJk_XS0HgRh6QqBMMEn09qv05pSdC-HGGEn80ha1agTFqsL72ndnHwpp_cotnJ9Ey8eI-q50Q0ynSRGPJnZOTbiFj1561x0hwLuhJZrbVDn3bOpNVvLkg6xh7wRqq7IvLCL8yXuBMEAI2o91rPx3GxR-uYuYN8FmyiSEzZGrGKVAOJGxVPfzOMpQ');

const token = 'AQWTI3x2TUrtiS416Tbup1NVTd69fKDn-AZ0LWoD8tcMGsJp41caGrP4X3I2-XvBNKu_zfInVdgl1JxRmWSfzAFwO9vc2FVULUnbMywl-1CV8tPbdnHnDP6hYNYNKuv7LO_uoayPFv_-1HkBXEE9xdDXQepn8SuFGzWa4FqJk_XS0HgRh6QqBMMEn09qv05pSdC-HGGEn80ha1agTFqsL72ndnHwpp_cotnJ9Ey8eI-q50Q0ynSRGPJnZOTbiFj1561x0hwLuhJZrbVDn3bOpNVvLkg6xh7wRqq7IvLCL8yXuBMEAI2o91rPx3GxR-uYuYN8FmyiSEzZGrGKVAOJGxVPfzOMpQ';
var request = require('request')

const getProfile = async (req, res) => {    
//     return new Promise( (fullfil, reject) => {
//         linkedin.people.me( (err, user) => {
//           console.log (user, "All user data attached to this.token");
//           let resp = {response: user, error: null};
//           if (err) resp = {response: null, error: err};
//           else {
//             this.email = user.emailAddress;
//             this.id = user.id;
//           }
  
//           fullfil(resp)
//         });
//   });
    // res.status(200).json("HOLA");
    request({
        uri: 'https://api.linkedin.com/v2/me',
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }).pipe(res);
}

module.exports = {
    getProfile
}