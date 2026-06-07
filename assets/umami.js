(function () {
    'use strict';

    var cfg = (window.SITE_CONFIG && window.SITE_CONFIG.umami) || {};

    function loadUmami() {
        if (!cfg.enabled || !cfg.scriptUrl || !cfg.websiteId) return;
        if (document.querySelector('script[data-website-id="' + cfg.websiteId + '"]')) return;

        var script = document.createElement('script');
        script.defer = true;
        script.src = cfg.scriptUrl;
        script.setAttribute('data-website-id', cfg.websiteId);
        document.head.appendChild(script);
    }

    function track(name, data) {
        function send() {
            if (typeof umami !== 'undefined' && umami.track) {
                umami.track(name, data);
                return true;
            }
            return false;
        }
        if (send()) return;
        var attempts = 0;
        var timer = setInterval(function () {
            if (send() || ++attempts > 20) clearInterval(timer);
        }, 250);
    }

    function labelFrom(el, selector) {
        var node = el.closest('.download-card, .stream-card, .past-recipe-item') || el.parentElement;
        if (!node) return '';
        var target = selector ? node.querySelector(selector) : node.querySelector('h3, .past-recipe-name');
        return target ? target.textContent.trim().slice(0, 80) : '';
    }

    function bindTracking() {
        document.addEventListener('click', function (e) {
            var el = e.target.closest('a, button, .video-item');
            if (!el) return;

            if (el.classList.contains('btn-main')) {
                track('cta-play-store');
                return;
            }
            if (el.classList.contains('btn-download')) {
                track('download-recipe', { recipe: labelFrom(el, 'h3') });
                return;
            }
            if (el.classList.contains('btn-calendar')) {
                track('add-calendar', { event: labelFrom(el, 'h3') });
                return;
            }
            if (el.classList.contains('past-recipe-download')) {
                track('view-past-recipe', { recipe: labelFrom(el, '.past-recipe-name') });
                return;
            }
            if (el.classList.contains('video-item')) {
                var title = el.querySelector('.video-title');
                track('tutorial-video', { title: title ? title.textContent.trim() : '' });
                return;
            }
            if (el.classList.contains('lang-btn')) {
                track('language', { lang: el.getAttribute('data-lang') });
                return;
            }
            if (el.closest('.past-recipes') && el.classList.contains('btn-secondary')) {
                track('open-past-recipes');
                return;
            }
            if (el.closest('.tutorials') && el.classList.contains('btn-secondary') && el.href) {
                track('youtube-playlist');
            }
        });
    }

    loadUmami();
    bindTracking();
    window.umamiTrack = track;
})();
