document.querySelectorAll('.expandable').forEach(item => {
    item.addEventListener('click', function(event) {
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});







