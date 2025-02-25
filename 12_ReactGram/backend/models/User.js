const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
}, {
    timestamps: true // quando o usuário é criado e quando ele é atualizado
});

const User = mongoose.model("User", userSchema);

module.exports = User;