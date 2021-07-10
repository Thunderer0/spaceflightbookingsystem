function check() {
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pwd').value;
    if (username == '' && pass == 'admin') {
        alert("Welcome succesfull login")
        location.replace("adminhome.html")}
    else if (username == 'customer' && pass == 'customer') {
        alert("Welcome succesfull login")
        location.replace("userhomepage.html")
    } 
    else {
        alert("Wrong Data")
    }
}