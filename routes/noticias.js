const express = require("express");
const router = express.Router();
const Noticia = require("../models/Noticia");

// Obtener todas las noticias
router.get("/", async (req, res) => {
  try {
    const noticias = await Noticia.find().sort({ createdAt: -1 });
    res.json(noticias);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener noticias" });
  }
});

// Crear noticia
router.post("/", async (req, res) => {
  try {
    const nuevaNoticia = new Noticia(req.body);
    const guardada = await nuevaNoticia.save();
    res.json(guardada);
  } catch (err) {
    res.status(500).json({ error: "Error al crear noticia" });
  }
});

// Editar noticia
router.put("/:id", async (req, res) => {
  try {
    const noticia = await Noticia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(noticia);
  } catch (err) {
    res.status(500).json({ error: "Error al editar noticia" });
  }
});

// Eliminar noticia
router.delete("/:id", async (req, res) => {
  try {
    await Noticia.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Noticia eliminada" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar noticia" });
  }
});

module.exports = router;
