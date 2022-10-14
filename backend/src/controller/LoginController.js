const LoginService = require("../service/LoginService");


module.exports = class LoginController {

  /** 
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async login(req, res) {
    try {
      await LoginService.login(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};


  

