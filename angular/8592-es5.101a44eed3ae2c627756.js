!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(self.webpackChunkcuba=self.webpackChunkcuba||[]).push([[8592],{70557:function(e,o,u){"use strict";u.d(o,{x:function(){return r},P:function(){return c}});var i=u(35366),r=function(){var e=function(){function e(n){t(this,e),this.el=n,this.from=0,this.duration=4,this.e=this.el.nativeElement,this.refreshInterval=30,this.step=0}return n(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(){this.CountTo&&this.start()}},{key:"calculate",value:function(){this.duration=1e3*this.duration,this.steps=Math.ceil(this.duration/this.refreshInterval),this.increment=(this.CountTo-this.from)/this.steps,this.num=this.from}},{key:"tick",value:function(){var t=this;setTimeout(function(){t.num+=t.increment,t.step++,t.step>=t.steps?(t.num=t.CountTo,t.e.textContent=t.CountTo):(t.e.textContent=Math.round(t.num),t.tick())},this.refreshInterval)}},{key:"start",value:function(){this.calculate(),this.tick()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq))},e.\u0275dir=i.lG2({type:e,selectors:[["","CountTo",""]],inputs:{from:"from",duration:"duration",CountTo:"CountTo"},features:[i.TTD]}),e}(),c=function(){var e=function(){function e(){t(this,e)}return n(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[]}}},{key:"forChild",value:function(){return{ngModule:e,providers:[]}}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),e}()},38453:function(e,n,o){"use strict";o.d(n,{h:function(){return i}});var u=o(35366),i=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({}),e}()},6516:function(t,e,n){"use strict";n.d(e,{o:function(){return o}});var o=[{text:"Weekly Bigbazar Shopping",completed:!1},{text:"Go Outside Picnic on Sunday",completed:!1},{text:"Write a blog post",completed:!0},{text:"Do the chicken dance",completed:!0},{text:"Pay the electricity bills",completed:!1}]},40630:function(e,o,u){"use strict";u.d(o,{o:function(){return r}});var i=u(35366),r=function(){var e=function(){function e(){t(this,e),this.autocomplete="off"}return n(e,[{key:"disableKeys",value:function(t){t.preventDefault()}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.lG2({type:e,selectors:[["","disableKeyPress",""]],hostVars:1,hostBindings:function(t,e){1&t&&i.NdJ("keypress",function(t){return e.disableKeys(t)}),2&t&&i.Ikx("autocomplete",e.autocomplete)}}),e}()},21760:function(e,o,u){"use strict";u.d(o,{r:function(){return r}});var i=u(35366),r=function(){var e=function(){function e(){t(this,e),this.autocomplete="off"}return n(e,[{key:"disableKeys",value:function(t){return document,8===t.keyCode||t.keyCode>=97&&t.keyCode<=122||t.keyCode>=65&&t.keyCode<=90}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.lG2({type:e,selectors:[["","onlyAlphabets",""]],hostVars:1,hostBindings:function(t,e){1&t&&i.NdJ("keypress",function(t){return e.disableKeys(t)}),2&t&&i.Ikx("autocomplete",e.autocomplete)}}),e}()},29947:function(e,o,u){"use strict";u.d(o,{I:function(){return r}});var i=u(35366),r=function(){var e=function(){function e(){t(this,e),this.autocomplete="off"}return n(e,[{key:"disableKeys",value:function(t){return document,8==t.keyCode||t.keyCode>=48&&t.keyCode<=57}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.lG2({type:e,selectors:[["","onlyNumbers",""]],hostVars:1,hostBindings:function(t,e){1&t&&i.NdJ("keypress",function(t){return e.disableKeys(t)}),2&t&&i.Ikx("autocomplete",e.autocomplete)}}),e}()}}])}();