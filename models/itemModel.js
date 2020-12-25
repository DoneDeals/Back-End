import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const itemSchema = mongoose.Schema(
  {
    category: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    unitPrice: { type: Decimal128, required: true },
  },
  { timestamps: true }
)

// Extra method to compare plane password to hashed password in DB
//userSchema.methods.matchPassword = async function (enteredPassword) {
//  return await bcrypt.compare(enteredPassword, this.password)
//}

// Hashing the password before save to database
//itemSchema.pre('save', async function (next) {
//  // Exit if password is not provided or not modified
//  if (!this.isModified('password')) {
//    next()
//  }
//
//  const salt = await bcrypt.genSalt(10)
//  this.password = await bcrypt.hash(this.password, salt)
//})

const Item = mongoose.model('Item', itemSchema)

export default Item