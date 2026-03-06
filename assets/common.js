(function () {
    const NAV_ITEMS = [
        { id: 'nav-resume', href: 'index.html',        label: 'RESUME' },
        { id: 'nav-repos',  href: 'repositories.html', label: 'REPOSITORIES' },
        { id: 'nav-trans',  href: 'translations.html', label: 'TRANSLATIONS' },
        { id: 'nav-photos', href: 'photography.html',  label: 'PHOTOGRAPHY' },
    ];

    function renderHeader() {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = NAV_ITEMS.map(function (item) {
            const active = item.href === page ? ' class="active"' : '';
            return '<a href="' + item.href + '" id="' + item.id + '"' + active + '>' + item.label + '</a>';
        }).join('\n            ');

        const header = document.getElementById('site-header');
        if (!header) return;
        header.innerHTML =
            '\n        <h1>LI Zhengxuan</h1>' +
            '\n        <p class="bio">2025-2026 City University of Hong Kong <br> 2018-2022 China University of Geosciences(Beijing) <br> C++/Computer Graphics/Machine Learning/Web 3</p>' +
            '\n        <div class="nav-links">' +
            '\n            ' + navLinks +
            '\n            <a href="https://github.com/Verginius" target="_blank">GITHUB</a>' +
            '\n            <a href="mailto:lizhengxuan_2023@outlook.com">EMAIL</a>' +
            '\n        </div>\n    ';
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderHeader();
        var yr = document.getElementById('year');
        if (yr) yr.textContent = new Date().getFullYear();
    });
}());
