(self.webpackChunkstrapi_test=self.webpackChunkstrapi_test||[]).push([[5178],{82801:(e,t,n)=>{!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},n=e.Pos;function r(e,n){return"pairs"==n&&"string"==typeof e?e:"object"==typeof e&&null!=e[n]?e[n]:t[n]}e.defineOption("autoCloseBrackets",!1,(function(t,n,s){s&&s!=e.Init&&(t.removeKeyMap(i),t.state.closeBrackets=null),n&&(a(r(n,"pairs")),t.state.closeBrackets=n,t.addKeyMap(i))}));var i={Backspace:o,Enter:c};function a(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),r="'"+n+"'";i[r]||(i[r]=s(n))}}function s(e){return function(t){return u(t,e)}}function l(e){var t=e.state.closeBrackets;return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function o(t){var i=l(t);if(!i||t.getOption("disableInput"))return e.Pass;for(var a=r(i,"pairs"),s=t.listSelections(),o=0;o<s.length;o++){if(!s[o].empty())return e.Pass;var c=p(t,s[o].head);if(!c||a.indexOf(c)%2!=0)return e.Pass}for(o=s.length-1;o>=0;o--){var h=s[o].head;t.replaceRange("",n(h.line,h.ch-1),n(h.line,h.ch+1),"+delete")}}function c(t){var n=l(t),i=n&&r(n,"explode");if(!i||t.getOption("disableInput"))return e.Pass;for(var a=t.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass;var o=p(t,a[s].head);if(!o||i.indexOf(o)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),h(t,-1),a=t.listSelections();for(var n=0;n<a.length;n++){var r=a[n].head.line;t.indentLine(r,null,!0),t.indentLine(r+1,null,!0)}}))}function h(e,t){for(var n=[],r=e.listSelections(),i=0,a=0;a<r.length;a++){var s=r[a];s.head==e.getCursor()&&(i=a);var l=s.head.ch||t>0?{line:s.head.line,ch:s.head.ch+t}:{line:s.head.line-1};n.push({anchor:l,head:l})}e.setSelections(n,i)}function f(t){var r=e.cmpPos(t.anchor,t.head)>0;return{anchor:new n(t.anchor.line,t.anchor.ch+(r?-1:1)),head:new n(t.head.line,t.head.ch+(r?1:-1))}}function u(t,i){var a=l(t);if(!a||t.getOption("disableInput"))return e.Pass;var s=r(a,"pairs"),o=s.indexOf(i);if(-1==o)return e.Pass;for(var c,u=r(a,"closeBefore"),p=r(a,"triples"),g=s.charAt(o+1)==i,v=t.listSelections(),k=o%2==0,b=0;b<v.length;b++){var P,S=v[b],y=S.head,O=t.getRange(y,n(y.line,y.ch+1));if(k&&!S.empty())P="surround";else if(!g&&k||O!=i)if(g&&y.ch>1&&p.indexOf(i)>=0&&t.getRange(n(y.line,y.ch-2),y)==i+i){if(y.ch>2&&/\bstring/.test(t.getTokenTypeAt(n(y.line,y.ch-2))))return e.Pass;P="addFour"}else if(g){var x=0==y.ch?" ":t.getRange(n(y.line,y.ch-1),y);if(e.isWordChar(O)||x==i||e.isWordChar(x))return e.Pass;P="both"}else{if(!k||!(0===O.length||/\s/.test(O)||u.indexOf(O)>-1))return e.Pass;P="both"}else P=g&&d(t,y)?"both":p.indexOf(i)>=0&&t.getRange(y,n(y.line,y.ch+3))==i+i+i?"skipThree":"skip";if(c){if(c!=P)return e.Pass}else c=P}var A=o%2?s.charAt(o-1):i,B=o%2?i:s.charAt(o+1);t.operation((function(){if("skip"==c)h(t,1);else if("skipThree"==c)h(t,3);else if("surround"==c){for(var e=t.getSelections(),n=0;n<e.length;n++)e[n]=A+e[n]+B;for(t.replaceSelections(e,"around"),e=t.listSelections().slice(),n=0;n<e.length;n++)e[n]=f(e[n]);t.setSelections(e)}else"both"==c?(t.replaceSelection(A+B,null),t.triggerElectric(A+B),h(t,-1)):"addFour"==c&&(t.replaceSelection(A+A+A+A,"before"),h(t,1))}))}function p(e,t){var r=e.getRange(n(t.line,t.ch-1),n(t.line,t.ch+1));return 2==r.length?r:null}function d(e,t){var r=e.getTokenAt(n(t.line,t.ch+1));return/\bstring/.test(r.type)&&r.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}a(t.pairs+"`")}(n(4631))}}]);