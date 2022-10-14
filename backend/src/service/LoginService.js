const User = require("../model/Users");
const bcryptjs = require('bcryptjs');


module.exports = class LoginService {

  /** 
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
    static async login(req, res) {
        const { username, password } = req.body;
        try {
          const user = await User.findOne({ username }).select("-_id").select("-__v");
          if(user){
            let compare = bcryptjs.compareSync(password, user.password);
            if(compare){
                res.json({ data: "logged" });
                res.status(200);
                console.log("usuario logueado");
                console.log(req.body);
            }else{
                res.json({ data: "Incorrect password" });
                res.status(400);
                console.log("Contraseña incorrecta")
            }
          }else {
            res.json({ data: "User not found"});
            console.log("El usuario no existe")
          }
        } catch (error) {
          res.status(400);
          res.json({ error : error });
        }
      }
}

