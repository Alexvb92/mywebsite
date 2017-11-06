
$(document).ready(function() {
    $(".about").on('click', function() {
        $(".display1").html("<div class='gendiv'><img class='circle javaimg' src='test.jpg' /><br />My name is Alex von Bredow</div>")
    });
    $(".portfolio").on('click', function() {
         $('.display1').addClass('');
        $(".display1").html("<div class='gendiv'><div class='container'><div class='row center nomargin'><i class='icons flipInX6 devicon-webpack-plain'></i><i class='icons flipInX7 devicon-jquery-plain'></i></div><div class='row center nomargin'><i class='icons flipInX5 devicon-react-original'></i><i class='icons flipInX1 devicon-javascript-plain'></i><i class='icons flipInX8 devicon-html5-plain'></i></div><div class='row center nomargin'><i class='icons flipInX14 devicon-css3-plain'></i><i class='icons flipInX4 devicon-bootstrap-plain'></i><i class='icons flipInX2 devicon-nodejs-plain'></i><i class='icons flipInX9 devicon-git-plain'></i></div><div class='row center nomargin'><i class='icons flipInX13 devicon-mongodb-plain'></i><i class='icons flipInX3 devicon-atom-original'></i><i class='icons flipInX10 devicon-heroku-original'></i></div><div class='row center nomargin'><i class='icons flipInX12 devicon-mocha-plain'></i><i class='icons flipInX11 devicon-sequelize-plain'></i></div></div></div><div class=flipInX> THEI S SHOULD WORK!!!!</div>")
    });
    $(".contact").on('click', function() {
        $(".display1").html("<div class='gendiv'><img class='circle javaimg' src='test.jpg' /><br />yo uc an co nt ac tm eh er e</div>")
    });

});
