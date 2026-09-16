/* Each résumé is editable HTML; localized button feedback comes from its data attributes. */
(() => {
  function initializeResume() {
    const printButton = document.querySelector('[data-print]');
    if (printButton && !printButton.dataset.ready) {
      printButton.dataset.ready = 'true';
      printButton.addEventListener('click', () => window.print());
    }

    const wechatButton = document.querySelector('[data-copy-wechat]');
    if (wechatButton && !wechatButton.dataset.ready) {
      wechatButton.dataset.ready = 'true';
      wechatButton.addEventListener('click', async () => {
        const id = wechatButton.dataset.copyWechat;
        const status = document.querySelector('[data-copy-status]');
        try {
          if (!navigator.clipboard) throw new Error('Clipboard unavailable');
          await navigator.clipboard.writeText(id);
          status.textContent = wechatButton.dataset.copySuccess + id;
          wechatButton.dataset.copied = 'true';
          setTimeout(() => { delete wechatButton.dataset.copied; }, 1800);
        } catch {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(wechatButton);
          selection.removeAllRanges();
          selection.addRange(range);
          status.textContent = wechatButton.dataset.copyFallback + id;
        }
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeResume, { once: true });
  } else {
    initializeResume();
  }
})();
