const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', CategoriesSchema);
