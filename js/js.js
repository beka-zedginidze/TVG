let mybutton = document.getElementById("scrollTop");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function ShowAndHide() {
  var x = document.getElementById('SectionName');


  if (x.style.display == 'block') {
      x.style.display = 'none';
  } else {
      x.style.display = 'block';
  }

}

function ShowAndHide1() {
  var y = document.getElementById('SectionName1');
  if (y.style.display == 'block') {
    y.style.display = 'none';
} else {
    y.style.display = 'block';
}
}


function ShowAndHide2() {
  var z = document.getElementById('SectionName2');
  if (z.style.display == 'block') {
    z.style.display = 'none';
} else {
    z.style.display = 'block';
}
}


function ShowAndHide3() {
  var i = document.getElementById('SectionName3');
  if (i.style.display == 'block') {
    i.style.display = 'none';
} else {
    i.style.display = 'block';
}
}