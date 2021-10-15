function check() {
    var ticketid = document.getElementById('ticketid').value;
    var date = document.getElementById('date').value;
    var tickettocancel = document.getElementById('tickettocancel').value;
    if (tickettocancel == '') {
        alert("please fill complete details")
        console.log("halo")
    }
    else if (ticketid =='') {
        alert("please fill complete details")
    }
    else if (date==''){
        alert("please fill complete details")
    }
    else{
        alert("your ticket is cancelled")
    }
}