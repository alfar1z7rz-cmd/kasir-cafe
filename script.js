// Menunggu hingga dokumen HTML selesai dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', function () {
    // 1. Ambil elemen form login
    const loginForm = document.querySelector('form');
    // 2. Ambil elemen input berdasarkan ID yang ada di HTML
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Tambahkan event listener untuk menangkap aksi 'submit' pada form
    loginForm.addEventListener('submit', function (event) {
        
        // Mencegah form dikirim secara default (agar kita bisa memprosesnya dengan JS)
        event.preventDefault();

        // Ambil nilai dari input dan hilangkan spasi di awal/akhir
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // 3. VALIDASI FORM: Pastikan input tidak kosong
        if (username === '' || password === '') {
            alert('❌ Mohon isi kolom User Name dan Paswort dengan lengkap!');
            
            // Fokuskan kursor ke input yang kosong
            if (username === '') {
                usernameInput.focus();
            } else if (password === '') {
                passwordInput.focus();
            }
            
            // Hentikan proses login
            return; 
        }

        // 4. SIMULASI PROSES LOGIN
        
        // Di aplikasi nyata, kode di bawah ini akan diganti dengan 
        // panggilan (fetch/axios) ke server backend Anda.
        
        console.log('Mencoba Login dengan:', username);

        // Contoh Kredensial Simulasi: username 'siswa' dan password 'smkhebat'
        const VALID_USERNAME = 'siswa';
        const VALID_PASSWORD = 'smkhebat';

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            // Login Berhasil
            alert('✅ Login Berhasil! Selamat datang, ' + username.toUpperCase() + '!');
            
            // Di sini Anda akan mengarahkan pengguna ke halaman utama/dashboard
            // window.location.href = 'dashboard.html'; 
            
        } else {
            // Login Gagal
            alert('🚫 Login Gagal! User Name atau Paswort yang Anda masukkan salah.');
            
            // Kosongkan kolom password dan fokuskan kembali
            passwordInput.value = ''; 
            passwordInput.focus();
        }

    });
});
