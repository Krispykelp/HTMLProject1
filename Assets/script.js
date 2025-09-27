// Update the year in the footer
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
