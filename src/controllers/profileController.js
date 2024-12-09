const User = require('../models/User');

// Obtener el perfil de usuario
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password'); // Excluir la contraseña
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

// Actualizar el perfil de usuario
exports.updateProfile = async (req, res) => {
    const { username, email, profilePicture, bio } = req.body;
  
    try {
      const user = await User.findById(req.user.userId);
      if (!user) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
      }
  
      // Actualizar los campos
      if (username) user.username = username;
      if (email) user.email = email;
      if (profilePicture) user.profilePicture = profilePicture;
      if (bio) user.bio = bio;
  
      // Guardar los cambios
      await user.save();
  
      res.json({ msg: 'Perfil actualizado correctamente' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Error del servidor');
    }
};
  