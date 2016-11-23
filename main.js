var annotations = document.querySelectorAll('.annotation');

var css = '.annotation, .ytp-chrome-top-buttons, .ytp-cards-button, .annotation-shape, .ytp-cards-teaser { display: none !important; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';

if (style.styleSheet){
	style.styleSheet.cssText = css;
} else {
	style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
