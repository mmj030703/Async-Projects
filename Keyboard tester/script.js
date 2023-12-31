const container = document.querySelector('.pressed-key');

window.addEventListener('keydown', function(e) {
    const keyElement = document.querySelector('.pressed-key table tr .key-value');
    const codeElement = document.querySelector('.pressed-key table tr .code-value');

    codeElement.textContent = e.code;
    keyElement.textContent = codeElement.textContent === 'Space' ? 'Space' : e.key;

    container.style.display = "block";
});