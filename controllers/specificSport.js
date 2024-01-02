const Sports = require("../model/sports");

class specificSport {

  async singleSport(id) {
    try {
      const result = await Sports.find({_id: id});
      if (result) {
        return result;
      }
      throw "No Data Found!";
    } catch (error) {}
  }

  async process(req, res) {
    try {
      const instance = new specificSport();
      const result = await instance.singleSport(req.params.id);
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

module.exports = new specificSport();
