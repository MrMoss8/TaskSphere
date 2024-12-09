const express = require('express');
const { getProfile, updateProfile } = require('../controllers/profileController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Ruta para obtener el perfil del usuario
router.get('/profile', authenticateToken, getProfile);

// Ruta para actualizar el perfil del usuario
router.put('/profile', authenticateToken, updateProfile);

module.exports = router;
