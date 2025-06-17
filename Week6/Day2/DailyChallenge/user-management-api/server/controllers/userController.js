const bcrypt = require("bcryptjs");
const { User, HashPwd } = require("../models/user");
const { Op } = require("sequelize");

exports.registerUser = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;

  if (!email || !username || !first_name || !last_name || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({
    where: { [Op.or]: [{ email }, { username }] },
  });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Email or Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const transaction = await sequelize.transaction();
  try {
    const newUser = await User.create(
      {
        email,
        username,
        first_name,
        last_name,
      },
      { transaction }
    );

    await HashPwd.create(
      {
        username: newUser.username,
        password: hashedPassword,
      },
      { transaction }
    );

    await transaction.commit();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    await transaction.rollback();
    res.status(500).json({ message: "Error registering user", error: err });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const user = await HashPwd.findOne({ where: { username } });
  if (!user) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  res.status(200).json({ message: "Login successful" });
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving users", error: err });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving user", error: err });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, username, first_name, last_name, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let updatedFields = { email, username, first_name, last_name };
    if (password) {
      updatedFields.password = await bcrypt.hash(password, 10);
    }

    await user.update(updatedFields);
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
};
