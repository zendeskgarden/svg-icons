"use strict";(self.webpackChunk_zendeskgarden_svg_icons=self.webpackChunk_zendeskgarden_svg_icons||[]).push([[135],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/polished/dist/polished.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e$:()=>curriedDarken$1,Ic:()=>hideVisually,a:()=>curriedLighten$1,Dy:()=>math,mI:()=>curriedOpacify$1,B3:()=>rgba,No:()=>curriedTransparentize$1});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _construct(Parent,args,Class){return _construct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!function _isNativeFunction(fn){try{return-1!==Function.toString.call(fn).indexOf("[native code]")}catch(e){return"function"==typeof fn}}(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function last(){var _ref;return(_ref=arguments.length-1)<0||arguments.length<=_ref?void 0:arguments[_ref]}var defaultSymbolMap={symbols:{"*":{infix:{symbol:"*",f:function multiplication(a,b){return a*b},notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"*",regSymbol:"\\*"},"/":{infix:{symbol:"/",f:function division(a,b){return a/b},notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"/",regSymbol:"/"},"+":{infix:{symbol:"+",f:function addition(a,b){return a+b},notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"+",f:last,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"+",regSymbol:"\\+"},"-":{infix:{symbol:"-",f:function subtraction(a,b){return a-b},notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"-",f:function negation(a){return-a},notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"-",regSymbol:"-"},",":{infix:{symbol:",",f:function comma(){return Array.of.apply(Array,arguments)},notation:"infix",precedence:1,rightToLeft:0,argCount:2},symbol:",",regSymbol:","},"(":{prefix:{symbol:"(",f:last,notation:"prefix",precedence:0,rightToLeft:0,argCount:1},symbol:"(",regSymbol:"\\("},")":{postfix:{symbol:")",f:void 0,notation:"postfix",precedence:0,rightToLeft:0,argCount:1},symbol:")",regSymbol:"\\)"},min:{func:{symbol:"min",f:function min(){return Math.min.apply(Math,arguments)},notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"min",regSymbol:"min\\b"},max:{func:{symbol:"max",f:function max(){return Math.max.apply(Math,arguments)},notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"max",regSymbol:"max\\b"}}};var PolishedError=function(_Error){function PolishedError(code){return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(_Error.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+code+" for more information.")||this)}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(PolishedError,_Error),PolishedError}(_wrapNativeSuper(Error)),unitRegExp=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function exec(operators,values){var _ref,op=operators.pop();return values.push(op.f.apply(op,(_ref=[]).concat.apply(_ref,values.splice(-op.argCount)))),op.precedence}function calculate(expression,additionalSymbols){var match,symbolMap=function mergeSymbolMaps(additionalSymbols){var symbolMap={};return symbolMap.symbols=additionalSymbols?(0,esm_extends.A)({},defaultSymbolMap.symbols,additionalSymbols.symbols):(0,esm_extends.A)({},defaultSymbolMap.symbols),symbolMap}(additionalSymbols),operators=[symbolMap.symbols["("].prefix],values=[],pattern=new RegExp("\\d+(?:\\.\\d+)?|"+Object.keys(symbolMap.symbols).map((function(key){return symbolMap.symbols[key]})).sort((function(a,b){return b.symbol.length-a.symbol.length})).map((function(val){return val.regSymbol})).join("|")+"|(\\S)","g");pattern.lastIndex=0;var afterValue=!1;do{var _ref2=(match=pattern.exec(expression))||[")",void 0],token=_ref2[0],bad=_ref2[1],notNumber=symbolMap.symbols[token],notNewValue=notNumber&&!notNumber.prefix&&!notNumber.func,notAfterValue=!notNumber||!notNumber.postfix&&!notNumber.infix;if(bad||(afterValue?notAfterValue:notNewValue))throw new PolishedError(37,match?match.index:expression.length,expression);if(afterValue){var curr=notNumber.postfix||notNumber.infix;do{var prev=operators[operators.length-1];if((curr.precedence-prev.precedence||prev.rightToLeft)>0)break}while(exec(operators,values));afterValue="postfix"===curr.notation,")"!==curr.symbol&&(operators.push(curr),afterValue&&exec(operators,values))}else if(notNumber){if(operators.push(notNumber.prefix||notNumber.func),notNumber.func&&(!(match=pattern.exec(expression))||"("!==match[0]))throw new PolishedError(38,match?match.index:expression.length,expression)}else values.push(+token),afterValue=!0}while(match&&operators.length);if(operators.length)throw new PolishedError(39,match?match.index:expression.length,expression);if(match)throw new PolishedError(40,match?match.index:expression.length,expression);return values.pop()}function reverseString(str){return str.split("").reverse().join("")}function math(formula,additionalSymbols){var reversedFormula=reverseString(formula),formulaMatch=reversedFormula.match(unitRegExp);if(formulaMatch&&!formulaMatch.every((function(unit){return unit===formulaMatch[0]})))throw new PolishedError(41);return""+calculate(reverseString(reversedFormula.replace(unitRegExp,"")),additionalSymbols)+(formulaMatch?reverseString(formulaMatch[0]):"")}function hideVisually(){return{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}}function colorToInt(color){return Math.round(255*color)}function convertToInt(red,green,blue){return colorToInt(red)+","+colorToInt(green)+","+colorToInt(blue)}function hslToRgb(hue,saturation,lightness,convert){if(void 0===convert&&(convert=convertToInt),0===saturation)return convert(lightness,lightness,lightness);var huePrime=(hue%360+360)%360/60,chroma=(1-Math.abs(2*lightness-1))*saturation,secondComponent=chroma*(1-Math.abs(huePrime%2-1)),red=0,green=0,blue=0;huePrime>=0&&huePrime<1?(red=chroma,green=secondComponent):huePrime>=1&&huePrime<2?(red=secondComponent,green=chroma):huePrime>=2&&huePrime<3?(green=chroma,blue=secondComponent):huePrime>=3&&huePrime<4?(green=secondComponent,blue=chroma):huePrime>=4&&huePrime<5?(red=secondComponent,blue=chroma):huePrime>=5&&huePrime<6&&(red=chroma,blue=secondComponent);var lightnessModification=lightness-chroma/2;return convert(red+lightnessModification,green+lightnessModification,blue+lightnessModification)}var namedColorMap={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var hexRegex=/^#[a-fA-F0-9]{6}$/,hexRgbaRegex=/^#[a-fA-F0-9]{8}$/,reducedHexRegex=/^#[a-fA-F0-9]{3}$/,reducedRgbaHexRegex=/^#[a-fA-F0-9]{4}$/,rgbRegex=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,rgbaRegex=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,hslRegex=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,hslaRegex=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function parseToRgb(color){if("string"!=typeof color)throw new PolishedError(3);var normalizedColor=function nameToHex(color){if("string"!=typeof color)return color;var normalizedColorName=color.toLowerCase();return namedColorMap[normalizedColorName]?"#"+namedColorMap[normalizedColorName]:color}(color);if(normalizedColor.match(hexRegex))return{red:parseInt(""+normalizedColor[1]+normalizedColor[2],16),green:parseInt(""+normalizedColor[3]+normalizedColor[4],16),blue:parseInt(""+normalizedColor[5]+normalizedColor[6],16)};if(normalizedColor.match(hexRgbaRegex)){var alpha=parseFloat((parseInt(""+normalizedColor[7]+normalizedColor[8],16)/255).toFixed(2));return{red:parseInt(""+normalizedColor[1]+normalizedColor[2],16),green:parseInt(""+normalizedColor[3]+normalizedColor[4],16),blue:parseInt(""+normalizedColor[5]+normalizedColor[6],16),alpha}}if(normalizedColor.match(reducedHexRegex))return{red:parseInt(""+normalizedColor[1]+normalizedColor[1],16),green:parseInt(""+normalizedColor[2]+normalizedColor[2],16),blue:parseInt(""+normalizedColor[3]+normalizedColor[3],16)};if(normalizedColor.match(reducedRgbaHexRegex)){var _alpha=parseFloat((parseInt(""+normalizedColor[4]+normalizedColor[4],16)/255).toFixed(2));return{red:parseInt(""+normalizedColor[1]+normalizedColor[1],16),green:parseInt(""+normalizedColor[2]+normalizedColor[2],16),blue:parseInt(""+normalizedColor[3]+normalizedColor[3],16),alpha:_alpha}}var rgbMatched=rgbRegex.exec(normalizedColor);if(rgbMatched)return{red:parseInt(""+rgbMatched[1],10),green:parseInt(""+rgbMatched[2],10),blue:parseInt(""+rgbMatched[3],10)};var rgbaMatched=rgbaRegex.exec(normalizedColor.substring(0,50));if(rgbaMatched)return{red:parseInt(""+rgbaMatched[1],10),green:parseInt(""+rgbaMatched[2],10),blue:parseInt(""+rgbaMatched[3],10),alpha:parseFloat(""+rgbaMatched[4])>1?parseFloat(""+rgbaMatched[4])/100:parseFloat(""+rgbaMatched[4])};var hslMatched=hslRegex.exec(normalizedColor);if(hslMatched){var rgbColorString="rgb("+hslToRgb(parseInt(""+hslMatched[1],10),parseInt(""+hslMatched[2],10)/100,parseInt(""+hslMatched[3],10)/100)+")",hslRgbMatched=rgbRegex.exec(rgbColorString);if(!hslRgbMatched)throw new PolishedError(4,normalizedColor,rgbColorString);return{red:parseInt(""+hslRgbMatched[1],10),green:parseInt(""+hslRgbMatched[2],10),blue:parseInt(""+hslRgbMatched[3],10)}}var hslaMatched=hslaRegex.exec(normalizedColor.substring(0,50));if(hslaMatched){var _rgbColorString="rgb("+hslToRgb(parseInt(""+hslaMatched[1],10),parseInt(""+hslaMatched[2],10)/100,parseInt(""+hslaMatched[3],10)/100)+")",_hslRgbMatched=rgbRegex.exec(_rgbColorString);if(!_hslRgbMatched)throw new PolishedError(4,normalizedColor,_rgbColorString);return{red:parseInt(""+_hslRgbMatched[1],10),green:parseInt(""+_hslRgbMatched[2],10),blue:parseInt(""+_hslRgbMatched[3],10),alpha:parseFloat(""+hslaMatched[4])>1?parseFloat(""+hslaMatched[4])/100:parseFloat(""+hslaMatched[4])}}throw new PolishedError(5)}function parseToHsl(color){return function rgbToHsl(color){var hue,red=color.red/255,green=color.green/255,blue=color.blue/255,max=Math.max(red,green,blue),min=Math.min(red,green,blue),lightness=(max+min)/2;if(max===min)return void 0!==color.alpha?{hue:0,saturation:0,lightness,alpha:color.alpha}:{hue:0,saturation:0,lightness};var delta=max-min,saturation=lightness>.5?delta/(2-max-min):delta/(max+min);switch(max){case red:hue=(green-blue)/delta+(green<blue?6:0);break;case green:hue=(blue-red)/delta+2;break;default:hue=(red-green)/delta+4}return hue*=60,void 0!==color.alpha?{hue,saturation,lightness,alpha:color.alpha}:{hue,saturation,lightness}}(parseToRgb(color))}var reduceHexValue$1=function reduceHexValue(value){return 7===value.length&&value[1]===value[2]&&value[3]===value[4]&&value[5]===value[6]?"#"+value[1]+value[3]+value[5]:value};function numberToHex(value){var hex=value.toString(16);return 1===hex.length?"0"+hex:hex}function colorToHex(color){return numberToHex(Math.round(255*color))}function convertToHex(red,green,blue){return reduceHexValue$1("#"+colorToHex(red)+colorToHex(green)+colorToHex(blue))}function hslToHex(hue,saturation,lightness){return hslToRgb(hue,saturation,lightness,convertToHex)}function hsl(value,saturation,lightness){if("number"==typeof value&&"number"==typeof saturation&&"number"==typeof lightness)return hslToHex(value,saturation,lightness);if("object"==typeof value&&void 0===saturation&&void 0===lightness)return hslToHex(value.hue,value.saturation,value.lightness);throw new PolishedError(1)}function hsla(value,saturation,lightness,alpha){if("number"==typeof value&&"number"==typeof saturation&&"number"==typeof lightness&&"number"==typeof alpha)return alpha>=1?hslToHex(value,saturation,lightness):"rgba("+hslToRgb(value,saturation,lightness)+","+alpha+")";if("object"==typeof value&&void 0===saturation&&void 0===lightness&&void 0===alpha)return value.alpha>=1?hslToHex(value.hue,value.saturation,value.lightness):"rgba("+hslToRgb(value.hue,value.saturation,value.lightness)+","+value.alpha+")";throw new PolishedError(2)}function rgb(value,green,blue){if("number"==typeof value&&"number"==typeof green&&"number"==typeof blue)return reduceHexValue$1("#"+numberToHex(value)+numberToHex(green)+numberToHex(blue));if("object"==typeof value&&void 0===green&&void 0===blue)return reduceHexValue$1("#"+numberToHex(value.red)+numberToHex(value.green)+numberToHex(value.blue));throw new PolishedError(6)}function rgba(firstValue,secondValue,thirdValue,fourthValue){if("string"==typeof firstValue&&"number"==typeof secondValue){var rgbValue=parseToRgb(firstValue);return"rgba("+rgbValue.red+","+rgbValue.green+","+rgbValue.blue+","+secondValue+")"}if("number"==typeof firstValue&&"number"==typeof secondValue&&"number"==typeof thirdValue&&"number"==typeof fourthValue)return fourthValue>=1?rgb(firstValue,secondValue,thirdValue):"rgba("+firstValue+","+secondValue+","+thirdValue+","+fourthValue+")";if("object"==typeof firstValue&&void 0===secondValue&&void 0===thirdValue&&void 0===fourthValue)return firstValue.alpha>=1?rgb(firstValue.red,firstValue.green,firstValue.blue):"rgba("+firstValue.red+","+firstValue.green+","+firstValue.blue+","+firstValue.alpha+")";throw new PolishedError(7)}var isRgb=function isRgb(color){return"number"==typeof color.red&&"number"==typeof color.green&&"number"==typeof color.blue&&("number"!=typeof color.alpha||void 0===color.alpha)},isRgba=function isRgba(color){return"number"==typeof color.red&&"number"==typeof color.green&&"number"==typeof color.blue&&"number"==typeof color.alpha},isHsl=function isHsl(color){return"number"==typeof color.hue&&"number"==typeof color.saturation&&"number"==typeof color.lightness&&("number"!=typeof color.alpha||void 0===color.alpha)},isHsla=function isHsla(color){return"number"==typeof color.hue&&"number"==typeof color.saturation&&"number"==typeof color.lightness&&"number"==typeof color.alpha};function toColorString(color){if("object"!=typeof color)throw new PolishedError(8);if(isRgba(color))return rgba(color);if(isRgb(color))return rgb(color);if(isHsla(color))return hsla(color);if(isHsl(color))return hsl(color);throw new PolishedError(8)}function curried(f,length,acc){return function fn(){var combined=acc.concat(Array.prototype.slice.call(arguments));return combined.length>=length?f.apply(this,combined):curried(f,length,combined)}}function curry(f){return curried(f,f.length,[])}function guard(lowerBoundary,upperBoundary,value){return Math.max(lowerBoundary,Math.min(upperBoundary,value))}function darken(amount,color){if("transparent"===color)return color;var hslColor=parseToHsl(color);return toColorString((0,esm_extends.A)({},hslColor,{lightness:guard(0,1,hslColor.lightness-parseFloat(amount))}))}var curriedDarken$1=curry(darken);function lighten(amount,color){if("transparent"===color)return color;var hslColor=parseToHsl(color);return toColorString((0,esm_extends.A)({},hslColor,{lightness:guard(0,1,hslColor.lightness+parseFloat(amount))}))}var curriedLighten$1=curry(lighten);function opacify(amount,color){if("transparent"===color)return color;var parsedColor=parseToRgb(color),alpha="number"==typeof parsedColor.alpha?parsedColor.alpha:1;return rgba((0,esm_extends.A)({},parsedColor,{alpha:guard(0,1,(100*alpha+100*parseFloat(amount))/100)}))}var curriedOpacify$1=curry(opacify);function transparentize(amount,color){if("transparent"===color)return color;var parsedColor=parseToRgb(color),alpha="number"==typeof parsedColor.alpha?parsedColor.alpha:1;return rgba((0,esm_extends.A)({},parsedColor,{alpha:guard(0,1,+(100*alpha-100*parseFloat(amount)).toFixed(2)/100)}))}var curriedTransparentize$1=curry(transparentize)}}]);