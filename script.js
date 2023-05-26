function bgb(){
    document.body.style.backgroundColor = "red";
}

function vibe(){
    document.getElementById("demo").append("Be the best version of you!")
}

function time(){
    var date = new Date();
	document.getElementById("time").innerHTML = date;
}

function pic(){
    document.getElementById("pic").src = "dice-6.png"
}

function no_pic(){
    document.getElementById("pic").style.visibility = 'hidden';
}

function show_pic(){
    document.getElementById("pic").style.visibility = 'visible';
}

function hd(){
    const head = document.getElementById("EventDiv")
    const headb = document.getElementById("event_child_div")
    const pic = document.getElementById("pic")
    head.style.background = "gray"
    head.style.display = "flex"
    head.style.justifyContent = "center"
    head.style.padding = "10px"
    headb.style.display = "flex"
    headb.style.flexDirection = "column"
    headb.style.alignItems = "center"
    pic.style.borderWidth = "5px"
    pic.style.borderColor = "red"
    pic.style.borderStyle = "solid"
}

function hd_hide(){
    document.getElementById("EventDiv").style.visibility = 'hidden';
    document.getElementById("pic").style.visibility = 'hidden';
}

function hd_show(){
    document.getElementById("EventDiv").style.visibility = 'visible';
    document.getElementById("pic").style.visibility = 'visible';
}