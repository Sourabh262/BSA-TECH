import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    role: 'admin' | 'editor';
    matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'editor'],
        default: 'admin'
    }
}, {
    timestamps: true
});

userSchema.methods.matchPassword = async function(enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password before saving
userSchema.pre<IUser>('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    if(this.password) {
        this.password = await bcrypt.hash(this.password, salt);
    }
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
