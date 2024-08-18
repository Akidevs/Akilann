document.getElementById('movePencil').onclick = function() {
    var pencil = document.getElementById('pencil');
    var ink = document.getElementById('ink');
    
   
    pencil.style.animation = 'none';
    ink.style.width = '10';
    
   
    pencil.offsetHeight; 
    ink.offsetWidth;
    

    var randomX = Math.random() * 300; 
    var randomY = Math.random() * 200;
    
    
    pencil.style.animation = `pencilMove 5s linear infinite`; 
    pencil.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    
    ink.style.transition = 'width 10s linear'; 
    ink.style.width = '300px';
};
