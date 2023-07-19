// Mendeteksi perangkat pengguna
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Mengarahkan pengguna ke halaman yang sesuai
if (isMobile) {
  window.location.href = 'mobile.html'; // Arahkan ke mobile.html jika pengguna menggunakan perangkat mobile
} else {
  window.location.href = 'desktop.html'; // Arahkan ke desktop.html jika pengguna menggunakan perangkat desktop
}
