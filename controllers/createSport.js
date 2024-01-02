const Sports = require("../model/sports")
const jsonSchema = require("../jsonSchema/createSport")
const validate = require("../util/validate");

class createSport {
  async create(data) {
    try {
        const { sportId, sportName, rank, sportCovers } = data;
        const post = await Sports.create({
          sportId,
          sportName,
          rank,
          sportCovers,
        });
    
        if (!post) throw 'Unable to create sport'
    
        return 'SuccessFully created'
        
    } catch (error) {
        throw error
    }
   
  }
  async process(req, res) {
    try {
      validate(req.body, jsonSchema)
      const instance = new createSport();
      const result = await  instance.create(req.body);
      if(result) {
        res.status(201).json({
            statusCode : 201,
            type: "Success",
            data: result 
        })
      }

    } catch (error) {
        res.status(400).json({
            statusCode : 400,
            type: "Error",
            data: error.error || error 
        })
    }
  }
}

module.exports = new createSport()