!function(){function t(t,o,a){return o in t?Object.defineProperty(t,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[o]=a,t}function o(t,o){for(var a=0;a<o.length;a++){var n=o[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Q2Bp:function(a,n,e){"use strict";e.r(n),e.d(n,"ion_backdrop",function(){return s});var r=e("A36C"),i=e("Zgba"),c=e("y08P"),s=function(){function a(t){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,a),Object(r.o)(this,t),this.ionBackdropTap=Object(r.g)(this,"ionBackdropTap",7),this.blocker=c.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}var n,e,s;return n=a,(e=[{key:"connectedCallback",value:function(){this.stopPropagation&&this.blocker.block()}},{key:"disconnectedCallback",value:function(){this.blocker.unblock()}},{key:"onMouseDown",value:function(t){this.emitTap(t)}},{key:"emitTap",value:function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}},{key:"render",value:function(){var o,a=Object(i.b)(this);return Object(r.j)(r.c,{tabindex:"-1","aria-hidden":"true",class:(o={},t(o,a,!0),t(o,"backdrop-hide",!this.visible),t(o,"backdrop-no-tappable",!this.tappable),o)})}}])&&o(n.prototype,e),s&&o(n,s),a}();s.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}])}();