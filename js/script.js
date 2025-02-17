// Toggle class active 
const navbarNav = document.querySelector
('.navbar-nav');
//ketika menu diklik
document.querySelector('#menu'). 
onclick = () =>{
    navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector ('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
     navbarNav.classList.remove('active');  
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah halaman refresh

        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let message = document.getElementById("message");

        if (username && password) {
            localStorage.setItem("isLoggedIn", "true"); // Simpan status login
            localStorage.setItem("username", username);

            message.style.color = "green";
            message.textContent = "Login berhasil!";

            setTimeout(() => {
                window.location.href = "home.html"; // Redirect ke halaman home
            }, 1000);
        } else {
            message.style.color = "red";
            message.textContent = "Harap isi username dan password!";
        }
    });
});


