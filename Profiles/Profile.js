const toggleBtn = document.getElementById('mobilePopup');
const sidePanel = document.getElementById('sidePopup');
const closeBtn = document.getElementById('closeButton');

toggleBtn.addEventListener('click', () => {
  sidePanel.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidePanel.classList.remove('active');
});