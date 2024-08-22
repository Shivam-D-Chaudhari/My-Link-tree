const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const container = document.querySelector('.container');
const links = document.querySelectorAll('.link');
const bio = document.querySelector('.bio');
const h1 = document.querySelector('h1');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.style.backgroundColor = '#f5f5f5';
        body.style.color = '#222';
        container.style.backgroundColor = 'white';
        h1.style.color = '#222';
        bio.style.color = '#555';
        links.forEach(link => {
            link.style.backgroundColor = '#555';
            link.style.color = 'white';
        });
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'purple';
        container.style.backgroundColor = '#222';
        h1.style.color = 'purple';
        bio.style.color = '#bbb';
        links.forEach(link => {
            link.style.backgroundColor = 'purple';
            link.style.color = 'white';
        });
    }
});
