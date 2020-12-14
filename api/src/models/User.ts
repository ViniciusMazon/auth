import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  passwordHash?: string;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordHash: String,
});

UserSchema.pre('save', async function (this: any) {
  if (this.password) {
    this.passwordHash = await bcrypt.hash(this.password, 8);
    this.password = undefined;
  }
});

export default mongoose.model<IUser>('User', UserSchema);
