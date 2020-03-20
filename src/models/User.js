import { compare, hash } from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
}, {
    timestamps: true,
});

userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await hash(this.password, 10);
    }
});

userSchema.methods.matchesPassword = async function (password) {
    return compare(password, this.password);
};

export default mongoose.model('user', userSchema);