/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function() {

    var allImgs = document.querySelectorAll('img');
    var body = document.querySelector('body');

    console.log(allImgs);
    console.log(body);

    allImgs.forEach(function (img) {
        img.addEventListener('click', function (event) {
            var src = this.getAttribute('src');
            var newDiv = document.createElement('div');
            var newImg = document.createElement('img');
            var newBtn = document.createElement('button');

            body.appendChild(newDiv).appendChild(newImg);
            newDiv.appendChild(newBtn);
            newBtn.innerText = "Close";

            newDiv.classList.add('fullScreen');
            newImg.setAttribute('src', src);
            newBtn.classList.add('close');

            newBtn.addEventListener('click', function (event) {
                newDiv.parentElement.removeChild(newDiv);
            });
        });
    });
});
