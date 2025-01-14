import { useState } from "react";

const LiveDemo = () => {
  const [comment, setComment] = useState("");
  const [sentiment, setSentiment] = useState<string | null>(null);

  const analyzeComment = () => {
    // Simula análisis de sentimiento (puedes conectarlo a AWS más adelante).
    const analysis = comment.includes("good")
      ? "Positivo"
      : comment.includes("bad")
      ? "Negativo"
      : "Neutral";
    setSentiment(analysis);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Demo en Vivo</h1>
      <p>Inserta un comentario para analizarlo:</p>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: "1rem" }}
      ></textarea>
      <button onClick={analyzeComment} style={{ marginBottom: "1rem" }}>
        Analizar Comentario
      </button>
      {sentiment && (
        <p>
          <strong>Resultado:</strong> {sentiment}
        </p>
      )}
      {/* Aquí podrías agregar un iframe de QuickSight para análisis grupales */}
    </div>
  );
};

export default LiveDemo;
