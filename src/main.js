// Método 1
alert('Hellot word');

// Método 2
console.log("Hello word");

// Método 3
function title(){
    document.getElementById('title').innerHTML = 'Hellow Word';
}

// Método 4
function subtitle(){
    document.getElementById('subtitle-span').textContent = '---Hellow Word---';
}

window.onload = function () {
    title(); // Método 3

    subtitle(); // Método 4

    // Método 5
    const collection = document.getElementsByTagName("li");
    document.getElementById("list").innerHTML = collection[2].innerHTML;
  
    
    // Método 6
    var element = document.querySelector(".subtitle");
    var text = document.createTextNode("--- HELLO WORD");
    element.appendChild(text);

   
}

 // Método 7
document.write("Hello, World!");


// Método 8
window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('button');
    if (btn) {
        btn.addEventListener('click', function() {
               alert('Hellot word');
        });
}});
