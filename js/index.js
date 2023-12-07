function toggleSuboptions(optionId) {
    const suboptions = document.getElementById(optionId);
    suboptions.style.display = 'block';
}

function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

document.addEventListener('click', function (event) {
    // Não fechar as subopções quando clicar fora da opção principal
    if (!event.target.closest('.menu-option')) {
        event.stopPropagation(); // Impede a propagação do evento de clique
    }

});
