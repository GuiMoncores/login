const node = document.getElementById('mode-icon');

node.addEventListener('click', () => {

    const form = document.getElementById('login-form');

    if(node.classList.contains('fa-moon')) {
        node.classList.remove('fa-moon');
        node.classList.add('fa-sun');
        form.classList.add('dark');
        return;
    }
    node.classList.add('fa-moon');
    node.classList.remove('fa-sun');
    form.classList.remove('dark');
});

