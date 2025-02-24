import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number, // Changed from String to Number
      required: true,
      min: 0, // Ensures price cannot be negative
    },
    type: {
      type: String,
      required: true,
      enum: ["drinks", "food"], // Restricts values to "drinks" or "food"
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
