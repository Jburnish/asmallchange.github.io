/* Mobile Navigation Toggle */
(function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) { return; }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.contains('is-open');
    nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  });
}());
