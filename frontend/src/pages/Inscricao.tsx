import { useState } from "react";
import axios from "axios";

function Inscricao() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    comprovante: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({ ...form, comprovante: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criando um FormData para enviar os dados
    const formData = new FormData();
    formData.append("nome", form.nome);
    formData.append("email", form.email);
    formData.append("telefone", form.telefone);
    if (form.comprovante) {
      formData.append("comprovante", form.comprovante);
    }

    try {
      await axios.post("SUA_URL_DO_WEBHOOK_GOOGLE_SHEETS", formData);
      alert("Inscrição enviada com sucesso!");
      setForm({ nome: "", email: "", telefone: "", comprovante: null });
    } catch (error) {
      console.error("Erro ao enviar a inscrição:", error);
      alert("Erro ao enviar inscrição. Tente novamente.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Formulário de Inscrição</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFileChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Enviar Inscrição</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
    padding: "2rem",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Inscricao;
