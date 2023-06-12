function starlog() {
  var masuk1 = 
  document.getElementById('username').value + document.getElementById('password').value;

  var masuk2 = ('Adam') + ('12345');
  
  if (masuk1 == masuk2) {
    var logakses = document.getElementById('akses').innerHTML = 'Masuk Berhasil';
  } else {
    var logakses = document.getElementById('akses').innerHTML = 'Nama pengguna atau kata sandi anda salah';
  }
}