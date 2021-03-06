function stars(){
    const count = 30;
    const section = document.querySelector('section');
    var i = 0;

    while (i < count){
        const star = document.createElement('star');
        const x = Math.floor(Math.random() * window.innerWidth)
        const y = Math.floor(Math.random() * window.innerHeight)

        const size = Math.random() * 4;
        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        const duration = Math.random() * 15;

        star.style.animationDuration = 2+duration+'s';
        star.style.animationDelay = 2+duration+'s';
        
        section.appendChild(star);
        i++;
    }
}

stars();