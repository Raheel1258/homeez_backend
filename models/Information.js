const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema(
  {
    info: {
      type: String,
      required: [true, 'Information is required'],
    },
    valid:{
      type:Boolean,
      default:true
    }
  },
  { timestamps: true }
);

const Information = mongoose.model('Information', informationSchema);

module.exports = Information;
