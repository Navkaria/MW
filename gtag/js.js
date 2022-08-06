// Copyright 2012 Google Inc. All rights reserved.
(function() {

   var data = {
       "resource": {
           "version": "1",

           "macros": [{
               "function": "__e"
           }, {
               "function": "__cid"
           }],
           "tags": [{
               "function": "__rep",
               "once_per_event": true,
               "vtp_containerId": ["macro", 1],
               "tag_id": 1
           }],
           "predicates": [{
               "function": "_eq",
               "arg0": ["macro", 0],
               "arg1": "gtm.js"
           }],
           "rules": [[["if", 0], ["add", 0]]]
       },
       "runtime": []

   };

   /*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
   var h, aa = function(a) {
       var b = 0;
       return function() {
           return b < a.length ? {
               done: !1,
               value: a[b++]
           } : {
               done: !0
           }
       }
   }, ba = "function" == typeof Object.create ? Object.create : function(a) {
       var b = function() {};
       b.prototype = a;
       return new b
   }
   , da;
   if ("function" == typeof Object.setPrototypeOf)
       da = Object.setPrototypeOf;
   else {
       var ea;
       a: {
           var fa = {
               a: !0
           }
             , ha = {};
           try {
               ha.__proto__ = fa;
               ea = ha.a;
               break a
           } catch (a) {}
           ea = !1
       }
       da = ea ? function(a, b) {
           a.__proto__ = b;
           if (a.__proto__ !== b)
               throw new TypeError(a + " is not extensible");
           return a
       }
       : null
   }
   var ia = da
     , ja = function(a, b) {
       a.prototype = ba(b.prototype);
       a.prototype.constructor = a;
       if (ia)
           ia(a, b);
       else
           for (var c in b)
               if ("prototype" != c)
                   if (Object.defineProperties) {
                       var d = Object.getOwnPropertyDescriptor(b, c);
                       d && Object.defineProperty(a, c, d)
                   } else
                       a[c] = b[c];
       a.xk = b.prototype
   }
     , ka = this || self
     , la = function(a) {
       return a
   };
   var ma = function() {}
     , na = function(a) {
       return "function" === typeof a
   }
     , k = function(a) {
       return "string" === typeof a
   }
     , oa = function(a) {
       return "number" === typeof a && !isNaN(a)
   }
     , pa = Array.isArray
     , qa = function(a, b) {
       if (a && pa(a))
           for (var c = 0; c < a.length; c++)
               if (a[c] && b(a[c]))
                   return a[c]
   }
     , ra = function(a, b) {
       if (!oa(a) || !oa(b) || a > b)
           a = 0,
           b = 2147483647;
       return Math.floor(Math.random() * (b - a + 1) + a)
   }
     , ta = function(a, b) {
       for (var c = new sa, d = 0; d < a.length; d++)
           c.set(a[d], !0);
       for (var e = 0; e < b.length; e++)
           if (c.get(b[e]))
               return !0;
       return !1
   }
     , B = function(a, b) {
       for (var c in a)
           Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
   }
     , wa = function(a) {
       return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
   }
     , xa = function(a) {
       return Math.round(Number(a)) || 0
   }
     , ya = function(a) {
       return "false" === String(a).toLowerCase() ? !1 : !!a
   }
     , za = function(a) {
       var b = [];
       if (pa(a))
           for (var c = 0; c < a.length; c++)
               b.push(String(a[c]));
       return b
   }
     , Aa = function(a) {
       return a ? a.replace(/^\s+|\s+$/g, "") : ""
   }
     , Ca = function() {
       return new Date(Date.now())
   }
     , G = function() {
       return Ca().getTime()
   }
     , sa = function() {
       this.prefix = "gtm.";
       this.values = {}
   };
   sa.prototype.set = function(a, b) {
       this.values[this.prefix + a] = b
   }
   ;
   sa.prototype.get = function(a) {
       return this.values[this.prefix + a]
   }
   ;
   var Da = function(a, b, c) {
       return a && a.hasOwnProperty(b) ? a[b] : c
   }
     , Ea = function(a) {
       var b = a;
       return function() {
           if (b) {
               var c = b;
               b = void 0;
               try {
                   c()
               } catch (d) {}
           }
       }
   }
     , Fa = function(a, b) {
       for (var c in b)
           b.hasOwnProperty(c) && (a[c] = b[c])
   }
     , Ga = function(a) {
       for (var b in a)
           if (a.hasOwnProperty(b))
               return !0;
       return !1
   }
     , Ha = function(a, b) {
       for (var c = [], d = 0; d < a.length; d++)
           c.push(a[d]),
           c.push.apply(c, b[a[d]] || []);
       return c
   }
     , Ia = function(a, b) {
       for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
           d = d[e[f]] = {};
       d[e[e.length - 1]] = b;
       return c
   }
     , Ja = /^\w{1,9}$/
     , Ka = function(a, b) {
       a = a || {};
       b = b || ",";
       var c = [];
       B(a, function(d, e) {
           Ja.test(d) && e && c.push(d)
       });
       return c.join(b)
   }
     , La = function(a, b) {
       function c() {
           ++d === b && (e(),
           e = null,
           c.done = !0)
       }
       var d = 0
         , e = a;
       c.done = !1;
       return c
   };
   /*

SPDX-License-Identifier: Apache-2.0
*/
   var Ma, Na = function() {
       if (void 0 === Ma) {
           var a = null
             , b = ka.trustedTypes;
           if (b && b.createPolicy) {
               try {
                   a = b.createPolicy("goog#html", {
                       createHTML: la,
                       createScript: la,
                       createScriptURL: la
                   })
               } catch (c) {
                   ka.console && ka.console.error(c.message)
               }
               Ma = a
           } else
               Ma = a
       }
       return Ma
   };
   var Qa = function(a, b) {
       this.h = b === Pa ? a : ""
   };
   Qa.prototype.toString = function() {
       return this.h + ""
   }
   ;
   var Pa = {};
   var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
   function Sa() {
       var a = ka.navigator;
       if (a) {
           var b = a.userAgent;
           if (b)
               return b
       }
       return ""
   }
   function Ta(a) {
       return -1 != Sa().indexOf(a)
   }
   ;function Ua() {
       return Ta("Firefox") || Ta("FxiOS")
   }
   function Va() {
       return (Ta("Chrome") || Ta("CriOS")) && !Ta("Edge") || Ta("Silk")
   }
   ;var Wa = {}
     , Xa = function(a, b) {
       this.h = b === Wa ? a : ""
   };
   Xa.prototype.toString = function() {
       return this.h.toString()
   }
   ;
   var Ya = function(a) {
       return a instanceof Xa && a.constructor === Xa ? a.h : "type_error:SafeHtml"
   }
     , Za = function(a) {
       var b = a
         , c = Na()
         , d = c ? c.createHTML(b) : b;
       return new Xa(d,Wa)
   };
   function $a(a) {
       if ("script" === a.tagName.toLowerCase())
           throw Error("Use setTextContent with a SafeScript.");
       if ("style" === a.tagName.toLowerCase())
           throw Error("Use setTextContent with a SafeStyleSheet.");
   }
   ;var H = window
     , I = document
     , ab = navigator
     , bb = I.currentScript && I.currentScript.src
     , cb = function(a, b) {
       var c = H[a];
       H[a] = void 0 === c ? b : c;
       return H[a]
   }
     , db = function(a, b) {
       b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
           a.readyState in {
               loaded: 1,
               complete: 1
           } && (a.onreadystatechange = null,
           b())
       }
       )
   }
     , eb = {
       async: 1,
       nonce: 1,
       onerror: 1,
       onload: 1,
       src: 1,
       type: 1
   }
     , fb = {
       onload: 1,
       src: 1,
       width: 1,
       height: 1,
       style: 1
   };
   function gb(a, b, c) {
       b && B(b, function(d, e) {
           d = d.toLowerCase();
           c.hasOwnProperty(d) || a.setAttribute(d, e)
       })
   }
   var hb = function(a, b, c, d, e) {
       var f = I.createElement("script");
       gb(f, d, eb);
       f.type = "text/javascript";
       f.async = !0;
       var g, l = a, m = Na(), n = m ? m.createScriptURL(l) : l;
       g = new Qa(n,Pa);
       f.src = g instanceof Qa && g.constructor === Qa ? g.h : "type_error:TrustedResourceUrl";
       var p, q, r, u = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
       (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
       db(f, b);
       c && (f.onerror = c);
       if (e)
           e.appendChild(f);
       else {
           var t = I.getElementsByTagName("script")[0] || I.body || I.head;
           t.parentNode.insertBefore(f, t)
       }
       return f
   }
     , ib = function() {
       if (bb) {
           var a = bb.toLowerCase();
           if (0 === a.indexOf("https://"))
               return 2;
           if (0 === a.indexOf("http://"))
               return 3
       }
       return 1
   }
     , jb = function(a, b, c, d, e) {
       var f;
       f = void 0 === f ? !0 : f;
       var g = e
         , l = !1;
       g || (g = I.createElement("iframe"),
       l = !0);
       gb(g, c, fb);
       d && B(d, function(n, p) {
           g.dataset[n] = p
       });
       f && (g.height = "0",
       g.width = "0",
       g.style.display = "none",
       g.style.visibility = "hidden");
       if (l) {
           var m = I.body && I.body.lastChild || I.body || I.head;
           m.parentNode.insertBefore(g, m)
       }
       db(g, b);
       void 0 !== a && (g.src = a);
       return g
   }
     , kb = function(a, b, c) {
       var d = new Image(1,1);
       d.onload = function() {
           d.onload = null;
           b && b()
       }
       ;
       d.onerror = function() {
           d.onerror = null;
           c && c()
       }
       ;
       d.src = a;
       return d
   }
     , lb = function(a, b, c, d) {
       a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
   }
     , mb = function(a, b, c) {
       a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
   }
     , L = function(a) {
       H.setTimeout(a, 0)
   }
     , nb = function(a, b) {
       return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
   }
     , ob = function(a) {
       var b = a.innerText || a.textContent || "";
       b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
       b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
       return b
   }
     , pb = function(a) {
       var b = I.createElement("div")
         , c = b
         , d = Za("A<div>" + a + "</div>");
       void 0 !== c.tagName && $a(c);
       c.innerHTML = Ya(d);
       b = b.lastChild;
       for (var e = []; b.firstChild; )
           e.push(b.removeChild(b.firstChild));
       return e
   }
     , qb = function(a, b, c) {
       c = c || 100;
       for (var d = {}, e = 0; e < b.length; e++)
           d[b[e]] = !0;
       for (var f = a, g = 0; f && g <= c; g++) {
           if (d[String(f.tagName).toLowerCase()])
               return f;
           f = f.parentElement
       }
       return null
   }
     , rb = function(a) {
       var b;
       try {
           b = ab.sendBeacon && ab.sendBeacon(a)
       } catch (c) {}
       b || kb(a)
   }
     , sb = function(a, b) {
       var c = a[b];
       c && "string" === typeof c.animVal && (c = c.animVal);
       return c
   };
   /*
jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
   var tb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
     , ub = function(a) {
       if (null == a)
           return String(a);
       var b = tb.exec(Object.prototype.toString.call(Object(a)));
       return b ? b[1].toLowerCase() : "object"
   }
     , vb = function(a, b) {
       return Object.prototype.hasOwnProperty.call(Object(a), b)
   }
     , wb = function(a) {
       if (!a || "object" != ub(a) || a.nodeType || a == a.window)
           return !1;
       try {
           if (a.constructor && !vb(a, "constructor") && !vb(a.constructor.prototype, "isPrototypeOf"))
               return !1
       } catch (c) {
           return !1
       }
       for (var b in a)
           ;
       return void 0 === b || vb(a, b)
   }
     , O = function(a, b) {
       var c = b || ("array" == ub(a) ? [] : {}), d;
       for (d in a)
           if (vb(a, d)) {
               var e = a[d];
               "array" == ub(e) ? ("array" != ub(c[d]) && (c[d] = []),
               c[d] = O(e, c[d])) : wb(e) ? (wb(c[d]) || (c[d] = {}),
               c[d] = O(e, c[d])) : c[d] = e
           }
       return c
   };
   var xb = function(a) {
       if (void 0 === a || pa(a) || wb(a))
           return !0;
       switch (typeof a) {
       case "boolean":
       case "number":
       case "string":
       case "function":
           return !0
       }
       return !1
   };
   var yb = function() {
       var a = function(b) {
           return {
               toString: function() {
                   return b
               }
           }
       };
       return {
           Rh: a("consent"),
           Sh: a("consent_always_fire"),
           Ef: a("convert_case_to"),
           Ff: a("convert_false_to"),
           Gf: a("convert_null_to"),
           Hf: a("convert_true_to"),
           If: a("convert_undefined_to"),
           lk: a("debug_mode_metadata"),
           zb: a("function"),
           Me: a("instance_name"),
           Gi: a("live_only"),
           Hi: a("malware_disabled"),
           Ii: a("metadata"),
           Li: a("original_activity_id"),
           pk: a("original_vendor_template_id"),
           nk: a("once_on_load"),
           Ki: a("once_per_event"),
           Lg: a("once_per_load"),
           qk: a("priority_override"),
           rk: a("respected_consent_types"),
           Rg: a("setup_tags"),
           Tg: a("tag_id"),
           Ug: a("teardown_tags")
       }
   }();
   var Wb;
   var Xb = [], Yb = [], Zb = [], $b = [], ac = [], bc = {}, cc, dc, ec, hc = function(a, b) {
       var c = a["function"]
         , d = b && b.event;
       if (!c)
           throw Error("Error: No function name given for function call.");
       var e = bc[c], f = {}, g;
       for (g in a)
           if (a.hasOwnProperty(g))
               if (0 === g.indexOf("vtp_"))
                   e && d && d.gh && d.gh(a[g]),
                   f[void 0 !== e ? g : g.substr(4)] = a[g];
               else if (g === yb.Sh.toString() && a[g]) {}
       e && d && d.fh && (f.vtp_gtmCachedValues = d.fh);
       if (b) {
           if (null == b.name) {
               var l;
               a: {
                   var m = b.index;
                   if (null == m)
                       l = "";
                   else {
                       var n;
                       switch (b.type) {
                       case 2:
                           n = Xb[m];
                           break;
                       case 1:
                           n = $b[m];
                           break;
                       default:
                           l = "";
                           break a
                       }
                       var p = n && n[yb.Me];
                       l = p ? String(p) : ""
                   }
               }
               b.name = l
           }
           e && (f.vtp_gtmEntityIndex = b.index,
           f.vtp_gtmEntityName = b.name)
       }
       return void 0 !== e ? e(f) : Wb(c, f, b)
   }, jc = function(a, b, c) {
       c = c || [];
       var d = {}, e;
       for (e in a)
           a.hasOwnProperty(e) && (d[e] = ic(a[e], b, c));
       return d
   }, ic = function(a, b, c) {
       if (pa(a)) {
           var d;
           switch (a[0]) {
           case "function_id":
               return a[1];
           case "list":
               d = [];
               for (var e = 1; e < a.length; e++)
                   d.push(ic(a[e], b, c));
               return d;
           case "macro":
               var f = a[1];
               if (c[f])
                   return;
               var g = Xb[f];
               if (!g || b.ef(g))
                   return;
               c[f] = !0;
               var l = String(g[yb.Me]);
               try {
                   var m = jc(g, b, c);
                   m.vtp_gtmEventId = b.id;
                   b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                   d = hc(m, {
                       event: b,
                       index: f,
                       type: 2,
                       name: l
                   });
                   ec && (d = ec.Xi(d, m))
               } catch (w) {
                   b.uh && b.uh(w, Number(f), l),
                   d = !1
               }
               c[f] = !1;
               return d;
           case "map":
               d = {};
               for (var n = 1; n < a.length; n += 2)
                   d[ic(a[n], b, c)] = ic(a[n + 1], b, c);
               return d;
           case "template":
               d = [];
               for (var p = !1, q = 1; q < a.length; q++) {
                   var r = ic(a[q], b, c);
                   dc && (p = p || r === dc.Qd);
                   d.push(r)
               }
               return dc && p ? dc.Yi(d) : d.join("");
           case "escape":
               d = ic(a[1], b, c);
               if (dc && pa(a[1]) && "macro" === a[1][0] && dc.wj(a))
                   return dc.Nj(d);
               d = String(d);
               for (var u = 2; u < a.length; u++)
                   zb[a[u]] && (d = zb[a[u]](d));
               return d;
           case "tag":
               var t = a[1];
               if (!$b[t])
                   throw Error("Unable to resolve tag reference " + t + ".");
               return d = {
                   mh: a[2],
                   index: t
               };
           case "zb":
               var v = {
                   arg0: a[2],
                   arg1: a[3],
                   ignore_case: a[5]
               };
               v["function"] = a[1];
               var x = kc(v, b, c)
                 , z = !!a[4];
               return z || 2 !== x ? z !== (1 === x) : null;
           default:
               throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
           }
       }
       return a
   }, kc = function(a, b, c) {
       try {
           return cc(jc(a, b, c))
       } catch (d) {
           JSON.stringify(a)
       }
       return 2
   };
   var nc = function(a) {
       function b(r) {
           for (var u = 0; u < r.length; u++)
               d[r[u]] = !0
       }
       for (var c = [], d = [], e = lc(a), f = 0; f < Yb.length; f++) {
           var g = Yb[f]
             , l = mc(g, e);
           if (l) {
               for (var m = g.add || [], n = 0; n < m.length; n++)
                   c[m[n]] = !0;
               b(g.block || [])
           } else
               null === l && b(g.block || []);
       }
       for (var p = [], q = 0; q < $b.length; q++)
           c[q] && !d[q] && (p[q] = !0);
       return p
   }
     , mc = function(a, b) {
       for (var c = a["if"] || [], d = 0; d < c.length; d++) {
           var e = b(c[d]);
           if (0 === e)
               return !1;
           if (2 === e)
               return null
       }
       for (var f = a.unless || [], g = 0; g < f.length; g++) {
           var l = b(f[g]);
           if (2 === l)
               return null;
           if (1 === l)
               return !1
       }
       return !0
   }
     , lc = function(a) {
       var b = [];
       return function(c) {
           void 0 === b[c] && (b[c] = kc(Zb[c], a));
           return b[c]
       }
   };
   var oc = {
       Xi: function(a, b) {
           b[yb.Ef] && "string" === typeof a && (a = 1 == b[yb.Ef] ? a.toLowerCase() : a.toUpperCase());
           b.hasOwnProperty(yb.Gf) && null === a && (a = b[yb.Gf]);
           b.hasOwnProperty(yb.If) && void 0 === a && (a = b[yb.If]);
           b.hasOwnProperty(yb.Hf) && !0 === a && (a = b[yb.Hf]);
           b.hasOwnProperty(yb.Ff) && !1 === a && (a = b[yb.Ff]);
           return a
       }
   };

   var Mc = function(a) {
       return Lc ? I.querySelectorAll(a) : null
   }
     , Nc = function(a, b) {
       if (!Lc)
           return null;
       if (Element.prototype.closest)
           try {
               return a.closest(b)
           } catch (e) {
               return null
           }
       var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
         , d = a;
       if (!I.documentElement.contains(d))
           return null;
       do {
           try {
               if (c.call(d, b))
                   return d
           } catch (e) {
               break
           }
           d = d.parentElement || d.parentNode
       } while (null !== d && 1 === d.nodeType);
       return null
   }
     , Oc = !1;
   if (I.querySelectorAll)
       try {
           var Pc = I.querySelectorAll(":root");
           Pc && 1 == Pc.length && Pc[0] == I.documentElement && (Oc = !0)
       } catch (a) {}
   var Lc = Oc;
   var Qc = {}
     , Rc = function(a, b) {
       Qc[a] = Qc[a] || [];
       Qc[a][b] = !0
   }
     , Sc = function(a) {
       for (var b = [], c = Qc[a] || [], d = 0; d < c.length; d++)
           c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
       for (var e = 0; e < b.length; e++)
           b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
       return b.join("")
   }
     , Tc = function() {
       for (var a = [], b = Qc.GA4_EVENT || [], c = 0; c < b.length; c++)
           b[c] && a.push(c);
       return 0 < a.length ? a : void 0
   };
   var T = function(a) {
       Rc("GTM", a)
   };
   var V = {
       g: {
           D: "ad_storage",
           N: "analytics_storage",
           Bf: "region",
           Cf: "consent_updated",
           Df: "wait_for_update",
           Vh: "app_remove",
           Wh: "app_store_refund",
           Xh: "app_store_subscription_cancel",
           Yh: "app_store_subscription_convert",
           Zh: "app_store_subscription_renew",
           Jf: "add_payment_info",
           ai: "add_shipping_info",
           Lb: "add_to_cart",
           Mb: "remove_from_cart",
           bi: "view_cart",
           sb: "begin_checkout",
           xe: "select_item",
           tb: "view_item_list",
           ye: "select_promotion",
           Nb: "view_promotion",
           va: "purchase",
           Ob: "refund",
           Ea: "view_item",
           Kf: "add_to_wishlist",
           ci: "first_open",
           di: "first_visit",
           wa: "gtag.config",
           Fa: "gtag.get",
           ei: "in_app_purchase",
           vc: "page_view",
           fi: "session_start",
           ze: "user_engagement",
           Pb: "gclid",
           ca: "ads_data_redaction",
           T: "allow_ad_personalization_signals",
           Ae: "allow_custom_scripts",
           gi: "allow_display_features",
           wc: "allow_enhanced_conversions",
           xc: "allow_google_signals",
           xa: "allow_interest_groups",
           ud: "auid",
           hi: "auto_detection_enabled",
           Wa: "aw_remarketing",
           vd: "aw_remarketing_only",
           yc: "discount",
           zc: "aw_feed_country",
           Ac: "aw_feed_language",
           U: "items",
           Bc: "aw_merchant_id",
           Lf: "aw_basket_type",
           wd: "campaign_content",
           xd: "campaign_id",
           yd: "campaign_medium",
           zd: "campaign_name",
           Cc: "campaign",
           Ad: "campaign_source",
           Bd: "campaign_term",
           ya: "client_id",
           ii: "content_group",
           ji: "content_type",
           Ga: "conversion_cookie_prefix",
           Dc: "conversion_id",
           Xa: "conversion_label",
           ma: "conversion_linker",
           Be: "conversion_api",
           na: "cookie_domain",
           za: "cookie_expires",
           La: "cookie_flags",
           Qb: "cookie_name",
           jb: "cookie_path",
           Ha: "cookie_prefix",
           ub: "cookie_update",
           Rb: "country",
           ka: "currency",
           Ec: "customer_lifetime_value",
           Fc: "custom_map",
           ki: "debug_mode",
           V: "developer_id",
           Mf: "disable_merchant_reported_purchases",
           li: "dc_custom_params",
           mi: "dc_natural_search",
           Ce: "dynamic_event_settings",
           ni: "affiliation",
           Nf: "checkout_option",
           Of: "checkout_step",
           oi: "coupon",
           De: "list_name",
           ri: "promotions",
           Gc: "shipping",
           Pf: "tax",
           Cd: "engagement_time_msec",
           kb: "enhanced_client_id",
           Hc: "enhanced_conversions",
           Qf: "enhanced_conversions_automatic_settings",
           Rf: "enhanced_conversions_mode",
           Ic: "estimated_delivery_date",
           Jc: "euid_logged_in_state",
           Sb: "event_callback",
           Tb: "event_developer_id_string",
           Sf: "event",
           Dd: "event_settings",
           Ed: "event_timeout",
           si: "experiments",
           Ee: "firebase_id",
           Kc: "first_party_collection",
           Fd: "_x_20",
           vb: "_x_19",
           Tf: "fledge",
           Uf: "gac_gclid",
           Gd: "gac_wbraid",
           Vf: "gac_wbraid_multiple_conversions",
           Lc: "ga_restrict_domain",
           Fe: "ga_temp_client_id",
           Wf: "gdpr_applies",
           Xf: "geo_granularity",
           Ya: "value_callback",
           Ra: "value_key",
           Ub: "global_developer_id_string",
           mk: "google_ono",
           lb: "google_signals",
           Hd: "google_tld",
           Id: "groups",
           Yf: "gsa_experiment_id",
           Zf: "iframe_state",
           Jd: "ignore_referrer",
           Ge: "internal_traffic_results",
           ag: "is_passthrough",
           Ma: "language",
           He: "legacy_developer_id_string",
           oa: "linker",
           Vb: "accept_incoming",
           Wb: "decorate_forms",
           P: "domains",
           Mc: "url_position",
           cg: "method",
           Xb: "new_customer",
           dg: "non_interaction",
           ui: "optimize_id",
           Na: "page_location",
           Ie: "page_path",
           Sa: "page_referrer",
           Yb: "page_title",
           eg: "passengers",
           fg: "phone_conversion_callback",
           vi: "phone_conversion_country_code",
           gg: "phone_conversion_css_class",
           wi: "phone_conversion_ids",
           hg: "phone_conversion_number",
           ig: "phone_conversion_options",
           jg: "quantity",
           Kd: "redact_device_info",
           kg: "redact_enhanced_user_id",
           xi: "redact_ga_client_id",
           yi: "redact_user_id",
           Ld: "referral_exclusion_definition",
           nb: "restricted_data_processing",
           zi: "retoken",
           lg: "screen_name",
           wb: "screen_resolution",
           Ai: "search_term",
           qa: "send_page_view",
           xb: "send_to",
           Nc: "session_duration",
           Oc: "session_engaged",
           Md: "session_engaged_time",
           Za: "session_id",
           Pc: "session_number",
           Zb: "delivery_postal_code",
           mg: "tc_privacy_string",
           ng: "temporary_client_id",
           Bi: "tracking_id",
           Je: "traffic_type",
           Ia: "transaction_id",
           Z: "transport_url",
           og: "trip_type",
           Qc: "update",
           ab: "url_passthrough",
           pg: "_user_agent_architecture",
           qg: "_user_agent_bitness",
           rg: "_user_agent_full_version_list",
           sg: "_user_agent_model",
           ug: "_user_agent_platform",
           vg: "_user_agent_platform_version",
           wg: "_user_agent_wow64",
           ra: "user_data",
           xg: "user_data_auto_latency",
           yg: "user_data_auto_meta",
           zg: "user_data_auto_multi",
           Ag: "user_data_auto_selectors",
           Bg: "user_data_auto_status",
           yb: "user_data_settings",
           Aa: "user_id",
           Oa: "user_properties",
           Cg: "us_privacy_string",
           ia: "value",
           Nd: "wbraid",
           Dg: "wbraid_multiple_conversions",
           Fg: "_host_name",
           Gg: "_in_page_command",
           Hg: "_is_linker_valid",
           Ig: "_is_passthrough_cid",
           Jg: "non_personalized_ads"
       }
   }
     , nd = {}
     , od = Object.freeze((nd[V.g.T] = 1,
   nd[V.g.wc] = 1,
   nd[V.g.xc] = 1,
   nd[V.g.U] = 1,
   nd[V.g.na] = 1,
   nd[V.g.za] = 1,
   nd[V.g.La] = 1,
   nd[V.g.Qb] = 1,
   nd[V.g.jb] = 1,
   nd[V.g.Ha] = 1,
   nd[V.g.ub] = 1,
   nd[V.g.Fc] = 1,
   nd[V.g.V] = 1,
   nd[V.g.Ce] = 1,
   nd[V.g.Sb] = 1,
   nd[V.g.Dd] = 1,
   nd[V.g.Ed] = 1,
   nd[V.g.Kc] = 1,
   nd[V.g.Lc] = 1,
   nd[V.g.lb] = 1,
   nd[V.g.Hd] = 1,
   nd[V.g.Id] = 1,
   nd[V.g.Ge] = 1,
   nd[V.g.oa] = 1,
   nd[V.g.Ld] = 1,
   nd[V.g.nb] = 1,
   nd[V.g.qa] = 1,
   nd[V.g.xb] = 1,
   nd[V.g.Nc] = 1,
   nd[V.g.Md] = 1,
   nd[V.g.Zb] = 1,
   nd[V.g.Z] = 1,
   nd[V.g.Qc] = 1,
   nd[V.g.yb] = 1,
   nd[V.g.Oa] = 1,
   nd))
     , pd = Object.freeze([V.g.Na, V.g.Sa, V.g.Yb, V.g.Ma, V.g.lg, V.g.Aa, V.g.Ee, V.g.ii])
     , qd = {}
     , rd = Object.freeze((qd[V.g.Vh] = 1,
   qd[V.g.Wh] = 1,
   qd[V.g.Xh] = 1,
   qd[V.g.Yh] = 1,
   qd[V.g.Zh] = 1,
   qd[V.g.ci] = 1,
   qd[V.g.di] = 1,
   qd[V.g.ei] = 1,
   qd[V.g.fi] = 1,
   qd[V.g.ze] = 1,
   qd))
     , sd = {}
     , td = Object.freeze((sd[V.g.Jf] = 1,
   sd[V.g.ai] = 1,
   sd[V.g.Lb] = 1,
   sd[V.g.Mb] = 1,
   sd[V.g.bi] = 1,
   sd[V.g.sb] = 1,
   sd[V.g.xe] = 1,
   sd[V.g.tb] = 1,
   sd[V.g.ye] = 1,
   sd[V.g.Nb] = 1,
   sd[V.g.va] = 1,
   sd[V.g.Ob] = 1,
   sd[V.g.Ea] = 1,
   sd[V.g.Kf] = 1,
   sd))
     , ud = Object.freeze([V.g.T, V.g.xc, V.g.ub])
     , vd = Object.freeze([].concat(ud))
     , wd = Object.freeze([V.g.za, V.g.Ed, V.g.Nc, V.g.Md, V.g.Cd])
     , xd = Object.freeze([].concat(wd))
     , yd = {}
     , zd = (yd[V.g.D] = "1",
   yd[V.g.N] = "2",
   yd)
     , Ad = {}
     , Bd = Object.freeze((Ad[V.g.T] = 1,
   Ad[V.g.wc] = 1,
   Ad[V.g.xa] = 1,
   Ad[V.g.Wa] = 1,
   Ad[V.g.vd] = 1,
   Ad[V.g.yc] = 1,
   Ad[V.g.zc] = 1,
   Ad[V.g.Ac] = 1,
   Ad[V.g.U] = 1,
   Ad[V.g.Bc] = 1,
   Ad[V.g.Ga] = 1,
   Ad[V.g.ma] = 1,
   Ad[V.g.na] = 1,
   Ad[V.g.za] = 1,
   Ad[V.g.La] = 1,
   Ad[V.g.Ha] = 1,
   Ad[V.g.ka] = 1,
   Ad[V.g.Ec] = 1,
   Ad[V.g.V] = 1,
   Ad[V.g.Mf] = 1,
   Ad[V.g.Hc] = 1,
   Ad[V.g.Ic] = 1,
   Ad[V.g.Ee] = 1,
   Ad[V.g.Kc] = 1,
   Ad[V.g.Ma] = 1,
   Ad[V.g.Xb] = 1,
   Ad[V.g.Na] = 1,
   Ad[V.g.Sa] = 1,
   Ad[V.g.fg] = 1,
   Ad[V.g.gg] = 1,
   Ad[V.g.hg] = 1,
   Ad[V.g.ig] = 1,
   Ad[V.g.nb] = 1,
   Ad[V.g.qa] = 1,
   Ad[V.g.xb] = 1,
   Ad[V.g.Zb] = 1,
   Ad[V.g.Ia] = 1,
   Ad[V.g.Z] = 1,
   Ad[V.g.Qc] = 1,
   Ad[V.g.ab] = 1,
   Ad[V.g.ra] = 1,
   Ad[V.g.Aa] = 1,
   Ad[V.g.ia] = 1,
   Ad));
   Object.freeze(V.g);
   var Cd = {}
     , Dd = H.google_tag_manager = H.google_tag_manager || {}
     , Ed = Math.random();
   Cd.Vd = "830";
   Cd.ba = "dataLayer";
   Cd.Uh = "ChAI8P+ylwYQtdHr6d7IsIY5EiYAUe5SrDtY8abH3NO1u8iynHiVtbT4upn4PbHAqqgqWPPFcNQjxRoCGM4\x3d";
   var Fd = {
       __cl: !0,
       __ecl: !0,
       __ehl: !0,
       __evl: !0,
       __fal: !0,
       __fil: !0,
       __fsl: !0,
       __hl: !0,
       __jel: !0,
       __lcl: !0,
       __sdl: !0,
       __tl: !0,
       __ytl: !0
   }, Gd = {
       __paused: !0,
       __tg: !0
   }, Hd;
   for (Hd in Fd)
       Fd.hasOwnProperty(Hd) && (Gd[Hd] = !0);
   Cd.uc = "www.googletagmanager.com";
   var Jd, Kd = Cd.uc + "/gtm.js";
   Kd = Cd.uc + "/gtag/js";
   Jd = Kd;
   var Ld = ya("")
     , Md = ya("")
     , Nd = null
     , Od = null
     , Pd = {}
     , Qd = {}
     , Rd = function() {
       var a = Dd.sequence || 1;
       Dd.sequence = a + 1;
       return a
   };
   Cd.Th = "";
   var Sd = "";
   Cd.Wd = Sd;
   var Td = new sa
     , Ud = {}
     , Vd = {}
     , Yd = {
       name: Cd.ba,
       set: function(a, b) {
           O(Ia(a, b), Ud);
           Wd()
       },
       get: function(a) {
           return Xd(a, 2)
       },
       reset: function() {
           Td = new sa;
           Ud = {};
           Wd()
       }
   }
     , Xd = function(a, b) {
       return 2 != b ? Td.get(a) : Zd(a)
   }
     , Zd = function(a) {
       var b, c = a.split(".");
       b = b || [];
       for (var d = Ud, e = 0; e < c.length; e++) {
           if (null === d)
               return !1;
           if (void 0 === d)
               break;
           d = d[c[e]];
           if (-1 !== b.indexOf(d))
               return
       }
       return d
   }
     , $d = function(a, b) {
       Vd.hasOwnProperty(a) || (Td.set(a, b),
       O(Ia(a, b), Ud),
       Wd())
   }
     , Wd = function(a) {
       B(Vd, function(b, c) {
           Td.set(b, c);
           O(Ia(b), Ud);
           O(Ia(b, c), Ud);
           a && delete Vd[b]
       })
   }
     , ae = function(a, b) {
       var c, d = 1 !== (void 0 === b ? 2 : b) ? Zd(a) : Td.get(a);
       "array" === ub(d) || "object" === ub(d) ? c = O(d) : c = d;
       return c
   };
   var be, ce = !1, de = function(a) {
       if (!ce) {
           ce = !0;
           be = be || {}
       }
       return be[a]
   };
   var ee = function() {
       var a = H.screen;
       return {
           width: a ? a.width : 0,
           height: a ? a.height : 0
       }
   }
     , fe = function(a) {
       if (I.hidden)
           return !0;
       var b = a.getBoundingClientRect();
       if (b.top == b.bottom || b.left == b.right || !H.getComputedStyle)
           return !0;
       var c = H.getComputedStyle(a, null);
       if ("hidden" === c.visibility)
           return !0;
       for (var d = a, e = c; d; ) {
           if ("none" === e.display)
               return !0;
           var f = e.opacity
             , g = e.filter;
           if (g) {
               var l = g.indexOf("opacity(");
               0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)),
               "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
               f = Math.min(g, f))
           }
           if (void 0 !== f && 0 >= f)
               return !0;
           (d = d.parentElement) && (e = H.getComputedStyle(d, null))
       }
       return !1
   };
   var oe = /:[0-9]+$/
     , pe = function(a, b, c) {
       for (var d = a.split("&"), e = 0; e < d.length; e++) {
           var f = d[e].split("=");
           if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
               var g = f.slice(1).join("=");
               return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
           }
       }
   }
     , se = function(a, b, c, d, e) {
       b && (b = String(b).toLowerCase());
       if ("protocol" === b || "port" === b)
           a.protocol = qe(a.protocol) || qe(H.location.protocol);
       "port" === b ? a.port = String(Number(a.hostname ? a.port : H.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || H.location.hostname).replace(oe, "").toLowerCase());
       return re(a, b, c, d, e)
   }
     , re = function(a, b, c, d, e) {
       var f, g = qe(a.protocol);
       b && (b = String(b).toLowerCase());
       switch (b) {
       case "url_no_fragment":
           f = te(a);
           break;
       case "protocol":
           f = g;
           break;
       case "host":
           f = a.hostname.replace(oe, "").toLowerCase();
           if (c) {
               var l = /^www\d*\./.exec(f);
               l && l[0] && (f = f.substr(l[0].length))
           }
           break;
       case "port":
           f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
           break;
       case "path":
           a.pathname || a.hostname || Rc("TAGGING", 1);
           f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
           var m = f.split("/");
           0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
           f = m.join("/");
           break;
       case "query":
           f = a.search.replace("?", "");
           e && (f = pe(f, e));
           break;
       case "extension":
           var n = a.pathname.split(".");
           f = 1 < n.length ? n[n.length - 1] : "";
           f = f.split("/")[0];
           break;
       case "fragment":
           f = a.hash.replace("#", "");
           break;
       default:
           f = a && a.href
       }
       return f
   }
     , qe = function(a) {
       return a ? a.replace(":", "").toLowerCase() : ""
   }
     , te = function(a) {
       var b = "";
       if (a && a.href) {
           var c = a.href.indexOf("#");
           b = 0 > c ? a.href : a.href.substr(0, c)
       }
       return b
   }
     , ue = function(a) {
       var b = I.createElement("a");
       a && (b.href = a);
       var c = b.pathname;
       "/" !== c[0] && (a || Rc("TAGGING", 1),
       c = "/" + c);
       var d = b.hostname.replace(oe, "");
       return {
           href: b.href,
           protocol: b.protocol,
           host: b.host,
           hostname: d,
           pathname: c,
           search: b.search,
           hash: b.hash,
           port: b.port
       }
   }
     , ve = function(a) {
       function b(n) {
           var p = n.split("=")[0];
           return 0 > d.indexOf(p) ? n : p + "=0"
       }
       function c(n) {
           return n.split("&").map(b).filter(function(p) {
               return void 0 !== p
           }).join("&")
       }
       var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
         , e = ue(a)
         , f = a.split(/[?#]/)[0]
         , g = e.search
         , l = e.hash;
       "?" === g[0] && (g = g.substring(1));
       "#" === l[0] && (l = l.substring(1));
       g = c(g);
       l = c(l);
       "" !== g && (g = "?" + g);
       "" !== l && (l = "#" + l);
       var m = "" + f + g + l;
       "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
       return m
   };
   var we = {};
   var bf = {}
     , cf = function(a, b) {
       if (H._gtmexpgrp && H._gtmexpgrp.hasOwnProperty(a))
           return H._gtmexpgrp[a];
       void 0 === bf[a] && (bf[a] = Math.floor(Math.random() * b));
       return bf[a]
   };
   var ef = {
       ih: "BY",
       Tj: "BY-MI"
   };
   var ff = new function(a, b) {
       this.h = a;
       this.defaultValue = void 0 === b ? !1 : b
   }
   (1933);
   var gf = function(a) {
       gf[" "](a);
       return a
   };
   gf[" "] = function() {}
   ;
   var jf = function() {
       var a = hf
         , b = "cf";
       if (a.cf && a.hasOwnProperty(b))
           return a.cf;
       var c = new a;
       return a.cf = c
   };
   var hf = function() {
       var a = {};
       this.h = function() {
           var b = ff.h
             , c = ff.defaultValue;
           return null != a[b] ? a[b] : c
       }
       ;
       this.m = function() {
           a[ff.h] = !0
       }
   };
   var kf = [];
   function lf() {
       var a = cb("google_tag_data", {});
       a.ics || (a.ics = {
           entries: {},
           set: mf,
           update: nf,
           addListener: of,
           notifyListeners: pf,
           active: !1,
           usedDefault: !1,
           usedUpdate: !1,
           accessedDefault: !1,
           accessedAny: !1,
           wasSetLate: !1
       });
       return a.ics
   }
   function mf(a, b, c, d, e, f) {
       var g = lf();
       g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
       g.active = !0;
       g.usedDefault = !0;
       if (void 0 != b) {
           var l = g.entries
             , m = l[a] || {}
             , n = m.region
             , p = c && k(c) ? c.toUpperCase() : void 0;
           d = d.toUpperCase();
           e = e.toUpperCase();
           if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
               var q = !!(f && 0 < f && void 0 === m.update)
                 , r = {
                   region: p,
                   initial: "granted" === b,
                   update: m.update,
                   quiet: q
               };
               if ("" !== d || !1 !== m.initial)
                   l[a] = r;
               q && H.setTimeout(function() {
                   l[a] === r && r.quiet && (r.quiet = !1,
                   qf(a),
                   pf(),
                   Rc("TAGGING", 2))
               }, f)
           }
       }
   }
   function nf(a, b) {
       var c = lf();
       c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
       c.active = !0;
       c.usedUpdate = !0;
       if (void 0 != b) {
           var d = rf(c, a)
             , e = c.entries
             , f = e[a] = e[a] || {};
           f.update = "granted" === b;
           var g = rf(c, a);
           f.quiet ? (f.quiet = !1,
           qf(a)) : g !== d && qf(a)
       }
   }
   function of(a, b) {
       kf.push({
           Ve: a,
           ej: b
       })
   }
   function qf(a) {
       for (var b = 0; b < kf.length; ++b) {
           var c = kf[b];
           pa(c.Ve) && -1 !== c.Ve.indexOf(a) && (c.zh = !0)
       }
   }
   function pf(a, b) {
       for (var c = 0; c < kf.length; ++c) {
           var d = kf[c];
           if (d.zh) {
               d.zh = !1;
               try {
                   d.ej({
                       consentEventId: a,
                       consentPriorityId: b
                   })
               } catch (e) {}
           }
       }
   }
   function rf(a, b) {
       var c = a.entries[b] || {};
       return void 0 !== c.update ? c.update : c.initial
   }
   var sf = function(a) {
       var b = lf();
       b.accessedAny = !0;
       return rf(b, a)
   }
     , tf = function(a) {
       var b = lf();
       b.accessedDefault = !0;
       return (b.entries[a] || {}).initial
   }
     , uf = function(a) {
       var b = lf();
       b.accessedAny = !0;
       return !(b.entries[a] || {}).quiet
   }
     , vf = function() {
       if (!jf().h())
           return !1;
       var a = lf();
       a.accessedAny = !0;
       return a.active
   }
     , wf = function() {
       var a = lf();
       a.accessedDefault = !0;
       return a.usedDefault
   }
     , xf = function(a, b) {
       lf().addListener(a, b)
   }
     , yf = function(a, b) {
       lf().notifyListeners(a, b)
   }
     , zf = function(a, b) {
       function c() {
           for (var e = 0; e < b.length; e++)
               if (!uf(b[e]))
                   return !0;
           return !1
       }
       if (c()) {
           var d = !1;
           xf(b, function(e) {
               d || c() || (d = !0,
               a(e))
           })
       } else
           a({})
   }
     , Af = function(a, b) {
       function c() {
           for (var f = [], g = 0; g < d.length; g++) {
               var l = d[g];
               !1 === sf(l) || e[l] || (f.push(l),
               e[l] = !0)
           }
           return f
       }
       var d = k(b) ? [b] : b
         , e = {};
       c().length !== d.length && xf(d, function(f) {
           var g = c();
           0 < g.length && (f.Ve = g,
           a(f))
       })
   };
   function Bf() {}
   function Cf() {}
   ;function Df(a) {
       for (var b = [], c = 0; c < Ef.length; c++) {
           var d = a(Ef[c]);
           b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
       }
       return b.join("")
   }
   var Ef = [V.g.D, V.g.N]
     , Ff = function(a) {
       var b = a[V.g.Bf];
       b && T(40);
       var c = a[V.g.Df];
       c && T(41);
       for (var d = pa(b) ? b : [b], e = {
           oc: 0
       }; e.oc < d.length; e = {
           oc: e.oc
       },
       ++e.oc)
           B(a, function(f) {
               return function(g, l) {
                   if (g !== V.g.Bf && g !== V.g.Df) {
                       var m = d[f.oc]
                         , n = ef.ih
                         , p = ef.Tj;
                       lf().set(g, l, m, n, p, c)
                   }
               }
           }(e))
   }
     , Gf = 0
     , Hf = function(a, b) {
       B(a, function(e, f) {
           lf().update(e, f)
       });
       yf(b.eventId, b.priorityId);
       var c = G()
         , d = c - Gf;
       Gf && 0 <= d && 1E3 > d && T(66);
       Gf = c
   }
     , If = function(a) {
       var b = sf(a);
       return void 0 != b ? b : !0
   }
     , Jf = function() {
       return "G1" + Df(sf)
   }
     , Kf = function(a, b) {
       Af(a, b)
   }
     , Lf = function(a, b) {
       zf(a, b)
   };
   var Mf = function(a) {
       var b = 1, c, d, e;
       if (a)
           for (b = 0,
           d = a.length - 1; 0 <= d; d--)
               e = a.charCodeAt(d),
               b = (b << 6 & 268435455) + e + (e << 14),
               c = b & 266338304,
               b = 0 !== c ? b ^ c >> 21 : b;
       return b
   };
   var Nf = function(a, b, c) {
       for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
           var g = e[f].split("=")
             , l = g[0].replace(/^\s*|\s*$/g, "");
           if (l && l == a) {
               var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
               m && c && (m = decodeURIComponent(m));
               d.push(m)
           }
       }
       return d
   };
   var Of = function(a, b) {
       var c = function() {};
       c.prototype = a.prototype;
       var d = new c;
       a.apply(d, Array.prototype.slice.call(arguments, 1));
       return d
   }
     , Pf = function(a) {
       var b = a;
       return function() {
           if (b) {
               var c = b;
               b = null;
               c()
           }
       }
   };
   function Qf(a) {
       return "null" !== a.origin
   }
   ;var Tf = function(a, b, c, d) {
       return Rf(d) ? Nf(a, String(b || Sf()), c) : []
   }
     , Wf = function(a, b, c, d, e) {
       if (Rf(e)) {
           var f = Uf(a, d, e);
           if (1 === f.length)
               return f[0].id;
           if (0 !== f.length) {
               f = Vf(f, function(g) {
                   return g.ce
               }, b);
               if (1 === f.length)
                   return f[0].id;
               f = Vf(f, function(g) {
                   return g.ed
               }, c);
               return f[0] ? f[0].id : void 0
           }
       }
   };
   function Xf(a, b, c, d) {
       var e = Sf()
         , f = window;
       Qf(f) && (f.document.cookie = a);
       var g = Sf();
       return e != g || void 0 != c && 0 <= Tf(b, g, !1, d).indexOf(c)
   }
   var ag = function(a, b, c) {
       function d(u, t, v) {
           if (null == v)
               return delete g[t],
               u;
           g[t] = v;
           return u + "; " + t + "=" + v
       }
       function e(u, t) {
           if (null == t)
               return delete g[t],
               u;
           g[t] = !0;
           return u + "; " + t
       }
       if (!Rf(c.Ta))
           return 2;
       var f;
       void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
       b = Yf(b),
       f = a + "=" + b);
       var g = {};
       f = d(f, "path", c.path);
       var l;
       c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
       f = d(f, "expires", l);
       f = d(f, "max-age", c.uk);
       f = d(f, "samesite", c.vk);
       c.wk && (f = e(f, "secure"));
       var m = c.domain;
       if (m && "auto" === m.toLowerCase()) {
           for (var n = Zf(), p = 0; p < n.length; ++p) {
               var q = "none" !== n[p] ? n[p] : void 0
                 , r = d(f, "domain", q);
               r = e(r, c.flags);
               if (!$f(q, c.path) && Xf(r, a, b, c.Ta))
                   return 0
           }
           return 1
       }
       m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
       f = e(f, c.flags);
       return $f(m, c.path) ? 1 : Xf(f, a, b, c.Ta) ? 0 : 1
   }
     , bg = function(a, b, c) {
       null == c.path && (c.path = "/");
       c.domain || (c.domain = "auto");
       return ag(a, b, c)
   };
   function Vf(a, b, c) {
       for (var d = [], e = [], f, g = 0; g < a.length; g++) {
           var l = a[g]
             , m = b(l);
           m === c ? d.push(l) : void 0 === f || m < f ? (e = [l],
           f = m) : m === f && e.push(l)
       }
       return 0 < d.length ? d : e
   }
   function Uf(a, b, c) {
       for (var d = [], e = Tf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
           var g = e[f].split(".")
             , l = g.shift();
           if (!b || -1 !== b.indexOf(l)) {
               var m = g.shift();
               m && (m = m.split("-"),
               d.push({
                   id: g.join("."),
                   ce: 1 * m[0] || 1,
                   ed: 1 * m[1] || 1
               }))
           }
       }
       return d
   }
   var Yf = function(a) {
       a && 1200 < a.length && (a = a.substring(0, 1200));
       return a
   }
     , cg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
     , dg = /(^|\.)doubleclick\.net$/i
     , $f = function(a, b) {
       return dg.test(window.document.location.hostname) || "/" === b && cg.test(a)
   }
     , Sf = function() {
       return Qf(window) ? window.document.cookie : ""
   }
     , Zf = function() {
       var a = []
         , b = window.document.location.hostname.split(".");
       if (4 === b.length) {
           var c = b[b.length - 1];
           if (parseInt(c, 10).toString() === c)
               return ["none"]
       }
       for (var d = b.length - 2; 0 <= d; d--)
           a.push(b.slice(d).join("."));
       var e = window.document.location.hostname;
       dg.test(e) || cg.test(e) || a.push("none");
       return a
   }
     , Rf = function(a) {
       if (!jf().h() || !a || !vf())
           return !0;
       if (!uf(a))
           return !1;
       var b = sf(a);
       return null == b ? !0 : !!b
   };
   var eg = function(a) {
       var b = Math.round(2147483647 * Math.random());
       return a ? String(b ^ Mf(a) & 2147483647) : String(b)
   }
     , fg = function(a) {
       return [eg(a), Math.round(G() / 1E3)].join(".")
   }
     , ig = function(a, b, c, d, e) {
       var f = gg(b);
       return Wf(a, f, hg(c), d, e)
   }
     , jg = function(a, b, c, d) {
       var e = "" + gg(c)
         , f = hg(d);
       1 < f && (e += "-" + f);
       return [b, e, a].join(".")
   }
     , gg = function(a) {
       if (!a)
           return 1;
       a = 0 === a.indexOf(".") ? a.substr(1) : a;
       return a.split(".").length
   }
     , hg = function(a) {
       if (!a || "/" === a)
           return 1;
       "/" !== a[0] && (a = "/" + a);
       "/" !== a[a.length - 1] && (a += "/");
       return a.split("/").length - 1
   };
   var kg = function() {
       Dd.dedupe_gclid || (Dd.dedupe_gclid = "" + fg());
       return Dd.dedupe_gclid
   };
   var lg = function() {
       var a = !1;
       return a
   };
   var mg = {
       K: "UA-91632741-1",
       sc: ""
   }
     , ng = {
       wh: "UA-91632741-1",
       xh: "UA-91632741-1"
   }
     , og = function() {
       return ng.wh ? ng.wh.split("|") : [mg.K]
   }
     , pg = function() {
       if (ng.xh)
           return ng.xh.split("|");
       T(84);
       return []
   }
     , qg = function() {
       this.container = {};
       this.destination = {};
       this.canonical = {}
   }
     , Ag = function(a) {
       return rg().container.hasOwnProperty(a)
   };
   function rg() {
       var a = Dd.tidr;
       a || (a = new qg,
       Dd.tidr = a);
       return a
   }
   var Bg;
   if (3 === Cd.Vd.length)
       Bg = "g";
   else {
       var Cg = "G";
       Cg = "g";
       Bg = Cg
   }
   var Dg = {
       "": "n",
       UA: "u",
       AW: "a",
       DC: "d",
       G: "e",
       GF: "f",
       GT: "t",
       HA: "h",
       MC: "m",
       GTM: Bg,
       OPT: "o"
   }
     , Eg = function(a) {
       var b = mg.K.split("-"), c = b[0].toUpperCase(), d = Dg[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
       if (3 === Cd.Vd.length) {
           var g = "w";
           g = lg() ? "s" : "o";
           f = "2" + g
       } else
           f = "";
       return f + d + Cd.Vd + e
   };
   function Fg(a, b) {
       if ("" === a)
           return b;
       var c = Number(a);
       return isNaN(c) ? b : c
   }
   ;var Gg = function(a, b) {
       a.addEventListener && a.addEventListener.call(a, "message", b, !1)
   };
   function Hg() {
       return Ta("iPhone") && !Ta("iPod") && !Ta("iPad")
   }
   function Ig() {
       Hg() || Ta("iPad") || Ta("iPod")
   }
   ;Ta("Opera");
   Ta("Trident") || Ta("MSIE");
   Ta("Edge");
   !Ta("Gecko") || -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") || Ta("Trident") || Ta("MSIE") || Ta("Edge");
   -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile");
   Ta("Macintosh");
   Ta("Windows");
   Ta("Linux") || Ta("CrOS");
   var Jg = ka.navigator || null;
   Jg && (Jg.appVersion || "").indexOf("X11");
   Ta("Android");
   Hg();
   Ta("iPad");
   Ta("iPod");
   Ig();
   Sa().toLowerCase().indexOf("kaios");
   var Kg = function(a, b, c, d) {
       for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
           var g = a.charCodeAt(e - 1);
           if (38 == g || 63 == g) {
               var l = a.charCodeAt(e + f);
               if (!l || 61 == l || 38 == l || 35 == l)
                   return e
           }
           e += f + 1
       }
       return -1
   }
     , Lg = /#|$/
     , Mg = function(a, b) {
       var c = a.search(Lg)
         , d = Kg(a, 0, b, c);
       if (0 > d)
           return null;
       var e = a.indexOf("&", d);
       if (0 > e || e > c)
           e = c;
       d += b.length + 1;
       return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
   }
     , Ng = /[?&]($|#)/
     , Og = function(a, b, c) {
       for (var d, e = a.search(Lg), f = 0, g, l = []; 0 <= (g = Kg(a, f, b, e)); )
           l.push(a.substring(f, g)),
           f = Math.min(a.indexOf("&", g) + 1 || e, e);
       l.push(a.slice(f));
       d = l.join("").replace(Ng, "$1");
       var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
       var p = b + n;
       if (p) {
           var q, r = d.indexOf("#");
           0 > r && (r = d.length);
           var u = d.indexOf("?"), t;
           0 > u || u > r ? (u = r,
           t = "") : t = d.substring(u + 1, r);
           q = [d.slice(0, u), t, d.slice(r)];
           var v = q[1];
           q[1] = p ? v ? v + "&" + p : p : v;
           m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
       } else
           m = d;
       return m
   };
   function Pg(a) {
       if (!a || !I.head)
           return null;
       var b, c;
       c = void 0 === c ? document : c;
       b = c.createElement("meta");
       I.head.appendChild(b);
       b.httpEquiv = "origin-trial";
       b.content = a;
       return b
   }
   var Qg = function() {
       if (H.top == H)
           return 0;
       var a = H.location.ancestorOrigins;
       if (a)
           return a[a.length - 1] == H.location.origin ? 1 : 2;
       var b;
       var c = H.top;
       try {
           var d;
           if (d = !!c && null != c.location.href)
               b: {
                   try {
                       gf(c.foo);
                       d = !0;
                       break b
                   } catch (e) {}
                   d = !1
               }
           b = d
       } catch (e) {
           b = !1
       }
       return b ? 1 : 2
   };
   var Rg = function() {};
   var Sg = function(a) {
       void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
       void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
       return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
   }
     , Tg = function(a, b, c) {
       this.m = a;
       this.h = null;
       this.J = {};
       this.sa = 0;
       this.X = void 0 === b ? 500 : b;
       this.F = void 0 === c ? !1 : c;
       this.B = null
   };
   ja(Tg, Rg);
   Tg.prototype.addEventListener = function(a) {
       var b = this
         , c = {
           internalBlockOnErrors: this.F
       }
         , d = Pf(function() {
           return a(c)
       })
         , e = 0;
       -1 !== this.X && (e = setTimeout(function() {
           c.tcString = "tcunavailable";
           c.internalErrorState = 1;
           d()
       }, this.X));
       var f = function(g, l) {
           clearTimeout(e);
           g ? (c = g,
           c.internalErrorState = Sg(c),
           c.internalBlockOnErrors = b.F,
           l && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
           l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
           c.internalErrorState = 3);
           a(c)
       };
       try {
           Ug(this, "addEventListener", f)
       } catch (g) {
           c.tcString = "tcunavailable",
           c.internalErrorState = 3,
           e && (clearTimeout(e),
           e = 0),
           d()
       }
   }
   ;
   Tg.prototype.removeEventListener = function(a) {
       a && a.listenerId && Ug(this, "removeEventListener", null, a.listenerId)
   }
   ;
   var Wg = function(a, b, c) {
       var d;
       d = void 0 === d ? "755" : d;
       var e;
       a: {
           if (a.publisher && a.publisher.restrictions) {
               var f = a.publisher.restrictions[b];
               if (void 0 !== f) {
                   e = f[void 0 === d ? "755" : d];
                   break a
               }
           }
           e = void 0
       }
       var g = e;
       if (0 === g)
           return !1;
       var l = c;
       2 === c ? (l = 0,
       2 === g && (l = 1)) : 3 === c && (l = 1,
       1 === g && (l = 0));
       var m;
       if (0 === l)
           if (a.purpose && a.vendor) {
               var n = Vg(a.vendor.consents, void 0 === d ? "755" : d);
               m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Vg(a.purpose.consents, b)
           } else
               m = !0;
       else
           m = 1 === l ? a.purpose && a.vendor ? Vg(a.purpose.legitimateInterests, b) && Vg(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
       return m
   }
     , Vg = function(a, b) {
       return !(!a || !a[b])
   }
     , Ug = function(a, b, c, d) {
       c || (c = function() {}
       );
       if ("function" === typeof a.m.__tcfapi) {
           var e = a.m.__tcfapi;
           e(b, 2, c, d)
       } else if (Xg(a)) {
           Yg(a);
           var f = ++a.sa;
           a.J[f] = c;
           if (a.h) {
               var g = {};
               a.h.postMessage((g.__tcfapiCall = {
                   command: b,
                   version: 2,
                   callId: f,
                   parameter: d
               },
               g), "*")
           }
       } else
           c({}, !1)
   }
     , Xg = function(a) {
       if (a.h)
           return a.h;
       var b;
       a: {
           for (var c = a.m, d = 0; 50 > d; ++d) {
               var e;
               try {
                   e = !(!c.frames || !c.frames.__tcfapiLocator)
               } catch (l) {
                   e = !1
               }
               if (e) {
                   b = c;
                   break a
               }
               var f;
               b: {
                   try {
                       var g = c.parent;
                       if (g && g != c) {
                           f = g;
                           break b
                       }
                   } catch (l) {}
                   f = null
               }
               if (!(c = f))
                   break
           }
           b = null
       }
       a.h = b;
       return a.h
   }
     , Yg = function(a) {
       a.B || (a.B = function(b) {
           try {
               var c;
               c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
               a.J[c.callId](c.returnValue, c.success)
           } catch (d) {}
       }
       ,
       Gg(a.m, a.B))
   };
   var Zg = !0;
   Zg = !1;
   var $g = {
       1: 0,
       3: 0,
       4: 0,
       7: 3,
       9: 3,
       10: 3
   }
     , ah = Fg("", 550)
     , bh = Fg("", 500);
   function ch() {
       var a = Dd.tcf || {};
       return Dd.tcf = a
   }
   var hh = function() {
       var a = ch()
         , b = new Tg(H,Zg ? 3E3 : -1);
       if (!0 === H.gtag_enable_tcf_support && !a.active && ("function" === typeof H.__tcfapi || "function" === typeof b.m.__tcfapi || null != Xg(b))) {
           a.active = !0;
           a.gd = {};
           dh();
           var c = null;
           Zg ? c = H.setTimeout(function() {
               eh(a);
               fh(a);
               c = null
           }, bh) : a.tcString = "tcunavailable";
           try {
               b.addEventListener(function(d) {
                   c && (clearTimeout(c),
                   c = null);
                   if (0 !== d.internalErrorState)
                       eh(a),
                       fh(a);
                   else {
                       var e;
                       a.gdprApplies = d.gdprApplies;
                       if (!1 === d.gdprApplies)
                           e = gh(),
                           b.removeEventListener(d);
                       else if ("tcloaded" === d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                           var f = {}, g;
                           for (g in $g)
                               if ($g.hasOwnProperty(g))
                                   if ("1" === g) {
                                       var l = d
                                         , m = !0;
                                       m = void 0 === m ? !1 : m;
                                       var n;
                                       var p = l;
                                       !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Sg(p)),
                                       n = "error" === p.cmpStatus || 0 !== p.internalErrorState ? !p.internalBlockOnErrors : "loaded" !== p.cmpStatus || "tcloaded" !== p.eventStatus && "useractioncomplete" !== p.eventStatus ? !1 : !0);
                                       f["1"] = n ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies && !m || "string" !== typeof l.tcString || !l.tcString.length ? !0 : Wg(l, "1", 0) : !1
                                   } else
                                       f[g] = Wg(d, g, $g[g]);
                           e = f
                       }
                       e && (a.tcString = d.tcString || "tcempty",
                       a.gd = e,
                       fh(a))
                   }
               })
           } catch (d) {
               c && (clearTimeout(c),
               c = null),
               eh(a),
               fh(a)
           }
       }
   };
   function eh(a) {
       a.type = "e";
       a.tcString = "tcunavailable";
       Zg && (a.gd = gh())
   }
   function dh() {
       var a = {}
         , b = (a.ad_storage = "denied",
       a.wait_for_update = ah,
       a);
       Ff(b)
   }
   function gh() {
       var a = {}, b;
       for (b in $g)
           $g.hasOwnProperty(b) && (a[b] = !0);
       return a
   }
   function fh(a) {
       var b = {}
         , c = (b.ad_storage = a.gd["1"] ? "granted" : "denied",
       b);
       Hf(c, {
           eventId: 0
       }, {
           gdprApplies: a ? a.gdprApplies : void 0,
           tcString: ih()
       })
   }
   var ih = function() {
       var a = ch();
       return a.active ? a.tcString || "" : ""
   }
     , jh = function() {
       var a = ch();
       return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
   }
     , kh = function(a) {
       if (!$g.hasOwnProperty(String(a)))
           return !0;
       var b = ch();
       return b.active && b.gd ? !!b.gd[String(a)] : !0
   };
   function lh(a, b, c) {
       var d, e = Number(null != a.Fb ? a.Fb : void 0);
       0 !== e && (d = new Date((b || G()) + 1E3 * (e || 7776E3)));
       return {
           path: a.path,
           domain: a.domain,
           flags: a.flags,
           encode: !!c,
           expires: d
       }
   }
   ;var mh = ["1"]
     , nh = {}
     , oh = {}
     , qh = function(a) {
       return nh[ph(a)]
   }
     , th = function(a, b) {
       b = void 0 === b ? !0 : b;
       var c = ph(a.prefix);
       if (!nh[c] && !rh(c, a.path, a.domain) && b) {
           var d = ph(a.prefix)
             , e = fg();
           if (0 === sh(d, e, a)) {
               var f = cb("google_tag_data", {});
               f._gcl_au ? Rc("GTM", 57) : f._gcl_au = e
           }
           rh(c, a.path, a.domain)
       }
   };
   function sh(a, b, c, d) {
       var e = jg(b, "1", c.domain, c.path)
         , f = lh(c, d);
       f.Ta = "ad_storage";
       return bg(a, e, f)
   }
   function rh(a, b, c) {
       var d = ig(a, b, c, mh, "ad_storage");
       if (!d)
           return !1;
       var e = d.split(".");
       5 === e.length ? (nh[a] = e.slice(0, 2).join("."),
       oh[a] = {
           id: e.slice(2, 4).join("."),
           th: Number(e[4]) || 0
       }) : 3 === e.length ? oh[a] = {
           id: e.slice(0, 2).join("."),
           th: Number(e[2]) || 0
       } : nh[a] = d;
       return !0
   }
   function ph(a) {
       return (a || "_gcl") + "_au"
   }
   ;function uh() {
       for (var a = vh, b = {}, c = 0; c < a.length; ++c)
           b[a[c]] = c;
       return b
   }
   function wh() {
       var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       a += a.toLowerCase() + "0123456789-_";
       return a + "."
   }
   var vh, xh;
   function yh(a) {
       function b(m) {
           for (; d < a.length; ) {
               var n = a.charAt(d++)
                 , p = xh[n];
               if (null != p)
                   return p;
               if (!/^[\s\xa0]*$/.test(n))
                   throw Error("Unknown base64 encoding at char: " + n);
           }
           return m
       }
       vh = vh || wh();
       xh = xh || uh();
       for (var c = "", d = 0; ; ) {
           var e = b(-1)
             , f = b(0)
             , g = b(64)
             , l = b(64);
           if (64 === l && -1 === e)
               return c;
           c += String.fromCharCode(e << 2 | f >> 4);
           64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
           64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
       }
   }
   ;var zh;
   var Dh = function() {
       var a = Ah
         , b = Bh
         , c = Ch()
         , d = function(g) {
           a(g.target || g.srcElement || {})
       }
         , e = function(g) {
           b(g.target || g.srcElement || {})
       };
       if (!c.init) {
           lb(I, "mousedown", d);
           lb(I, "keyup", d);
           lb(I, "submit", e);
           var f = HTMLFormElement.prototype.submit;
           HTMLFormElement.prototype.submit = function() {
               b(this);
               f.call(this)
           }
           ;
           c.init = !0
       }
   }
     , Eh = function(a, b, c, d, e) {
       var f = {
           callback: a,
           domains: b,
           fragment: 2 === c,
           placement: c,
           forms: d,
           sameHost: e
       };
       Ch().decorators.push(f)
   }
     , Fh = function(a, b, c) {
       for (var d = Ch().decorators, e = {}, f = 0; f < d.length; ++f) {
           var g = d[f], l;
           if (l = !c || g.forms)
               a: {
                   var m = g.domains
                     , n = a
                     , p = !!g.sameHost;
                   if (m && (p || n !== I.location.hostname))
                       for (var q = 0; q < m.length; q++)
                           if (m[q]instanceof RegExp) {
                               if (m[q].test(n)) {
                                   l = !0;
                                   break a
                               }
                           } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                               l = !0;
                               break a
                           }
                   l = !1
               }
           if (l) {
               var r = g.placement;
               void 0 == r && (r = g.fragment ? 2 : 1);
               r === b && Fa(e, g.callback())
           }
       }
       return e
   };
   function Ch() {
       var a = cb("google_tag_data", {})
         , b = a.gl;
       b && b.decorators || (b = {
           decorators: []
       },
       a.gl = b);
       return b
   }
   ;var Gh = /(.*?)\*(.*?)\*(.*)/
     , Hh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
     , Ih = /^(?:www\.|m\.|amp\.)+/
     , Jh = /([^?#]+)(\?[^#]*)?(#.*)?/;
   function Kh(a) {
       return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
   }
   var Mh = function(a) {
       var b = [], c;
       for (c in a)
           if (a.hasOwnProperty(c)) {
               var d = a[c];
               if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                   b.push(c);
                   var e = b, f = e.push, g, l = String(d);
                   vh = vh || wh();
                   xh = xh || uh();
                   for (var m = [], n = 0; n < l.length; n += 3) {
                       var p = n + 1 < l.length
                         , q = n + 2 < l.length
                         , r = l.charCodeAt(n)
                         , u = p ? l.charCodeAt(n + 1) : 0
                         , t = q ? l.charCodeAt(n + 2) : 0
                         , v = r >> 2
                         , x = (r & 3) << 4 | u >> 4
                         , z = (u & 15) << 2 | t >> 6
                         , w = t & 63;
                       q || (w = 64,
                       p || (z = 64));
                       m.push(vh[v], vh[x], vh[z], vh[w])
                   }
                   g = m.join("");
                   f.call(e, g)
               }
           }
       var A = b.join("*");
       return ["1", Lh(A), A].join("*")
   };
   function Lh(a, b) {
       var c = [H.navigator.userAgent, (new Date).getTimezoneOffset(), ab.userLanguage || ab.language, Math.floor(G() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
       if (!(d = zh)) {
           for (var e = Array(256), f = 0; 256 > f; f++) {
               for (var g = f, l = 0; 8 > l; l++)
                   g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
               e[f] = g
           }
           d = e
       }
       zh = d;
       for (var m = 4294967295, n = 0; n < c.length; n++)
           m = m >>> 8 ^ zh[(m ^ c.charCodeAt(n)) & 255];
       return ((m ^ -1) >>> 0).toString(36)
   }
   function Nh() {
       return function(a) {
           var b = ue(H.location.href)
             , c = b.search.replace("?", "")
             , d = pe(c, "_gl", !0) || "";
           a.query = Oh(d) || {};
           var e = se(b, "fragment").match(Kh("_gl"));
           a.fragment = Oh(e && e[3] || "") || {}
       }
   }
   function Ph(a, b) {
       var c = Kh(a).exec(b)
         , d = b;
       if (c) {
           var e = c[2]
             , f = c[4];
           d = c[1];
           f && (d = d + e + f)
       }
       return d
   }
   var Qh = function(a, b) {
       b || (b = "_gl");
       var c = Jh.exec(a);
       if (!c)
           return "";
       var d = c[1]
         , e = Ph(b, (c[2] || "").slice(1))
         , f = Ph(b, (c[3] || "").slice(1));
       e.length && (e = "?" + e);
       f.length && (f = "#" + f);
       return "" + d + e + f
   }
     , Rh = function(a) {
       var b = Nh()
         , c = Ch();
       c.data || (c.data = {
           query: {},
           fragment: {}
       },
       b(c.data));
       var d = {}
         , e = c.data;
       e && (Fa(d, e.query),
       a && Fa(d, e.fragment));
       return d
   }
     , Oh = function(a) {
       try {
           var b = Sh(a, 3);
           if (void 0 !== b) {
               for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                   var f = d[e]
                     , g = yh(d[e + 1]);
                   c[f] = g
               }
               Rc("TAGGING", 6);
               return c
           }
       } catch (l) {
           Rc("TAGGING", 8)
       }
   };
   function Sh(a, b) {
       if (a) {
           var c;
           a: {
               for (var d = a, e = 0; 3 > e; ++e) {
                   var f = Gh.exec(d);
                   if (f) {
                       c = f;
                       break a
                   }
                   d = decodeURIComponent(d)
               }
               c = void 0
           }
           var g = c;
           if (g && "1" === g[1]) {
               var l = g[3], m;
               a: {
                   for (var n = g[2], p = 0; p < b; ++p)
                       if (n === Lh(l, p)) {
                           m = !0;
                           break a
                       }
                   m = !1
               }
               if (m)
                   return l;
               Rc("TAGGING", 7)
           }
       }
   }
   function Th(a, b, c, d) {
       function e(p) {
           p = Ph(a, p);
           var q = p.charAt(p.length - 1);
           p && "&" !== q && (p += "&");
           return p + n
       }
       d = void 0 === d ? !1 : d;
       var f = Jh.exec(c);
       if (!f)
           return "";
       var g = f[1]
         , l = f[2] || ""
         , m = f[3] || ""
         , n = a + "=" + b;
       d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
       return "" + g + l + m
   }
   function Uh(a, b) {
       var c = "FORM" === (a.tagName || "").toUpperCase()
         , d = Fh(b, 1, c)
         , e = Fh(b, 2, c)
         , f = Fh(b, 3, c);
       if (Ga(d)) {
           var g = Mh(d);
           c ? Vh("_gl", g, a) : Wh("_gl", g, a, !1)
       }
       if (!c && Ga(e)) {
           var l = Mh(e);
           Wh("_gl", l, a, !0)
       }
       for (var m in f)
           if (f.hasOwnProperty(m))
               a: {
                   var n = m
                     , p = f[m]
                     , q = a;
                   if (q.tagName) {
                       if ("a" === q.tagName.toLowerCase()) {
                           Wh(n, p, q);
                           break a
                       }
                       if ("form" === q.tagName.toLowerCase()) {
                           Vh(n, p, q);
                           break a
                       }
                   }
                   "string" == typeof q && Th(n, p, q)
               }
   }
   function Wh(a, b, c, d) {
       if (c.href) {
           var e = Th(a, b, c.href, void 0 === d ? !1 : d);
           Ra.test(e) && (c.href = e)
       }
   }
   function Vh(a, b, c) {
       if (c && c.action) {
           var d = (c.method || "").toLowerCase();
           if ("get" === d) {
               for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                   var l = e[g];
                   if (l.name === a) {
                       l.setAttribute("value", b);
                       f = !0;
                       break
                   }
               }
               if (!f) {
                   var m = I.createElement("input");
                   m.setAttribute("type", "hidden");
                   m.setAttribute("name", a);
                   m.setAttribute("value", b);
                   c.appendChild(m)
               }
           } else if ("post" === d) {
               var n = Th(a, b, c.action);
               Ra.test(n) && (c.action = n)
           }
       }
   }
   function Ah(a) {
       try {
           var b;
           a: {
               for (var c = a, d = 100; c && 0 < d; ) {
                   if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                       b = c;
                       break a
                   }
                   c = c.parentNode;
                   d--
               }
               b = null
           }
           var e = b;
           if (e) {
               var f = e.protocol;
               "http:" !== f && "https:" !== f || Uh(e, e.hostname)
           }
       } catch (g) {}
   }
   function Bh(a) {
       try {
           if (a.action) {
               var b = se(ue(a.action), "host");
               Uh(a, b)
           }
       } catch (c) {}
   }
   var Xh = function(a, b, c, d) {
       Dh();
       Eh(a, b, "fragment" === c ? 2 : 1, !!d, !1)
   }
     , Yh = function(a, b) {
       Dh();
       Eh(a, [re(H.location, "host", !0)], b, !0, !0)
   }
     , Zh = function() {
       var a = I.location.hostname
         , b = Hh.exec(I.referrer);
       if (!b)
           return !1;
       var c = b[2]
         , d = b[1]
         , e = "";
       if (c) {
           var f = c.split("/")
             , g = f[1];
           e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
       } else if (d) {
           if (0 === d.indexOf("xn--"))
               return !1;
           e = d.replace(/-/g, ".").replace(/\.\./g, "-")
       }
       var l = a.replace(Ih, ""), m = e.replace(Ih, ""), n;
       if (!(n = l === m)) {
           var p = "." + m;
           n = l.substring(l.length - p.length, l.length) === p
       }
       return n
   }
     , $h = function(a, b) {
       return !1 === a ? !1 : a || b || Zh()
   };
   var ai = {};
   var bi = function(a) {
       for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
           var f = c[e].match(d);
           f && b.push({
               xf: f[1],
               value: f[2],
               timestamp: Number(f[2].split(".")[1]) || 0
           })
       }
       b.sort(function(g, l) {
           return l.timestamp - g.timestamp
       });
       return b
   };
   function ci(a, b) {
       var c = bi(a)
         , d = {};
       if (!c || !c.length)
           return d;
       for (var e = 0; e < c.length; e++) {
           var f = c[e].value.split(".");
           if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
               d[c[e].xf] || (d[c[e].xf] = []);
               var g = {
                   version: f[0],
                   timestamp: 1E3 * Number(f[1]),
                   fa: f[2]
               };
               b && 3 < f.length && (g.labels = f.slice(3));
               d[c[e].xf].push(g)
           }
       }
       return d
   }
   ;var di = /^\w+$/
     , ei = /^[\w-]+$/
     , fi = {
       aw: "_aw",
       dc: "_dc",
       gf: "_gf",
       ha: "_ha",
       gp: "_gp",
       gb: "_gb"
   }
     , gi = function() {
       if (!jf().h() || !vf())
           return !0;
       var a = sf("ad_storage");
       return null == a ? !0 : !!a
   }
     , hi = function(a, b) {
       uf("ad_storage") ? gi() ? a() : Af(a, "ad_storage") : b ? Rc("TAGGING", 3) : zf(function() {
           hi(a, !0)
       }, ["ad_storage"])
   }
     , ji = function(a) {
       return ii(a).map(function(b) {
           return b.fa
       })
   }
     , ii = function(a) {
       var b = [];
       if (!Qf(H) || !I.cookie)
           return b;
       var c = Tf(a, I.cookie, void 0, "ad_storage");
       if (!c || 0 == c.length)
           return b;
       for (var d = {}, e = 0; e < c.length; d = {
           od: d.od
       },
       e++) {
           var f = ki(c[e]);
           if (null != f) {
               var g = f
                 , l = g.version;
               d.od = g.fa;
               var m = g.timestamp
                 , n = g.labels
                 , p = qa(b, function(q) {
                   return function(r) {
                       return r.fa === q.od
                   }
               }(d));
               p ? (p.timestamp = Math.max(p.timestamp, m),
               p.labels = li(p.labels, n || [])) : b.push({
                   version: l,
                   fa: d.od,
                   timestamp: m,
                   labels: n
               })
           }
       }
       b.sort(function(q, r) {
           return r.timestamp - q.timestamp
       });
       return mi(b)
   };
   function li(a, b) {
       for (var c = {}, d = [], e = 0; e < a.length; e++)
           c[a[e]] = !0,
           d.push(a[e]);
       for (var f = 0; f < b.length; f++)
           c[b[f]] || d.push(b[f]);
       return d
   }
   function ni(a) {
       return a && "string" == typeof a && a.match(di) ? a : "_gcl"
   }
   var pi = function() {
       var a = ue(H.location.href)
         , b = se(a, "query", !1, void 0, "gclid")
         , c = se(a, "query", !1, void 0, "gclsrc")
         , d = se(a, "query", !1, void 0, "wbraid")
         , e = se(a, "query", !1, void 0, "dclid");
       if (!b || !c || !d) {
           var f = a.hash.replace("#", "");
           b = b || pe(f, "gclid");
           c = c || pe(f, "gclsrc");
           d = d || pe(f, "wbraid")
       }
       return oi(b, c, e, d)
   }
     , oi = function(a, b, c, d) {
       var e = {}
         , f = function(g, l) {
           e[l] || (e[l] = []);
           e[l].push(g)
       };
       e.gclid = a;
       e.gclsrc = b;
       e.dclid = c;
       void 0 !== d && ei.test(d) && (e.gbraid = d,
       f(d, "gb"));
       if (void 0 !== a && a.match(ei))
           switch (b) {
           case void 0:
               f(a, "aw");
               break;
           case "aw.ds":
               f(a, "aw");
               f(a, "dc");
               break;
           case "ds":
               f(a, "dc");
               break;
           case "3p.ds":
               f(a, "dc");
               break;
           case "gf":
               f(a, "gf");
               break;
           case "ha":
               f(a, "ha")
           }
       c && f(c, "dc");
       return e
   }
     , ri = function(a) {
       var b = pi();
       hi(function() {
           qi(b, !1, a)
       })
   };
   function qi(a, b, c, d, e) {
       function f(x, z) {
           var w = si(x, g);
           w && (bg(w, z, l),
           m = !0)
       }
       c = c || {};
       e = e || [];
       var g = ni(c.prefix);
       d = d || G();
       var l = lh(c, d, !0);
       l.Ta = "ad_storage";
       var m = !1
         , n = Math.round(d / 1E3)
         , p = function(x) {
           var z = ["GCL", n, x];
           0 < e.length && z.push(e.join("."));
           return z.join(".")
       };
       a.aw && f("aw", p(a.aw[0]));
       a.dc && f("dc", p(a.dc[0]));
       a.gf && f("gf", p(a.gf[0]));
       a.ha && f("ha", p(a.ha[0]));
       a.gp && f("gp", p(a.gp[0]));
       if ((void 0 == ai.enable_gbraid_cookie_write ? 0 : ai.enable_gbraid_cookie_write) && !m && a.gb) {
           var q = a.gb[0]
             , r = si("gb", g)
             , u = !1;
           if (!b)
               for (var t = ii(r), v = 0; v < t.length; v++)
                   t[v].fa === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
           u || f("gb", p(q))
       }
   }
   var ui = function(a, b) {
       var c = Rh(!0);
       hi(function() {
           for (var d = ni(b.prefix), e = 0; e < a.length; ++e) {
               var f = a[e];
               if (void 0 !== fi[f]) {
                   var g = si(f, d)
                     , l = c[g];
                   if (l) {
                       var m = Math.min(ti(l), G()), n;
                       b: {
                           var p = m;
                           if (Qf(H))
                               for (var q = Tf(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                   if (ti(q[r]) > p) {
                                       n = !0;
                                       break b
                                   }
                           n = !1
                       }
                       if (!n) {
                           var u = lh(b, m, !0);
                           u.Ta = "ad_storage";
                           bg(g, l, u)
                       }
                   }
               }
           }
           qi(oi(c.gclid, c.gclsrc), !1, b)
       })
   }
     , si = function(a, b) {
       var c = fi[a];
       if (void 0 !== c)
           return b + c
   }
     , ti = function(a) {
       return 0 !== vi(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
   };
   function ki(a) {
       var b = vi(a.split("."));
       return 0 === b.length ? null : {
           version: b[0],
           fa: b[2],
           timestamp: 1E3 * (Number(b[1]) || 0),
           labels: b.slice(3)
       }
   }
   function vi(a) {
       return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !ei.test(a[2]) ? [] : a
   }
   var wi = function(a, b, c, d, e) {
       if (pa(b) && Qf(H)) {
           var f = ni(e)
             , g = function() {
               for (var l = {}, m = 0; m < a.length; ++m) {
                   var n = si(a[m], f);
                   if (n) {
                       var p = Tf(n, I.cookie, void 0, "ad_storage");
                       p.length && (l[n] = p.sort()[p.length - 1])
                   }
               }
               return l
           };
           hi(function() {
               Xh(g, b, c, d)
           })
       }
   }
     , mi = function(a) {
       return a.filter(function(b) {
           return ei.test(b.fa)
       })
   }
     , xi = function(a, b) {
       if (Qf(H)) {
           for (var c = ni(b.prefix), d = {}, e = 0; e < a.length; e++)
               fi[a[e]] && (d[a[e]] = fi[a[e]]);
           hi(function() {
               B(d, function(f, g) {
                   var l = Tf(c + g, I.cookie, void 0, "ad_storage");
                   l.sort(function(u, t) {
                       return ti(t) - ti(u)
                   });
                   if (l.length) {
                       var m = l[0], n = ti(m), p = 0 !== vi(m.split(".")).length ? m.split(".").slice(3) : [], q = {}, r;
                       r = 0 !== vi(m.split(".")).length ? m.split(".")[2] : void 0;
                       q[f] = [r];
                       qi(q, !0, b, n, p)
                   }
               })
           })
       }
   };
   function yi(a, b) {
       for (var c = 0; c < b.length; ++c)
           if (a[b[c]])
               return !0;
       return !1
   }
   var zi = function(a) {
       function b(e, f, g) {
           g && (e[f] = g)
       }
       if (vf()) {
           var c = pi();
           if (yi(c, a)) {
               var d = {};
               b(d, "gclid", c.gclid);
               b(d, "dclid", c.dclid);
               b(d, "gclsrc", c.gclsrc);
               b(d, "wbraid", c.gbraid);
               Yh(function() {
                   return d
               }, 3);
               Yh(function() {
                   var e = {};
                   return e._up = "1",
                   e
               }, 1)
           }
       }
   }
     , Ai = function(a, b, c, d) {
       var e = [];
       c = c || {};
       if (!gi())
           return e;
       var f = ii(a);
       if (!f.length)
           return e;
       for (var g = 0; g < f.length; g++)
           -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
       if (d)
           return e;
       if (1 !== e[0]) {
           var l = f[0]
             , m = f[0].timestamp
             , n = [l.version, Math.round(m / 1E3), l.fa].concat(l.labels || [], [b]).join(".")
             , p = lh(c, m, !0);
           p.Ta = "ad_storage";
           bg(a, n, p)
       }
       return e
   };
   function Bi(a, b) {
       var c = ni(b)
         , d = si(a, c);
       if (!d)
           return 0;
       for (var e = ii(d), f = 0, g = 0; g < e.length; g++)
           f = Math.max(f, e[g].timestamp);
       return f
   }
   function Ci(a) {
       var b = 0, c;
       for (c in a)
           for (var d = a[c], e = 0; e < d.length; e++)
               b = Math.max(b, Number(d[e].timestamp));
       return b
   }
   var Di = function(a) {
       var b = Math.max(Bi("aw", a), Ci(gi() ? ci() : {}));
       return Math.max(Bi("gb", a), Ci(gi() ? ci("_gac_gb", !0) : {})) > b
   };
   var Ji = /[A-Z]+/
     , Ki = /\s/
     , Li = function(a) {
       if (k(a)) {
           a = Aa(a);
           var b = a.indexOf("-");
           if (!(0 > b)) {
               var c = a.substring(0, b);
               if (Ji.test(c)) {
                   for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                       if (!d[e] || Ki.test(d[e]) && ("AW" !== c || 1 !== e))
                           return;
                   return {
                       id: a,
                       prefix: c,
                       containerId: c + "-" + d[0],
                       I: d
                   }
               }
           }
       }
   }
     , Ni = function(a) {
       for (var b = {}, c = 0; c < a.length; ++c) {
           var d = Li(a[c]);
           d && (b[d.id] = d)
       }
       Mi(b);
       var e = [];
       B(b, function(f, g) {
           e.push(g)
       });
       return e
   };
   function Mi(a) {
       var b = [], c;
       for (c in a)
           if (a.hasOwnProperty(c)) {
               var d = a[c];
               "AW" === d.prefix && d.I[1] && b.push(d.containerId)
           }
       for (var e = 0; e < b.length; ++e)
           delete a[b[e]]
   }
   ;var Pi = function(a, b, c, d) {
       return (2 === Oi() || d || "http:" != H.location.protocol ? a : b) + c
   }
     , Oi = function() {
       var a = ib(), b;
       if (1 === a)
           a: {
               var c = Jd;
               c = c.toLowerCase();
               for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                   var m = g[l].src;
                   if (m) {
                       m = m.toLowerCase();
                       if (0 === m.indexOf(e)) {
                           b = 3;
                           break a
                       }
                       1 === f && 0 === m.indexOf(d) && (f = 2)
                   }
               }
               b = f
           }
       else
           b = a;
       return b
   };
   var Ri = function(a, b, c) {
       if (H[a.functionName])
           return b.pf && L(b.pf),
           H[a.functionName];
       var d = Qi();
       H[a.functionName] = d;
       if (a.Zd)
           for (var e = 0; e < a.Zd.length; e++)
               H[a.Zd[e]] = H[a.Zd[e]] || Qi();
       a.ne && void 0 === H[a.ne] && (H[a.ne] = c);
       hb(Pi("https://", "http://", a.wf), b.pf, b.Ij);
       return d
   }
     , Qi = function() {
       var a = function() {
           a.q = a.q || [];
           a.q.push(arguments)
       };
       return a
   }
     , Si = {
       functionName: "_googWcmImpl",
       ne: "_googWcmAk",
       wf: "www.gstatic.com/wcm/loader.js"
   }
     , Ti = {
       functionName: "_gaPhoneImpl",
       ne: "ga_wpid",
       wf: "www.gstatic.com/gaphone/loader.js"
   }
     , Ui = {
       Qh: "",
       Mi: "5"
   }
     , Vi = {
       functionName: "_googCallTrackingImpl",
       Zd: [Ti.functionName, Si.functionName],
       wf: "www.gstatic.com/call-tracking/call-tracking_" + (Ui.Qh || Ui.Mi) + ".js"
   }
     , Wi = {}
     , Xi = function(a, b, c, d) {
       T(22);
       if (c) {
           d = d || {};
           var e = Ri(Si, d, a)
             , f = {
               ak: a,
               cl: b
           };
           void 0 === d.eb && (f.autoreplace = c);
           e(2, d.eb, f, c, 0, Ca(), d.options)
       }
   }
     , Yi = function(a, b, c, d) {
       T(21);
       if (b && c) {
           d = d || {};
           for (var e = {
               countryNameCode: c,
               destinationNumber: b,
               retrievalTime: Ca()
           }, f = 0; f < a.length; f++) {
               var g = a[f];
               Wi[g.id] || (g && "AW" === g.prefix && !e.adData && 2 <= g.I.length ? (e.adData = {
                   ak: g.I[0],
                   cl: g.I[1]
               },
               Wi[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                   gaWpid: g.containerId
               },
               Wi[g.id] = !0))
           }
           (e.gaData || e.adData) && Ri(Vi, d)(d.eb, e, d.options)
       }
   }
     , Zi = function() {
       var a = !1;
       return a
   }
     , $i = function(a, b) {
       if (a)
           if (lg()) {} else {
               if (k(a)) {
                   var c = Li(a);
                   if (!c)
                       return;
                   a = c
               }
               var d = void 0
                 , e = !1
                 , f = b.getWithConfig(V.g.wi);
               if (f && pa(f)) {
                   d = [];
                   for (var g = 0; g < f.length; g++) {
                       var l = Li(f[g]);
                       l && (d.push(l),
                       (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (e = !0))
                   }
               }
               if (!d || e) {
                   var m = b.getWithConfig(V.g.hg), n;
                   if (m) {
                       pa(m) ? n = m : n = [m];
                       var p = b.getWithConfig(V.g.fg)
                         , q = b.getWithConfig(V.g.gg)
                         , r = b.getWithConfig(V.g.ig)
                         , u = b.getWithConfig(V.g.vi)
                         , t = p || q
                         , v = 1;
                       "UA" !== a.prefix || d || (v = 5);
                       for (var x = 0; x < n.length; x++)
                           if (x < v)
                               if (d)
                                   Yi(d, n[x], u, {
                                       eb: t,
                                       options: r
                                   });
                               else if ("AW" === a.prefix && a.I[1])
                                   Zi() ? Yi([a], n[x], u || "US", {
                                       eb: t,
                                       options: r
                                   }) : Xi(a.I[0], a.I[1], n[x], {
                                       eb: t,
                                       options: r
                                   });
                               else if ("UA" === a.prefix)
                                   if (Zi())
                                       Yi([a], n[x], u || "US", {
                                           eb: t
                                       });
                                   else {
                                       var z = a.containerId
                                         , w = n[x]
                                         , A = {
                                           eb: t
                                       };
                                       T(23);
                                       if (w) {
                                           A = A || {};
                                           var y = Ri(Ti, A, z)
                                             , C = {};
                                           void 0 !== A.eb ? C.receiver = A.eb : C.replace = w;
                                           C.ga_wpid = z;
                                           C.destination = w;
                                           y(2, Ca(), C)
                                       }
                                   }
                   }
               }
           }
   };
   var aj = function(a, b, c) {
       this.B = a;
       this.eventName = b;
       this.h = c;
       this.m = {};
       this.metadata = O(c.eventMetadata || {});
       this.M = !1
   }
     , bj = function(a, b, c) {
       var d = a.h.getWithConfig(b);
       void 0 !== d ? a.m[b] = d : void 0 !== c && (a.m[b] = c)
   }
     , cj = function(a, b, c) {
       var d = de(a.B);
       return d && d.hasOwnProperty(b) ? d[b] : c
   };
   function dj(a) {
       return {
           getDestinationId: function() {
               return a.B
           },
           getEventName: function() {
               return a.eventName
           },
           setEventName: function(b) {
               return void (a.eventName = b)
           },
           getHitData: function(b) {
               return a.m[b]
           },
           setHitData: function(b, c) {
               return void (a.m[b] = c)
           },
           setHitDataIfNotDefined: function(b, c) {
               void 0 === a.m[b] && (a.m[b] = c)
           },
           copyToHitData: function(b, c) {
               bj(a, b, c)
           },
           getMetadata: function(b) {
               return a.metadata[b]
           },
           setMetadata: function(b, c) {
               return void (a.metadata[b] = c)
           },
           abort: function() {
               return void (a.M = !0)
           },
           getProcessedEvent: function() {
               return a
           }
       }
   }
   ;var jj = [];
   jj[20] = !0;
   jj[21] = !0;
   jj[22] = !0;
   jj[19] = !0;
   jj[24] = !0;
   jj[26] = !0;
   function Aj() {
       return "attribution-reporting"
   }
   function Sj(a) {
       var b;
       b = void 0 === b ? document : b;
       var c;
       return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
   }
   ;var Tj = !1;
   function Uj() {
       if (Sj("join-ad-interest-group") && na(ab.joinAdInterestGroup))
           return !0;
       Tj || (Pg('A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
       Tj = !0);
       return Sj("join-ad-interest-group") && na(ab.joinAdInterestGroup)
   }
   function Vj(a, b) {
       var c = void 0;
       try {
           c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
       } catch (e) {}
       if (c) {
           var d = Number(c.dataset.loadTime);
           if (d && 6E4 > G() - d) {
               Rc("TAGGING", 9);
               return
           }
       } else
           try {
               if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                   Rc("TAGGING", 10);
                   return
               }
           } catch (e) {}
       jb(a, void 0, {
           allow: "join-ad-interest-group"
       }, {
           taggingId: b,
           loadTime: G()
       }, c)
   }
   ;var Wj = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
     , Xj = /^~?[\w-]+(?:\.~?[\w-]+)*$/
     , Yj = /^\d+\.fls\.doubleclick\.net$/
     , Zj = /;gac=([^;?]+)/
     , ak = /;gacgb=([^;?]+)/
     , bk = /;gclaw=([^;?]+)/
     , ck = /;gclgb=([^;?]+)/;
   function dk(a, b) {
       if (Yj.test(I.location.host)) {
           var c = I.location.href.match(b);
           return c && 2 == c.length && c[1].match(Wj) ? decodeURIComponent(c[1]) : ""
       }
       var d = [], e;
       for (e in a) {
           for (var f = [], g = a[e], l = 0; l < g.length; l++)
               f.push(g[l].fa);
           d.push(e + ":" + f.join(","))
       }
       return 0 < d.length ? d.join(";") : ""
   }
   var ek = function(a, b, c) {
       var d = gi() ? ci("_gac_gb", !0) : {}, e = [], f = !1, g;
       for (g in d) {
           var l = Ai("_gac_gb_" + g, a, b, c);
           f = f || 0 !== l.length && l.some(function(m) {
               return 1 === m
           });
           e.push(g + ":" + l.join(","))
       }
       return {
           ij: f ? e.join(";") : "",
           gj: dk(d, ak)
       }
   };
   function fk(a, b, c) {
       if (Yj.test(I.location.host)) {
           var d = I.location.href.match(c);
           if (d && 2 == d.length && d[1].match(Xj))
               return [{
                   fa: d[1]
               }]
       } else
           return ii((a || "_gcl") + b);
       return []
   }
   var gk = function(a) {
       return fk(a, "_aw", bk).map(function(b) {
           return b.fa
       }).join(".")
   }
     , hk = function(a) {
       return fk(a, "_gb", ck).map(function(b) {
           return b.fa
       }).join(".")
   }
     , ik = function(a, b) {
       var c = Ai((b && b.prefix || "_gcl") + "_gb", a, b);
       return 0 === c.length || c.every(function(d) {
           return 0 === d
       }) ? "" : c.join(".")
   };
   var jk = function() {
       if (na(H.__uspapi)) {
           var a = "";
           try {
               H.__uspapi("getUSPData", 1, function(b, c) {
                   if (c && b) {
                       var d = b.uspString;
                       d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                   }
               })
           } catch (b) {}
           return a
       }
   };
   var Sk = function(a) {
       var b = !1;
       if (!Qk || !Rk[Qk])
           return !1;
       b = a || "C"in Rk[Qk];
       return b
   }, Vk = function(a, b) {
       var c;
       if (!Qk || !Sk(b))
           return "";
       var d = Rk[Qk];
       c = "&al=" + Tk.filter(function(e) {
           return void 0 !== d[e]
       }).map(function(e) {
           return e + Math.floor(d[e])
       }).join(".") + (".Z" + Uk[Qk]);
       a && delete Rk[Qk];
       return c
   }, Yk = function(a) {}, bl = function(a) {}, cl = function() {
       return "&tc=" + $b.filter(function(a) {
           return a
       }).length
   }, fl = function() {
       2022 <= dl().length && el()
   }, gl = function(a) {
       return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
   }, il = function() {
       hl || (hl = H.setTimeout(el, 500))
   }, el = function(a) {
       hl && (H.clearTimeout(hl),
       hl = void 0);
       if (void 0 !== Qk && (!jl[Qk] || kl || ll || Sk(a)))
           if (void 0 === Uk[Qk] && (ml[Qk] || nl.xj() || 0 >= ol--))
               T(1),
               ml[Qk] = !0;
           else {
               void 0 === Uk[Qk] && nl.Uj();
               var b = dl(!0, a);
               a ? rb(b) : kb(b);
               if (pl || ql && 0 < rl.length) {
                   var c = b.replace("/a?", "/td?");
                   kb(c)
               }
               jl[Qk] = !0;
               ql = pl = sl = tl = ll = kl = "";
               rl = []
           }
   }, dl = function(a, b) {
       var c = Qk;
       if (void 0 === c)
           return "";
       var d = Sc("GTM")
         , e = Sc("TAGGING");
       return [ul, jl[c] ? "" : "&es=1", vl[c], Yk(c), d ? "&u=" + d : "", e ? "&ut=" + e : "", cl(), kl, ll, tl, bl(a), sl, pl, Vk(a, b), ql ? "&dl=" + encodeURIComponent(ql) : "", 0 < rl.length ? "&tdp=" + rl.join(".") : "", "&z=0"].join("")
   }, xl = function() {
       ul = wl()
   }, wl = function() {
       return [yl, "&v=3&t=t", "&pid=" + ra(), "&rv=" + Cd.Vd].join("")
   }, al = ["L", "S", "Y"], Xk = ["S", "E"], zl = {
       sampleRate: "0.005000",
       Nh: "",
       Mh: Number("5")
   }, Al = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="), Bl;
   if (!(Bl = Al)) {
       var Cl = Math.random()
         , Dl = zl.sampleRate;
       Bl = Cl < Dl
   }
   var El = Bl
     , yl = "https://www.googletagmanager.com/a?id=" + mg.K + "&cv=1"
     , Fl = {
       label: mg.K + " Container",
       children: [{
           label: "Initialization",
           children: []
       }]
   }
     , ul = wl()
     , jl = {}
     , kl = ""
     , ll = ""
     , sl = ""
     , pl = ""
     , rl = []
     , ql = ""
     , $k = {}
     , Zk = !1
     , Wk = {}
     , Gl = {}
     , tl = ""
     , Qk = void 0
     , vl = {}
     , ml = {}
     , hl = void 0
     , Hl = 5;
   0 < zl.Mh && (Hl = zl.Mh);
   var nl = function(a, b) {
       for (var c = 0, d = [], e = 0; e < a; ++e)
           d.push(0);
       return {
           xj: function() {
               return c < a ? !1 : G() - d[c % a] < b
           },
           Uj: function() {
               var f = c++ % a;
               d[f] = G()
           }
       }
   }(Hl, 1E3)
     , ol = 1E3
     , Jl = function(a, b) {
       if (El && void 0 !== a && !ml[a] && Qk !== a) {
           el();
           Qk = a;
           sl = kl = "";
           vl[a] = "&e=" + gl(b) + "&eid=" + a;
           il();
       }
   }
     , Kl = function(a, b, c, d) {
       if (El && b) {
           var e, f = String(b[yb.zb] || "").replace(/_/g, "");
           0 === f.indexOf("cvt") && (f = "cvt");
           e = f;
           var g = c + e;
           if (!ml[a]) {
               a !== Qk && (el(),
               Qk = a);
               kl = kl ? kl + "." + g : "&tr=" + g;
               var l = b["function"];
               if (!l)
                   throw Error("Error: No function name given for function call.");
               var m = (bc[l] ? "1" : "2") + e;
               sl = sl ? sl + "." + m : "&ti=" + m;
               il();
               fl()
           }
       }
   };
   var Rl = function(a, b, c) {
       if (El && void 0 !== a && !ml[a]) {
           a !== Qk && (el(),
           Qk = a);
           var d = c + b;
           ll = ll ? ll + "." + d : "&epr=" + d;
           il();
           fl()
       }
   }
     , Sl = function(a, b, c) {}
     , Tk = ["S", "P", "C", "Z"]
     , Tl = {}
     , Ul = (Tl[1] = 5,
   Tl[2] = 5,
   Tl[3] = 5,
   Tl)
     , Rk = {}
     , Uk = {}
     , Vl = function(a, b) {
       var c = !1;
       if (!El || Uk[a] || 0 === Ul[b])
           return !1;
       --Ul[b];
       Uk[a] = b;
       c = !0;
       return c
   }
     , Wl = function(a, b, c) {
       if (!El || !Uk[a])
           return;
       var d = Rk[a];
       d || (Rk[a] = d = {});
       d[b] = c;
   }
     , Xl = function() {
       if (El) {
           H.setInterval(xl, 864E5);
           lb(H, "pagehide", function() {
               Qk && Uk[Qk] && el(!0);
               for (var a in Rk)
                   Rk.hasOwnProperty(a) && (Qk = Number(a),
                   el(!0));
           });
       }
   };
   var Yl = function(a, b) {
       var c, d = H.GooglebQhCsO;
       d || (d = {},
       H.GooglebQhCsO = d);
       c = d;
       if (c[a])
           return !1;
       c[a] = [];
       c[a][0] = b;
       return !0
   };
   Ua();
   Hg() || Ta("iPod");
   Ta("iPad");
   !Ta("Android") || Va() || Ua() || Ta("Opera") || Ta("Silk");
   Va();
   !Ta("Safari") || Va() || Ta("Coast") || Ta("Opera") || Ta("Edge") || Ta("Edg/") || Ta("OPR") || Ua() || Ta("Silk") || Ta("Android") || Ig();
   var Zl = {}
     , $l = null
     , am = function(a) {
       for (var b = [], c = 0, d = 0; d < a.length; d++) {
           var e = a.charCodeAt(d);
           255 < e && (b[c++] = e & 255,
           e >>= 8);
           b[c++] = e
       }
       var f = 4;
       void 0 === f && (f = 0);
       if (!$l) {
           $l = {};
           for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
               var n = g.concat(l[m].split(""));
               Zl[m] = n;
               for (var p = 0; p < n.length; p++) {
                   var q = n[p];
                   void 0 === $l[q] && ($l[q] = p)
               }
           }
       }
       for (var r = Zl[f], u = Array(Math.floor(b.length / 3)), t = r[64] || "", v = 0, x = 0; v < b.length - 2; v += 3) {
           var z = b[v]
             , w = b[v + 1]
             , A = b[v + 2]
             , y = r[z >> 2]
             , C = r[(z & 3) << 4 | w >> 4]
             , F = r[(w & 15) << 2 | A >> 6]
             , E = r[A & 63];
           u[x++] = "" + y + C + F + E
       }
       var D = 0
         , N = t;
       switch (b.length - v) {
       case 2:
           D = b[v + 1],
           N = r[(D & 15) << 2] || t;
       case 1:
           var K = b[v];
           u[x] = "" + r[K >> 2] + r[(K & 3) << 4 | D >> 4] + N + t
       }
       return u.join("")
   };
   var bm = function(a, b) {
       var c = Mg(a, "fmt");
       if (b) {
           var d = Mg(a, "random")
             , e = Mg(a, "label") || "";
           if (!d)
               return !1;
           var f = am(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
           if (!Yl(f, b))
               return !1
       }
       c && 4 != c && (a = Og(a, "rfmt", c));
       var g = Og(a, "fmt", 4);
       hb(g, function() {
           H.google_noFurtherRedirects && b && b.call && (H.google_noFurtherRedirects = null,
           b())
       }, void 0, void 0, I.getElementsByTagName("script")[0].parentElement || void 0);
       return !0
   };
   var rm = !1;
   var sm = function() {
       this.h = {}
   }
     , tm = function(a, b, c) {
       null != c && (a.h[b] = c)
   }
     , um = function(a) {
       return Object.keys(a.h).map(function(b) {
           return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
       }).join("&")
   }
     , wm = function(a, b, c, d, e) {};
   var ym = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
     , zm = {
       cl: ["ecl"],
       customPixels: ["nonGooglePixels"],
       ecl: ["cl"],
       ehl: ["hl"],
       hl: ["ehl"],
       html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
       customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
       nonGooglePixels: [],
       nonGoogleScripts: ["nonGooglePixels"],
       nonGoogleIframes: ["nonGooglePixels"]
   }
     , Am = {
       cl: ["ecl"],
       customPixels: ["customScripts", "html"],
       ecl: ["cl"],
       ehl: ["hl"],
       hl: ["ehl"],
       html: ["customScripts"],
       customScripts: ["html"],
       nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
       nonGoogleScripts: ["customScripts", "html"],
       nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
   }
     , Bm = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
   var Cm = function() {
       var a = !1;
       a = !0;
       return a
   }
     , Em = function(a) {
       var b = Xd("gtm.allowlist") || Xd("gtm.whitelist");
       b && T(9);
       Cm() && (b = ["google", "gtagfl", "lcl", "zone"]);
       var c = b && Ha(za(b), zm)
         , d = Xd("gtm.blocklist") || Xd("gtm.blacklist");
       d || (d = Xd("tagTypeBlacklist")) && T(3);
       d ? T(8) : d = [];
       Dm() && (d = za(d),
       d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
       0 <= za(d).indexOf("google") && T(2);
       var e = d && Ha(za(d), Am)
         , f = {};
       return function(g) {
           var l = g && g[yb.zb];
           if (!l || "string" != typeof l)
               return !0;
           l = l.replace(/^_*/, "");
           if (void 0 !== f[l])
               return f[l];
           var m = Qd[l] || []
             , n = a(l, m);
           if (b) {
               var p;
               if (p = n)
                   a: {
                       if (0 > c.indexOf(l))
                           if (m && 0 < m.length)
                               for (var q = 0; q < m.length; q++) {
                                   if (0 > c.indexOf(m[q])) {
                                       T(11);
                                       p = !1;
                                       break a
                                   }
                               }
                           else {
                               p = !1;
                               break a
                           }
                       p = !0
                   }
               n = p
           }
           var r = !1;
           if (d) {
               var u = 0 <= e.indexOf(l);
               if (u)
                   r = u;
               else {
                   var t = ta(e, m || []);
                   t && T(10);
                   r = t
               }
           }
           var v = !n || r;
           v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = ta(e, Bm));
           return f[l] = v
       }
   }
     , Dm = function() {
       return ym.test(H.location && H.location.hostname)
   };
   var Fm = {
       initialized: 11,
       complete: 12,
       interactive: 13
   }
     , Gm = {}
     , Hm = Object.freeze((Gm[V.g.qa] = !0,
   Gm))
     , Im = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics=")
     , Km = function(a, b, c) {
       if ("config" !== a || 1 < Li(b).I.length)
           return;
       var d, e = cb("google_tag_data", {});
       e.td || (e.td = {});
       d = e.td;
       var f = O(c.globalConfig);
       O(c.eventModel, f);
       var g = [], l;
       for (l in d) {
           var m = Jm(d[l], f);
           m.length && (Im && console.log(m),
           g.push(l))
       }
       if (g.length) {
           if (g.length) {
               var n = b + "*" + g.join(".");
               pl = pl ? pl + "!" + n : "&tdc=" + n
           }
           Rc("TAGGING", Fm[I.readyState] || 14)
       }
       d[b] = f;
   };
   function Lm(a, b) {
       var c = {}, d;
       for (d in b)
           b.hasOwnProperty(d) && (c[d] = !0);
       for (var e in a)
           a.hasOwnProperty(e) && (c[e] = !0);
       return c
   }
   function Jm(a, b, c, d) {
       c = void 0 === c ? {} : c;
       d = void 0 === d ? "" : d;
       if (a === b)
           return [];
       var e = function(q, r) {
           var u = r[q];
           return void 0 === u ? Hm[q] : u
       }, f;
       for (f in Lm(a, b)) {
           var g = (d ? d + "." : "") + f
             , l = e(f, a)
             , m = e(f, b)
             , n = "object" === ub(l) || "array" === ub(l)
             , p = "object" === ub(m) || "array" === ub(m);
           if (n && p)
               Jm(l, m, c, g);
           else if (n || p || l !== m)
               c[g] = !0
       }
       return Object.keys(c)
   }
   ;var Mm = !1
     , Nm = 0
     , Om = [];
   function Pm(a) {
       if (!Mm) {
           var b = I.createEventObject
             , c = "complete" == I.readyState
             , d = "interactive" == I.readyState;
           if (!a || "readystatechange" != a.type || c || !b && d) {
               Mm = !0;
               for (var e = 0; e < Om.length; e++)
                   L(Om[e])
           }
           Om.push = function() {
               for (var f = 0; f < arguments.length; f++)
                   L(arguments[f]);
               return 0
           }
       }
   }
   function Qm() {
       if (!Mm && 140 > Nm) {
           Nm++;
           try {
               I.documentElement.doScroll("left"),
               Pm()
           } catch (a) {
               H.setTimeout(Qm, 50)
           }
       }
   }
   var Rm = function(a) {
       Mm ? a() : Om.push(a)
   };
   var Sm = function(a, b) {
       return {
           entityType: 1,
           indexInOriginContainer: a,
           nameInOriginContainer: b,
           originContainerId: mg.K
       }
   };
   var Um = function(a, b) {
       this.h = !1;
       this.F = [];
       this.J = {
           tags: []
       };
       this.X = !1;
       this.m = this.B = 0;
       Tm(this, a, b)
   }
     , Vm = function(a, b, c, d) {
       if (Gd.hasOwnProperty(b) || "__zone" === b)
           return -1;
       var e = {};
       wb(d) && (e = O(d, e));
       e.id = c;
       e.status = "timeout";
       return a.J.tags.push(e) - 1
   }
     , Wm = function(a, b, c, d) {
       var e = a.J.tags[b];
       e && (e.status = c,
       e.executionTime = d)
   }
     , Xm = function(a) {
       if (!a.h) {
           for (var b = a.F, c = 0; c < b.length; c++)
               b[c]();
           a.h = !0;
           a.F.length = 0
       }
   }
     , Tm = function(a, b, c) {
       void 0 !== b && Ym(a, b);
       c && H.setTimeout(function() {
           return Xm(a)
       }, Number(c))
   }
     , Ym = function(a, b) {
       var c = Ea(function() {
           return L(function() {
               b(mg.K, a.J)
           })
       });
       a.h ? c() : a.F.push(c)
   }
     , Zm = function(a) {
       a.B++;
       return Ea(function() {
           a.m++;
           a.X && a.m >= a.B && Xm(a)
       })
   }
     , $m = function(a) {
       a.X = !0;
       a.m >= a.B && Xm(a)
   };
   var an = function() {
       function a(d) {
           return !oa(d) || 0 > d ? 0 : d
       }
       if (!Dd._li && H.performance && H.performance.timing) {
           var b = H.performance.timing.navigationStart
             , c = oa(Yd.get("gtm.start")) ? Yd.get("gtm.start") : 0;
           Dd._li = {
               cst: a(c - b),
               cbt: a(Od - b)
           }
       }
   }
     , bn = function(a) {
       H.performance && H.performance.mark(mg.K + "_" + a + "_start")
   }
     , cn = function(a) {
       if (H.performance) {
           var b = mg.K + "_" + a + "_start"
             , c = mg.K + "_" + a + "_duration";
           H.performance.measure(c, b);
           var d = H.performance.getEntriesByName(c)[0];
           H.performance.clearMarks(b);
           H.performance.clearMeasures(c);
           var e = Dd._p || {};
           void 0 === e[a] && (e[a] = d.duration,
           Dd._p = e);
           return d.duration
       }
   }
     , dn = function() {
       if (H.performance && H.performance.now) {
           var a = Dd._p || {};
           a.PAGEVIEW = H.performance.now();
           Dd._p = a
       }
   };
   var en = {}
     , fn = function() {
       return H.GoogleAnalyticsObject && H[H.GoogleAnalyticsObject]
   }
     , gn = !1;
   var hn = function(a) {
       H.GoogleAnalyticsObject || (H.GoogleAnalyticsObject = a || "ga");
       var b = H.GoogleAnalyticsObject;
       if (H[b])
           H.hasOwnProperty(b) || T(12);
       else {
           var c = function() {
               c.q = c.q || [];
               c.q.push(arguments)
           };
           c.l = Number(Ca());
           H[b] = c
       }
       an();
       return H[b]
   }
     , jn = function(a) {
       if (vf()) {
           var b = fn();
           b(a + "require", "linker");
           b(a + "linker:passthrough", !0)
       }
   };
   function kn() {
       return H.GoogleAnalyticsObject || "ga"
   }
   var ln = function(a) {}
     , mn = function(a, b) {
       return function() {
           var c = fn()
             , d = c && c.getByName && c.getByName(a);
           if (d) {
               var e = d.get("sendHitTask");
               d.set("sendHitTask", function(f) {
                   var g = f.get("hitPayload")
                     , l = f.get("hitCallback")
                     , m = 0 > g.indexOf("&tid=" + b);
                   m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                   f.set("hitCallback", void 0, !0));
                   e(f);
                   m && (f.set("hitPayload", g, !0),
                   f.set("hitCallback", l, !0),
                   f.set("_x_19", void 0, !0),
                   e(f))
               })
           }
       }
   };
   function rn(a, b, c, d) {
       var e = $b[a]
         , f = sn(a, b, c, d);
       if (!f)
           return null;
       var g = ic(e[yb.Rg], c, []);
       if (g && g.length) {
           var l = g[0];
           f = rn(l.index, {
               onSuccess: f,
               onFailure: 1 === l.mh ? b.terminate : f,
               terminate: b.terminate
           }, c, d)
       }
       return f
   }
   function sn(a, b, c, d) {
       function e() {
           if (f[yb.Hi])
               l();
           else {
               var x = jc(f, c, []);
               var z = x[yb.Rh];
               if (null != z)
                   for (var w = 0; w < z.length; w++)
                       if (!If(z[w])) {
                           l();
                           return
                       }
               var A = Vm(c.Bb, String(f[yb.zb]), Number(f[yb.Tg]), x[yb.Ii])
                 , y = !1;
               x.vtp_gtmOnSuccess = function() {
                   if (!y) {
                       y = !0;
                       var E = G() - F;
                       Kl(c.id, $b[a], "5", E);
                       Wm(c.Bb, A, "success", E);
                       g()
                   }
               }
               ;
               x.vtp_gtmOnFailure = function() {
                   if (!y) {
                       y = !0;
                       var E = G() - F;
                       Kl(c.id, $b[a], "6", E);
                       Wm(c.Bb, A, "failure", E);
                       l()
                   }
               }
               ;
               x.vtp_gtmTagId = f.tag_id;
               x.vtp_gtmEventId = c.id;
               c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
               Kl(c.id, f, "1");
               var C = function() {
                   var E = G() - F;
                   Kl(c.id, f, "7", E);
                   Wm(c.Bb, A, "exception", E);
                   y || (y = !0,
                   l())
               };
               var F = G();
               try {
                   hc(x, {
                       event: c,
                       index: a,
                       type: 1
                   })
               } catch (E) {
                   C(E)
               }
           }
       }
       var f = $b[a]
         , g = b.onSuccess
         , l = b.onFailure
         , m = b.terminate;
       if (c.ef(f))
           return null;
       var n = ic(f[yb.Ug], c, []);
       if (n && n.length) {
           var p = n[0]
             , q = rn(p.index, {
               onSuccess: g,
               onFailure: l,
               terminate: m
           }, c, d);
           if (!q)
               return null;
           g = q;
           l = 2 === p.mh ? m : q
       }
       if (f[yb.Lg] || f[yb.Ki]) {
           var r = f[yb.Lg] ? ac : c.gk
             , u = g
             , t = l;
           if (!r[a]) {
               e = Ea(e);
               var v = tn(a, r, e);
               g = v.onSuccess;
               l = v.onFailure
           }
           return function() {
               r[a](u, t)
           }
       }
       return e
   }
   function tn(a, b, c) {
       var d = []
         , e = [];
       b[a] = un(d, e, c);
       return {
           onSuccess: function() {
               b[a] = vn;
               for (var f = 0; f < d.length; f++)
                   d[f]()
           },
           onFailure: function() {
               b[a] = wn;
               for (var f = 0; f < e.length; f++)
                   e[f]()
           }
       }
   }
   function un(a, b, c) {
       return function(d, e) {
           a.push(d);
           b.push(e);
           c()
       }
   }
   function vn(a) {
       a()
   }
   function wn(a, b) {
       b()
   }
   ;function xn(a, b) {
       if (a) {
           var c = "" + a;
           0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
           "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
           return ue("" + c + b).href
       }
   }
   function yn(a, b) {
       return zn() ? xn(a, b) : void 0
   }
   function zn() {
       var a = !1;
       return a
   }
   function An() {
       return !!Cd.Wd && "SGTM_TOKEN" !== Cd.Wd.split("@@").join("")
   }
   ;var Cn = function(a, b, c) {
       if (!Bn() && !Ag(a)) {
           var d = c ? "/gtag/js" : "/gtm.js"
             , e = "?id=" + encodeURIComponent(a) + "&l=" + Cd.ba
             , f = 0 === a.indexOf("GTM-");
           f || (e += "&cx=c");
           var g = An();
           g && (e += "&sign=" + Cd.Wd);
           var l = yn(b, d + e);
           if (!l) {
               var m = Cd.uc + d;
               g && bb && f && (m = bb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
               l = Pi("https://", "http://", m + e)
           }
           rg().container[a] = !0;
           hb(l)
       }
   }
     , Dn = function(a, b) {
       var c;
       if (c = !Bn())
           c = !rg().destination.hasOwnProperty(a);
       if (c) {
           var d = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Cd.ba + "&cx=c";
           An() && (d += "&sign=" + Cd.Wd);
           var e = yn(b, d);
           e || (e = Pi("https://", "http://", Cd.uc + d));
           rg().destination[a] = !0;
           hb(e)
       }
   };
   function Bn() {
       if (lg()) {
           return !0
       }
       return !1
   }
   ;var Fn = function(a, b) {
       return 1 === arguments.length ? En("config", a) : En("config", a, b)
   }
     , Gn = function(a, b, c) {
       c = c || {};
       c[V.g.xb] = a;
       return En("event", b, c)
   };
   function En(a) {
       return arguments
   }
   var Hn = function() {
       this.h = [];
       this.m = []
   };
   Hn.prototype.enqueue = function(a, b, c) {
       var d = this.h.length + 1;
       a["gtm.uniqueEventId"] = b;
       a["gtm.priorityId"] = d;
       c.eventId = b;
       c.fromContainerExecution = !0;
       c.priorityId = d;
       var e = {
           message: a,
           notBeforeEventId: b,
           priorityId: d,
           messageContext: c
       };
       this.h.push(e);
       for (var f = 0; f < this.m.length; f++)
           try {
               this.m[f](e)
           } catch (g) {}
   }
   ;
   Hn.prototype.listen = function(a) {
       this.m.push(a)
   }
   ;
   Hn.prototype.get = function() {
       for (var a = {}, b = 0; b < this.h.length; b++) {
           var c = this.h[b]
             , d = a[c.notBeforeEventId];
           d || (d = [],
           a[c.notBeforeEventId] = d);
           d.push(c)
       }
       return a
   }
   ;
   Hn.prototype.prune = function(a) {
       for (var b = [], c = [], d = 0; d < this.h.length; d++) {
           var e = this.h[d];
           e.notBeforeEventId === a ? b.push(e) : c.push(e)
       }
       this.h = c;
       return b
   }
   ;
   var Jn = function(a, b, c) {
       In().enqueue(a, b, c)
   }
     , Ln = function() {
       var a = Kn;
       In().listen(a)
   };
   function In() {
       var a = Dd.mb;
       a || (a = new Hn,
       Dd.mb = a);
       return a
   }
   var Tn = function(a) {
       var b = Dd.zones;
       return b ? b.getIsAllowedFn(og(), a) : function() {
           return !0
       }
   }
     , Un = function(a) {
       var b = Dd.zones;
       return b ? b.isActive(og(), a) : !0
   };
   var Xn = function(a, b) {
       for (var c = [], d = 0; d < $b.length; d++)
           if (a[d]) {
               var e = $b[d];
               var f = Zm(b.Bb);
               try {
                   var g = rn(d, {
                       onSuccess: f,
                       onFailure: f,
                       terminate: f
                   }, b, d);
                   if (g) {
                       var l = c
                         , m = l.push
                         , n = d
                         , p = e["function"];
                       if (!p)
                           throw "Error: No function name given for function call.";
                       var q = bc[p];
                       m.call(l, {
                           Jh: n,
                           Ah: q ? q.priorityOverride || 0 : 0,
                           execute: g
                       })
                   } else
                       Vn(d, b),
                       f()
               } catch (u) {
                   f()
               }
           }
       c.sort(Wn);
       for (var r = 0; r < c.length; r++)
           c[r].execute();
       return 0 < c.length
   };
   function Wn(a, b) {
       var c, d = b.Ah, e = a.Ah;
       c = d > e ? 1 : d < e ? -1 : 0;
       var f;
       if (0 !== c)
           f = c;
       else {
           var g = a.Jh
             , l = b.Jh;
           f = g > l ? 1 : g < l ? -1 : 0
       }
       return f
   }
   function Vn(a, b) {
       if (!El)
           return;
       var c = function(d) {
           var e = b.ef($b[d]) ? "3" : "4"
             , f = ic($b[d][yb.Rg], b, []);
           f && f.length && c(f[0].index);
           Kl(b.id, $b[d], e);
           var g = ic($b[d][yb.Ug], b, []);
           g && g.length && c(g[0].index)
       };
       c(a);
   }
   var $n = !1, Yn;
   var fo = function(a) {
       var b = G()
         , c = a["gtm.uniqueEventId"]
         , d = a["gtm.priorityId"]
         , e = a.event;
       if ("gtm.js" === e) {
           if ($n)
               return !1;
           $n = !0;
       }
       var l, m = !1;
       if (Un(c))
           l = Tn(c);
       else {
           if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
               return !1;
           m = !0;
           l = Tn(Number.MAX_SAFE_INTEGER)
       }
       Jl(c, e);
       var n = a.eventCallback
         , p = a.eventTimeout
         , q = n;
       var r = {
           id: c,
           priorityId: d,
           name: e,
           ef: Em(l),
           gk: [],
           uh: function() {
               T(6)
           },
           fh: ao(),
           gh: bo(c),
           Bb: new Um(q,p)
       }
         , u = nc(r);
       m && (u = co(u));
       var t = Xn(u, r)
         , v = !1;
       $m(r.Bb);
       "gtm.js" !== e && "gtm.sync" !== e || ln(mg.K);
       return eo(u, t) || v
   };
   function bo(a) {
       return function(b) {
           El && (xb(b) || Sl(a, "input", b))
       }
   }
   function ao() {
       var a = {};
       a.event = ae("event", 1);
       a.ecommerce = ae("ecommerce", 1);
       a.gtm = ae("gtm");
       a.eventModel = ae("eventModel");
       return a
   }
   function co(a) {
       for (var b = [], c = 0; c < a.length; c++)
           if (a[c]) {
               var d = String($b[c][yb.zb]);
               if (Fd[d] || void 0 !== $b[c][yb.Li] || jj[26] && (0 === d.indexOf("__ccd") || 0 === d.indexOf("__ogt") || "__set_product_settings" === d))
                   b[c] = !0
           }
       return b
   }
   function eo(a, b) {
       if (!b)
           return b;
       for (var c = 0; c < a.length; c++)
           if (a[c] && $b[c] && !Gd[String($b[c][yb.zb])])
               return !0;
       return !1
   }
   var go = function(a, b) {
       this.eventId = a;
       this.priorityId = b;
       this.eventModel = {};
       this.targetConfig = {};
       this.containerConfig = {};
       this.globalConfig = {};
       this.dataLayerConfig = {};
       this.remoteConfig = {};
       this.eventMetadata = {};
       this.onSuccess = function() {}
       ;
       this.onFailure = function() {}
       ;
       this.setContainerTypeLoaded = function() {}
       ;
       this.getContainerTypeLoaded = function() {}
       ;
       this.isGtmEvent = !1
   }
     , ho = function(a, b) {
       a.eventModel = b;
       return a
   }
     , io = function(a, b) {
       a.targetConfig = b;
       return a
   }
     , jo = function(a, b) {
       a.containerConfig = b;
       return a
   }
     , ko = function(a, b) {
       a.globalConfig = b;
       return a
   }
     , lo = function(a, b) {
       a.dataLayerConfig = b;
       return a
   }
     , mo = function(a, b) {
       a.remoteConfig = b;
       return a
   }
     , no = function(a, b) {
       a.eventMetadata = b || {};
       return a
   }
     , oo = function(a, b) {
       a.onSuccess = b;
       return a
   }
     , po = function(a, b) {
       a.setContainerTypeLoaded = b;
       return a
   }
     , qo = function(a, b) {
       a.getContainerTypeLoaded = b;
       return a
   }
     , ro = function(a, b) {
       a.onFailure = b;
       return a
   };
   go.prototype.getWithConfig = function(a) {
       if (void 0 !== this.eventModel[a])
           return this.eventModel[a];
       if (void 0 !== this.targetConfig[a])
           return this.targetConfig[a];
       if (void 0 !== this.containerConfig[a])
           return this.containerConfig[a];
       so(this, this.globalConfig[a], this.dataLayerConfig[a]) && (T(71),
       T(79));
       if (void 0 !== this.globalConfig[a])
           return this.globalConfig[a];
       if (void 0 !== this.remoteConfig[a])
           return this.remoteConfig[a]
   }
   ;
   go.prototype.getTopLevelKeys = function() {
       function a(f) {
           for (var g = Object.keys(f), l = 0; l < g.length; ++l)
               b[g[l]] = 1
       }
       var b = {};
       a(this.eventModel);
       a(this.targetConfig);
       a(this.containerConfig);
       a(this.globalConfig);
       for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
           var e = c[d];
           if ("event" !== e && "gtm" !== e && "tagTypeBlacklist" !== e && !b.hasOwnProperty(e)) {
               T(71);
               T(80);
               break
           }
       }
       return Object.keys(b)
   }
   ;
   go.prototype.getMergedValues = function(a, b) {
       function c(l) {
           wb(l) && B(l, function(m, n) {
               e = !0;
               d[m] = n
           })
       }
       var d = {}
         , e = !1;
       b && 1 !== b || (c(this.remoteConfig[a]),
       c(this.globalConfig[a]),
       c(this.containerConfig[a]),
       c(this.targetConfig[a]));
       b && 2 !== b || c(this.eventModel[a]);
       var f = e
         , g = d;
       d = {};
       e = !1;
       b && 1 !== b || (c(this.remoteConfig[a]),
       c(this.dataLayerConfig[a]),
       c(this.containerConfig[a]),
       c(this.targetConfig[a]));
       b && 2 !== b || c(this.eventModel[a]);
       if (e !== f || so(this, d, g))
           T(71),
           T(81);
       e = f;
       d = g;
       return e ? d : void 0
   }
   ;
   go.prototype.getKeysFromFirstOfAnyScope = function(a) {
       var b = {}
         , c = !1
         , d = function(g) {
           for (var l = 0; l < a.length; l++)
               void 0 !== g[a[l]] && (b[a[l]] = g[a[l]],
               c = !0);
           return c
       };
       if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
           return b;
       d(this.globalConfig);
       var e = b
         , f = c;
       b = {};
       c = !1;
       d(this.dataLayerConfig);
       so(this, b, e) && (T(71),
       T(82));
       b = e;
       c = f;
       if (c)
           return b;
       d(this.remoteConfig);
       return b
   }
   ;
   var so = function(a, b, c) {
       try {
           if (b === c)
               return !1;
           var d = ub(b);
           if (d !== ub(c) || !(wb(b) && wb(c) || "array" === d))
               return !0;
           if ("array" === d) {
               if (b.length !== c.length)
                   return !0;
               for (var e = 0; e < b.length; e++)
                   if (so(a, b[e], c[e]))
                       return !0
           } else {
               for (var f in c)
                   if (!b.hasOwnProperty(f))
                       return !0;
               for (var g in b)
                   if (!c.hasOwnProperty(g) || so(a, b[g], c[g]))
                       return !0
           }
       } catch (l) {
           T(72)
       }
       return !1
   };
   var tp = function() {
       var a = !0;
       kh(7) && kh(9) && kh(10) || (a = !1);
       return a
   }
     , up = function() {
       var a = !0;
       kh(3) && kh(4) || (a = !1);
       return a
   };
   var yp = function(a, b) {
       if (!b.isGtmEvent) {
           var c = b.getWithConfig(V.g.Ra)
             , d = b.getWithConfig(V.g.Ya)
             , e = b.getWithConfig(c);
           if (void 0 === e) {
               var f = void 0;
               vp.hasOwnProperty(c) ? f = vp[c] : wp.hasOwnProperty(c) && (f = wp[c]);
               1 === f && (f = xp(c));
               k(f) ? fn()(function() {
                   var g = fn().getByName(a).get(f);
                   d(g)
               }) : d(void 0)
           } else
               d(e)
       }
   }
     , aq = function(a, b) {
       var c = a[V.g.Mc]
         , d = b + "."
         , e = a[V.g.P] || ""
         , f = void 0 === c ? !!a.use_anchor : "fragment" === c
         , g = !!a[V.g.Wb];
       e = String(e).replace(/\s+/g, "").split(",");
       var l = fn();
       l(d + "require", "linker");
       l(d + "linker:autoLink", e, f, g)
   }
     , eq = function(a, b, c) {
       if (vf() && (!c.isGtmEvent || !bq[a])) {
           var d = !If(V.g.N)
             , e = function(f) {
               var g, l, m = fn(), n = cq(b, "", c), p, q = n.createOnlyFields._useUp;
               if (c.isGtmEvent || dq(b, n.createOnlyFields)) {
                   c.isGtmEvent && (g = "gtm" + Rd(),
                   l = n.createOnlyFields,
                   n.gtmTrackerName && (l.name = g));
                   m(function() {
                       var u = m.getByName(b);
                       u && (p = u.get("clientId"));
                       c.isGtmEvent || m.remove(b)
                   });
                   m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                   d && If(V.g.N) && (d = !1,
                   m(function() {
                       var u = fn().getByName(c.isGtmEvent ? g : b);
                       !u || u.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1",
                       n.fieldsToSet["&gcut"] = zd[f]) : (n.fieldsToSend["&gcu"] = "1",
                       n.fieldsToSend["&gcut"] = zd[f]),
                       u.set(n.fieldsToSet),
                       c.isGtmEvent ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                   }));
                   c.isGtmEvent && m(function() {
                       m.remove(g)
                   })
               }
           };
           Kf(function() {
               return e(V.g.N)
           }, V.g.N);
           Kf(function() {
               return e(V.g.D)
           }, V.g.D);
           c.isGtmEvent && (bq[a] = !0)
       }
   }
     , fq = function(a, b) {
       An() && b && (a[V.g.vb] = b)
   }
     , oq = function(a, b, c) {
       function d() {
           var K = c.getWithConfig(V.g.Fc);
           l(function() {
               if (!c.isGtmEvent && wb(K)) {
                   var P = t.fieldsToSend, R = m().getByName(n), M;
                   for (M in K)
                       if (K.hasOwnProperty(M) && /^(dimension|metric)\d+$/.test(M) && void 0 != K[M]) {
                           var J = R.get(xp(K[M]));
                           gq(P, M, J)
                       }
               }
           })
       }
       function e() {
           if (t.displayfeatures) {
               var K = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
               p("require", "displayfeatures", void 0, {
                   cookieName: K
               })
           }
       }
       var f = a
         , g = "https://www.google-analytics.com/analytics.js"
         , l = c.isGtmEvent ? hn(c.getWithConfig("gaFunctionName")) : hn();
       if (na(l)) {
           var m = fn, n;
           c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
           var p = function(K) {
               var P = [].slice.call(arguments, 0);
               P[0] = n ? n + "." + P[0] : "" + P[0];
               l.apply(window, P)
           }
             , q = function(K) {
               var P = function(Q, ca) {
                   for (var va = 0; ca && va < ca.length; va++)
                       p(Q, ca[va])
               }
                 , R = c.isGtmEvent
                 , M = R ? hq(t) : iq(b, c);
               if (M) {
                   var J = {};
                   fq(J, K);
                   p("require", "ec", "ec.js", J);
                   R && M.Xe && p("set", "&cu", M.Xe);
                   var S = M.action;
                   if (R || "impressions" === S)
                       if (P("ec:addImpression", M.sh),
                       !R)
                           return;
                   if ("promo_click" === S || "promo_view" === S || R && M.fd) {
                       var U = M.fd;
                       P("ec:addPromo", U);
                       if (U && 0 < U.length && "promo_click" === S) {
                           R ? p("ec:setAction", S, M.ob) : p("ec:setAction", S);
                           return
                       }
                       if (!R)
                           return
                   }
                   "promo_view" !== S && "impressions" !== S && (P("ec:addProduct", M.Gb),
                   p("ec:setAction", S, M.ob))
               }
           }
             , r = function(K) {
               if (K) {
                   var P = {};
                   if (wb(K))
                       for (var R in jq)
                           jq.hasOwnProperty(R) && kq(jq[R], R, K[R], P);
                   fq(P, z);
                   p("require", "linkid", P)
               }
           }
             , u = function() {
               if (lg()) {} else {
                   var K = c.getWithConfig(V.g.ui);
                   K && (p("require", K, {
                       dataLayer: Cd.ba
                   }),
                   p("require", "render"))
               }
           }
             , t = cq(n, b, c)
             , v = function(K, P, R) {
               R && (P = "" + P);
               t.fieldsToSend[K] = P
           };
           !c.isGtmEvent && dq(n, t.createOnlyFields) && (l(function() {
               m() && m().remove(n)
           }),
           lq[n] = !1);
           l("create", f, t.createOnlyFields);
           if (t.createOnlyFields[V.g.vb] && !c.isGtmEvent) {
               var x = yn(t.createOnlyFields[V.g.vb], "/analytics.js");
               x && (g = x)
           }
           var z = c.isGtmEvent ? t.fieldsToSet[V.g.vb] : t.createOnlyFields[V.g.vb];
           if (z) {
               var w = c.isGtmEvent ? t.fieldsToSet[V.g.Fd] : t.createOnlyFields[V.g.Fd];
               w && !lq[n] && (lq[n] = !0,
               l(mn(n, w)))
           }
           c.isGtmEvent ? t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
           r(t.linkAttribution));
           var A = t[V.g.oa];
           A && A[V.g.P] && aq(A, n);
           p("set", t.fieldsToSet);
           if (c.isGtmEvent) {
               if (t.enableLinkId) {
                   var y = {};
                   fq(y, z);
                   p("require", "linkid", "linkid.js", y)
               }
               vf() && eq(f, n, c)
           }
           if (b === V.g.vc)
               if (c.isGtmEvent) {
                   e();
                   if (t.remarketingLists) {
                       var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                       p("require", "adfeatures", {
                           cookieName: C
                       })
                   }
                   q(z);
                   p("send", "pageview");
                   t.createOnlyFields._useUp && jn(n + ".")
               } else
                   u(),
                   p("send", "pageview", t.fieldsToSend);
           else
               b === V.g.wa ? (u(),
               $i(f, c),
               c.getWithConfig(V.g.ab) && (zi(["aw", "dc"]),
               jn(n + ".")),
               0 != t.sendPageView && p("send", "pageview", t.fieldsToSend),
               eq(f, n, c)) : b === V.g.Fa ? yp(n, c) : "screen_view" === b ? p("send", "screenview", t.fieldsToSend) : "timing_complete" === b ? (t.fieldsToSend.hitType = "timing",
               v("timingCategory", t.eventCategory, !0),
               c.isGtmEvent ? v("timingVar", t.timingVar, !0) : v("timingVar", t.name, !0),
               v("timingValue", xa(t.value)),
               void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0),
               p("send", t.fieldsToSend)) : "exception" === b ? p("send", "exception", t.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (t.fieldsToSend.hitType = "social",
               v("socialNetwork", t.socialNetwork, !0),
               v("socialAction", t.socialAction, !0),
               v("socialTarget", t.socialTarget, !0)) : ((c.isGtmEvent || mq[b]) && q(z),
               c.isGtmEvent && e(),
               t.fieldsToSend.hitType = "event",
               v("eventCategory", t.eventCategory, !0),
               v("eventAction", t.eventAction || b, !0),
               void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0),
               void 0 !== t.value && v("eventValue", xa(t.value))),
               p("send", t.fieldsToSend));
           var F = !1;
           var E = nq;
           F && (E = c.getContainerTypeLoaded("UA"));
           if (!E && !c.isGtmEvent) {
               nq = !0;
               F && c.setContainerTypeLoaded("UA", !0);
               an();
               var D = function() {
                   F && c.setContainerTypeLoaded("UA", !1);
                   c.onFailure()
               }
                 , N = function() {
                   m().loaded || D()
               };
               lg() ? L(N) : hb(g, N, D)
           }
       } else
           L(c.onFailure)
   }
     , pq = function(a, b, c, d) {
       Lf(function() {
           oq(a, b, d)
       }, [V.g.N, V.g.D])
   }
     , rq = function(a, b) {
       function c(f) {
           function g(p, q) {
               for (var r = 0; r < q.length; r++) {
                   var u = q[r];
                   if (f[u]) {
                       m[p] = f[u];
                       break
                   }
               }
           }
           function l() {
               if (f.category)
                   m.category = f.category;
               else {
                   for (var p = "", q = 0; q < qq.length; q++)
                       void 0 !== f[qq[q]] && (p && (p += "/"),
                       p += f[qq[q]]);
                   p && (m.category = p)
               }
           }
           var m = O(f)
             , n = !1;
           if (n || b)
               g("id", ["id", "item_id", "promotion_id"]),
               g("name", ["name", "item_name", "promotion_name"]),
               g("brand", ["brand", "item_brand"]),
               g("variant", ["variant", "item_variant"]),
               g("list", ["list_name", "item_list_name"]),
               g("position", ["list_position", "creative_slot", "index"]),
               l();
           g("listPosition", ["list_position"]);
           g("creative", ["creative_name"]);
           g("list", ["list_name"]);
           g("position", ["list_position", "creative_slot"]);
           return m
       }
       b = void 0 === b ? !1 : b;
       for (var d = [], e = 0; a && e < a.length; e++)
           a[e] && wb(a[e]) && d.push(c(a[e]));
       return d.length ? d : void 0
   }
     , sq = function(a) {
       return If(a)
   }
     , tq = !1;
   var nq, lq = {}, bq = {}, uq = {}, vp = Object.freeze((uq.client_storage = "storage",
   uq.sample_rate = 1,
   uq.site_speed_sample_rate = 1,
   uq.store_gac = 1,
   uq.use_amp_client_id = 1,
   uq[V.g.ya] = 1,
   uq[V.g.ma] = "storeGac",
   uq[V.g.na] = 1,
   uq[V.g.za] = 1,
   uq[V.g.La] = 1,
   uq[V.g.Qb] = 1,
   uq[V.g.jb] = 1,
   uq[V.g.ub] = 1,
   uq)), vq = {}, wq = Object.freeze((vq._cs = 1,
   vq._useUp = 1,
   vq.allowAnchor = 1,
   vq.allowLinker = 1,
   vq.alwaysSendReferrer = 1,
   vq.clientId = 1,
   vq.cookieDomain = 1,
   vq.cookieExpires = 1,
   vq.cookieFlags = 1,
   vq.cookieName = 1,
   vq.cookiePath = 1,
   vq.cookieUpdate = 1,
   vq.legacyCookieDomain = 1,
   vq.legacyHistoryImport = 1,
   vq.name = 1,
   vq.sampleRate = 1,
   vq.siteSpeedSampleRate = 1,
   vq.storage = 1,
   vq.storeGac = 1,
   vq.useAmpClientId = 1,
   vq._cd2l = 1,
   vq)), xq = Object.freeze({
       anonymize_ip: 1
   }), yq = {}, wp = Object.freeze((yq.campaign = {
       content: "campaignContent",
       id: "campaignId",
       medium: "campaignMedium",
       name: "campaignName",
       source: "campaignSource",
       term: "campaignKeyword"
   },
   yq.app_id = 1,
   yq.app_installer_id = 1,
   yq.app_name = 1,
   yq.app_version = 1,
   yq.description = "exDescription",
   yq.fatal = "exFatal",
   yq.language = 1,
   yq.page_hostname = "hostname",
   yq.transport_type = "transport",
   yq[V.g.ka] = "currencyCode",
   yq[V.g.dg] = 1,
   yq[V.g.Na] = "location",
   yq[V.g.Ie] = "page",
   yq[V.g.Sa] = "referrer",
   yq[V.g.Yb] = "title",
   yq[V.g.lg] = 1,
   yq[V.g.Aa] = 1,
   yq)), zq = {}, Aq = Object.freeze((zq.content_id = 1,
   zq.event_action = 1,
   zq.event_category = 1,
   zq.event_label = 1,
   zq.link_attribution = 1,
   zq.name = 1,
   zq[V.g.oa] = 1,
   zq[V.g.cg] = 1,
   zq[V.g.qa] = 1,
   zq[V.g.ia] = 1,
   zq)), Bq = Object.freeze({
       displayfeatures: 1,
       enableLinkId: 1,
       enableRecaptcha: 1,
       eventAction: 1,
       eventCategory: 1,
       eventLabel: 1,
       gaFunctionName: 1,
       gtmEcommerceData: 1,
       gtmTrackerName: 1,
       linker: 1,
       remarketingLists: 1,
       socialAction: 1,
       socialNetwork: 1,
       socialTarget: 1,
       timingVar: 1,
       value: 1
   }), qq = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]), Cq = {}, jq = Object.freeze((Cq.levels = 1,
   Cq[V.g.za] = "duration",
   Cq[V.g.Qb] = 1,
   Cq)), Dq = {}, Eq = Object.freeze((Dq.anonymize_ip = 1,
   Dq.fatal = 1,
   Dq.send_page_view = 1,
   Dq.store_gac = 1,
   Dq.use_amp_client_id = 1,
   Dq[V.g.ma] = 1,
   Dq[V.g.dg] = 1,
   Dq)), kq = function(a, b, c, d) {
       if (void 0 !== c)
           if (Eq[b] && (c = ya(c)),
           "anonymize_ip" !== b || c || (c = void 0),
           1 === a)
               d[xp(b)] = c;
           else if (k(a))
               d[a] = c;
           else
               for (var e in a)
                   a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
   }, xp = function(a) {
       return a && k(a) ? a.replace(/(_[a-z])/g, function(b) {
           return b[1].toUpperCase()
       }) : a
   }, Fq = {}, mq = Object.freeze((Fq.checkout_progress = 1,
   Fq.select_content = 1,
   Fq.set_checkout_option = 1,
   Fq[V.g.Lb] = 1,
   Fq[V.g.Mb] = 1,
   Fq[V.g.sb] = 1,
   Fq[V.g.tb] = 1,
   Fq[V.g.Nb] = 1,
   Fq[V.g.va] = 1,
   Fq[V.g.Ob] = 1,
   Fq[V.g.Ea] = 1,
   Fq)), Gq = {}, Hq = Object.freeze((Gq.checkout_progress = 1,
   Gq.set_checkout_option = 1,
   Gq[V.g.Jf] = 1,
   Gq[V.g.Lb] = 1,
   Gq[V.g.Mb] = 1,
   Gq[V.g.sb] = 1,
   Gq[V.g.va] = 1,
   Gq[V.g.Ob] = 1,
   Gq[V.g.Kf] = 1,
   Gq)), Iq = {}, Jq = Object.freeze((Iq.generate_lead = 1,
   Iq.login = 1,
   Iq.search = 1,
   Iq.select_content = 1,
   Iq.share = 1,
   Iq.sign_up = 1,
   Iq.view_search_results = 1,
   Iq[V.g.tb] = 1,
   Iq[V.g.Nb] = 1,
   Iq[V.g.Ea] = 1,
   Iq)), Kq = function(a) {
       var b = "general";
       Hq[a] ? b = "ecommerce" : Jq[a] ? b = "engagement" : "exception" === a && (b = "error");
       return b
   }, Lq = {}, Mq = Object.freeze((Lq.view_search_results = 1,
   Lq[V.g.tb] = 1,
   Lq[V.g.Nb] = 1,
   Lq[V.g.Ea] = 1,
   Lq)), gq = function(a, b, c) {
       a.hasOwnProperty(b) || (a[b] = c)
   }, Nq = function(a) {
       if (pa(a)) {
           for (var b = [], c = 0; c < a.length; c++) {
               var d = a[c];
               if (void 0 != d) {
                   var e = d.id
                     , f = d.variant;
                   void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
               }
           }
           return 0 < b.length ? b.join("!") : void 0
       }
   }, cq = function(a, b, c) {
       var d = function(N) {
           return c.getWithConfig(N)
       }
         , e = {}
         , f = {}
         , g = {}
         , l = {}
         , m = Nq(d(V.g.si));
       !c.isGtmEvent && m && gq(f, "exp", m);
       g["&gtm"] = Eg(!0);
       vf() && (l._cs = sq);
       var n = d(V.g.Fc);
       if (!c.isGtmEvent && wb(n))
           for (var p in n)
               if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                   var q = d(String(n[p]));
                   void 0 !== q && gq(f, p, q)
               }
       for (var r = c.getTopLevelKeys(), u = 0; u < r.length; ++u) {
           var t = r[u];
           if (c.isGtmEvent) {
               var v = d(t);
               Bq.hasOwnProperty(t) ? e[t] = v : wq.hasOwnProperty(t) ? l[t] = v : g[t] = v
           } else {
               var x = void 0;
               x = t !== V.g.V ? d(t) : c.getMergedValues(t);
               if (Aq.hasOwnProperty(t))
                   kq(Aq[t], t, x, e);
               else if (xq.hasOwnProperty(t))
                   kq(xq[t], t, x, g);
               else if (wp.hasOwnProperty(t))
                   kq(wp[t], t, x, f);
               else if (vp.hasOwnProperty(t))
                   kq(vp[t], t, x, l);
               else if (/^(dimension|metric|content_group)\d+$/.test(t))
                   kq(1, t, x, f);
               else if (t === V.g.V) {
                   if (!tq) {
                       var z = Ka(x);
                       z && (f["&did"] = z)
                   }
                   var w = void 0
                     , A = void 0;
                   b === V.g.wa ? w = Ka(c.getMergedValues(t), ".") : (w = Ka(c.getMergedValues(t, 1), "."),
                   A = Ka(c.getMergedValues(t, 2), "."));
                   w && (f["&gdid"] = w);
                   A && (f["&edid"] = A)
               } else
                   t === V.g.Ha && 0 > r.indexOf(V.g.Qb) && (l.cookieName = x + "_ga")
           }
       }
       !1 !== d(V.g.gi) && !1 !== d(V.g.xc) && tp() || (g.allowAdFeatures = !1);
       !1 !== d(V.g.T) && up() || (g.allowAdPersonalizationSignals = !1);
       !c.isGtmEvent && d(V.g.ab) && (l._useUp = !0);
       if (c.isGtmEvent) {
           l.name = l.name || e.gtmTrackerName;
           var y = g.hitCallback;
           g.hitCallback = function() {
               na(y) && y();
               c.onSuccess()
           }
       } else {
           gq(l, "cookieDomain", "auto");
           gq(g, "forceSSL", !0);
           gq(e, "eventCategory", Kq(b));
           Mq[b] && gq(f, "nonInteraction", !0);
           "login" === b || "sign_up" === b || "share" === b ? gq(e, "eventLabel", d(V.g.cg)) : "search" === b || "view_search_results" === b ? gq(e, "eventLabel", d(V.g.Ai)) : "select_content" === b && gq(e, "eventLabel", d(V.g.ji));
           var C = e[V.g.oa] || {}
             , F = C[V.g.Vb];
           F || 0 != F && C[V.g.P] ? l.allowLinker = !0 : !1 === F && gq(l, "useAmpClientId", !1);
           f.hitCallback = c.onSuccess;
           l.name = a
       }
       vf() && (g["&gcs"] = Jf(),
       If(V.g.N) || (l.storage = "none"),
       If(V.g.D) || (g.allowAdFeatures = !1,
       l.storeGac = !1));
       var E = d(V.g.Z) || d(V.g.vb)
         , D = d(V.g.Fd);
       E && (c.isGtmEvent || (l[V.g.vb] = E),
       l._cd2l = !0);
       D && !c.isGtmEvent && (l[V.g.Fd] = D);
       e.fieldsToSend = f;
       e.fieldsToSet = g;
       e.createOnlyFields = l;
       return e
   }, hq = function(a) {
       var b = a.gtmEcommerceData;
       if (!b)
           return null;
       var c = {};
       b.currencyCode && (c.Xe = b.currencyCode);
       if (b.impressions) {
           c.action = "impressions";
           var d = b.impressions;
           c.sh = "impressions" === b.translateIfKeyEquals ? rq(d, !0) : d
       }
       if (b.promoView) {
           c.action = "promo_view";
           var e = b.promoView.promotions;
           c.fd = "promoView" === b.translateIfKeyEquals ? rq(e, !0) : e
       }
       if (b.promoClick) {
           c.action = "promo_click";
           var f = b.promoClick.promotions;
           c.fd = "promoClick" === b.translateIfKeyEquals ? rq(f, !0) : f;
           c.ob = b.promoClick.actionField;
           return c
       }
       for (var g in b)
           if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
               c.action = g;
               var l = b[g].products;
               c.Gb = "products" === b.translateIfKeyEquals ? rq(l, !0) : l;
               c.ob = b[g].actionField;
               break
           }
       return Object.keys(c).length ? c : null
   }, iq = function(a, b) {
       function c(u) {
           return {
               id: d(V.g.Ia),
               affiliation: d(V.g.ni),
               revenue: d(V.g.ia),
               tax: d(V.g.Pf),
               shipping: d(V.g.Gc),
               coupon: d(V.g.oi),
               list: d(V.g.De) || u
           }
       }
       for (var d = function(u) {
           return b.getWithConfig(u)
       }, e = d(V.g.U), f, g = 0; e && g < e.length && !(f = e[g][V.g.De]); g++)
           ;
       var l = d(V.g.Fc);
       if (wb(l))
           for (var m = 0; e && m < e.length; ++m) {
               var n = e[m], p;
               for (p in l)
                   l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && gq(n, p, n[l[p]])
           }
       var q = null
         , r = d(V.g.ri);
       a === V.g.va || a === V.g.Ob ? q = {
           action: a,
           ob: c(),
           Gb: rq(e)
       } : a === V.g.Lb ? q = {
           action: "add",
           Gb: rq(e)
       } : a === V.g.Mb ? q = {
           action: "remove",
           Gb: rq(e)
       } : a === V.g.Ea ? q = {
           action: "detail",
           ob: c(f),
           Gb: rq(e)
       } : a === V.g.tb ? q = {
           action: "impressions",
           sh: rq(e)
       } : "view_promotion" === a ? q = {
           action: "promo_view",
           fd: rq(r)
       } : "select_content" === a && r && 0 < r.length ? q = {
           action: "promo_click",
           fd: rq(r)
       } : "select_content" === a ? q = {
           action: "click",
           ob: {
               list: d(V.g.De) || f
           },
           Gb: rq(e)
       } : a === V.g.sb || "checkout_progress" === a ? q = {
           action: "checkout",
           Gb: rq(e),
           ob: {
               step: a === V.g.sb ? 1 : d(V.g.Of),
               option: d(V.g.Nf)
           }
       } : "set_checkout_option" === a && (q = {
           action: "checkout_option",
           ob: {
               step: d(V.g.Of),
               option: d(V.g.Nf)
           }
       });
       q && (q.Xe = d(V.g.ka));
       return q
   }, Oq = {}, dq = function(a, b) {
       var c = Oq[a];
       Oq[a] = O(b);
       if (!c)
           return !1;
       for (var d in b)
           if (b.hasOwnProperty(d) && b[d] !== c[d])
               return !0;
       for (var e in c)
           if (c.hasOwnProperty(e) && c[e] !== b[e])
               return !0;
       return !1
   };
   var Pq = null;
   function Qq() {
       return Pq = Pq || new Rq
   }
   var Sq = function(a, b, c, d) {
       Qq().push("event", [b, a], c, d)
   }
     , Tq = function(a, b, c) {
       Qq().push("config", [a], b, c)
   }
     , Uq = function(a, b, c, d) {
       Qq().push("get", [a, b], c, d)
   }
     , Vq = function() {
       var a = V.g.Z;
       return Qq().getGlobalConfigValue && Qq().getGlobalConfigValue(a)
   }
     , Wq = function() {
       this.status = 1;
       this.containerConfig = {};
       this.targetConfig = {};
       this.remoteConfig = {};
       this.m = {};
       this.B = null;
       this.h = !1
   }
     , Xq = function(a, b, c, d, e) {
       this.type = a;
       this.m = b;
       this.O = c || "";
       this.h = d;
       this.messageContext = e
   }
     , Rq = function() {
       this.m = {};
       this.B = {};
       this.h = [];
       this.F = {
           AW: !1,
           UA: !1
       }
   }
     , Yq = function(a, b) {
       var c = Li(b);
       return a.m[c.containerId] = a.m[c.containerId] || new Wq
   }
     , Zq = function(a, b, c, d) {
       if (d.O) {
           var e = Yq(a, d.O)
             , f = e.B;
           if (f) {
               var g = O(c)
                 , l = O(e.targetConfig[d.O])
                 , m = O(e.containerConfig)
                 , n = O(e.remoteConfig)
                 , p = O(a.B)
                 , q = {};
               try {
                   q = O(Ud)
               } catch (v) {
                   T(72)
               }
               var r = Li(d.O).prefix
                 , u = function(v) {
                   Rl(d.messageContext.eventId, r, v);
                   var x = g[V.g.Sb];
                   x && L(x)
               }
                 , t = qo(po(ro(oo(no(lo(ko(mo(jo(io(ho(new go(d.messageContext.eventId,d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                   if (u) {
                       var v = u;
                       u = void 0;
                       v("2")
                   }
               }), function() {
                   if (u) {
                       var v = u;
                       u = void 0;
                       v("3")
                   }
               }), function(v, x) {
                   a.F[v] = x
               }), function(v) {
                   return a.F[v]
               });
               try {
                   Rl(d.messageContext.eventId, r, "1"),
                   Km(d.type, d.O, t);
                   f(d.O, b, d.m, t)
               } catch (v) {
                   Rl(d.messageContext.eventId, r, "4");
               }
           }
       }
   };
   h = Rq.prototype;
   h.register = function(a, b, c) {
       var d = Yq(this, a);
       3 !== d.status && (d.B = b,
       d.status = 3,
       c && (O(d.remoteConfig, c),
       d.remoteConfig = c),
       this.flush())
   }
   ;
   h.notifyContainerLoaded = function() {}
   ;
   h.push = function(a, b, c, d) {
       if (void 0 !== c) {
           if (!Li(c))
               return;
           a: {
               var e = b[0][V.g.Z] || this.B[V.g.Z]
                 , f = "event" === a ? 2 : 1;
               if (c) {
                   var g = Li(c);
                   if (g && 1 === Yq(this, c).status)
                       if (Yq(this, c).status = 2,
                       this.push("require", [{}], g.containerId, {}),
                       lg()) {} else
                           jj[24] || (2 === f ? Dn(g.containerId, e) : Cn(g.containerId, e, !0))
               }
           }
           Yq(this, c).h && (d.deferrable = !1)
       }
       this.h.push(new Xq(a,Math.floor(G() / 1E3),c,b,d));
       d.deferrable || this.flush()
   }
   ;
   h.insert = function(a, b, c, d) {
       var e = Math.floor(G() / 1E3);
       0 < this.h.length ? this.h.splice(1, 0, new Xq(a,e,c,b,d)) : this.h.push(new Xq(a,e,c,b,d))
   }
   ;
   h.flush = function(a) {
       for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
           var f = this.h[0];
           if (f.messageContext.deferrable)
               !f.O || Yq(this, f.O).h ? (f.messageContext.deferrable = !1,
               this.h.push(f)) : c.push(f),
               this.h.shift();
           else {
               var g = void 0;
               switch (f.type) {
               case "require":
                   g = Yq(this, f.O);
                   if (3 !== g.status && !a) {
                       this.h.push.apply(this.h, c);
                       return
                   }
                   break;
               case "set":
                   B(f.h[0], function(r, u) {
                       O(Ia(r, u), b.B)
                   });
                   break;
               case "config":
                   g = Yq(this, f.O);
                   e.fb = {};
                   B(f.h[0], function(r) {
                       return function(u, t) {
                           O(Ia(u, t), r.fb)
                       }
                   }(e));
                   var l = !!e.fb[V.g.Qc];
                   delete e.fb[V.g.Qc];
                   var m = Li(f.O)
                     , n = m.containerId === m.id;
                   l || (n ? g.containerConfig = {} : g.targetConfig[f.O] = {});
                   g.h && l || Zq(this, V.g.wa, e.fb, f);
                   g.h = !0;
                   n ? O(e.fb, g.containerConfig) : (O(e.fb, g.targetConfig[f.O]),
                   T(70));
                   d = !0;
                   break;
               case "event":
                   g = Yq(this, f.O);
                   e.nd = {};
                   B(f.h[0], function(r) {
                       return function(u, t) {
                           O(Ia(u, t), r.nd)
                       }
                   }(e));
                   Zq(this, f.h[1], e.nd, f);
                   break;
               case "get":
                   g = Yq(this, f.O);
                   var p = {}
                     , q = (p[V.g.Ra] = f.h[0],
                   p[V.g.Ya] = f.h[1],
                   p);
                   Zq(this, V.g.Fa, q, f)
               }
               this.h.shift();
               $q(this, f)
           }
           e = {
               fb: e.fb,
               nd: e.nd
           }
       }
       this.h.push.apply(this.h, c);
       d && this.flush()
   }
   ;
   var $q = function(a, b) {
       if ("require" !== b.type)
           if (b.O)
               for (var c = a.getCommandListeners(b.O)[b.type] || [], d = 0; d < c.length; d++)
                   c[d]();
           else
               for (var e in a.m)
                   if (a.m.hasOwnProperty(e)) {
                       var f = a.m[e];
                       if (f && f.m)
                           for (var g = f.m[b.type] || [], l = 0; l < g.length; l++)
                               g[l]()
                   }
   };
   Rq.prototype.getRemoteConfig = function(a) {
       return Yq(this, a).remoteConfig
   }
   ;
   Rq.prototype.getCommandListeners = function(a) {
       return Yq(this, a).m
   }
   ;
   Rq.prototype.getGlobalConfigValue = function(a) {
       return this.B[a]
   }
   ;
   var ar = {}
     , br = {}
     , cr = function(a, b) {
       b = b.toString().split(",");
       for (var c = 0; c < b.length; c++) {
           var d = ar[b[c]] || [];
           ar[b[c]] = d;
           0 > d.indexOf(a) && d.push(a)
       }
   }
     , dr = function(a, b) {
       b = String(b).split(",");
       for (var c = 0; c < b.length; c++) {
           var d = br[b[c]] || [];
           br[b[c]] = d;
           0 > d.indexOf(a) && d.push(a)
       }
   }
     , er = function(a) {
       for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
           sd: d.sd,
           pd: d.pd
       },
       e++) {
           var f = a[e];
           if (0 <= f.indexOf("-")) {
               if (d.sd = Li(f),
               d.sd) {
                   var g = pg();
                   qa(g, function(q) {
                       return function(r) {
                           return q.sd.containerId === r
                       }
                   }(d)) ? b.push(f) : c.push(f)
               }
           } else {
               var l = ar[f] || [];
               d.pd = {};
               l.forEach(function(q) {
                   return function(r) {
                       return q.pd[r] = !0
                   }
               }(d));
               for (var m = og(), n = 0; n < m.length; n++)
                   if (d.pd[m[n]]) {
                       b = b.concat(pg());
                       break
                   }
               var p = br[f] || [];
               p.length && (b = b.concat(p))
           }
       }
       return {
           Fj: b,
           Hj: c
       }
   }
     , fr = function(a) {
       B(ar, function(b, c) {
           var d = c.indexOf(a);
           0 <= d && c.splice(d, 1)
       })
   }
     , gr = function(a) {
       B(br, function(b, c) {
           var d = c.indexOf(a);
           0 <= d && c.splice(d, 1)
       })
   };
   var hr = "HA GF G UA AW DC MC".split(" ")
     , ir = !1
     , jr = !1;
   function kr(a, b) {
       a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
           value: Rd()
       });
       b.eventId = a["gtm.uniqueEventId"];
       b.priorityId = a["gtm.priorityId"];
       return {
           eventId: b.eventId,
           priorityId: b.priorityId
       }
   }
   var lr = {
       config: function(a, b) {
           var c = kr(a, b);
           if (!(2 > a.length) && k(a[1])) {
               var d = {};
               if (2 < a.length) {
                   if (void 0 != a[2] && !wb(a[2]) || 3 < a.length)
                       return;
                   d = a[2]
               }
               var e = Li(a[1]);
               if (e) {
                   Jl(c.eventId, "gtag.config");
                   var f = e.id !== e.containerId
                     , g = !1
                     , l = !!d[V.g.Qc]
                     , m = !f && -1 !== og().indexOf(e.containerId);
                   m && !l && (g = jr,
                   jr = !0);
                   if (!Md || f || !g) {
                       var n = d[V.g.Z] || Vq();
                       if (f) {
                           if (!qa(pg(), function(x) {
                               return x === e.containerId
                           })) {
                               Dn(e.containerId, n);
                               return
                           }
                       } else if (!m && !lg()) {
                           Cn(e.containerId, n, !0);
                           return
                       }
                       b.noTargetGroup || (f ? (gr(e.id),
                       dr(e.id, d[V.g.Id] || "default")) : (fr(e.id),
                       cr(e.id, d[V.g.Id] || "default")));
                       delete d[V.g.Id];
                       ir || T(43);
                       var p = [e.id];
                       f || (p = pg());
                       for (var q = !1, r = 0; r < p.length; r++) {
                           var u = Li(p[r])
                             , t = O(b);
                           if (u && -1 !== hr.indexOf(u.prefix)) {
                               var v = t.eventMetadata || {};
                               v.hasOwnProperty("is_external_event") || (v.is_external_event = !t.fromContainerExecution);
                               t.eventMetadata = v;
                               delete d[V.g.Sb];
                               Tq(d, u.id, t);
                               q = !0
                           }
                       }
                       q || ($d("gtag.targets." + e.id),
                       $d("gtag.targets." + e.id, O(d)))
                   }
               }
           }
       },
       consent: function(a, b) {
           if (3 === a.length) {
               T(39);
               var c = kr(a, b)
                 , d = a[1];
               "default" === d ? Ff(a[2]) : "update" === d && Hf(a[2], c)
           }
       },
       event: function(a, b) {
           var c = a[1];
           if (!(2 > a.length) && k(c)) {
               var d;
               if (2 < a.length) {
                   if (!wb(a[2]) && void 0 != a[2] || 3 < a.length)
                       return;
                   d = a[2]
               }
               var e = d
                 , f = {}
                 , g = (f.event = c,
               f);
               e && (g.eventModel = O(e),
               e[V.g.Sb] && (g.eventCallback = e[V.g.Sb]),
               e[V.g.Ed] && (g.eventTimeout = e[V.g.Ed]));
               var l = kr(a, b)
                 , m = l.eventId
                 , n = l.priorityId;
               g["gtm.uniqueEventId"] = m;
               n && (g["gtm.priorityId"] = n);
               if ("optimize.callback" === c)
                   return g.eventModel = g.eventModel || {},
                   g;
               var p;
               var q = d
                 , r = q && q[V.g.xb];
               void 0 === r && (r = Xd(V.g.xb, 2),
               void 0 === r && (r = "default"));
               if (k(r) || pa(r)) {
                   var u = r.toString().replace(/\s+/g, "").split(",")
                     , t = er(u)
                     , v = t.Fj
                     , x = t.Hj;
                   if (x.length)
                       for (var z = q && q[V.g.Z] || Vq(), w = 0; w < x.length; w++) {
                           var A = Li(x[w]);
                           A && Dn(A.containerId, z)
                       }
                   p = Ni(v)
               } else
                   p = void 0;
               var y = p;
               if (y) {
                   Jl(m, c);
                   for (var C = [], F = 0; F < y.length; F++) {
                       var E = y[F]
                         , D = O(b);
                       if (-1 !== hr.indexOf(E.prefix)) {
                           var N = O(d)
                             , K = D.eventMetadata || {};
                           K.hasOwnProperty("is_external_event") || (K.is_external_event = !D.fromContainerExecution);
                           D.eventMetadata = K;
                           delete N[V.g.Sb];
                           Sq(c, N, E.id, D)
                       }
                       C.push(E.id)
                   }
                   g.eventModel = g.eventModel || {};
                   0 < y.length ? g.eventModel[V.g.xb] = C.join() : delete g.eventModel[V.g.xb];
                   ir || T(43);
                   return b.noGtmEvent ? void 0 : g
               }
           }
       },
       get: function(a, b) {
           T(53);
           if (4 === a.length && k(a[1]) && k(a[2]) && na(a[3])) {
               var c = Li(a[1])
                 , d = String(a[2])
                 , e = a[3];
               if (c) {
                   ir || T(43);
                   var f = Vq();
                   if (!qa(pg(), function(l) {
                       return c.containerId === l
                   }))
                       Dn(c.containerId, f);
                   else if (-1 !== hr.indexOf(c.prefix)) {
                       kr(a, b);
                       var g = {};
                       Bf(O((g[V.g.Ra] = d,
                       g[V.g.Ya] = e,
                       g)));
                       Uq(d, function(l) {
                           L(function() {
                               return e(l)
                           })
                       }, c.id, b)
                   }
               }
           }
       },
       js: function(a, b) {
           if (2 == a.length && a[1].getTime) {
               ir = !0;
               var c = kr(a, b)
                 , d = c.eventId
                 , e = c.priorityId
                 , f = {};
               return f.event = "gtm.js",
               f["gtm.start"] = a[1].getTime(),
               f["gtm.uniqueEventId"] = d,
               f["gtm.priorityId"] = e,
               f
           }
       },
       policy: function() {},
       set: function(a, b) {
           var c;
           2 == a.length && wb(a[1]) ? c = O(a[1]) : 3 == a.length && k(a[1]) && (c = {},
           wb(a[2]) || pa(a[2]) ? c[a[1]] = O(a[2]) : c[a[1]] = a[2]);
           if (c) {
               var d = kr(a, b)
                 , e = d.eventId
                 , f = d.priorityId;
               O(c);
               var g = O(c);
               Qq().push("set", [g], void 0, b);
               c["gtm.uniqueEventId"] = e;
               f && (c["gtm.priorityId"] = f);
               b.overwriteModelFields = !0;
               return c
           }
       }
   }
     , mr = {
       policy: !0
   };
   var nr = function(a) {
       var b = H[Cd.ba].hide;
       if (b && void 0 !== b[a] && b.end) {
           b[a] = !1;
           var c = !0, d;
           for (d in b)
               if (b.hasOwnProperty(d) && !0 === b[d]) {
                   c = !1;
                   break
               }
           c && (b.end(),
           b.end = null)
       }
   }
     , or = function(a) {
       var b = H[Cd.ba]
         , c = b && b.hide;
       c && c.end && (c[a] = !0)
   };
   var pr = !1
     , qr = [];
   function rr() {
       if (!pr) {
           pr = !0;
           for (var a = 0; a < qr.length; a++)
               L(qr[a])
       }
   }
   var sr = function(a) {
       pr ? L(a) : qr.push(a)
   };
   var Jr = function(a) {
       if (Ir(a))
           return a;
       this.h = a
   };
   Jr.prototype.getUntrustedMessageValue = function() {
       return this.h
   }
   ;
   var Ir = function(a) {
       return !a || "object" !== ub(a) || wb(a) ? !1 : "getUntrustedMessageValue"in a
   };
   Jr.prototype.getUntrustedMessageValue = Jr.prototype.getUntrustedMessageValue;
   var Kr = 0
     , Lr = {}
     , Mr = []
     , Nr = []
     , Or = !1
     , Pr = !1;
   function Qr(a, b) {
       return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
   }
   var Rr = function(a) {
       return H[Cd.ba].push(a)
   }
     , Sr = function(a, b) {
       var c = Dd[Cd.ba]
         , d = c ? c.subscribers : 1
         , e = 0
         , f = !1
         , g = void 0;
       b && (g = H.setTimeout(function() {
           f || (f = !0,
           a());
           g = void 0
       }, b));
       return function() {
           ++e === d && (g && (H.clearTimeout(g),
           g = void 0),
           f || (a(),
           f = !0))
       }
   };
   function Tr(a, b) {
       var c = a._clear || b.overwriteModelFields;
       B(a, function(e, f) {
           "_clear" !== e && (c && $d(e),
           $d(e, f))
       });
       Nd || (Nd = a["gtm.start"]);
       var d = a["gtm.uniqueEventId"];
       if (!a.event)
           return !1;
       "number" !== typeof d && (d = Rd(),
       a["gtm.uniqueEventId"] = d,
       $d("gtm.uniqueEventId", d));
       return fo(a)
   }
   function Ur(a) {
       if (null == a || "object" !== typeof a)
           return !1;
       if (a.event)
           return !0;
       if (wa(a)) {
           var b = a[0];
           if ("config" === b || "event" === b || "js" === b || "get" === b)
               return !0
       }
       return !1
   }
   function Vr() {
       var a;
       if (Nr.length)
           a = Nr.shift();
       else if (Mr.length)
           a = Mr.shift();
       else
           return;
       var b;
       var c = a;
       if (Or || !Ur(c.message))
           b = c;
       else {
           Or = !0;
           var d = c.message["gtm.uniqueEventId"];
           "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Rd());
           var e = {}
             , f = {
               message: (e.event = "gtm.init_consent",
               e["gtm.uniqueEventId"] = d - 2,
               e),
               messageContext: {
                   eventId: d - 2
               }
           }
             , g = {}
             , l = {
               message: (g.event = "gtm.init",
               g["gtm.uniqueEventId"] = d - 1,
               g),
               messageContext: {
                   eventId: d - 1
               }
           };
           Mr.unshift(l, c);
           b = f
       }
       return b
   }
   function Wr() {
       for (var a = !1, b; !Pr && (b = Vr()); ) {
           Pr = !0;
           delete Ud.eventModel;
           Wd();
           var c = b
             , d = c.message
             , e = c.messageContext;
           if (null == d)
               Pr = !1;
           else {
               if (e.fromContainerExecution)
                   for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                       var l = f[g]
                         , m = Xd(l, 1);
                       if (pa(m) || wb(m))
                           m = O(m);
                       Vd[l] = m
                   }
               try {
                   if (na(d))
                       try {
                           d.call(Yd)
                       } catch (A) {}
                   else if (pa(d)) {
                       var n = d;
                       if (k(n[0])) {
                           var p = n[0].split(".")
                             , q = p.pop()
                             , r = n.slice(1)
                             , u = Xd(p.join("."), 2);
                           if (null != u)
                               try {
                                   u[q].apply(u, r)
                               } catch (A) {}
                       }
                   } else {
                       var t = void 0;
                       if (wa(d))
                           a: {
                               if (d.length && k(d[0])) {
                                   var v = lr[d[0]];
                                   if (v && (!e.fromContainerExecution || !mr[d[0]])) {
                                       t = v(d, e);
                                       break a
                                   }
                               }
                               t = void 0
                           }
                       else
                           t = d;
                       t && (a = Tr(t, e) || a)
                   }
               } finally {
                   e.fromContainerExecution && Wd(!0);
                   var x = d["gtm.uniqueEventId"];
                   if ("number" === typeof x) {
                       for (var z = Lr[String(x)] || [], w = 0; w < z.length; w++)
                           Nr.push(Xr(z[w]));
                       z.length && Nr.sort(Qr);
                       delete Lr[String(x)];
                       Kr = x
                   }
                   Pr = !1
               }
           }
       }
       return !a
   }
   function Yr() {
       var b = Wr();
       try {
           nr(mg.K)
       } catch (c) {}
       return b
   }
   function Kn(a) {
       if (Kr < a.notBeforeEventId) {
           var b = String(a.notBeforeEventId);
           Lr[b] = Lr[b] || [];
           Lr[b].push(a)
       } else
           Nr.push(Xr(a)),
           Nr.sort(Qr),
           L(function() {
               Pr || Wr()
           })
   }
   function Xr(a) {
       return {
           message: a.message,
           messageContext: a.messageContext
       }
   }
   var $r = function() {
       function a(f) {
           var g = {};
           if (Ir(f)) {
               var l = f;
               f = Ir(l) ? l.getUntrustedMessageValue() : void 0;
               g.fromContainerExecution = !0
           }
           return {
               message: f,
               messageContext: g
           }
       }
       var b = cb(Cd.ba, [])
         , c = Dd[Cd.ba] = Dd[Cd.ba] || {};
       !0 === c.pruned && T(83);
       Lr = In().get();
       Ln();
       Rm(function() {
           if (!c.gtmDom) {
               c.gtmDom = !0;
               var f = {};
               b.push((f.event = "gtm.dom",
               f))
           }
       });
       sr(function() {
           if (!c.gtmLoad) {
               c.gtmLoad = !0;
               var f = {};
               b.push((f.event = "gtm.load",
               f))
           }
       });
       c.subscribers = (c.subscribers || 0) + 1;
       var d = b.push;
       b.push = function() {
           var f;
           if (0 < Dd.SANDBOXED_JS_SEMAPHORE) {
               f = [];
               for (var g = 0; g < arguments.length; g++)
                   f[g] = new Jr(arguments[g])
           } else
               f = [].slice.call(arguments, 0);
           var l = f.map(function(q) {
               return a(q)
           });
           Mr.push.apply(Mr, l);
           var m = d.apply(b, f)
             , n = Math.max(100, Number("1000") || 300);
           if (this.length > n)
               for (T(4),
               c.pruned = !0; this.length > n; )
                   this.shift();
           var p = "boolean" !== typeof m || m;
           return Wr() && p
       }
       ;
       var e = b.slice(0).map(function(f) {
           return a(f)
       });
       Mr.push.apply(Mr, e);
       if (Zr()) {
           L(Yr)
       }
   }
     , Zr = function() {
       var a = !0;
       return a
   };
   function as(a) {
       if (null == a || 0 === a.length)
           return !1;
       var b = Number(a)
         , c = G();
       return b < c + 3E5 && b > c - 9E5
   }
   ;var bs = {};
   bs.Qd = new String("undefined");
   var Cs = H.clearTimeout
     , Ds = H.setTimeout
     , W = function(a, b, c, d) {
       if (lg()) {
           b && L(b)
       } else
           return hb(a, b, c, d)
   }
     , Es = function() {
       return new Date
   }
     , Fs = function() {
       return H.location.href
   }
     , Gs = function(a) {
       return se(ue(a), "fragment")
   }
     , Hs = function(a) {
       return te(ue(a))
   }
     , Is = function(a, b) {
       return Xd(a, b || 2)
   }
     , Js = function(a, b, c) {
       var d;
       b ? (a.eventCallback = b,
       c && (a.eventTimeout = c),
       d = Rr(a)) : d = Rr(a);
       return d
   }
     , Ks = function(a, b) {
       H[a] = b
   }
     , X = function(a, b, c) {
       b && (void 0 === H[a] || c && !H[a]) && (H[a] = b);
       return H[a]
   }
     , Ls = function(a, b, c) {
       return Tf(a, b, void 0 === c ? !0 : !!c)
   }
     , Ms = function(a, b, c) {
       return 0 === bg(a, b, c)
   }
     , Ns = function(a, b) {
       if (lg()) {
           b && L(b)
       } else
           jb(a, b)
   }
     , Os = function(a) {
       return !!is(a, "init", !1)
   }
     , Ps = function(a) {
       gs(a, "init", !0)
   }
     , Qs = function(a, b, c) {
       El && (xb(a) || Sl(c, b, a))
   };
   var nt = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
   function ot(a, b) {
       a = String(a);
       b = String(b);
       var c = a.length - b.length;
       return 0 <= c && a.indexOf(b, c) === c
   }
   var pt = new sa;
   function qt(a, b, c) {
       var d = c ? "i" : void 0;
       try {
           var e = String(b) + d
             , f = pt.get(e);
           f || (f = new RegExp(b,d),
           pt.set(e, f));
           return f.test(a)
       } catch (g) {
           return !1
       }
   }
   function rt(a, b) {
       function c(g) {
           var l = ue(g)
             , m = se(l, "protocol")
             , n = se(l, "host", !0)
             , p = se(l, "port")
             , q = se(l, "path").toLowerCase().replace(/\/$/, "");
           if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p)
               m = "web",
               p = "default";
           return [m, n, p, q]
       }
       for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
           if (d[f] !== e[f])
               return !1;
       return !0
   }
   function st(a) {
       return tt(a) ? 1 : 0
   }
   function tt(a) {
       var b = a.arg0
         , c = a.arg1;
       if (a.any_of && Array.isArray(c)) {
           for (var d = 0; d < c.length; d++) {
               var e = O(a, {});
               O({
                   arg1: c[d],
                   any_of: void 0
               }, e);
               if (st(e))
                   return !0
           }
           return !1
       }
       switch (a["function"]) {
       case "_cn":
           return 0 <= String(b).indexOf(String(c));
       case "_css":
           var f;
           a: {
               if (b)
                   try {
                       for (var g = 0; g < nt.length; g++) {
                           var l = nt[g];
                           if (b[l]) {
                               f = b[l](c);
                               break a
                           }
                       }
                   } catch (m) {}
               f = !1
           }
           return f;
       case "_ew":
           return ot(b, c);
       case "_eq":
           return String(b) === String(c);
       case "_ge":
           return Number(b) >= Number(c);
       case "_gt":
           return Number(b) > Number(c);
       case "_lc":
           return 0 <= String(b).split(",").indexOf(String(c));
       case "_le":
           return Number(b) <= Number(c);
       case "_lt":
           return Number(b) < Number(c);
       case "_re":
           return qt(b, c, a.ignore_case);
       case "_sw":
           return 0 === String(b).indexOf(String(c));
       case "_um":
           return rt(b, c)
       }
       return !1
   }
   ;Object.freeze({
       dl: 1,
       id: 1
   });
   Object.freeze(["config", "event", "get", "set"]);
   function Mt() {
       return H.gaGlobal = H.gaGlobal || {}
   }
   var Nt = function() {
       var a = Mt();
       a.hid = a.hid || ra();
       return a.hid
   }
     , Ot = function(a, b) {
       var c = Mt();
       if (void 0 == c.vid || b && !c.from_cookie)
           c.vid = a,
           c.from_cookie = b
   };
   var Vu = window
     , Wu = document
     , Xu = function(a) {
       var b = Vu._gaUserPrefs;
       if (b && b.ioo && b.ioo() || a && !0 === Vu["ga-disable-" + a])
           return !0;
       try {
           var c = Vu.external;
           if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
               return !0
       } catch (f) {}
       for (var d = Nf("AMP_TOKEN", String(Wu.cookie), !0), e = 0; e < d.length; e++)
           if ("$OPT_OUT" == d[e])
               return !0;
       return Wu.getElementById("__gaOptOutExtension") ? !0 : !1
   };
   var Yu = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
   function Zu() {
       var a;
       return null != (a = H.google_tag_data) ? a : H.google_tag_data = {}
   }
   function $u() {
       var a = H.google_tag_data, b;
       if (null != a && a.uach) {
           var c = a.uach
             , d = Object.assign({}, c);
           c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
           b = d
       } else
           b = null;
       return b
   }
   function av() {
       var a, b;
       if ("function" === typeof (null == (a = H.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)) {
           var c = Zu();
           if (!c.uach_promise) {
               var d = H.navigator.userAgentData.getHighEntropyValues(Yu).then(function(e) {
                   null != c.uach || (c.uach = e);
                   return e
               });
               c.uach_promise = d
           }
       }
   }
   ;var bv = {};
   function jv(a) {
       B(a, function(c) {
           "_" === c.charAt(0) && delete a[c]
       });
       var b = a[V.g.Oa] || {};
       B(b, function(c) {
           "_" === c.charAt(0) && delete b[c]
       })
   }
   ;var tv = function(a, b, c, d, e) {
       var f = Gn(a, b, d);
       e = e || {};
       Jn(f, c, e)
   }
     , uv = function(a, b, c, d, e) {
       var f = Gn(a, b, d);
       e = e || {};
       e.deferrable = !0;
       Jn(f, c, e)
   }
     , wv = function(a, b, c) {};
   function vv(a, b, c) {
       c = void 0 === c ? {} : c;
       var d = function() {};
       return d
   }
   function yv(a, b, c) {}
   var xv = function(a, b) {
       b = b || {};
       return new iv(a.id,b)
   };
   var Cv = vv;
   var Ev = encodeURI
     , Y = encodeURIComponent
     , Fv = kb;
   var Gv = function(a, b) {
       if (!a)
           return !1;
       var c = se(ue(a), "host");
       if (!c)
           return !1;
       for (var d = 0; b && d < b.length; d++) {
           var e = b[d] && b[d].toLowerCase();
           if (e) {
               var f = c.length - e.length;
               0 < f && "." != e.charAt(0) && (f--,
               e = "." + e);
               if (0 <= f && c.indexOf(e, f) == f)
                   return !0
           }
       }
       return !1
   }
     , Hv = function(a, b, c) {
       for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
           a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
           e = !0);
       return e ? d : null
   };
   var Z = {
       o: {}
   };

   Z.o.e = ["google"],
   function() {
       (function(a) {
           Z.__e = a;
           Z.__e.s = "e";
           Z.__e.isVendorTemplate = !0;
           Z.__e.priorityOverride = 0
       }
       )(function(a) {
           return String(a.vtp_gtmCachedValues.event)
       })
   }();

   Z.o.v = ["google"],
   function() {
       (function(a) {
           Z.__v = a;
           Z.__v.s = "v";
           Z.__v.isVendorTemplate = !0;
           Z.__v.priorityOverride = 0
       }
       )(function(a) {
           var b = a.vtp_name;
           if (!b || !b.replace)
               return !1;
           var c = Is(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
             , d = void 0 !== c ? c : a.vtp_defaultValue;
           Qs(d, "v", a.vtp_gtmEventId);
           return d
       })
   }();

   Z.o.rep = ["google"],
   function() {
       (function(a) {
           Z.__rep = a;
           Z.__rep.s = "rep";
           Z.__rep.isVendorTemplate = !0;
           Z.__rep.priorityOverride = 0
       }
       )(function(a) {
           var b = Li(a.vtp_containerId), c;
           switch (b.prefix) {
           case "AW":
               c = Uo;
               break;
           case "DC":
               c = ep;
               break;
           case "GF":
               c = kp;
               break;
           case "HA":
               c = pp;
               break;
           case "UA":
               c = pq;
               break;
           case "MC":
               break;
           default:
               L(a.vtp_gtmOnFailure);
               return
           }
           if (c) {
               L(a.vtp_gtmOnSuccess);
               var d = a.vtp_containerId
                 , e = c
                 , f = a.vtp_remoteConfig || {};
               Qq().register(d, e, f)
           } else
               L(a.vtp_gtmOnFailure)
       })
   }();

   Z.o.cid = ["google"],
   function() {
       (function(a) {
           Z.__cid = a;
           Z.__cid.s = "cid";
           Z.__cid.isVendorTemplate = !0;
           Z.__cid.priorityOverride = 0
       }
       )(function() {
           return mg.K
       })
   }();

   Z.o.get = ["google"],
   function() {
       (function(a) {
           Z.__get = a;
           Z.__get.s = "get";
           Z.__get.isVendorTemplate = !0;
           Z.__get.priorityOverride = 0
       }
       )(function(a) {
           var b = a.vtp_settings
             , c = b.eventParameters || {}
             , d = String(a.vtp_eventName)
             , e = {};
           e.eventId = a.vtp_gtmEventId;
           e.priorityId = a.vtp_gtmPriorityId;
           (a.vtp_deferrable ? uv : tv)(String(b.streamId), d, e.eventId, c, e);
           a.vtp_gtmOnSuccess()
       })
   }();

   var cx = {};
   cx.dataLayer = Yd;
   cx.callback = function(a) {
       Pd.hasOwnProperty(a) && na(Pd[a]) && Pd[a]();
       delete Pd[a]
   }
   ;
   cx.bootstrap = 0;
   cx._spx = !1;
   (function(a) {
       if (!H["__TAGGY_INSTALLED"]) {
           var b = !1;
           if (I.referrer) {
               var c = ue(I.referrer);
               b = "cct.google" === re(c, "host")
           }
           if (!b) {
               var d = Tf("googTaggyReferrer");
               b = d.length && d[0].length
           }
           b && (H["__TAGGY_INSTALLED"] = !0,
           hb("https://cct.google/taggy/agent.js"))
       }
       var f = function(q) {
           var r = "GTM"
             , u = "GTM";
           r = "OGT",
           u = "GTAG";
           var t = H["google.tagmanager.debugui2.queue"];
           t || (t = [],
           H["google.tagmanager.debugui2.queue"] = t,
           hb("https://" + Cd.uc + "/debug/bootstrap?id=" + mg.K + "&src=" + u + "&cond=" + q + "&gtm=" + Eg()));
           var v = {
               messageType: "CONTAINER_STARTING",
               data: {
                   scriptSource: bb,
                   containerProduct: r,
                   debug: !1,
                   id: mg.K,
                   isGte: Md
               }
           };
           v.data.resume = function() {
               a()
           }
           ;
           Cd.Th && (v.data.initialPublish = !0);
           t.push(v)
       }
         , g = void 0
         , l = se(H.location, "query", !1, void 0, "gtm_debug");
       as(l) && (g = 2);
       if (!g && I.referrer) {
           var m = ue(I.referrer);
           "tagassistant.google.com" === re(m, "host") && (g = 3)
       }
       if (!g) {
           var n = Tf("__TAG_ASSISTANT");
           n.length && n[0].length && (g = 4)
       }
       if (!g) {
           var p = I.documentElement.getAttribute("data-tag-assistant-present");
           as(p) && (g = 5)
       }
       g && bb ? f(g) : a()
   }
   )(function() {
       var a = !1;
       a && bn("INIT");
       jf().m();
       hh();
       ai.enable_gbraid_cookie_write = !0;
       var b = !!Dd[mg.K];
       !b && mg.sc && (b = !!Dd["ctid_" + mg.sc]);
       if (b) {
           var c = Dd.zones;
           c && c.unregisterChild(og());
       } else {
           for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++)
               Xb.push(e[f]);
           for (var g = d.tags || [], l = 0; l < g.length; l++)
               $b.push(g[l]);
           for (var m = d.predicates || [], n = 0; n < m.length; n++)
               Zb.push(m[n]);
           for (var p = d.rules || [], q = 0; q < p.length; q++) {
               for (var r = p[q], u = {}, t = 0; t < r.length; t++)
                   u[r[t][0]] = Array.prototype.slice.call(r[t], 1);
               Yb.push(u)
           }
           bc = Z;
           cc = st;
           Dd[mg.K] = cx;
           mg.sc && (Dd["ctid_" + mg.sc] = cx);
           for (var v = rg(), x = og(), z = 0; z < x.length; z++)
               v.container[x[z]] = !0;
           for (var w = pg(), A = 0; A < w.length; A++)
               v.destination[w[A]] = !0;
           v.canonical[mg.sc] = !0;
           Fa(Qd, Z.o);
           ec = oc;
           $r();
           Mm = !1;
           Nm = 0;
           if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState)
               Pm();
           else {
               lb(I, "DOMContentLoaded", Pm);
               lb(I, "readystatechange", Pm);
               if (I.createEventObject && I.documentElement.doScroll) {
                   var y = !0;
                   try {
                       y = !H.frameElement
                   } catch (N) {}
                   y && Qm()
               }
               lb(H, "load", Pm)
           }
           pr = !1;
           "complete" === I.readyState ? rr() : lb(H, "load", rr);
           Xl();
           Od = G();
           cx.bootstrap = Od;
           if (a) {
               var D = cn("INIT");
           }
       }
   });

}
)()
