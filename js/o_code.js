if(typeof(window._ozUAs)=="undefined"){window._ozUAs=new Array();}var _99_AC3_runcode=true;if(navigator.userAgent.indexOf("oadzApp")> -1){_99_AC3_runcode=false;}else{for(var ua in _ozUAs){if(navigator.userAgent.indexOf(_ozUAs[ua])> -1)_99_AC3_runcode=false;}}if(_99_AC3_runcode)(function(){window._ozcompid="2755";var _oziframe="0";var _oz_updatetail="0";var _ozclick="0";var _ozrec="ozrec";var h=undefined;var G={fd:1,ev:"",bV:8,gx:function(aA){return G.fi(G.am(G.str2binl(aA),aA.length*G.bV));},hj:function(aA){return G.cU(G.am(G.str2binl(aA),aA.length*G.bV));},gR:function(aA){return G.fl(G.am(G.str2binl(aA),aA.length*G.bV));},hc:function(aL,bp){return G.fi(G.cV(aL,bp));},gU:function(aL,bp){return G.cU(G.cV(aL,bp));},hu:function(aL,bp){return G.fl(G.cV(aL,bp));},am:function(K,dr){K[dr>>5]|=0x80<<((dr)%32);K[(((dr+64)>>>9)<<4)+14]=dr;var C=1732584193;var t= -271733879;var T= -1732584194;var F=271733878;for(var O=0;O<K.length;O+=16){var fm=C;var eS=t;var fK=T;var ew=F;C=G.aI(C,t,T,F,K[O+0],7,-680876936);F=G.aI(F,C,t,T,K[O+1],12,-389564586);T=G.aI(T,F,C,t,K[O+2],17,606105819);t=G.aI(t,T,F,C,K[O+3],22,-1044525330);C=G.aI(C,t,T,F,K[O+4],7,-176418897);F=G.aI(F,C,t,T,K[O+5],12,1200080426);T=G.aI(T,F,C,t,K[O+6],17,-1473231341);t=G.aI(t,T,F,C,K[O+7],22,-45705983);C=G.aI(C,t,T,F,K[O+8],7,1770035416);F=G.aI(F,C,t,T,K[O+9],12,-1958414417);T=G.aI(T,F,C,t,K[O+10],17,-42063);t=G.aI(t,T,F,C,K[O+11],22,-1990404162);C=G.aI(C,t,T,F,K[O+12],7,1804603682);F=G.aI(F,C,t,T,K[O+13],12,-40341101);T=G.aI(T,F,C,t,K[O+14],17,-1502002290);t=G.aI(t,T,F,C,K[O+15],22,1236535329);C=G.az(C,t,T,F,K[O+1],5,-165796510);F=G.az(F,C,t,T,K[O+6],9,-1069501632);T=G.az(T,F,C,t,K[O+11],14,643717713);t=G.az(t,T,F,C,K[O+0],20,-373897302);C=G.az(C,t,T,F,K[O+5],5,-701558691);F=G.az(F,C,t,T,K[O+10],9,38016083);T=G.az(T,F,C,t,K[O+15],14,-660478335);t=G.az(t,T,F,C,K[O+4],20,-405537848);C=G.az(C,t,T,F,K[O+9],5,568446438);F=G.az(F,C,t,T,K[O+14],9,-1019803690);T=G.az(T,F,C,t,K[O+3],14,-187363961);t=G.az(t,T,F,C,K[O+8],20,1163531501);C=G.az(C,t,T,F,K[O+13],5,-1444681467);F=G.az(F,C,t,T,K[O+2],9,-51403784);T=G.az(T,F,C,t,K[O+7],14,1735328473);t=G.az(t,T,F,C,K[O+12],20,-1926607734);C=G.be(C,t,T,F,K[O+5],4,-378558);F=G.be(F,C,t,T,K[O+8],11,-2022574463);T=G.be(T,F,C,t,K[O+11],16,1839030562);t=G.be(t,T,F,C,K[O+14],23,-35309556);C=G.be(C,t,T,F,K[O+1],4,-1530992060);F=G.be(F,C,t,T,K[O+4],11,1272893353);T=G.be(T,F,C,t,K[O+7],16,-155497632);t=G.be(t,T,F,C,K[O+10],23,-1094730640);C=G.be(C,t,T,F,K[O+13],4,681279174);F=G.be(F,C,t,T,K[O+0],11,-358537222);T=G.be(T,F,C,t,K[O+3],16,-722521979);t=G.be(t,T,F,C,K[O+6],23,76029189);C=G.be(C,t,T,F,K[O+9],4,-640364487);F=G.be(F,C,t,T,K[O+12],11,-421815835);T=G.be(T,F,C,t,K[O+15],16,530742520);t=G.be(t,T,F,C,K[O+2],23,-995338651);C=G.aU(C,t,T,F,K[O+0],6,-198630844);F=G.aU(F,C,t,T,K[O+7],10,1126891415);T=G.aU(T,F,C,t,K[O+14],15,-1416354905);t=G.aU(t,T,F,C,K[O+5],21,-57434055);C=G.aU(C,t,T,F,K[O+12],6,1700485571);F=G.aU(F,C,t,T,K[O+3],10,-1894986606);T=G.aU(T,F,C,t,K[O+10],15,-1051523);t=G.aU(t,T,F,C,K[O+1],21,-2054922799);C=G.aU(C,t,T,F,K[O+8],6,1873313359);F=G.aU(F,C,t,T,K[O+15],10,-30611744);T=G.aU(T,F,C,t,K[O+6],15,-1560198380);t=G.aU(t,T,F,C,K[O+13],21,1309151649);C=G.aU(C,t,T,F,K[O+4],6,-145523070);F=G.aU(F,C,t,T,K[O+11],10,-1120210379);T=G.aU(T,F,C,t,K[O+2],15,718787259);t=G.aU(t,T,F,C,K[O+9],21,-343485551);C=G.aV(C,fm);t=G.aV(t,eS);T=G.aV(T,fK);F=G.aV(F,ew);}return Array(C,t,T,F);},cu:function(gm,C,t,bk,af,ay){return G.aV(G.fA(G.aV(G.aV(C,gm),G.aV(bk,ay)),af),t);},aI:function(C,t,T,F,bk,af,ay){return G.cu((t&T)|((~t)&F),C,t,bk,af,ay);},az:function(C,t,T,F,bk,af,ay){return G.cu((t&F)|(T&(~F)),C,t,bk,af,ay);},be:function(C,t,T,F,bk,af,ay){return G.cu(t^T^F,C,t,bk,af,ay);},aU:function(C,t,T,F,bk,af,ay){return G.cu(T^(t|(~F)),C,t,bk,af,ay);},cV:function(aL,bp){var bn=G.str2binl(key);if(bn.length>16)bn=G.am(bn,aL.length*G.bV);var eG=Array(16),eo=Array(16);for(var O=0;O<16;O++){eG[O]=bn[O]^0x36363636;eo[O]=bn[O]^0x5C5C5C5C;}var hash=G.am(eG.concat(G.str2binl(bp)),512+bp.length*G.bV);return G.am(eo.concat(hash),512+128);},aV:function(fE,fD){var eQ=(fE&0xFFFF)+(fD&0xFFFF);var eu=(fE>>16)+(fD>>16)+(eQ>>16);return(eu<<16)|(eQ&0xFFFF);},fA:function(ej,eg){return(ej<<eg)|(ej>>>(32-eg));},str2binl:function str2binl(aA){var bu=Array();var cD=(1<<G.bV)-1;for(var O=0;O<aA.length*G.bV;O+=G.bV)bu[O>>5]|=(aA.charCodeAt(O/G.bV)&cD)<<(O%32);return bu;},fl:function(bu){var av="";var cD=(1<<G.bV)-1;for(var O=0;O<bu.length*32;O+=G.bV)av+=String.fromCharCode((bu[O>>5]>>>(O%32))&cD);return av;},fi:function(bu){var fz=G.fd?"0123456789ABCDEF":"0123456789abcdef";var av="";for(var O=0;O<bu.length*4;O++){av+=fz.charAt((bu[O>>2]>>((O%4)*8+4))&0xF)+fz.charAt((bu[O>>2]>>((O%4)*8))&0xF);}return av;},cU:function(bu){var eK="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var av="";for(var O=0;O<bu.length*4;O+=3){var et=(((bu[O>>2]>>8*(O%4))&0xFF)<<16)|(((bu[O+1>>2]>>8*((O+1)%4))&0xFF)<<8)|((bu[O+2>>2]>>8*((O+2)%4))&0xFF);for(var j=0;j<4;j++){if(O*8+j*6>bu.length*32)av+=G.ev;else av+=eK.charAt((et>>6*(3-j))&0x3F);}}return av;}},h={dY:function(){this.cE="2755.oadz.com";this.ff="fac2.oadz.com";this.bW="2755.oadz.com";this.cv="cnt;C1;2755;.inspur.com:.tdata.cn;HZMBgC9lTs1l89OkCIhV0+bH0rQ=;";this.fq="jcnt;C1;2755;.inspur.com:.tdata.cn;AxQRU0VlSNA9ohvKgyyNaT5YOvs=;";this.dI="fcnt;C1;2755;.inspur.com:.tdata.cn;57gYYevb3MBc+y3Bj8wOKqRywDw=;";this.fk="event;E1;2755;.inspur.com:.tdata.cn;ivzHoLNRLICvL3vZ20lKbFO5GtE=;";this.gK="13a17";this.hD="13a17";this.fL=50;this.R=window;this.dc=this.R.top;this.cI=this.R.screen;this.aB=this.R.document;this.eV=navigator;this.fX=this.R.history;this.fe=(this.eV.appName=='Microsoft Internet Explorer');this.bf=this.cv.split(";")[2];this.cg=undefined;this.bY=undefined;this.bb=undefined;this.bI=undefined;this.bH=undefined;this.bh=undefined;this.aH=undefined;this.bL=undefined;this.bO=undefined;this.bm=undefined;this.cX=undefined;this.di=undefined;this.L=0;this.bU=0;this.dq=768;this.cn=512;this.ge=1536;this.ec=1024;this.ef=2048;this.fs=3;this.aC=undefined;this.fH=["button","img","ul","ol","svg","canvas","video","audio","select"];this.eU="\x49\x4e\x50\x55\x54";this.eP="\x62\x75\x74\x74\x6f\x6e";this.ek="\x69\x6d\x61\x67\x65";this.dV="\x73\x75\x62\x6d\x69\x74";this.cw="\x62\x6f\x64\x79";this.cq="\x68\x74\x6d\x6c";this.gk="\x46\x4c\x41\x53\x48";this.dJ="\x4f\x5a\x5f\x30\x61\x5f"+this.bf;this.dm="\x4f\x5a\x5f\x31\x55\x5f"+this.bf;this.cA="\x4f\x5a\x5f\x31\x59\x5f"+this.bf;this.da="\x4f\x5a\x5f\x31\x4b\x5f"+this.bf;this.dh="\x4f\x5a\x5f\x31\x53\x5f"+this.bf;this.ce="\x4f\x5a\x5f\x53\x49\x5f"+this.bf;this.cT="\x4f\x5a\x5f\x52\x55\x5f"+this.bf;this.dg=0;this.cr=0;this.cB=0;this.ct=0;},eF:function(){if(!this.bb){if(this.bK(0).indexOf("https")==0){this.bb="https://"+this.bW+"/"+this.dI;}else{this.bb="http://"+this.ff+"/"+this.dI;}}return this.bb;},fv:function(){if(!this.cg){if(this.bK(0).indexOf("https")==0){this.cg="https://"+this.bW+"/"+this.cv;}else{this.cg="http://"+this.cE+"/"+this.cv;}}return this.cg;},bN:function(){if(!this.bY){if(this.bK(0).indexOf("https")==0){this.bY="https://"+this.bW+"/"+this.fq;}else{this.bY="http://"+this.cE+"/"+this.fq;}}return this.bY;},eJ:function(){if(!this.bI){if(this.bK(0).indexOf("https")==0){this.bI="https://"+this.bW+"/"+this.fk;}else{this.bI="http://"+this.cE+"/"+this.fk;}}return this.bI;},aa:function(aZ,bg,bC,bm){if((typeof(_ozdiscookie)!="undefined"&&_ozdiscookie==1)||(typeof(_ozdisip)!="undefined"&&_ozdisip==1)){}else{var V="";if(bC&&bC>0)V=aZ+"="+bg+";expires="+bC.toGMTString()+";path=/;domain="+bm;else V=aZ+"="+bg+";path=/;domain="+bm;this.aB.cookie=V;}},ax:function(aZ){var V=this.aB.cookie,cY,bA,cc=V.indexOf(aZ+"=");if(cc!= -1){cY=cc+aZ.length+1;bA=V.indexOf(";",cY);if(bA== -1){bA=V.length;}return V.substring(cY,bA);}return null;},aJ:function(){var ad=undefined;if(!this.bm){this.bm=this.aB.domain;if(this.bm.indexOf(".")> -1){var bP=this.bm.split(".");this.bm=bP[bP.length-2]+"."+bP[bP.length-1];if(bP.length>2&&bP[bP.length-3]!="www"){ad=bP[bP.length-2];if(ad.length<=2||(ad=="com"||ad=="edu"||ad=="gov"||ad=="net"||ad=="org"||ad=="mil")){this.bm=bP[bP.length-3]+"."+ad+"."+bP[bP.length-1];}}}}return this.bm;},bK:function(au){var aj=this.cn;if(typeof(au)!="undefined"&&au==1){aj=this.ec;}var k="";try{try{k=this.dc.location.href;}catch(H){k=this.R.location.href;}}catch(H){}if(!k){k="-";}if(k.length>aj){k=k.substring(0,aj);}k=escape(k);return k;},cG:function(au){var aj=this.cn;if(typeof(au)!="undefined"&&au==1){aj=this.ec;}var aW="";try{aW=this.R.location.href;}catch(H){}if(!aW){aW="-";}if(aW.length>aj){aW=aW.substring(0,aj);}aW=escape(aW);return aW;},bE:function(au){var cL=this.ge;if(typeof(au)!="undefined"&&au==1){cL=this.ef;}if(!this.bH){try{try{this.bH=this.dc.document.referrer;}catch(H){this.bH=this.aB.referrer;}if(!this.bH){this.bH=this.dc.opener.location.href;}}catch(H){}if(!this.bH){this.bH="-";}if(this.bH.length>cL){this.bH=this.bH.substring(0,cL);}this.bH=escape(this.bH);}return this.bH;},ck:function(J,dG){try{if(J&&dG&&J.getAttribute(dG)){return J.getAttribute(dG).toString();}}catch(H){}return null;},aP:function(J){if(J&&J.name){return J.name.toString();}else if(this.ck(J,"name")){return this.ck(J,"name");}else if(J&&J.id){return J.id.toString();}else{return "-";}},dZ:function(J){var v=1,bc=0;while(J&&v<=50){J=J.parentNode;v++;if(J&&J.tagName=="DIV"){var cj=this.aP(J);if(cj&&cj.indexOf("__")==0&&cj.length>2){bc=1;break;}}}if(bc==1){return J;}else{return null;}},ez:function(J,as){if(this.R._ozautoclick!="undefined"&&(this.R._ozautoclick==0||this.R._ozautoclick=="0")){return;}if(!J.onclick){J.onclick=as;}else{if(this.fe){J.attachEvent("onclick",as);}else{J.addEventListener("click",as,false);}}},eD:function(J,as){if(this.fe){J.attachEvent("onhashchange",as);}else{J.addEventListener("hashchange",as,true);}},dU:function(){var v=0;if(typeof(h.R.frames)!="undefined"&&h.R.frames){for(v=0;v<h.R.frames.length;v++){try{h.ez(h.R.frames[v].document,h.dK);}catch(H){}}}if(h.R["__99_AC3_pageonload"]){h.R["__99_AC3_pageonload"]();}},eR:function(){if(h.R["__99_AC3_onHashChange"]){h.R["__99_AC3_onHashChange"]();}h.dA(h.R._ozprm,1);h.cP(h.R._ozurltail,1);h.L=0;h.bU=1;h.eE(h.bO,h.bL);},ei:function(J){var v=1;while(J&&J.tagName!="A"&&J.tagName!="AREA"&&v<=10){J=J.parentNode;v++;}if(J&&(J.tagName=="A"||J.tagName=="AREA")){return J;}else{return null;}},fC:function(J){var v=1;var aF=undefined;var l=this.aP(J);if(_ozclick==1){while(J&&v<=5&& !(l&&l.indexOf("__")==0&&l.length>2&&(J.onclick||J.getAttribute("szMon","true")))){J=J.parentNode;l=this.aP(J);v++;}if(J&&(J.onclick||J.getAttribute("szMon","true"))&&l&&l.indexOf("__")==0&&l.length>2){return J;}}else{if(J&&J.tagName){aF=J.tagName.toLowerCase();}while(J&& !(J.onclick||J.getAttribute("szMon","true"))&&v<=5&&aF!=this.cw&&aF!=this.cq){if(J.parentNode&&J.parentNode.tagName){J=J.parentNode;aF=J.tagName.toLowerCase();v++;}else{return null;}}if(J&&(J.onclick||J.getAttribute("szMon","true"))&&aF!=this.cw&&aF!=this.cq){return J;}}return null;},fc:function(J){var v=1;var aF=undefined;var l=this.aP(J);if(_ozclick==1){while(J&&v<=5&& !(l&&l.indexOf("__")==0&&l.length>2)){J=J.parentNode;l=this.aP(J);v++;}if(J&&l&&l.indexOf("__")==0&&l.length>2){return J;}}else{if(J&&J.tagName){aF=J.tagName.toLowerCase();}while(J&&v<=5&&l=='-'&&aF!=this.cw&&aF!=this.cq){if(J.parentNode&&J.parentNode.tagName){J=J.parentNode;l=this.aP(J);aF=J.tagName.toLowerCase();v++;}else{return null;}}if(J&&l!='-'&&aF!=this.cw&&aF!=this.cq){return J;}}return null;},ep:function(J){var v=1;var aF=undefined;for(;J&&v<=5;v++){if(J&&J.tagName){aF=J.tagName.toLowerCase();if(this.fH.indexOf(aF)> -1){return J;}}else{return null;}if(J.parentNode){J=J.parentNode;v++;}else{return null;}}return null;},eN:function(eB){var fI=/^\d*$/;if(fI.test(eB)){return true;}else{return false;}},cf:function(){var aG=Math.floor(new Date().getTime()/1000);var cC=0;var V="-";try{var aC=this.ax(this.ce);if(aC){V=aC;var eI=V.indexOf("sTime=");var en=V.indexOf("&sIndex=");var df="-";if(eI<0){cC++;df="sTime="+aG;}else{df=V.substring(0,en);}var aT=0;if(en<0){cC++;aT=999999;}else{aT=V.substring(V.indexOf("&sIndex=")+8);if(!this.eN(aT)){aT=999999;}else{aT++;}}V=df+"&sIndex="+aT;this.aa(this.ce,V,0,this.aJ());}else{V="sTime="+aG+"&sIndex=1";this.aa(this.ce,V,0,this.aJ());}}catch(H){}return V+"&sret="+cC;},dK:function(al){if(h.L<h.fL){h.aC=h.cf();var by=null;var bJ="-";var ae=null;var l="-";if(!al){if(h.R.event){al=h.R.event;by=al.srcElement;}else{try{var O=0;for(O=0;O<h.R.frames.length;O++){if(h.R.frames[O].event){al=h.R.frames[O].event;by=al.srcElement;}}}catch(H){}}}else{if(al.target){by=al.target;}else if(al.srcElement){by=al.srcElement;}}if(al&&by){var bq=null;var dM=null;var eW=h.ei(by);if(eW){bq=eW;bJ=escape(bq.href);if(!bJ){bJ="-";}}else if(by.tagName==h.eU&&(dM=by.type)&&(dM==h.eP||dM==h.ek||dM==h.dV)){bq=by;}else{var bo;bq=(bo=h.fC(by))?bo:((bo=h.fc(by))?bo:((bo=h.ep(by))?bo:null));}if(bq){var ak={};var dO=[];var bo=bq;ae=bq.tagName;l=escape(h.aP(bq));try{do{var aF=bo.tagName;var fp=0;var bG=bo.previousSibling;while(bG){if(bG.tagName==aF){fp++;}bG=bG.previousSibling;}dO.push(aF+"["+fp+"]");if(aF=="BODY"){break;}bo=bo.parentNode;}while(bo)}catch(H){console.log(H.message);}dO.reverse();ak["objkey"]=G.gx(dO.join("--"));var ar=undefined;if(ae&&ae!="-"){var cN=h.dZ(bq);h.di=h.ck(bq,_ozrec);var aD=0;var dH=0;if(typeof(al.pageX)!='undefined'){aD=al.pageX;dH=al.pageY;}else if(typeof(al.x)!='undefined'){aD=al.x;dH=al.y;}if(cN){var dX=escape(h.aP(cN));ar=ae+"*"+l+"*"+aD+"*"+dH+"*"+dX;}else{ar=ae+"*"+l+"*"+aD+"*"+dH;}var ap=Math.floor((new Date()).getTime()/1000);if(l.toLowerCase().indexOf("__ad_")==0||l.toLowerCase().indexOf("__zntg_")==0){h.dF(l,ap,bJ);}else if(cN){l=escape(h.aP(cN));if(l.toLowerCase().indexOf("__ad_")==0||l.toLowerCase().indexOf("__zntg_")==0){h.dF(l,ap,bJ);}}}if(ae&&h.bN()!=''){try{if(h.L==0&&h.bU==1){h.L=1;h.bU=h.L+1;}else{if(h.bU==1){h.L=2;}else{h.L=h.bU;}h.bU=h.L+1;}}catch(H){h.L=99;}h.ca(ar,h.L,bJ,ak);h.bX(100);}}}}},bX:function(aQ){var fN=(new Date()).getTime();while(((new Date()).getTime()-fN)<aQ){}},cp:function(type){var aQ=(new Date()).getTime();if(type==1){aQ=Math.floor(aQ/1000);}return "ozrand="+aQ;},ca:function(ar,L,bJ,ak){if(this.bN()!=''&&this.bK(1)&&this.bh&&this.bO&&ar&&L>0&&bJ){this.bw(this.bN()+"?"+L+"&"+this.bK(1)+"&"+this.bh+"&"+this.bO+"&"+ar+"&"+bJ+"&"+this.dp(ak)+"&"+this.cp(1));}},ha:function(ar,L,ba,an){if(this.bN()!=''&&an&&this.bh&&ar&&L>0&&ba){this.bw(this.bN()+"?"+L+"&"+an+"&"+this.bh+"&-&"+ar+"&"+ba+"&"+this.dp()+"&"+this.cp(1));}},gn:function(ar,L,ba,eY,an){if(this.bN()!=''&&an&&this.bh&&ar&&L>0&&ba){this.bw(this.bN()+"?"+L+"&"+an+"&"+this.bh+"&-&"+ar+"&"+ba+"&"+this.dp()+"&"+eY+"&"+this.cp(1));}},dA:function(bj,bS){var aq;try{if(typeof(bj)!="undefined"){if(Object.prototype.toString.call(bj)==='[object Object]'){bj=this.fB(bj);}if(bj.length>this.dq){bj=bj.substring(0,this.dq);}aq=escape(bj[0]=="&"?bj:("&"+bj));}}catch(H){}if(typeof(aq)=="undefined"){aq="-";}if(bS){this.bL=aq;}return aq;},cP:function(dk,bS){var ao;try{if(typeof(dk)!="undefined"&&dk.indexOf("#")==0&&dk.length>1){ao=escape(dk);}}catch(H){}if(typeof(ao)=="undefined"){ao="-";}if(bS){this.bO=ao;}return ao;},dC:function(fu){try{var aO=/^\d+$/;return aO.test(fu);}catch(H){}return false;},eb:function(){var dN=undefined;try{dN=this.eV.userAgent;if(dN&&dN.toLowerCase().indexOf("alexa")> -1){return 1;}}catch(H){}return 0;},cz:function(){var db=0,dz=0;if(this.cI){db=this.cI.width;dz=this.cI.height;if(db&&dz&&this.dC(db)&&this.dC(dz)){return db+"*"+dz;}}return "0*0";},fB:function(fM){try{var av="";for(var cd in fM){if(cd!=null&&cd!=""){av+="&"+cd+"="+encodeURIComponent(fM[cd]);}}}catch(H){console.log(H.message);}return av;},dw:function(aE){try{var aY=new Date();if(aE[0]==1){this.aa(this.dm,"",new Date(aY.getTime()-1),this.aJ());this.dg=aE[0];}if(aE[1]==1){this.aa(this.cA,"",new Date(aY.getTime()-1),this.aJ());this.cr=aE[1];}if(aE[2]==1){this.aa(this.da,"",new Date(aY.getTime()-1),this.aJ());this.cB=aE[2];}if(aE[3]==1){this.aa(this.dh,"",new Date(aY.getTime()-1),this.aJ());this.ct=aE[3];}}catch(H){}},eH:function(){var cJ="-";try{cJ=escape(this.aB.title.substring(0,30));}catch(H){}if(!cJ){cJ="-";}var aw=0;var bv=undefined;try{if(_ozuid){bv=escape(_ozuid);var aY=new Date();this.aa(this.cT,bv,new Date(aY.getTime()+63072000000),this.aJ());}}catch(H){}if(!bv){bv=this.ax(this.cT);if(typeof(bv)!="undefined"&&bv!=''&&bv)aw=1;else bv="-";}var ds=this.fo();if(!ds){ds="-";}var dP=0;try{var bC=new Date().getTime();if(_oztime&&bC>_oztime){dP=bC-_oztime;}}catch(H){}var bF=undefined;try{if(_oznvs){bF=escape(_oznvs);}}catch(H){}if(!bF){bF="-";}var bx=undefined;try{if(_ozwxid){bx=escape(_ozwxid);}}catch(H){}if(!bx){bx="-";}if(!this.aC)this.aC="-";var aG=Math.floor(new Date().getTime()/1000);var bs=this.de(aG);var er="0";if(bs.indexOf("&ltime=")!= -1){er=bs.substr(bs.indexOf("&ltime=")+7);}var ac=this.cs(true,aG);var ag=this.dQ();var aX=this.cF();var aK=0;try{if(_ozdip){aK=escape(_ozdip);}}catch(H){}var aE=0;try{if(_ozdfc){aE=_ozdfc.join("-");this.dw(_ozdfc);}}catch(H){}if(this.dg==1){bs="-";}if(this.cr==1){ac="-";}if(this.cB==1){ag="-";}if(this.ct==1){aX="-";}return "ozlvd="+er+"&ozept="+cJ+"&ozsru="+bv+"&ozrucs="+aw+"&ozscr="+this.cz()+"&ozplt="+dP+"&ozalx="+this.eb()+"&oznvs="+bF+"&ozwxid="+bx+"&ozdip="+aK+"&ozdfc="+aE+"&ozsac="+ds+"&ozccu="+escape(bs)+"&ozccy="+escape(ac)+"&ozcck="+escape(ag)+"&ozccs="+escape(aX);},dp:function(ak){var aw=0;var bv=undefined;var eh="-";try{if(_ozuid){bv=escape(_ozuid);}}catch(H){}if(!bv){bv=this.ax(this.cT);if(typeof(bv)!="undefined"&&bv!=''&&bv)aw=1;else bv="-";}if(!this.di)this.di="-";if(!this.bL)this.bL="-";if(!this.aC)this.aC="-";var bF=undefined;try{if(_oznvs){bF=escape(_oznvs);}}catch(H){}if(!bF){bF="-";}var bx=undefined;try{if(_ozwxid){bx=escape(_ozwxid);}}catch(H){}if(!bx){bx="-";}if(ak){eh=ak["objkey"];}var aG=Math.floor(new Date().getTime()/1000);var bs=this.de(aG);var ac=this.cs(false,aG);var ag=this.dQ();var aX=this.cF();var aK=0;try{if(_ozdip){aK=escape(_ozdip);}}catch(H){}var aE=0;try{if(_ozdfc){aE=_ozdfc.join("-");this.dw(_ozdfc);}}catch(H){}if(this.dg==1){bs="-";}if(this.cr==1){ac="-";}if(this.cB==1){ag="-";}if(this.ct==1){aX="-";}return "ozsru="+bv+"&ozscr="+this.cz()+"&ozrucs="+aw+"&ozprm="+this.bL+"&oznvs="+bF+"&ozwxid="+bx+"&ozdip="+aK+"&ozdfc="+aE+"&ozrec="+escape(this.di)+"&ozccu="+escape(bs)+"&ozccy="+escape(ac)+"&ozcck="+escape(ag)+"&ozccs="+escape(aX)+"&ozobjkey="+escape(eh)+"&oztopurl="+escape(this.cX);},fr:function(bO,bL){var k=undefined;if(_oziframe==0){k=this.bK(1);}else{k=this.cG(1);}if(this.aH&&this.aH!="-"){this.bh=this.aH;}else{this.bh=this.bE(1);}var aR=k;var bd=this.bh;aR=this.cW(aR,"ozs");bd=this.cW(bd,"ozs");this.bw(this.eF()+"?1&"+aR+"&"+bd+"&"+bO+"&"+bL+"&"+this.eH());if(bO=="-"){this.aH=k;}else{this.aH=k+bO;}},eE:function(bO,bL){var k=undefined;if(_oziframe==0){k=this.bK(1);}else{k=this.cG(1);}if(this.aH&&this.aH!="-"){this.bh=this.aH;}else{this.bh=this.bE(1);}var aR=k;var bd=this.bh;this.cX=k;this.bw(this.fv()+"?1&"+aR+"&"+bd+"&"+bO+"&"+bL+"&"+this.eH());if(bO=="-"){this.aH=k;}else{this.aH=k+bO;}},cW:function(aM,cK){var aO;var O=0;while(O<this.fs){aO=new RegExp("%26"+cK+"%3D(.+?)%26","g");if(aM.match(aO)){aM=aM.replace(aO,"%26");O++;}else break;}aO=new RegExp("%26"+cK+"%3D(.+?)$","i");aM=aM.replace(aO,"");aO=new RegExp("%3F"+cK+"%3D(.+?)%26");aM=aM.replace(aO,"%3F");aO=new RegExp("%3F"+cK+"%3D(.+?)$");aM=aM.replace(aO,"");return aM;},eC:function(al){var dB=1;try{if(al.eventPhase&&al.eventPhase==0){dB=0;}}catch(H){}if(dB){if(!this.R.event){this.dK(al);}else{this.dK();}}},gw:function(l,ae,ab,aN){var ar="";var fJ="-";var dE="-";var dj="-";if(l&&l!=''){if(this.L<this.fL){this.L++;if(typeof(ae)!="undefined"&&ae!=''){dE=ae;}if(typeof(ab)!="undefined"&&ab!=''){fJ=ab;ar=dE+"*"+l+"*1*1*"+ab;}else{ar=dE+"*"+l+"*1*1";}if(typeof(aN)!="undefined"&&aN!=''){if(aN.length>this.cn){aN=aN.substring(0,this.cn);}dj=aN;}this.ca(ar,this.L,dj);this.bX(100);}}},hx:function(cS,cb){var bS=0;if(typeof(_oz_updatetail)!="undefined"&&_oz_updatetail==1){bS=1;this.L=0;this.bU=1;}var aq=this.dA(cS,bS);var ao=this.cP(cb,bS);this.fr(ao,aq);},fb:function(){var bv=undefined;try{if(_ozuid){bv=escape(_ozuid);}}catch(H){}if(!bv){bv="-";}var aG=Math.floor(new Date().getTime()/1000);var bs=this.de(aG);var ac=this.cs(false,aG);var ag=this.dQ();var aX=this.cF();var aK=0;try{if(_ozdip){aK=escape(_ozdip);}}catch(H){}var aE=0;try{if(_ozdfc){aE=_ozdfc.join("-");this.dw(_ozdfc);}}catch(H){}if(this.dg==1){bs="-";}if(this.cr==1){ac="-";}if(this.cB==1){ag="-";}if(this.ct==1){aX="-";}return "ozsru="+bv+"&ozscr="+this.cz()+"&ozprm="+this.bL+"&ozdip="+aK+"&ozdfc="+aE+"&ozccu="+escape(bs)+"&ozccy="+escape(ac)+"&ozcck="+escape(ag)+"&ozccs="+escape(aX);},fF:function(bi,bB){var k=undefined;if(_oziframe==0){k=this.bK(1);}else{k=this.cG(1);}var aR=k;var bd=this.bE(1);aR=this.cW(aR,"ozs");bd=this.cW(bd,"ozs");this.bw(this.eJ()+"?"+aR+"&"+bd+"&"+bi+"&"+bB+"&"+this.fb());},ee:function(bi,bB){var eZ='-';var eA='-';if(typeof(bi)!="undefined"&&bi!=''){eZ=escape(bi);try{if(typeof(bB)!="undefined"&&bB!=''){if(Object.prototype.toString.call(bB)==='[object Object]'){bB=this.fB(bB);}if(bB.length>this.dq){bB=bB.substring(0,this.dq);}eA=escape(bB[0]=="&"?bB:("&"+bB));}}catch(H){}this.fF(eZ,eA);this.bX(100);}},dF:function(l,ap,cR){l=escape(l);var k=this.bK(0);var V=this.ax(this.dJ);if(V){var v=0,dv=0,dR=0;for(v=0;v<V.length;v++){if(V.charAt(v)=='&'){dv++;if(dv==1){dR=v+1;}}}if(dv<4){V=V+"&"+l+"*"+ap+"*"+k+"*"+cR;}else if(dv==4&&dR>0){V=V.substr(dR)+"&"+l+"*"+ap+"*"+k+"*"+cR;}}else{V=l+"*"+ap+"*"+k+"*"+cR;}this.aa(this.dJ,V,0,this.aJ());},fo:function(){var bg=undefined;var aG=Math.floor((new Date()).getTime()/1000);try{var V="";var cQ=this.ax(this.dJ).split("&");for(var v=0;v<cQ.length;v++){var ai=cQ[v].split("*");if((aG-ai[1])<900&&ai[2]==escape(this.bE(0))&&ai[3]==this.bK(0)){bg=ai[0];}else{V+=(V==""?"":"&")+cQ[v];}}this.aa(this.dJ,V,0,this.aJ());}catch(H){}return bg;},de:function(aG){var V="-";try{V=this.ax(this.dm);var aY=new Date();var bZ=0;if(!V){var ey=Math.round(aY.getTime()/1000);var dn=ey.toString(16);var es=dn.length;dn=dn.substring(es-7,es);var co="";for(var v=0;v<3;v++){var fG=Math.floor(Math.random()*255);var fa=fG.toString(16);co+=(fa.length==1?"0":"")+fa;}var ft="v"+dn+co+".0";V="vid="+ft+"&ctime="+aG+"&ltime="+bZ;}else{if(V&&V.indexOf("ctime=")!= -1){var ah=V.substr(V.indexOf("ctime=")+6);var eT=ah.indexOf("&");if(eT!= -1){ah=ah.substring(0,eT);}if(ah.match(/^\d*$/)){bZ=new Number(ah);}}V=V.substring(0,V.lastIndexOf("&ctime"))+"&ctime="+aG+"&ltime="+bZ;}this.aa(this.dm,V,new Date(aY.getTime()+252288000000),this.aJ());}catch(H){}return V;},cs:function(ea,aG){var V="-";try{var ac=this.ax(this.cA);var bs=this.ax(this.dm);if(ac){V=ac;V=V.substring(0,V.lastIndexOf("&ctime"))+bs.substring(bs.lastIndexOf("&ctime"))+"&compid="+this.bf;this.aa(this.cA,V,0,this.aJ());}if(ea){var bD=0;var du="-";var bQ="-";var k=this.bK(0);var cl=this.bE(0);var eO=1;var bc=0;if(cl!="-"){var dW=this.fv().split(";")[3].split(":");for(var v=0;v<dW.length;v++){if(cl.indexOf(dW[v])!= -1){eO=0;}}if(eO==1){bD=1;}}var bM=k.lastIndexOf("%3Fozu_sid%3D");if(bM== -1){bM=k.lastIndexOf("%26ozu_sid%3D");}var aS=k.lastIndexOf("%3Fozs%3D");if(aS== -1){aS=k.lastIndexOf("%26ozs%3D");}if(bM!= -1&&bM>aS){bD=1;var dS=k.split(/%3Fozu_sid%3D|%26ozu_sid%3D/);if(dS.length>1){var ci=dS[1];var bA=ci.indexOf("%26");if(bA!= -1){ci=ci.substr(0,bA);}du=ci;bc=1;}}if(aS!= -1&&aS>bM){bD=1;var fh=k.split(/%3Fozs%3D|%26ozs%3D/);for(var v=1;v<fh.length&&v<4;v++){var bz=fh[v];var bA=bz.indexOf("%26");if(bA!= -1){bz=bz.substr(0,bA);}else{var eL=bz.indexOf("%23");if(eL!= -1){bz=bz.substr(0,eL);}}if(bz.indexOf("-")== -1){bQ=bz;bc=2;break;}else{var cO=bz.split("-");if(cO.length==2&&cO[1]==this.bf){bQ=cO[0];bc=2;break;}}}}if(!ac){bD=1;}if(bD){V="erefer="+cl+"&eurl="+k+"&etime="+aG+bs.substring(bs.lastIndexOf("&ctime"))+"&compid="+this.bf;this.aa(this.cA,V,0,this.aJ());if(du!="-"||bQ!="-"){var ag="";var fw=V.indexOf("&etime=");if(fw!= -1){ag="etime="+aG+"&ozu_sid="+du+"&ozs="+bQ+"&flag="+bc+"&compid="+this.bf;this.aa(this.da,ag,new Date(new Date().getTime()+30*86400*1000),this.aJ());this.aa(this.dh,ag,0,this.aJ());}}}}}catch(H){}return V;},dQ:function(){var ag="-";try{var bg=this.ax(this.da);if(bg){ag=bg;}}catch(H){}return ag;},cF:function(){var aX="-";try{var bg=this.ax(this.dh);if(bg){aX=bg;}}catch(H){}return aX;},bw:function(fj){if((typeof(_ozdiscookie)!="undefined"&&_ozdiscookie==1)||(typeof(_ozdisip)!="undefined"&&_ozdisip==1)){}else{new Image().src=fj;}},fg:function(){try{if(typeof(this.ed)=="undefined"){this.dY();this.ed=1;this.bU=1;this.cZ=1;}else{this.ed=2;this.cZ=2;}this.aC=this.cf();if(this.cZ==1){this.dA(this.R._ozprm,1);this.cP(this.R._ozurltail,1);if(this.R.onload){this.R["__99_AC3_pageonload"]=this.R.onload;}this.R.onload=this.dU;this.eD(this.R,this.eR);this.ez(this.aB,this.dK);this.eE(this.bO,this.bL);}}catch(H){}return this;}};if(typeof(_99_AC3)=="undefined"){try{_99_AC3=h.fg();__ozclk=function(){try{var al=_99_AC3.R.event||arguments.callee.caller.arguments[0];_99_AC3.eC(al);}catch(H){}};__ozEvent=function(bi,el){_99_AC3.ee(bi,el);};__ozfac2=function(cS,cb){_99_AC3.hx(cS,cb);};__ozfaj2=function(l,ae,ab,aN){_99_AC3.gw(l,ae,ab,aN);};}catch(H){console.log(H.message);}}})(); 