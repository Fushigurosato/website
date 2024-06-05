document.getElementById('loginBtn').addEventListener('click', function() {
  document.getElementById('loginModal').style.display = 'block';
});

document.getElementById('signupBtn').addEventListener('click', function() {
  document.getElementById('signupModal').style.display = 'block';
});

document.getElementsByClassName('close').forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function() {
    this.parentElement.parentElement.style.display = 'none';
  });
});
