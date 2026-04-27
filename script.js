function mostrarCuriosidade() {
    const curiosidades = [
        "Cerca de 1/3 de todos os alimentos produzidos no mundo é desperdiçado.",
        "A fome poderia ser reduzida significativamente com melhor distribuição de alimentos.",
        "Pequenas ações, como doações, ajudam a combater a fome.",
        "A fome ainda atinge muita gente no mundo, principalmente por causa da má distribuição de comida. Desperdício, falta de água e mudanças climáticas pioram tudo, mas dá pra ajudar com ações simples e solidariedade."
    ];

    const aleatorio = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("curiosidade").innerText = curiosidades[aleatorio];
}