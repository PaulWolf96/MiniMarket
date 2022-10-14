const User = require("../model/Users");
const winston = require('winston');
const bcryptjs = require('bcryptjs');

const consoleTransport = new winston.transports.Console()

 const myWinstonOptions = {
  transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)
module.exports = class UserService {
  
  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async save(req, res) {
    const { username, password, email } = req.body;
    let passHash = await bcryptjs.hash(password, 8);
    try {
      const response = await exists(username);
      if (!response.exists) {
        await User.create({
          username,
          password: passHash,
          email,
        });
        res.json({ message: "user registered successfully" });
        res.status(201);
      } else {
        res.status(400);
        res.json({ message: "user already exists" });
      }
      return res;
    } catch (error) {
        res.status(400);
        res.json({ error : error });
    }
  }

  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async update(req, res) {
    const { password, email, } = req.body;
    const username = req.params.username;
    try {
      await User.updateOne(
        { username : `${username}` },
        {
          password,
          email,
        }
      );
      res.json({ message: "user updated successfully" });
      res.status(200);
    } catch (error) {
        res.status(400);
        res.json({ error : error });
    }
  }

  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async delete(req, res) {
    const username = req.params.username;
    try {
      const deleted = await User.deleteOne(
        { username : `${username}` },
      );
      if(deleted.deletedCount > 0){
      res.json({ message: "user deleted successfully" });
      res.status(200);
    }else{
      res.json({ message: "user not found" });
      res.status(404);
    }
    } catch (error) {
        res.status(400);
        res.json({ error : error });
    }
  }

  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findAll(req, res) {
    try {
      logger.info("buscando")
      const user = await User.find({}).select("-_id").select("-__v"); 
      res.json({ user: user });
      logger.info(user);
      res.status(200);
    } catch (error) {
      res.status(400);
      res.json({ error : error });
    }
  }

  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findOne(req, res) {
    const username = req.params.username;
    try {
      const user = await User.find({ username }).select("-_id").select("-__v");
      res.json({ data: user });
      res.status(200);
    } catch (error) {
      res.status(400);
      res.json({ error : error });
    }
  }
};

/**
 * @param {*identificación del estudiante } username 
 * @returns 
 */
const exists = async (username) => {
  try {
    const result = await User.findOne({ username });
    if(!result)
      return { exists : false };
    else
      return { exists : true };
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
    return { exists : false, error : err};
  }
}
