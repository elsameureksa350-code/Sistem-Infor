const links = document.querySelectorAll('.sidebar ul li a');
const sections = document.querySelectorAll('.content section');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('href').substring(1);

        // sembunyikan semua section
        sections.forEach(sec => sec.classList.remove('active'));

        // tampilkan section sesuai menu
        document.getElementById(target).classList.add('active');
    });
});

// Default: tampilkan dashboard
document.getElementById('dashboard').classList.add('active');
