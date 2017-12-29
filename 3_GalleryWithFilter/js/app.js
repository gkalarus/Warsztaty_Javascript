/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {
    var imgs = document.querySelectorAll('img');
    var hideButton = document.querySelector('#hideButton');
    var showButton = document.querySelector('#showButton');
    var tagInput = document.querySelector('#tagInput');



    hideButton.addEventListener('click', function (event) {
        var text = tagInput.innerText;
        text = tagInput.value;

        imgs.forEach(function (img) {
            var data = img.dataset.tag;

            if (data.indexOf(text) >= 0) {
                img.classList.add('invisible');
            }
        });

    });

    showButton.addEventListener('click', function (event) {
        var text = tagInput.innerText;
        text = tagInput.value;

        imgs.forEach(function (img) {
            var data = img.dataset.tag;

            if(data.indexOf(text) >= 0) {
                img.classList.remove('invisible');
            }
        });
    });

});

