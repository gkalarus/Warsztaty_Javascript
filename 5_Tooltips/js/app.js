/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */


document.addEventListener('DOMContentLoaded', function () {
    var tooltips = document.querySelectorAll('.tooltip');
    var newTooltip = document.createElement('span');

    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener('mouseover', function (event) {
            var tooltipText = this.dataset.text;

            this.appendChild(newTooltip);
            this.firstElementChild.classList.add('tooltipText');
            this.firstElementChild.innerText = tooltipText;

        });

        tooltip.addEventListener('mouseout', function (event) {
            newTooltip.parentElement.removeChild(newTooltip);
        })
    })
});

