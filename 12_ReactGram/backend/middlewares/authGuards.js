const User = require("../models/User")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

const authGuard = async (req, res, next) => {

    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1];

    // Verifica se o header tem o token
    if(!token) {
        return res.status(401).json({ erros: ["Acesso negado!"]})
    }

    // Verifica se o token é valido
    try {
        
        const verified = jwt.verify(token, jwtSecret)

        req.user = await User.findById(verified.id).select("-password")

        next();

    } catch (error) {
        res.status(401).json({ erros: ["Token inválido."] })
    }

};

module.exports = authGuard;