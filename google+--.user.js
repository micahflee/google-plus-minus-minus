// ==UserScript==
// @name          Google+--
// @namespace     https://github.com/micahflee
// @description   Remove the Google+ shimmering icons from Google search results (pronounced "Google Plus Minus Minus")
// @include       https://encrypted.google.com/*
// @include       http://www.google.com/*
// @match         https://encrypted.google.com/*
// @match         http://www.google.com/*
// ==/UserScript==

var style = document.createElement('style');
style.innerHTML = '.esw { display:none; }';
document.body.appendChild(style);

