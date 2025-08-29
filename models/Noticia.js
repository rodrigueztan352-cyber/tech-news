const mongoose = require("mongoose");

const noticiaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    resumen: { type: String, required: true },
    contenido: { type: String, required: true },
    categoria: { type: String, default: "General" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Noticia", noticiaSchema);
