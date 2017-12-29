/**
 * Created by Jacek on 2015-12-16.
 */


document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('div');
    menu.classList.add('nav');
    var menuLis = document.querySelectorAll('div > ul > li');

    menuLis.forEach(function (menuLi) {
        menuLi.addEventListener('mouseover', function (event) {
            var subMenu = this.querySelector('ul');
            if (subMenu) {
                subMenu.style.display = 'block';
            }

        });

        menuLi.addEventListener('mouseout', function (event) {
            var subMenu = this.querySelector('ul');
            if (subMenu) {
                subMenu.style.display = 'none';
            }

        });
    })

});

