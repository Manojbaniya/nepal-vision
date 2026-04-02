function showTab(id, btn) {
  document.querySelectorAll('section').forEach(function(s) {
    s.classList.remove('active');
  });
  document.querySelectorAll('nav button').forEach(function(b) {
    b.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// COUNTDOWN TO JANUARY 1, 2036
function updateCountdown() {
  var target = new Date('January 1, 2036 00:00:00').getTime();
  var now = new Date().getTime();
  var diff = target - now;

  if (diff <= 0) {
    document.querySelector('.countdown-timer').innerHTML =
      '<span style="color:#ff9933;font-size:24px;">🏔️ The time has come! Jai Nepal!</span>';
    return;
  }

  var totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  var years     = Math.floor(totalDays / 365);
  var months    = Math.floor((totalDays % 365) / 30);
  var days      = Math.floor((totalDays % 365) % 30);
  var hours     = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes   = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds   = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('years').innerText   = String(years).padStart(2, '0');
  document.getElementById('months').innerText  = String(months).padStart(2, '0');
  document.getElementById('days').innerText    = String(days).padStart(2, '0');
  document.getElementById('hours').innerText   = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);