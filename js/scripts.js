var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var choice5 = document.getElementById('choice5');
var choice6 = document.getElementById('choice6');
var choice7 = document.getElementById('choice7');
var choice8 = document.getElementById('choice8');
var choice9 = document.getElementById('choice9');
var choice10 = document.getElementById('choice10');
var reset = document.getElementById('reset');
choice1.onclick = function () {
    document.getElementById('part2.1').classList.remove('invisible');
    choice2.classList.add('invisible');
    choice3.classList.remove('invisible');
    choice4.classList.remove('invisible');
};
choice2.onclick = function () {
    document.getElementById('part2.2').classList.remove('invisible');
    choice1.classList.add('invisible');
    choice3.classList.remove('invisible');
    choice4.classList.remove('invisible');
};
choice3.onclick = function () {
    document.getElementById('part3.1').classList.remove('invisible');
    choice4.classList.add('invisible');
    choice5.classList.remove('invisible');
    choice6.classList.remove('invisible');
};
choice4.onclick = function () {
    document.getElementById('part3.2').classList.remove('invisible');
    choice3.classList.add('invisible');
    choice7.classList.remove('invisible');
    choice8.classList.remove('invisible');
};
choice5.onclick = function () {
    document.getElementById('part4.1').classList.remove('invisible');
    choice6.classList.add('invisible');
    choice9.classList.remove('invisible');
    choice10.classList.remove('invisible');
};
choice6.onclick = function () {
    document.getElementById('part3.3').classList.remove('invisible');
    choice5.classList.add('invisible');
    choice9.classList.remove('invisible');
    choice10.classList.remove('invisible');
};
choice7.onclick = function () {
    document.getElementById('part4.2').classList.remove('invisible');
    choice8.classList.add('invisible');
    choice9.classList.remove('invisible');
    choice10.classList.remove('invisible');
};
choice8.onclick = function () {
    document.getElementById('part4.3').classList.remove('invisible');
    choice7.classList.add('invisible');
    choice9.classList.remove('invisible');
    choice10.classList.remove('invisible');
};
choice9.onclick = function () {
    document.getElementById('end').classList.remove('invisible');
    choice10.classList.add('invisible');
    reset.classList.remove('invisible');
};
choice10.onclick = function () {
    document.getElementById('end').classList.remove('invisible');
    choice9.classList.add('invisible');
    reset.classList.remove('invisible');
};
reset.onclick = function () {
    document.getElementById('part2.1').classList.add('invisible');
    document.getElementById('part2.2').classList.add('invisible');
    document.getElementById('part3.1').classList.add('invisible');
    document.getElementById('part3.2').classList.add('invisible');
    document.getElementById('part3.3').classList.add('invisible');
    document.getElementById('part4.1').classList.add('invisible');
    document.getElementById('part4.2').classList.add('invisible');
    document.getElementById('part4.3').classList.add('invisible');
    document.getElementById('end').classList.add('invisible');
    choice1.classList.remove('invisible');
    choice2.classList.remove('invisible');
    choice3.disabled = false;
    choice3.classList.add('invisible');
    choice4.disabled = false;
    choice4.classList.add('invisible');
    choice5.disabled = false;
    choice5.classList.add('invisible');
    choice6.disabled = false;
    choice6.classList.add('invisible');
    choice7.disabled = false;
    choice7.classList.add('invisible');
    choice8.disabled = false;
    choice8.classList.add('invisible');
    choice9.disabled = false;
    choice9.classList.add('invisible');
    choice10.disabled = false;
    choice10.classList.add('invisible');
    reset.classList.add('invisible');
};
function bottom()
 {
 if ((document.body.scrollTop + document.body.clientHeight) == document.body.scrollHeight)
 return 'yes';
 }


function scroll()
  {
 if (bottom() == 'yes')
 scrollAuto();
  }


function scrollAuto()
  {
  window.scrollBy(0,100000);
  }


function ecriture(texte)
  {
 var z = bottom();
 document.body.innerHTML +=texte + '';
 if (z == 'yes')
 scrollAuto();
  } 
