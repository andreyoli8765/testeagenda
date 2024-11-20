function showMonth(month) {
    const sections = document.querySelectorAll('.agenda');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    document.getElementById(month).classList.remove('hidden');
    document.getElementById(month).classList.add('active');
}

// Mostrar o primeiro mês ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    showMonth('outubro');
});
