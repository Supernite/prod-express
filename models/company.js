const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    address: {
      provice: String
    }
  },{ collection:"companys" });

const company = mongoose.model("Company",companySchema)

module.exports = company