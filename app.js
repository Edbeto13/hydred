async function enviarPrompt() {
  const prompt = document.getElementById('prompt').value;
  const respuesta = document.getElementById('respuesta');
  respuesta.textContent = "Procesando...";

  const apiKey = "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";

  const payload = {
    model: "meta/llama3-70b-instruct",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5,
    top_p: 1,
    max_tokens: 1024,
    stream: false
  };

  try {
    const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const resultado = await response.json();
    const texto = resultado.choices?.[0]?.message?.content || "Sin respuesta del modelo.";
    respuesta.textContent = texto;
  } catch (error) {
    respuesta.textContent = "❌ Error al llamar al modelo: " + error.message;
  }
}
