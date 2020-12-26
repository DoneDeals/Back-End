import mongoose from 'mongoose';
//import bcrypt from 'bcryptjs';

const itemSchema = mongoose.Schema(
  {
    category: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    unitPrice: { type: Number, required: true },
  },
  { timestamps: true }
)


const Item = mongoose.model('Item', itemSchema)

export default Item