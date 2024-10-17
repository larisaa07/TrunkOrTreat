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
    document.getElementById('text').innerText= "The trunk-or-treat event, organized by the school's peer leaders, invites students and families to gather in a festive atmosphere where creatively decorated car trunks serve as candy stations. Set up in the school parking lot, each trunk features unique themes, providing a safe and engaging environment for kids to enjoy trick-or-treating without the need to walk through neighborhoods. Alongside the candy distribution, there are fun activities like games, face painting, and seasonal crafts, fostering community spirit and encouraging positive interactions among students, parents, and staff. The event aims to create lasting memories while promoting a sense of belonging and fun during the Halloween season."
    document.getElementById('image').src= 'pharmacyLabImage.jpg'
}

//function to change the html to show the time and place of the event
function time(){
    date.innerText= 'Time & Place:'
    document.getElementById('text').innerText= "To work in thei field, I will need 7+ years of higher education, a masters in pharmacy, at least a bachelor's degree in chemistry, biology, and/or anatomy, and I'd need to take two tests (knowledge of and laws of pharmacy) to get licenced. Potential colleges to recieve the necessary degrees include: The University of Cincinnati, The University of Kansas, and Palm Beach Atlantic University."
    document.getElementById('image').src= 'checkListImage.jpg'
}

//function to change the html to show highlights of the event
function highlights(){
    document.getElementById('what').innerText= 'Highlights:'
    document.getElementById('text').innerText= "The median yearly income for a pharmacist is $128,570. The projected growth rate for this job is 3.1%, and the projected 10 year openings is 78,400."
    document.getElementById('image').src= 'growthImage.jpeg'
}

//function to change the html to show a gallery of past events
function gallery(){
    document.getElementById('what').innerText= 'Gallery:'
    document.getElementById('text').innerText= "The median yearly income for a pharmacist is $128,570. The projected growth rate for this job is 3.1%, and the projected 10 year openings is 78,400."
    document.getElementById('image').src= 'growthImage.jpeg'
}