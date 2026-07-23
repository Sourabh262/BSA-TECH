import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User';

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || '');
        console.log('MongoDB Connected...');

        const email = 'admin@bsatech.in';
        const userExists = await User.findOne({ email });

        if (userExists) {
            console.log('Admin user already exists!');
            userExists.password = 'admin123';
            await userExists.save();
            console.log('Admin password reset to: admin123');
        } else {
            const user = await User.create({
                name: 'BSA Admin',
                email: email,
                password: 'admin123',
                role: 'admin'
            });
            console.log('Admin user created with email:', user.email);
        }

        process.exit();
    } catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
};

seedAdmin();
