const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    category:{ type: mongoose.Types.ObjectId ,ref: 'Category' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductsSchema);
