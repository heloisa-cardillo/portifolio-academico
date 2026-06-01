const navLinks = [
    { href: 'index.html', label: 'Início' },
    { href: 'curriculo.html', label: 'Currículo' },
    { href: 'projetos.html', label: 'Projetos' },
    { href: 'habilidades.html', label: 'Habilidades' },
    { href: 'cursos.html', label: 'Certificados' },
    { href: 'extracurricular.html', label: 'Extracurricular' },
    { href: 'contato.html', label: 'Contato' },
];

function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'index.html';
    return file === '' ? 'index.html' : file;
}

function buildNav() {
    const current = getCurrentPage();

    const links = navLinks.map(link => {
        const isActive = link.href === current || (current === 'index.html' && link.href === 'index.html');
        return `<li><a href="${link.href}"${isActive ? ' class="active"' : ''}>${link.label}</a></li>`;
    }).join('\n      ');

    const mobileLinks = navLinks.map(link => {
        return `<a href="${link.href}" class="mobile-link">${link.label}</a>`;
    }).join('\n    ');

    const navHTML = `
  <nav class="navbar">
    <a href="index.html" class="navbar-brand">Heloisa <span>Cardillo Lima</span></a>
    <ul class="navbar-links">
      ${links}
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="mobile-menu" id="mobileMenu">
    ${mobileLinks}
  </div>`;

    document.getElementById('navbar').innerHTML = navHTML;

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });
}

document.addEventListener('DOMContentLoaded', buildNav);