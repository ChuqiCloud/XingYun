var BSHARE_SHOST_NAME = "https://static.bshare.cn",
	BSHARE_BUTTON_HOST = "https://bshare.optimix.cn",
	BSHARE_WEB_HOST = "https://www.bshare.cn";
(function(e, g) {
	if (!e.bShareUtil || !e.bShareControl) {
		var l = g.documentElement,
			d = navigator;
		e.BUZZ = {};
		e.bShareControl = {
			count: 0,
			viewed: !1,
			bShareLoad: !1,
			clicked: !1
		};
		var h = e.bShareUtil = {
			requestedScripts: [],
			encode: encodeURIComponent,
			isIe6: /msie|MSIE 6/.test(d.userAgent),
			isIe7: /MSIE 7/.test(d.userAgent),
			isIe8: /MSIE 8/.test(d.userAgent),
			isIe9: /MSIE 9/.test(d.userAgent),
			isIe: /Microsoft Internet Explorer/.test(d.appName),
			isSt: g.compatMode == "CSS1Compat",
			isQk: function() {
				return h.isIe6 || h.isIe && !h.isSt
			},
			eleInViewport: function(a) {
				if (a.getBoundingClientRect) return a = a.getBoundingClientRect(), a.top >= 0 && a.left >= 0 && a.bottom <= (e.innerHeight || l.clientHeight) && a.right <= (e.innerWidth || l.clientWidth);
				for (var b = a.offsetTop, c = a.offsetLeft, f = a.offsetWidth, k = a.offsetHeight; a.offsetParent;) a = a.offsetParent, b += a.offsetTop, c += a.offsetLeft;
				return b >= e.pageYOffset && c >= e.pageXOffset && b + k <= e.pageYOffset + e.innerHeight && c + f <= e.pageXOffset + e.innerWidth
			},
			getElemById: function(a) {
				return g.getElementById(a)
			},
			createElement: function(a, b, c, f, k) {
				a = g.createElement(a);
				if (b) a.id = b;
				if (c) a.className = c;
				if (f) a.style.cssText = f;
				if (k) a.innerHTML = k;
				return a
			},
			formatParam: function(a, b) {
				return typeof a == "number" ? +b : typeof a == "boolean" ? /^true$/i.test(b) : b
			},
			isUndefined: function(a) {
				return typeof a == "undefined"
			},
			arrayContains: function(a, b, c) {
				for (var f = a.length; f--;) if (!h.isUndefined(b) && a[f] === b || !h.isUndefined(c) && c.test(a[f])) return !0;
				return !1
			},
			loadScript: function(a, b) {
				var c = h.requestedScripts;
				if (!h.arrayContains(c, a)) / (bsMore | bshareS887)(Org) ? \.js / .test(a) && c.push(a), b = b ||
				function() {}, c = h.createElement("script"), c.src = a, c.type = "text/javascript", c.charset = "utf-8", c.onload = b, c.onreadystatechange = function() {
					/complete|loaded/.test(this.readyState) && b()
				}, g.getElementsByTagName("head")[0].appendChild(c)
			},
			loadStyle: function(a) {
				var b = h.createElement("style");
				b.type = "text/css";
				b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(g.createTextNode(a));
				g.getElementsByTagName("head")[0].appendChild(b)
			},
			getOffset: function(a) {
				for (var b = {
					x: a.offsetLeft,
					y: a.offsetTop,
					h: a.offsetHeight,
					w: a.offsetWidth
				}; a = a.offsetParent; b.x += a.offsetLeft, b.y += a.offsetTop);
				return b
			},
			getElem: function(a, b, c, f) {
				for (var a = a.getElementsByTagName(b), b = [], k = 0, d = 0, e = a.length; k < e; k++) {
					var g = a[k];
					if (!c || g.className.indexOf(c) != -1) b.push(g), typeof f == "function" && f(g, d++)
				}
				return b
			},
			getText: function(a) {
				return h.isIe ? a.innerText : a.textContent
			},
			insertAfter: function(a, b) {
				var c = b.parentNode;
				c.lastChild === b ? c.appendChild(a) : c.insertBefore(a, b.nextSibling)
			},
			getWH: function() {
				return {
					h: (h.isSt ? l : g.body).clientHeight,
					w: (h.isSt ? l : g.body).clientWidth
				}
			},
			stopProp: function(a) {
				a = a || e.event || {};
				a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
			},
			getScript: function(a) {
				for (var b = g.getElementsByTagName("script"), c = [], f = 0, k = b.length; f < k; f++) {
					var d = b[f].src;
					d && d.search(a) >= 0 && /bshare.(cn|com|me)|static.(local|dev)/i.test(d) && c.push(b[f])
				}
				return c
			},
			parseOptions: function(a, b) {
				var c = {};
				if (a = /\?(.*)|#(.*)/.exec(a)) for (var a = a[0].slice(1).replace("+", " "), f = a.split(/[&;]/g), k = 0, d = f.length; k < d; k++) {
					var e = f[k].split("="),
						g = decodeURIComponent(e[0]),
						h = b ? e[1] : null;
					if (!b) try {
						h = decodeURIComponent(e[1])
					} catch (l) {}
					c[g] = h
				}
				return c
			},
			submitForm: function(a, b, c, f) {
				var f = f || "post",
					k = h.createElement("form");
				g.body.appendChild(k);
				k.method = f;
				k.target = c;
				k.setAttribute("accept-charset", "utf-8");
				k.action = a;
				for (var d in b) if (typeof b[d] != "function") a = h.createElement("input"), a.type = "hidden", a.name = d, a.value = b[d], k.appendChild(a);
				if (h.isIe) g.charset = "utf-8";
				k.submit();
				g.body.removeChild(k)
			},
			replaceParam: function(a, b, c) {
				return b ? c.replace(a, h.encode(b)) : c.replace(a, "")
			},
			ready: function(a) {
				if (g.addEventListener) g.addEventListener("DOMContentLoaded", function() {
					g.removeEventListener("DOMContentLoaded", arguments.callee, !1);
					a.call()
				}, !1), e.addEventListener("load", a, !1);
				else if (g.attachEvent) {
					g.attachEvent("onreadystatechange", function() {
						g.readyState == "complete" && (g.detachEvent("onreadystatechange", arguments.callee), a.call())
					});
					e.attachEvent("onload", a);
					var b = !1;
					try {
						b = e.frameElement === null
					} catch (c) {}
					l.doScroll && b &&
					function() {
						try {
							l.doScroll("left")
						} catch (b) {
							setTimeout(arguments.callee, 10);
							return
						}
						a.call()
					}()
				} else e.onload = a
			},
			createBuzzObject: function(a, b) {
				if (e[a]) return e[a];
				b.namespace = a;
				var c = e[a] = {
					shost: e.BSHARE_SHOST_NAME,
					bhost: e.BSHARE_BUTTON_HOST,
					whost: e.BSHARE_WEB_HOST,
					defaultConfig: b,
					params: {
						type: 0,
						publisherUuid: "",
						url: "",
						title: "",
						summary: "",
						content: "",
						pic: "",
						pics: "",
						video: "",
						vTag: "",
						vUid: "",
						vEmail: "",
						product: "",
						price: "0",
						brand: "",
						tag: "",
						category: "",
						template: "1",
						popcss: "",
						apvuid: "",
						apts: "",
						apsign: ""
					},
					isReady: !1,
					completed: !1,
					curb: 0,
					preb: -1,
					entries: [],
					counters: [],
					viewInfo: null
				};
				c.config = {};
				c.elems = {
					powerBy: '<div id="bsPower" style="float:right;text-align:right;overflow:hidden;height:100%;"><a class="bsSiteLink" style="font-size:10px;vertical-align:text-bottom;line-height:24px;cursor:pointer;" href="' + c.whost + '" target="_blank"><span style="font-size:10px;vertical-align:text-bottom;"><span style="color:#f60;">b</span>Share</span></a></div>'
				};
				for (var f in c.defaultConfig) c.config[f] = c.defaultConfig[f];
				c.imageBasePath = c.shost + "/frame/images/";
				c.jsBasePath = c.shost + "/b/";
				c.addEntry = function(a) {
					if (typeof c.counters == "number") c.counters = [];
					c.entries.push(a);
					c.counters.push(0)
				};
				return e[a]
			},
			parseBuzzOptions: function(a, b, c, f, k) {
				var i;
				i = (a = h.getScript(b)[a]) ? h.parseOptions(a.src) : {}, a = i;
				k && (a = k(a));
				for (var d in a) if (!h.isUndefined(a[d]) && !(a[d] === null || typeof c[d] == "number" && a[d] === "")) h.isUndefined(c[d]) ? h.isUndefined(f[d]) || (f[d] = h.formatParam(f[d], a[d])) : c[d] = h.formatParam(c[d], a[d])
			}
		}
	}
})(window, document);
(function(e, g, l) {
	var d = g.bShareUtil,
		h = g.bShareControl;
	if (!(h.count > 0)) {
		var a = d.createBuzzObject(e, {
			lang: "zh",
			height: 0,
			width: 0,
			image: "",
			bgc: "none",
			fgc: "#333",
			poptxtc: "#666",
			popbgc: "#f2f2f2",
			sn: !1,
			logo: !0,
			style: 1,
			fs: 0,
			inline: !1,
			beta: !1,
			popjs: "",
			popHCol: 2,
			pop: 0,
			mdiv: 0,
			poph: "auto",
			bps: "",
			bps2: "",
			showShareCount: !0,
			icon: !0,
			text: null,
			promote: !1
		}),
			b = a.config,
			c = a.params;
		a.boxConfig = {
			position: 0,
			boxHeight: 408,
			boxWidth: 548,
			closeTop: 8,
			closeRight: 20,
			hasTop: !0,
			hasFrame: !0,
			hasMore: !0
		};
		a.boxConfigEC = {
			position: 0,
			boxHeight: 404,
			boxWidth: 650,
			closeTop: 10,
			closeRight: 16,
			hasFrame: !0
		};
		a.boxConfigWX = {
			id: "bsWXBox",
			position: 0,
			boxHeight: 245,
			boxWidth: 220,
			closeTop: 8,
			closeRight: 20,
			hasTop: !0
		};
		a.customization = {};
		a.loadOptions = function() {
			d.parseBuzzOptions(0, /button(Lite)?(Org)?\.js|bshare_load/, b, c, function(b) {
				if (!d.isUndefined(g.bShareOpt)) for (var c in g.bShareOpt) b[c] = g.bShareOpt[c];
				if (!d.arrayContains(a.langs, b.lang)) b.lang = "zh";
				if (b.h && b.w && b.img) b.height = b.h, b.width = b.w, b.image = b.img;
				b.bgc = b.bgcolor || void 0;
				b.fgc = b.textcolor || void 0;
				b.logo = !(b.logo && /^false$/i.test(b.logo));
				b.popHCol = b.pophcol || void 0;
				if (b.style) b.style = /^(-1|0|1|2|3|4|5|10|11|999)$/.test(b.style) ? +b.style : void 0;
				if (b.bp) b.style && b.style == 2 ? b.bps2 = b.bp.split(",") : b.bps = b.bp.split(",");
				b.showShareCount = b.style && /3|4|5/.test(b.style) ? !1 : !(b.ssc && /^false$/i.test(b.ssc.toString()));
				b.type = g.BSHARE_BUTTON_TYPE || b.type;
				b.publisherUuid = b.uuid || void 0;
				return b
			});
			for (var f in a.defaultConfig) a.defaultConfig[f] !== b[f] && (a.customization[f] = b[f]);
			if (c.type != 15) c.popcss = "";
			if (g.location.href.indexOf(a.whost + "/moreStyles") < 0) b.promote = !1
		};
		a.writeButton = function() {
			var c = "",
				e = {
					0: 0,
					1: [110, 85],
					10: [90, 51],
					11: [82, 82]
				},
				g = {
					0: 16,
					1: 24,
					10: 21,
					11: 49
				},
				h = a.imageBasePath,
				i = b.style,
				m = b.image,
				o = b.showShareCount,
				n = b.width,
				p = b.height;
			/^(3|4|5)$/.test(i) || (c = '<div class="bsPromo bsPromo1"></div>');
			i > 1 && i < 6 ? a.writeBshareDiv(c) : i == -1 ? (d.getElem(l, "div", "bshare-custom", function(b) {
				if (!b.childNodes[0].className || b.childNodes[0].className.indexOf("bsPromo") < 0) {
					var c = d.createElement("div", "", "bsPromo bsPromo" + (a.isLite ? 2 : 1));
					b.insertBefore(c, b.childNodes[0])
				}
			}), (b.beta || b.popjs) && a.writeBshareDiv('<div class="buzzButton">' + b.text + "</div>", "")) : i >= 0 && (i != 999 && (m = h + "logo_square_s.gif", i != 0 && (m = h + "button_custom" + i + "-" + (b.lang == "en" ? "en" : "zh"), o && (m += "-c"), i == 10 && (n = /Blue|Red|Green|Grey|Orange/.test(b.bgc) ? b.bgc : "Orange", m += "-" + n), m += ".gif"), n = e[i][o ? 0 : 1], p = g[i]), c += '<div class="buzzButton bsStyle' + i + '" style="height:' + p + "px;color:" + b.fgc + ";", i == 0 ? (c += b.icon ? "background:transparent url(" + m + ") no-repeat;" : "", c += 'float:left"><div style="padding:0 4px 0 ' + (b.icon ? "21px" : "0") + ";" + (a.isLite ? "height:16px;" : "") + '"><span class="bshareText" style="line-height:18px;float:left;">' + (b.text === null ? "\u5206\u4eab" : b.text) + "</span></div></div>", o && (c += '<div style="background:transparent url(' + h + 'counter_box.gif) no-repeat;float:left;width:40px;height:16px;text-align:center;font-weight:bold;">&nbsp;<span style="position:relative;line-height:16px;" class="shareCount"></span></div>')) : (c += ";background:transparent url(" + m + ") no-repeat;text-align:center;width:" + n + 'px;">', o && i != 999 && (c += '<span style="font-weight:bold;position:relative;line-height:' + (i == 10 ? "22" : "25") + 'px;" class="shareCount"></span>'), c += "</div>"), c += '<div style="clear:both;"></div>', a.writeBshareDiv(c, "font-size:12px;height:" + p + "px;width:" + n + "px;"))
		};
		a.more = function() {
			return typeof a.moreDiv == "function" ? (a.moreDiv(), !0) : !1
		};
		a.load = function(f) {
			if (!f) {
				if (b.mdiv < 0) return;
				var e = 0,
					q = setInterval(function() {
						a.more() || e >= 30 ? clearInterval(q) : ++e
					}, 100);
				return !1
			}
			c.target = f || "";
			a.click();
			a.disappear();
			a.prepare();
			if (!a.loadPlus || !a.loadPlus()) {
				var j;
				if (f == "bsharesync") j = [a.whost, "/bsyncShare?site=", f].join(""), a.updateCounter(), a.shareStats(f), d.submitForm(j, c, "_blank");
				else if (f == "email") j = [a.bhost, "/bshareEmail"].join(""), a.shareStats(f), d.submitForm(j, c, "_blank");
				else if (f == "clipboard") d.copy2Clipboard(), a.shareStats(f);
				else if (f == "favorite") d.add2Bookmark(), a.shareStats(f);
				else if (f == "printer") d.add2Printer(), a.shareStats(f);
				else if (f == "weixin") {
					j = a.bhost + "/barCode?site=weixin";
					for (var i in c)!/content|target/.test(i) && typeof c[i] != "function" && (j += "&" + i + "=" + d.encode(c[i]));
					l.getElementById("bsWXBox") || a.createBox(a.boxConfigWX);
					a.getFrame(a.boxConfigWX).innerHTML = '<img style="width:178px;height:178px;margin:21px;display:inline-block;" src="' + j + '" />';
					a.display(!1, a.boxConfigWX)
				} else {
					if (h.bShareLoad) for (i in j = a.bhost + "/bshare_redirect?site=" + f, c)!/content|target/.test(i) && typeof c[i] != "function" && (j += "&" + i + "=" + d.encode(c[i]));
					else(j = g.BS_PURL_MAP[f]) || alert(a.iL8n.loadFailed), f == "gmw" ? j = d.replaceParam("${URL}", c.url.replace("https://", ""), j) : c.url && (j = d.replaceParam("${URL}", c.url, j)), j = d.replaceParam("${TITLE}", c.title, j), j = d.replaceParam("${CONTENT}", c.summary, j), j = d.replaceParam("${IMG}", c.pic, j), j = d.replaceParam("${VIDEO}", c.video, j);
					g.open(j, "", "height=600,width=800,top=100,left=100,screenX=100,screenY=100,scrollbars=yes,resizable=yes")
				}
			}
		};
		a.show = function() {
			a.load()
		};
		a.onLoad = function() {
			d.getElem(l, "a", "bshareDiv", function(b, c) {
				d.getElem(b, "div", "buzzButton", function(b) {
					b.onclick = function(b) {
						return function(c) {
							a.more(c, b);
							return !1
						}
					}(c)
				})
			});
			var c = b.showShareCount;
			if (b.style == 0) {
				var e = d.getElem(l, "div", "buzzButton")[0].offsetWidth;
				c && (e += 41);
				d.getElem(l, "a", "bshareDiv", function(a) {
					a.style.width = e + "px"
				})
			}
			var h = a.entries.length;
			if (c && h > 0) {
				for (var c = "", j = 0; j < h; j++) {
					var i = a.entries[j];
					if (typeof i.url == "string") {
						if (d.isIe && c.length + i.url.length > 2E3) break;
						c != "" && (c += "|");
						c += i.url
					}
				}
				c != "" && (c += "|");
				c += g.location.href;
				a.count(c)
			}
		};
		a.renderButton = function() {
			d.loadStyle("a.bshareDiv,#bsPanel,#bsMorePanel,#bshareF{border:none;background:none;padding:0;margin:0;font:12px Helvetica,Calibri,Tahoma,Arial,\u5b8b\u4f53,sans-serif;line-height:14px;}#bsPanel div,#bsMorePanel div,#bshareF div{display:block;}.bsRlogo .bsPopupAwd,.bsRlogoSel .bsPopupAwd,.bsLogo .bsPopupAwd,.bsLogoSel .bsPopupAwd{line-height:16px !important;}a.bshareDiv div,#bsFloatTab div{*display:inline;zoom:1;display:inline-block;}a.bshareDiv img,a.bshareDiv div,a.bshareDiv span,a.bshareDiv a,#bshareF table,#bshareF tr,#bshareF td{text-decoration:none;background:none;margin:0;padding:0;border:none;line-height:1.2}a.bshareDiv span{display:inline;float:none;}div.buzzButton{cursor:pointer;font-weight:bold;}.buzzButton .shareCount a{color:#333}.bsStyle1 .shareCount a{color:#fff}span.bshareText{white-space:nowrap;}span.bshareText:hover{text-decoration:underline;}a.bshareDiv .bsPromo,div.bshare-custom .bsPromo{display:none;position:absolute;z-index:100;}a.bshareDiv .bsPromo.bsPromo1,div.bshare-custom .bsPromo.bsPromo1{width:51px;height:18px;top:-18px;left:0;line-height:16px;font-size:12px !important;font-weight:normal !important;color:#fff;text-align:center;background:url(" + a.imageBasePath + "bshare_box_sprite2.gif) no-repeat 0 -606px;}div.bshare-custom .bsPromo.bsPromo2{background:url(" + a.imageBasePath + "bshare_promo_sprite.gif) no-repeat;cursor:pointer;}");
			a.writeButton();
			c.type == 15 && a.filterECPlats()
		};
		a.loadButtonStyle = function() {
			if (c.type != 15) {
				var f, e = b.style;
				if (b.beta) f = a.jsBasePath + "styles/bshareS888.js?v=20150603";
				else if (b.popjs) f = b.popjs;
				else if (b.style != -1 && (f = a.jsBasePath + "styles/bshareS" + (e > 1 && e < 6 ? e : 1) + ".js?v=20150603", b.pop == -1 && (e <= 1 || e >= 6))) f = "";
				f && d.loadScript(f)
			}
		};
		a.international = function(c) {
			b.lang == "zh" ? c() : d.loadScript(a.jsBasePath + "langs/bs-lang-" + b.lang + ".js?v=20150603", c)
		};
		a.start = function() {
			d.loadEngine && (d.loadEngine(e), a.loadOptions(), a.international(function() {
				if (!a.completed) {
					if (d.isUndefined(b.text) || b.text === null) b.text = b.style == 0 ? a.iL8n.shareTextShort : a.iL8n.shareText;
					c.type != 1 && a.renderButton();
					d.createShareBox(e);
					if (c.type == 15) a.boxConfig = a.boxConfigEC;
					a.createBox();
					b.mdiv >= 0 && c.type != 15 && d.loadScript(a.jsBasePath + "components/bsMore.js?v=20150603");
					if (c.type == 1) return a.load(), !1;
					a.loadButtonStyle();
					a.onLoad();
					a.prepare(0);
					setTimeout(function() {
						h.viewed || a.view();
						setTimeout(function() {
							h.bShareLoad || d.loadScript(a.jsBasePath + "components/bsPlatforms.js?v=20150603")
						}, 3E3)
					}, 3E3);
					a.completed = !0
				}
			}))
		};
		a.init = function() {
            // if (!a.isReady) a.isReady = !0, d.loadScript(a.jsBasePath + "engines/bs-engine.js?v=20150603", a.start)
			if (!a.isReady) a.isReady = !0, setTimeout(function(){bsEngine();a.start();},500);
			function bsEngine(){
				(function(i, j) {
					var c = i.bShareUtil,
						o = i.bShareControl,
						q = j.body;
					c.createShareBox = function(n) {
						var b = i[n],
							f = b.config;
						b.createBox = function(e) {
							e = e || b.boxConfig;
							e.hasMore = e.hasMore && f.mdiv >= 0;
							var a = e.id || "bsBox";
							if (!c.getElemById(a)) {
								c.loadStyle(".bsBox{display:none;z-index:100000001;font-size:12px;background:url(" + b.imageBasePath + "/background-opaque-dark.gif) !important;padding:6px !important;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;}.bsClose{_overflow:hidden;cursor:pointer;position:absolute;z-index:10000000;color:#666;font-weight:bold;font-family:Helvetica,Arial;font-size:14px;line-height:20px;}.bsTop{color:" +
									f.poptxtc + ";background:" + f.popbgc + ";height:24px;line-height:24px;border-bottom:1px solid #e8e8e8;}.bsTop span{float:left;}.bsFrameDiv,#bsMorePanel{border:none;background:#fff;}.bsReturn{float:right;*margin-right:20px;margin-right:36px;text-align:right;cursor:pointer;line-height:24px;color:#666;opacity:0.5;}#bsReturn:hover{text-decoration:underline;opacity:1;}");
								var d;
								d = '<div class="bsClose">X</div>';
								e.hasTop && (d += '<div class="bsTop">' + (e.hasMore ? '<div class="bsReturn">\u9009\u62e9\u5176\u4ed6\u5e73\u53f0 &gt;&gt;</div>' : "") + '<span style="margin-left:15px;">' +
									(b.params.promote ? b.iL8n.shareTextPromote : b.iL8n.shareText) + '</span><span class="bsPlatName"></span></div>');
								d += '<div class="bsFrameDiv">' + (e.hasFrame ? '<iframe class="bShareFrame" name="bsFrame' + ~~(Math.random() * 1E3) + '" frameborder="0" scrolling="no" allowtransparency="true"></iframe>' : "<div></div>") + "</div>" + (e.hasMore ? '<div id="bsMorePanel" style="display: none;"></div>' : "");
								a = c.createElement("div", a, "bsBox", "", d);
								q.appendChild(a);
								c.getElem(a, "div", "bsClose")[0].onclick = function() {
									b.disappear()
								};
								if (e.hasMore) c.getElem(a, "div", "bsReturn")[0].onclick = function() {
									b.moreDiv()
								}
							}
						};
						b.resetBox = function(c, a) {
							b.boxConfig[c] = a
						};
						b.getFrame = function(e) {
							e = e || b.boxConfig;
							e = c.getElemById(e.id || "bsBox");
							return c.getElem(e, "div", "bsFrameDiv")[0].firstChild
						};
						b.disappear = function() {
							var b = c.getElem(j, "div", "bsBox"),
								a, d;
							for (a = 0, d = b.length; a < d; ++a) b[a].style.display = "none"
						};
						b.display = function(e, a) {
							b.disappear();
							a = a || b.boxConfig;
							a.hasMore = a.hasMore && f.mdiv >= 0;
							c.getElem(j, "div", "bsBox");
							var d = c.getElemById(a.id ||
									"bsBox"),
								g = c.getElem(d, "div", "bsClose")[0],
								k = c.getElem(d, "span", "bsPlatName")[0],
								h = c.getElem(d, "div", "bsFrameDiv")[0].firstChild,
								i = c.getElemById("bsMorePanel"),
								r = e ? i : h,
								l = a.position = a.position || 0,
								m = l ? c.getOffset(c.getElem(j, "a", a.anchor)[b.curb]) : null;
							d.style.left = l ? m.x + "px" : "50%";
							d.style.top = l ? m.y + m.h + 2 + "px" : "50%";
							d.style.marginLeft = l ? 0 : -a.boxWidth / 2 + "px";
							d.style.marginTop = l ? 0 : -a.boxHeight / 2 + "px";
							d.style.position = !l && !c.isQk() ? "fixed" : "absolute";
							g.style.top = a.closeTop + "px";
							g.style.right = a.closeRight +
								"px";
							r.style.height = a.boxHeight - (a.hasTop ? 25 : 0) + "px";
							r.style.width = a.boxWidth + "px";
							r.style.display = "block";
							d.style.height = a.boxHeight + "px";
							d.style.width = a.boxWidth + "px";
							d.style.display = "block";
							if (a.hasTop && (c.getElem(d, "div", "bsTop")[0].style.width = a.boxWidth + "px", b.params.target)) k.innerHTML = "&nbsp;-&nbsp;" + b.pnMap[b.params.target][0];
							if (a.hasMore) e ? (h.style.display = "none", k.style.display = "none") : (i.style.display = "none", k.style.display = "block"), c.getElem(d, "div", "bsReturn")[0].style.display = e ? "none" :
								""
						}
					};
					c.loadEngine = function(n) {
						var b = i[n],
							f = b.config,
							e = b.params;
						b.prepare = function(a) {
							var d = {};
							typeof a == "object" ? d = a : (b.curb = c.isUndefined(a) ? b.curb : a, b.curb >= 0 && (d = b.entries[b.curb] || {}));
							e.url = d.url || e.url || i.location.href;
							e.title = d.title || e.title;
							if (!e.title) e.title = /([^-_]*).*/.exec(j.title)[1];
							e.summary = d.summary ? c.shortenText(d.summary, 110) : e.summary || c.getContent();
							e.lang = e.request_locale = f.lang;
							e.pics = d.pics || c.getPics();
							e.pic = d.pic || e.pic;
							for (var g in d) /url|title|summary|content/.test(g) ||
								(e[g] = d[g])
						};
						b.share = function(a, d, g) {
							b.prepare(g);
							b.load(d) && b.afterLoad && b.afterLoad(d);
							c.stopProp(a)
						};
						b.stats = function(a, d, g) {
							b.prepare(g);
							b.shareStats(d);
							c.stopProp(a)
						};
						b.shareStats = function(a) {
							var d = b.bhost + "/bshare_share_statistics?";
							d += "site=" + a;
							d += "&url=" + c.encode(e.url);
							d += "&title=" + c.encode(e.title);
							d += "&publisherUuid=" + e.publisherUuid;
							d += "&type=" + e.type;
							c.loadScript(d)
						};
						b.view = function(a) {
							a = a || i.location.href;
							if (o.viewed) {
								var d = 0,
									g = function() {
										b.viewInfo ? b.viewcb() : d >= 6 || (++d, setTimeout(g,
											500))
									};
								b.viewInfo || g()
							} else {
								o.viewed = !0;
								var k = b.bhost + "/bshare_view?Callback=" + n + ".viewcb&";
								k += "url=" + c.encode(a);
								k += "&h=" + c.encode(i.location.hash);
								k += "&uuid=" + e.publisherUuid;
								f.showShareCount && (k += "&sc=1");
								k += b.bpsCount ? "&l=" + b.bpsCount : "&l=17";
								this.isLite && (k += "&lite=1");
								if (j.referrer) {
									var a = j.referrer,
										h, p;
									h = c.parseOptions(a, !0);
									if (a.indexOf(".baidu.") > -1) p = h.wd || h.word;
									else if (/\.(google|bing|so)\./.test(a)) p = h.q;
									else if (a.indexOf(".yahoo.") > -1) p = h.p || h.keyword;
									else if (a.indexOf(".sogou.") > -1) p =
										h.query;
									else if (a.indexOf(".youdao.") > -1) p = h.q || h.keyword;
									else if (a.indexOf(".soso.") > -1) p = h.w;
									k += "&ref=" + c.encode(a);
									k = c.addUrlCValue(k, "q", p)
								}
								k = c.addUrlCValue(k, "ot", j.title);
								k = c.addUrlCValue(k, "kws", c.keywords());
								c.loadScript(k)
							}
						};
						b.click = function() {
							if (!o.clicked && (o.clicked = !0, b.preb !== b.curb)) {
								b.preb = b.curb;
								var a = b.bhost + "/bshare_click?";
								a += "url=" + c.encode(b.params.url);
								a += "&title=" + c.encode(b.params.title);
								a += "&uuid=" + e.publisherUuid;
								c.loadScript(a)
							}
						};
						b.showPromo = function(a) {
							a.style.position =
								"relative";
							var d = c.isQk() || (j.documentMode ? +j.documentMode == 7 : c.isIe7);
							a.style.display = d ? "inline" : "inline-block";
							if (d) a.style.zoom = "1";
							c.getElem(a, "div", "bsPromo", function(d, e) {
								d.style.display = "block";
								if (!b.isLite || f.style != -1) d.innerHTML = b.iL8n ? b.iL8n.promote : "\u5206\u4eab\u6709\u793c", a.style.overflow = "visible";
								else var h = setInterval(function() {
									if (b.anchorsBinded) {
										clearInterval(h);
										var i = c.getElem(a, "a", "bshare-bsharesync")[0],
											f = c.getElem(a, "a", "bshare-more"),
											l = f[f.length - 1],
											m, n, o;
										if (i || l) {
											m = i || l;
											f = m.offsetHeight ||
												0;
											if (f < 20 && (!i || i.offsetLeft < l.offsetLeft)) m = l;
											l = a.style.paddingTop || 0;
											n = m.offsetLeft || 0;
											o = !!m.innerHTML && m.innerHTML.length != 0;
											var s = "31px",
												t = "29px",
												u = n + (f < 36 ? 32 : 50) - 31 + "px",
												v = l + (f < 36 ? 0 : -1) + "px";
											f < 20 ? (m.style.marginRight = "21px", d.style.cursor = "default", s = "21px", t = "16px", u = (m.offsetLeft || 0) + (o ? m.offsetWidth || 0 : 18) + "px", v = l + 1 + "px") : f < 28 ? (d.style.backgroundPosition = "0 -16px", t = s = "22px", u = n + 24 - 22 + "px", v = l + "px") : d.style.backgroundPosition = "0 -38px";
											d.style.width = s;
											d.style.height = t;
											d.style.left = u;
											d.style.top =
												v;
											if (!(f < 20))
												if (i) d.onclick = function(a) {
													b.share(a, "bsharesync", e)
												};
												else var q = setInterval(function() {
													if (b.hover) clearInterval(q), d.onmouseover = function() {
														b.hover(m)
													}, d.onmouseout = function() {
														b.timerId = setTimeout(function() {
															j.getElementById("bsPanel").style.display = "none"
														}, 50)
													}, d.onclick = function(a) {
														b.more(a, e)
													}
												}, 100)
										}
									}
								}, 100)
							})
						};
						b.promote = function() {
							e.promote = !0;
							b.resetBox && b.resetBox("boxHeight", 588);
							if (f.namespace == "bShare") switch (b.resetBox && b.resetBox("boxHeight", 588), f.style) {
								case 3:
									if (f.text ==
										b.iL8n.shareText) f.text = b.iL8n.shareTextPromote;
								case 4:
								case 5:
									return
							}
							i.bShareLike ? c.getElem(j, "a", "bsLikeDiv", function(a) {
								b.showPromo(a, c.getElem(a, "div", "bsPromo")[0])
							}) : (c.getElem(j, "a", "bshareDiv", function(a) {
								b.showPromo(a, c.getElem(a, "div", "bsPromo")[0])
							}), c.getElem(j, "div", "bshare-custom", function(a) {
								b.showPromo(a, c.getElem(a, "div", "bsPromo")[0])
							}))
						};
						b.viewcb = function(a) {
							o.bShareLoad = !0;
							a = b.viewInfo = b.viewInfo || a;
							if (typeof a.c == "number" && b.entries.length == 0) a.c = a.c > -1 ? a.c : 0, b.showCount(a.c);
							if (a.n) b.user = a.n;
							if (a.p && a.p.length > 0) f.bps = c.getPNames(a.p);
							f.lang != "en" && (f.promote || a.pt) && typeof b.promote == "function" && b.promote();
							(a.n || a.p) && typeof b.ready == "function" && b.ready();
							a.lk && b.entries.length <= 1 && typeof b.showStatus == "function" && b.showStatus(a.lk);
							a.cl && typeof b.collect == "function" && b.collect();
							// b.cmatch(a.v, a.m)
						};
						b.cmatch = function(a, d) {
							if (a && d) {
								var g = c.createElement("iframe", "", "", "display:none;");
								g.src = b.shost + "/cm.html?cid=" + a + "&m=" + d;
								q.appendChild(g)
							}
						};
						b.collect = function() {
							var a =
								b.bhost + "/bshare_log_params?uuid=" + e.publisherUuid,
								d;
							for (d in b.customization) a += "&" + d + "=" + b.customization[d];
							c.loadScript(a)
						};
						b.count = function(a) {
							if (f.showShareCount) {
								var d = b.bhost + "/bshare_share_count?Callback=" + n + ".showCount";
								d += "&url=" + c.encode(a);
								c.loadScript(d)
							}
						};
						b.shareCount = function(a, d) {
							/0|2|10/.test(f.style) ? a = c.longRound(a) : /11/.test(f.style) || (a = c.shortRound(a));
							var b = {
								cssFloat: "none"
							};
							if (n != "bShareLike") switch (f.style) {
								case 1:
									b.left = "36px";
									b.color = "#fff";
									b.fontsize = "12px";
									break;
								case 10:
									b.left =
										"27px";
								case 0:
								case 2:
									b.fontsize = "11px";
									break;
								case 11:
									b.top = "25px", b.fontsize = "17px"
							}
							if (d) {
								var e = d.style,
									h;
								for (h in b)
									if (h != "color" || !e.color) e[h] = b[h];
								d.innerHTML = c.addCommas(a)
							} else return c.addCommas(a)
						};
						b.showCount = function(a) {
							b.counters = a;
							var d = c.getElem(j, "span", "shareCount");
							if (!d || d.length == 0) d = c.getElem(j, "span", "BSHARE_COUNT");
							var g, e;
							if (typeof a == "number") {
								for (g = 0, e = d.length; g < e; g++) b.shareCount(a, d[g]);
								c.getElem(j, "span", "BSHARE_COUNT", function(d) {
									d.innerHTML = "" + b.shareCount(a, null)
								})
							} else if (a.length >
								0) {
								e = a.length;
								for (g = 0; g < e; g++) b.shareCount(a[g], d[g]);
								if (!(b.entries.length < e))
									for (g = e - 1; g < d.length; g++) b.shareCount(a[e - 1], d[g])
							}
						};
						b.updateCounter = function(a) {
							typeof b.counters == "number" ? b.counters += a ? -1 : 1 : b.counters[b.curb] += a ? -1 : 1;
							b.showCount(b.counters)
						};
						c.roundNumber = function(a, b) {
							try {
								return Math.round(a * Math.pow(10, b)) / Math.pow(10, b)
							} catch (c) {
								return a
							}
						};
						c.keywords = function() {
							var a = "",
								b = document.getElementsByTagName("meta");
							if (b)
								for (var c = 0, e = b.length; c < e; c++) /^keywords$/i.test(b[c].name) && (a +=
									b[c].content);
							return a
						};
						c.addUrlCValue = function(a, b, e) {
							if (e) {
								try {
									decodeURIComponent(e)
								} catch (f) {}
								a += "&" + b + "=" + e;
								if (a.indexOf("cs") < 0) b = document.charset, a += b ? "&cs=" + c.encode(b) : ""
							}
							return a
						};
						c.longRound = function(a) {
							if (a > 999999) return c.roundNumber(a / 1E6, 2) + "M";
							else if (a > 99999) return c.roundNumber(a / 1E3, 1) + "K";
							return a
						};
						c.shortRound = function(a) {
							if (a > 999999) return c.roundNumber(a / 1E6, 1) + "M";
							else if (a > 99999) return c.roundNumber(a / 1E3, 0) + "K";
							else if (a > 9999) return c.roundNumber(a / 1E3, 1) + "K";
							else if (a > 999) return c.roundNumber(a /
								1E3, 2) + "K";
							return a
						};
						c.addCommas = function(a) {
							try {
								a += "";
								for (var b = a.split("."), c = b[0], e = b.length > 1 ? "." + b[1] : "", b = /(\d+)(\d{3})/; b.test(c);) c = c.replace(b, "$1,$2");
								return c + e
							} catch (f) {
								return a
							}
						};
						c.shortenText = function(a, b) {
							a = a || "";
							return a.length > b ? a.slice(0, b) + "..." : a
						};
						c.getCurrentSelection = function() {
							var a = "";
							if (i.getSelection) a = i.getSelection().toString();
							else if (j.getSelection) a = j.getSelection;
							else if (j.selection) try {
								a = j.selection.createRange().text
							} catch (b) {}
							return a
						};
						c.grabTextContent = function() {
							for (var a =
									"", b = j.getElementsByTagName("p"), e = 0, f = b.length; e < f; e++) {
								var h = b[e];
								if (h.id == "BSHARE_TEXT" || h.className.indexOf("BSHARE_TEXT") != -1) a += c.getText(h)
							}
							a == "" && c.getElem(j, "meta", null, function(b) {
								var c = b.getAttribute("name");
								c && /^description$/i.test(c) && (a = b.getAttribute("content"))
							});
							return a
						};
						c.getContent = function() {
							var a = null,
								b = c.getCurrentSelection();
							return b ? c.shortenText(b, 110) : (a === null && (a = c.grabTextContent()), c.shortenText(a, 110))
						};
						c.getPics = function() {
							for (var a = "", b = c.getElem(j, "img"), e = 0, f = b.length; e <
								f; e++) {
								var h = b[e];
								if (!(h.offsetHeight <= 119 || h.offsetWidth <= 119)) {
									if (a.length + h.src.length >= 1500) break;
									a != "" && (a += "|");
									a += h.src
								}
							}
							return a
						};
						c.removeUrlHash = function(a) {
							var b = a.indexOf("#");
							b > 0 && (a = a.slice(0, b));
							return a
						};
						c.showClipboardSuccess = function() {
							alert(b.iL8n.copySuccess)
						};
						c.showClipboardUnsupportBrowsertxt = function(a) {
							prompt(b.iL8n.copyTip, a)
						};
						c.getPNames = function(a) {
							var c = [],
								e;
							for (e in a) c.push(b.plats[a[e]]);
							return c
						};
						c.copy2Clipboard = function() {
							try {
								var a = c.removeUrlHash(e.url),
									b = e.title +
									" " + a,
									f = i.clipboardData;
								f ? (f.clearData(), f.setData("Text", b), c.showClipboardSuccess()) : c.showClipboardUnsupportBrowsertxt(b)
							} catch (j) {}
						};
						c.add2Printer = function() {
							i.print()
						};
						c.add2Bookmark = function() {
							if (i.sidebar) i.sidebar.addPanel(e.title, e.url, "");
							else if (i.chrome) alert(b.iL8n.bookmarkTip);
							else if (i.external) try {
									i.external.AddFavorite(e.url, e.title)
								} catch (a) {} else if (i.opera && i.print) return !0;
								else alert(b.iL8n.notSupport)
						}
					}
				})(window, document);
			};
		};
		d.loadScript(a.jsBasePath + "components/bsStatic.js?v=20150603")
	}
})("bShare", window, document);
(function(e, g, l) {
	if (!(g.bShareControl.count > 0)) {
		g.bShareControl.count += 1;
		var d = g.bShareUtil,
			e = g[e],
			h = e.config;
		e.isLite = !0;
		e.customization.type = "lite";
		e.writeBshareDiv = function(a, b) {
			d.getElem(l, "a", "bshareDiv", function(c) {
				if (a) c.innerHTML = a;
				else if (c.innerHTML.length < 24) c.innerHTML = "";
				c.onclick = function() {
					return !1
				};
				c.style.cssText = (h.inline ? "" : "display:block;") + "text-decoration:none;padding:0;margin:0;" + b || ""
			})
		};
		d.ready(e.init)
	}
})("bShare", window, document);
(function() {
	var e = window.bShare;
	if (!e) e = window.bShare = {};
	e.pnMap = {
		115: ["115\u6536\u85cf\u5939", 0],
		"139mail": ["139\u90ae\u7bb1", 2],
		"9dian": ["\u8c46\u74e39\u70b9", 6],
		baiducang: ["\u767e\u5ea6\u641c\u85cf", 7],
		baiduhi: ["\u767e\u5ea6\u7a7a\u95f4", 8],
		bgoogle: ["Google\u4e66\u7b7e", 10],
		bsharesync: ["\u4e00\u952e\u901a", 16],
		caimi: ["\u8d22\u8ff7", 17],
		cfol: ["\u4e2d\u91d1\u5fae\u535a", 18],
		chouti: ["\u62bd\u5c49", 20],
		clipboard: ["\u590d\u5236\u7f51\u5740", 21],
		cyolbbs: ["\u4e2d\u9752\u8bba\u575b", 22],
		cyzone: ["\u521b\u4e1a\u5427", 23],
		delicious: ["\u7f8e\u5473\u4e66\u7b7e", 24],
		dig24: ["\u9012\u5ba2\u7f51", 25],
		digg: ["Digg", 26],
		diglog: ["\u5947\u5ba2\u53d1\u73b0", 27],
		diigo: ["Diigo", 29],
		douban: ["\u8c46\u74e3\u7f51", 30],
		dream: ["\u68a6\u5e7b\u4eba\u751f", 31],
		duitang: ["\u5806\u7cd6", 32],
		eastdaymb: ["\u4e1c\u65b9\u5fae\u535a", 33],
		email: ["\u7535\u5b50\u90ae\u4ef6", 34],
		evernote: ["Evernote", 35],
		facebook: ["Facebook", 36],
		fanfou: ["\u996d\u5426", 37],
		favorite: ["\u6536\u85cf\u5939", 38],
		feixin: ["\u98de\u4fe1", 39],
		friendfeed: ["FriendFeed", 40],
		fwisp: ["Fwisp", 42],
		ganniu: ["\u8d76\u725b\u5fae\u535a", 43],
		gmail: ["Gmail", 44],
		gmw: ["\u5149\u660e\u7f51", 45],
		gtranslate: ["\u8c37\u6b4c\u7ffb\u8bd1", 46],
		hemidemi: ["\u9ed1\u7c73\u4e66\u7b7e", 47],
		hexunmb: ["\u548c\u8baf\u5fae\u535a", 48],
		huaban: ["\u82b1\u74e3", 49],
		ifengkb: ["\u51e4\u51f0\u5feb\u535a", 50],
		ifengmb: ["\u51e4\u51f0\u5fae\u535a", 51],
		ifensi: ["\u7c89\u4e1d\u7f51", 52],
		instapaper: ["Instapaper", 53],
		itieba: ["i\u8d34\u5427", 54],
		joinwish: ["\u597d\u613f\u7f51", 55],
		kaixin001: ["\u5f00\u5fc3\u7f51", 56],
		laodao: ["\u5520\u53e8\u7f51", 57],
		leihou: ["\u96f7\u7334", 58],
		leshou: ["\u4e50\u6536", 59],
		linkedin: ["LinkedIn", 60],
		livespace: ["MS Livespace", 61],
		mala: ["\u9ebb\u8fa3\u5fae\u535a", 63],
		masar: ["\u739b\u6492\u7f51", 65],
		meilishuo: ["\u7f8e\u4e3d\u8bf4", 66],
		miliao: ["\u7c73\u804a", 67],
		mister_wong: ["Mister Wong", 68],
		mogujie: ["\u8611\u83c7\u8857", 69],
		moptk: ["\u732b\u6251\u63a8\u5ba2", 70],
		msn: ["MSN", 71],
		myshare: ["MyShare", 72],
		myspace: ["MySpace", 73],
		neteasemb: ["\u7f51\u6613\u5fae\u535a", 74],
		netvibes: ["Netvibes", 75],
		peoplemb: ["\u4eba\u6c11\u5fae\u535a", 76],
		pinterest: ["Pinterest", 79],
		poco: ["Poco\u7f51", 81],
		printer: ["\u6253\u5370", 82],
		printf: ["Print Friendly", 83],
		qqmb: ["\u817e\u8baf\u5fae\u535a", 84],
		qqshuqian: ["QQ\u4e66\u7b7e", 85],
		qqxiaoyou: ["\u670b\u53cb\u7f51", 86],
		qzone: ["QQ\u7a7a\u95f4", 87],
		readitlater: ["ReadItLater", 88],
		reddit: ["Reddit", 89],
		redmb: ["\u7ea2\u5fae\u535a", 90],
		renjian: ["\u4eba\u95f4\u7f51", 91],
		renmaiku: ["\u4eba\u8109\u5e93", 92],
		renren: ["\u4eba\u4eba\u7f51", 93],
		shouji: ["\u624b\u673a", 95],
		sinaminiblog: ["\u65b0\u6d6a\u5fae\u535a", 96],
		sinaqing: ["\u65b0\u6d6aQing", 97],
		sinavivi: ["\u65b0\u6d6aVivi", 98],
		sohubai: ["\u641c\u72d0\u767d\u793e\u4f1a", 99],
		sohuminiblog: ["\u641c\u72d0\u5fae\u535a", 100],
		southmb: ["\u5357\u65b9\u5fae\u535a", 101],
		stumbleupon: ["StumbleUpon", 102],
		szone: ["\u5b88\u682a\u7f51", 103],
		taojianghu: ["\u6dd8\u6c5f\u6e56", 104],
		tianya: ["\u5929\u6daf", 105],
		tongxue: ["\u540c\u5b66\u5fae\u535a", 106],
		tuita: ["\u63a8\u4ed6", 107],
		tumblr: ["Tumblr", 108],
		twitter: ["Twitter", 109],
		ushi: ["\u4f18\u58eb\u7f51", 110],
		waakee: ["\u6316\u5ba2", 112],
		wealink: ["\u82e5\u90bb\u7f51", 113],
		woshao: ["\u6211\u70e7\u7f51", 115],
		xianguo: ["\u9c9c\u679c\u7f51", 116],
		xiaomeisns: ["\u6821\u5a92\u91c7\u901a", 117],
		xinminmb: ["\u65b0\u6c11\u5fae\u535a", 118],
		xyweibo: ["\u5fae\u535a\u6821\u56ed", 119],
		yaolanmb: ["\u6447\u7bee\u5fae\u535a", 120],
		yijee: ["\u6613\u96c6\u7f51", 121],
		youdao: ["\u6709\u9053\u4e66\u7b7e", 122],
		zjol: ["\u6d59\u6c5f\u5fae\u535a", 124],
		xinhuamb: ["\u65b0\u534e\u5fae\u535a"],
		szmb: ["\u6df1\u5733\u5fae\u535a"],
		changshamb: ["\u5fae\u957f\u6c99"],
		hefeimb: ["\u5408\u80a5\u5fae\u535a"],
		wansha: ["\u73a9\u5565e\u65cf"],
		"189share": ["\u624b\u673a\u5feb\u4f20"],
		diandian: ["\u70b9\u70b9\u7f51"],
		tianji: ["\u5929\u9645\u7f51"],
		jipin: ["\u5f00\u5fc3\u96c6\u54c1"],
		chezhumb: ["\u8f66\u4e3b\u5fae\u535a"],
		gplus: ["Google+"],
		yidongweibo: ["\u79fb\u52a8\u5fae\u535a"],
		youdaonote: ["\u6709\u9053\u7b14\u8bb0"],
		jschina: ["\u5fae\u6c5f\u82cf"],
		mingdao: ["\u660e\u9053"],
		jxcn: ["\u6c5f\u897f\u5fae\u535a"],
		qileke: ["\u5947\u4e50\u6536\u85cf"],
		sohukan: ["\u641c\u72d0\u968f\u8eab\u770b"],
		maikunote: ["\u9ea6\u5e93\u8bb0\u4e8b"],
		lezhimark: ["\u4e50\u77e5\u4e66\u7b7e"],
		"189mail": ["189\u90ae\u7bb1"],
		wo: ["WO+\u5206\u4eab"],
		gmweibo: ["\u5149\u660e\u5fae\u535a"],
		jianweibo: ["\u5409\u5b89\u5fae\u535a"],
		qingbiji: ["\u8f7b\u7b14\u8bb0"],
		duankou: ["\u7aef\u53e3\u7f51"],
		qqim: ["QQ\u597d\u53cb"],
		kdweibo: ["\u4e91\u4e4b\u5bb6"],
		xueqiu: ["\u96ea\u7403"],
		weixin: ["\u5fae\u4fe1"]
	};
	e.iL8n = {
		promoteHot: "\u70ed",
		promoteNew: "\u65b0",
		promoteRec: "\u63a8\u8350",
		rtnTxt: "\u9009\u62e9\u5176\u4ed6\u5e73\u53f0 >>",
		shareText: "\u5206\u4eab\u5230",
		shareTextShort: "\u5206\u4eab",
		shareTextPromote: "\u5206\u4eab\u6709\u793c",
		morePlats: "\u66f4\u591a\u5e73\u53f0...",
		morePlatsShort: "\u66f4\u591a...",
		whatsThis: "\u8fd9\u662f\u4ec0\u4e48\u5de5\u5177\uff1f",
		promote: "\u5206\u4eab\u6709\u793c",
		promoteShort: "\u5956",
		searchHint: "\u8f93\u5165\u5e73\u53f0\u5173\u952e\u5b57\u67e5\u8be2",
		closeHint: "30\u5206\u949f\u5185\u4e0d\u518d\u51fa\u73b0\u6b64\u5206\u4eab\u6846",
		loadFailed: "\u7f51\u7edc\u592a\u6162\u65e0\u6cd5\u52a0\u8f7d\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
		loadFailed2: "\u5f88\u62b1\u6b49\uff0c\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668\u3002\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",
		notSupport: "\u4e0d\u652f\u6301\uff01",
		copySuccess: "\u590d\u5236\u6210\u529f\uff01\u60a8\u53ef\u4ee5\u7c98\u8d34\u5230QQ/MSN\u4e0a\u5206\u4eab\u7ed9\u60a8\u7684\u597d\u53cb\uff01",
		copyTip: "\u8bf7\u6309Ctrl+C\u590d\u5236\uff0c\u7136\u540e\u60a8\u53ef\u4ee5\u7c98\u8d34\u5230QQ/MSN\u4e0a\u5206\u4eab\u7ed9\u60a8\u7684\u597d\u53cb\uff01",
		bookmarkTip: "\u6309\u4e86OK\u4ee5\u540e\uff0c\u8bf7\u6309Ctrl+D\uff08Macs\u7528Command+D\uff09\u3002",
		confirmClose: "\u5173\u95ed\u540e\uff0c\u8be5\u5206\u4eab\u6309\u94ae30\u5206\u949f\u5c06\u4e0d\u518d\u51fa\u73b0\uff0c\u60a8\u4e5f\u65e0\u6cd5\u4f7f\u7528\u5206\u4eab\u529f\u80fd\uff0c\u786e\u5b9a\u5417\uff1f"
	}
})();


