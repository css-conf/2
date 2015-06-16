function $(sel) {
  if(/^[#][^\s]+$/.test(sel)) return document.querySelector(sel);
  return [].slice.call(document.querySelectorAll(sel));
}

fullpage.initialize('#wrapper', {
  menu: '#nav',
  sectionSelector: '.section',
  css3: true
});

$('[data-section]').forEach(function(sec) {
  sec.addEventListener('click', function(e) {
    e.preventDefault();
    var index = sec.getAttribute('data-section');
    fullpage.moveTo(index);
  });
});
