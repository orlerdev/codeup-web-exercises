'use strict';
const clickMe = document.querySelector('#clickMe');
const allButtons = document.querySelectorAll('#btn-column .btn');
const pageWrapper = document.querySelector('.page-wrapper');
const btnColumn = document.querySelector('#btn-column');

const buttonNode = document.createElement('button');
buttonNode.classList.add('btn');
buttonNode.innerHTML = `I am a new button`;
buttonNode.style.backgroundColor = 'dodgerblue';
buttonNode.style.color = 'antiquewhite';

let btnStyles = {
    backgroundColor: 'dodgerblue',
    color: 'antiquewhite',
    padding: '10px 20px',
    borderRadius: '10px',
    outline: 'none',
    border: 'none'
}

Object.assign(buttonNode.style, btnStyles);

//--      --////--    JQUERY  --////--      --//
$('.btn').css({
    'background-color': 'purple',
    'color': 'white',
    'padding': '20px 10px',
    'border-radius': '20px',
    'outline': 'none',
    'border': 'none'
});

btnColumn.appendChild(buttonNode);
