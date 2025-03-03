const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const jwtSecret = process.env.JWT_SECRET;

// Gerar o token de usuário
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// Register use and sign in
const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Verifica se o usuário já existe
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ errors: ["Por favor utilize outro e-mail."] });
    return;
  }

  // Gera a senha hash
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  // Criar o usuário
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  // Se o usuário foi criado, retorna o token
  if (!newUser) {
    res
      .status(422)
      .json({ errors: ["Houve um erro, por favor tente mais tarde."] });
    return;
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    res.status(404).json({ errors: ["Usuário não encontrado."] });
    return;
  }

  // Verifica se as senhas dão match
  if (!bcrypt.compare(password, user.password)) {
    res.status(422).json({ errors: ["Senha incorreta."] });
    return;
  }

  // Retorna o token
  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
};

// Pegar o usuário atual
const getCurrentUser = async (req, res) => {
  const user = req.user;

  res.status(200).json(user);
};

// Atualizar usuário
const update = async (req, res) => {
  const { name, password, bio } = req.body;

  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }

  const reqUser = req.user;

  // Correção: Use 'new' para criar uma instância de ObjectId
  const user = await User.findById(
    new mongoose.Types.ObjectId(reqUser._id)
  ).select("-password");

  if (name) {
    user.name = name;
  }

  if (password) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    user.password = passwordHash;
  }

  if (profileImage) {
    user.profileImage = profileImage;
  }

  if (bio) {
    user.bio = bio;
  }

  await user.save();

  res.status(200).json(user);
};

// Buscar Usuário por id
const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(new mongoose.Types.ObjectId(id)).select(
    "-password"
  );

  // Check if user exists
  if (!user) {
    res.status(404).json({ errors: ["Usuário não encontrado!"] });
    return;
  }

  res.status(200).json(user);
};

module.exports = {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
};
