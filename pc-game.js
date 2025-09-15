// PC helpers: keyboard shortcuts and subtle UI sound
window.addEventListener('load', () => {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); document.getElementById('saveGameBtn')?.click(); }
    if (!e.ctrlKey && !e.metaKey && e.key.toLowerCase() === 'n') { document.getElementById('generateMapBtn')?.click(); }
    if (e.key === 'Escape') { document.querySelector('.building-card.selected')?.classList.remove('selected'); }
  });
  const hover = new Audio('ui_click.mp3'); hover.volume = 0.15;
  document.querySelectorAll('.building-card').forEach(card => {
    card.addEventListener('mouseenter', () => { try { hover.currentTime = 0; hover.play().catch(()=>{}); } catch {} });
  });
});

