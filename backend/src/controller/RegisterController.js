const registerService = require("../service/RegisterService");
const winston = require('winston');

const consoleTransport = new winston.transports.Console()

 const myWinstonOptions = {
  transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)


module.exports = class RegisterController {

  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async save(req, res) {
    try {  
      logger.info(req.body.username);
      await registerService.save(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async update(req, res) {
    try {
      await registerService.update(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async delete(req, res) {
    try {
      await registerService.delete(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findOne(req, res) {
    try {
      await registerService.findOne(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findAll(req, res) {
    try {
      await registerService.findAll(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
