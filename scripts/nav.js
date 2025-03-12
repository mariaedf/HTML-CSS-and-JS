document.querySelector('.bi-list').addEventListener('click', function() {//nav for mobile
    document.querySelector('.nav-links').classList.toggle('expanded');
    document.querySelector('nav > button:not(.bi-list)').classList.toggle('expanded');
    document.querySelector('nav').classList.toggle('expanded');
});