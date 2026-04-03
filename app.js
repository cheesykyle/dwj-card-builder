(function () {
  function mount() {
    const el = document.getElementById('restricted-react-app');
    if (!el || el.dataset.mounted === 'true') return;
    el.dataset.mounted = 'true';
    el.innerHTML = '<div style="padding:16px;border:1px solid #ccc;">Bundle loaded successfully</div>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
