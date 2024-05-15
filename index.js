const accordion = document.querySelectorAll('.label');

accordion.forEach(label => {
    label.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
        if (content.classList.contains('active')) {
            content.style.height = content.scrollHeight + 'px';
        } else {
            content.style.height = 0;
        }
    });
});
