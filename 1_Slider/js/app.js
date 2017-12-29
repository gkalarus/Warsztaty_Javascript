document.addEventListener("DOMContentLoaded", function() {
    var prevBtn = document.querySelector('#prevPicture');
    var nextBtn = document.querySelector('#nextPicture');
    var list = document.querySelector('div');
    var index = 0;
    var lis = document.querySelectorAll('li');

    list.classList.add('slider');

    lis[index].classList.add('visible');

    prevBtn.addEventListener('click', function (event) {
        lis[index].classList.remove('visible');
        index--;
        if (index < 0) {
            index = lis.length-1;
        }
        lis[index].classList.add('visible');
    });


    nextBtn.addEventListener('click', function (event) {
        lis[index].classList.remove('visible');
        index++;
        if (index >= lis.length) {
            index = 0;
        }
        lis[index].classList.add('visible');
    });



});
