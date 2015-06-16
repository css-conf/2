fullpage.initialize('#wrapper', {
  menu: '#nav',
  sectionSelector: '.section',
  css3: true
});

[].slice.call(document.querySelectorAll('[data-section]')).forEach(function(sec) {
  sec.addEventListener('click', function(e) {
    e.preventDefault();
    var index = sec.getAttribute('data-section');
    fullpage.moveTo(index);
  });
});
