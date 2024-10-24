$('document').ready(function(){
    $('.fadeTitle').hide()
});

$('.fadeTitleImg').on('mouseover', function() {
    $('.fadeTitleImg').fadeOut(2000);
    $('.fadeTitle').hide().delay(2000).fadeIn(2000);
    
});

let date = document.getElementById('what');





//function to change the html to show an overview of the event
function overview(){
    date.innerText= 'Overview:'
    document.getElementById('text').innerText= "The trunk-or-treat event, organized by the school's peer leaders, invites students and families to a festive gathering in the school parking lot. Creatively decorated car trunks serve as candy stations, providing a safe alternative to traditional trick-or-treating. The event includes games, face painting, and seasonal crafts, fostering community spirit and encouraging positive interactions among students, parents, and staff, all while creating lasting Halloween memories."
}

//function to change the html to show the time and place of the event
function time(){
    date.innerText= 'Time & Place:'
    document.getElementById('text').innerText= "."
}

//function to change the html to show highlights of the event
function highlights(){
    document.getElementById('what').innerText= 'Highlights:'
    document.getElementById('text').innerText= "."
}

//function to change the html to show a gallery of past events
function gallery(){
    document.getElementById('what').innerText= 'Gallery:'
    document.getElementById('text').innerText= "."
}