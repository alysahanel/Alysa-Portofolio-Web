document.addEventListener('DOMContentLoaded', () => {
  const COLLAPSE_KEY = 'legal_sidebar_collapsed';
  const DESKTOP_MQ = '(min-width: 768px)';

  const ensureSidebarCss = () => {
    const exists = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .some((l) => (l.getAttribute('href') || '').includes('global-sidebar.css'));
    if (!exists) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/legal/assets/global-sidebar.css';
      document.head.appendChild(link);
    }
  };

  const ensureBackdrop = () => {
    let backdrop = document.getElementById('sidebarBackdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'sidebarBackdrop';
      backdrop.className = 'sidebar-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }
    return backdrop;
  };

  const highlightActiveLink = (sidebar) => {
    const path = (window.location.pathname || '').toLowerCase();
    let target = '/legal/dashboard.html';
    if (path.includes('elibrary')) {
      target = '/legal/elibrary.html';
    } else if (path.includes('regulatory') || path.includes('import-review')) {
      target = '/legal/regulatory.html';
    } else if (
      path.includes('license-permit') ||
      path.includes('company') ||
      path.includes('operational') ||
      path.includes('safety')
    ) {
      target = '/legal/license-permit.html';
    }

    sidebar.querySelectorAll('a.menu-item[href]').forEach((a) => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href === target) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      } else {
        a.classList.remove('active');
        a.removeAttribute('aria-current');
      }
    });
  };

  const initSidebarLogic = () => {
    const sidebar = document.getElementById('sidebar');
    const btnMenu = document.getElementById('btnMenu');
    const gsToggle = document.getElementById('gsToggle');
    if (!sidebar) return;

    const backdrop = ensureBackdrop();
    highlightActiveLink(sidebar);

    try {
      if (localStorage.getItem(COLLAPSE_KEY) === '1' && window.matchMedia(DESKTOP_MQ).matches) {
        document.body.classList.add('sidebar-collapsed');
      }
    } catch {}

    const closeMobile = () => {
      sidebar.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.classList.remove('sidebar-open');
    };

    const openMobile = () => {
      sidebar.classList.add('open');
      backdrop.classList.add('open');
      document.body.classList.add('sidebar-open');
    };

    const handleToggle = (e) => {
      if (e) e.preventDefault();
      if (window.matchMedia(DESKTOP_MQ).matches) {
        const collapsed = document.body.classList.toggle('sidebar-collapsed');
        try {
          localStorage.setItem(COLLAPSE_KEY, collapsed ? '1' : '0');
        } catch {}
      } else if (sidebar.classList.contains('open')) {
        closeMobile();
      } else {
        openMobile();
      }
    };

    if (btnMenu) {
      btnMenu.addEventListener('click', (e) => {
        e.preventDefault();
        if (sidebar.classList.contains('open')) closeMobile();
        else openMobile();
      });
    }

    if (gsToggle) {
      gsToggle.addEventListener('click', handleToggle);
    }

    backdrop.addEventListener('click', closeMobile);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeMobile();
      }
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia(DESKTOP_MQ).matches) {
        closeMobile();
      }
    });
  };

  ensureSidebarCss();

  const paths = [
    '/legal/assets/sidebar.html',
    './assets/sidebar.html',
    '../assets/sidebar.html',
    '/assets/sidebar.html'
  ];

  const loadSidebar = async () => {
    for (const p of paths) {
      try {
        const response = await fetch(p);
        if (response.ok) {
          const html = await response.text();
          if (document.getElementById('sidebar')) return;

          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = html;
          const sidebarElement = tempDiv.querySelector('aside');
          if (sidebarElement) {
            document.body.insertBefore(sidebarElement, document.body.firstChild);
            initSidebarLogic();
            return;
          }
        }
      } catch {}
    }
  };

  loadSidebar();
});
