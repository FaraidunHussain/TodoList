
let x = document.querySelector("input");
let btn = document.querySelector(".letters");
let n = document.querySelector(".content");
window.onload = function () {
btn.onclick = function () {
  if (x.value === 'none') {
    console.log("need action");
  }; 
    let z = document.createElement('span');
    let y = document.createElement('span');
    let text = document.createTextNode(x.value);
    let delet = document.createTextNode('Delete');
    z.appendChild(text);
    z.className = '';
    y.appendChild(delet);
    y.className = 'delete';
    z.appendChild(y);
    n.appendChild(z);
    x.value = '';
    x.focus();
  }
};
document.addEventListener('click', function (e) {
  if (e.target.className == 'delete') {
    e.target.parentNode.remove();
  }
});


