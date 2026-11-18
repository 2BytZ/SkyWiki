document.querySelectorAll('.link-preview').forEach(el => {
  const next = el.nextSibling;
  if (next?.nodeType === Node.TEXT_NODE) {
    const m = next.textContent.match(/^[,.;:!?)'"]+/);
    if (m) {
      const wrap = document.createElement('span');
      wrap.style.whiteSpace = 'nowrap';
      el.replaceWith(wrap);
      wrap.append(el, m[0]);
      next.textContent = next.textContent.slice(m[0].length);
    }
  }
});