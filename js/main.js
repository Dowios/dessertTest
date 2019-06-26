var name = '';
var food1 = '';
var food2 = '';
var food3 = '';
$(document).ready(function() {
  init();
	
});

function init() {
	TweenMax.to('.title', 0, {x: 217, y:-450});
	TweenMax.to('.pie', 0, {x: 20, y:1000});
	TweenMax.to('.blank', 0, {x: 400, y:280, rotation:45, transformOrigin:"left bottom", opacity:0});
	TweenMax.to('.go', 0, {opacity:0, x:300, y:300, transformOrigin:"50% bottom"})
	TweenMax.to('.q1', 0, {opacity:0, x:300, y:300, rotation: 90, transformOrigin:"50% bottom"})
	TweenMax.to('.q2', 0, {opacity:0, x:300, y:300, rotation: 90, transformOrigin:"50% bottom"})
	TweenMax.to('.q3', 0, {opacity:0, x:300, y:300, rotation: 90, transformOrigin:"50% bottom"})
	TweenMax.to('.result', 0, {opacity:0, x:300, y:300, rotation: 90, transformOrigin:"50% bottom"})
	$('.title').show();
	$('.pie').show();
	TweenMax.to('.pie', 3, {y:200, ease: Elastic.easeOut.config(0.5, 0.2)});
	TweenMax.to('.pie', 3.5, {rotation:405, ease: Power3.easeInOut, onComplete:scene_0});
	setTimeout(function(){TweenMax.to('.title', 4, {y:-230, ease: Elastic.easeOut.config(1, 0.2)});},500);
}
function scene_0() {
	$('.go').show();
    TweenMax.to('.go', 0.5, {opacity:1});
}

$('#btn_send').click(function(event) {
	name = $('#name').val();
    next_1();
});

function next_1() {
    TweenMax.to('.go', 2, {opacity:0, rotation:-90, ease: Power4.easeInOut});
	TweenMax.to('.pie', 2, {rotation:315, ease: Power4.easeInOut});
	$('.q1').show();
    TweenMax.to('.q1', 2, {opacity:1, rotation:0, ease: Power4.easeInOut});
	setTimeout(function(){scene_1()}, 2000);
}
function next_2() {
    TweenMax.to('.q1', 2, {opacity:0, rotation:-90, ease: Power4.easeInOut});
	TweenMax.to('.pie', 2, {rotation:225, ease: Power4.easeInOut});
	$('.q2').show();
    TweenMax.to('.q2', 2, {opacity:1, rotation:0, ease: Power4.easeInOut});
	setTimeout(function(){scene_2()}, 2000);
}
function next_3() {
    TweenMax.to('.q2', 2, {opacity:0, rotation:-90, ease: Power4.easeInOut});
	TweenMax.to('.pie', 2, {rotation:135, ease: Power4.easeInOut});
	$('.q3').show();
    TweenMax.to('.q3', 2, {opacity:1, rotation:0, ease: Power4.easeInOut});
	setTimeout(function(){scene_3()}, 2000);
}
function next_4() {
    TweenMax.to('.q3', 2, {opacity:0, rotation:-90, ease: Power4.easeInOut});
	TweenMax.to('.pie', 2, {rotation:45, ease: Power4.easeInOut});
	$('.result').show();
	$('.blank').show();
    TweenMax.to('.result', 2, {opacity:1, rotation:0, ease: Power4.easeInOut});
    TweenMax.to('.blank', 2, {opacity:1, rotation:-45, ease: Power4.easeInOut});
    TweenMax.to('#analysis', 0, {opacity:0})
	setTimeout(function(){scene_4()}, 2000);
}

function scene_1() {
	$('.go').hide();
}
function scene_2() {
	$('.q1').hide();
}
function scene_3() {
	$('.q2').hide();
}
function scene_4() {
	$('.q3').hide();
	setTimeout(function(){scene_final()}, 1000);
}
function scene_final() {
	$('#analysis').show();
	TweenMax.to('#calc', 0.3, {opacity:0});
	TweenMax.to('#analysis', 2, {opacity:1})
	save()
}
function save(){
	let parameter = new Object();
    let postURL = "https://script.google.com/a/stu.ntue.edu.tw/macros/s/AKfycbytCTlQiHEtZBndJl2koLSqs6rOLK19026dXidA/exec";
    parameter.method = "write";
    parameter.name = String(name);
    parameter.food1 = String(food1);
    parameter.food2 = String(food2);
    parameter.food3 = String(food3);
    parameter.sheetUrl = "https://docs.google.com/spreadsheets/d/1SFTB5VxIVO3NLVqpRV8AJH4awx3c5ij-TjO_y96R9Ug/edit?usp=sharing";
    parameter.sheetTag = "工作表1";
    $.post(postURL, parameter, function(data) {
        if(data.result == "success"){
        }else{
            alert(data.msg);
        }
    });
}


$('#btn_1_1').click(function(event) {
	food1 = $('#btn_1_1').html();
    next_2();
});
$('#btn_1_2').click(function(event) {
	food1 = $('#btn_1_2').html();
    next_2();
});
$('#btn_1_3').click(function(event) {
	food1 = $('#btn_1_3').html();
    next_2();
});

$('#btn_2_1').click(function(event) {
	food2 = $('#btn_2_1').html();
    next_3();
});
$('#btn_2_2').click(function(event) {
	food2 = $('#btn_2_2').html();
    next_3();
});
$('#btn_2_3').click(function(event) {
	food2 = $('#btn_2_3').html();
    next_3();
});

$('#btn_3_1').click(function(event) {
	food3 = $('#btn_3_1').html();
    next_4();
});
$('#btn_3_2').click(function(event) {
	food3 = $('#btn_3_2').html();
    next_4();
});
$('#btn_3_3').click(function(event) {
	food3 = $('#btn_3_3').html();
    next_4();
});