const mongoose = require("mongoose");

class connect {
  async connectDB() {
    try {
      const connection = await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected");
    } catch (error) {
      console.log("Error while connecting MongoDB", error);
      process.exit(1);
    }
  }
}

module.exports = new connect()
