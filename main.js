
$(document).ready(function() {

    $('.portfolio, .contact').removeClass("active");
    $('.about').addClass("active");

    $(".display1").html("<div class='gendiv'><img class='circle javaimg' src='test.jpg' /><br />My name is Alex von Bredow</div>")

    $(".about").on('click', function() {
         $('.portfolio, .contact').removeClass("active");
         $(this).addClass("active");
        $(".display1").html("<div class='gendiv'><img class='circle javaimg' src='test.jpg' /><br />My name is Alex von Bredow</div>")
    });
    $(".portfolio").on('click', function() {
         $('.about, .contact').removeClass("active");
          $(this).addClass("active");
        $(".display1").html("<div class='gendiv'><div class='container'><div class='row center nomargin'><i class='icons fadein6 devicon-webpack-plain'></i><i class='icons fadein7 devicon-jquery-plain'></i></div><div class='row center nomargin'><i class='icons fadein5 devicon-react-original'></i><i class='icons fadein1 devicon-javascript-plain'></i><i class='icons fadein8 devicon-html5-plain'></i></div><div class='row center nomargin'><i class='icons fadein14 devicon-css3-plain'></i><i class='icons fadein4 devicon-bootstrap-plain'></i><i class='icons fadein2 devicon-nodejs-plain'></i><i class='icons fadein9 devicon-git-plain'></i></div><div class='row center nomargin'><i class='icons fadein13 devicon-mongodb-plain'></i><i class='icons fadein3 devicon-atom-original'></i><i class='icons fadein10 devicon-heroku-original'></i></div><div class='row center nomargin'><i class='icons fadein12 devicon-mocha-plain'></i><i class='icons fadein11 devicon-sequelize-plain'></i></div></div></div>")
    });
    $(".contact").on('click', function() {
         $('.portfolio, .about').removeClass("active");
         $(this).addClass("active");
        $(".display1").html("<div class='gendiv container'><br /><div class='row'><div class='cont1 col m6 s12 offset-m3'>Contact Me:</div></div><div class='row'><div class='smallertext col s12 m6 offset-m3'>Feel free to send me an email <br /> or reach out to me on linkedin.</div></div><div class='row center-align'><a href='https://stackoverflow.com/users/8922460/'><div class='stackoverflow center col s4 m1 offset-m4'></div></a><a href='https://github.com/Alexvb92'><div class='github center col s4 m1'></div></a><a href='https://www.linkedin.com/in/alexander-von-bredow-783885a9/'><div class='linkedin center col s4 m1'></div></a></div><div class='row center-align'><div class='col s12 m6 offset-m3 contyinfo'> Alexander von Bredow | alvb92@gmail.com</div><div>")
    });

});
