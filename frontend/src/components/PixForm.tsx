import { useState } from "react";
import axios from "axios";

function PixForm() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", comprovante: null });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    setForm({ ...form, comprovante: e.target.files[0] });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", form.nome);
    formData.append("email", form.email);
    formData.append("telefone", form.telefone);
    formData.append("comprovante", form.comprovante!);

    await axios.post("https://sheetdb.io/api/v1/SUA_PLANILHA", formData);
    alert("Inscrição enviada!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
      <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
      <input type="text" name="telefone" placeholder="Telefone" onChange={handleChange} required />
      <input type="file" name="comprovante" onChange={handleFileChange} required />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default PixForm;
