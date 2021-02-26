function changeTopMargin() {
    var main = document.getElementById('main');
    var header = document.getElementById('header');
    var bodyTextFontSize = getComputedStyle(document.documentElement).getPropertyValue('--body-text-font-size');
    var headingFontSize = getComputedStyle(document.documentElement).getPropertyValue('--heading-font-size');
    var subheadingFontSize = getComputedStyle(document.documentElement).getPropertyValue('--subheading-font-size');
    var bodyHeadingFontSize = getComputedStyle(document.documentElement).getPropertyValue('--body-heading-font-size');

    main.style.marginTop =  (header.offsetHeight + parseInt(bodyTextFontSize, 10)) + 'px';

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.style.padding = parseInt(bodyTextFontSize, 10) + 'px';
        } else {
            header.style.padding = headingFontSize;
        }
    }
}

changeTopMargin();