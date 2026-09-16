/* The résumé content lives in resume.html; JavaScript only handles these controls. */
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
          status.textContent = 'WeChat ID copied: ' + id;
          wechatButton.dataset.copied = 'true';
          setTimeout(() => { delete wechatButton.dataset.copied; }, 1800);
        } catch {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(wechatButton);
          selection.removeAllRanges();
          selection.addRange(range);
          status.textContent = 'WeChat ID selected. Copy ' + id + ' to add this contact.';
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
