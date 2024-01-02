const Sports = require("../model/sports");

class allSport {
  async getAll() {
    try {
      const result = await Sports.find();
      if (result) {
        return result;
      }
      throw "No Data Found!";
    } catch (error) {}
  }
  async process(req, res) {
    try {
      const instance = new allSport();
      const result = await instance.getAll();
      if (result) {
        res.status(200).json({
          statusCode: 200,
          type: "Success",
          data: result,
        });
      }
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        type: "Error",
        data: error.error || error,
      });
    }
  }
}

module.exports = new allSport();
