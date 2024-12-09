const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Registrar un nuevo usuario
exports.registerUser = async (req, res) => {
  // Validar los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    user = new User({
      username,
      email,
      password,
    });

    // Guardar el usuario en la base de datos
    await user.save();

    // Responder con éxito
    res.status(201).json({ msg: 'Usuario registrado correctamente' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

// Validar nuevo usuario
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Credenciales incorrectas' });
      }
  
      // Verificar la contraseña
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Credenciales incorrectas' });
      }
  
      // Crear un JWT
      const payload = {
        userId: user.id,
      };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Enviar el token al cliente
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Error del servidor');
    }
  };