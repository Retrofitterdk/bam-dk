//Initialize Fusion namespace
if (window.Fusion === undefined) window.Fusion = {};
if (window.Fusion.webApp === undefined) window.Fusion.webApp = "/";
if (window.Fusion.protocol === undefined) window.Fusion.protocol = "";
if (window.Fusion.warnings === undefined) window.Fusion.warnings = [];
if (window.Fusion.parameters === undefined) window.Fusion.parameters = {};
if (window.Fusion.adimpurl === undefined) window.Fusion.adimpurl = {};
if (window.Fusion.adimptpt === undefined) window.Fusion.adimptpt = {};
if (window.Fusion.affiliate === undefined) window.Fusion.affiliate = undefined;
if (window.Fusion.discardStatistics === undefined) window.Fusion.discardStatistics = false;
if (window.Fusion.ATTR_PAYLOAD === undefined) window.Fusion.ATTR_PAYLOAD = "Payload";
if (window.Fusion.ATTR_SHOWN === undefined) window.Fusion.ATTR_SHOWN = "Shown";
if (window.Fusion.useprecall === undefined) window.Fusion.useprecall = false;
if (window.Fusion.usepostscribe === undefined) window.Fusion.usepostscribe = false;
if (window.Fusion.useexcludedAds === undefined) window.Fusion.useexcludedAds = false;
if (window.Fusion.usecheckads === undefined) window.Fusion.usecheckads = true;
if (window.Fusion.singleSpaceAdIds == undefined) window.Fusion.singleSpaceAdIds = [];
if (window.Fusion.adsize === undefined) window.Fusion.adsize = {};
if (window.Fusion.Reload === undefined) window.Fusion.Reload = false;
if (window.Fusion.delayedAds === undefined) window.Fusion.delayedAds=[];
if (window.Fusion.adonLoad === undefined) window.Fusion.adonLoad=true;
if (window.Fusion.preFetchSize === undefined)  window.Fusion.preFetchSize = false;

var spaceadId = new Array();
var jcount = 0;
var adendcount = 0;
var Fusadid="";
var adcintrvl=new Object();
var adcCallB=new Object();
var orgAdS,orgMZ,orgLay;
var preCall=false;
var preCallDo=false;
var wurflIODone=false;
//var adcallintrvl=new Object();
var adcno=0;
var redialok=true;
if(!xscrloaded){
var xscrloaded="0";
}
/**Sydsvenskan,Expressen
* Meta refresh override for IE
 */	
		window.Fusion.refreshMeOverRide = function(url){
		var appendURL="";
		if(url!=undefined){appendURL=url;}
		window.location.href = window.location.protocol + "//" + window.location.host + window.location.pathname+appendURL;
		}
		if(window.location.host.search('sydsvenskan') != -1 || window.location.host.search('expressen') != -1){
		if (navigator.userAgent.search('MSIE') != -1 || navigator.userAgent.search('Trident') != -1)
		{
		var allMeta=document.getElementsByTagName('meta');
		for (var j = 0; j < allMeta.length; ++j)
		{
		if(allMeta[j].getAttribute("http-equiv")&&allMeta[j].getAttribute("http-equiv")=='refresh'){
		var metaTime=allMeta[j].getAttribute("content").split(';');
		var metaUrl=allMeta[j].getAttribute("content").split('url=');
		var metaTimeVal="";
		var metaUrlVal="";
		if(metaTime[0]){if(metaTime[0]>120){metaTimeVal=metaTime[0]-10;}else{metaTimeVal=metaTime[0]-2;}}
		if(metaUrl[1]){metaUrlVal=metaUrl[1];}
		if(metaTimeVal!=""){
		metaTimeVal=metaTimeVal*1000;
		setTimeout('window.Fusion.refreshMeOverRide("'+metaUrlVal+'")',metaTimeVal);
		}
		}
		}
		
		}
		}
/**An html parser written in JavaScript
* Based on http://ejohn.org/blog/pure-javascript-html-parser/
 */	
var loadHTMLparser=function(){function g(g,h){g=g||"",h=h||{};for(var i in a)a.hasOwnProperty(i)&&(h.autoFix&&(h["fix_"+i]=!0),h.fix=h.fix||h["fix_"+i]);var j=[],k=document.createElement("div"),l=function(a){return"string"==typeof a&&-1!==a.indexOf("&")?(k.innerHTML=a,k.textContent||k.innerText||a):a},m=function(a){g+=a},n=function(a){g=a+g},o={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var a=g.indexOf("-->");return a>=0?{content:g.substr(4,a),length:a+3}:void 0},endTag:function(){var a=g.match(c);return a?{tagName:a[1],length:a[0].length}:void 0},atomicTag:function(){var a=p.startTag();if(a){var b=g.slice(a.length);if(b.match(new RegExp("</\\s*"+a.tagName+"\\s*>","i"))){var c=b.match(new RegExp("([\\s\\S]*?)</\\s*"+a.tagName+"\\s*>","i"));if(c)return{tagName:a.tagName,attrs:a.attrs,content:c[1],length:c[0].length+a.length}}}},startTag:function(){var a=g.indexOf(">");if(-1===a)return null;var c=g.match(b);if(c){var f={},h={},i=c[2];return c[2].replace(d,function(a,b){if(arguments[2]||arguments[3]||arguments[4]||arguments[5])if(arguments[5])f[arguments[5]]="",h[b]=!0;else{var c=arguments[2]||arguments[3]||arguments[4]||e.test(b)&&b||"";f[b]=l(c)}else f[b]=null;i=i.replace(a,"")}),{tagName:c[1],attrs:f,booleanAttrs:h,rest:i,unary:!!c[3],length:c[0].length}}},chars:function(){var a=g.indexOf("<");return{length:a>=0?a:g.length}}},q=function(){for(var a in o)if(o[a].test(g)){f&&console.log("suspected "+a);var b=p[a]();return b?(f&&console.log("parsed "+a,b),b.type=b.type||a,b.text=g.substr(0,b.length),g=g.slice(b.length),b):null}},r=function(a){for(var b;b=q();)if(a[b.type]&&a[b.type](b)===!1)return},s=function(){var a=g;return g="",a},t=function(){return g};return h.fix&&!function(){var a=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,b=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,c=[];c.last=function(){return this[this.length-1]},c.lastTagNameEq=function(a){var b=this.last();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()},c.containsTagName=function(a){for(var c,b=0;c=this[b];b++)if(c.tagName===a)return!0;return!1};var d=function(b){return b&&"startTag"===b.type&&(b.unary=a.test(b.tagName)||b.unary,b.html5Unary=!/\/>$/.test(b.text)),b},e=q,f=function(){var a=g,b=d(e());return g=a,b},i=function(){var a=c.pop();n("</"+a.tagName+">")},j={startTag:function(a){var d=a.tagName;"TR"===d.toUpperCase()&&c.lastTagNameEq("TABLE")?(n("<TBODY>"),l()):h.fix_selfClose&&b.test(d)&&c.containsTagName(d)?c.lastTagNameEq(d)?i():(n("</"+a.tagName+">"),l()):a.unary||c.push(a)},endTag:function(a){var b=c.last();b?h.fix_tagSoup&&!c.lastTagNameEq(a.tagName)?i():c.pop():h.fix_tagSoup&&k()}},k=function(){e(),l()},l=function(){var a=f();a&&j[a.type]&&j[a.type](a)};q=function(){return l(),d(e())}}(),{append:m,readToken:q,readTokens:r,clear:s,rest:t,stack:j}}var a=function(){var b,a={},c=this.document.createElement("div");return b="<P><I></P></I>",c.innerHTML=b,a.tagSoup=c.innerHTML!==b,c.innerHTML="<P><i><P></P></i></P>",a.selfClose=2===c.childNodes.length,a}(),b=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,c=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,d=/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,e=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,f=!1;g.supports=a,g.tokenToString=function(a){var b={comment:function(a){return"<!--"+a.content},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return f&&console.log(a),b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName;for(var c in a.attrs){b+=" "+c;var d=a.attrs[c];("undefined"==typeof a.booleanAttrs||"undefined"==typeof a.booleanAttrs[c])&&(b+='="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"')}return a.rest&&(b+=a.rest),b+(a.unary&&!a.html5Unary?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)},g.escapeAttributes=function(a){var b={};for(var c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in a)g.browserHasFlaw=g.browserHasFlaw||!a[h]&&h;this.htmlParser=g};
/**     postscribe.js 1.4.0
*     (c) Copyright 2012 to the present, Krux
*     postscribe is freely distributable under the MIT license.
*     For all details and documentation:
*     http://krux.github.com/postscribe
*/
var loadPostScrb=function(){function a(){}function e(a){return a!==d&&null!==a}function h(a){return"function"==typeof a}function i(a,b,c){var d,e=a&&a.length||0;for(d=0;e>d;d++)b.call(c,a[d],d)}function j(a,b,c){var d;for(d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function k(a,b){return j(b,function(b,c){a[b]=c}),a}function l(a,b){return a=a||{},j(b,function(b,c){e(a[b])||(a[b]=c)}),a}function m(a){try{return g.call(a)}catch(b){var c=[];return i(a,function(a){c.push(a)}),c}}function o(a){return a&&"tagName"in a?!!~a.tagName.toLowerCase().indexOf("script"):!1}function p(a){return a&&"tagName"in a?!!~a.tagName.toLowerCase().indexOf("style"):!1}var b={afterAsync:a,afterDequeue:a,afterStreamStart:a,afterWrite:a,autoFix:!0,beforeEnqueue:a,beforeWriteToken:function(a){return a},beforeWrite:function(a){return a},done:a,error:function(a){throw a},releaseAsync:!1},c=this,d=void 0;if(!c.postscribe){var f=!1,g=Array.prototype.slice,n=function(a){return a[a.length-1]},q=function(){function b(b,c,d){var f=a+c;if(2===arguments.length){var g=b.getAttribute(f);return e(g)?String(g):g}e(d)&&""!==d?b.setAttribute(f,d):b.removeAttribute(f)}function c(a,c){var d=a.ownerDocument;k(this,{root:a,options:c,win:d.defaultView||d.parentWindow,doc:d,parser:htmlParser("",{autoFix:c.autoFix}),actuals:[a],proxyHistory:"",proxyRoot:d.createElement(a.nodeName),scriptStack:[],writeQueue:[]}),b(this.proxyRoot,"proxyof",0)}var a="data-ps-";return c.prototype.write=function(){[].push.apply(this.writeQueue,arguments);for(var a;!this.deferredRemote&&this.writeQueue.length;)a=this.writeQueue.shift(),h(a)?this.callFunction(a):this.writeImpl(a)},c.prototype.callFunction=function(a){var b={type:"function",value:a.name||a.toString()};this.onScriptStart(b),a.call(this.win,this.doc),this.onScriptDone(b)},c.prototype.writeImpl=function(a){this.parser.append(a);for(var b,d,e,c=[];(b=this.parser.readToken())&&!(d=o(b))&&!(e=p(b));)b=this.options.beforeWriteToken(b),b&&c.push(b);this.writeStaticTokens(c),d&&this.handleScriptToken(b),e&&this.handleStyleToken(b)},c.prototype.writeStaticTokens=function(a){var b=this.buildChunk(a);if(b.actual)return b.html=this.proxyHistory+b.actual,this.proxyHistory+=b.proxy,this.proxyRoot.innerHTML=b.html,f&&(b.proxyInnerHTML=this.proxyRoot.innerHTML),this.walkChunk(),f&&(b.actualInnerHTML=this.root.innerHTML),b},c.prototype.buildChunk=function(b){var c=this.actuals.length,d=[],e=[],f=[];return i(b,function(b){var g=htmlParser.tokenToString(b);if(d.push(g),b.attrs){if(!/^noscript$/i.test(b.tagName)){var h=c++;e.push(g.replace(/(\/?>)/," "+a+"id="+h+" $1")),"ps-script"!==b.attrs.id&&"ps-style"!==b.attrs.id&&f.push("atomicTag"===b.type?"":"<"+b.tagName+" "+a+"proxyof="+h+(b.unary?" />":">"))}}else e.push(g),f.push("endTag"===b.type?g:"")}),{tokens:b,raw:d.join(""),actual:e.join(""),proxy:f.join("")}},c.prototype.walkChunk=function(){for(var a,c=[this.proxyRoot];e(a=c.shift());){var d=1===a.nodeType,f=d&&b(a,"proxyof");if(!f){d&&(this.actuals[b(a,"id")]=a,b(a,"id",null));var g=a.parentNode&&b(a.parentNode,"proxyof");g&&this.actuals[g].appendChild(a)}c.unshift.apply(c,m(a.childNodes))}},c.prototype.handleScriptToken=function(a){var b=this.parser.clear();if(b&&this.writeQueue.unshift(b),a.src=a.attrs.src||a.attrs.SRC,a=this.options.beforeWriteToken(a)){a.src&&this.scriptStack.length?this.deferredRemote=a:this.onScriptStart(a);var c=this;this.writeScriptToken(a,function(){c.onScriptDone(a)})}},c.prototype.handleStyleToken=function(a){var b=this.parser.clear();b&&this.writeQueue.unshift(b),a.type=a.attrs.type||a.attrs.TYPE||"text/css",a=this.options.beforeWriteToken(a),a&&this.writeStyleToken(a),b&&this.write()},c.prototype.writeStyleToken=function(a){var b=this.buildStyle(a);this.insertStyle(b),a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.doc.createTextNode(a.content)))},c.prototype.buildStyle=function(a){var b=this.doc.createElement(a.tagName);return b.setAttribute("type",a.type),j(a.attrs,function(a,c){b.setAttribute(a,c)}),b},c.prototype.insertStyle=function(a){this.writeImpl('<span id="ps-style"/>');var b=this.doc.getElementById("ps-style");b.parentNode.replaceChild(a,b)},c.prototype.onScriptStart=function(a){a.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(a)},c.prototype.onScriptDone=function(a){return a!==this.scriptStack[0]?void this.options.error({message:"Bad script nesting or script finished twice"}):(this.scriptStack.shift(),this.write.apply(this,a.outerWrites),void(!this.scriptStack.length&&this.deferredRemote&&(this.onScriptStart(this.deferredRemote),this.deferredRemote=null)))},c.prototype.writeScriptToken=function(a,b){var c=this.buildScript(a),d=this.shouldRelease(c),e=this.options.afterAsync;a.src&&(c.src=a.src,this.scriptLoadHandler(c,d?e:function(){b(),e()}));try{this.insertScript(c),(!a.src||d)&&b()}catch(f){this.options.error(f),b()}},c.prototype.buildScript=function(a){var b=this.doc.createElement(a.tagName);return j(a.attrs,function(a,c){b.setAttribute(a,c)}),a.content&&(b.text=a.content),b},c.prototype.insertScript=function(a){this.writeImpl('<span id="ps-script"/>');var b=this.doc.getElementById("ps-script");b.parentNode.replaceChild(a,b)},c.prototype.scriptLoadHandler=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}function e(){c(),b()}function f(a){c(),d(a),b()}var d=this.options.error;k(a,{onload:function(){e()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&e()},onerror:function(){f({message:"remote script failed "+a.src})}})},c.prototype.shouldRelease=function(a){var b=/^script$/i.test(a.nodeName);return!b||!!(this.options.releaseAsync&&a.src&&a.hasAttribute("async"))},c}();c.postscribe=function(){function g(){var b,a=e.shift();a&&(b=n(a),b.afterDequeue(),a.stream=i.apply(null,a),b.afterStreamStart())}function i(b,c,e){function l(a){a=e.beforeWrite(a),f.write(a),e.afterWrite(a)}f=new q(b,e),f.id=d++,f.name=e.name||f.id,j.streams[f.name]=f;var h=b.ownerDocument,i={close:h.close,open:h.open,write:h.write,writeln:h.writeln};k(h,{close:a,open:a,write:function(){return l(m(arguments).join(""))},writeln:function(){return l(m(arguments).join("")+"\n")}});var n=f.win.onerror||a;return f.win.onerror=function(a,b,c){e.error({msg:a+" - "+b+":"+c}),n.apply(f.win,arguments)},f.write(c,function(){k(h,i),f.win.onerror=n,e.done(),f=null,g()}),f}function j(d,i,j){h(j)&&(j={done:j}),j=l(j,b),d=/^#/.test(d)?c.document.getElementById(d.substr(1)):d.jquery?d[0]:d;var k=[d,i,j];return d.postscribe={cancel:function(){k.stream?k.stream.abort():k[1]=a}},j.beforeEnqueue(k),e.push(k),f||g(),d.postscribe}var d=0,e=[],f=null;return k(j,{streams:{},queue:e,WriteStream:q})}()}};

window.Fusion.loadjsfile = function(url){
var scrptElement = document.createElement("script");
scrptElement.setAttribute("type", "text/javascript");
scrptElement.setAttribute("src", url);
var scriptParent = document.getElementsByTagName("head")[0];
if (!scriptParent) scriptParent = document; // no head, enter panic mode
scriptParent.appendChild(scrptElement);
}
window.Fusion.PSScrptLoad = function(){
if(window.Fusion.usepostscribe){
		if(typeof postscribe != 'function'){
		if(typeof loadHTMLparser == 'function'){
		loadHTMLparser();
		}
		else{window.Fusion.loadjsfile(window.Fusion.protocol+"//fusion.adtoma.com/spl/postscribe/htmlParser.js");}
		if(typeof loadPostScrb == 'function'){
		loadPostScrb();
		}
		else{window.Fusion.loadjsfile(window.Fusion.protocol+"//fusion.adtoma.com/spl/postscribe/postscribe.js");}
		}
}
}
if(window.Fusion.usepostscribe){
window.Fusion.PSScrptLoad();
}
window.Fusion.isScrptLoad = function(){
if(xscrloaded=="0"){
var xscriptElement = document.createElement("script");
		xscriptElement.setAttribute("type", "text/javascript");
		if(window.Fusion.adServer){
		xscriptElement.setAttribute("src", window.Fusion.protocol+"//"+window.Fusion.adServer+"/spl/x.js");
		}
		else{
		xscriptElement.setAttribute("src", window.Fusion.protocol+"//fusion.adtoma.com/spl/x.js");
		}
		var xscriptParent = document.getElementsByTagName("head")[0];
		if (!xscriptParent) xscriptParent = document; // no head, enter panic mode
		xscriptParent.appendChild(xscriptElement);
		xscrloaded="1";
	}
	if(window.Fusion.usepostscribe){
window.Fusion.PSScrptLoad();
}
}

window.Fusion.get_cookie = function(check_name){
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false;
	
	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		a_temp_cookie = a_all_cookies[i].split( '=' );
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found ) 
	{
		return null;
	}
}

window.Fusion.set_cookie = function( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires )
	{
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name + "=" +escape( value ) +
		( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
		( ( path ) ? ";path=" + path : "" ) + 
		( ( domain ) ? ";domain=" + domain : "" ) +
		( ( secure ) ? ";secure" : "" );
}

window.Fusion.Delete_Cookie = function( name, path, domain ) {
	if ( window.Fusion.get_cookie( name ) ) document.cookie = name + "=" +
			( ( path ) ? ";path=" + path : "") +
			( ( domain ) ? ";domain=" + domain : "" ) +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

window.Fusion.DeviceparamsSet = function(count){
if(count<100){
if(typeof WURFL == 'object'){
window.Fusion.set_cookie( 'FusiondevN', WURFL.complete_device_name, 365,'/');
window.Fusion.set_cookie( 'FusiondevT', WURFL.form_factor, 365,'/');
window.Fusion.set_cookie( 'FusionisM', WURFL.is_mobile, 365,'/');
//console.log("cookiesSet");
}else{
//console.log("counter "+count);
var c=count+1;
setTimeout("window.Fusion.DeviceparamsSet("+c+")",10);
}
}
}

window.Fusion.Devicedetect = function(){
if(!wurflIODone){
wurflIODone=true;
var WUioDN=window.Fusion.get_cookie('FusiondevN');
if(WUioDN!=null){
window.Fusion.parameters["wurflio.device_name"] = WUioDN;
}
var WUioDT=window.Fusion.get_cookie('FusiondevT');
if(WUioDT!=null){
window.Fusion.parameters["wurflio.device_type"] = WUioDT;
}else{
window.Fusion.loadjsfile(window.Fusion.protocol+"//wurfl.io/wurfl.js");
setTimeout("window.Fusion.DeviceparamsSet(0)",10);
}
var WUioIM=window.Fusion.get_cookie('FusionisM');
if(WUioIM!=null){
window.Fusion.parameters["wurflio.is_mobile"] = WUioIM;
}

}
}

function xGetElementById(e)
{
  if (typeof(e) == 'string') {
    if (document.getElementById) e = document.getElementById(e);
    else if (document.all) e = document.all[e];
    else e = null;
  }
  return e;
}
function xAddEventListener(e,eT,eL,cap)
{
  if(!(e=xGetElementById(e)))return;
  eT=eT.toLowerCase();
  if(e.addEventListener)e.addEventListener(eT,eL,cap||false);
  else if(e.attachEvent)e.attachEvent('on'+eT,eL);
  else {
    var o=e['on'+eT];
    e['on'+eT]=typeof o=='function' ? function(v){o(v);eL(v);} : eL;
  }
}
 
/* If a given element is visible or not? */
window.Fusion.isElementVisible = function(eltId,adw,adh){ 
    var elt = document.getElementById(eltId);
	//var adwidth=parseInt(adw);
	//var adheight=parseInt(adh);
	var InScreen="0";
    if (!elt) { 
        // Element not found. 
        return false; 
    } 
    // Get the top and bottom position of the *visible* part of the window. 
	var By1 = xScrollTop();
    var Bx1 = xScrollLeft();
	var By2 = By1 + xClientHeight();
	var Bx2 = Bx1 + xClientWidth();
	// Get the top and bottom position of the given element. 
	
	var Ay1 = xPageY(elt); 
	var Ax1 = xPageX(elt); 
	
	var Ay2 = Ay1 + xHeight(elt);
	//var Ay2 = Ay1 + adheight;
	var Ax2 = Ax1 + xWidth(elt);
	//var Ax2 = Ax1 + adwidth;
	if (Bx2<Ax1||Bx1>Ax2) 
	{ 
        // Element not found. 
        return InScreen; 
    } 
	//Calculate common part of the two rectangles you see in the browser 
	var Vy1 = Math.max(By1, Ay1);
	var Vx1 = Math.max(Bx1, Ax1);
	var Vy2 = Math.min(By2, Ay2);
	var Vx2 = Math.min(Bx2, Ax2);
	
	//field of the visible part
	var Fvis = (Vx2-Vx1)*(Vy2-Vy1);
	
	if(Fvis>0)
	{
	//field of the ad
	var Fad = (Ax2-Ax1)*(Ay2-Ay1);
	var InScreen = Math.round((Fvis/Fad)*100);
	}
return InScreen;
} 

if(!ismobj){var ismobj=new Array();}
if(!ismobjw){var ismobjw=new Array();}
if(!ismobjh){var ismobjh=new Array();}
if(!ismobjev){var ismobjev=new Array();}
if(!impmobjev){var impmobjev=new Array();}
if(!ismobjtmr){var ismobjtmr=new Array();}
if(!ismobjOK){var ismobjOK=new Array();}
if(!ismobjtmo){var ismobjtmo=new Array();}
if(!ismobjisp){var ismobjisp=new Array();}
if(!ismobjintrvl){var ismobjintrvl=new Array();}
if(!dothisOnce){var dothisOnce=new Array();}
if(!ismcnt){var ismcnt=0;}
if(!ismping){var ismping;}
if(!fusionmainISchk){var fusionmainISchk;}
if(!fusionBrwsrchk){var fusionBrwsrchk;}
if(!fusionBrwsrval){var fusionBrwsrval;}
if(!EvTracking){var EvTracking = new Object();}
//To be used later with Inscr imptracking
if(!ImpTracking){var ImpTracking = new Object();}
//if(!TptTracking){var TptTracking = new Object();}

window.Fusion.doimpsCnt = function(ismcnt){
if(impmobjev[ismcnt]){
var rndm = new Number(Math.round(Math.random() * Math.pow(2,24)));
impmobjev[ismcnt]=impmobjev[ismcnt].replace("/impression/","/impression/"+rndm);
ImpTracking[ismcnt].src = impmobjev[ismcnt];
}
}

window.Fusion.detISCont = function(pId,aId,IScnt,ifId){
var elId="Span-" + pId + "-adid-" + aId;
if(!ifId){var ifId="";}
if(ifId!=""){
ismobj[IScnt]=ifId;
}
else if(document.getElementById(elId)){
if(document.getElementById(elId).parentNode){
var parId=document.getElementById(elId).parentNode.id;
if(!parId){
document.getElementById(elId).parentNode.id="FusIS-" + pId + "-adid-" + aId;
parId="FusIS-" + pId + "-adid-" + aId;
}
ismobj[IScnt]=parId;
}
}
}

window.Fusion.doismcall = function()
{
for(ismcnt=0;ismcnt<ismobj.length;ismcnt++)
{
ismping=window.Fusion.isElementVisible(ismobj[ismcnt]);
if(ismping){
if (ismping>=ismobjisp[ismcnt] && fusionBrwsrval==1){
if(ismobjtmo[ismcnt]=="0" && ismobjtmr[ismcnt]<61){
ismobjtmo[ismcnt]="1";
ismobjintrvl[ismcnt]=setInterval("window.Fusion.doIntrvlcnt("+ismcnt+")",1000);
}
if(ismobjOK[ismcnt]=="1"){
ismobjOK[ismcnt]="0";
if(ismobjtmr[ismcnt]=="0" && dothisOnce[ismcnt]=="1"){
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscr"];
//To be used later with Inscr imptracking
//if(ismobjev[ismcnt]["impr"]){
//ImpTracking[ismcnt].src = "http://"+ismobjev[ismcnt]["impr"];
//}
//if(ismobjev[ismcnt]["tpt"]){
//TptTracking[ismcnt].src = ismobjev[ismcnt]["tpt"];
//}
}
else{
window.Fusion.doismEventcnt(ismcnt);
}
}
}
else{
if(ismobjintrvl[ismcnt])
{
clearInterval(ismobjintrvl[ismcnt]);
}
//dothisOnce[ismcnt]="1";
ismobjOK[ismcnt]="1";
ismobjtmo[ismcnt]="0";
}
}
}
}


window.Fusion.doIntrvlcnt = function(ismcnt){
ismobjtmr[ismcnt]=ismobjtmr[ismcnt]+1;
dothisOnce[ismcnt]="1";
ismobjOK[ismcnt]="1";
}

window.Fusion.doismEventcnt = function(ismcnt){
if(ismobjev[ismcnt]["inscr"] != "")
{
if(ismobjtmr[ismcnt]=="1" && dothisOnce[ismcnt]=="1"){
//1 sek
dothisOnce[ismcnt]="0";
window.Fusion.doimpsCnt(ismcnt);
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime1"];
ismobjOK[ismcnt]="1";
}
if(ismobjtmr[ismcnt]=="2" && dothisOnce[ismcnt]=="1"){
//2 sek
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime2"];
ismobjOK[ismcnt]="1";
}
if(ismobjtmr[ismcnt]=="4" && dothisOnce[ismcnt]=="1"){
//4 sek
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime4"];
ismobjOK[ismcnt]="1";
}
if(ismobjtmr[ismcnt]=="7" && dothisOnce[ismcnt]=="1"){
//7 sek
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime7"];
ismobjOK[ismcnt]="1";
}
if(ismobjtmr[ismcnt]=="12" && dothisOnce[ismcnt]=="1"){
//12 sek
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime12"];
ismobjOK[ismcnt]="1";
}
if(ismobjtmr[ismcnt]=="20" && dothisOnce[ismcnt]=="1"){
//20 sek
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime20"];
ismobjOK[ismcnt]="1";
}
if(ismobjtmr[ismcnt]=="30" && dothisOnce[ismcnt]=="1"){
//30 sek
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime30"];
ismobjOK[ismcnt]="1";
}
if(ismobjtmr[ismcnt]=="40" && dothisOnce[ismcnt]=="1"){
//40 sek
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime40"];
ismobjOK[ismcnt]="1";
}
if(ismobjtmr[ismcnt]=="50" && dothisOnce[ismcnt]=="1"){
//50 sek
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime50"];
ismobjOK[ismcnt]="1";
}
if(ismobjtmr[ismcnt]=="60" && dothisOnce[ismcnt]=="1"){
//60 sek
dothisOnce[ismcnt]="0";
EvTracking[ismcnt].src = window.Fusion.protocol+"//"+ismobjev[ismcnt]["inscrtime60"];
ismobjOK[ismcnt]="1";
clearInterval(ismobjintrvl[ismcnt]);
ismobjtmr[ismcnt]=ismobjtmr[ismcnt]+1;
}
}
}

window.Fusion.pick_event = function(evname,cnt)
{
var evname=evname.toLowerCase();
var fus_eventads=window.Fusion.adServer;

var eventname=evname+":";
if (ismobjev[cnt][0].search(evname)!=-1) {
var realevent=ismobjev[cnt][0].split(eventname);
realevent=realevent[1].split('"');
return fus_eventads+"/"+realevent[0];
}}

window.Fusion.chkBrwsrFoc = function(){
if (navigator.appName == 'Microsoft Internet Explorer'){
document.onfocusout = function(){fusionBrwsrchk=setTimeout("FusOnWinBlur()",20000);}
document.onfocusin = function(){FusOnWinFocus();}
}
else{
window.onblur = function(){fusionBrwsrchk=setTimeout("FusOnWinBlur()",20000);}
window.onfocus = function(){FusOnWinFocus();}
}
}
function FusOnWinFocus(){
clearTimeout(fusionBrwsrchk);
fusionBrwsrval=1;
}

function FusOnWinBlur(){
fusionBrwsrval=0;
}
/**
 * Adds a warning if a field in window.Fusion doesn't exist.
 */
window.Fusion.assertFieldExists = function(field) {
	if (window.Fusion[field] === undefined) {
		window.Fusion.warnings.push("Assertion failed: Field \"" + field + "\" is undefined");
		return false;
	} else return true;
}

/**
 * Shows all warnings.
 */
window.Fusion.showWarnings = function(){
	var w, msg = window.Fusion.warnings.length ? window.Fusion.warnings.length + " warning/s:\n" + window.Fusion.warnings.join("\n") : "No warnings.";
	if (!window.Fusion.warnings.length || !(w = window.open("about:blank", "_blank", "width=800,height=600"))) alert(msg);
	else {
		w.document.open("text/plain");
		w.document.writeln(msg);
		w.document.close();
	}
}

/**
 * Randomizes a number in the interval [low, high)
 */
window.Fusion.randomInterval = function (low, high){ return Math.floor((Math.random() * (high - low)) + low); }

/**
 * Randomizes a string (character a-z) of length len.
 */
window.Fusion.randomAsciiString = function (len){
	var ret = "";
	while (len-- > 0)
		ret += String.fromCharCode(window.Fusion.randomInterval('a'.charCodeAt(0), 'z'.charCodeAt(0) + 1));
	return ret;
}

/**
 * Does a minimal HTML encoding of a string.
 */
window.Fusion.htmlEncode = function (s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;");
}

/**
 * Expands special symbols in a component attribute.
 */
window.Fusion.expandAttribute = function (comp, attr, visited) {
	if (!visited) visited = [];
	var funcs = { "htmlEncode": window.Fusion.htmlEncode, "uriEncode": encodeURIComponent };
	var plcont;
	if(attr=='Payload'){
	plcont=comp.attributes["Payload"];
	plcont=plcont.replace(/bn-01.adtomafusion.com/gi,'bn-01.adtomafusion.net');

	if(window.location.protocol=="https:"||window.Fusion.protocol=="https:"){
		//tredjepartskoder och andra src'es
		//componentContent=componentContent.replace('SRC="http:','SRC="https:');
		plcont=plcont.replace(/src="http:/gi,'src="https:');
		//componentContent=componentContent.replace("SRC='http:","SRC='https:");
		plcont=plcont.replace(/src='http:/gi,"src='https:");
		plcont=plcont.replace(/http:\/\/bn-01.adtomafusion.com:80/gi,'https://bn-01.adtomafusion.net');
		plcont=plcont.replace(/http:\/\/bn-01.adtomafusion.net:80/gi,'https://bn-01.adtomafusion.net');
		plcont=plcont.replace(/https:\/\/bn-01.adtomafusion.com:80/gi,'https://bn-01.adtomafusion.net');
		plcont=plcont.replace(/https:\/\/bn-01.adtomafusion.net:80/gi,'https://bn-01.adtomafusion.net');
		//TPT länken
		plcont=plcont.replace(/src = "http:/gi,'src = "https:');
		//Fusion sökvägar som innehåller :80, funkar ej med https
		var fAdS = window.Fusion.adServer+':80';
		var reAdS = new RegExp(fAdS, 'g');
		plcont=plcont.replace(reAdS, window.Fusion.adServer);
		//Flash sökväg
		plcont=plcont.replace(/SWFObject_Fusion\("http:/g,'SWFObject_Fusion("https:');
		//Tradedoubler 3'e parts koder
		plcont=plcont.replace(/uri = 'http:/gi,"uri = 'https:");
		}
	
	}
	return plcont.replace(/(\{{1,2})%([^%]+)%\}/g, function(match, braces, content){
		if (braces.length == 2) return "{%" + content + "%}"; // double braces quote
		var parts = content.split(":");
		var content = parts.pop().replace(/^([^\.]+)\.?(.*)$/, function (match2, prefix, suffix){
			switch (prefix){
				case "Fusion": 
					if (window.Fusion[suffix] === undefined) {
						window.Fusion.warnings.push("Tried to expand unknown Fusion attribute: " + suffix);
						return "Fusion." + suffix;
					} else return window.Fusion[suffix].toString();
				case "attribute":
					for (var vindex = 0; vindex < visited.length; ++vindex) {
						if (visited[vindex] == suffix){
							window.Fusion.warnings.push("Expanding attribute '" + attr + 
									"' causes infinite recursion. Stack is " + visited);
							return match2;
						}
					} 
					visited.push(suffix);
					var ret = window.Fusion.expandAttribute(comp, visited);
					visited.pop();
					return ret;
				case "r": return window.Fusion.randomAsciiString(suffix ? parseInt(suffix, 10) : 5);
				case "eventUrl": return window.Fusion.getAdvertEventUrl(comp.ad, suffix);
				case "parameters": return window.Fusion.getParameters();
				case "adId": return comp.ad.toString();
				default: window.Fusion.warnings.push("Tried to expand unknown macro: " + match2); return match2;
			}
		});
		while (parts.length > 0) {
			var funcName = parts.pop();
			var f = funcs[funcName];
			if (f === undefined) window.Fusion.warnings.push("Bad macro function: " + funcName);
			else content = f(content);
		}
		return content;
	});
}


window.Fusion.getComponent = function(placementName, attribute) {
    if (attribute === undefined)
        attribute = window.Fusion.ATTR_PAYLOAD;
    if (window.Fusion.assertFieldExists("adComponents")) {
        var components = window.Fusion.adComponents[placementName];
        var component = null;
		var isadBegin = "";
		var isadEnd = "";
		var cntVerFImps = "";
        if (!(components instanceof Array) || components.length === 0) {
            //window.Fusion.warnings.push("Tried to show ad for non-existing placement " + placementName);
            return null;
        } else if (typeof ((component = components.shift()).attributes[attribute]) != typeof ("")) {
            window.Fusion.warnings.push("Component on placement " + placementName +
					" for ad " + component.ad + " missing " + attribute + " attribute");
            return null;
        } else {
            //DanChr: we will need that later for checking, which ads were displayed
            component.attributes[window.Fusion.ATTR_SHOWN] = true;
            if (component.attributes["COUNTINSCREEN"] != undefined && component.attributes["ISEVENTS"] != undefined && component.attributes["ISPERCENTAGE"] != undefined)
			{
			if (component.attributes["COUNTINSCREEN"]=="Yes" && component.attributes["ISPERCENTAGE"]=="0")
			{
			ImpTracking[ismcnt] = new Image();
			impmobjev[ismcnt]=window.Fusion.protocol+"//"+window.Fusion.adServer+"/impression/rndm/"+window.Fusion.mediaZone+"/"+window.Fusion.layout+"/"+component.id+"?verified=true";
			cntVerFImps = '<scr'+'ipt type="text/javascript">window.Fusion.doimpsCnt('+ismcnt+');</scr'+'ipt>';
			ismcnt=ismcnt+1;
			}
			else if (component.attributes["COUNTINSCREEN"]=="Yes" && component.attributes["ISPERCENTAGE"]!="0")
			{
			ImpTracking[ismcnt] = new Image();
			impmobjev[ismcnt]=window.Fusion.protocol+"//"+window.Fusion.adServer+"/impression/rndm/"+window.Fusion.mediaZone+"/"+window.Fusion.layout+"/"+component.id+"?verified=true";
			EvTracking[ismcnt] = new Image();
			ismobj[ismcnt]="None-" + placementName + "-adid-" + component.ad;
			ismobjev[ismcnt] = [component.attributes["ISEVENTS"]];
			ismobjev[ismcnt]["inscr"]=window.Fusion.pick_event("INSCREEN",ismcnt);
			//To be used later with Inscr imptracking
			//var strPL=component.attributes["Payload"];
			//var strsrch = strPL.search("verified=true");
			//if (strsrch != -1){
			//strsrch=strPL.split("?verified=true");
			//var imptr=strsrch[0].split('adimpurl="');
			//ImpTracking[ismcnt] = new Image();
			//ismobjev[ismcnt]["impr"]=window.Fusion.adServer+"/"+imptr[1]+"?verified=true";
			//}
			//var strsrch = strPL.search('adimptpt="');
			//if (strsrch != -1){
			//strsrch=strPL.split('adimptpt="');
			//var imptr=strsrch[1].split('"');
			//if(imptr[0]!=""){
			//TptTracking[ismcnt] = new Image();
			//ismobjev[ismcnt]["tpt"]=imptr[0];
			//}
			//}
			ismobjev[ismcnt]["inscrtime1"]=window.Fusion.pick_event("ISTIME1",ismcnt);
			ismobjev[ismcnt]["inscrtime2"]=window.Fusion.pick_event("ISTIME2",ismcnt);
			ismobjev[ismcnt]["inscrtime4"]=window.Fusion.pick_event("ISTIME4",ismcnt);
			ismobjev[ismcnt]["inscrtime7"]=window.Fusion.pick_event("ISTIME7",ismcnt);
			ismobjev[ismcnt]["inscrtime12"]=window.Fusion.pick_event("ISTIME12",ismcnt);
			ismobjev[ismcnt]["inscrtime20"]=window.Fusion.pick_event("ISTIME20",ismcnt);
			ismobjev[ismcnt]["inscrtime30"]=window.Fusion.pick_event("ISTIME30",ismcnt);
			ismobjev[ismcnt]["inscrtime40"]=window.Fusion.pick_event("ISTIME40",ismcnt);
			ismobjev[ismcnt]["inscrtime50"]=window.Fusion.pick_event("ISTIME50",ismcnt);
			ismobjev[ismcnt]["inscrtime60"]=window.Fusion.pick_event("ISTIME60",ismcnt);
			ismobjtmr[ismcnt]=0;
			ismobjOK[ismcnt]="1";
			dothisOnce[ismcnt]="1";
			ismobjtmo[ismcnt]="0";
									
			ismobjisp[ismcnt]=component.attributes["ISPERCENTAGE"];
						
			if(ismcnt=="0"){
			fusionmainISchk=setInterval("window.Fusion.doismcall()",100);
			fusionBrwsrval=1;
			window.Fusion.chkBrwsrFoc();
			}
			//isadBegin = '<span id="Span-' + placementName + '-adid-' + component.ad + '" style="display:block">';
			isadBegin = '<span id="Span-' + placementName + '-adid-' + component.ad + '" style="display:none"></span><scri'+'pt>if(typeof inDapIFid === "undefined"){var inDapIFid="";}window.Fusion.detISCont("'+placementName+'","'+component.ad+'","'+ismcnt+'",inDapIFid);</scr'+'ipt>';
			if(window.Fusion.adServer){
			adendcount = 0;
			//isadEnd = '<scr'+'ipt src="//'+window.Fusion.adServer+'/spl/fusion_adend.js"></scr'+'ipt>';
			}
			else{
			adendcount = 0;
			//isadEnd = '<scr'+'ipt src="//fusion.adtoma.com/spl/fusion_adend.js"></scr'+'ipt>';
			}
			ismcnt=ismcnt+1;
			}
			}
            spaceadId[placementName + jcount] = component.ad;
            
            jcount = jcount + 1;
			
            return isadBegin+'<div id="FusSpace-' + placementName + '-adid-' + component.ad + '" style="display:none;width:0px;height:0px"></div>'+cntVerFImps+window.Fusion.expandAttribute(component, attribute)+isadEnd;
			//return window.Fusion.expandAttribute(component, attribute);
        }
    } else return null;
}


window.Fusion.getComponentB = function(placementName, attribute) {
    if (attribute === undefined)
        attribute = window.Fusion.ATTR_PAYLOAD;
    if (window.Fusion.assertFieldExists("adComponents")) {
        var components = window.Fusion.adComponents[placementName];
        var component = null;
		var isadBegin = "";
		var isadEnd = "";
		var cntVerFImps = "";
        if (!(components instanceof Array) || components.length === 0) {
            //window.Fusion.warnings.push("Tried to show ad for non-existing placement " + placementName);
            return null;
        } else if (typeof ((component = components.shift()).attributes[attribute]) != typeof ("")) {
            window.Fusion.warnings.push("Component on placement " + placementName +
					" for ad " + component.ad + " missing " + attribute + " attribute");
            return null;
        } else {
            //DanChr: we will need that later for checking, which ads were displayed
            component.attributes[window.Fusion.ATTR_SHOWN] = true;
			Fusadid = component.ad;
            if (component.attributes["COUNTINSCREEN"] != undefined && component.attributes["ISEVENTS"] != undefined && component.attributes["ISPERCENTAGE"] != undefined)
			{
			if (component.attributes["COUNTINSCREEN"]=="Yes" && component.attributes["ISPERCENTAGE"]=="0")
			{
			ImpTracking[ismcnt] = new Image();
			impmobjev[ismcnt]=window.Fusion.protocol+"//"+window.Fusion.adServer+"/impression/rndm/"+window.Fusion.mediaZone+"/"+window.Fusion.layout+"/"+component.id+"?verified=true";
			cntVerFImps = '<scr'+'ipt type="text/javascript">window.Fusion.doimpsCnt('+ismcnt+');</scr'+'ipt>';
			ismcnt=ismcnt+1;
			}
			else if (component.attributes["COUNTINSCREEN"]=="Yes" && component.attributes["ISPERCENTAGE"]!="0")
			{
			ImpTracking[ismcnt] = new Image();
			impmobjev[ismcnt]=window.Fusion.protocol+"//"+window.Fusion.adServer+"/impression/rndm/"+window.Fusion.mediaZone+"/"+window.Fusion.layout+"/"+component.id+"?verified=true";
			EvTracking[ismcnt] = new Image();
			ismobj[ismcnt]="None-" + placementName + "-adid-" + component.ad;
			ismobjev[ismcnt] = [component.attributes["ISEVENTS"]];
			ismobjev[ismcnt]["inscr"]=window.Fusion.pick_event("INSCREEN",ismcnt);
			//To be used later with Inscr imptracking
			//var strPL=component.attributes["Payload"];
			//var strsrch = strPL.search("verified=true");
			//if (strsrch != -1){
			//strsrch=strPL.split("?verified=true");
			//var imptr=strsrch[0].split('adimpurl="');
			//ImpTracking[ismcnt] = new Image();
			//ismobjev[ismcnt]["impr"]=window.Fusion.adServer+"/"+imptr[1]+"?verified=true";
			//}
			//var strsrch = strPL.search('adimptpt="');
			//if (strsrch != -1){
			//strsrch=strPL.split('adimptpt="');
			//var imptr=strsrch[1].split('"');
			//if(imptr[0]!=""){
			//TptTracking[ismcnt] = new Image();
			//ismobjev[ismcnt]["tpt"]=imptr[0];
			//}
			//}
			ismobjev[ismcnt]["inscrtime1"]=window.Fusion.pick_event("ISTIME1",ismcnt);
			ismobjev[ismcnt]["inscrtime2"]=window.Fusion.pick_event("ISTIME2",ismcnt);
			ismobjev[ismcnt]["inscrtime4"]=window.Fusion.pick_event("ISTIME4",ismcnt);
			ismobjev[ismcnt]["inscrtime7"]=window.Fusion.pick_event("ISTIME7",ismcnt);
			ismobjev[ismcnt]["inscrtime12"]=window.Fusion.pick_event("ISTIME12",ismcnt);
			ismobjev[ismcnt]["inscrtime20"]=window.Fusion.pick_event("ISTIME20",ismcnt);
			ismobjev[ismcnt]["inscrtime30"]=window.Fusion.pick_event("ISTIME30",ismcnt);
			ismobjev[ismcnt]["inscrtime40"]=window.Fusion.pick_event("ISTIME40",ismcnt);
			ismobjev[ismcnt]["inscrtime50"]=window.Fusion.pick_event("ISTIME50",ismcnt);
			ismobjev[ismcnt]["inscrtime60"]=window.Fusion.pick_event("ISTIME60",ismcnt);
			ismobjtmr[ismcnt]=0;
			ismobjOK[ismcnt]="1";
			dothisOnce[ismcnt]="1";
			ismobjtmo[ismcnt]="0";
									
			ismobjisp[ismcnt]=component.attributes["ISPERCENTAGE"];
						
			if(ismcnt=="0"){
			fusionmainISchk=setInterval("window.Fusion.doismcall()",100);
			fusionBrwsrval=1;
			window.Fusion.chkBrwsrFoc();
			}
			//isadBegin = '<span id="Span-' + placementName + '-adid-' + component.ad + '" style="display:none"></span><scri'+'pt>if(typeof inDapIFid === "undefined"){var inDapIFid="";}window.Fusion.detISCont("'+placementName+'","'+component.ad+'","'+ismcnt+'","'+inDapIFid+'");</scr'+'ipt>';
			//isadBegin = '<span id="Span-' + placementName + '-adid-' + component.ad + '" style="display:none"></span><scri'+'pt>if(typeof inDapIFid === "undefined"){var inDapIFid="";}window.Fusion.detISCont("'+placementName+'","'+component.ad+'","'+ismcnt+'");</scr'+'ipt>';
			isadBegin = '<span id="Span-' + placementName + '-adid-' + component.ad + '" style="display:none"></span><scri'+'pt>if(typeof inDapIFid === "undefined"){var inDapIFid="";}window.Fusion.detISCont("'+placementName+'","'+component.ad+'","'+ismcnt+'",inDapIFid);</scr'+'ipt>';
			if(window.Fusion.adServer){
			adendcount = 0;
			//isadEnd = '<scr'+'ipt src="//'+window.Fusion.adServer+'/spl/fusion_adend.js"></scr'+'ipt>';
			}
			else{
			adendcount = 0;
			//isadEnd = '<scr'+'ipt src="//fusion.adtoma.com/spl/fusion_adend.js"></scr'+'ipt>';
			}
			ismcnt=ismcnt+1;
			}
			}
            spaceadId[placementName + jcount] = component.ad;
            
            jcount = jcount + 1;
			
            return isadBegin+'<div id="FusSpace-' + placementName + '-adid-' + component.ad + '" style="display:none;width:0px;height:0px"></div>'+cntVerFImps+window.Fusion.expandAttribute(component, attribute)+isadEnd;
			//return window.Fusion.expandAttribute(component, attribute);
        }
    } else return null;
}

/**
* Checks which spaces displayed ads.
*/
window.Fusion.checkAds = function() {

    var url = window.Fusion.getUrlToFile("report");
    // Add mandatory params
    url += "/" + window.Fusion.randomAsciiString(5);
    url += "/" + encodeURIComponent(window.Fusion.mediaZone);
    url += "/" + encodeURIComponent(window.Fusion.layout);
    // Add affiliate, if one is specified
    if (window.Fusion.affiliate !== undefined)
        url += "/" + encodeURIComponent(window.Fusion.affiliate);
    // Add optional params

    var query = "Fusion.CountersTimeStamp=" + encodeURIComponent(window.Fusion.CountersTimeStamp);
    for (var param in window.Fusion.parameters) {
        if (!window.Fusion.parameters.hasOwnProperty(param))
            continue;
        var values = (window.Fusion.parameters[param] instanceof Array) ? window.Fusion.parameters[param] : [window.Fusion.parameters[param]];
        for (var idx = 0; idx < values.length; ++idx) {
            if (query.length > 0)
                query += "&";
            query += encodeURIComponent(param) + "=" + encodeURIComponent(values[idx] + "");
        }
    }
    var urlLocal = window.Fusion.protocol+ "//" + window.location.host + "/" + window.location.pathname;
    if (query.length > 0)
        query += "&";
    query += "Fusion.Url=" + encodeURI(urlLocal);
    var sendRequest = false;
    if (window.Fusion.adComponents !== undefined) {
        for (var space in window.Fusion.adComponents) {
            if (window.Fusion.adComponents[space].length > 0) {
                var component = window.Fusion.adComponents[space].shift();
                if (component.attributes[window.Fusion.ATTR_SHOWN] === undefined) {
                    //For now just add it to wornings
                    window.Fusion.warnings.push("There is an ad(id:" + component.ad + ") for space(name:" + space + ") which is not displayed on the page.");
                    if (query.length > 0)
                        query += "&";
                    query += "Fusion.AdID=" + component.ad;
                    query += "&";
                    query += "Fusion.Flags=" + component.flags;
                    query += "&";
                    query += "Fusion.AcgID=" + component.id;					

		    if(!sendRequest)
			sendRequest = true;
                }
            }
        }
    }
    //Later on, send it to reactor
    if (sendRequest) {
        url += "?" + query;
       //Call script
       var scriptElement = document.createElement("script");
       scriptElement.setAttribute("type", "text/javascript");
       scriptElement.setAttribute("src", url);
       document.body.appendChild(scriptElement);
    }
}

/**
 * Constructs a parameter list in URL format from window.Fusion.parameters.
 */
window.Fusion.getParameters = function (){
	var parameterString = "";
	var prefix = "";
	var prm = window.Fusion.parameters;
	for (var p in prm) {
		if (!prm.hasOwnProperty(p)) continue;	
	var allValues;
		if (window.Fusion.parameters[p] instanceof Array)
		{
			allValues = window.Fusion.parameters[p];
		}
		else
		{
			allValues = [window.Fusion.parameters[p]];
		}		
		for (var j = 0; j < allValues.length; ++j)
		{
			parameterString += prefix + p + "=" + allValues[j];
			// prefix has been used once, set to &
			prefix = "&";
		}
	}
	return parameterString;
}

/**
 * Constructs the base URL for an advert event call.
 * @param advertId The advert for which the event happened.
 * @param eventName The name of the event
 * @param redirectUrl Optional. If provided, the event counter will redirect the request to this URL. 
 */
window.Fusion.getAdvertEventUrl = function (advertId, eventName, redirectUrl){
	var url = window.Fusion.getUrlToFile("event");
	if(eventName=='click'||eventName=='Preview_click'){
	if(window.Fusion.protocol!=""){
	url=url.replace(/http:/gi,'');
	url=url.replace(/https:/gi,'');
	}
	}
	url += "/" + window.Fusion.randomAsciiString(5);
	url += "/" + encodeURIComponent(window.Fusion.mediaZone);
	url += "/" + encodeURIComponent(advertId);
	url += "/" + encodeURIComponent(eventName)
	if (window.Fusion.affiliate !== undefined)
		url += "/" + encodeURIComponent(window.Fusion.affiliate);
	if (redirectUrl !== undefined)
		url += "?url=" + encodeURIComponent(redirectUrl);
	return url;
}

/**
 * Notify the ad server that an event has occurred for an ad.
 *
 * Please note that adding a call to this function in, e.g., a 
 * link's onclick event doesn't always work as it doesn't capture 
 * clicks from right-clicks or middle-clicks.
 * 
 * @param advertId The ID of the advert
 * @param eventName The name of the event (e.g., "click")
 * @param redirectUrl The URL to redirect the user to. If this parameter
 * is unspecified, response from the servlet is "204 no content".
 * @param target The name of the window to open (equivalent to the "target"
 * attribute in HTML anchors). Defaults to "_blank".
 */
window.Fusion.countAdvertEvent = function (advertId, eventName, redirectUrl, target) {
	var url = window.Fusion.getAdvertEventUrl(advertId, eventName, redirectUrl);
	if (redirectUrl !== undefined) {
		// target defined? if not, use a new window
		if (target === undefined) target = "_blank";
		// acrobatics to get around popup blockers
		if (!window.open(url, target)) location.href = url;
	} else {
		// No redirect, do an asynchronous call and ignore whatever 
		// response there is (since it will be a 204). Add a random
		// string to prevent caching.
		var img = new Image();
		img.src = url;
	}
}

/**
 * This has been extended to include parameters in the call.
 */
window.Fusion.countAdvertEventWithParameters = function (advertId, eventName, redirectUrl, target) {
	var parameters = "YES";
	var url = window.Fusion.getAdvertEventUrl(advertId, eventName, redirectUrl, parameters);
	if (redirectUrl !== undefined) {
		// target defined? if not, use a new window
		if (target === undefined) target = "_blank";
		// acrobatics to get around popup blockers
		if (!window.open(url, target)) location.href = url;
	} else {
		// No redirect, do an asynchronous call and ignore whatever 
		// response there is (since it will be a 204). Add a random
		// string to prevent caching.
		var img = new Image();
		img.src = url;
	}
}
 window.Fusion.adEnding = function() {
 if(window.Fusion.adServer){
 adendcount = adendcount+1;
 document.write('<scr'+'ipt src="'+window.Fusion.protocol+'//'+window.Fusion.adServer+'/spl/fusion_adend.js"></scr'+'ipt>');
}
else{
adendcount = adendcount+1;
document.write('<scr'+'ipt src="'+window.Fusion.protocol+'//fusion.adtoma.com/spl/fusion_adend.js"></scr'+'ipt>');
}
 }
/**
 * Shows an ad for a placement.
 */
window.Fusion.space = function(placementName, adcallback) {
	if (window.Fusion.adComponents !== undefined) { 
		var componentContent = window.Fusion.getComponent(placementName);
		if ((typeof componentContent) == (typeof "")){ document.writeln(componentContent);
		if (adcallback !== undefined && typeof adcallback=='function'){adcallback(placementName);}
		}
	} else window.Fusion.warnings.push("No ads loaded when trying to show space " + placementName);
}

/**
 * Performs an ad call, and shows the sole ad from that call.
 */
window.Fusion.SingleSpace = function (layout) {
	if (layout === undefined){ 
		window.Fusion.warnings.push("Missing layout in SingleSpace");
		return;
	}
	this.mediaZone = window.Fusion.mediaZone;
	this.affiliate = window.Fusion.affiliate;
	this.parameters = {};
	var prm = window.Fusion.parameters;
	// make deep copy of parameters
	for (var p in prm){
		if (!prm.hasOwnProperty(p)) continue;
		this.parameters[p] = (prm[p] instanceof Array)? prm[p].slice(0) : prm[p];
	}
	this.show = function () {
		this.url = window.Fusion.getJsUrl(
				this.mediaZone || window.Fusion.mediaZone, 
				layout, 
				this.affiliate || window.Fusion.affiliate, 
				this.parameters || window.Fusion.parameters);
		window.Fusion.onAdsLoaded = function (ads, timestamp) {
			window.Fusion.CountersTimeStamp = timestamp;
			var ncomponents = 0;
			var payload = undefined, component = undefined;
			for (var i in ads){
				if (!ads.hasOwnProperty(i)) continue;
				if ((ncomponents += ads[i].length) > 1){
					window.Fusion.warnings.push("SingleSpace call returned more than one component");
					return;
				} else if (ads[i].length > 0) payload = (component = ads[i][0]).attributes[window.Fusion.ATTR_PAYLOAD];
			}
			if (payload === undefined) {
				window.Fusion.warnings.push(ncomponents > 0 
						? "None of the " + ncomponents + " components found had attribute " +  window.Fusion.ATTR_PAYLOAD
						: "No components found for SingleSpace call");
			} else document.write(window.Fusion.expandAttribute(component, window.Fusion.ATTR_PAYLOAD));
		} // onAdsLoaded(ads)
		document.writeln("<script type=\"text/javascript\" src=\"" + window.Fusion.htmlEncode(this.url) + "\"></script>");
	} // show()
}

/**
 * Gets an absolute URL to a "file" in the Fusion webapp.
 */ 
window.Fusion.getUrlToFile = function (file) {
	window.Fusion.assertFieldExists("protocol");
	window.Fusion.assertFieldExists("webApp");
	window.Fusion.assertFieldExists("adServer");
	return window.Fusion.protocol +"//"+ window.Fusion.adServer + Fusion.webApp + file;
}

window.Fusion.getJsUrl = function(mediaZone, layout, affiliate, params){
	var servletName = window.Fusion.discardStatistics ? "jsds" : "js";
	var baseUrl = window.Fusion.getUrlToFile(servletName);
	// Add mandatory params
	baseUrl += "/" + window.Fusion.randomAsciiString(5);
	baseUrl += "/" + encodeURIComponent(mediaZone);
	baseUrl += "/" + encodeURIComponent(layout);
	// Add affiliate, if one is specified
	if (affiliate !== undefined)
		baseUrl += "/" + encodeURIComponent(affiliate);
	// Add optional params
	var queryString = "";
	for (var i in params){
		if (!params.hasOwnProperty(i)) continue;
		var allValues = (params[i] instanceof Array)? params[i] : [params[i]];
		for (var j = 0; j < allValues.length; ++j){
			if (queryString.length > 0) queryString += "&";
			queryString += encodeURIComponent(i) + "=" + encodeURIComponent(allValues[j] + "");
		}
	}
	if (queryString.length > 0) queryString = "?" + queryString;
	return baseUrl + queryString;
}

window.Fusion.updateSpace = function (elementId, spaceName, adcallback) {
	var elmt = document.getElementById(elementId);
	if (elmt == null){
	redialok=true;
	return;
	}
var content = window.Fusion.getComponentB(spaceName);
if (content != null) {
if (window.Fusion.usepostscribe){
if(adcallback==undefined||!adcallback){adcallback=function(){};}
elmt.innerHTML = "";
if ( document.readyState != "loading" ){
window.Fusion.adonLoad=false;
}
if(!window.Fusion.adonLoad){
postscribe(elmt, content, {done:adcallback(spaceName,elementId)});
}else{
//postscribe(elmt, content, {done:adcallback(spaceName,elementId)});
xAddEventListener(window, 'load', function(){postscribe(elmt, content, {done:adcallback(spaceName,elementId)});}, false);
}
}
else{
    var olddw = document.write;
    document.write = function (s) {
        elmt.innerHTML += s;
    };

			if(content.search('<script id="'+Fusadid+'"')!= -1){
			content = content.replace('<script id="'+Fusadid+'">', "");
			content = content.replace('<script id="'+Fusadid+'" type="text/javascript">', "");
			}
			else{
	        content = content.replace("<script>", "");
	        content = content.replace("<script type=\"text/javascript\">", "");
			}
	        content = content.replace("</scr" + "ipt>", "");
    var script = document.createElement("script");
    script.setAttribute("type","text/javascript");
	script.setAttribute("id", Fusadid);
    script.text = content;
    elmt.innerHTML = "";
    elmt.appendChild(script);
    Fusadid="";

    document.write = olddw;
	}
	}
	
redialok=true;
}

window.Fusion.callbackUpdateSpace= function (el,sp){
window.Fusion.updateSpace(el, sp);
}

/**
 * Makes a smarttag call.
 */
window.Fusion.loadAds = function (loadByDom, onloadCallback, divn, spn, q) {
if(document.location.href.search('previewmode')!=-1){
window.Fusion.useprecall=false;
}
if(window.Fusion.useprecall&&!preCall){
		preCall=true;
		preCallDo=true;
		if(window.Fusion.adServer){
orgAdS=window.Fusion.adServer;
}
if(window.Fusion.mediaZone){
orgMZ=window.Fusion.mediaZone;
}
if(window.Fusion.layout){
orgLay=window.Fusion.layout;
}

if(window.Fusion.assertFieldExists("PCmediaZone")&&window.Fusion.assertFieldExists("PClayout")){
if(window.Fusion.PCmediaZone!=''&&window.Fusion.PClayout!=''){
window.Fusion.mediaZone = window.Fusion.PCmediaZone;
window.Fusion.layout = window.Fusion.PClayout;
}
}

}
if(!q){q=1;adcno=adcno+1;}
if(redialok==true){
redialok=false;
if(adcintrvl[q]){
clearInterval(adcintrvl[q]);
}

if (window.Fusion.layout === undefined){
var layout;
}else{
var layout=window.Fusion.layout;
}
resolveIncomingObj = function(cb){
if(cb.options.layout){layout=cb.options.layout;}
if(cb.options.callback){onloadCallback=cb.options.callback;}
}
if(typeof onloadCallback == 'object'){
resolveIncomingObj(onloadCallback);
}
if(adcCallB[q]){
resolveIncomingObj(adcCallB[q]);
}
	window.Fusion.isScrptLoad();

	window.Fusion.assertFieldExists("mediaZone");
	window.Fusion.assertFieldExists("layout");
	if(loadByDom)
	{
		if(window.Fusion.Reload){window.Fusion.parameters["reload"]="true";}
	}
if(window.Fusion.useexcludedAds==true){window.Fusion.parameters["excludedAds"]=window.Fusion.singleSpaceAdIds;}
if(window.Fusion.useexcludedAds==false){window.Fusion.parameters["excludedAds"]=[];}
	window.Fusion.adScriptUrl = window.Fusion.getJsUrl(
			window.Fusion.mediaZone, layout, 
			window.Fusion.affiliate, window.Fusion.parameters);
	window.Fusion.onAdsLoaded = function (ads, timestamp) {
	window.Fusion.CountersTimeStamp = timestamp;
			if(preCallDo){
			var ncomponents = 0;
			var payload = undefined, component = undefined;
			for (var i in ads){
				if (!ads.hasOwnProperty(i)) continue;
				if ((ncomponents += ads[i].length) > 1){
					window.Fusion.warnings.push("SingleSpace call returned more than one component");
					return;
				} else if (ads[i].length > 0) payload = (component = ads[i][0]).attributes[window.Fusion.ATTR_PAYLOAD];
			}
			if (payload === undefined) {
				window.Fusion.warnings.push(ncomponents > 0 
						? "None of the " + ncomponents + " components found had attribute " +  window.Fusion.ATTR_PAYLOAD
						: "No components found for SingleSpace call");
			} else document.write(window.Fusion.expandAttribute(component, window.Fusion.ATTR_PAYLOAD));
		}
		else{
		window.Fusion.adComponents = ads;
		}
		if (onloadCallback !== undefined) {if (onloadCallback !== false){onloadCallback();}else{if(divn!== undefined&&spn!== undefined){window.Fusion.callbackUpdateSpace(divn,spn);}}}
		if(window.Fusion.usecheckads){window.Fusion.addOnPageLoad(window.Fusion.checkAds);}
	};
	if (loadByDom) {
		
	window.Fusion.postscrAdcall = function(){
	if(typeof postscribe == 'function') { 
	clearInterval(adcallintrvl);
	window.Fusion.loadjsfile(window.Fusion.adScriptUrl);
	}
	};
	if (window.Fusion.usepostscribe){
	adcallintrvl=setInterval("window.Fusion.postscrAdcall();",10);
	}
	else{window.Fusion.loadjsfile(window.Fusion.adScriptUrl);}
		
	} else { 
	redialok=true;
		document.writeln("<script type=\"text/javascript\" src=\"" + 
				window.Fusion.htmlEncode(window.Fusion.adScriptUrl) + "\">");
		document.writeln("</script>");
	}
	}
	else if(!adcintrvl[adcno]){
		
	if(divn!== undefined&&spn!== undefined){
	if(typeof onloadCallback == 'object'){
	adcCallB[adcno]=onloadCallback
	adcintrvl[adcno]=setInterval(function(){ window.Fusion.loadAds(loadByDom,'',divn,spn,adcno); },100);
	}
	else{
	adcintrvl[adcno]=setInterval(function(){ window.Fusion.loadAds(loadByDom,onloadCallback,divn,spn,adcno); },100);
	}
	}
	else{
	if(typeof onloadCallback == 'object'){
	adcCallB[adcno]=onloadCallback
	adcintrvl[adcno]=setInterval(function(){ window.Fusion.loadAds(loadByDom,'','','',adcno); },100);
	}
	else{
	adcintrvl[adcno]=setInterval(function(){ window.Fusion.loadAds(loadByDom,onloadCallback,'','',adcno); },100);
	}
	}
	}
}

/**
 * Thin cross-browser abstraction to run an onload function.
 */
window.Fusion.addOnPageLoad = function (onLoadFunc){
	if (window.addEventListener){ // DOM events
		window.addEventListener("load", function(){
			onLoadFunc();
			window.removeEventListener("load", arguments.callee, false);
		}, false);
	} else if (window.attachEvent){ // IE
		window.attachEvent("onload", function(){
			onLoadFunc();
			window.detachEvent("onload", arguments.callee);
		});
	} else { // Unsafe intrinsic events
		var oldOnLoad = window.onload;
		window.onload = 
			(typeof(oldOnLoad) != "function") ? 
				onLoadFunc : function(){
					var ret = oldOnLoad.apply(this, arguments);
					onLoadFunc();
					return ret;
				}; 
	}
}

/**
 * If there are any ad components left in the components argument,
 * appropriate action is taken.
 */
window.Fusion.verifyTagging = function(components){
	var neglected = [];
	for (var placement in components){
		if (!components.hasOwnProperty(placement)) continue;
		if (components[placement] instanceof Array && components[placement].length > 0){
			neglected.push({
				placement: placement, count: components[placement].length,
				toString: function(){ 
					return "Placement '" + this.placement + "' is missing " + this.count + " tag(s)"; 
				}
			});
		}
	}
	if (neglected.length > 0) 
		window.Fusion.warnings.push("Not all spaces in layout have been tagged:\n\t" + neglected.join("\n\t"));
}

/**
 * Handlers for the metadata information sent to fireOnAdsLoaded
 */
window.Fusion.adSelectionMetaDataHandlers = {
	"warnings" : function (warnings) {
		for (var i = 0; i < warnings.length; ++i)
			window.Fusion.warnings.push(warnings[i]);
	},
	"diagnostics" : function (root) {
		function indent(n){ var r = ""; while (n-- > 0) r += "    "; return r; }
		function entry2html(entry, depth){
			var cls = "status-" + window.Fusion.htmlEncode(entry.status.toLowerCase());
			var msg = window.Fusion.htmlEncode(entry.message);
			if (entry.subEntries.length == 0){
				return indent(depth) + "<li class=\"" + cls + "\">" + msg + "</li>\n";
			} else {
				return (indent(depth) + "<li class=\"" + cls + "\">\n" + 
					indent(depth + 1) + msg + "\n" + 
					entries2html(entry.subEntries, depth + 1) + "\n" + 
					indent(depth) + "</li>\n");
			}
		}
		function entries2html(entries, depth){
			var items = [];
			for (var i = 0; i < entries.length; ++i) 
				items.push(entry2html(entries[i], depth + 1));
			if (items.length > 0){
				items.unshift(indent(depth) + "<ul>\n");
				items.push(indent(depth) + "</ul>\n");
			}
			return items.join("");
		}
		var win = window.open("about:blank", "_blank");
		if (win) {
			var oldProtocol = window.Fusion.protocol;
			window.Fusion.protocol = "http://";
			with (win.document){
				open("text/html");
				writeln("<html><head>");
				writeln(indent(1) + "<title>Selection diagnostics</title>");
				writeln(indent(1) + "<link rel=\"stylesheet\" href=\"" + 
						window.Fusion.htmlEncode(window.Fusion.getUrlToFile("util/diagnostics.css")) + "\" />");
				writeln(indent(1) + "<script type=\"text/javascript\" src=\"" + 
						window.Fusion.htmlEncode(window.Fusion.getUrlToFile("util/sorttable.js")) + "\"></script>");
				writeln("</head><body>");
				if (root.table){
					writeln("<table class=\"sortable\">");
					writeln(indent(1) + "<caption>Inspected ads</caption>");
					writeln(indent(1) + "<thead>");
					writeln(indent(2) + "<tr>");
					var headers = root.table.headers; 
					for (var i = 0; i < headers.length; ++i)
						writeln(indent(3) + "<th>" + window.Fusion.htmlEncode(headers[i]) + "</th>");
					writeln(indent(2) + "</tr>");
					writeln(indent(1) + "</thead>");
					writeln(indent(1) + "<tbody>");
					for (var i = 0; i < root.table.rows.length; ++i){
						writeln(indent(2) + "<tr>");
						var row = root.table.rows[i];
						for (var j = 0; j < row.length; ++j){
							var c = window.Fusion.htmlEncode(row[j].status.toLowerCase());
							var m = window.Fusion.htmlEncode(row[j].message);
							writeln(indent(3) + "<td class=\"status-" + c + "\">" + m + "</td>");
						}
						writeln(indent(2) + "</tr>");
					}
					writeln(indent(1) + "</tbody>");
					writeln("</table>");
				}
				if (root.tree){
					writeln("<ul>");
					writeln(indent(1) + "<li>");
					writeln(indent(2) + "Selection log:");
					writeln(entries2html(root.tree.subEntries, 3));
					writeln(indent(1) + "</li>");
					writeln("</ul>");
				}
				writeln("</body></html>");
				close();
			}
			window.Fusion.protocol = oldProtocol;
		} else alert("You browser's popup blocker stopped diagnostics window from showing.");
	}
};

/**
 * Called when the ads have finished loading.
 */
window.Fusion.fireOnAdsLoaded = function(ads, metadata, timestamp){

	if (window.Fusion.assertFieldExists("onAdsLoaded")) {
	if (ads !== undefined) {
	for (var placement in ads){
		if (!ads.hasOwnProperty(placement)) continue;
		if (ads[placement] instanceof Array && ads[placement].length > 0){
		for(i = 0; i < ads[placement].length; i++){
		if (window.Fusion.adsize[placement] === undefined) window.Fusion.adsize[placement] = {};
		window.Fusion.adsize[placement][i]={w:ads[placement][i].attributes["WIDTH_01"],h:ads[placement][i].attributes["HEIGHT_01"]};
		window.Fusion.singleSpaceAdIds.push(ads[placement][i].ad);
				}
		
			
			}
		}
	}
		window.Fusion.onAdsLoaded(ads, timestamp);
		delete window.Fusion.onAdsLoaded;
	}
	
	if (typeof metadata != "object") return;
	var handlers = window.Fusion.adSelectionMetaDataHandlers;
	for (var i in metadata){
		if (!metadata.hasOwnProperty(i)) continue;
		if (handlers[i] !== undefined) handlers[i](metadata[i]);
	}
	if(preCallDo){
	preCallDo=false;
	if(orgAdS){
window.Fusion.adServer=orgAdS;
}
if(orgMZ){
window.Fusion.mediaZone=orgMZ;
}
if(orgLay){
window.Fusion.layout=orgLay;
}
window.Fusion.loadAds();
	}
}

// -- compatibility issues below

if (typeof(window.encodeURIComponent) != typeof(function(){})) {
	// Unicode URL encoding for old browsers
	window.encodeURIComponent = function(s){
		var unicodeEscapes = [
			"%00", "%01", "%02", "%03", "%04", "%05", "%06", "%07", 
			"%08", "%09", "%0A", "%0B", "%0C", "%0D", "%0E", "%0F", 
			"%10", "%11", "%12", "%13", "%14", "%15", "%16", "%17", 
			"%18", "%19", "%1A", "%1B", "%1C", "%1D", "%1E", "%1F", 
			"%20", "!", "%22", "%23", "%24", "%25", "%26", "\'", 
			"(", ")", "*", "%2B", "%2C", "-", ".", "%2F", 
			"0", "1", "2", "3", "4", "5", "6", "7", 
			"8", "9", "%3A", "%3B", "%3C", "%3D", "%3E", "%3F", 
			"%40", "A", "B", "C", "D", "E", "F", "G", 
			"H", "I", "J", "K", "L", "M", "N", "O", 
			"P", "Q", "R", "S", "T", "U", "V", "W", 
			"X", "Y", "Z", "%5B", "%5C", "%5D", "%5E", "_", 
			"%60", "a", "b", "c", "d", "e", "f", "g", 
			"h", "i", "j", "k", "l", "m", "n", "o", 
			"p", "q", "r", "s", "t", "u", "v", "w", 
			"x", "y", "z", "%7B", "%7C", "%7D", "~", "%7F", 
			"%C2%80", "%C2%81", "%C2%82", "%C2%83", "%C2%84", "%C2%85", "%C2%86", "%C2%87", 
			"%C2%88", "%C2%89", "%C2%8A", "%C2%8B", "%C2%8C", "%C2%8D", "%C2%8E", "%C2%8F", 
			"%C2%90", "%C2%91", "%C2%92", "%C2%93", "%C2%94", "%C2%95", "%C2%96", "%C2%97", 
			"%C2%98", "%C2%99", "%C2%9A", "%C2%9B", "%C2%9C", "%C2%9D", "%C2%9E", "%C2%9F", 
			"%C2%A0", "%C2%A1", "%C2%A2", "%C2%A3", "%C2%A4", "%C2%A5", "%C2%A6", "%C2%A7", 
			"%C2%A8", "%C2%A9", "%C2%AA", "%C2%AB", "%C2%AC", "%C2%AD", "%C2%AE", "%C2%AF", 
			"%C2%B0", "%C2%B1", "%C2%B2", "%C2%B3", "%C2%B4", "%C2%B5", "%C2%B6", "%C2%B7", 
			"%C2%B8", "%C2%B9", "%C2%BA", "%C2%BB", "%C2%BC", "%C2%BD", "%C2%BE", "%C2%BF", 
			"%C3%80", "%C3%81", "%C3%82", "%C3%83", "%C3%84", "%C3%85", "%C3%86", "%C3%87", 
			"%C3%88", "%C3%89", "%C3%8A", "%C3%8B", "%C3%8C", "%C3%8D", "%C3%8E", "%C3%8F", 
			"%C3%90", "%C3%91", "%C3%92", "%C3%93", "%C3%94", "%C3%95", "%C3%96", "%C3%97", 
			"%C3%98", "%C3%99", "%C3%9A", "%C3%9B", "%C3%9C", "%C3%9D", "%C3%9E", "%C3%9F", 
			"%C3%A0", "%C3%A1", "%C3%A2", "%C3%A3", "%C3%A4", "%C3%A5", "%C3%A6", "%C3%A7", 
			"%C3%A8", "%C3%A9", "%C3%AA", "%C3%AB", "%C3%AC", "%C3%AD", "%C3%AE", "%C3%AF", 
			"%C3%B0", "%C3%B1", "%C3%B2", "%C3%B3", "%C3%B4", "%C3%B5", "%C3%B6", "%C3%B7", 
			"%C3%B8", "%C3%B9", "%C3%BA", "%C3%BB", "%C3%BC", "%C3%BD", "%C3%BE", "%C3%BF"];
		var ret = "";
		for (var i = 0; i < s.length; ++i)
			ret += unicodeEscapes[s.charCodeAt(i)];
		return ret;
	} // encodeURIComponent
} // if not encodeURIComponent


/**
 * Browser detect code
 *
 */

// Initialize Fusion.Detect namespace
 if(!window.Fusion.Detect) window.Fusion.Detect = {};
 if(!window.Fusion.Detect.values) window.Fusion.Detect.values = {};
 if(!window.Fusion.Detect.agent) window.Fusion.Detect.agent = navigator.userAgent.toLowerCase();
 if(!window.Fusion.Detect.appVer) window.Fusion.Detect.appVer = navigator.appVersion.toLowerCase();	

 var flashVersion = 10;
 var hasFlashPlayer = false;
 var mediaPlayerVersion = 0;
 var hasWindowsMediaPlayer = false;
 var hasRealPlayerG2 = false;
 var hasRealPlayer4 = false;
 var hasRealPlayer5 = false;
 var hasSilverlight = false;
 var qtPlayerVersion = 0;
 var hasQTPlayer = false;

window.Fusion.Detect.doDetect = function()
{
	window.Fusion.Detect.detectUrl();
	window.Fusion.Detect.detectBrowser();
	window.Fusion.Detect.detectOS();
	window.Fusion.Detect.detectPlugins();
	window.Fusion.Detect.detectResolution();
	window.Fusion.Detect.detectDateTime();
	window.Fusion.Detect.getPlugins();
	window.Fusion.Detect.addToParameters();
}


// Add detected values to smarttag call parameters
window.Fusion.Detect.addToParameters = function()
{
	for (var i in window.Fusion.Detect.values)
	{
		if (!window.Fusion.Detect.values.hasOwnProperty(i)) continue;
		var allValues;
		if (window.Fusion.Detect.values[i] instanceof Array)
		{
			allValues = window.Fusion.Detect.values[i];
		}
		else
		{
			allValues = [window.Fusion.Detect.values[i]];
		}
		
		for (var j = 0; j < allValues.length; ++j)
		{
			window.Fusion.parameters[i] = allValues[j];
		}
	}
}



window.Fusion.Detect.detectUrl = function()
{
	window.Fusion.Detect.values["url"] = window.location.protocol + "//" + window.location.host + window.location.pathname;
	window.Fusion.Detect.values["url_extra"] = window.location.search.substr(0,200);
}

window.Fusion.Detect.detectBrowser = function()
{
	window.Fusion.Detect.BrowserDetect.init();
	window.Fusion.Detect.values["browserName"] = window.Fusion.Detect.BrowserDetect.browser;
	window.Fusion.Detect.values["browserVersion"] = window.Fusion.Detect.BrowserDetect.version;	
	window.Fusion.Detect.values["browser"] = window.Fusion.Detect.BrowserDetect.browser + window.Fusion.Detect.BrowserDetect.version;
	
}



window.Fusion.Detect.detectOS = function()
{
	var isWin = (window.Fusion.Detect.agent.indexOf('win') != -1);
	var os = "";
	if ((window.Fusion.Detect.agent.indexOf('nt 4.0') != -1) && isWin)
	{
		os = "winnt";
	}
	else if ((window.Fusion.Detect.agent.indexOf('nt 5.0') != -1) && isWin)
	{
		os = "win2000";
	}
	else if ((window.Fusion.Detect.agent.indexOf('windows nt 6.0') != -1) && isWin)
	{
		os = "winvista";
	}
	else if ((window.Fusion.Detect.agent.indexOf('windows nt 6.1') != -1) && isWin)
	{
		os = "win7";
	}
	else if ((window.Fusion.Detect.agent.indexOf('windows nt 6.2') != -1) && isWin)
	{
		os = "win8";
	}
	else if ((window.Fusion.Detect.agent.indexOf('windows nt 6.3') != -1) && isWin)
	{
		os = "win8";
	}
	else if ((window.Fusion.Detect.agent.indexOf('windows nt 10.0') != -1) && isWin)
	{
		os = "win10";
	}
	else if ((window.Fusion.Detect.agent.indexOf('98') != -1) && isWin)
	{
		os = "win98";
	}
	else if ((window.Fusion.Detect.agent.indexOf('95') != -1) && isWin)
	{
		os = "win95";
	}
	else if (window.Fusion.Detect.agent.indexOf('macintosh') != -1)
	{
		os = "mac";
	}
	else if(window.Fusion.Detect.agent.indexOf('android') != -1)
	{
		os = "android";
	}
	else if(window.Fusion.Detect.agent.indexOf('linux') != -1)
	{
		os = "linux";
	}
	else if(window.Fusion.Detect.agent.indexOf('iphone') != -1)
	{
		os = "iphone";
	}
	else if(window.Fusion.Detect.agent.indexOf('ipad') != -1)
	{
		os = "ipad";
	}
	else if ((window.Fusion.Detect.agent.indexOf('nt') != -1) && (window.Fusion.Detect.agent.indexOf('5.1') != -1) && isWin)
	{
		os = "winxp";
	}
	else if (((window.Fusion.Detect.agent.indexOf('win 9x 4.90') != -1) || (window.Fusion.Detect.agent.indexOf('windows me') != -1)) && isWin)
	{
		os = "winme";
	}
	else
	{
		os = "other";
	}
	
	window.Fusion.Detect.values["OS"] = os;
	
}

window.Fusion.Detect.detectResolution = function()
{
	var resolution = "";
	
	if(window.screen)
	{
		var height = window.screen.height;
		var width = window.screen.width;
	    window.Fusion.Detect.values["screenRes"] = width + "x" + height;
		window.Fusion.Detect.values["screenWidth"]  = width;
		window.Fusion.Detect.values["screenHeight"] = height;
	}
	else
	{
		window.Fusion.Detect.values["screenRes"] = "n/a";
	}
	
	//Browser size
	var browserWidth = 0, browserHeight = 0;
	if( typeof( window.innerWidth ) == 'number' ) 
	{
	  //Non-IE
	  browserWidth = window.innerWidth;
	  browserHeight = window.innerHeight;
	}
	else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) 
	{
	  //IE 6+ in 'standards compliant mode'
	  browserWidth = document.documentElement.clientWidth;
	  browserHeight = document.documentElement.clientHeight;
	}
	else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) 
	{
	  //IE 4 compatible
	  browserWidth = document.body.clientWidth;
	  browserHeight = document.body.clientHeight;
	}
 	window.Fusion.Detect.values["browserWidth"] = browserWidth;
	window.Fusion.Detect.values["browserHeight"] = browserHeight;
	
}

window.Fusion.Detect.detectDateTime = function()
{
	var date = new Date();
	var dayStrings = new Array("sunday","monday","tuesday","wednesday","thursday","friday","saturday");
	var hours = date.getHours().toString();
	var minutes = date.getMinutes().toString();
	var day = dayStrings[date.getDay()];
	
	if (hours.length < 2)
		hours = "0" + hours;
		
	if (minutes.length < 2)
		minutes = "0" + minutes;	
		
	window.Fusion.Detect.values["time"] = hours + minutes;	
	window.Fusion.Detect.values["weekDay"] = day;
}

window.Fusion.Detect.detectPlugins = function()
{
var flash=deconcept.SWFObject_FusionUtil.getPlayerVersion();
window.Fusion.Detect.values["flash"]=flash.major;


}

window.Fusion.Detect.getPlugins = function()
{

}

window.Fusion.Detect.printParameters = function()
{
	for(var i in window.Fusion.Detect.values)
	 {
		if (!window.Fusion.Detect.values.hasOwnProperty(i)) continue;
		document.write(i + ":" + window.Fusion.Detect.values[i] + "<br/>")
	}
	document.write(navigator.userAgent + "<br/><br/>");
	document.write(navigator.appVersion + "<br/><br/>");	
}
window.Fusion.Detect.BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "unknown";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "1337";
		this.OS = this.searchString(this.dataOS) || "unknown";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.vendor,
			subString: "Opera",
			versionSearch: "OPR",
			identity: "Opera"
		},
		{
			string: navigator.userAgent,
			subString: "OPR",
			identity: "Opera",
			versionSearch: "OPR"
		},
				{
			string: navigator.userAgent,
			subString: "Edge",
			identity: "Edge",
			versionSearch: "Edge"
		},
		{
			string: navigator.userAgent,
			subString: "Chrome",
			versionSearch: "Chrome",
			identity: "Chrome"
		},
		{
			string: navigator.userAgent,
			subString: "CriOS",
			versionSearch: "CriOS",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			versionSearch: "Version",
			identity: "Safari"
		},
		{
			prop: window.opera,
			versionSearch: "Version",
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "Opera",
			versionSearch: "Version",
			identity: "Opera"
		},
		
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Trident",
			identity: "Explorer",
			versionSearch: "rv"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.userAgent,
			subString: "Windows NT 6.0",
			identity: "Vista"
		},
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};


/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept == "undefined") var deconcept = new Object();
if(typeof deconcept.util == "undefined") deconcept.util = new Object();
if(typeof deconcept.SWFObject_FusionUtil == "undefined") deconcept.SWFObject_FusionUtil = new Object();
deconcept.SWFObject_Fusion = function(swf, id, w, h, ver, c, quality, xiRedirectUrl, redirectUrl, detectKey) {
	if (!document.getElementById) { return; }
	this.DETECT_KEY = detectKey ? detectKey : 'detectflash';
	this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
	this.params = new Object();
	this.variables = new Object();
	this.attributes = new Array();
	if(swf) { this.setAttribute('swf', swf); }
	if(id) { this.setAttribute('id', id); }
	if(w) { this.setAttribute('width', w); }
	if(h) { this.setAttribute('height', h); }
	if(ver) { this.setAttribute('version', new deconcept.PlayerVersion(ver.toString().split("."))); }
	this.installedVer = deconcept.SWFObject_FusionUtil.getPlayerVersion();
	if (!window.opera && document.all && this.installedVer.major > 7) {
		// only add the onunload cleanup if the Flash Player version supports External Interface and we are in IE
		deconcept.SWFObject_Fusion.doPrepUnload = true;
	}
	if(c) { this.addParam('bgcolor', c); }
	var q = quality ? quality : 'high';
	this.addParam('quality', q);
	this.setAttribute('useExpressInstall', false);
	this.setAttribute('doExpressInstall', false);
	var xir = (xiRedirectUrl) ? xiRedirectUrl : window.location;
	this.setAttribute('xiRedirectUrl', xir);
	this.setAttribute('redirectUrl', '');
	if(redirectUrl) { this.setAttribute('redirectUrl', redirectUrl); }
}
deconcept.SWFObject_Fusion.prototype = {
	useExpressInstall: function(path) {
		this.xiSWFPath = !path ? "expressinstall.swf" : path;
		this.setAttribute('useExpressInstall', true);
	},
	setAttribute: function(name, value){
		this.attributes[name] = value;
	},
	getAttribute: function(name){
		return this.attributes[name];
	},
	addParam: function(name, value){
		this.params[name] = value;
	},
	getParams: function(){
		return this.params;
	},
	addVariable: function(name, value){
		this.variables[name] = value;
	},
	getVariable: function(name){
		return this.variables[name];
	},
	getVariables: function(){
		return this.variables;
	},
	getVariablePairs: function(){
		var variablePairs = new Array();
		var key;
		var variables = this.getVariables();
		for(key in variables){
			if (!variables.hasOwnProperty(key)) continue;
			variablePairs[variablePairs.length] = key +"="+ variables[key];
		}
		return variablePairs;
	},
	getSWFHTML: function() {
		var swfNode = "";
		if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) { // netscape plugin architecture
			if (this.getAttribute("doExpressInstall")) {
				this.addVariable("MMplayerType", "PlugIn");
				this.setAttribute('swf', this.xiSWFPath);
			}
			swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'" style="'+ this.getAttribute('style') +'"';
			swfNode += ' id="'+ this.getAttribute('id') +'" name="'+ this.getAttribute('id') +'" ';
			var params = this.getParams();
			 for(var key in params){ if (params.hasOwnProperty(key)) swfNode += [key] +'="'+ params[key] +'" '; }
			var pairs = this.getVariablePairs().join("&");
			 if (pairs.length > 0){ swfNode += 'flashvars="'+ pairs +'"'; }
			swfNode += '/>';
		} else { // PC IE
			if (this.getAttribute("doExpressInstall")) {
				this.addVariable("MMplayerType", "ActiveX");
				this.setAttribute('swf', this.xiSWFPath);
			}
			swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'" style="'+ this.getAttribute('style') +'">';
			swfNode += '<param name="movie" value="'+ this.getAttribute('swf') +'" />';
			var params = this.getParams();
			for(var key in params) {
				if (!params.hasOwnProperty(key)) continue;
				swfNode += '<param name="'+ key +'" value="'+ params[key] +'" />';
			}
			var pairs = this.getVariablePairs().join("&");
			if(pairs.length > 0) {swfNode += '<param name="flashvars" value="'+ pairs +'" />';}
			swfNode += "</object>";
		}
		return swfNode;
	},
	write: function(elementId){
		if(this.getAttribute('useExpressInstall')) {
			// check to see if we need to do an express install
			var expressInstallReqVer = new deconcept.PlayerVersion([6,0,65]);
			if (this.installedVer.versionIsValid(expressInstallReqVer) && !this.installedVer.versionIsValid(this.getAttribute('version'))) {
				this.setAttribute('doExpressInstall', true);
				this.addVariable("MMredirectURL", escape(this.getAttribute('xiRedirectUrl')));
				document.title = document.title.slice(0, 47) + " - Flash Player Installation";
				this.addVariable("MMdoctitle", document.title);
			}
		}
		if(this.skipDetect || this.getAttribute('doExpressInstall') || this.installedVer.versionIsValid(this.getAttribute('version'))){
			var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;
			n.innerHTML = this.getSWFHTML();
			return true;
		}else{
			if(this.getAttribute('redirectUrl') != "") {
				document.location.replace(this.getAttribute('redirectUrl'));
			}
		}
		return false;
	}
}

/* ---- detection functions ---- */
deconcept.SWFObject_FusionUtil.getPlayerVersion = function(){
	var PlayerVersion = new deconcept.PlayerVersion([0,0,0]);
	if(navigator.plugins && navigator.mimeTypes.length){
		var x = navigator.plugins["Shockwave Flash"];
		if(x && x.description) {
			PlayerVersion = new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
		}
	}else if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0){ // if Windows CE
		var axo = 1;
		var counter = 3;
		while(axo) {
			try {
				counter++;
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+ counter);
//				document.write("player v: "+ counter);
				PlayerVersion = new deconcept.PlayerVersion([counter,0,0]);
			} catch (e) {
				axo = null;
			}
		}
	} else { // Win IE (non mobile)
		// do minor version lookup in IE, but avoid fp6 crashing issues
		// see http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
		try{
			var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		}catch(e){
			try {
				var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
				PlayerVersion = new deconcept.PlayerVersion([6,0,21]);
				axo.AllowScriptAccess = "always"; // error if player version < 6.0.47 (thanks to Michael Williams @ Adobe for this code)
			} catch(e) {
				if (PlayerVersion.major == 6) {
					return PlayerVersion;
				}
			}
			try {
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			} catch(e) {}
		}
		if (axo != null) {
			PlayerVersion = new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
		}
	}
	return PlayerVersion;
}
deconcept.PlayerVersion = function(arrVersion){
	this.major = arrVersion[0] != null ? parseInt(arrVersion[0]) : 0;
	this.minor = arrVersion[1] != null ? parseInt(arrVersion[1]) : 0;
	this.rev = arrVersion[2] != null ? parseInt(arrVersion[2]) : 0;
}
deconcept.PlayerVersion.prototype.versionIsValid = function(fv){
	if(this.major < fv.major) return false;
	if(this.major > fv.major) return true;
	if(this.minor < fv.minor) return false;
	if(this.minor > fv.minor) return true;
	if(this.rev < fv.rev) return false;
	return true;
}
/* ---- get value of query string param ---- */
deconcept.util = {
	getRequestParameter: function(param) {
		var q = document.location.search || document.location.hash;
		if (param == null) { return q; }
		if(q) {
			var pairs = q.substring(1).split("&");
			for (var i=0; i < pairs.length; i++) {
				if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
					return pairs[i].substring((pairs[i].indexOf("=")+1));
				}
			}
		}
		return "";
	}
}
/* fix for video streaming bug */
deconcept.SWFObject_FusionUtil.cleanupSWFs = function() {
	var objects = document.getElementsByTagName("OBJECT");
	for (var i = objects.length - 1; i >= 0; i--) {
		objects[i].style.display = 'none';
		for (var x in objects[i]) {
			if (objects[i].hasOwnProperty(i) && typeof objects[i][x] == 'function') {
				objects[i][x] = function(){};
			}
		}
	}
}
// fixes bug in some fp9 versions see http://blog.deconcept.com/2006/07/28/swfobject-143-released/
if (deconcept.SWFObject_Fusion.doPrepUnload) {
	if (!deconcept.unloadSet) {
		deconcept.SWFObject_FusionUtil.prepUnload = function() {
			__flash_unloadHandler = function(){};
			__flash_savedUnloadHandler = function(){};
			window.attachEvent("onunload", deconcept.SWFObject_FusionUtil.cleanupSWFs);
		}
		window.attachEvent("onbeforeunload", deconcept.SWFObject_FusionUtil.prepUnload);
		deconcept.unloadSet = true;
	}
}
// add document.getElementById if needed (mobile IE < 5) 
if (!document.getElementById && document.all) { document.getElementById = function(id) { return document.all[id]; }}

// add some aliases for ease of use/backwards compatibility
var SWFObject_Fusion = deconcept.SWFObject_Fusion;

window.Fusion.Detect.doDetect();

if (typeof window.Fusion.debug ==='undefined') {window.Fusion.debug=false;}

function xGetElementById(e)
{
  if (typeof(e) == 'string') {
    if (document.getElementById) e = document.getElementById(e);
    else if (document.all) e = document.all[e];
    else e = null;
  }
  return e;
}

function xAddEventListener(e,eT,eL,cap)
{
  if(!(e=xGetElementById(e)))return;
  eT=eT.toLowerCase();
  if(e.addEventListener)e.addEventListener(eT,eL,cap||false);
  else if(e.attachEvent)e.attachEvent('on'+eT,eL);
  else {
    var o=e['on'+eT];
    e['on'+eT]=typeof o=='function' ? function(v){o(v);eL(v);} : eL;
  }
}

window.Fusion.preLoad = function(id,ad,async){
  if (window.Fusion.debug) console.log("PreLoad:",id,ad);
  try {
    abort=window.Fusion.checkEmpty(id,ad);
    if (!abort && !async && typeof(window.Fusion.preFetchSize)!=="undefined" && window.Fusion.preFetchSize) {
      if (window.Fusion.debug) console.log("Sizing:",id,ad);
      var setH=window.Fusion.adsize[ad][0].h;
      if (setH>0) document.getElementById(id).style.height=setH+'px';
    }
    return abort;
  }
  catch (e) {}
};

window.Fusion.doLoad = function(id,ad){
  try {
    if (window.Fusion.debug) console.log("DoLoad:",id,ad);
    document.getElementById(id).style.height='';
    window.Fusion.updateSpace(id,ad);		
  }
  catch (e) {}
};

window.Fusion.postLoad = function(id,ad){
  if (window.Fusion.delayedAds.indexOf(ad)===-1){
    if (window.Fusion.debug) console.log("PostLoad:",id,ad);
    window.Fusion.doLoad(id,ad);
	//xAddEventListener(window, 'load', function(){window.Fusion.doLoad(id,ad);}, false);
  }
  else {
    if (window.Fusion.debug) console.log("DelayLoad:",id,ad);
	xAddEventListener(window, 'load', function(){window.Fusion.doLoad(id,ad);}, false);
   }
};

window.Fusion.initAd = function(id,ad,async){
  if (async) {
  abort=window.Fusion.preLoad(id,ad,async);
  if (!abort) window.Fusion.postLoad(id,ad);
  } 
  else {
    abort=window.Fusion.preLoad(id,ad,async);
    if (!abort) window.Fusion.space(ad);
  }
};

window.Fusion.checkEmpty = function(id,ad){
  if (window.Fusion.debug) console.log("Checking:",id,ad);
  if ((window.Fusion.adComponents[ad].length===0)) {
    document.getElementById(id+"-wrapper").style.display='none';
     if (window.Fusion.debug) console.log("hiding: ",id);
    return true;
  }
  else {
    return false;
  }
};


// Run Fusion initiation hooks
(function () {
	if (window.Fusion.initiationHooks !== undefined){
		while (window.Fusion.initiationHooks.length > 0)
			window.Fusion.initiationHooks.shift()();
		delete window.Fusion.initiationHooks;
	}
})();

var BURT_PROFILE_ID_COOKIE_NAME = 'bi_id';
var BURT_PROFILE_ID_COOKIE_CACHE_TTL_DAYS = 7;
		
		window.Fusion._getProfileId = function() {
            var cookieRegexp = new RegExp(BURT_PROFILE_ID_COOKIE_NAME + '=([^;]{12})');
            var cookieMatch = document.cookie.match(cookieRegexp);
            if(cookieMatch && cookieMatch.length === 2) {
                return cookieMatch[1];
            }
            return false;
        };
		
		
    window.burtApi = window.burtApi || [];
    var B_retriesLimit = 10, B_tries = 0;

    window.Fusion.profilesCallback = function() {
	window.burtApi.profiles && window.burtApi.profiles.getId(function(id) {
                        if (id) {
                            var date = new Date();
                            date.setTime(+date + BURT_PROFILE_ID_COOKIE_CACHE_TTL_DAYS * 864e+5);
                            document.cookie = BURT_PROFILE_ID_COOKIE_NAME + '=' + id + '; expires=' + date.toUTCString() + '; path=/';
							
	                    }
                    });
                
    };

    window.Fusion.withBurtProfiles = function(readyCallback) {
        if(!window.burtApi.profiles && ++B_tries < B_retriesLimit) {
	    setTimeout('window.Fusion.withBurtProfiles('+readyCallback+')',100);
		}
        else if (window.burtApi.profiles) {
		readyCallback();
        }
    };

    window.burtApi.push(function() {
	var _BurtcookieExists = !!window.Fusion._getProfileId();
     if (!_BurtcookieExists) {
	 window.Fusion.withBurtProfiles(window.Fusion.profilesCallback);
	 }
    });
if (typeof(fusionCallBack)!=='undefined') fusionCallBack();