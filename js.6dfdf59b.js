parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
var t=document.querySelector(".container"),n=document.createElement("div"),e=document.createElement("button"),c=[];function d(){n.classList.add("dicesContainer"),t.appendChild(n)}function a(){e.classList.add("throwButton"),e.textContent="Throw Dice",t.appendChild(e),e.addEventListener("click",function(){c.forEach(function(t){t.textContent="".concat(Math.round(5*Math.random()+1))})})}function o(t){for(var e=0;e<t;++e){var d=document.createElement("div");c.push(d),d.classList.add("dice","dice-".concat(e)),n.appendChild(d)}}d(),a(),o(2);
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/eoi-dice/js.6dfdf59b.js.map