(self["webpackChunkstrapi_test"] = self["webpackChunkstrapi_test"] || []).push([[695],{

/***/ 62031:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(59525);
  } else {}
  

/***/ }),

/***/ 59525:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(78384)):0}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=108)}({0:function(n,e,t){n.exports=t(16)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(22),o=t(23),i=t(19),a=t(24);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},108:function(n,e,t){"use strict";t.r(e),t.d(e,"Main",(function(){return y})),t.d(e,"SkipToContent",(function(){return _}));var r,o=t(5),i=t.n(o),a=t(6),u=t.n(a),s=t(3),c=t.n(s),f=t(1),d=t.n(f),p=t(0),l=t.n(p),h=t(2),m=t.n(h),b=["labelledBy"],v=m.a.main(r||(r=c()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),y=function(n){var e=n.labelledBy,t=u()(n,b),r=e||"main-content-title";return d.a.createElement(v,i()({"aria-labelledby":r,id:"main-content",tabIndex:-1},t))};y.defaultProps={labelledBy:void 0},y.propTypes={labelledBy:l.a.string};var g,x=t(4),O=m()(x.Box)(g||(g=c()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]})),_=function(n){var e=n.children;return d.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},e)};_.propTypes={children:l.a.node.isRequired}},16:function(n,e,t){"use strict";var r=t(17);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},17:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,e,t){var r=t(18);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},21:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return p}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),f=t(7),d={color:!0},p=c.a.div.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(f.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(f.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(f.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(f.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(f.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(f.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(f.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(f.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(f.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.sizes[e]||e}),(function(n){var e=n.maxWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.minWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.height;return n.theme.sizes[e]||e}),(function(n){var e=n.maxHeight;return n.theme.sizes[e]||e}),(function(n){var e=n.minHeight;return n.theme.sizes[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));p.displayName="Box",p.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},p.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e,t){var r=t(21);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r);e.a=function(n,e,t){if(void 0!==e){if(Array.isArray(e)){var r=o()(e,3),i=r[0],a=r[1],u=r[2],s="".concat(n,": ").concat(t.spaces[i],";");return void 0!==a&&(s+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[a],";\n        }")),void 0!==u&&(s+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[u],";\n        }")),s}var c=t.spaces[e]||e;return"".concat(n,": ").concat(c,";")}}}})}));

/***/ }),

/***/ 87942:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=exports.SettingsPage=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactHelmet=__webpack_require__(15482);var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _Check=_interopRequireDefault(__webpack_require__(84734));var _Box=__webpack_require__(5493);var _Flex=__webpack_require__(67826);var _ToggleInput=__webpack_require__(47857);var _Typography=__webpack_require__(49425);var _Button=__webpack_require__(19408);var _Main=__webpack_require__(62031);var _Stack=__webpack_require__(9008);var _Grid=__webpack_require__(34626);var _Layout=__webpack_require__(78862);var _axios=_interopRequireDefault(__webpack_require__(9669));var _isEqual=_interopRequireDefault(__webpack_require__(18446));var _utils=__webpack_require__(78763);var _init=_interopRequireDefault(__webpack_require__(56034));var _reducer=_interopRequireWildcard(__webpack_require__(18874));var _permissions=_interopRequireDefault(__webpack_require__(68180));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var SettingsPage=function SettingsPage(){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useOverlayBlocker=(0,_helperPlugin.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;var toggleNotification=(0,_helperPlugin.useNotification)();(0,_helperPlugin.useFocusWhenNavigate)();var _useReducer=(0,_react.useReducer)(_reducer["default"],_reducer.initialState,_init["default"]),_useReducer2=(0,_slicedToArray2["default"])(_useReducer,2),_useReducer2$=_useReducer2[0],initialData=_useReducer2$.initialData,isLoading=_useReducer2$.isLoading,isSubmiting=_useReducer2$.isSubmiting,modifiedData=_useReducer2$.modifiedData,dispatch=_useReducer2[1];var isMounted=(0,_react.useRef)(true);(0,_react.useEffect)(function(){var CancelToken=_axios["default"].CancelToken;var source=CancelToken.source();var getData=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _yield$axiosInstance$,data;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return _utils.axiosInstance.get((0,_utils.getRequestUrl)('settings'),{cancelToken:source.token});case 3:_yield$axiosInstance$=_context.sent;data=_yield$axiosInstance$.data.data;dispatch({type:'GET_DATA_SUCCEEDED',data:data});_context.next=11;break;case 8:_context.prev=8;_context.t0=_context["catch"](0);console.error(_context.t0);case 11:case"end":return _context.stop();}}},_callee,null,[[0,8]]);}));return function getData(){return _ref.apply(this,arguments);};}();if(isMounted.current){getData();}return function(){source.cancel('Operation canceled by the user.');isMounted.current=false;};// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);var isSaveButtonDisabled=(0,_isEqual["default"])(initialData,modifiedData);var handleSubmit=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(e){return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:e.preventDefault();if(!isSaveButtonDisabled){_context2.next=3;break;}return _context2.abrupt("return");case 3:lockApp();dispatch({type:'ON_SUBMIT'});_context2.prev=5;_context2.next=8;return _utils.axiosInstance.put((0,_utils.getRequestUrl)('settings'),modifiedData);case 8:dispatch({type:'SUBMIT_SUCCEEDED'});toggleNotification({type:'success',message:{id:'notification.form.success.fields'}});_context2.next=16;break;case 12:_context2.prev=12;_context2.t0=_context2["catch"](5);console.error(_context2.t0);dispatch({type:'ON_SUBMIT_ERROR'});case 16:unlockApp();case 17:case"end":return _context2.stop();}}},_callee2,null,[[5,12]]);}));return function handleSubmit(_x){return _ref2.apply(this,arguments);};}();var handleChange=function handleChange(_ref3){var _ref3$target=_ref3.target,name=_ref3$target.name,value=_ref3$target.value;dispatch({type:'ON_CHANGE',keys:name,value:value});};return/*#__PURE__*/_react["default"].createElement(_Main.Main,{tabIndex:-1},/*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet,{title:formatMessage({id:(0,_utils.getTrad)('page.title'),defaultMessage:'Settings - Media Libray'})}),/*#__PURE__*/_react["default"].createElement("form",{onSubmit:handleSubmit},/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{title:formatMessage({id:(0,_utils.getTrad)('settings.header.label'),defaultMessage:'Media Library - Settings'}),primaryAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{disabled:isSaveButtonDisabled,"data-testid":"save-button",loading:isSubmiting,type:"submit",startIcon:/*#__PURE__*/_react["default"].createElement(_Check["default"],null),size:"L"},formatMessage({id:'app.components.Button.save',defaultMessage:'Save'})),subtitle:formatMessage({id:(0,_utils.getTrad)('settings.sub-header.label'),defaultMessage:'Configure the settings for the media library'})}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,isLoading?/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null):/*#__PURE__*/_react["default"].createElement(_Layout.Layout,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:12},/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:true},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:4},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:(0,_utils.getTrad)('settings.section.image.label'),defaultMessage:'Image'}))),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:6},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:modifiedData.responsiveDimensions,hint:formatMessage({id:(0,_utils.getTrad)('settings.form.responsiveDimensions.description'),defaultMessage:'It automatically generates multiple formats (large, medium, small) of the uploaded asset'}),label:formatMessage({id:(0,_utils.getTrad)('settings.form.responsiveDimensions.label'),defaultMessage:'Enable responsive friendly upload'}),name:"responsiveDimensions",offLabel:formatMessage({id:'app.components.ToggleCheckbox.off-label',defaultMessage:'Off'}),onLabel:formatMessage({id:'app.components.ToggleCheckbox.on-label',defaultMessage:'On'}),onChange:function onChange(e){handleChange({target:{name:'responsiveDimensions',value:e.target.checked}});}})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:modifiedData.sizeOptimization,label:formatMessage({id:(0,_utils.getTrad)('settings.form.sizeOptimization.label'),defaultMessage:'Enable size optimization (without quality loss)'}),name:"sizeOptimization",offLabel:formatMessage({id:'app.components.ToggleCheckbox.off-label',defaultMessage:'Off'}),onLabel:formatMessage({id:'app.components.ToggleCheckbox.on-label',defaultMessage:'On'}),onChange:function onChange(e){handleChange({target:{name:'sizeOptimization',value:e.target.checked}});}})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:modifiedData.autoOrientation,hint:formatMessage({id:(0,_utils.getTrad)('settings.form.autoOrientation.description'),defaultMessage:'Automatically rotate image according to EXIF orientation tag'}),label:formatMessage({id:(0,_utils.getTrad)('settings.form.autoOrientation.label'),defaultMessage:'Enable auto orientation'}),name:"autoOrientation",offLabel:formatMessage({id:'app.components.ToggleCheckbox.off-label',defaultMessage:'Off'}),onLabel:formatMessage({id:'app.components.ToggleCheckbox.on-label',defaultMessage:'On'}),onChange:function onChange(e){handleChange({target:{name:'autoOrientation',value:e.target.checked}});}}))))))))));};exports.SettingsPage=SettingsPage;var ProtectedSettingsPage=function ProtectedSettingsPage(){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions,{permissions:_permissions["default"].settings},/*#__PURE__*/_react["default"].createElement(SettingsPage,null));};var _default=ProtectedSettingsPage;exports.default=_default;

/***/ }),

/***/ 56034:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var init=function init(initialState){return initialState;};var _default=init;exports.default=_default;

/***/ }),

/***/ 18874:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.initialState=exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _immer=_interopRequireDefault(__webpack_require__(66312));var _set=_interopRequireDefault(__webpack_require__(36968));var initialState={isLoading:true,isSubmiting:false,initialData:{responsiveDimensions:true,sizeOptimization:true,autoOrientation:false,videoPreview:false},modifiedData:{responsiveDimensions:true,sizeOptimization:true,autoOrientation:false,videoPreview:false}};exports.initialState=initialState;var reducer=function reducer(state,action){return(// eslint-disable-next-line consistent-return
(0,_immer["default"])(state,function(drafState){switch(action.type){case'CANCEL_CHANGES':{drafState.modifiedData=state.initialData;break;}case'GET_DATA_SUCCEEDED':{drafState.isLoading=false;drafState.initialData=action.data;drafState.modifiedData=action.data;break;}case'ON_CHANGE':{(0,_set["default"])(drafState,['modifiedData'].concat((0,_toConsumableArray2["default"])(action.keys.split('.'))),action.value);break;}case'ON_SUBMIT':{drafState.isSubmiting=true;break;}case'SUBMIT_SUCCEEDED':{drafState.initialData=state.modifiedData;drafState.isSubmiting=false;break;}case'ON_SUBMIT_ERROR':{drafState.isSubmiting=false;break;}default:return state;}}));};var _default=reducer;exports.default=_default;

/***/ })

}]);