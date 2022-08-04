(function() {
   try {
       (function() {
           function Vf(a, c, b) {
               function d(p) {
                   return function() {
                       var u = b.o("scip", "") + p;
                       b.C("scip", u)
                   }
               }
               var e, f = Bc(a, "ci");
               f = ob(a, f);
               var g = oe(a)
                 , h = V(a)(Za)
                 , k = ["sync.cook.int"]
                 , l = ik(g.o("sci"));
               if (!l || 1440 < h - l) {
                   b.C("scip", "0");
                   var m = d("a")
                     , q = pe(a, c);
                   return f({
                       Y: k,
                       F: (e = {},
                       e.duid = q,
                       e.hid = "" + Gb(a),
                       e)
                   }, ["https://an.yandex.ru/sync_cookie"], {
                       Aa: 1500,
                       Ab: !0
                   }).then(function(p) {
                       p = n(p.Pa, "CookieMatchUrls");
                       Y(p) || (p = []);
                       va(p) ? d("1")() : m();
                       var u = Bc(a, "c")
                         , w = ob(a, u);
                       p = x(function(B, D) {
                           var Q = "" + B + (ac(B, "?") ? "&" : "?") + "duid=" + q;
                           return w({
                               Y: k
                           }, ["https://" + Q], {
                               Aa: 1500
                           }).then(A, r(d("b"), d("" + D)))
                       }, T(Ja, p));
                       return I.all(p)
                   }, m).then(function() {
                       var p = b.o("scip");
                       !p || ac(p, "a") || ac(p, "b") || (g.C("sci", h),
                       d("2")())
                   }, A)
               }
               return I.resolve()
           }
           function jk(a, c, b) {
               var d, e, f = sa(a, c);
               f && (pb(b) ? va(ca(b)) ? (a = Wf(b)) && va(a) && f.params((d = {},
               d.__ym = (e = {},
               e.fpmh = a,
               e),
               d)) : qb(a, c, "First party params error. Empty object.")() : qb(a, c, "First party params error. Not an object.")())
           }
           function Wf(a) {
               a = Da(a);
               return L(function(c, b) {
                   var d = b[0]
                     , e = b[1]
                     , f = pb(e);
                   if (!Ja(e) && !f)
                       return c;
                   e = f ? Wf(e) : e;
                   va(e) && c.push([d, e]);
                   return c
               }, [], a)
           }
           function Xf(a, c, b) {
               void 0 === b && (b = 0);
               c = Da(c);
               c = L(function(d, e) {
                   var f = e[0]
                     , g = e[1]
                     , h = pb(g);
                   if (!Ja(g) && !h)
                       return d;
                   h ? g = Xf(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = kk(g) : "email" === f && (g = lk(g)),
                   g = Yf(a, g)) : g = I.resolve(g);
                   d.push(g.then(function(k) {
                       return [f, k]
                   }));
                   return d
               }, [], c);
               return I.all(c)
           }
           function lk(a) {
               var c = db(a).toLowerCase().split("@")
                 , b = c[0];
               c = c[1];
               if (!c)
                   return a;
               c = c.replace("googlemail.com", "gmail.com");
               Zf(c) && (c = "yandex.ru");
               "yandex.ru" === c ? b = b.replace(qe, "-") : "gmail.com" === c && (b = b.replace(qe, ""));
               a = $f(b, "+");
               -1 !== a && (b = b.slice(0, a));
               return b + "@" + c
           }
           function kk(a) {
               a = vb(a);
               return "8" === a[0] ? "7" + a.slice(1) : a
           }
           function Yf(a, c) {
               return new I(function(b, d) {
                   var e = (new a.TextEncoder).encode(c);
                   a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                       f = new a.Blob([f],{
                           type: "application/octet-binary"
                       });
                       var g = new a.FileReader;
                       g.onload = function(h) {
                           h = n(h, "target.result");
                           var k = (h || "").indexOf(",");
                           -1 !== k ? b(h.substring(k + 1)) : d(Cc("fpm.i"))
                       }
                       ;
                       g.readAsDataURL(f)
                   }, d)
               }
               )
           }
           function mk(a, c, b) {
               a = na(b);
               b = a[1];
               "track" === a[0] && c({
                   version: "0",
                   cb: b
               })
           }
           function nk(a, c, b) {
               if (b) {
                   var d = b.version;
                   (b = n(ok, d + "." + b.cb)) && (c && J(b, pk) || a("ym-" + b + "-" + d))
               }
           }
           function id(a, c) {
               if (!c)
                   return !1;
               var b = P(a);
               return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
           }
           function qk(a, c) {
               return oa(a, c, function(b) {
                   var d = n(b, "settings.dr");
                   return {
                       Md: rk(a, d),
                       isEnabled: n(b, "settings.auto_goals")
                   }
               })
           }
           function sk(a, c, b, d, e) {
               b = re(a.document.body, b);
               d = re(a.document.body, d);
               J(e.target, [b, d]) && se(a, c)
           }
           function ag(a, c, b, d) {
               (b = tk(a, d, b)) && se(a, c, b)
           }
           function bg(a, c) {
               var b = cg(a, c);
               return uk(a, b)
           }
           function cg(a, c) {
               var b = re(a.document.body, c);
               return b ? vk(a, b) : ""
           }
           function se(a, c, b) {
               if (c = sa(a, c))
                   a = lc(["dr", b || "" + Ua(a, 10, 99)]),
                   c.params(lc(["__ym", a]))
           }
           function re(a, c) {
               var b = null;
               try {
                   b = c ? mc(c, a) : b
               } catch (d) {}
               return b
           }
           function dg(a) {
               a = Ea(eg(a));
               return x(function(c) {
                   c = c.charCodeAt(0).toString(2);
                   return fg("0", 8, c)
               }, a)
           }
           function vk(a, c) {
               if (!c)
                   return "";
               var b = []
                 , d = n(a, "document");
               gg(a, c, function(e) {
                   if (e.nodeType === d.TEXT_NODE)
                       var f = e.textContent;
                   else
                       e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                   (f = f && f.trim()) && b.push(f)
               });
               return 0 === b.length ? "" : b.join(" ")
           }
           function wk(a, c, b) {
               var d, e = hg(a, c), f = P(a);
               f = jd(f.protocol + "//" + f.hostname + f.pathname);
               c = kd(a, c);
               var g = "";
               do
                   g += Ua(a);
               while (g.length < c.length);
               g = g.slice(0, c.length);
               a = "";
               for (var h = 0; h < c.length; h += 1)
                   a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
               c = [g, a];
               a = c[0];
               c = c[1];
               return (d = {},
               d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f,
               d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1",
               d)[b]
           }
           function xk(a, c, b, d) {
               a = n(d, "data");
               if (Ja(a)) {
                   var e = a.split("*");
                   a = e[0];
                   var f = e[1];
                   e = e[2];
                   "sc.frame" === a ? d.source.postMessage("sc.images*" + c, "*") : "sc.image" === a && f === c && b(e)
               }
           }
           function yk(a, c, b, d) {
               d = n(d, "target");
               (d = Hb("button,input", a, d)) && "submit" === d.type && (d = ig(a, d)) && (b.push(d),
               da(a, E([!1, a, c, b, d], jg), 300))
           }
           function jg(a, c, b, d, e) {
               var f = bc(c)(e, d)
                 , g = -1 !== f;
               if (a || g)
                   g && d.splice(f, 1),
                   a = kg(c, e),
                   a = "?" + Dc(a),
                   d = E([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], lg),
                   ld(c, b, "form", d)(a)
           }
           function lg(a, c, b) {
               return zk(a, c).then(function(d) {
                   d && qb(a, c, b)()
               })
           }
           function Ak(a) {
               a = Bk(a);
               return Y(a) ? G("x", a) : a
           }
           function Ck(a) {
               return G("x", Dk(a) || [])
           }
           function Dk(a) {
               var c = n(a, "speechSynthesis.getVoices");
               if (!c)
                   return "";
               a = K(c, a.speechSynthesis);
               return Ib(function(b) {
                   return x(v(b, n), Ek)
               }, a())
           }
           function Fk(a) {
               if (a = Gk(a))
                   try {
                       for (var c = [], b = 0; b < mg.length; b += 1) {
                           var d = a(mg[b]);
                           c.push(d)
                       }
                       var e = c
                   } catch (f) {
                       e = []
                   }
               else
                   e = [];
               return e ? G("x", e) : ""
           }
           function Hk(a) {
               var c = Ik(a);
               return c ? G("x", x(function(b) {
                   b = c[b];
                   return G("x", x(r(N, fa("concat", ""), v(b, n)), ["matches", "media"]))
               }, ca(c))) : ""
           }
           function Jk(a, c) {
               var b = c.Dd;
               if (!Kk(a, b))
                   return "";
               var d = [];
               a: {
                   var e = Lk(a, b);
                   try {
                       var f = E(e, r)()();
                       break a
                   } catch (D) {
                       if ("ccf" === D.message) {
                           f = null;
                           break a
                       }
                       wb(D)
                   }
                   f = void 0
               }
               if ($a(f))
                   var g = "";
               else
                   try {
                       g = f.toDataURL()
                   } catch (D) {
                       g = ""
                   }
               (f = g) && d.push(f);
               var h = b.getContextAttributes();
               try {
                   var k = wa(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
               } catch (D) {
                   k = []
               }
               k = G(";", k);
               f = te(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
               e = te(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
               g = b.getParameter(b.ALPHA_BITS);
               h = h && h.antialias ? "yes" : "no";
               var l = b.getParameter(b.BLUE_BITS)
                 , m = b.getParameter(b.DEPTH_BITS)
                 , q = b.getParameter(b.GREEN_BITS)
                 , p = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
               if (p) {
                   var u = b.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                   0 === u && (u = 2)
               }
               u = {
                   wf: k,
                   "webgl aliased line width range": f,
                   "webgl aliased point size range": e,
                   "webgl alpha bits": g,
                   "webgl antialiasing": h,
                   "webgl blue bits": l,
                   "webgl depth bits": m,
                   "webgl green bits": q,
                   "webgl max anisotropy": p ? u : null,
                   "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                   "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                   "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                   "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                   "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                   "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                   "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                   "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                   "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                   "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                   "webgl max viewport dims": te(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                   "webgl red bits": b.getParameter(b.RED_BITS),
                   "webgl renderer": b.getParameter(b.RENDERER),
                   "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                   "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                   "webgl vendor": b.getParameter(b.VENDOR),
                   "webgl version": b.getParameter(b.VERSION)
               };
               ue(d, u, ": ");
               a: {
                   try {
                       var w = b.getExtension("WEBGL_debug_renderer_info");
                       if (w) {
                           var B = {
                               "webgl unmasked vendor": b.getParameter(w.UNMASKED_VENDOR_WEBGL),
                               "webgl unmasked renderer": b.getParameter(w.UNMASKED_RENDERER_WEBGL)
                           };
                           break a
                       }
                   } catch (D) {}
                   B = {}
               }
               ue(d, B);
               if (!b.getShaderPrecisionFormat)
                   return G("~", d);
               ue(d, Mk(b));
               return G("~", d)
           }
           function ue(a, c, b) {
               void 0 === b && (b = ":");
               H(function(d) {
                   return a.push("" + d[0] + b + d[1])
               }, Da(c))
           }
           function Nk(a) {
               var c = Ok(a);
               return c ? L(function(b, d, e) {
                   d = "" + (e + 1);
                   var f = c.supportsVersion;
                   return S(f) ? f.call(c, e + 1) ? b + d : b + "0" : b
               }, "", Pk(19)) + c.canMakePayments() : ""
           }
           function Ok(a) {
               var c = n(a, "ApplePaySession")
                 , b = P(a).protocol;
               return !c || "https:" !== b || nc(a) ? "" : c
           }
           function Qk(a, c) {
               var b = a.document;
               if (J(b.readyState, ["interactive", "complete"]))
                   cc(a, c);
               else {
                   var d = ea(a)
                     , e = d.D
                     , f = d.Sa
                     , g = function() {
                       f(b, ["DOMContentLoaded"], g);
                       f(a, ["load"], g);
                       c()
                   };
                   e(b, ["DOMContentLoaded"], g);
                   e(a, ["load"], g)
               }
           }
           function Rk(a, c) {
               var b = Sk(a)
                 , d = ka(a, "r", c)
                 , e = y(a, "rts.p");
               return oa(a, c, K(L, null, function(f, g) {
                   var h = {
                       id: g.Hd,
                       N: g.N
                   };
                   h = d({
                       M: g.xe,
                       G: pa(g.Bd),
                       F: g.J,
                       Qa: g.Qa
                   }, h, g.Ae)["catch"](e);
                   return f.then(v(h, N))
               }, I.resolve(""), b))["catch"](e)
           }
           function ng(a, c, b) {
               c = oc(a, void 0, c);
               c = og(a, c.o("phc_settings") || "");
               var d = n(c, "clientId")
                 , e = n(c, "orderId")
                 , f = n(c, "service_id")
                 , g = n(c, "phones") || [];
               return d && e && g ? Tk(a, b.qc, {
                   gd: Uk
               }).Tc(g).then(function(h) {
                   return Vk(b, {
                       Fa: d,
                       La: e,
                       bd: f
                   }, h.X, g, h.$)
               })["catch"](function() {}) : I.resolve()
           }
           function Uk(a, c, b) {
               a = Wk(b.tb);
               if ("href" === b.$b) {
                   var d = b.xa;
                   c = d.href;
                   b = c.replace(a, b.ma);
                   if (c !== b)
                       return d.href = b,
                       !0
               } else if ((a = null === (d = b.xa.textContent) || void 0 === d ? void 0 : d.replace(a, b.ma)) && a !== b.xa.textContent)
                   return b.xa.textContent = a,
                   !0;
               return !1
           }
           function Vk(a, c, b, d, e) {
               var f;
               c.Fa && c.La && (c.Fa === a.Fa && c.La === a.La || C(a, c, {
                   X: {},
                   Ib: !0
               }),
               0 < e && Va(a.$, [e]),
               H(function(g) {
                   var h, k, l = g[0];
                   g = g[1];
                   var m = +(a.X[l] && a.X[l][g] ? a.X[l][g] : 0);
                   C(a.X, (h = {},
                   h[l] = (k = {},
                   k[g] = m,
                   k),
                   h))
               }, d),
               H(function(g) {
                   var h, k, l = g[0];
                   g = g[1];
                   var m = 1 + (a.X[l] ? a.X[l][g] : 0);
                   C(a.X, (h = {},
                   h[l] = (k = {},
                   k[g] = m,
                   k),
                   h))
               }, b),
               a.Ic && (a.Ib || b.length) && ((c = sa(a.l, a.qc)) && c.params("__ym", "phc", (f = {},
               f.clientId = a.Fa,
               f.orderId = a.La,
               f.service_id = a.bd,
               f.phones = a.X,
               f.performance = a.$,
               f)),
               a.Ib = !1))
           }
           function Xk(a, c) {
               try {
                   var b = c.origin
               } catch (e) {}
               if (b) {
                   var d = Oa(r(Fa, xa(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]);
                   b = J(b.replace(/\/?$/, "/"), Yk);
                   if (d || b)
                       d = xb(a, c.data),
                       "appendremote" === n(d, "action") && Zk(a, c, d)
               }
           }
           function pg(a, c) {
               var b, d, e, f, g = c.data;
               g = void 0 === g ? "" : g;
               var h = c.id;
               h = void 0 === h ? "" : h;
               var k = M(a)
                 , l = {};
               l.getCachedTags = qg;
               l.form = (b = {},
               b.closest = v(a, ig),
               b.select = $k,
               b.getData = v(a, kg),
               b);
               l.button = (d = {},
               d.closest = v(a, rg),
               d.select = sg,
               d.getData = v(a, tg),
               d);
               l.phone = (e = {},
               e.hidePhones = E([a, null, [g]], ug),
               e);
               l.status = (f = {},
               f.checkStatus = E([a, Aa(h)], al),
               f);
               k.C("_u", l);
               b = c.lang;
               b = void 0 === b ? "" : b;
               d = c.appVersion;
               d = void 0 === d ? "" : d;
               e = c.fileId;
               e = void 0 === e ? "" : e;
               f = c.beta;
               f = void 0 === f ? !1 : f;
               d = G(".", r(eb(r(N, Aa)), pc(Boolean))(d.split(".")));
               J(e, bl) && J(b, ["ru", "en", "tr"]) ? (b = (f ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (d ? "/" + d : "") + "/form-selector/" + (e + "_" + b + ".js"),
               b = vg(b) ? b : "") : b = "";
               b && Ec(a, {
                   src: b
               })
           }
           function cl(a, c) {
               var b = fb(a);
               if (b) {
                   b = b("div");
                   var d = Jb(a);
                   if (d) {
                       b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                       var e = b.firstChild;
                       e.onload = function() {
                           Ec(e.contentWindow, {
                               src: c
                           })
                       }
                       ;
                       a._ym__remoteIframeEl = e;
                       d.appendChild(b);
                       b.removeChild(e);
                       var f = null;
                       b.attachShadow ? f = b.attachShadow({
                           mode: "open"
                       }) : b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
                       f ? f.appendChild(e) : (d.appendChild(e),
                       a._ym__remoteIframeContainer = e)
                   }
               }
           }
           function al(a) {
               var c, b = wg(a);
               a = M(a).o("getCounters", md)();
               a = x(R("id"), a);
               return c = {
                   id: b
               },
               c.counterFound = !!b && J(b, a),
               c
           }
           function ug(a, c, b) {
               var d;
               c = xg(a, c, {
                   gd: dl,
                   ne: (d = {},
                   d.href = !0,
                   d)
               });
               b = T(Boolean, x(function(f) {
                   return "*" === f ? f : vb(f)
               }, b));
               var e = x(r(N, fa("concat", [""]), el("reverse"), Ka), b);
               b = Fc(a);
               d = yg(a, b, 1E3);
               c = K(c.Tc, c, e, !1);
               d.D(c);
               fl(a, b);
               zg(a, b);
               c()
           }
           function dl(a, c, b) {
               var d = fb(a)
                 , e = b.xa
                 , f = b.tb
                 , g = e.parentNode
                 , h = e.textContent;
               if ("text" === b.$b && h && d && g) {
                   b = d("small");
                   Ag(b);
                   var k = h.split("")
                     , l = Bg(h).length;
                   H(fa("appendChild", b), L(function(m, q) {
                       var p = m.Wb
                         , u = m.nd
                         , w = d("small");
                       w.innerHTML = q;
                       var B = gl.test(q);
                       Ag(w);
                       B && (w.style.opacity = "" + (l - u - 1) / l);
                       p.push(w);
                       return {
                           Wb: p,
                           nd: u + (B ? 1 : 0)
                       }
                   }, {
                       Wb: [],
                       nd: 0
                   }, k).Wb);
                   hl(a, c, b, f);
                   g.insertBefore(b, e);
                   e.textContent = "";
                   return !0
               }
               return !1
           }
           function hl(a, c, b, d) {
               function e() {
                   H(v(["style", "opacity", ""], lc), Ea(b.childNodes));
                   if (c) {
                       var k = sa(a, c);
                       k && k.extLink("tel:" + d, {})
                   }
                   g();
                   h()
               }
               var f = ea(a)
                 , g = A
                 , h = A;
               g = f.D(b, ["mouseenter"], function(k) {
                   if (k.target === b) {
                       var l = da(a, e, 200, "ph.h.e");
                       (h || A)();
                       h = f.D(b, ["mouseleave"], function(m) {
                           m.target === b && Pa(a, l)
                       })
                   }
               })
           }
           function zg(a, c) {
               nd(a)(yb(A, function() {
                   var b, d = a.document.body, e = (b = {},
                   b.attributes = !0,
                   b.childList = !0,
                   b.subtree = !0,
                   b);
                   Ba("MutationObserver", a.MutationObserver) && (new MutationObserver(c.O)).observe(d, e)
               }))
           }
           function fl(a, c) {
               return ea(a).D(a, ["load"], c.O)
           }
           function xg(a, c, b) {
               function d(k) {
                   var l;
                   return f(a, c, k) ? null === (l = h[k.tb]) || void 0 === l ? void 0 : l.xb : null
               }
               var e, f = b.gd;
               b = b.ne;
               var g = void 0 === b ? (e = {},
               e.href = !0,
               e.text = !0,
               e) : b, h;
               return {
                   Tc: function(k) {
                       return new I(function(l, m) {
                           k && k.length || m();
                           h = Cg()(k);
                           nd(a)(yb(v({
                               X: [],
                               $: 0
                           }, l), function() {
                               var q = V(a)
                                 , p = q(W)
                                 , u = g.href ? il(a, h) : []
                                 , w = g.text ? Dg(a, h) : [];
                               l({
                                   X: T(Y, T(Boolean, x(d, u.concat(w)))),
                                   $: q(W) - p
                               })
                           }))
                       }
                       )
                   }
               }
           }
           function il(a, c) {
               var b = a.document.body;
               if (!b)
                   return [];
               var d = Eg(c);
               return L(function(e, f) {
                   var g = n(f, "href");
                   try {
                       var h = decodeURI(g || "")
                   } catch (q) {
                       h = ""
                   }
                   if ("tel:" === h.slice(0, 4)) {
                       var k = (d.exec(h) || [])[0]
                         , l = k ? vb(k) : ""
                         , m = c[l];
                       X(m) || !l && "*" !== m.xb[0] || (e.push({
                           $b: "href",
                           xa: f,
                           tb: l,
                           ma: Fg(k, c[l].ma),
                           Ie: g
                       }),
                       g = vb(h.slice(4)),
                       l = Cg()([l ? m.xb : [g, ""]]),
                       e.push.apply(e, Dg(a, l, f)))
                   }
                   return e
               }, [], Ea(b.querySelectorAll("a")))
           }
           function Dg(a, c, b) {
               void 0 === b && (b = a.document.body);
               if (!b)
                   return [];
               var d = []
                 , e = Eg(c);
               gg(a, b, function(f) {
                   if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                       var g = T(Boolean, e.exec(f.textContent || "") || []);
                       H(function(h) {
                           var k = vb(h);
                           X(c[k]) || d.push({
                               $b: "text",
                               xa: f,
                               tb: k,
                               ma: Fg(h, c[k].ma),
                               Ie: f.textContent || ""
                           })
                       }, g)
                   }
               }, function(f) {
                   return e.test(f.textContent || "") ? 1 : 0
               }, a.NodeFilter.SHOW_TEXT);
               return d
           }
           function Cg() {
               return od(function(a, c) {
                   var b = x(vb, c)
                     , d = b[0];
                   b = b[1];
                   a[d] = {
                       ma: b,
                       xb: c
                   };
                   var e = Gg(d);
                   e !== d && (a[e] = {
                       ma: Gg(b),
                       xb: c
                   });
                   return a
               }, {})
           }
           function Fg(a, c) {
               for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                   var h = d[g];
                   "0" <= h && "9" >= h ? (b.push(e[f]),
                   f += 1) : b.push(d[g])
               }
               return G("", b) + c.slice(f + 1)
           }
           function Gg(a) {
               var c = {
                   7: "8",
                   8: "7"
               };
               return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
           }
           function Eg(a) {
               return new RegExp("(?:" + G("|", x(Hg, ca(a))) + ")")
           }
           function kg(a, c, b) {
               return Ig(a, c, ["i", "n", "p"], void 0, b)
           }
           function pd(a, c, b) {
               return function(d) {
                   var e, f, g = sa(c, b);
                   g && jl(a, d, c) && (g = K(g.params, g),
                   (d = ve(a, d, "goods")) && g && g((e = {},
                   e.__ym = (f = {},
                   f.ecommerce = [d],
                   f),
                   e)))
               }
           }
           function kl(a, c, b, d) {
               var e, f;
               c = n(d, "ecommerce") || {};
               var g = n(d, "event") || "";
               c = (g = Jg[g]) ? ve(g, c, "items") : void 0;
               if (!c)
                   a: {
                       c = d;
                       !Y(d) && qd(a, va(d)) && (c = na(c));
                       if (Y(c) && (a = Jg[c[1]],
                       "event" === c[0] && a)) {
                           c = ve(a, c[2], "items");
                           break a
                       }
                       c = void 0
                   }
               (d = c || ll(d)) && b && b((e = {},
               e.__ym = (f = {},
               f.ecommerce = [d],
               f),
               e))
           }
           function ll(a) {
               var c = n(a, "ecommerce") || {};
               a = T(Kb(ml), ca(c));
               a = L(function(b, d) {
                   b[d] = c[d];
                   return b
               }, {}, a);
               return ca(a).length ? a : void 0
           }
           function jl(a, c, b) {
               var d = !1
                 , e = "";
               if (!pb(c))
                   return rb(b, "", "Ecommerce data should be an object"),
                   d;
               var f = c.goods;
               switch (a) {
               case "detail":
               case "add":
               case "remove":
                   Y(f) && f.length ? (d = Kg(function(g) {
                       return pb(g) && (Ja(g.id) || qd(b, g.id) || Ja(g.name))
                   }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                   break;
               case "purchase":
                   qd(b, c.id) || Ja(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
               }
               rb(b, "", e);
               return d
           }
           function ve(a, c, b) {
               var d, e;
               if (c) {
                   var f = c.purchase || c;
                   c = ca(f);
                   var g = f[b];
                   if (g) {
                       var h = (d = {},
                       d[a] = (e = {},
                       e.products = x(nl, g),
                       e),
                       d);
                       1 < c.length && (h[a].actionField = L(function(k, l) {
                           if (l === b)
                               return k;
                           if ("currency" === l)
                               return h.currencyCode = f.currency,
                               k;
                           k[we[l] || l] = f[l];
                           return k
                       }, {}, c));
                       return h
                   }
               }
           }
           function nl(a) {
               var c = {};
               H(function(b) {
                   var d = we[b] || b;
                   -1 !== b.indexOf("item_category") ? (d = we.item_category,
                   c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b]
               }, ca(a));
               return c
           }
           function ol(a, c, b, d) {
               var e;
               if (a = sa(a, b)) {
                   var f = d.data;
                   b = "" + b.id;
                   var g = d.sended || [];
                   d.sended || (d.sended = g);
                   J(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f),
                   g.push(b),
                   d.parent && c.Zc((e = {},
                   e.type = "params",
                   e.data = f,
                   e)))
               }
           }
           function pl(a) {
               var c = A
                 , b = null
                 , d = a.length;
               if (0 !== a.length && a[0]) {
                   var e = a.slice(-1)[0];
                   S(e) && (c = e,
                   d = a.length + -1);
                   var f = a.slice(-2)[0];
                   S(f) && (c = f,
                   b = e,
                   d = a.length + -2);
                   d = a.slice(0, d);
                   return {
                       Jd: b,
                       ra: c,
                       J: 1 === d.length ? a[0] : lc(d)
                   }
               }
           }
           function nd(a, c) {
               function b(e) {
                   n(c, d) ? e() : da(a, v(e, b), 100)
               }
               void 0 === c && (c = a);
               var d = (c.nodeType ? "contentWindow." : "") + "document.body";
               return xa(function(e, f) {
                   b(f)
               })
           }
           function gg(a, c, b, d, e) {
               function f(g) {
                   return S(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
               }
               void 0 === e && (e = -1);
               if (S(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c),
               !Lg(c)))
                   for (c = a.document.createTreeWalker(c, e, d ? {
                       acceptNode: f
                   } : null, !1); c.nextNode() && !1 !== b(c.currentNode); )
                       ;
           }
           function ql(a) {
               var c = a.l
                 , b = sb(a.V);
               if (b) {
                   var d = Math.random();
                   a = {
                       x: b.scrollLeft,
                       y: b.scrollTop
                   };
                   if (b.Tb) {
                       if (d = xe[b.Tb],
                       !d || 10 > Math.abs(a.x - d.x) && 10 > Math.abs(a.y - d.y))
                           return
                   } else {
                       for (; xe[d]; )
                           d = Math.random();
                       b.Tb = d
                   }
                   xe[b.Tb] = a;
                   if (b !== c.document) {
                       d = tb(c, b);
                       c = Ga(c);
                       var e = [];
                       b = b[ya];
                       !b || 0 > b ? a = [] : (Ha(e, 16),
                       F(e, c),
                       F(e, a.x),
                       F(e, a.y),
                       F(e, b),
                       a = e);
                       a = Z(d, a)
                   } else
                       a = [];
                   return a
               }
           }
           function Mg(a) {
               var c = a.l
                 , b = a.V;
               Ng(a);
               if (b.touches && b.touches.length) {
                   var d = sb(b);
                   if (d && d !== c.document)
                       return Z(tb(c, d), Ib(function(e) {
                           return Og(c, Ga(c), "touch", d, [e.pageX, e.pageY], 0, 0)
                       }, Ea(b.touches)))
               }
           }
           function rl(a) {
               var c = a.l;
               a = Ga(c);
               var b = rd(c)
                 , d = Pg(c);
               c = [];
               var e = b[0];
               b = b[1];
               var f = d[0];
               d = d[1];
               Ha(c, 28);
               F(c, a);
               F(c, e);
               F(c, b);
               F(c, f);
               F(c, d);
               return c
           }
           function Qg(a) {
               var c = [];
               return Qa(a.l, c, 13) ? [] : c
           }
           function sl(a) {
               var c = a.l;
               a = a.V;
               var b = sb(a);
               if (b) {
                   var d;
                   "wheel" === a.type ? d = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" === a.type && a.wheelDelta && (d = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                   if (d) {
                       var e = sd(c, a);
                       a = tb(c, b);
                       c = Ga(c);
                       e = [e.x, e.y];
                       b = b[ya];
                       if (!b || 0 > b)
                           b = [];
                       else {
                           var f = [];
                           Ha(f, 31);
                           F(f, c);
                           F(f, b);
                           F(f, e[0]);
                           F(f, e[1]);
                           Ha(f, 0);
                           Ha(f, 0);
                           Ha(f, d);
                           b = f
                       }
                       return Z(a, b)
                   }
               }
           }
           function Ng(a) {
               var c = a.l;
               a = ye(c);
               var b = V(c)(W);
               if (!(10 > b - Rg || 10 > Math.abs(a.x - ze.x) && 10 > Math.abs(a.y - ze.y)))
                   return Rg = b,
                   ze = a,
                   c = Ga(c),
                   b = [],
                   Ha(b, 3),
                   F(b, c),
                   F(b, a.x),
                   F(b, a.y),
                   b
           }
           function tl(a) {
               var c = a.l
                 , b = a.V
                 , d = V(c)(W)
                 , e = d - Sg;
               if (!(10 > e)) {
                   c = sd(c, b);
                   b = Ae.x - c.x;
                   var f = Ae.y - c.y;
                   b = b * b + f * f;
                   if (!(0 >= b || 16 > b && 100 > e || 20 > e && 256 > b))
                       return Sg = d,
                       Ae = c,
                       Gc(a)
               }
           }
           function ul(a, c, b, d, e) {
               function f() {
                   k && k.stop()
               }
               if (!c.zb)
                   return I.resolve(A);
               var g = ka(a, "4", c)
                 , h = {
                   F: {
                       "wv-type": "0"
                   },
                   G: pa()
               };
               b = new vl(a,b,function(l, m, q) {
                   if (!g)
                       return I.resolve();
                   m = "wv-data=" + Tg(l, !0);
                   for (var p = l.length, u = 0, w = 255, B = 255, D, Q, ha; p; ) {
                       D = 21 < p ? 21 : p;
                       p -= D;
                       do
                           Q = "string" === typeof l ? l.charCodeAt(u) : l[u],
                           u += 1,
                           255 < Q && (ha = Q >> 8,
                           Q &= 255,
                           Q ^= ha),
                           w += Q,
                           B += w;
                       while (--D);
                       w = (w & 255) + (w >> 8);
                       B = (B & 255) + (B >> 8)
                   }
                   l = (w & 255) + (w >> 8) << 8 | (B & 255) + (B >> 8);
                   return g(C({}, h, {
                       M: m,
                       F: {
                           "wv-check": 65535 === l ? 0 : l,
                           "wv-type": "0"
                       }
                   }), c, q)["catch"](y(a, "m.n.m.s"))
               }
               );
               var k = wl(a, b, d, e);
               return oa(a, c, function(l) {
                   l && M(a).C("isEU", n(l, "settings.eu"));
                   if (!Be(a) && k) {
                       var m = Lb(a)
                         , q = m.o("visorc");
                       J(q, ["w", "b"]) || (q = "");
                       Ug(a) && Vg(a, td, "visorc") && !xl.test(gb(a) || "") || (q = "b");
                       l = n(l, "settings.webvisor.recp");
                       if (!a.isFinite(l) || 0 > l || 1 < l)
                           q = "w";
                       q || (q = M(a).o("hitId") % 1E4 / 1E4 < l ? "w" : "b");
                       m.C("visorc", q, 30);
                       "w" === q && k.start()
                   }
                   return f
               })
           }
           function wl(a, c, b, d) {
               var e = a.document
                 , f = []
                 , g = ea(a)
                 , h = ":submit" + Math.random()
                 , k = []
                 , l = K(c.flush, c)
                 , m = aa(function(u, w) {
                   y(a, "hfv." + u, function() {
                       try {
                           var B = w.type
                       } catch (D) {
                           return
                       }
                       B = J(B, d);
                       c.push(w, {
                           type: u
                       });
                       B && l()
                   })()
               })
                 , q = y(a, "sfv", function() {
                   if (!Ce(a)) {
                       var u = b(a)
                         , w = yl(a);
                       H(function(B) {
                           f.push(g.D(B.target, [B.event], m(B.type)))
                       }, u);
                       H(function(B) {
                           f.push(g.D(B.target, [B.event], y(a, "hff." + B.type + "." + B.event, function(D) {
                               H(xa({
                                   l: a,
                                   V: D,
                                   flush: l
                               }), B.H)
                           })))
                       }, w);
                       k = Wg(a, "form", e);
                       e.attachEvent && (u = Wg(a, "form *", e),
                       H(function(B) {
                           f.push(g.D(B, ["submit"], m("form")))
                       }, k),
                       H(function(B) {
                           De(B) && f.push(g.D(B, ["change"], m("formInput")))
                       }, u));
                       H(function(B) {
                           var D = B.submit;
                           if (S(D) || "object" === typeof D && zl.test("" + D))
                               B[h] = D,
                               B.submit = y(a, "fv", function() {
                                   var Q = {
                                       target: B,
                                       type: "submit"
                                   };
                                   m("document")(Q);
                                   return B[h]()
                               })
                       }, k)
                   }
               })
                 , p = y(a, "ufv", function() {
                   H(Ka, f);
                   H(function(u) {
                       u && (u.submit = u[h])
                   }, k);
                   c.flush()
               });
               return {
                   start: q,
                   stop: p
               }
           }
           function Xg(a, c) {
               var b = T(function(e) {
                   return 0 < e.H.length
               }, c)
                 , d = Yg({
                   target: a.document,
                   type: "document"
               });
               return x(r(N, d, Al(a)), b)
           }
           function Zg(a, c) {
               var b = a.l
                 , d = []
                 , e = c.form;
               if (!c[ya] && e) {
                   var f = e.elements;
                   e = e.length;
                   for (var g = 0; g < e; g += 1) {
                       var h = f[g];
                       ud(h) && !h[ya] && Va(d, tb(b, h))
                   }
               } else
                   Va(d, tb(b, c));
               return d
           }
           function Ee(a) {
               if (Hc) {
                   Hc = !1;
                   var c = Ga(a.l)
                     , b = [];
                   Qa(a.l, b, 15) ? a = [] : (F(b, c),
                   a = b);
                   return a
               }
           }
           function $g(a) {
               if (!Hc) {
                   Hc = !0;
                   a = Ga(a.l);
                   var c = [];
                   Ha(c, 14);
                   F(c, a);
                   return c
               }
           }
           function Bl(a, c, b) {
               var d = c[ya];
               if (d) {
                   a: {
                       var e = Ga(a)
                         , f = c[ya];
                       if (0 < f) {
                           var g = [];
                           c = Fe(a, c);
                           var h = dc[f]
                             , k = c[0] + "x" + c[1]
                             , l = c[2] + "x" + c[3];
                           if (k !== h.Pc) {
                               h.Pc = k;
                               if (Qa(a, g, 9)) {
                                   a = [];
                                   break a
                               }
                               F(g, e);
                               F(g, f);
                               F(g, c[0]);
                               F(g, c[1])
                           }
                           if (l !== h.size) {
                               h.size = l;
                               if (Qa(a, g, 10)) {
                                   a = [];
                                   break a
                               }
                               F(g, e);
                               F(g, f);
                               F(g, c[2]);
                               F(g, c[3])
                           }
                           if (g.length) {
                               a = g;
                               break a
                           }
                       }
                       a = []
                   }
                   Va(b, a)
               }
               return d
           }
           function vd(a, c, b) {
               void 0 === b && (b = !1);
               if ("button" === c.getAttribute("type"))
                   return {
                       Ka: !1,
                       yc: !1,
                       Hc: !1
                   };
               var d = c && Mb("ym-record-keys", c)
                 , e = ah(c);
               a = Ge(a, c) || b && e;
               return {
                   Ka: !(d || !a),
                   yc: d,
                   Hc: e
               }
           }
           function Ge(a, c) {
               return bh(a, c) || Ic(a, c) ? !0 : ch(a, c)
           }
           function ah(a) {
               if (!a)
                   return !1;
               var c = a.placeholder
                 , b = a.type;
               a = T(dh, [a.className, a.id, a.name]);
               return b && J(b, Cl) || Oa(Fa(Dl), a) || dh(c) && El.test(c)
           }
           function dh(a) {
               return !!(a && 2 < a.length)
           }
           function eh(a, c) {
               return c && Mb("(ym-disable-submit|-metrika-noform)", c)
           }
           function ch(a, c) {
               if (qa(c))
                   return !1;
               if (Lg(c)) {
                   var b = c.parentNode;
                   return (qa(b) ? 0 : 11 === b.nodeType) ? !1 : ch(a, c.parentNode)
               }
               if (Fl.test(c.className))
                   return !0;
               b = fh(a);
               if (!b)
                   return !1;
               var d = b.call(c, ".ym-hide-content *");
               return d && (Gl.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
           }
           function Hl(a) {
               return !!Nb(function(c) {
                   return J(c.type, ["articleInfo", "publishersHeader"])
               }, a)
           }
           function wd(a) {
               return Y(a) ? x(wd, a) : qa(a) || "object" !== typeof a ? a : L(function(c, b) {
                   var d = b[0]
                     , e = b[1]
                     , f = Il[d];
                   X(f) && (f = d);
                   e = J(f, Jl) ? e : wd(e);
                   f ? c[f] = e : c[d] = e;
                   return c
               }, {}, Da(a))
           }
           function Kl(a, c) {
               return oa(a, c, function(b) {
                   var d = M(a);
                   O(c);
                   if (!d.o("dSync", !1))
                       return d.C("dSync", !0),
                       gh(a, b, {
                           sa: c,
                           rb: "s",
                           Rb: "ds",
                           He: function(e, f, g) {
                               var h = e.Pa;
                               e = e.host;
                               if (n(h, "settings"))
                                   return wb(Wa("ds.e"));
                               f = f(W) - g;
                               g = e[1];
                               var k, l;
                               h = pa((k = {},
                               k.di = h,
                               k.dit = f,
                               k.dip = g,
                               k));
                               k = (l = {},
                               l["page-url"] = P(a).href,
                               l);
                               return ka(a, "S", hh)({
                                   G: h,
                                   F: k
                               }, hh)["catch"](y(a, "ds.rs"))
                           }
                       })
               })
           }
           function gh(a, c, b) {
               var d = b.sa
                 , e = V(a)
                 , f = Ll(a, c.userData, d)
                 , g = Ml(a);
               return g.length ? Nl(a, e, f, c, b).then(function() {
                   return Ol(a, g, f, e, b)
               }, A) : I.resolve()
           }
           function Ml(a) {
               var c = xd(a);
               a = r(He, Kb(["iPhone", "iPad"]))(a);
               return c ? Pl : a ? Ql : []
           }
           function Ol(a, c, b, d, e) {
               var f = e.He
                 , g = void 0 === f ? A : f
                 , h = e.Rb
                 , k = d(W);
               return Rl(a, c, e)(yb(function(l) {
                   H(function(m) {
                       m && yd(a, h + ".s", m)
                   }, l);
                   l = d(Za);
                   b.C(h, l)
               }, function(l) {
                   b.C(h, d(Za));
                   g(l, d, k)
               }))
           }
           function Nl(a, c, b, d, e) {
               var f = e.Rb
                 , g = e.sa;
               return new I(function(h, k) {
                   var l = b.o(f, 0);
                   l = parseInt("" + l, 10);
                   return 60 >= c(Za) - l ? k() : Sl(a) ? h(void 0) : ih(d) ? k() : h(Tl(a, g))
               }
               )
           }
           function Rl(a, c, b) {
               var d = b.rb
                 , e = b.data
                 , f = ka(a, d, b.sa);
               a = C({}, jh);
               e && C(a.F, e);
               return Ul(x(function(g) {
                   return Vl(f(jh, x(function(h) {
                       var k = h[1]
                         , l = h[2];
                       h = G("", x(function(m) {
                           return String.fromCharCode(m.charCodeAt(0) + 10)
                       }, h[0].split("")));
                       return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Wl[d]
                   }, g), {
                       od: !1,
                       Ce: !0
                   }).then(function(h) {
                       return C({}, h, {
                           host: g[h.kd]
                       })
                   }))
               }, c))
           }
           function Ll(a, c, b) {
               var d = c || {}
                 , e = ka(a, "u", b)
                 , f = La(a);
               return {
                   o: function(g, h) {
                       return X(d[g]) ? f.o(g, h) : d[g]
                   },
                   C: function(g, h) {
                       var k, l = "" + h;
                       d[g] = l;
                       f.C(g, l);
                       return e({
                           F: (k = {},
                           k.key = g,
                           k.value = l,
                           k)
                       }, [ra.ha + "//mc.yandex.ru/user_storage_set"], {})["catch"](y(a, "u.d.s.s"))
                   }
               }
           }
           function kh(a, c, b) {
               var d = n(a, "AppMetricaInitializer")
                 , e = n(d, "init");
               if (e)
                   try {
                       K(e, d)(hb(a, c))
                   } catch (f) {}
               else
                   lh = da(a, E([a, c, 2 * b], kh), b, "ai.d");
               return function() {
                   return Pa(a, lh)
               }
           }
           function Xl(a, c, b) {
               if (b && (b = rg(a, b),
               b = tg(a, b))) {
                   b = "?" + Dc(b);
                   var d = qb(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                   ld(a, c, "btn", d)(b)
               }
           }
           function Yl(a, c) {
               var b = La(a);
               if ("" !== b.o("cc"))
                   return 0;
               var d = v("cc", b.C);
               d(0);
               var e = V(a)
                 , f = M(a);
               f = r(R(ib({
                   Pa: 1
               }) + ".c"), Jc(function(g) {
                   d(g + "&" + e(Za))
               }), v("cc", f.C));
               ka(a, "6", c)({}).then(f)["catch"](r(Jc(function() {
                   var g = e(Za);
                   b.C("cc", "&" + g)
               }), y(a, "cc")))
           }
           function Zl(a, c) {
               var b;
               a((b = {},
               b.clickmap = X(c) ? !0 : c,
               b))
           }
           function $l(a, c, b, d, e) {
               var f;
               c = {
                   G: pa(),
                   F: (f = {},
                   f["page-url"] = c,
                   f["pointer-click"] = b,
                   f)
               };
               d(c, e)["catch"](y(a, "c.s.c"))
           }
           function am(a, c, b, d, e) {
               if (Kc(a, "ymDisabledClickmap") || Ce(a) || !c || !c.element)
                   return !1;
               a = Xa(c.element);
               if (e && !e(c.element, a) || J(c.button, [2, 3]) && "A" !== a || Oa(la(a), d))
                   return !1;
               d = c.element;
               if (c && b) {
                   if (50 > c.time - b.time)
                       return !1;
                   e = Math.abs(b.position.x - c.position.x);
                   a = Math.abs(b.position.y - c.position.y);
                   c = c.time - b.time;
                   if (b.element === d && 2 > e && 2 > a && 1E3 > c)
                       return !1
               }
               for (; d; ) {
                   if (bm(d))
                       return !1;
                   d = d.parentElement
               }
               return !0
           }
           function cm(a, c) {
               var b = null;
               try {
                   if (b = c.target || c.srcElement)
                       !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
               } catch (d) {}
               return b
           }
           function dm(a) {
               var c = a.which;
               a = a.button;
               return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
           }
           function sd(a, c) {
               var b = Jb(a)
                 , d = ye(a);
               return {
                   x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                   y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
               }
           }
           function em(a) {
               var c = y(a, "i.clch", fm);
               ea(a).D(a.document, ["click"], K(c, null, a), {
                   passive: !1
               });
               return function(b) {
                   var d = ra.ha
                     , e = a.Ya[ra.Db]
                     , f = !!e._informer;
                   e._informer = C({
                       domain: "metrika-informer.com"
                   }, b);
                   f || Ec(a, {
                       src: d + "//metrika-informer.com/metrika/informer.js"
                   })
               }
           }
           function gm(a) {
               var c = void 0;
               void 0 === c && (c = hm);
               var b = n(a, "navigator") || {};
               c = x(v(b, n), c);
               c = G("x", c);
               try {
                   var d = n(a, "navigator.getGamepads");
                   var e = wa(d, "getGamepads") && a.navigator.getGamepads() || []
               } catch (f) {
                   e = []
               }
               return c + "x" + va(e)
           }
           function im(a) {
               try {
                   var c = va(a) ? a : [];
                   return G(",", [a.name, a.description, r(Ea, pc(Boolean), eb(jm), Lc(","))(c)])
               } catch (b) {
                   return ""
               }
           }
           function jm(a) {
               return G(",", [a.description, a.suffixes, a.type])
           }
           function Mk(a) {
               return L(function(c, b) {
                   var d = b[0]
                     , e = b[1];
                   c[d + " precision"] = n(e, "precision") || "n";
                   c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                   c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                   return c
               }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
           }
           function Lk(a, c) {
               return [function() {
                   var b = c.createBuffer();
                   b && c.getParameter && Ba("getParameter", c.getParameter) || Ie();
                   c.bindBuffer(c.ARRAY_BUFFER, b);
                   var d = new a.Float32Array(km);
                   c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                   b.ke = 3;
                   b.se = 3;
                   d = c.createProgram();
                   var e = c.createShader(c.VERTEX_SHADER);
                   d && e || Ie();
                   return {
                       Zb: d,
                       Ve: e,
                       Ue: b
                   }
               }
               , function(b) {
                   var d = b.Zb
                     , e = b.Ve;
                   c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                   c.compileShader(e);
                   c.attachShader(d, e);
                   (d = c.createShader(c.FRAGMENT_SHADER)) || Ie();
                   return C(b, {
                       Vd: d
                   })
               }
               , function(b) {
                   var d = b.Zb
                     , e = b.Vd;
                   c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                   c.compileShader(e);
                   c.attachShader(d, e);
                   c.linkProgram(d);
                   c.useProgram(d);
                   return b
               }
               , function(b) {
                   var d = b.Zb;
                   b = b.Ue;
                   d.Te = c.getAttribLocation(d, "attrVertex");
                   d.ue = c.getUniformLocation(d, "uniformOffset");
                   c.enableVertexAttribArray(d.dg);
                   c.vertexAttribPointer(d.Te, b.ke, c.FLOAT, !1, 0, 0);
                   c.uniform2f(d.ue, 1, 1);
                   c.drawArrays(c.TRIANGLE_STRIP, 0, b.se);
                   return c.canvas
               }
               ]
           }
           function Kk(a, c) {
               if (!S(a.Float32Array))
                   return !1;
               var b = n(c, "canvas");
               if (!b || !Ba("toDataUrl", b.toDataURL))
                   return !1;
               try {
                   c.createBuffer()
               } catch (d) {
                   return !1
               }
               return !0
           }
           function te(a, c) {
               c.clearColor(0, 0, 0, 1);
               c.enable(c.DEPTH_TEST);
               c.depthFunc(c.LEQUAL);
               c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
               return "[" + n(a, "0") + ", " + n(a, "1") + "]"
           }
           function lm(a) {
               a = n(a, "screen") || {};
               return G("x", x(v(a, n), mm))
           }
           function Ik(a) {
               var c = n(a, "matchMedia");
               if (!c || !Ba("matchMedia", c))
                   return "";
               var b = fa("matchMedia", a);
               return L(function(d, e) {
                   d[e] = b("(" + e + ")");
                   return d
               }, {}, nm)
           }
           function Bk(a) {
               a = fb(a);
               if (!a)
                   return "";
               a = a("video");
               try {
                   var c = fa("canPlayType", a)
                     , b = Ib(function(d) {
                       return x(r(N, fa("concat", d + "; codecs=")), om)
                   }, mh);
                   return x(c, [].concat(mh, b))
               } catch (d) {
                   return "canPlayType"
               }
           }
           function pm(a) {
               a = n(a, "navigator") || {};
               return a.doNotTrack || a.msDoNotTrack || "unknown"
           }
           function qm(a, c) {
               if (a.Ne()) {
                   var b = nh(c);
                   if (b && !Mb("ym-disable-tracklink", b)) {
                       var d = a.l
                         , e = a.Id
                         , f = a.sa
                         , g = a.sender
                         , h = a.Rd
                         , k = f.gb
                         , l = b.href
                         , m = db(b && b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                       m = l === m ? "" : m;
                       if (Mb("ym-external-link", b))
                           zd(d, f, {
                               url: l,
                               Ja: !0,
                               title: m,
                               sender: g
                           });
                       else {
                           k = k ? Ad(d, k).hostname : P(d).hostname;
                           h = RegExp("\\.(" + G("|", x(rm, h)) + ")$", "i");
                           var q = b.protocol + "//" + b.hostname + b.pathname;
                           h = oh.test(q) || oh.test(l) || h.test(l) || h.test(q);
                           b = b.hostname;
                           Bd(k) === Bd(b) ? h ? zd(d, f, {
                               url: l,
                               kb: !0,
                               title: m,
                               sender: g
                           }) : m && e.C("il", db(m).slice(0, 100)) : l && sm.test(l) || zd(d, f, {
                               url: l,
                               ob: !0,
                               Ja: !0,
                               kb: h,
                               title: m,
                               sender: g
                           })
                       }
                   }
               }
           }
           function zd(a, c, b, d) {
               var e, f = pa();
               b.kb && f.C("dl", "1");
               b.Ja && f.C("ln", "1");
               f = {
                   G: f,
                   title: b.title,
                   ob: !!b.ob,
                   J: b.J,
                   F: (e = {},
                   e["page-url"] = b.url,
                   e["page-ref"] = c.gb || P(a).href,
                   e)
               };
               e = "Link";
               b.kb ? e = b.Ja ? "Ext link - File" : "File" : b.Ja && (e = "Ext link");
               c = b.sender(f, c).then(d || A).then(qb(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b));
               return qc(a, "cl.p.s", c, b.ra || A, b.l)
           }
           function tm(a, c) {
               var b, d, e = (b = {},
               b.string = !0,
               b.object = !0,
               b["boolean"] = c,
               b)[typeof c] || !1;
               a((d = {},
               d.trackLinks = e,
               d))
           }
           function um(a, c, b, d) {
               var e = P(a)
                 , f = e.hostname;
               e = e.href;
               if (c = Mc(c).url)
                   a = Ad(a, c),
                   f = a.hostname,
                   e = a.href;
               return [d + "://" + f + "/" + b, e || ""]
           }
           function Cd(a, c) {
               return function(b) {
                   ph(a, c, b)
               }
           }
           function vm(a, c) {
               Je(a)(function(b) {
                   delete b[c]
               })
           }
           function ph(a, c, b) {
               Je(a)(function(d) {
                   d[c] = C(d[c] || {}, b)
               })
           }
           function wm(a, c) {
               var b = {};
               Je(a)(function(d) {
                   b = d[c] || {}
               });
               return b
           }
           function Je(a) {
               a = M(a);
               var c = a.o("dsjf") || xa({});
               a.oa("dsjf", c);
               return c
           }
           function qc(a, c, b, d, e) {
               var f = K(Ke, null, a, d, e);
               return b.then(f, function(g) {
                   f();
                   yd(a, c, g)
               })
           }
           function qb(a, c, b, d) {
               return qh(c) ? A : v(E(Z([a, O(c)], d ? [b + ". Params:", d] : [b]), rb), Ka)
           }
           function rb() {
               var a = na(arguments)
                 , c = a.slice(2);
               Le(a[0], a[1]).log.apply(rb, c)
           }
           function rh(a) {
               var c = "1" === Lb(a).o("debug")
                 , b = -1 < P(a).href.indexOf("_ym_debug=1");
               a = a._ym_debug;
               return {
                   ae: c,
                   ie: a || b,
                   isEnabled: Oa(Boolean, [c, a, b])
               }
           }
           function xm(a, c, b) {
               var d;
               (d = ta[c]) || (d = za);
               d = d.slice();
               d.unshift(zm);
               d.unshift(Am);
               return x(r(Bm([a, c, b]), Ka), d)
           }
           function sh(a, c) {
               var b = P(a)
                 , d = b.href
                 , e = b.host
                 , f = -1;
               if (!Ja(c) || X(c))
                   return d;
               b = c.replace(th, "");
               if (-1 !== b.search(Cm))
                   return b;
               var g = b.charAt(0);
               if ("?" === g && (f = d.search(/\?/),
               -1 === f) || "#" === g && (f = d.search(/#/),
               -1 === f))
                   return d + b;
               if (-1 !== f)
                   return d.substr(0, f) + b;
               if ("/" === g) {
                   if (f = d.indexOf(e),
                   -1 !== f)
                       return d.substr(0, f + e.length) + b
               } else
                   return d = d.split("/"),
                   d[d.length - 1] = b,
                   G("/", d);
               return ""
           }
           function uh(a) {
               return {
                   R: function(c, b) {
                       if (!c.G)
                           return b();
                       var d = M(a).o("fid");
                       !vh && d && (Dd(c, "fid", d),
                       vh = !0);
                       return b()
                   }
               }
           }
           function wh(a) {
               return {
                   R: function(c, b) {
                       var d = c.G;
                       if (d) {
                           var e = M(a).o("adBlockEnabled");
                           e && d.C("adb", e)
                       }
                       b()
                   }
               }
           }
           function Am(a) {
               return {
                   R: function(c, b) {
                       Be(a) || b()
                   }
               }
           }
           function Dm(a) {
               a = Em(a);
               return Fm[a] || a
           }
           function Gm(a) {
               a = xh(a);
               return Hm[a] || "ru"
           }
           function zm(a, c, b) {
               return {
                   R: function(d, e) {
                       Im(a, d, b, e)
                   }
               }
           }
           function Im(a, c, b, d) {
               var e = c.G;
               if (b.We || !e)
                   d();
               else {
                   var f = Ed(a)
                     , g = oc(a, "");
                   d = r(function() {
                       var u = yh(f);
                       u = "" + u + Jm(u, g);
                       e.C("gdpr", u);
                       Dd(c, "gdpr", u)
                   }, d);
                   if (3 === b.id)
                       d();
                   else {
                       var h = M(a)
                         , k = h.o("f1");
                       if (k)
                           k(d);
                       else if (k = (k = yh(f)) ? x(v(Fd, n), k.split(",")) : [],
                       zh(k))
                           d();
                       else {
                           var l = Gd(a)
                             , m = P(a)
                             , q = l && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
                           m = g.o("gdpr");
                           g.o("yandex_login") ? (k.push("13"),
                           g.C("gdpr", rc, 525600)) : l ? J(m, Ob) ? m === Me ? k.push("12") : k.push("3") : Ne(a) || Nc(a) ? k.push("17") : Km(a) && k.push("28") : k.push("14");
                           var p = v(f, Lm);
                           zh(k) ? (H(p, k),
                           d()) : (Hd.push(d),
                           h.C("f1", function(u, w) {
                               var B = 0;
                               if (w) {
                                   var D = hb(a, w) || "";
                                   B += D.length
                               }
                               Hd.push(u);
                               1E6 >= B && Hd.push(u)
                           }),
                           (0,
                           Oe[0])(a).then(R("params.eu")).then(function(u) {
                               if (u || q) {
                                   g.C("gdpr_popup", Me);
                                   Mm(a, b);
                                   if (nc(a))
                                       return Nm(a, p, b);
                                   var w = Ah(a, f);
                                   if (w)
                                       return u = Om(a, p, w, b),
                                       u.then(E([a, b], Pm)),
                                       u
                               }
                               u || p("8");
                               return I.resolve({
                                   value: rc,
                                   Pb: !0
                               })
                           }).then(function(u) {
                               g.ab("gdpr_popup");
                               if (u) {
                                   var w = u.value;
                                   u = u.Pb;
                                   J(w, Ob) && g.C("gdpr", w, u ? void 0 : 525600)
                               }
                               w = Pe(Hd, Ka);
                               Bh(a, w, 20)(yb(y(a, "gdr"), A));
                               h.C("f1", Ka)
                           })["catch"](y(a, "gdp.a")))
                       }
                   }
               }
           }
           function Pm(a, c) {
               if (Gd(a)) {
                   var b = Ed(a)
                     , d = sa(a, c);
                   d = d && d.params;
                   b = x(v(Qm, n), Qe(b));
                   d && b.length && d("gdpr", T(Boolean, b))
               }
           }
           function sa(a, c) {
               var b = M(a).o("counters", {})
                 , d = O(c);
               return b[d]
           }
           function Nm(a, c, b) {
               var d = Id(a, b);
               return new I(function(e) {
                   var f;
                   if (d) {
                       var g = d.T
                         , h = r(v("4", c), v(null, e))
                         , k = da(a, h, 2E3, "gdp.f.t");
                       d.Zc((f = {},
                       f.type = "isYandex",
                       f)).then(function(l) {
                           l.isYandex ? (c("5"),
                           g.D(Z(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Re), function(m) {
                               e({
                                   value: Ch(m[1].type)
                               })
                           })) : (c("6"),
                           e(null))
                       })["catch"](h).then(E([a, k], Pa))
                   } else
                       e({
                           value: Me,
                           Pb: !0
                       })
               }
               )
           }
           function Mm(a, c) {
               var b = Id(a, c);
               b && b.T.D(["isYandex"], function() {
                   var d;
                   return d = {
                       type: "isYandex"
                   },
                   d.isYandex = Gd(a),
                   d
               });
               return b
           }
           function Om(a, c, b, d) {
               var e = Rm(a, d.Xe)
                 , f = Id(a, d);
               if (!f)
                   return I.resolve({
                       value: rc,
                       Pb: !0
                   });
               var g = Ec(a, {
                   src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + "_inversed_buttons.js"
               });
               return new I(function(h, k) {
                   g ? (c("7"),
                   g.onerror = function() {
                       var l;
                       c("9");
                       f.Yc((l = {},
                       l.type = "GDPR-ok-view-default",
                       l));
                       h(null)
                   }
                   ,
                   g.onload = function() {
                       c("10");
                       b.D(Z(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Re), function(l) {
                           var m;
                           l = l.type;
                           f.Yc((m = {},
                           m.type = l,
                           m));
                           h({
                               value: Ch(l)
                           })
                       })
                   }
                   ) : (c("9"),
                   k(Wa("gdp.e")))
               }
               )
           }
           function Rm(a, c) {
               var b = c || xh(a);
               return J(b, Sm) ? b : "en"
           }
           function Jd() {
               return function(a, c, b) {
                   return {
                       R: function(d, e) {
                           var f, g = d.G, h = d.qa, k = d.F;
                           if (g && k) {
                               var l = J(k["wv-type"], Tm);
                               if (!k["wv-type"] || l) {
                                   var m = V(a);
                                   g.Ra("rqnl", 1);
                                   for (var q = Oc(a), p = 1; q[p]; )
                                       p += 1;
                                   d.Qa = p;
                                   q[p] = (f = {},
                                   f.protocol = ra.ha,
                                   f.host = "mc.yandex.ru",
                                   f.resource = l ? "webvisor" : "watch",
                                   f.postParams = d.M,
                                   f.time = m(W),
                                   f.counterType = b.N,
                                   f.params = k,
                                   f.browserInfo = g.l(),
                                   f.counterId = b.id,
                                   f.ghid = Gb(a),
                                   f);
                                   h && (h.Ra("rqnl", 1),
                                   q[p].telemetry = h.l());
                                   Se(a)
                               }
                           }
                           e()
                       },
                       ga: function(d, e) {
                           Dh(a, d);
                           e()
                       }
                   }
               }
           }
           function Dh(a, c) {
               var b = Oc(a);
               c.G && !$a(b) && (delete b[c.Qa],
               Se(a))
           }
           function Se(a) {
               var c = Oc(a);
               La(a).C("retryReqs", c)
           }
           function Te(a, c, b) {
               var d = Kd(a, c, b);
               return function(e, f, g) {
                   var h;
                   e = C({
                       G: pa()
                   }, e);
                   e.F || (e.F = {});
                   var k = e.F;
                   k.wmode = "0";
                   k["wv-part"] = "" + g;
                   k["wv-hit"] = k["wv-hit"] || "" + Gb(a);
                   k["page-url"] = k["page-url"] || a.location.href;
                   k.rn = k.rn || "" + Ua(a);
                   if (!k["wv-type"]) {
                       g = e.Fd;
                       var l = "4"
                         , m = "2";
                       e.fe && (l = "5",
                       m = "3");
                       k["wv-type"] = g ? l : m
                   }
                   f = "webvisor/" + f.id;
                   return d(C(e, {
                       F: k
                   }), f, {
                       Na: (h = {},
                       h["Content-Type"] = "text/plain",
                       h),
                       md: "POST"
                   })
               }
           }
           function Um(a, c, b, d) {
               c = d.o("cc");
               d = E(["cc", ""], d.C);
               if (c) {
                   var e = c.split("&");
                   c = e[0];
                   if ((e = (e = e[1]) && Aa(e)) && 1440 < V(a)(Za) - e)
                       return d();
                   b.C("cc", c)
               } else
                   la(0)(c) || d()
           }
           function Vm(a, c, b, d) {
               return oa(a, c, function(e) {
                   if ("0" === n(e, "settings.pcs") && !Ld(a))
                       if (e = d.o("zzlc"),
                       X(e) || $a(e) || "na" === e) {
                           e = "ru";
                           var f = Eh(a, 68)
                             , g = Fh(a, 79);
                           if (f || g)
                               e = "md";
                           if (f = fb(a)) {
                               var h = f("iframe");
                               C(h.style, {
                                   display: "none",
                                   width: "1px",
                                   height: "1px",
                                   visibility: "hidden"
                               });
                               h.src = "https://mc.yandex." + e + eg("L21ldHJpa2EvenpsYy5odG1s");
                               if (e = Jb(a)) {
                                   e.appendChild(h);
                                   var k = 0
                                     , l = ea(a).D(a, ["message"], y(a, "zz.m", function(m) {
                                       (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (ec(h),
                                       m = m.substr(8),
                                       d.C("zzlc", m),
                                       b.C("zzlc", m),
                                       l(),
                                       Pa(a, k))
                                   }));
                                   k = da(a, r(l, v(h, ec)), 3E3)
                               }
                           }
                       } else
                           b.C("zzlc", e)
               })
           }
           function oa(a, c, b) {
               a = O(c);
               return Gh()(Wm(a)).then(b)
           }
           function Xm(a, c, b) {
               c = O(c);
               a = Hh(a);
               b = C({
                   Td: a(W)
               }, b);
               return Gh()(Ym(c, b))
           }
           function Ym(a, c) {
               return function(b) {
                   var d = b[a];
                   d ? (d.ze = c,
                   d.Vc = !0,
                   d.Uc ? d.Uc(c) : d.ja = I.resolve(c)) : b[a] = {
                       ja: I.resolve(c),
                       ze: c,
                       Vc: !0
                   }
               }
           }
           function Zm(a, c, b) {
               var d, e;
               c = Nb(v(a, n), $m);
               c = X(c) ? null : n(a, c);
               if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                   var f = new c((d = {},
                   d.iceServers = [],
                   d));
                   a = n(f, "createDataChannel");
                   S(a) && (K(a, f, "y.metrika")(),
                   a = n(f, "createOffer"),
                   S(a) && !a.length && (a = K(a, f)(),
                   d = n(a, "then"),
                   S(d) && K(d, a, function(g) {
                       var h = n(f, "setLocalDescription");
                       S(h) && K(h, f, g, A, A)()
                   })(),
                   C(f, (e = {},
                   e.onicecandidate = function() {
                       var g, h = n(f, "close");
                       if (S(h)) {
                           h = K(h, f);
                           try {
                               var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                           } catch (l) {
                               f.onicecandidate = A;
                               "closed" !== f.iceConnectionState && h();
                               return
                           }
                           k && 0 < k.length && (g = fc(k[1]),
                           b.C("pp", g));
                           f.onicecandidate = A;
                           h()
                       }
                   }
                   ,
                   e))))
               }
           }
           function an(a, c, b) {
               var d, e = Ih(a, c);
               if (e) {
                   e.T.D(["gpu-get"], function() {
                       var h;
                       return h = {},
                       h.type = "gpu-get",
                       h.pu = b.o("pu"),
                       h
                   });
                   var f = n(a, "opener");
                   if (f) {
                       var g = da(a, E([a, c, b], Jh), 200, "pu.m");
                       e.bc(f, (d = {},
                       d.type = "gpu-get",
                       d), function(h, k) {
                           var l = n(k, "pu");
                           l && (Pa(a, g),
                           b.C("pu", l))
                       })
                   } else
                       Jh(a, c, b)
               }
           }
           function Jh(a, c, b) {
               var d = n(a, "location.host");
               a = kd(a, c);
               b.C("pu", "" + fc(d) + a)
           }
           function Ue(a, c, b) {
               return {
                   R: function(d, e) {
                       var f = d.G;
                       if (f && (!b || b.Xc)) {
                           var g = a.document.title;
                           d.title && (g = d.title);
                           var h = Pb("getElementsByTagName", a.document);
                           "string" !== typeof g && h && (g = h("title"),
                           g = (g = n(g, "0.innerHtml")) ? g : "");
                           g = g.slice(0, ra.ud);
                           f.C("t", g)
                       }
                       e()
                   }
               }
           }
           function Qb(a) {
               void 0 === a && (a = bn);
               return function(c, b, d) {
                   return {
                       R: function(e, f) {
                           var g = e.G
                             , h = e.F;
                           g && h && H(function(k) {
                               var l = Rb[k]
                                 , m = "bi"
                                 , q = g;
                               l || (l = Ra[k],
                               m = "tel",
                               q = Dd(e));
                               l && (l = z(m + ":" + k, l, null)(c, d, e),
                               q.Ra(k, l))
                           }, a);
                           f()
                       }
                   }
               }
           }
           function cn(a, c, b, d, e, f, g, h) {
               var k = b.o(f);
               qa(k) && (b.C(f, g),
               e(a, c, b, d),
               k = b.o(f, g));
               X(h) || h.Ra(f, "" + k);
               return k
           }
           function dn(a, c) {
               if (Pc(a)) {
                   var b = gb(a).match(en);
                   if (b && b.length)
                       return b[1] === c
               }
               return !1
           }
           function Eh(a, c) {
               if (Qc(a) && c) {
                   var b = gb(a).match(fn);
                   if (b && b.length)
                       return +b[1] >= c
               }
               return !1
           }
           function Fh(a, c) {
               var b = gb(a);
               return b && (b = b.match(gn)) && 1 < b.length ? Aa(b[1]) >= c : !1
           }
           function Tg(a, c) {
               void 0 === c && (c = !1);
               for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                   var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                   e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
               }
               switch (b - d) {
               case 1:
                   b = a[d] << 4;
                   e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "=");
                   break;
               case 2:
                   b = (a[d] << 10) + (a[d + 1] << 2),
                   e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=")
               }
               e = e.join("");
               return c ? Kh(e, !0) : e
           }
           function eg(a, c) {
               void 0 === c && (c = !1);
               var b = a
                 , d = ""
                 , e = 0;
               if (!b)
                   return "";
               for (c && (b = Kh(b)); b.length % 4; )
                   b += "=";
               do {
                   var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++))
                     , g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++))
                     , h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++))
                     , k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                   if (0 > f || 0 > g || 0 > h || 0 > k)
                       return "";
                   var l = f << 18 | g << 12 | h << 6 | k;
                   f = l >> 16 & 255;
                   g = l >> 8 & 255;
                   l &= 255;
                   d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
               } while (e < b.length);
               return d
           }
           function Kh(a, c) {
               void 0 === c && (c = !1);
               return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                   return hn[b] || b
               }) : ""
           }
           function jn(a, c) {
               var b = a.length ? x(function(d, e) {
                   var f = c[e];
                   return f === d ? null : f
               }, a) : c;
               a.length = 0;
               H(r(N, fa("push", a)), c);
               return T(la(null), b).length === a.length ? null : b
           }
           function kn(a, c, b) {
               return x(function(d) {
                   var e = d[0]
                     , f = d[1];
                   if (S(e))
                       return e(a, c) || null;
                   if (S(f))
                       return null;
                   var g = !(!c[e] || !c[f]);
                   !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1],
                   g = !(Lh[d[0]] || Lh[g]));
                   return g ? (d = Math.round(c[e]) - Math.round(c[f]),
                   0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
               }, b)
           }
           function Rc(a, c, b) {
               return {
                   R: function(d, e) {
                       var f = Mh(b)
                         , g = d.G;
                       g ? g.o("pv") && !g.o("ar") ? (f.xc = g,
                       e()) : f.jb ? f.jb.push(e) : e() : e()
                   },
                   ga: function(d, e) {
                       var f = d.G
                         , g = d.Be
                         , h = Mh(b);
                       if (f) {
                           var k = h.jb;
                           h.xc === f && k && (g && M(a).C("isEU", n(g, "settings.eu")),
                           H(Ka, k),
                           h.jb = null)
                       }
                       e()
                   }
               }
           }
           function Nh(a, c) {
               var b = Ih(a, c)
                 , d = []
                 , e = [];
               if (!b)
                   return null;
               var f = E([a, b.bc], ln)
                 , g = v(f, mn);
               b.T.D(["initToParent"], function(h) {
                   g(d, b.Ea[h[1].counterId])
               }).D(["parentConnect"], function(h) {
                   g(e, b.Ma[h[1].counterId])
               });
               return {
                   T: b.T,
                   Zf: function(h, k) {
                       return new I(function(l, m) {
                           b.bc(h, k, function(q, p) {
                               l([q, p])
                           });
                           da(a, v(Wa(), m), 5100, "is.o")
                       }
                       )
                   },
                   Yc: function(h) {
                       var k = {
                           ad: [],
                           hc: [],
                           data: h
                       };
                       d.push(k);
                       return f(b.Ea, k, h)
                   },
                   Zc: function(h) {
                       var k = {
                           ad: [],
                           hc: [],
                           data: h
                       };
                       e.push(k);
                       return f(b.Ma, k, h)
                   }
               }
           }
           function mn(a, c, b) {
               c = T(function(d) {
                   return !J(b.info.counterId, d.hc)
               }, c);
               H(function(d) {
                   var e;
                   b.info.counterId && a((e = {},
                   e[b.info.counterId] = b,
                   e), d, d.data)
               }, c)
           }
           function ln(a, c, b, d, e) {
               return (new I(function(f, g) {
                   var h = ca(b)
                     , k = r(d.resolve ? d.resolve : N, Jc(f))
                     , l = r(d.reject ? d.reject : N, Jc(g));
                   d.resolve = k;
                   d.reject = l;
                   H(function(m) {
                       var q;
                       d.hc.push(m);
                       var p = b[m]
                         , u = da(a, v(Wa(), l), 5100, "is.m");
                       c(p.window, C(e, (q = {},
                       q.toCounter = Aa(m),
                       q)), function(w, B) {
                           Pa(a, u);
                           d.ad.push(m);
                           d.resolve && d.resolve(B)
                       })
                   }, h)
               }
               ))["catch"](y(a, "if.b"))
           }
           function nn(a, c) {
               var b = Md(a);
               c.D(["initToParent"], function(d) {
                   var e = d[1];
                   b.Ea[e.counterId] = {
                       info: e,
                       window: d[0].source
                   }
               }).D(["initToChild"], function(d) {
                   var e = d[0];
                   d = d[1];
                   e.source === a.parent && c.O("parentConnect", [e, d])
               }).D(["parentConnect"], function(d) {
                   var e = d[1];
                   e.counterId && (b.Ma[e.counterId] = {
                       info: e,
                       window: d[0].source
                   })
               })
           }
           function on(a, c) {
               return function(b, d) {
                   var e, f = {
                       $a: V(a)(W),
                       key: a.Math.random(),
                       dir: 0
                   };
                   b.length && (f.$a = Aa(b[0]),
                   f.key = parseFloat(b[1]),
                   f.dir = Aa(b[2]));
                   C(d, c);
                   var g = (e = {
                       data: d
                   },
                   e.__yminfo = G(":", ["__yminfo", f.$a, f.key, f.dir]),
                   e);
                   return {
                       ca: f,
                       dd: hb(a, g) || ""
                   }
               }
           }
           function Gb(a) {
               var c = M(a)
                 , b = c.o("hitId");
               b || (b = Ua(a),
               c.C("hitId", b));
               return b
           }
           function Be(a) {
               var c;
               return c = (c = !!M(a).o("oo")) || Ce(a)
           }
           function Dd(a, c, b) {
               void 0 === b && (b = null);
               a.qa || (a.qa = Oh());
               c && a.qa.Ra(c, b);
               return a.qa
           }
           function Ve(a) {
               return {
                   R: function(c, b) {
                       var d = a.document
                         , e = c.G;
                       if (e && We(a)) {
                           var f = ea(a)
                             , g = function(h) {
                               We(a) || (f.Sa(d, Ph, g),
                               b());
                               return h
                           };
                           f.D(d, Ph, g);
                           e.C("pr", "1")
                       } else
                           b()
                   }
               }
           }
           function Ma(a, c, b) {
               var d = Kd(a, c, b);
               return function(e, f) {
                   var g, h = C({
                       G: pa()
                   }, e), k = h.F, l = h.G;
                   k = (g = {},
                   g["page-url"] = k && k["page-url"] || "",
                   g.charset = "utf-8",
                   g);
                   "0" !== f.N && (k["cnt-class"] = f.N);
                   g = C(h, {
                       F: C(h.F || {}, k)
                   });
                   h = "";
                   if (g.G) {
                       k = O(f);
                       k = Qh(f)[k] || {};
                       var m = k.status;
                       "rt" === k.rb && m ? (1 === m && (h = hg(a, f) + "."),
                       g.G.C("rt", m)) : h = ""
                   }
                   C(g, {
                       Ec: h
                   });
                   return d(g, "watch/" + f.id, {
                       Ab: !(!l.o("pv") || l.o("ar") || l.o("wh"))
                   })
               }
           }
           function Kd(a, c, b) {
               var d = ob(a, c);
               return function(e, f, g) {
                   void 0 === g && (g = {});
                   var h = Rh(a);
                   e.Ec && (h = "" + e.Ec + h);
                   h = [Sh(f, h)];
                   var k = A;
                   k = pn(a);
                   h = k(qn(f));
                   return Xe(a, b, e, !0).then(E([e, h, g], d)).then(function(l) {
                       e.Be = l.Pa;
                       k(rn(l.kd));
                       return Xe(a, b, e).then(v(l.Pa, N))
                   })
               }
           }
           function Sh(a, c) {
               return ra.ha + "//" + (c || "mc.yandex.ru") + "/" + a
           }
           function Th(a) {
               var c = a.nc
                 , b = a.de;
               H(function(f, g) {
                   1 < b[g] && (a.Gb = g)
               }, c);
               var d = a.Gb
                 , e = c.slice().splice(d - 1, 1);
               e.unshift(c[d]);
               return e
           }
           function sn(a, c) {
               c.cookie.C("hostIndex", G(",", x(function(b, d) {
                   return G("-", [d, b])
               }, a)), 1440)
           }
           function Uh(a, c) {
               var b = a.o("hostIndex");
               return b ? x(function(d) {
                   return Aa(d.split("-")[1])
               }, b.split(",")) : x(v(0, N), c)
           }
           function Rh(a) {
               var c = "mc.yandex.ru"
                 , b = n(a, "document.referrer");
               if (!b)
                   return c;
               a = Ad(a, b).host;
               return c = "mc.yandex." + (Zf(a) || "ru")
           }
           function tn(a, c) {
               return a && c ? Vh(a) === Vh(c) : a || c ? !1 : !0
           }
           function Vh(a) {
               return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
           }
           function Xe(a, c, b, d) {
               void 0 === d && (d = !1);
               return new I(function(e, f) {
                   function g(l, m) {
                       m();
                       e()
                   }
                   var h = c.slice();
                   h.push({
                       R: g,
                       ga: g
                   });
                   var k = Pe(h, function(l, m) {
                       var q = d ? l.R : l.ga;
                       if (q)
                           try {
                               q(b, m)
                           } catch (p) {
                               k(un),
                               f(p)
                           }
                       else
                           m()
                   });
                   k(Wh)
               }
               )
           }
           function cc(a, c, b) {
               var d = b || "as";
               if (a.postMessage && !a.attachEvent) {
                   b = ea(a);
                   var e = "__ym__promise_" + Ua(a) + "_" + Ua(a)
                     , f = A;
                   d = y(a, d, function(g) {
                       try {
                           var h = g.data
                       } catch (k) {
                           return
                       }
                       h === e && (f(),
                       g.stopPropagation && g.stopPropagation(),
                       c())
                   });
                   f = b.D(a, ["message"], d);
                   a.postMessage(e, "*")
               } else
                   da(a, c, 0, d)
           }
           function vn(a, c, b, d, e) {
               void 0 === d && (d = 1);
               void 0 === e && (e = "itc");
               c = Pe(c, b);
               Bh(a, c, d)(yb(y(a, e), A))
           }
           function Bh(a, c, b, d) {
               void 0 === b && (b = 1);
               void 0 === d && (d = wn);
               Ye = Infinity === b;
               return xa(function(e, f) {
                   function g() {
                       try {
                           var k = c(d(a, b));
                           h = h.concat(k)
                       } catch (l) {
                           return e(l)
                       }
                       c(xn);
                       if (c(Nd))
                           return f(h),
                           Xh(a);
                       Ye ? (c(d(a, 1E4)),
                       f(h),
                       Xh(a)) : da(a, g, 100)
                   }
                   var h = [];
                   yn(g)
               })
           }
           function Xh(a) {
               if (Ze.length) {
                   var c = Ze.shift();
                   Ye ? c() : da(a, c, 100)
               } else
                   $e = !1
           }
           function yn(a) {
               $e ? Ze.push(a) : ($e = !0,
               a())
           }
           function Yh(a) {
               return xa(function(c, b) {
                   b(a)
               })
           }
           function Vl(a) {
               return xa(function(c, b) {
                   a.then(b, c)
               })
           }
           function Ul(a) {
               var c = []
                 , b = !1;
               return xa(function(d, e) {
                   function f(g) {
                       c.push(g) === a.length && d(c)
                   }
                   H(function(g) {
                       g(yb(f, function(h) {
                           if (!b)
                               try {
                                   e(h),
                                   b = !0
                               } catch (k) {
                                   f(k)
                               }
                       }))
                   }, a)
               })
           }
           function yb(a, c) {
               return function(b) {
                   return b(a, c)
               }
           }
           function Pe(a, c) {
               void 0 === c && (c = N);
               return xa({
                   mb: a,
                   Kc: c,
                   cc: !1,
                   Z: 0
               })
           }
           function Wh(a) {
               function c() {
                   function d() {
                       b = !0;
                       a.Z += 1
                   }
                   b = !1;
                   a.Kc(a.mb[a.Z], function() {
                       d()
                   });
                   b || (a.Z += 1,
                   d = K(Wh, null, a))
               }
               for (var b = !0; !Nd(a) && b; )
                   c()
           }
           function wn(a, c) {
               return function(b) {
                   var d = V(a)
                     , e = d(W);
                   return zn(function(f, g) {
                       d(W) - e >= c && g(An)
                   })(b)
               }
           }
           function Bn(a) {
               Nd(a) && wb(Cc("i"));
               var c = a.Kc(a.mb[a.Z]);
               a.Z += 1;
               return c
           }
           function xn(a) {
               a.cc = !1
           }
           function An(a) {
               a.cc = !0
           }
           function un(a) {
               a.Z = a.mb.length
           }
           function Nd(a) {
               return a.cc || a.mb.length <= a.Z
           }
           function ob(a, c) {
               return function(b, d, e) {
                   void 0 === e && (e = {});
                   return Zh(a, c, d, b, C(e, {
                       Y: b.Y || [],
                       M: e.M || b.M
                   }))
               }
           }
           function Zh(a, c, b, d, e, f, g) {
               var h;
               void 0 === f && (f = 0);
               void 0 === g && (g = 0);
               var k = C({}, e)
                 , l = c[g]
                 , m = l[0];
               l = l[1];
               var q = C({}, d.F)
                 , p = V(a);
               d.G && (q["browser-info"] = pa(d.G.l()).C("st", p(Od)).na());
               !q.t && (p = d.qa) && (p.C("ti", m),
               q.t = p.na());
               p = b[f];
               k.Na && k.Na["Content-Type"] || !k.M || (k.Na = C({}, k.Na, (h = {},
               h["Content-Type"] = "application/x-www-form-urlencoded",
               h)),
               k.M = "site-info=" + jd(k.M));
               k.md = k.M ? "POST" : "GET";
               k.Oa = q;
               k.Y.push(m);
               return l("" + p + (d.oe ? "/1" : ""), k).then(function(u) {
                   return {
                       Pa: u,
                       kd: f
                   }
               })["catch"](function(u) {
                   var w = g + 1 >= c.length
                     , B = f + 1 >= b.length;
                   w && B && wb(u);
                   return Zh(a, c, b, d, e, !B && w ? f + 1 : f, w ? 0 : g + 1)
               })
           }
           function pe(a, c) {
               var b = c.Sb
                 , d = b || "uid";
               b = b ? a.location.hostname : void 0;
               var e = Lb(a)
                 , f = La(a)
                 , g = V(a)
                 , h = g(Od)
                 , k = $h(a, c)
                 , l = k[0];
               k = k[1];
               var m = e.o("d");
               ai(a, c);
               var q = !1;
               !k && l && (k = l,
               q = !0);
               if (!k)
                   k = G("", [g(Od), Ua(a)]),
                   q = !0;
               else if (!m || 15768E3 < h - Aa(m))
                   q = !0;
               q && !c.ua && (e.C(d, k, 525600, b),
               e.C("d", "" + h, 525600, b));
               f.C(d, k);
               return k
           }
           function $h(a, c) {
               var b = La(a)
                 , d = Lb(a)
                 , e = c.Sb || "uid";
               return [b.o(e), d.o(e)]
           }
           function Ga(a) {
               a = V(a);
               return Math.round(a(bi) / 50)
           }
           function bi(a) {
               var c = a.$
                 , b = c[1];
               a = c[0] && b ? b() : W(a) - a.ee;
               return Math.round(a)
           }
           function Od(a) {
               return Math.round(W(a) / 1E3)
           }
           function Za(a) {
               return Math.floor(W(a) / 1E3 / 60)
           }
           function W(a) {
               var c = a.jc;
               return 0 !== c ? c : af(a.l, a.$)
           }
           function Hh(a) {
               var c = ea(a)
                 , b = ci(a)
                 , d = {
                   l: a,
                   jc: 0,
                   $: b,
                   ee: af(a, b)
               }
                 , e = b[1];
               b[0] && e || c.D(a, ["beforeunload", "unload"], function() {
                   0 === d.jc && (d.jc = af(a, d.$))
               });
               return xa(d)
           }
           function Cn(a) {
               return (10 > a ? "0" : "") + a
           }
           function oe(a, c, b) {
               void 0 === c && (c = "");
               void 0 === b && (b = "_ym");
               var d = "" + b + c + "_";
               return {
                   Ob: Dn(a),
                   o: function(e, f) {
                       var g = di(a, "" + d + e);
                       return $a(g) && !X(f) ? f : g
                   },
                   C: function(e, f) {
                       ei(a, "" + d + e, f);
                       return this
                   },
                   ab: function(e) {
                       fi(a, "" + d + e);
                       return this
                   }
               }
           }
           function ei(a, c, b) {
               var d = bf(a);
               a = hb(a, b);
               if (!$a(a))
                   try {
                       d.setItem(c, a)
                   } catch (e) {}
           }
           function di(a, c) {
               var b = bf(a);
               try {
                   return xb(a, b.getItem(c))
               } catch (d) {}
               return null
           }
           function fi(a, c) {
               var b = bf(a);
               try {
                   b.removeItem(c)
               } catch (d) {}
           }
           function bf(a) {
               try {
                   return a.localStorage
               } catch (c) {}
               return null
           }
           function Ug(a, c, b) {
               cf(a, "metrika_enabled", "1", 0, c, b, !0);
               var d = gi(a);
               (d = d && d.metrika_enabled) && hi(a, "metrika_enabled", c, b, !0);
               return !!d
           }
           function cf(a, c, b, d, e, f, g) {
               void 0 === g && (g = !1);
               if (Vg(a, td, c)) {
                   var h = c + "=" + encodeURIComponent(b) + ";";
                   h += "" + En(a);
                   if (d) {
                       var k = new Date;
                       k.setTime(k.getTime() + 6E4 * d);
                       h += "expires=" + k.toUTCString() + ";"
                   }
                   e && (d = e.replace(Fn, ""),
                   h += "domain=" + d + ";");
                   try {
                       a.document.cookie = h + ("path=" + (f || "/")),
                       g || (ii(a)[c] = b)
                   } catch (l) {}
               }
           }
           function td(a, c) {
               var b = ii(a);
               return b ? b[c] || null : null
           }
           function gi(a) {
               try {
                   var c = a.document.cookie;
                   if (!qa(c)) {
                       var b = {};
                       H(function(d) {
                           d = d.split("=");
                           var e = d[1];
                           b[db(d[0])] = db(ji(e))
                       }, (c || "").split(";"));
                       return b
                   }
               } catch (d) {}
               return null
           }
           function Vg(a, c, b) {
               J(b, ["gdpr", "gdpr_popup", "metrika_enabled", "_ym_debug_build"]) ? a = !0 : (b = Ed(a),
               b = Qe(b),
               a = c(a, "gdpr"),
               a = T(Kb(Gn), b).length ? !0 : J(a, [rc, Hn]));
               return a
           }
           function Ch(a) {
               if (J(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]))
                   return rc;
               a = a.replace("GDPR-ok-view-detailed-", "");
               return J(a, Ob) ? a : rc
           }
           function Ah(a, c, b) {
               void 0 === b && (b = N);
               var d = df(a);
               b(d);
               var e = v(d, In);
               ef(a, c, function(f) {
                   f.pb.D(e)
               });
               return d
           }
           function In(a, c) {
               var b = n(c, "ymetrikaEvent");
               b && a.O(n(b, "type"), b)
           }
           function ef(a, c, b, d) {
               void 0 === b && (b = A);
               void 0 === d && (d = !1);
               var e = Fc(a);
               if (c && S(c.push)) {
                   var f = c.push;
                   c.push = function() {
                       var g = na(arguments)
                         , h = g[0];
                       d && e.O(h);
                       g = f.apply(c, g);
                       d || e.O(h);
                       return g
                   }
                   ;
                   a = {
                       pb: e,
                       unsubscribe: function() {
                           c.push = f
                       }
                   };
                   b(a);
                   H(e.O, c);
                   return a
               }
           }
           function Ed(a) {
               a = M(a);
               var c = a.o("dataLayer", []);
               a.C("dataLayer", c);
               return c
           }
           function Lm(a, c) {
               var b, d;
               a.push((b = {},
               b.ymetrikaEvent = (d = {},
               d.type = c,
               d),
               b))
           }
           function yg(a, c, b) {
               function d() {
                   f = 0;
                   g && (g = !1,
                   f = da(a, d, b),
                   e.O(h))
               }
               var e = Fc(a), f, g = !1, h;
               c.D(function(k) {
                   g = !0;
                   h = k;
                   f || d();
                   return A
               });
               return e
           }
           function Jn(a, c) {
               return a.clearInterval(c)
           }
           function Kn(a, c, b, d) {
               return a.setInterval(y(a, "i.err." + (d || "def"), c), b)
           }
           function da(a, c, b, d) {
               return Pd(a, y(a, "d.err." + (d || "def"), c), b)
           }
           function df(a) {
               var c = {};
               return {
                   D: function(b, d) {
                       H(function(e) {
                           n(c, e) || (c[e] = Fc(a));
                           c[e].D(d)
                       }, b);
                       return this
                   },
                   va: function(b, d) {
                       H(function(e) {
                           n(c, e) && c[e].va(d)
                       }, b);
                       return this
                   },
                   O: function(b, d) {
                       return n(c, b) ? y(a, "e." + d, c[b].O)(d) : []
                   }
               }
           }
           function Fc(a) {
               var c = []
                 , b = {};
               b.If = c;
               b.D = r(fa("push", c), v(b, N));
               b.va = r(Sb(bc(a))(c), Sb(fa("splice", c))(1), v(b, N));
               b.O = r(N, Sb(Ka), Ln(c));
               return b
           }
           function z(a, c, b) {
               return function() {
                   return y(arguments[0], a, c, b).apply(this, arguments)
               }
           }
           function y(a, c, b, d, e) {
               var f = wb
                 , g = b || f;
               return function() {
                   var h = d;
                   try {
                       h = g.apply(e || null, arguments)
                   } catch (k) {
                       yd(a, c, k)
                   }
                   return h
               }
           }
           function af(a, c) {
               var b = c || ci(a)
                 , d = b[0];
               b = b[1];
               return !isNaN(d) && S(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
           }
           function ci(a) {
               a = ki(a);
               var c = n(a, "timing.navigationStart")
                 , b = n(a, "now");
               b && (b = K(b, a));
               return [c, b]
           }
           function ki(a) {
               return n(a, "performance") || n(a, "webkitPerformance")
           }
           function yd(a, c, b) {
               var d, e, f, g, h;
               if (!(.01 >= a.Math.random())) {
                   var k = "u.a.e"
                     , l = "";
                   b && ("object" === typeof b ? (k = b.message,
                   l = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : k = "" + b);
                   if (!(Mn(k) || Oa(r(fa("indexOf", k), la(-1), zb), Nn) || On(k) && .1 <= a.Math.random())) {
                       c = (d = {},
                       d.jserrs = (e = {},
                       e[ra.Va] = (f = {},
                       f[k] = (g = {},
                       g[c] = (h = {},
                       h[a.location.href] = l,
                       h),
                       g),
                       f),
                       e),
                       d);
                       a: {
                           var m;
                           d = ra.ha + "//mc.yandex.ru/watch/" + ra.pd;
                           try {
                               var q = Bc(a, "er")[0];
                               var p = void 0 === q ? [] : q;
                               var u = p[1];
                               var w = void 0 === u ? null : u
                           } catch (B) {
                               break a
                           }
                           q = (m = {},
                           m["browser-info"] = "ar:1:pv:1:v:" + ra.Va + ":vf:" + Sc.version,
                           m["page-url"] = a.location && "" + a.location.href,
                           m);
                           a = hb(a, c);
                           if (w && a)
                               w(d, {
                                   Oa: q,
                                   Y: [],
                                   M: "site-info=" + jd(a)
                               })["catch"](A)
                       }
                   }
               }
           }
           function Ab(a) {
               return x(function(c) {
                   return !c || J(c, a) ? c : 0
               }, gc)
           }
           function li(a) {
               return !Nc(a) && mi(a)
           }
           function ff(a) {
               return fb(a) ? v(a, Pn) : !1
           }
           function mi(a) {
               var c = n(a, "navigator.sendBeacon");
               return c && Ba("sendBeacon", c) ? E([a, K(c, n(a, "navigator"))], Qn) : !1
           }
           function Qn(a, c, b, d) {
               return new I(function(e, f) {
                   if (!n(a, "navigator.onLine"))
                       return f();
                   var g = C(d.Oa, {
                       "force-urlencoded": 1
                   });
                   g = b + "?" + Dc(g) + (d.M ? "&" + d.M : "");
                   return 2E3 < g.length ? f(Wa("sb.tlq")) : c(g) ? e("") : f()
               }
               )
           }
           function Pn(a, c, b) {
               return new I(function(d, e) {
                   var f, g, h = "_ymjsp" + Ua(a), k = C((f = {},
                   f.callback = h,
                   f), b.Oa), l = E([a, h], Rn);
                   a[h] = function(q) {
                       try {
                           l(),
                           ec(m),
                           d(q)
                       } catch (p) {
                           e(p)
                       }
                   }
                   ;
                   k.wmode = "5";
                   var m = Ec(a, (g = {},
                   g.src = ni(c, b, k),
                   g));
                   if (!m)
                       return l(),
                       e(Cc("jp.s"));
                   f = v(m, ec);
                   f = r(f, v(Wa(b.Y), e));
                   g = Pd(a, f, b.Aa || 1E4);
                   g = E([a, g], Pa);
                   m.onload = g;
                   m.onerror = r(l, g, f)
               }
               )
           }
           function Rn(a, c) {
               try {
                   delete a[c]
               } catch (b) {
                   a[c] = void 0
               }
           }
           function Tc(a) {
               var c = fb(a);
               return c ? E([a, c], Sn) : !1
           }
           function Sn(a, c, b, d) {
               return new I(function(e, f) {
                   var g = Jb(a)
                     , h = c("img")
                     , k = r(v(h, ec), v(Wa(d.Y), f))
                     , l = Pd(a, k, d.Aa || 3E3);
                   h.onerror = k;
                   h.onload = r(v(h, ec), v(null, e), E([a, l], Pa));
                   k = C({}, d.Oa);
                   delete k.wmode;
                   h.src = ni(b, d, k);
                   Pc(a) && (C(h.style, {
                       position: "absolute",
                       visibility: "hidden",
                       width: "0px",
                       height: "0px"
                   }),
                   g.appendChild(h))
               }
               )
           }
           function tg(a, c, b) {
               var d = Xa(c);
               return d && Ig(a, c, T(Boolean, ["p", Tn[d], "c"]), sg, b)
           }
           function rg(a, c) {
               var b = Hb(gf, a, c);
               if (!b) {
                   var d = Hb("div", a, c);
                   d && (jb(gf + ",div", d).length || (b = d))
               }
               return b
           }
           function Ig(a, c, b, d, e) {
               return L(function(f, g) {
                   var h = null;
                   g in oi ? h = c.getAttribute && c.getAttribute(oi[g]) : g in sc && (h = "p" === g ? sc[g](a, c, e) : "c" === g ? sc[g](a, c, d) : sc[g](a, c));
                   h && (h = h.slice(0, pi[g] || 100),
                   f[g] = hf[g] ? "" + fc(h) : h);
                   return f
               }, {}, b)
           }
           function Wg(a, c, b) {
               if (Uc(a))
                   return Ea(b.querySelectorAll(c));
               var d = qi(c.split(" "), b);
               return T(function(e, f) {
                   return bc(a)(e, d) === f
               }, d)
           }
           function qi(a, c) {
               var b = Z(a)
                 , d = b.shift();
               if (!d)
                   return [];
               d = c.getElementsByTagName(d);
               return b.length ? Ib(v(b, qi), Ea(d)) : Ea(d)
           }
           function mc(a, c) {
               if (c.querySelector)
                   return c.querySelector(a);
               var b = jb(a, c);
               return b && b.length ? b[0] : null
           }
           function jb(a, c) {
               if (!c)
                   return [];
               var b = c.querySelectorAll(a);
               return b ? Ea(b) : []
           }
           function nh(a) {
               var c = null;
               try {
                   c = a.target || a.srcElement
               } catch (b) {}
               if (c) {
                   3 === c.nodeType && (c = c.parentNode);
                   for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href")); )
                       a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                   return c.href ? c : null
               }
               return null
           }
           function Ec(a, c) {
               var b = a.document
                 , d = C({
                   type: "text/javascript",
                   charset: "utf-8",
                   async: !0
               }, c)
                 , e = fb(a);
               if (e) {
                   var f = e("script");
                   ri(Da, eb(function(l) {
                       var m = l[0];
                       l = l[1];
                       "async" === m && l ? f.async = !0 : f[m] = l
                   }))(d);
                   try {
                       var g = Pb("getElementsByTagName", b)
                         , h = g("head")[0];
                       if (!h) {
                           var k = g("html")[0];
                           h = e("head");
                           k && k.appendChild(h)
                       }
                       h.insertBefore(f, h.firstChild);
                       return f
                   } catch (l) {}
               }
           }
           function Un(a, c, b) {
               var d = si(c);
               J(b, d.wa) || d.wa.push(b);
               if ($a(d.ta)) {
                   b = fb(a);
                   if (!b)
                       return null;
                   b = b("iframe");
                   C(b.style, {
                       display: "none",
                       width: "1px",
                       height: "1px",
                       visibility: "hidden"
                   });
                   b.src = c;
                   a = Jb(a);
                   if (!a)
                       return null;
                   a.appendChild(b);
                   d.ta = b
               } else
                   (a = n(d.ta, "contentWindow")) && a.postMessage("frameReinit", "*");
               return d.ta
           }
           function Vn(a, c) {
               var b = Y(a) ? a : [a];
               c = c || document;
               if (c.querySelectorAll) {
                   var d = G(", ", x(function(e) {
                       return "." + e
                   }, b));
                   return Ea(c.querySelectorAll(d))
               }
               if (c.getElementsByClassName)
                   return Ib(r(fa("getElementsByClassName", c), Ea), b);
               d = c.getElementsByTagName("*");
               b = "(" + G("|", b) + ")";
               return T(v(b, Mb), Ea(d))
           }
           function jf(a, c, b) {
               for (var d = "", e = qg(), f = Xa(c) || "*"; c && c.parentNode && !J(f, ["BODY", "HTML"]); )
                   d += e[f] || "*",
                   d += ti(a, c, b) || "",
                   c = c.parentElement,
                   f = Xa(c) || "*";
               return db(d, 128)
           }
           function ti(a, c, b) {
               if (a = Qd(a, c)) {
                   a = a.childNodes;
                   for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                       if (d === (a[f] && a[f].nodeName)) {
                           if (c === a[f])
                               return e;
                           b && a[f] === b || (e += 1)
                       }
               }
               return 0
           }
           function Qd(a, c) {
               var b = n(a, "document");
               if (!c || c === b.documentElement)
                   return null;
               if (c === hc(a))
                   return b.documentElement;
               b = null;
               try {
                   b = c.parentNode
               } catch (d) {}
               return b
           }
           function Fe(a, c) {
               var b = kf(a, c)
                 , d = b.left;
               b = b.top;
               var e = Rd(a, c);
               return [d, b, e[0], e[1]]
           }
           function Rd(a, c) {
               var b = n(a, "document");
               return c === hc(a) || c === b.documentElement ? Pg(a) : (b = Sd(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
           }
           function kf(a, c) {
               var b = c
                 , d = n(a, "document")
                 , e = Xa(b);
               if (!b || !b.ownerDocument || "PARAM" === e || b === hc(a) || b === d.documentElement)
                   return {
                       left: 0,
                       top: 0
                   };
               if (d = b.getBoundingClientRect && Sd(b))
                   return b = ye(a),
                   {
                       left: Math.round(d.left + b.x),
                       top: Math.round(d.top + b.y)
                   };
               for (e = d = 0; b; )
                   d += b.offsetLeft,
                   e += b.offsetTop,
                   b = b.offsetParent;
               return {
                   left: d,
                   top: e
               }
           }
           function Hb(a, c, b) {
               if (!(c && c.Element && c.Element.prototype && c.document && b))
                   return null;
               if (c.Element.prototype.closest && Ba("closest", c.Element.prototype.closest) && b.closest)
                   return b.closest(a);
               var d = fh(c);
               if (d) {
                   for (; b && 1 === b.nodeType && !d.call(b, a); )
                       b = b.parentElement || b.parentNode;
                   return b && 1 === b.nodeType ? b : null
               }
               if (Uc(c)) {
                   for (a = Ea((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === bc(c)(b, a); )
                       b = b.parentElement || b.parentNode;
                   return b && 1 === b.nodeType ? b : null
               }
               return null
           }
           function Uc(a) {
               return !(!Ba("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
           }
           function ui(a) {
               return Td(a) && !Oa(la(a.type), Wn) ? vi(a) ? !a.checked : !a.value : Xn(a) ? !a.value : Yn(a) ? 0 > a.selectedIndex : !0
           }
           function Xa(a) {
               if (a)
                   try {
                       var c = a.nodeName;
                       if (Ja(c))
                           return c;
                       c = a.tagName;
                       if (Ja(c))
                           return c
                   } catch (b) {}
           }
           function wi(a, c) {
               var b = a.document.getElementsByTagName("form");
               return bc(a)(c, Ea(b))
           }
           function Zn(a, c, b) {
               b = Pb("dispatchEvent", b || a.document);
               var d = null
                 , e = n(a, "Event.prototype.constructor");
               if (e && (Ba("(Event|Object|constructor)", e) || Ud(a) && "[object Event]" === "" + e))
                   try {
                       d = new a.Event(c)
                   } catch (f) {
                       if ((a = Pb("createEvent", n(a, "document"))) && S(a)) {
                           try {
                               d = a(c)
                           } catch (g) {}
                           d && d.initEvent && d.initEvent(c, !1, !1)
                       }
                   }
               d && b(d)
           }
           function Sd(a) {
               try {
                   return a.getBoundingClientRect && a.getBoundingClientRect()
               } catch (c) {
                   return "object" === typeof c && null !== c && 16389 === (c.Mc && c.Mc & 65535) ? {
                       top: 0,
                       bottom: 0,
                       left: 0,
                       width: 0,
                       height: 0,
                       right: 0
                   } : null
               }
           }
           function Pg(a) {
               var c = Jb(a);
               a = rd(a);
               return [Math.max(c.scrollWidth, a[0]), Math.max(c.scrollHeight, a[1])]
           }
           function ye(a) {
               var c = hc(a)
                 , b = n(a, "document");
               return {
                   x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                   y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
               }
           }
           function rd(a) {
               var c = xi(a);
               if (c) {
                   var b = c[2];
                   return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
               }
               c = Jb(a);
               return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
           }
           function xi(a) {
               var c = n(a, "visualViewport.width")
                 , b = n(a, "visualViewport.height");
               a = n(a, "visualViewport.scale");
               return qa(c) || qa(b) ? null : [Math.floor(c), Math.floor(b), a]
           }
           function Jb(a) {
               var c = n(a, "document") || {}
                 , b = c.documentElement;
               return "CSS1Compat" === c.compatMode ? b : hc(a) || b
           }
           function hc(a) {
               a = n(a, "document");
               try {
                   return a.getElementsByTagName("body")[0]
               } catch (c) {
                   return null
               }
           }
           function Mb(a, c) {
               try {
                   return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
               } catch (b) {
                   return !1
               }
           }
           function sb(a) {
               var c;
               try {
                   if (c = a.target || a.srcElement)
                       !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
               } catch (b) {}
               return c
           }
           function ec(a) {
               var c = a && a.parentNode;
               c && c.removeChild(a)
           }
           function Bb(a) {
               return a ? a.innerText || "" : ""
           }
           function Lg(a) {
               if (qa(a))
                   return !1;
               a = a.nodeType;
               return 3 === a || 8 === a
           }
           function db(a, c) {
               if (a) {
                   var b = yi ? yi.call(a) : ("" + a).replace(th, "");
                   return c && b.length > c ? b.substring(0, c) : b
               }
               return ""
           }
           function Tb(a) {
               var c;
               if (c = n(a, "XMLHttpRequest"))
                   if (c = "withCredentials"in new a.XMLHttpRequest) {
                       a: {
                           if ($n.test(a.location.host) && a.opera && S(a.opera.version) && (c = a.opera.version(),
                           "string" === typeof c && "12" === c.split(".")[0])) {
                               c = !0;
                               break a
                           }
                           c = !1
                       }
                       c = !c
                   }
               return c ? v(a, ao) : !1
           }
           function ao(a, c, b) {
               var d, e = new a.XMLHttpRequest, f = b.M, g = C(b.Ab ? (d = {},
               d.wmode = "7",
               d) : {}, b.Oa);
               return new I(function(h, k) {
                   e.open(b.md || "GET", c + "?" + Dc(g), !0);
                   e.withCredentials = !1 !== b.od;
                   b.Aa && (e.timeout = b.Aa);
                   ri(Da, eb(function(m) {
                       e.setRequestHeader(m[0], m[1])
                   }))(b.Na);
                   var l = E([a, e, Wa(b.Y), b.Ab, b.Ce, h, k], bo);
                   e.onreadystatechange = l;
                   try {
                       e.send(f)
                   } catch (m) {}
               }
               )
           }
           function bo(a, c, b, d, e, f, g, h) {
               if (4 === c.readyState)
                   if (200 === c.status || e || g(b),
                   e)
                       200 === c.status ? f(c.responseText) : g(Cc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50)));
                   else {
                       e = null;
                       if (d)
                           try {
                               (e = xb(a, c.responseText)) || g(b)
                           } catch (k) {
                               g(b)
                           }
                       f(e)
                   }
               return h
           }
           function ni(a, c, b) {
               (b = Dc(b)) && (a += "?" + b);
               c.M && (a += (b ? "&" : "?") + c.M);
               return a
           }
           function hb(a, c, b) {
               try {
                   return a.JSON.stringify(c, null, b)
               } catch (d) {
                   return null
               }
           }
           function Dc(a) {
               return a ? r(Da, od(function(c, b) {
                   var d = b[0]
                     , e = b[1];
                   X(e) || qa(e) || c.push(d + "=" + jd(e));
                   return c
               }, []), Lc("&"))(a) : ""
           }
           function co(a) {
               return a ? r(eb(function(c) {
                   c = c.split("=");
                   var b = c[1];
                   return [c[0], qa(b) ? void 0 : ji(b)]
               }), od(function(c, b) {
                   c[b[0]] = b[1];
                   return c
               }, {}))(a.split("&")) : {}
           }
           function ji(a) {
               var c = "";
               try {
                   c = decodeURIComponent(a)
               } catch (b) {}
               return c
           }
           function jd(a) {
               try {
                   return encodeURIComponent(a)
               } catch (c) {}
               a = G("", T(function(c) {
                   return 55296 >= c.charCodeAt(0)
               }, a.split("")));
               return encodeURIComponent(a)
           }
           function zi() {
               var a = na(arguments);
               return wb(Wa(a))
           }
           function Wa(a) {
               var c = "";
               Y(a) ? c = G(".", a) : Ja(a) && (c = a);
               return Cc("err.kn(" + ra.Va + ")" + c)
           }
           function eo(a) {
               this.message = a
           }
           function Ai(a, c, b, d, e) {
               var f = a.addEventListener && a.removeEventListener
                 , g = !f && a.attachEvent && a.detachEvent;
               if (f || g)
                   if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent",
                   f)
                       a[e](c, b, d);
                   else
                       a[e]("on" + c, b)
           }
           function P(a) {
               return L(function(c, b) {
                   var d = n(a, "location." + b);
                   c[b] = d ? "" + d : "";
                   return c
               }, {}, fo)
           }
           function Zf(a) {
               var c = a.match(Bi);
               if (c) {
                   a = c[1];
                   if (c = c[2])
                       return J(c, lf) ? c : !1;
                   if (a)
                       return lf[0]
               }
               return !1
           }
           function go(a, c, b, d, e) {
               var f = "object" === typeof a ? a : {
                   id: a,
                   N: d,
                   Za: e,
                   J: b
               };
               a = L(function(g, h) {
                   var k = h[1]
                     , l = k.pe;
                   k = f[k.Oc];
                   g[h[0]] = l ? l(k) : k;
                   return g
               }, {}, Da(c));
               Ci(a, a.J || {});
               return a
           }
           function ho(a, c) {
               return L(function(b, d) {
                   b[c[d[0]].Oc] = d[1];
                   return b
               }, {}, Da(a))
           }
           function Di(a) {
               a = O(a);
               return Ub[a] && Ub[a].Ke
           }
           function Ci(a, c) {
               var b = O(a)
                 , d = n(c, "__ym.turbo_page")
                 , e = n(c, "__ym.turbo_page_id");
               Ub[b] || (Ub[b] = {});
               if (d || e)
                   Ub[b].Ke = d,
                   Ub[b].Le = e
           }
           function io(a) {
               return mf(a) || xd(a) || /mobile/i.test(gb(a)) || !X(n(a, "orientation"))
           }
           function We(a) {
               return J("prerender", x(v(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
           }
           function Ua(a, c, b) {
               var d = X(b);
               X(c) && d ? (d = 1,
               c = 1073741824) : d ? d = 1 : (d = c,
               c = b);
               return a.Math.floor(a.Math.random() * (c - d)) + d
           }
           function ik(a) {
               try {
                   return parseInt(a, 10)
               } catch (c) {
                   return null
               }
           }
           function qd(a, c) {
               return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === nf(c)
           }
           function jo(a) {
               for (var c = [], b = a.length - 1; 0 <= b; --b)
                   c[a.length - 1 - b] = a[b];
               return c
           }
           function Va(a, c) {
               H(r(N, fa("push", a)), c);
               return a
           }
           function Ea(a) {
               return a ? Y(a) ? a : Vc ? Vc(a) : "number" === typeof a.length && 0 <= a.length ? Ei(a) : [] : []
           }
           function Pk(a) {
               if (0 > a)
                   return [];
               for (var c = [], b = 0; b <= a; b += 1)
                   c.push(b);
               return c
           }
           function ko(a, c) {
               if (!Qc(a))
                   return !0;
               try {
                   c.call({
                       0: !0,
                       length: -Math.pow(2, 32) + 1
                   }, function() {
                       throw 1;
                   })
               } catch (b) {
                   return !1
               }
               return !0
           }
           function Vd(a, c, b) {
               return b ? a : c
           }
           function Ke(a, c, b) {
               try {
                   if (S(c)) {
                       var d = na(arguments).slice(3);
                       qa(b) ? c.apply(void 0, d) : K.apply(void 0, Z([c, b], d))()
                   }
               } catch (e) {
                   Pd(a, v(e, wb), 0)
               }
           }
           function wb(a) {
               throw a;
           }
           function Pd(a, c, b) {
               return Pb("setTimeout", a)(c, b)
           }
           function Pa(a, c) {
               return Pb("clearTimeout", a)(c)
           }
           function md() {
               return []
           }
           function Wc() {
               return {}
           }
           function Pb(a, c) {
               var b = n(c, a)
                 , d = n(c, "constructor.prototype." + a) || b;
               try {
                   if (d && d.apply)
                       return function() {
                           return d.apply(c, arguments)
                       }
               } catch (e) {
                   return b
               }
               return d
           }
           function Vb(a, c) {
               return function() {
                   var b = na(arguments)
                     , d = b[0];
                   b = b.slice(1);
                   var e = M(d)
                     , f = e.o("m850", {})
                     , g = n(f, a);
                   g || (g = t(c),
                   f[a] = g,
                   e.C("m850", f));
                   return g.apply(void 0, Z([d], b))
               }
           }
           function Wb(a) {
               a = a.Ya = a.Ya || {};
               var c = a._metrika = a._metrika || {};
               return {
                   oa: function(b, d) {
                       of.call(c, b) || (c[b] = d);
                       return this
                   },
                   C: function(b, d) {
                       c[b] = d;
                       return this
                   },
                   o: function(b, d) {
                       var e = c[b];
                       return of.call(c, b) || X(d) ? e : d
                   }
               }
           }
           function lo(a, c) {
               for (var b = "", d = 0; d < c; d += 1)
                   b += a;
               return b
           }
           function mo(a) {
               return X(a) ? [] : Xc(function(c, b) {
                   c.push([b, a[b]]);
                   return c
               }, [], Fi(a))
           }
           function no(a, c) {
               return Xc(function(b, d, e) {
                   d = a(d, e);
                   return b.concat(Y(d) ? d : [d])
               }, [], c)
           }
           function oo(a, c) {
               return Xc(function(b, d, e) {
                   b.push(a(d, e));
                   return b
               }, [], c)
           }
           function po() {
               var a = na(arguments)
                 , c = a[0];
               for (a = a.slice(1); a.length; ) {
                   var b = a.shift(), d;
                   for (d in b)
                       Kc(b, d) && (c[d] = b[d]);
                   Kc(b, "toString") && (c.toString = b.toString)
               }
               return c
           }
           function Fi(a) {
               var c = [], b;
               for (b in a)
                   Kc(a, b) && c.push(b);
               return c
           }
           function qo(a, c) {
               return 1 <= Gi(la(a), c).length
           }
           function Gi(a, c) {
               return Xc(function(b, d, e) {
                   a(d, e) && b.push(d);
                   return b
               }, [], c)
           }
           function Kc(a, c) {
               return qa(a) ? !1 : of.call(a, c)
           }
           function Y(a) {
               if (Yc)
                   return Yc(a);
               (Yc = wa(Array.isArray, "isArray")) || (Yc = ro);
               return Yc(a)
           }
           function r() {
               var a = na(arguments)
                 , c = a.shift();
               return function() {
                   var b = c.apply(void 0, arguments);
                   return L(Hi, b, a)
               }
           }
           function lc(a, c) {
               void 0 === c && (c = {});
               if (!a || 1 > a.length)
                   return c;
               L(function(b, d, e) {
                   if (e === a.length - 1)
                       return b;
                   e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                   return b[d]
               }, c, a);
               return c
           }
           function n(a, c) {
               return a ? L(function(b, d) {
                   if (qa(b))
                       return b;
                   try {
                       return b[d]
                   } catch (e) {}
                   return null
               }, a, c.split(".")) : null
           }
           function od(a, c) {
               return E([a, c], L)
           }
           function Fa(a) {
               return fa("test", a)
           }
           function fa(a, c) {
               return K(c[a], c)
           }
           function v(a, c) {
               return E([a], c)
           }
           function E(a, c) {
               return K.apply(void 0, Z([c, null], a))
           }
           function so() {
               var a = na(arguments)
                 , c = a[0]
                 , b = a[1]
                 , d = a.slice(2);
               return function() {
                   var e = Z(d, na(arguments));
                   if (Function.prototype.call)
                       return Function.prototype.call.apply(c, Z([b], e));
                   if (b) {
                       for (var f = "_b"; b[f]; )
                           f += "_" + f.length;
                       b[f] = c;
                       e = b[f] && Ii(f, e, b);
                       delete b[f];
                       return e
                   }
                   return Ii(c, e)
               }
           }
           function Ii(a, c, b) {
               void 0 === c && (c = []);
               b = b || {};
               var d = c.length
                 , e = a;
               S(e) && (e = "d",
               b[e] = a);
               var f;
               d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
               return f
           }
           function Xc(a, c, b) {
               for (var d = 0, e = b.length; d < e; )
                   c = a(c, b[d], d),
                   d += 1;
               return c
           }
           function pb(a) {
               return !$a(a) && !X(a) && "[object Object]" === nf(a)
           }
           function qa(a) {
               return X(a) || $a(a)
           }
           function S(a) {
               return "function" === typeof a
           }
           function rm(a) {
               return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(qe, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
           }
           function ac(a, c) {
               return !(!a || -1 === $f(a, c))
           }
           function $f(a, c) {
               if (Ji)
                   var b = Ji.call(a, c);
               else
                   a: {
                       b = 0;
                       for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                           b = a[e] === c[b] ? b + 1 : 0;
                           if (b === c.length) {
                               b = e - c.length + 1;
                               break a
                           }
                           if (!b && e > d)
                               break
                       }
                       b = -1
                   }
               return b
           }
           function Ja(a) {
               return "string" === typeof a
           }
           function nf(a) {
               return Object.prototype.toString.call(a)
           }
           function pf(a, c) {
               pf = Object.setPrototypeOf || {
                   __proto__: []
               }instanceof Array && function(b, d) {
                   b.__proto__ = d
               }
               || function(b, d) {
                   for (var e in d)
                       d.hasOwnProperty(e) && (b[e] = d[e])
               }
               ;
               return pf(a, c)
           }
           function t(a, c) {
               var b = []
                 , d = [];
               var e = c ? c : N;
               return function() {
                   var f = na(arguments)
                     , g = e.apply(void 0, f)
                     , h = qf(g, d);
                   if (-1 !== h)
                       return b[h];
                   f = a.apply(void 0, f);
                   b.push(f);
                   d.push(g);
                   return f
               }
           }
           function na(a) {
               if (Vc)
                   try {
                       return Vc(a)
                   } catch (c) {}
               return Ei(a)
           }
           function Ei(a) {
               for (var c = a.length, b = [], d = 0; d < c; d += 1)
                   b.push(a[d]);
               return b
           }
           function bc(a) {
               if (rf)
                   return rf;
               var c = !1;
               try {
                   c = [].indexOf && 0 === [void 0].indexOf(void 0)
               } catch (d) {}
               var b = a.Array && a.Array.prototype && wa(a.Array.prototype.indexOf, "indexOf");
               return rf = a = c && b ? function(d, e) {
                   return b.call(e, d)
               }
               : to
           }
           function to(a, c) {
               for (var b = 0; b < c.length; b += 1)
                   if (c[b] === a)
                       return b;
               return -1
           }
           function zb(a) {
               return !a
           }
           function kb(a, c) {
               return c
           }
           function N(a) {
               return a
           }
           function Sb(a) {
               return function(c) {
                   return function(b) {
                       return a(b, c)
                   }
               }
           }
           function aa(a) {
               return function(c) {
                   return function(b) {
                       return a(c, b)
                   }
               }
           }
           function uo(a, c) {
               for (var b = "", d = 0; d < c.length; d += 1)
                   b += "" + (d ? a : "") + c[d];
               return b
           }
           function wa(a, c) {
               return Ba(c, a) && a
           }
           function Ba(a, c) {
               var b = Wd(a, c);
               c && !b && sf.push([a, c]);
               return b
           }
           function Wd(a, c) {
               if (!c || "function" !== typeof c)
                   return !1;
               try {
                   var b = "" + c
               } catch (h) {
                   return !1
               }
               var d = b.length;
               if (d > 35 + a.length)
                   return !1;
               for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                   f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                   if (12 === f)
                       return !0;
                   if (!f && g > e)
                       break
               }
               return !1
           }
           function A() {}
           function Hi(a, c) {
               return c(a)
           }
           function Ka(a, c) {
               return c ? a(c) : a()
           }
           function Zc(a, c) {
               function b() {
                   this.constructor = a
               }
               pf(a, c);
               a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype,
               new b)
           }
           function Z() {
               for (var a = 0, c = 0, b = arguments.length; c < b; c++)
                   a += arguments[c].length;
               a = Array(a);
               var d = 0;
               for (c = 0; c < b; c++)
                   for (var e = arguments[c], f = 0, g = e.length; f < g; f++,
                   d++)
                       a[d] = e[f];
               return a
           }
           function fc(a) {
               a = "" + a;
               for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
                   c ^= a.charCodeAt(d),
                   c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
               return c >>> 0
           }
           function vo() {}
           function wo(a, c) {
               return function() {
                   a.apply(c, arguments)
               }
           }
           function ma(a) {
               if (!(this instanceof ma))
                   throw new TypeError("Promises must be constructed via new");
               if ("function" !== typeof a)
                   throw new TypeError("not a function");
               this.da = 0;
               this.oc = !1;
               this.fa = void 0;
               this.Ca = [];
               Ki(a, this)
           }
           function Li(a, c) {
               for (; 3 === a.da; )
                   a = a.fa;
               0 === a.da ? a.Ca.push(c) : (a.oc = !0,
               ma.pc(function() {
                   var b = 1 === a.da ? c.ve : c.we;
                   if (null === b)
                       (1 === a.da ? tf : $c)(c.ja, a.fa);
                   else {
                       try {
                           var d = b(a.fa)
                       } catch (e) {
                           $c(c.ja, e);
                           return
                       }
                       tf(c.ja, d)
                   }
               }))
           }
           function tf(a, c) {
               try {
                   if (c === a)
                       throw new TypeError("A promise cannot be resolved with itself.");
                   if (c && ("object" === typeof c || "function" === typeof c)) {
                       var b = c.then;
                       if (c instanceof ma) {
                           a.da = 3;
                           a.fa = c;
                           uf(a);
                           return
                       }
                       if ("function" === typeof b) {
                           Ki(wo(b, c), a);
                           return
                       }
                   }
                   a.da = 1;
                   a.fa = c;
                   uf(a)
               } catch (d) {
                   $c(a, d)
               }
           }
           function $c(a, c) {
               a.da = 2;
               a.fa = c;
               uf(a)
           }
           function uf(a) {
               2 === a.da && 0 === a.Ca.length && ma.pc(function() {
                   a.oc || ma.zd(a.fa)
               });
               for (var c = 0, b = a.Ca.length; c < b; c++)
                   Li(a, a.Ca[c]);
               a.Ca = null
           }
           function xo(a, c, b) {
               this.ve = "function" === typeof a ? a : null;
               this.we = "function" === typeof c ? c : null;
               this.ja = b
           }
           function Ki(a, c) {
               var b = !1;
               try {
                   a(function(d) {
                       b || (b = !0,
                       tf(c, d))
                   }, function(d) {
                       b || (b = !0,
                       $c(c, d))
                   })
               } catch (d) {
                   b || (b = !0,
                   $c(c, d))
               }
           }
           function xb(a, c) {
               if (!c)
                   return null;
               try {
                   return a.JSON.parse(c)
               } catch (b) {
                   return null
               }
           }
           function hi(a, c, b, d, e) {
               void 0 === e && (e = !1);
               return cf(a, c, "", -100, b, d, e)
           }
           function oc(a, c, b) {
               void 0 === c && (c = "_ym_");
               void 0 === b && (b = "");
               var d = yo(a)
                 , e = 1 === (d || "").split(".").length ? d : "." + d
                 , f = b ? "_" + b : "";
               return {
                   ab: function(g, h, k) {
                       hi(a, "" + c + g + f, h || e, k);
                       return this
                   },
                   o: function(g) {
                       return td(a, "" + c + g + f)
                   },
                   C: function(g, h, k, l, m) {
                       cf(a, "" + c + g + f, h, k, l || e, m);
                       return this
                   }
               }
           }
           function Ad(a, c) {
               var b = zo(a);
               return b ? (b.href = c,
               {
                   protocol: b.protocol,
                   host: b.host,
                   port: b.port,
                   hostname: b.hostname,
                   hash: b.hash,
                   search: b.search,
                   query: b.search.replace(/^\?/, ""),
                   pathname: b.pathname || "/",
                   path: (b.pathname || "/") + b.search,
                   href: b.href
               }) : {}
           }
           function ab(a, c) {
               a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
               c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
               var b = [0, 0, 0, 0];
               b[3] += a[3] * c[3];
               b[2] += b[3] >>> 16;
               b[3] &= 65535;
               b[2] += a[2] * c[3];
               b[1] += b[2] >>> 16;
               b[2] &= 65535;
               b[2] += a[3] * c[2];
               b[1] += b[2] >>> 16;
               b[2] &= 65535;
               b[1] += a[1] * c[3];
               b[0] += b[1] >>> 16;
               b[1] &= 65535;
               b[1] += a[2] * c[2];
               b[0] += b[1] >>> 16;
               b[1] &= 65535;
               b[1] += a[3] * c[1];
               b[0] += b[1] >>> 16;
               b[1] &= 65535;
               b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
               b[0] &= 65535;
               return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
           }
           function Xb(a, c) {
               a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
               c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
               var b = [0, 0, 0, 0];
               b[3] += a[3] + c[3];
               b[2] += b[3] >>> 16;
               b[3] &= 65535;
               b[2] += a[2] + c[2];
               b[1] += b[2] >>> 16;
               b[2] &= 65535;
               b[1] += a[1] + c[1];
               b[0] += b[1] >>> 16;
               b[1] &= 65535;
               b[0] += a[0] + c[0];
               b[0] &= 65535;
               return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
           }
           function tc(a, c) {
               c %= 64;
               if (32 === c)
                   return [a[1], a[0]];
               if (32 > c)
                   return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
               c -= 32;
               return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
           }
           function Ya(a, c) {
               c %= 64;
               return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
           }
           function ba(a, c) {
               return [a[0] ^ c[0], a[1] ^ c[1]]
           }
           function Mi(a) {
               a = ba(a, [0, a[0] >>> 1]);
               a = ab(a, [4283543511, 3981806797]);
               a = ba(a, [0, a[0] >>> 1]);
               a = ab(a, [3301882366, 444984403]);
               return a = ba(a, [0, a[0] >>> 1])
           }
           function Ao(a, c) {
               void 0 === c && (c = 210);
               var b = a || ""
                 , d = c || 0
                 , e = b.length - b.length % 16;
               d = {
                   K: [0, d],
                   L: [0, d]
               };
               for (var f = 0; f < e; f += 16) {
                   var g = d
                     , h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24]
                     , k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                   h = ab(h, Xd);
                   h = tc(h, 31);
                   h = ab(h, Yd);
                   g.K = ba(g.K, h);
                   g.K = tc(g.K, 27);
                   g.K = Xb(g.K, g.L);
                   g.K = Xb(ab(g.K, [0, 5]), [0, 1390208809]);
                   k = ab(k, Yd);
                   k = tc(k, 33);
                   k = ab(k, Xd);
                   g.L = ba(g.L, k);
                   g.L = tc(g.L, 31);
                   g.L = Xb(g.L, g.K);
                   g.L = Xb(ab(g.L, [0, 5]), [0, 944331445])
               }
               e = b.length % 16;
               f = b.length - e;
               g = [0, 0];
               h = [0, 0];
               switch (e) {
               case 15:
                   h = ba(h, Ya([0, b.charCodeAt(f + 14)], 48));
               case 14:
                   h = ba(h, Ya([0, b.charCodeAt(f + 13)], 40));
               case 13:
                   h = ba(h, Ya([0, b.charCodeAt(f + 12)], 32));
               case 12:
                   h = ba(h, Ya([0, b.charCodeAt(f + 11)], 24));
               case 11:
                   h = ba(h, Ya([0, b.charCodeAt(f + 10)], 16));
               case 10:
                   h = ba(h, Ya([0, b.charCodeAt(f + 9)], 8));
               case 9:
                   h = ba(h, [0, b.charCodeAt(f + 8)]),
                   h = ab(h, Yd),
                   h = tc(h, 33),
                   h = ab(h, Xd),
                   d.L = ba(d.L, h);
               case 8:
                   g = ba(g, Ya([0, b.charCodeAt(f + 7)], 56));
               case 7:
                   g = ba(g, Ya([0, b.charCodeAt(f + 6)], 48));
               case 6:
                   g = ba(g, Ya([0, b.charCodeAt(f + 5)], 40));
               case 5:
                   g = ba(g, Ya([0, b.charCodeAt(f + 4)], 32));
               case 4:
                   g = ba(g, Ya([0, b.charCodeAt(f + 3)], 24));
               case 3:
                   g = ba(g, Ya([0, b.charCodeAt(f + 2)], 16));
               case 2:
                   g = ba(g, Ya([0, b.charCodeAt(f + 1)], 8));
               case 1:
                   g = ba(g, [0, b.charCodeAt(f)]),
                   g = ab(g, Xd),
                   g = tc(g, 31),
                   g = ab(g, Yd),
                   d.K = ba(d.K, g)
               }
               d.K = ba(d.K, [0, b.length]);
               d.L = ba(d.L, [0, b.length]);
               d.K = Xb(d.K, d.L);
               d.L = Xb(d.L, d.K);
               d.K = Mi(d.K);
               d.L = Mi(d.L);
               d.K = Xb(d.K, d.L);
               d.L = Xb(d.L, d.K);
               return ("00000000" + (d.K[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.K[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.L[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.L[1] >>> 0).toString(16)).slice(-8)
           }
           function Ni(a) {
               return (a = P(a).hash.split("#")[1]) ? a.split("?")[0] : ""
           }
           function Bo(a, c) {
               var b = Ni(a);
               Oi = Kn(a, function() {
                   var d = Ni(a);
                   d !== b && (c(),
                   b = d)
               }, 200, "t.h");
               return K(Jn, null, a, Oi)
           }
           function Co(a, c, b) {
               var d, e, f = c.N, g = c.kc, h = c.gb, k = M(a), l = pa((d = {},
               d.wh = "1",
               d.pv = "1",
               d));
               Pi(f) && a.yd && a.yd.Ye && l.C("ad", "1");
               g && l.C("ut", "1");
               f = k.o("lastReferrer");
               d = P(a).href;
               h = {
                   F: (e = {},
                   e["page-url"] = h || d,
                   e["page-ref"] = f,
                   e),
                   G: l
               };
               b(h, c)["catch"](y(a, "g.s"));
               k.C("lastReferrer", d)
           }
           function Do(a, c) {
               if (Ud(a))
                   return Pa(a, c);
               vf[c] = !0;
               return Pa(a, Zd[c] || 0)
           }
           function Eo(a, c, b) {
               function d() {
                   vf[w] = !0;
                   f(!1);
                   c()
               }
               function e() {
                   Pa(a, Zd[w]);
                   if (vf[w])
                       f(!1);
                   else {
                       var D = Math.max(0, b - (m ? q : q + h(W) - p));
                       D ? Zd[w] = da(a, d, D, "u.t.d.c") : d()
                   }
               }
               function f(D) {
                   H(function(Q) {
                       var ha = Q[0]
                         , Ia = Q[1];
                       Q = Q[2];
                       D ? u.D(ha, Ia, Q) : u.Sa(ha, Ia, Q)
                   }, B)
               }
               var g = v(!1, f);
               if (Ud(a))
                   return {
                       id: da(a, c, b, "u.t.d"),
                       uc: g
                   };
               var h = V(a)
                 , k = !1
                 , l = !1
                 , m = !0
                 , q = 0
                 , p = h(W)
                 , u = ea(a)
                 , w = Qi;
               Qi += 1;
               Zd[w] = 0;
               var B = [[a, ["blur"], function() {
                   m = k = l = !0;
                   q += h(W) - p;
                   p = h(W);
                   e()
               }
               ], [a, ["focus"], function() {
                   k || l || (q = 0);
                   p = h(W);
                   k = l = !0;
                   m = !1;
                   e()
               }
               ], [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                   l || (k = !0,
                   m = !1,
                   l = !0,
                   e())
               }
               ]];
               f(!0);
               e();
               return {
                   id: w,
                   uc: g
               }
           }
           function fm(a, c) {
               var b, d = sb(c), e = ra.Db, f = Wb(a);
               if (d && Mb("ym-advanced-informer", d)) {
                   var g = f.o("ifc", 0) + 1;
                   f.C("ifc", g);
                   g = d.getAttribute("data-lang");
                   var h = Aa(d.getAttribute("data-cid") || "");
                   if (h || 0 === h)
                       (e = n(a, "Ya." + e + ".informer")) ? e((b = {},
                       b.i = d,
                       b.id = h,
                       b.lang = g,
                       b)) : f.C("ib", !0),
                       b = c || window.event,
                       b.preventDefault ? b.preventDefault() : b.returnValue = !1
               }
           }
           function $d(a, c, b, d) {
               return function() {
                   var e = sa(a, c)
                     , f = na(arguments);
                   if (e)
                       return d.apply(void 0, f)
               }
           }
           function Fo(a, c, b, d) {
               var e = Go[b];
               return e ? function() {
                   var f = na(arguments);
                   try {
                       var g = d.apply(void 0, f);
                       var h = M(a);
                       h.oa("mt", {});
                       var k = h.o("mt")
                         , l = k[e];
                       k[e] = l ? l + 1 : 1
                   } catch (m) {
                       wb(m)
                   }
                   return g
               }
               : d
           }
           function ad(a, c, b) {
               var d = c.getAttribute("itemtype");
               b = jb('[itemprop~="' + b + '"]', c);
               return d ? T(function(e) {
                   return e.parentNode && Hb("[itemtype]", a, e.parentNode) === c
               }, b) : b
           }
           function Sa(a, c, b) {
               return (a = ad(a, c, b)) && a.length ? a[0] : null
           }
           function Na(a) {
               if (!a)
                   return "";
               a = Y(a) ? a : [a];
               return a.length ? a[0].getAttribute("content") || Bb(a[0]) : ""
           }
           function Ri(a) {
               return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Na(a) : ""
           }
           function Ic(a, c, b) {
               a = c && (ac(c.className, "ym-disable-keys") || ac(c.className, "-metrika-nokeys"));
               return b && c ? a || !!Vn(["ym-disable-keys", "-metrika-nokeys"], c).length : a
           }
           function bh(a, c) {
               return Td(c) ? "password" === c.type || c.name && J(c.name.toLowerCase(), Si) || c.id && J(c.id.toLowerCase(), Si) : !1
           }
           function Ti(a, c) {
               var b = Math.max(0, Math.min(c, 65535));
               Va(a, [b >> 8, b & 255])
           }
           function Ha(a, c) {
               Va(a, [c & 255])
           }
           function Qa(a, c, b) {
               Ha(c, b);
               return !1
           }
           function F(a, c) {
               for (var b = Math.max(0, c | 0); 127 < b; )
                   Va(a, [b & 127 | 128]),
                   b >>= 7;
               Va(a, [b])
           }
           function wf(a, c) {
               F(a, c.length);
               for (var b = 0; b < c.length; b += 1)
                   F(a, c.charCodeAt(b))
           }
           function xf(a, c) {
               var b = c;
               255 < b.length && (b = b.substr(0, 255));
               a.push(b.length);
               for (var d = 0; d < b.length; d += 1)
                   Ti(a, b.charCodeAt(d))
           }
           function Ho(a, c) {
               var b = [];
               if (Qa(a, b, 27))
                   return [];
               F(b, c);
               return b
           }
           function Io(a, c) {
               var b = Xa(c);
               if (!b)
                   return c[ya] = -1,
                   null;
               var d = +c[ya];
               if (!isFinite(d) || 0 >= d)
                   return null;
               if (c.attributes)
                   for (var e = c; e; ) {
                       if (e.attributes.ef)
                           return null;
                       e = e.parentElement
                   }
               e = 64;
               var f = Qd(a, c)
                 , g = f && f[ya] ? f[ya] : 0;
               0 > g && (g = 0);
               b = (b || "").toUpperCase();
               var h = Jo()[b];
               h || (e |= 2);
               var k = ti(a, c);
               k || (e |= 4);
               var l = Fe(a, c);
               (f = f ? Fe(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
               dc[d].Pc = l[0] + "x" + l[1];
               dc[d].size = l[2] + "x" + l[3];
               c.id && "string" === typeof c.id && (e |= 32);
               f = [];
               if (Qa(a, f, 1))
                   return null;
               F(f, d);
               Ha(f, e);
               F(f, g);
               h ? Ha(f, h) : xf(f, b);
               k && F(f, k);
               e & 8 || (F(f, l[0]),
               F(f, l[1]),
               F(f, l[2]),
               F(f, l[3]));
               e & 32 && xf(f, c.id);
               Ha(f, 0);
               return f
           }
           function Ko(a, c) {
               var b = c[ya];
               if (!b || 0 > b || !De(c) || !c.form || eh(a, c.form))
                   return [];
               var d = wi(a, c.form);
               if (0 > d)
                   return [];
               if (Td(c)) {
                   var e = {
                       text: 0,
                       color: 0,
                       $a: 0,
                       tf: 0,
                       "datetime-local": 0,
                       email: 0,
                       Mc: 0,
                       Yf: 0,
                       search: 0,
                       bg: 0,
                       time: 0,
                       url: 0,
                       month: 0,
                       eg: 0,
                       password: 2,
                       Xf: 3,
                       qf: 4,
                       file: 6,
                       image: 7
                   };
                   e = e[c.type]
               } else {
                   e = {
                       bf: 1,
                       cf: 5
                   };
                   var f = Xa(c);
                   e = X(f) ? "" : e[f]
               }
               if ("number" !== typeof e)
                   return [];
               f = -1;
               for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                   if (g[k].name === c.name) {
                       if (g[k] === c) {
                           f = l;
                           break
                       }
                       l += 1
                   }
               if (0 > f)
                   return [];
               g = [];
               if (Qa(a, g, 7))
                   return [];
               F(g, b);
               F(g, d);
               F(g, e);
               wf(g, c.name || "");
               F(g, f);
               return g
           }
           function Og(a, c, b, d, e, f, g) {
               var h;
               var k = Rd(a, d);
               var l = k[0];
               for (k = k[1]; d && (!l || !k); )
                   if (d = Qd(a, d))
                       k = Rd(a, d),
                       l = k[0],
                       k = k[1];
               if (!d)
                   return [];
               l = d[ya];
               if (!l || 0 > l)
                   return [];
               k = (h = {},
               h.mousemove = 2,
               h.click = 32,
               h.dblclick = 33,
               h.mousedown = 4,
               h.mouseup = 30,
               h.touch = 12,
               h)[b];
               if (!k)
                   return [];
               h = [];
               d = kf(a, d);
               if (Qa(a, h, k))
                   return [];
               F(h, c);
               F(h, l);
               F(h, Math.max(0, e[0] - d.left));
               F(h, Math.max(0, e[1] - d.top));
               /^mouse(up|down)|click$/.test(b) && (a = f || g,
               Ha(h, 2 > a ? 1 : a === (f ? 2 : 4) ? 4 : 2));
               return h
           }
           function Lo(a, c, b) {
               var d = wi(a, b);
               if (0 > d)
                   return [];
               var e = b.elements
                 , f = e.length;
               b = [];
               for (var g = 0; g < f; g += 1)
                   if (!ui(e[g])) {
                       var h = e[g][ya];
                       h && 0 < h && b.push(h)
                   }
               e = [];
               if (Qa(a, e, 11))
                   return [];
               F(e, c);
               F(e, d);
               F(e, b.length);
               for (a = 0; a < b.length; a += 1)
                   F(e, b[a]);
               return e
           }
           function tb(a, c, b) {
               void 0 === b && (b = []);
               for (var d = []; c && !Bl(a, c, b); c = Qd(a, c))
                   d.push(c);
               H(function(e) {
                   dc.Eb += 1;
                   var f = dc.Eb;
                   e[ya] = f;
                   dc[f] = {};
                   f = Io(a, e);
                   e = Ko(a, e);
                   f && e && (Va(b, f),
                   Va(b, e))
               }, Mo(d));
               return b
           }
           function No(a) {
               var c = a.V;
               if (!Hc || c && !c.fromElement)
                   return $g(a)
           }
           function Oo(a) {
               var c = a.V;
               if (c && !c.toElement)
                   return Ee(a)
           }
           function Ui(a) {
               var c = sb(a.V);
               if (c && ud(c)) {
                   var b = Zg(a, c);
                   var d = Ga(a.l)
                     , e = [];
                   Qa(a.l, e, 17) ? a = [] : (F(e, d),
                   F(e, c[ya]),
                   a = e);
                   return Z(b, a)
               }
           }
           function Vi(a) {
               var c = a.l
                 , b = a.V.target;
               if (b && ud(b)) {
                   c = tb(c, b);
                   var d = Ga(a.l)
                     , e = [];
                   Qa(a.l, e, 18) ? a = [] : (F(e, d),
                   F(e, b[ya]),
                   a = e);
                   return Z(c, a)
               }
           }
           function Wi(a) {
               var c = a.l
                 , b = sb(a.V);
               if (!b || bh(c, b) || Ic(c, b))
                   return [];
               if (De(b)) {
                   var d = M(c).o("isEU")
                     , e = vd(c, b, d)
                     , f = e.Ka;
                   d = e.Hc;
                   e = e.yc;
                   if (vi(b))
                       var g = b.checked;
                   else
                       g = b.value,
                       g = f ? G("", Xi(g.split(""))) : g;
                   c = tb(c, b);
                   f = Ga(a.l);
                   d = d && !e;
                   e = [];
                   Qa(a.l, e, 39) ? a = [] : (F(e, f),
                   F(e, b[ya]),
                   xf(e, String(g)),
                   Ha(e, d ? 1 : 0),
                   a = e);
                   return Z(c, a)
               }
           }
           function Gc(a) {
               var c = a.l
                 , b = a.V
                 , d = sb(b);
               if (!d || "SCROLLBAR" === d.nodeName)
                   return [];
               var e = []
                 , f = v(e, Va);
               d && ud(d) ? f(Zg(a, d)) : f(tb(c, d));
               f = sd(c, b);
               return Z(e, Og(c, Ga(a.l), b.type, d, [f.x, f.y], b.which, b.button))
           }
           function Po(a) {
               var c = null
                 , b = a.l
                 , d = b.document;
               if (b.getSelection) {
                   d = void 0;
                   try {
                       d = b.getSelection()
                   } catch (g) {
                       return []
                   }
                   if ($a(d))
                       return [];
                   var e = "" + d;
                   c = d.anchorNode
               } else
                   d.selection && d.selection.createRange && (d = d.selection.createRange(),
                   e = d.text,
                   c = d.parentElement());
               if ("string" !== typeof e)
                   return [];
               try {
                   for (; c && 1 !== c.nodeType; )
                       c = c.parentNode
               } catch (g) {
                   return []
               }
               if (!c)
                   return [];
               d = vd(b, c).Ka || Ic(b, c, !0);
               c = c.getElementsByTagName("*");
               for (var f = 0; f < c.length && !d; )
                   d = c[f],
                   d = vd(b, d).Ka || Ic(b, d, !0),
                   f += 1;
               if (e !== yf)
                   return yf = e,
                   d = d ? G("", Xi(e.split(""))) : e,
                   e = Ga(a.l),
                   0 === d.length ? d = b = "" : 100 >= d.length ? (b = d,
                   d = "") : 200 >= d.length ? (b = d.substr(0, 100),
                   d = d.substr(100)) : (b = d.substr(0, 97),
                   d = d.substr(d.length - 97)),
                   c = [],
                   Qa(a.l, c, 29) ? a = [] : (F(c, e),
                   wf(c, b),
                   wf(c, d),
                   a = c),
                   a
           }
           function Qo(a) {
               return Z(Gc(a), Po(a) || [])
           }
           function Yi(a) {
               return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
           }
           function Zi(a) {
               var c = [];
               zf || (zf = !0,
               yf && c.push.apply(c, Ho(a.l, Ga(a.l))),
               cc(a.l, function() {
                   zf = !1
               }, "fv.c"));
               return c
           }
           function $i(a, c, b, d) {
               var e = sb(c);
               if (!e || Ge(a, e))
                   return [];
               var f = e && Mb("ym-record-keys", e)
                 , g = ah(e);
               c = vd(a, e).Ka;
               var h = M(a);
               if (!f && (g && h.o("isEU") || Ic(a, e)))
                   a = [];
               else {
                   f = tb(a, e);
                   h = Ga(a);
                   g = [];
                   if (Qa(a, g, 38))
                       a = [];
                   else {
                       F(g, h);
                       Ti(g, b);
                       Ha(g, d);
                       a = e[ya];
                       if (!a || 0 > a)
                           a = 0;
                       F(g, a);
                       Ha(g, c ? 1 : 0);
                       a = g
                   }
                   a = Z(f, a)
               }
               return a
           }
           function Ro(a) {
               var c = a.l
                 , b = a.V
                 , d = b.keyCode
                 , e = Yi(b)
                 , f = []
                 , g = v(f, Va);
               if ({
                   3: 1,
                   8: 1,
                   9: 1,
                   13: 1,
                   16: 1,
                   17: 1,
                   18: 1,
                   19: 1,
                   20: 1,
                   27: 1,
                   33: 1,
                   34: 1,
                   35: 1,
                   36: 1,
                   37: 1,
                   38: 1,
                   39: 1,
                   40: 1,
                   45: 1,
                   46: 1,
                   91: 1,
                   92: 1,
                   93: 1,
                   106: 1,
                   110: 1,
                   111: 1,
                   144: 1,
                   145: 1
               }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16)
                   19 === d && 4 === (e & -17) && (d = 144),
                   g($i(c, b, d, e | 16)),
                   Af = !1,
                   cc(c, function() {
                       Af = !0
                   }, "fv.kd"),
                   !(67 === d && e & 4) || e & 1 || e & 2 || g(Zi(a));
               return f
           }
           function So(a) {
               var c = a.l;
               a = a.V;
               var b = [];
               Af && !Bf && 0 !== a.which && (b.push.apply(b, $i(c, a, a.charCode || a.keyCode, Yi(a))),
               Bf = !0,
               cc(c, function() {
                   Bf = !1
               }, "fv.kp"));
               return b
           }
           function aj(a) {
               var c = a.l
                 , b = sb(a.V);
               if (!b || eh(c, b))
                   return [];
               var d = [];
               if ("FORM" === b.nodeName) {
                   for (var e = b.elements, f = 0; f < e.length; f += 1)
                       ui(e[f]) || d.push.apply(d, tb(c, e[f]));
                   d.push.apply(d, Lo(c, Ga(a.l), b))
               }
               return d
           }
           function To(a) {
               var c = a.flush;
               a = sb(a.V);
               "BODY" === Xa(a) && c()
           }
           function bj(a, c, b, d) {
               return function() {
                   var e = sa(a, c)
                     , f = na(arguments);
                   d.apply(void 0, f);
                   return e
               }
           }
           function cj(a, c, b, d) {
               return y(a, "cm." + b, d)
           }
           function Uo(a, c, b, d, e) {
               return b.length && e ? E(L(function(f, g, h) {
                   return b[h] ? f.concat(E([a, c, d], g)) : f
               }, [], b), r)()(e) : e
           }
           var Sc = {
               construct: "Metrika",
               callbackPostfix: "",
               version: "2xjocdbdc4nvpvsi8i2g"
           }, sf = [], dj = wa(Array.prototype.join, "join"), G = dj ? function(a, c) {
               return dj.call(c, a)
           }
           : uo, la = aa(function(a, c) {
               return a === c
           }), Jc = aa(function(a, c) {
               a(c);
               return c
           }), Lc = aa(G), xa = aa(Hi), rf, qf = bc(window), Vo = Sb(qf), Vc = wa(Array.from, "from"), qe = /\./g, Ji = wa(String.prototype.indexOf, "indexOf"), $a = la(null), X = la(void 0), ej = wa(Function.prototype.bind, "bind"), K = ej ? function() {
               var a = na(arguments);
               return ej.apply(a[0], Z([a[1]], a.slice(2)))
           }
           : so, Bm = aa(E), el = aa(fa), fj = wa(Array.prototype.reduce, "reduce"), L = fj ? function(a, c, b) {
               return fj.call(b, a, c)
           }
           : Xc, R = Sb(n), va = R("length"), ri = r, Yc, ro = r(nf, la("[object Array]")), of = Object.prototype.hasOwnProperty, Da = Object.entries ? function(a) {
               return a ? Object.entries(a) : []
           }
           : mo, ca = Object.keys ? Object.keys : Fi, C = Object.assign || po, Yg = aa(function(a, c) {
               return C({}, a, c)
           }), M = t(Wb), Kg = Array.prototype.every ? function(a, c) {
               return Array.prototype.every.call(c, a)
           }
           : function(a, c) {
               return L(function(b, d) {
                   return b ? a(d) : !1
               }, !0, c)
           }
           , gj = wa(Array.prototype.filter, "filter"), T = gj ? function(a, c) {
               return gj.call(c, a)
           }
           : Gi, pc = aa(T), Nb = Vd(function(a, c) {
               return Array.prototype.find.call(c, a)
           }, function(a, c) {
               for (var b = 0; b < c.length; b += 1)
                   if (a.call(c, c[b], b))
                       return c[b]
           }, Ba("find", Array.prototype.find)), J = Array.prototype.includes ? function(a, c) {
               return Array.prototype.includes.call(c, a)
           }
           : qo, Kb = Sb(J), hj = t(function(a) {
               a = n(a, "navigator") || {};
               var c = n(a, "userAgent") || "";
               return {
                   Gc: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                   ld: c
               }
           }), ij = t(v(/gecko/, function(a, c) {
               return -1 !== (n(c, "navigator.userAgent") || "").toLowerCase().search(a)
           })), Qc = t(function(a) {
               var c = n(a, "document.documentElement.style");
               a = n(a, "InstallTrigger");
               return !(!(c && "MozAppearance"in c) || qa(a))
           }), jj = wa(Array.prototype.map, "map"), x = jj && ko(window, Array.prototype.map) ? function(a, c) {
               return c && 0 < c.length ? jj.call(c, a) : []
           }
           : oo, H = x, Ib = Array.prototype.flatMap ? function(a, c) {
               return Array.prototype.flatMap.call(c, a)
           }
           : no, eb = aa(x), Ln = Sb(x), Oa = Vd(function(a, c) {
               return Array.prototype.some.call(c, a)
           }, function(a, c) {
               for (var b = 0; b < c.length; b += 1)
                   if (b in c && a.call(c, c[b], b))
                       return !0;
               return !1
           }, Ba("some", Array.prototype.some)), Cf = t(bc), Wo = aa(function(a, c) {
               return Array.prototype.sort.call(c, a)
           }), kj = wa(Array.prototype.reverse, "reverse"), Mo = kj ? function(a) {
               return kj.call(a)
           }
           : jo, lj = Sb(parseInt), Aa = lj(10), Df = lj(2), Ld = t(r(R("String.fromCharCode"), v("fromCharCode", Ba), zb)), gb = t(R("navigator.userAgent")), mf = t(r(gb, Fa(/ipad|iphone|ipod/i))), He = t(function(a) {
               return n(a, "navigator.platform") || ""
           }), Xo = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi".split(" "), Ne = t(function(a) {
               var c = hj(a);
               a = c.Gc;
               c = c.ld;
               var b = fa("indexOf", c);
               b = Oa(r(b, la(-1), zb), Xo);
               var d = /YaBrowser\/[\d.]+\sSA\/3|CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/;
               return a && (!/Safari/.test(c) && /Mobile/.test(c) || d.test(c) || b)
           }), Pc = t(function(a) {
               a = hj(a);
               var c = a.ld;
               return a.Gc && !c.match("CriOS")
           }), Yo = Fa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/), Zo = Fa(/; wv\)/), Nc = t(function(a) {
               a = gb(a);
               return Zo(a) || Yo(a)
           }), $o = /Chrome\/(\d+)\./, ap = t(function(a) {
               return (a = (n(a, "navigator.userAgent") || "").match($o)) && a.length ? 76 <= Aa(a[1]) : !1
           }), xd = t(function(a) {
               var c = (gb(a) || "").toLowerCase();
               a = He(a);
               return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
           }), bp = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), cp = t(function(a) {
               var c = n(a, "navigator.connection.type");
               if (X(c))
                   return null;
               a = Cf(a)(c, bp);
               return -1 === a ? c : "" + a
           }), Ud = t(r(R("document.addEventListener"), zb)), mj = t(function(a) {
               var c = n(a, "navigator") || {};
               return L(function(b, d) {
                   return b || n(c, d)
               }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
           }), xh = t(function(a) {
               var c = n(a, "navigator") || {};
               a = mj(a);
               Ja(a) || (a = "",
               c = n(c, "languages.0"),
               Ja(c) && (a = c));
               return a.toLowerCase().split("-")[0]
           }), nc = t(function(a) {
               var c = !1;
               try {
                   c = a.top !== a
               } catch (b) {}
               return c
           }), dp = t(function(a) {
               var c = !1;
               try {
                   c = a.top.contentWindow
               } catch (b) {}
               return c
           }), ep = t(function(a) {
               var c = !1;
               try {
                   c = a.navigator.javaEnabled()
               } catch (b) {}
               return c
           }), fp = t(function(a) {
               var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" ")
                 , b = n(a, "external");
               b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
               var d = n(a, "document.documentElement")
                 , e = ["selenium", "webdriver", "driver"];
               return !!(Oa(v(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Oa(v(n(a, "document"), n), c) || b || d && Oa(K(d.getAttribute, d), e))
           }), gp = t(function(a) {
               return !!(Oa(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(gb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
           }), hp = t(function(a) {
               return Kg(v(a, n), ["ia_document.shareURL", "ia_document.referrer"])
           }), ip = t(function(a) {
               a = n(a, "navigator.plugins");
               return !!(a && va(a) && Oa(r(R("name"), Fa(/Chrome PDF Viewer/)), a))
           }), jp = new RegExp(G("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")), Km = t(r(R("navigator.userAgent"), Fa(jp))), ae = t(function(a) {
               var c = gb(a) || ""
                 , b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
               b = b ? [+b[1], +b[2]] : [0, 0];
               c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
               return 14 <= (c ? +c[1] : 0) ? !0 : (mf(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Pc(a)
           }), kp = Sc.construct, Ef = Ud(window), ra = {
               wd: 24226447,
               pd: 26302566,
               xd: 51533966,
               Ze: 65446441,
               ha: "https:",
               Va: "850",
               Db: kp,
               vd: Ef ? 512 : 2048,
               sd: Ef ? 512 : 2048,
               ud: Ef ? 100 : 400,
               $e: 100,
               af: "noindex"
           }, Ca = {
               id: "id",
               kc: "ut",
               N: "type",
               Sb: "ldc",
               ua: "nck",
               gb: "url",
               Ud: "referrer"
           }, lp = /^\d+$/, Cb = {
               id: function(a) {
                   a = "" + (a || "0");
                   lp.test(a) || (a = "0");
                   try {
                       var c = Aa(a)
                   } catch (b) {
                       c = 0
                   }
                   return c
               },
               N: function(a) {
                   return "" + (a || 0 === a ? a : "0")
               },
               ua: Boolean,
               kc: Boolean
           };
           Ca.Za = "defer";
           Cb.Za = Boolean;
           Ca.We = "yaDisableGDPR";
           Ca.Xe = "yaGDPRLang";
           Ca.exp = "experiments";
           Ca.bb = "ecommerce";
           Cb.bb = function(a) {
               if (a)
                   return !0 === a ? "dataLayer" : "" + a
           }
           ;
           Ca.J = "params";
           Cb.J = function(a) {
               return pb(a) || Y(a) ? a : null
           }
           ;
           Ca.yb = "userParams";
           Ca.Ua = "accurateTrackBounce";
           Ca.hd = "triggerEvent";
           Cb.hd = Boolean;
           Ca.Xc = "sendTitle";
           Cb.Xc = function(a) {
               return !!a || X(a)
           }
           ;
           Ca.fc = "trackHash";
           Cb.fc = Boolean;
           Ca.Ed = "clickmap";
           Ca.zb = "webvisor";
           Cb.zb = Boolean;
           Ca.wb = "trackLinks";
           Ca.Nd = "enableAll";
           Ca.Ld = "disableFomAnalytics";
           Cb.Ld = Boolean;
           var nj = L(function(a, c) {
               var b = c[0];
               a[b] = {
                   Oc: c[1],
                   pe: Cb[b]
               };
               return a
           }, {}, Da(Ca))
             , Ub = {}
             , O = t(function(a) {
               return a.id + ":" + a.N
           })
             , Pi = la("1")
             , oj = aa(function(a, c) {
               var b = c || {};
               return {
                   l: v(b, N),
                   o: function(d, e) {
                       var f = b[d];
                       return X(f) && !X(e) ? e : f
                   },
                   C: function(d, e) {
                       b[d] = e;
                       return this
                   },
                   Ra: function(d, e) {
                       return "" === e || qa(e) ? this : this.C(d, e)
                   },
                   na: v(b, a)
               }
           })
             , pa = oj(function(a) {
               var c = "";
               a = L(function(b, d) {
                   var e = d[0]
                     , f = "" + e + ":" + d[1];
                   "t" === e ? c = f : b.push(f);
                   return b
               }, [], Da(a));
               c && a.push(c);
               return G(":", a)
           })
             , pj = ra.ha + "//mc.yandex.ru/metrika/metrika_match.html"
             , fo = "hash host hostname href pathname port protocol search".split(" ")
             , lf = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" ")
             , Bi = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/
             , Em = t(function(a) {
               a = P(a).hostname.split(".");
               return a[a.length - 1]
           })
             , mp = t(function(a) {
               return -1 !== P(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
           })
             , Bd = t(function(a) {
               return (a ? a.replace(/^www\./, "") : "").toLowerCase()
           })
             , np = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|(^|\w+\.)yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/
             , Gd = t(function(a) {
               a = P(a).hostname;
               var c = !1;
               a && (c = -1 !== a.search(np));
               return c
           })
             , op = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/
             , Sl = t(function(a) {
               a = P(a).hostname;
               var c = !1;
               a && (c = -1 !== a.search(op));
               return c
           })
             , pp = t(function(a) {
               a = P(a).hostname;
               var c = !1;
               a && (c = -1 !== a.search(Bi));
               return c
           })
             , qj = r(P, R("protocol"), la("https:"))
             , En = t(function(a) {
               return ap(a) && qj(a) ? "SameSite=None;Secure;" : ""
           })
             , qp = t(function(a) {
               var c = !1;
               if (!a.addEventListener)
                   return c;
               try {
                   var b = Object.defineProperty({}, "passive", {
                       get: function() {
                           c = !0;
                           return 1
                       }
                   });
                   a.addEventListener("test", A, b)
               } catch (d) {}
               return c
           })
             , rp = aa(function(a, c) {
               return a ? C({
                   capture: !0,
                   passive: !0
               }, c || {}) : !!c
           })
             , ea = t(function(a) {
               a = qp(a);
               var c = rp(a)
                 , b = {};
               return C(b, {
                   D: function(d, e, f, g) {
                       H(function(h) {
                           var k = c(g);
                           Ai(d, h, f, k, !1)
                       }, e);
                       return K(b.Sa, b, d, e, f, g)
                   },
                   Sa: function(d, e, f, g) {
                       H(function(h) {
                           var k = c(g);
                           Ai(d, h, f, k, !0)
                       }, e)
                   }
               })
           })
             , sp = setTimeout;
           ma.prototype["catch"] = function(a) {
               return this.then(null, a)
           }
           ;
           ma.prototype.then = function(a, c) {
               var b = new this.constructor(vo);
               Li(this, new xo(a,c,b));
               return b
           }
           ;
           ma.prototype["finally"] = function(a) {
               var c = this.constructor;
               return this.then(function(b) {
                   return c.resolve(a()).then(function() {
                       return b
                   })
               }, function(b) {
                   return c.resolve(a()).then(function() {
                       return c.reject(b)
                   })
               })
           }
           ;
           ma.all = function(a) {
               return new ma(function(c, b) {
                   function d(h, k) {
                       try {
                           if (k && ("object" === typeof k || "function" === typeof k)) {
                               var l = k.then;
                               if ("function" === typeof l) {
                                   l.call(k, function(m) {
                                       d(h, m)
                                   }, b);
                                   return
                               }
                           }
                           e[h] = k;
                           0 === --f && c(e)
                       } catch (m) {
                           b(m)
                       }
                   }
                   if (!a || "undefined" === typeof a.length)
                       return b(new TypeError("Promise.all accepts an array"));
                   var e = Array.prototype.slice.call(a);
                   if (0 === e.length)
                       return c([]);
                   for (var f = e.length, g = 0; g < e.length; g++)
                       d(g, e[g])
               }
               )
           }
           ;
           ma.resolve = function(a) {
               return a && "object" === typeof a && a.constructor === ma ? a : new ma(function(c) {
                   c(a)
               }
               )
           }
           ;
           ma.reject = function(a) {
               return new ma(function(c, b) {
                   b(a)
               }
               )
           }
           ;
           ma.race = function(a) {
               return new ma(function(c, b) {
                   if (!a || "undefined" === typeof a.length)
                       return b(new TypeError("Promise.race accepts an array"));
                   for (var d = 0, e = a.length; d < e; d++)
                       ma.resolve(a[d]).then(c, b)
               }
               )
           }
           ;
           ma.pc = "function" === typeof setImmediate && function(a) {
               setImmediate(a)
           }
           || function(a) {
               sp(a, 0)
           }
           ;
           ma.zd = function(a) {
               "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
           }
           ;
           var I = window.Promise
             , tp = wa(I, "Promise")
             , rj = wa(n(I, "resolve"), "resolve")
             , sj = wa(n(I, "reject"), "reject")
             , tj = wa(n(I, "all"), "all");
           if (J(!1, [tp, rj, sj, tj]))
               I = ma;
           else {
               var be = function(a) {
                   return new Promise(a)
               };
               be.resolve = K(rj, I);
               be.reject = K(sj, I);
               be.all = K(tj, I);
               I = be
           }
           var Nn = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], bd, Cc = function(a) {
               return function(c) {
                   if (bd)
                       return new bd(c);
                   if (Ba("Error", a.Error))
                       return bd = a.Error,
                       new a.Error(c);
                   bd = eo;
                   return new bd(c)
               }
           }(window), On = Fa(/^http./), Mn = Fa(/^err.kn/), $n = /[^a-z0-9.:-]/, th = /^\s+|\s+$/g, yi = wa(String.prototype.trim, "trim"), uj = aa(function(a, c) {
               return c.replace(a, "")
           }), Bg = uj(/\s/g), vb = uj(/\D/g), up = t(function(a) {
               a = n(a, "document") || {};
               return ("" + (a.characterSet || a.charset || "")).toLowerCase()
           }), fb = t(r(R("document"), v("createElement", Pb))), fh = t(function(a) {
               var c = n(a, "Element.prototype");
               return c ? (a = Nb(function(b) {
                   return Ba(b, c[b])
               }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
           }), vp = la("INPUT"), Td = r(Xa, vp), wp = la("TEXTAREA"), Xn = r(Xa, wp), xp = la("SELECT"), Yn = r(Xa, xp), vi = r(R("type"), Fa(/^(checkbox|radio)$/)), De = r(Xa, Fa(/^INPUT|SELECT|TEXTAREA$/)), ud = r(Xa, Fa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), Wn = ["submit", "image", "hidden"], vj = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "), qg = t(function() {
               for (var a = 59, c = {}, b = 0; b < vj.length; b += 1)
                   c[vj[b]] = String.fromCharCode(a),
                   a += 1;
               return c
           }), si = t(function(a) {
               return {
                   zf: a,
                   ta: null,
                   wa: []
               }
           }), pi = {}, hf = {};
           pi.p = 500;
           var oi = {
               i: "id",
               n: "name",
               h: "href",
               ty: "type"
           };
           hf.h = !0;
           hf.c = !0;
           var sc = {};
           sc.p = jf;
           sc.c = function(a, c, b) {
               (a = db(n(c, "textContent"))) && b && (b = b(c),
               b.length && Oa(r(R("textContent"), db, la(a)), b) && (a = ""));
               Td(c) && (a = db(c.getAttribute && c.getAttribute("value") || a));
               return a
           }
           ;
           var uc, gf = "button," + x(function(a) {
               return 'input[type="' + a + '"]'
           }, ["button", "submit", "reset", "file"]).join(",") + ",a", sg = v(gf, jb), Tn = (uc = {},
           uc.A = "h",
           uc.BUTTON = "i",
           uc.DIV = "i",
           uc.INPUT = "ty",
           uc), cd;
           var gc = [li, 0, Tb, ff, Tc];
           var wj = [Tb];
           wj.push(ff);
           var xj = Ab(wj)
             , vc = Ab([Tc])
             , yp = Ab([li, Tc])
             , ce = Ab([0, Tb, ff, Tc])
             , ia = {};
           C(ia, (cd = {},
           cd.h = xj,
           cd.f = xj,
           cd.er = vc,
           cd));
           ia.d = vc;
           ia.pi = vc;
           ia.m = yp;
           ia["2"] = gc;
           ia["6"] = Ab([0, Tb]);
           ia.t = gc;
           ia.a = ce;
           ia.n = gc;
           ia.r = ce;
           ia["1"] = ce;
           ia.g = ce;
           ia.c = vc;
           ia.ci = Ab([Tb]);
           ia.e = gc;
           ia.adb = vc;
           ia["5"] = gc;
           var Bc = t(function(a, c) {
               var b;
               (b = c ? ia[c] : gc) || (b = []);
               b = L(function(d, e, f) {
                   (e = e && e(a)) && d.push([f, e]);
                   return d
               }, [], b);
               b.length || zi();
               return b
           }, kb), zp = Kb([26812653]), qh = t(r(R("id"), zp), O), Ob = ["0", "1", "2", "3"], rc = Ob[0], Me = Ob[1], Hn = Ob[2], Re = x(r(N, fa("concat", "GDPR-ok-view-detailed-")), Ob), Fd = Z("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), Re, ["28", "29", "30"]), Gn = "3 13 14 15 16 17 28".split(" "), Qe = r(eb(R("ymetrikaEvent.type")), pc(Kb(Fd))), ii = Vb("gsc", gi), Fn = /:\d+$/, yo = t(function(a) {
               var c = (P(a).host || "").split(".");
               return 1 === c.length ? c[0] : L(function(b, d, e) {
                   e += 1;
                   2 <= e && !b && (e = G(".", c.slice(-e)),
                   Ug(a, e) && (b = e));
                   return b
               }, "", c)
           }), Lb = t(oc), Dn = t(function(a) {
               ei(a, "_ymBRC", "1");
               var c = "1" !== di(a, "_ymBRC");
               c || fi(a, "_ymBRC");
               return c
           }), La = t(oe), wc = t(oe, function(a, c, b) {
               return "" + c + b
           }), V = t(Hh), ai = Vb("r", function(a, c) {
               var b = $h(a, c)
                 , d = b[0];
               return !b[1] && d
           }), kd = t(pe, function(a, c) {
               return "{" + c.Sb + c.ua
           }), Qh = t(Wc, O), hg = r(kd, fc), zn = aa(function(a, c) {
               for (var b = []; !Nd(c); ) {
                   var d = Bn(c);
                   a(d, function(e) {
                       return e(c)
                   });
                   b.push(d)
               }
               return b
           }), Ze = [], $e = !1, Ye = !1, zo = t(function(a) {
               if (a = fb(a))
                   return a("a")
           }), Ap = ["mc.webvisor.org"], qn = aa(function(a, c) {
               var b = Th(c);
               return x(v(a, Sh), b)
           }), rn = aa(function(a, c) {
               var b = c.Gb
                 , d = c.nc
                 , e = c.cookie
                 , f = Th(c)[a];
               f = qf(f, d);
               b !== f && (b = Uh(e, d),
               b[f] += 1,
               sn(b, c))
           }), Bp = t(function(a) {
               var c = Ap.concat([Rh(a)]);
               a = Lb(a);
               return {
                   cookie: a,
                   nc: c,
                   Gb: c.length - 1,
                   de: Uh(a, c)
               }
           }), pn = r(Bp, xa), Ph = ["webkitvisibilitychange", "visibilitychange"], Oh = oj(function(a) {
               a = Da(a);
               return G("", x(function(c) {
                   var b = c[0];
                   c = c[1];
                   return $a(c) ? "" : b + "(" + c + ")"
               }, a))
           }), Db = E([1, null], Vd), de = E([1, 0], Vd), sm = /^ *(data|javascript):/i, oh = new RegExp(G("", ["\\.(" + G("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]),"i"), ua, Go = (ua = {},
           ua.hit = "h",
           ua.experiments = "ex",
           ua.params = "p",
           ua.reachGoal = "g",
           ua.userParams = "up",
           ua.trackHash = "th",
           ua.accurateTrackBounce = "atb",
           ua.notBounce = "nb",
           ua.addFileExtension = "fe",
           ua.extLink = "el",
           ua.file = "fc",
           ua.trackLinks = "tl",
           ua.destruct = "d",
           ua.setUserID = "ui",
           ua.getClientID = "ci",
           ua.clickmap = "cm",
           ua.enableAll = "ea",
           ua), Cp = Fa(/^.+\.mtproxy\.yandex\.net$/), Ce = t(function(a) {
               if ("MetrikaPlayer" === a.name)
                   return !0;
               a = P(a).hostname;
               return Cp(a)
           }), Md = t(function() {
               return {
                   Ma: {},
                   pending: {},
                   Ea: {}
               }
           }), Ff = R("postMessage"), Dp = z("s.f", function(a, c, b, d, e) {
               c = c(d);
               var f = Md(a)
                 , g = G(":", [c.ca.$a, c.ca.key]);
               if (Ff(b)) {
                   f.pending[g] = e;
                   try {
                       b.postMessage(c.dd, "*")
                   } catch (h) {
                       delete f.pending[g];
                       return
                   }
                   da(a, function() {
                       delete f.pending[g]
                   }, 5E3, "if.s")
               }
           }), Ep = z("s.fh", function(a, c, b, d, e, f) {
               var g = null
                 , h = null
                 , k = Md(a)
                 , l = null;
               try {
                   g = xb(a, f.data),
                   h = g.__yminfo,
                   l = g.data
               } catch (m) {
                   return
               }
               if (!qa(h) && h.substring && "__yminfo" === h.substring(0, 8) && !qa(l) && (g = h.split(":"),
               4 === g.length))
                   if (h = c.id,
                   c = g[1],
                   a = g[2],
                   g = g[3],
                   !Y(l) && l.type && "0" === g && l.counterId) {
                       if (!l.toCounter || l.toCounter == h) {
                           k = null;
                           try {
                               k = f.source
                           } catch (m) {}
                           !$a(k) && Ff(k) && (f = d.O(l.type, [f, l]),
                           e = x(r(N, Yg(e)), f.concat([{}])),
                           l = b([c, a, l.counterId], e),
                           k.postMessage(l.dd, "*"))
                       }
                   } else
                       g === "" + h && Y(l) && T(function(m) {
                           return !(!m.hid || !m.counterId)
                       }, l).length === l.length && (b = k.pending[G(":", [c, a])]) && b.apply(null, [f].concat(l))
           }), Ih = t(function(a, c) {
               var b, d = Pb("getElementsByTagName", n(a, "document")), e = Md(a), f = Ff(a), g = df(a), h = ea(a);
               if (!d || !f)
                   return null;
               d = d.call(a.document, "iframe");
               f = (b = {},
               b.counterId = c.id,
               b.hid = "" + Gb(a),
               b);
               nn(a, g);
               b = on(a, f);
               var k = E([a, v([], b)], Dp);
               H(function(l) {
                   var m = null;
                   try {
                       m = l.contentWindow
                   } catch (q) {}
                   m && k(m, {
                       type: "initToChild"
                   }, function(q, p) {
                       g.O("initToParent", [q, p])
                   })
               }, d);
               nc(a) && k(a.parent, {
                   type: "initToParent"
               }, function(l, m) {
                   g.O("parentConnect", [l, m])
               });
               h.D(a, ["message"], E([a, c, b, g, f], Ep));
               return {
                   T: g,
                   Ma: e.Ma,
                   Ea: e.Ea,
                   bc: k
               }
           }, r(kb, O)), Id = t(Nh, r(kb, O)), Fp = z("pa.plgn", function(a, c) {
               var b = Id(a, c);
               b && b.T.D(["pluginInfo"], y(a, "c.plgn", function() {
                   var d = M(a);
                   d.C("cmc", d.o("cmc", 0) + 1);
                   return ho(c, nj)
               }))
           }), lb, ic, we = (lb = {},
           lb.transaction_id = "id",
           lb.item_id = "id",
           lb.item_name = "name",
           lb.item_brand = "brand",
           lb.promotion_name = "coupon",
           lb.index = "position",
           lb.item_variant = "variant",
           lb.value = "revenue",
           lb.item_category = "category",
           lb), Jg = (ic = {},
           ic.view_item = "detail",
           ic.add_to_cart = "add",
           ic.remove_from_cart = "remove",
           ic.begin_checkout = "checkout",
           ic.purchase = "purchase",
           ic), ml = "currencyCode add delete remove purchase checkout detail".split(" "), ee = aa(function(a, c) {
               return M(c).o(a, null)
           }), Gp = t(function() {
               var a = 0;
               return function() {
                   return a += 1
               }
           }), Hp = r(O, Gp, Ka), Ra = {
               mc: function(a) {
                   a = Wb(a).o("mt", {});
                   a = Da(a);
                   return a.length ? L(function(c, b, d) {
                       return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                   }, "", a) : null
               }
           };
           Ra.oo = ee("oo");
           Ra.pmc = ee("cmc");
           Ra.clc = function(a) {
               var c = M(a).o("cls", {
                   Wa: 0,
                   x: 0,
                   y: 0
               })
                 , b = c.Wa
                 , d = c.x;
               c = c.y;
               return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
           }
           ;
           Ra.lt = function(a) {
               var c = Wb(a).o("lt", null);
               return c ? a.Math.round(100 * c) : c
           }
           ;
           Ra.yu = function(a) {
               var c = P(a);
               return J(c.hostname, ["dzen.ru", "ya.ru"]) ? (oc(a, "").o("yandexuid") || "").substring(0, 25) : null
           }
           ;
           Ra.re = r(function(a, c) {
               return !c.ua && ai(a, c)
           }, Db);
           Ra.aw = function(a) {
               a = Nb(r(qa, zb), [a.document.hidden, a.document.msHidden, a.document.webkitHidden]);
               return qa(a) ? null : de(!a)
           }
           ;
           Ra.ifc = function(a) {
               return Wb(a).o("ifc")
           }
           ;
           Ra.ifb = function(a) {
               return Wb(a).o("ifb")
           }
           ;
           Ra.rqnt = function(a, c, b) {
               a = b.F;
               return !a || a.nohit ? null : Hp(c)
           }
           ;
           Ra.ecs = function(a) {
               return Wb(a).o("ecs")
           }
           ;
           Ra.csi = ee("scip");
           var Ip = ca(Ra), Mh = t(function() {
               return {
                   xc: null,
                   jb: []
               }
           }, O), Jp = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function(a, c) {
               return n(c, "redirectCount") || n(a, "navigation.redirectCount")
           }
           ], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], bb, Kp = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], Lh = (bb = {},
           bb.responseEnd = 1,
           bb.domInteractive = 1,
           bb.domContentLoadedEventStart = 1,
           bb.domContentLoadedEventEnd = 1,
           bb.domComplete = 1,
           bb.loadEventStart = 1,
           bb.loadEventEnd = 1,
           bb.unloadEventStart = 1,
           bb.unloadEventEnd = 1,
           bb.secureConnectionStart = 1,
           bb), Lp = t(md), hn = {
               "*": "+",
               "-": "/",
               df: "=",
               "+": "*",
               "/": "-",
               "=": "_"
           }, dd = t(function(a) {
               a = n(a, "console");
               var c = n(a, "log");
               c = Wd("log", c) ? K(c, a) : A;
               var b = n(a, "warn");
               b = Wd("warn", b) ? K(b, a) : c;
               var d = n(a, "error");
               a = Wd("error", d) ? K(d, a) : c;
               return {
                   log: c,
                   error: a,
                   warn: b
               }
           }), Mp = z("p.cd", function(a, c) {
               if (xd(a) || mf(a)) {
                   var b = La(a);
                   if (qa(b.o("jn"))) {
                       b.C("jn", !1);
                       var d = a.rf || Pc(a) ? function() {}
                       : /./
                         , e = dd(a, O(c));
                       d.toString = function() {
                           b.C("jn", !0);
                           return "Yandex.Metrika counter is initialized"
                       }
                       ;
                       e.log("%c%s", "color: inherit", d)
                   }
               }
           }), fn = /Firefox\/([0-9]+)/, en = /([0-9\\.]+) Safari/, Np = /\sYptp\/\d\.(\d+)\s/, gn = /Edg\/(\d+)\./, yj = t(function(a) {
               var c;
               a: {
                   if ((c = gb(a)) && (c = Np.exec(c)) && 1 < c.length) {
                       c = Aa(c[1]);
                       break a
                   }
                   c = 0
               }
               return 50 <= c && 99 >= c || Fh(a, 79) ? !1 : !ae(a) || Ne(a)
           }), mg = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"), Gk = t(function(a) {
               a = fb(a)("canvas");
               var c = n(a, "getContext");
               if (!c)
                   return null;
               try {
                   var b = K(c, a)("2d");
                   b.font = "72px mmmmmmmmmmlli";
                   var d = b.measureText("mmmmmmmmmmlli").width;
                   return function(e) {
                       b.font = "72px " + e;
                       return b.measureText("mmmmmmmmmmlli").width === d
                   }
               } catch (e) {
                   return null
               }
           }), zj = wa(String.prototype.repeat, "repeat"), Op = zj ? function(a, c) {
               return zj.call(a, c)
           }
           : lo, fg = v(!0, function(a, c, b, d) {
               b = c.length && (b - d.length) / c.length;
               if (0 >= b)
                   return d;
               c = Op(c, b);
               return a ? c + d : d + c
           }), Xd = [2277735313, 289559509], Yd = [1291169091, 658871167], Aj = /\/$/, Pp = t(r(V, xa(function(a) {
               return -(new a.l.Date).getTimezoneOffset()
           }))), Qp = r(V, xa(function(a) {
               a = new a.l.Date;
               return G("", x(Cn, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
           })), Rp = r(V, xa(Od)), Bj = t(r(V, xa(function(a) {
               return a.$[0]
           }))), Sp = t(Wc), Tp = t(Wc), Up = t(function(a) {
               var c = n(a, "webkitRequestFileSystem");
               if (S(c) && !xd(a))
                   return (new I(K(c, a, 0, 0))).then(function() {
                       var d = n(a, "navigator.storage") || {};
                       return d.estimate ? d.estimate() : {}
                   }).then(function(d) {
                       return (d = d.quota) && 12E7 > d ? !0 : !1
                   })["catch"](v(!0, N));
               if (Qc(a))
                   return c = n(a, "navigator.serviceWorker"),
                   I.resolve(X(c));
               c = n(a, "openDatabase");
               if (Pc(a) && S(c)) {
                   var b = !1;
                   try {
                       c(null, null, null, null)
                   } catch (d) {
                       b = !0
                   }
                   return I.resolve(b)
               }
               return I.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
           }), Vp = /(\?|&)turbo_uid=([\w\d]+)($|&)/, Wp = t(function(a, c) {
               var b = Lb(a)
                 , d = P(a).search.match(Vp);
               return d && 2 <= d.length ? (d = d[2],
               c.ua || b.C("turbo_uid", d),
               d) : (b = b.o("turbo_uid")) ? b : ""
           }), Xp = t(function(a) {
               return S(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
           }), U, ub, Yp = t(function(a) {
               a = M(a);
               var c = a.o("counterNum", 0) + 1;
               a.C("counterNum", c);
               return c
           }, r(kb, O)), Rb = (U = {},
           U.vf = v(Sc.version, N),
           U.nt = cp,
           U.fp = function(a, c, b) {
               if (b.F && b.F.nohit)
                   return null;
               c = O(c);
               b = Sp(a);
               if (b[c])
                   return null;
               a: {
                   var d = Bj(a)
                     , e = n(a, "performance.getEntriesByType");
                   if (S(e)) {
                       if (a = T(r(N, R("name"), la("first-contentful-paint")), e.call(a.performance, "paint")),
                       a.length) {
                           a = a[0].startTime;
                           break a
                       }
                   } else {
                       e = n(a, "chrome.loadTimes");
                       if (S(e) && (e = e.call(a.chrome),
                       e = n(e, "firstPaintTime"),
                       d && e)) {
                           a = 1E3 * e - d;
                           break a
                       }
                       if (a = n(a, "performance.timing.msFirstPaint")) {
                           a -= d;
                           break a
                       }
                   }
                   a = void 0
               }
               return a ? (b[c] = a,
               Math.round(a)) : null
           }
           ,
           U.fu = function(a, c, b) {
               var d = b.F;
               if (!d)
                   return null;
               c = (n(a, "document.referrer") || "").replace(Aj, "");
               b = (d["page-ref"] || "").replace(Aj, "");
               d = d["page-url"];
               a = P(a).href !== d;
               c = c !== b;
               b = 0;
               a && c ? b = 3 : c ? b = 1 : a && (b = 2);
               return b
           }
           ,
           U.en = up,
           U.la = mj,
           U.ut = function(a, c, b) {
               var d = b.ob;
               (b = b.F) && (pp(a) || c.kc || d) && (b.ut = "noindex");
               return null
           }
           ,
           U.v = v(ra.Va, N),
           U.cn = Yp,
           U.dp = function(a) {
               var c = M(a)
                 , b = c.o("bt", {});
               if (X(c.o("bt"))) {
                   var d = n(a, "navigator.getBattery");
                   try {
                       b.p = d && d.call(a.navigator)
                   } catch (e) {}
                   c.C("bt", b);
                   b.p && b.p.then && b.p.then(y(a, "bi:dp.p", function(e) {
                       b.Se = n(e, "charging") && 0 === n(e, "chargingTime")
                   }))
               }
               return de(b.Se)
           }
           ,
           U.ls = t(function(a, c) {
               var b = wc(a, c.id)
                 , d = V(a)
                 , e = b.o("lsid");
               return +e ? e : (d = Ua(a, 0, d(W)),
               b.C("lsid", d),
               d)
           }, kb),
           U.hid = Gb,
           U.z = Pp,
           U.i = Qp,
           U.et = Rp,
           U.c = r(R("navigator.cookieEnabled"), Db),
           U.rn = r(N, Ua),
           U.rqn = function(a, c, b) {
               b = b.F;
               if (!b || b.nohit)
                   return null;
               c = O(c);
               a = wc(a, c);
               c = (a.o("reqNum", 0) || 0) + 1;
               a.C("reqNum", c);
               if (a.o("reqNum") === c)
                   return c;
               a.ab("reqNum");
               return null
           }
           ,
           U.u = kd,
           U.tp = r(kb, Di, Db),
           U.tpid = r(kb, function(a) {
               a = O(a);
               return Ub[a] && Ub[a].Le || null
           }),
           U.w = function(a) {
               a = rd(a);
               return a[0] + "x" + a[1]
           }
           ,
           U.s = function(a) {
               var c = n(a, "screen");
               if (c) {
                   a = n(c, "width");
                   var b = n(c, "height");
                   c = n(c, "colorDepth") || n(c, "pixelDepth");
                   return G("x", [a, b, c])
               }
               return null
           }
           ,
           U.sk = R("devicePixelRatio"),
           U.ifr = r(nc, Db),
           U.j = r(ep, Db),
           U.sti = function(a) {
               return nc(a) ? dp(a) ? "1" : null : null
           }
           ,
           U);
           Rb.pri = function(a) {
               if (Nc(a))
                   return null;
               var c = Tp(a)
                 , b = c.Rc;
               X(b) && (c.Rc = null,
               Up(a).then(function(d) {
                   c.Rc = d
               }));
               return b ? 1 : null
           }
           ;
           C(Rb, (ub = {},
           ub.iss = r(fp, Db),
           ub.hdl = r(gp, Db),
           ub.iia = r(hp, Db),
           ub.cpf = r(ip, Db),
           ub.ntf = t(function(a) {
               a: switch (n(a, "Notification.permission")) {
               case "denied":
                   a = !1;
                   break a;
               case "granted":
                   a = !0;
                   break a;
               default:
                   a = null
               }
               return $a(a) ? null : a ? 2 : 1
           }),
           ub.eu = ee("isEU"),
           ub.ns = Bj,
           ub.np = function(a) {
               if (Ua(a, 0, 100))
                   a = null;
               else {
                   a = db(He(a), 100);
                   for (var c = [], b = 0; b < a.length; b++) {
                       var d = a.charCodeAt(b);
                       128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224),
                       c.push(d >> 6 & 63 | 128)),
                       c.push(d & 63 | 128))
                   }
                   a = Tg(c)
               }
               return a
           }
           ,
           ub));
           Rb.ds = function(a, c, b) {
               c = O(c);
               a = ki(a);
               b = b.F;
               if ((void 0 === b ? {} : b).nohit)
                   return null;
               var d = b = null;
               n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Kp);
               if (!b) {
                   var e = n(a, "timing");
                   e && (b = Jp,
                   d = e)
               }
               if (!b)
                   return null;
               a = kn(a, d, b);
               c = Lp(c);
               return (c = jn(c, a)) && G(",", c)
           }
           ;
           Rb.bu = Xp;
           Rb.td = Wp;
           Rb.co = function(a) {
               return de(M(a).o("jn"))
           }
           ;
           var bn = ca(Rb).concat(Ip), $m = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], Wm = aa(function(a, c) {
               if (!c[a]) {
                   var b, d = new I(function(e) {
                       b = e
                   }
                   );
                   c[a] = {
                       Uc: b,
                       ja: d,
                       Vc: !1
                   }
               }
               return c[a].ja
           }), Gh = t(r(Wc, xa)), ih = r(R("settings.pcs"), la("1")), Gf = t(function(a, c, b) {
               var d = M(a);
               c = La(a);
               var e = [];
               b = E([a, b, d, c], cn);
               Nc(a) || dn(a, "14.1") || e.push(E([Zm, "pp", ""], b));
               var f = yj(a) && !Eh(a, 68);
               f || e.push(E([an, "pu", ""], b));
               f || c.Ob || ae(a) || (e.push(E([Vm, "zzlc", "na"], b)),
               e.push(E([Um, "cc", ""], b)));
               return e.length ? {
                   ga: function(g, h) {
                       if (0 === d.o("isEU"))
                           try {
                               H(r(N, Ka), e)
                           } catch (k) {}
                       h()
                   },
                   R: function(g, h) {
                       var k = g.G;
                       if (k && 0 === d.o("isEU"))
                           try {
                               H(xa(k), e)
                           } catch (l) {}
                       h()
                   }
               } : {}
           }, function(a, c, b) {
               return O(b)
           }), Oc = Vb("retryReqs", function(a) {
               return La(a).o("retryReqs", {})
           }), Tm = ["0"], Sk = z("g.r", function(a) {
               var c = V(a)
                 , b = Oc(a)
                 , d = c(W)
                 , e = Gb(a);
               return L(function(f, g) {
                   var h = g[0]
                     , k = g[1];
                   k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1,
                   f.push({
                       protocol: k.protocol,
                       host: k.host,
                       Ae: k.resource,
                       xe: k.postParams,
                       J: k.params,
                       Bd: k.browserInfo,
                       qa: k.telemetry,
                       Bf: k.ghid,
                       time: k.time,
                       Qa: Aa(h),
                       Hd: k.counterId,
                       N: k.counterType
                   }));
                   return f
               }, [], Da(b))
           }), Oe = [], Sm = "ru en et fi lt lv pl fr no sr".split(" "), Eb, Qm = (Eb = {},
           Eb["GDPR-ok"] = "ok",
           Eb["GDPR-ok-view-default"] = "ok-default",
           Eb["GDPR-ok-view-detailed"] = "ok-detailed",
           Eb["GDPR-ok-view-detailed-0"] = "ok-detailed-all",
           Eb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech",
           Eb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics",
           Eb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other",
           Eb), Hd = [], yh = r(Qe, eb(Vo(Fd)), Lc(",")), zh = r(pc(Kb(Fd)), va, Boolean), Jm = t(function(a, c) {
               var b = c.o("gdpr");
               return J(b, Ob) ? "-" + b : ""
           }), Cj = t(md), cb, jc, Ta, Fm = (cb = {},
           cb.am = "com.am",
           cb.tr = "com.tr",
           cb.ge = "com.ge",
           cb.il = "co.il",
           cb["\u0440\u0444"] = "ru",
           cb["xn--p1ai"] = "ru",
           cb["\u0443\u043a\u0440"] = "ua",
           cb["xn--j1amh"] = "ua",
           cb["\u0431\u0435\u043b"] = "by",
           cb["xn--90ais"] = "by",
           cb), Dj = [], Ej = {
               rc: Dj
           }, Fj = (jc = {},
           jc["an.yandex.ru/mapuid/betweenx/"] = Ej,
           jc["an.yandex.ru/mapuid/google/?partner-tag=yandex_ag"] = Ej,
           jc["mc.edadeal.ru"] = {
               sb: /^([^/]+\.)?edadeal\.ru$/,
               fd: "ru"
           },
           jc["mc.yandexsport.ru"] = {
               sb: /^([^/]+\.)?yandexsport\.ru$/,
               fd: "ru"
           },
           jc["mc.kinopoisk.ru"] = {
               sb: /^([^/]+\.)?kinopoisk\.ru$/,
               fd: "ru"
           },
           jc), Hm = (Ta = {},
           Ta.ka = "ge",
           Ta.ro = "md",
           Ta.tg = "tj",
           Ta.tk = "tm",
           Ta.et = "ee",
           Ta.hy = "com.am",
           Ta.he = "co.li",
           Ta.ky = "kg",
           Ta.uk = "ua",
           Ta.be = "by",
           Ta.tr = "com.tr",
           Ta.kk = "kz",
           Ta), Gj = t(md), Zp = t(function(a) {
               var c = r(pc(r(N, la("ru"), zb)), od(function(b, d) {
                   b[d] = ["mc.yandex." + d];
                   return b
               }, {}))(lf);
               H(function(b) {
                   var d = b[0];
                   b = b[1];
                   if (!b.rc || J(a, b.rc))
                       c[d] = [d]
               }, Da(Fj));
               c["mc.webvisor.org"] = ["mc.webvisor.org"];
               return c
           }), $p = t(function(a) {
               var c = P(a).hostname;
               return L(function(b, d) {
                   var e = d[0]
                     , f = d[1];
                   f.sb && !f.sb.test(c) || b.push(e);
                   return b
               }, [], Da(Fj))
           }), aq = aa(function(a, c) {
               var b = mp(c)
                 , d = Gm(c)
                 , e = $p(c) || [Dm(c)]
                 , f = V(c)
                 , g = La(c)
                 , h = g.o("synced", {});
               b = b ? e.concat(d) : e;
               b.unshift("mc.webvisor.org");
               h && (b = T(function(k) {
                   var l = (h[k] || 1) + 1440 < f(Za);
                   l && delete h[k];
                   return l
               }, b));
               g.C("synced", h);
               return L(function(k, l) {
                   H(function(m) {
                       var q = {
                           domain: m,
                           me: l
                       };
                       ac(m, "/") && (q.ce = 1);
                       k.push(q)
                   }, a[l] || []);
                   return k
               }, [], b)
           }), bq = function(a, c) {
               return function(b, d, e) {
                   d = O(e);
                   e = Zp(d);
                   var f = aq(e)
                     , g = J(d, Dj);
                   return ae(b) || Qc(b) ? {} : {
                       R: function(h, k) {
                           var l = h.G
                             , m = M(b)
                             , q = nc(b);
                           l = !(l && l.o("pv"));
                           if (q || l)
                               return k();
                           q = f(b);
                           if (!q.length)
                               return k();
                           if (m.o("startSync"))
                               Gj(b).push(k);
                           else {
                               m.C("startSync", !0);
                               m = E([b, q, A], a);
                               if (g)
                                   return m().then(k, k);
                               q = Oe[0];
                               if (!q)
                                   return k();
                               k();
                               q(b).then(m).then(A, r(Jc(A), y(b, c)))["catch"](A)
                           }
                       }
                   }
               }
           }(function(a, c) {
               var b = V(a)
                 , d = M(a)
                 , e = La(a)
                 , f = Bc(a, "c")
                 , g = ob(a, f);
               return L(function(h, k) {
                   function l() {
                       var p = e.o("synced");
                       d.C("startSync", !1);
                       p && (p[k.me] = q,
                       e.C("synced", p));
                       H(Ka, Gj(a))
                   }
                   var m = g({
                       Y: ["sync.cook"]
                   }, [ra.ha + "//" + k.domain + (k.ce ? "" : "/sync_cookie_image_check")], {
                       Aa: 1500
                   }), q;
                   m.then(function() {
                       q = b(Za);
                       l()
                   })["catch"](function() {
                       q = b(Za) - 1435;
                       l()
                   });
                   m = v(m, N);
                   return h.then(m)
               }, I.resolve(""), c)["catch"](y(a, "ctl"))
           }, "sy.c"), vh = !1, Cm = /^[a-z][\w.+-]+:/i, Hj = {}, fe, za = [Ve, Rc, Qb(), Ue];
           za.push(bq);
           za.unshift(function(a, c, b) {
               return {
                   ga: function(d, e) {
                       var f = sa(a, b);
                       (f = f && f.userParams) && d.yb && f(d.yb);
                       e()
                   }
               }
           });
           za.unshift(function(a, c, b) {
               return {
                   R: function(d, e) {
                       if (d.J && (Ci(b, d.J),
                       !d.M && d.G && d.F)) {
                           var f = hb(a, d.J)
                             , g = Cj(a)
                             , h = d.G.o("pv");
                           f && !d.F.nohit && (h ? encodeURIComponent(f).length > ra.sd ? g.push([d.G, d.J]) : d.F["site-info"] = f : (d.M = f,
                           d.oe = !0))
                       }
                       e()
                   },
                   ga: function(d, e) {
                       var f = Cj(a)
                         , g = sa(a, b)
                         , h = g && g.params;
                       h && (g = T(r(R("0"), la(d.G)), f),
                       H(function(k) {
                           h(k[1]);
                           k = Cf(a)(k, f);
                           f.splice(k, 1)
                       }, g));
                       e()
                   }
               }
           });
           za.push(wh);
           za.push(uh);
           za.push(Gf);
           za.push(function(a) {
               return {
                   R: function(c, b) {
                       var d = c.G
                         , e = La(a).o("fip");
                       e && d && (d.C("fip", e),
                       Dd(c, "fip", de(e)));
                       b()
                   }
               }
           });
           za.push(Jd());
           var ta = (fe = {},
           fe.h = za,
           fe.er = [],
           fe);
           ta.adb = [];
           var Ij = [Qb(), Ue];
           Ij.push(Gf);
           ta.f = Ij;
           ta["2"] = za;
           ta["1"] = function(a, c) {
               return T(r(Kb(c), zb), a)
           }(za, [Ue]);
           ta.a = za;
           ta.g = za;
           ta.e = za;
           var Jj = [Rc];
           Jj.push(function() {
               return function(a) {
                   return {
                       R: function(c, b) {
                           var d = c.G
                             , e = void 0 === d ? pa() : d
                             , f = c.Qa
                             , g = c.qa
                             , h = Oc(a);
                           d = e.o("rqnl", 0) + 1;
                           e.C("rqnl", d);
                           var k = e = n(h, G(".", [f, "browserInfo"]));
                           e && (e.rqnl = d);
                           g && (g.C("rqnl", d),
                           f = n(h, G(".", [f, "telemetry"]))) && (f.rqnl = d,
                           k = k || e);
                           k && Se(a);
                           b()
                       },
                       ga: function(c, b) {
                           Dh(a, c);
                           b()
                       }
                   }
               }
           }());
           ta.r = Jj;
           ta["6"] = [Rc];
           ta.t = za;
           var ed = [Ve, Rc, Qb()];
           ed.push(wh);
           ed.push(Gf);
           ed.push(uh);
           ed.push(Jd());
           ta.n = ed;
           ta.d = [Qb(["hid", "u", "v", "vf"])];
           ta.m = [Qb(["u", "v", "vf"]), Jd()];
           ta.pi = [];
           za.unshift(function(a, c, b) {
               return {
                   R: function(d, e) {
                       var f = d.G
                         , g = d.F;
                       if (!f || !g)
                           return e();
                       !Hj[b.id] && f.o("pv") && b.exp && !g.nohit && (g.exp = b.exp,
                       Hj[b.id] = !0);
                       f = g["page-ref"];
                       var h = g["page-url"];
                       f && h !== f ? g["page-ref"] = sh(a, f) : delete g["page-ref"];
                       g["page-url"] = sh(a, h).slice(0, ra.vd);
                       return e()
                   }
               }
           });
           ta["5"] = T(r(Kb([Ve, Rc]), zb), za);
           var ge, Kj = K(I.reject, I, Wa()), ja = (ge = {},
           ge.h = Ma,
           ge.er = v(Kj, N),
           ge);
           ja.a = Ma;
           ja.f = Ma;
           ja.n = Ma;
           ja["6"] = function(a, c, b) {
               var d = ob(a, c);
               return function(e) {
                   return Xe(a, b, e, !0).then(E([e, ["https://mc.yandex.md/cc"], {
                       Ab: !0,
                       od: !1
                   }], d))
               }
           }
           ;
           ja["1"] = Ma;
           ja.n = Ma;
           ja.c = ob;
           ja.g = Ma;
           ja.e = Ma;
           ja["2"] = Ma;
           ja.r = function(a, c, b) {
               var d = Te(a, c, b)
                 , e = Ma(a, c, b);
               return function(f, g, h) {
                   return "webvisor" === h ? d(f, g, f.F["wv-part"]) : e(f, g)
               }
           }
           ;
           ja.adb = Kd;
           ja.pi = ob;
           ja.m = function(a, c, b) {
               return function(d, e) {
                   var f, g = d.F;
                   g = (f = {},
                   f["page-url"] = g && g["page-url"] || "",
                   f);
                   f = C(d, {
                       F: C(d.F || {}, g)
                   });
                   return Kd(a, c, b)(f, "clmap/" + e.id)["catch"](y(a, "c.m"))
               }
           }
           ;
           ja.d = Ma;
           ja.t = Ma;
           ja["5"] = Ma;
           var ka = z("g.sen", function(a, c, b) {
               var d = Bc(a, c);
               b = xm(a, c, b);
               var e = ja[c]
                 , f = e ? e(a, d, b) : Ma(a, d, b);
               return function() {
                   var g = na(arguments)
                     , h = g.slice(1);
                   g = C(g[0], {
                       Y: [c]
                   });
                   return f.apply(void 0, Z([g], h))
               }
           }, Kj), cq = z("dc.init", function(a, c) {
               var b = P(a)
                 , d = dd(a, c)
                 , e = Lb(a)
                 , f = rh(a)
                 , g = f.ie;
               f = f.ae;
               g && !f && e.C("debug", "1", void 0, b.host);
               return Be(a) || !g && !f ? {
                   log: A,
                   warn: A,
                   error: A
               } : d
           }), Le = t(cq, kb), dq = y(window, "h.p", function(a, c) {
               var b, d, e = ka(a, "h", c), f = c.gb || "" + P(a).href, g = c.Ud || a.document.referrer, h = {
                   G: pa((b = {},
                   b.pv = 1,
                   b)),
                   F: (d = {},
                   d["page-url"] = f,
                   d["page-ref"] = g,
                   d)
               };
               h.J = c.J;
               h.yb = c.yb;
               c.Za && h.F && (h.F.nohit = "1");
               return e(h, c).then(function(k) {
                   k && (c.Za || qb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.J)(),
                   cc(a, E([a, c, k], Xm)))
               })["catch"](y(a, "h.g.s"))
           }), Mc = t(Wc, O), eq = z("p.ar", function(a, c) {
               var b = ka(a, "a", c);
               return function(d, e, f, g, h, k) {
                   var l, m, q = {
                       F: {},
                       G: pa((l = {},
                       l.pv = 1,
                       l.ar = 1,
                       l))
                   };
                   if (d)
                       return e = pb(e) ? {
                           title: e.title,
                           Sc: e.referer,
                           J: e.params,
                           ra: e.callback,
                           l: e.ctx
                       } : {
                           title: e,
                           Sc: f,
                           J: g,
                           ra: h,
                           l: k
                       },
                       f = Mc(c),
                       f.url !== d && (f.ref = f.url,
                       f.url = d),
                       d = d || P(a).href,
                       f = e.Sc || f.ref || a.document.referrer,
                       g = qb(a, c, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f, e.J),
                       q = b(C(q, {
                           J: e.J,
                           title: e.title,
                           F: C(q.F, (m = {},
                           m["page-url"] = d,
                           m["page-ref"] = f,
                           m))
                       }), c).then(g),
                       qc(a, "p.ar.s", q, e.ra || A, e.l)
               }
           }), he = aa(function(a, c) {
               return wm(a, c)
           }), fq = z("c.c.cc", function(a) {
               var c = M(a)
                 , b = r(he(a), function(d) {
                   var e;
                   return C({}, d, (e = {},
                   e.oldCode = !!a.ya_cid,
                   e.clickmap = !!d.clickmap,
                   e))
               });
               return y(a, "g.c.cc", r(K(c.o, c, "counters", {}), ca, eb(b)))
           }), gq = z("gt.c.rs", function(a, c) {
               var b, d = O(c), e = c.id, f = c.N, g = c.Ed, h = c.zb, k = c.fc, l = E([a, d], vm);
               ph(a, d, (b = {},
               b.id = e,
               b.type = +f,
               b.clickmap = g,
               b.webvisor = !!h,
               b.trackHash = !!k,
               b));
               return l
           }), Oi, hq = z("th.e", function(a, c) {
               function b() {
                   f || (h = Kc(a, "onhashchange") ? ea(a).D(a, ["hashchange"], g) : Bo(a, g))
               }
               var d = ka(a, "t", c)
                 , e = Cd(a, O(c))
                 , f = !1
                 , g = y(a, "h.h.ch", K(Co, null, a, c, d))
                 , h = A;
               c.fc && (b(),
               f = !0);
               return {
                   Me: y(a, "tr.hs.h", function(k) {
                       var l;
                       k ? b() : h();
                       f = !!k;
                       e((l = {},
                       l.trackHash = f,
                       l))
                   }),
                   unsubscribe: h
               }
           }), Lj = {
               1882689622: 1,
               2318205080: 1,
               3115871109: 1,
               3604875100: 1,
               339366994: 1,
               2890452365: 1,
               849340123: 1,
               173872646: 1,
               2343947156: 1,
               655012937: 1,
               3724710748: 1,
               3364370932: 1,
               1996539654: 1,
               2065498185: 1,
               823651274: 1,
               12282461: 1,
               1555719328: 1,
               1417229093: 1,
               138396985: 1
           }, iq = t(function() {
               return L(function(a, c) {
                   var b = fc(c + "/watch.js");
                   Lj[b] || (a[b] = 1);
                   return a
               }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
           }), Qi = 1, vf = {}, Zd = {}, kq = z("nb.p", function(a, c) {
               function b(D) {
                   k() || (D = "number" === typeof D ? D : 15E3,
                   D = Eo(a, d(!1), D),
                   u = D.id,
                   B = D.uc,
                   l())
               }
               function d(D) {
                   return function(Q) {
                       var ha, Ia, Fb;
                       void 0 === Q && (Q = (ha = {},
                       ha.ctx = {},
                       ha.callback = A,
                       ha));
                       if (D || !p && !h.Ob) {
                           p = !0;
                           l();
                           u && Do(a, u);
                           var xc = m(W);
                           ha = (Aa(h.o("lastHit")) || 0) < xc - 18E5;
                           var Hf = .1 > Math.random();
                           h.C("lastHit", xc);
                           xc = pa((Ia = {},
                           Ia.nb = "1",
                           Ia.cl = w,
                           Ia.ar = "1",
                           Ia));
                           Ia = Mc(c);
                           Ia = {
                               F: (Fb = {},
                               Fb["page-url"] = Ia.url || P(a).href,
                               Fb),
                               G: xc
                           };
                           Fb = dd(a, O(c)).warn;
                           !Q.callback && Q.ctx && Fb('"callback" argument missing');
                           if (D || ha || Hf || !tn(a.location.href, a.document.referrer))
                               return Fb = f(Ia, c).then(function() {
                                   if (!D) {
                                       var Yb = .002, Zb = c.id === ra.wd ? 1 : .002, $b, yc, If, ie, Jf;
                                       void 0 === Yb && (Yb = 1);
                                       void 0 === Zb && (Zb = 1);
                                       var fd = a.performance;
                                       if (fd && S(fd.getEntriesByType) && (Yb = Math.random() > Yb,
                                       Zb = Math.random() > Zb,
                                       !Yb || !Zb)) {
                                           fd = a.performance.getEntriesByType("resource");
                                           for (var je = {}, Kf = {}, ke = {}, jq = iq(a), Lf = 0; Lf < fd.length; Lf += 1) {
                                               var mb = fd[Lf]
                                                 , le = mb.name.replace(/^https?:\/\//, "").split("?")[0]
                                                 , Mj = fc(le)
                                                 , Nj = ($b = {},
                                               $b.dns = Math.round(mb.domainLookupEnd - mb.domainLookupStart),
                                               $b.tcp = Math.round(mb.connectEnd - mb.connectStart),
                                               $b.duration = Math.round(mb.duration),
                                               $b.response = Math.round(mb.responseEnd - mb.requestStart),
                                               $b);
                                               "script" !== mb.initiatorType || Yb || (Kf[le] = C(Nj, (yc = {},
                                               yc.name = mb.name,
                                               yc.decodedBodySize = mb.decodedBodySize,
                                               yc)));
                                               !Lj[Mj] && !jq[Mj] || je[le] || Zb || (je[le] = C(Nj, (If = {},
                                               If.pages = a.location.href,
                                               If)))
                                           }
                                           ca(je).length && (ke.timings8 = je);
                                           ca(Kf).length && (ke.scripts = Kf);
                                           if (ca(ke).length)
                                               ka(a, "d", c)({
                                                   G: pa((ie = {},
                                                   ie.ar = "1",
                                                   ie.pv = "1",
                                                   ie)),
                                                   M: hb(a, ke) || void 0,
                                                   F: (Jf = {},
                                                   Jf["page-url"] = a.location && "" + a.location.href,
                                                   Jf)
                                               }, {
                                                   id: ra.xd,
                                                   N: "0"
                                               })["catch"](y(a, "r.tim.ng2"))
                                       }
                                   }
                               }),
                               qc(a, "l.o.l", Fb, Q.callback, Q.ctx)
                       }
                       return null
                   }
               }
               var e, f = ka(a, "n", c), g = O(c), h = wc(a, c.id), k = v(v(g, he(a)), r(Ka, R("accurateTrackBounce"))), l = v((e = {},
               e.accurateTrackBounce = !0,
               e), Cd(a, g)), m = V(a), q = m(W), p = !1, u = 0, w = 0, B;
               oa(a, c, function(D) {
                   w = D.Td - q
               });
               c.Ua && b(c.Ua);
               return {
                   qe: d(!0),
                   Ua: b,
                   Hb: B
               }
           }), Mf = ["yandex_metrika_callback" + Sc.callbackPostfix, "yandex_metrika_callbacks" + Sc.callbackPostfix], lq = z("cb.i", function(a) {
               var c = Mf[0]
                 , b = Mf[1];
               if (S(a[c]))
                   a[c]();
               "object" === typeof a[b] && H(function(d, e) {
                   a[b][e] = null;
                   Ke(a, d)
               }, a[b]);
               H(function(d) {
                   try {
                       delete a[d]
                   } catch (e) {
                       a[d] = void 0
                   }
               }, Mf)
           }), Oj = {
               Cf: Fa(/[/&=?#]/)
           }, ld = z("go.in", function(a, c, b, d) {
               void 0 === b && (b = "goal");
               return function(e, f, g, h) {
                   var k, l;
                   if (!e || Oj[b] && Oj[b](e))
                       return null;
                   var m = f
                     , q = g || A;
                   S(f) && (q = f,
                   m = void 0,
                   h = g);
                   var p = qb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + e, m)
                     , u = "goal" === b;
                   f = ka(a, "g", c);
                   g = um(a, c, e, b);
                   e = g[0];
                   g = g[1];
                   m = f({
                       J: m,
                       G: pa((k = {},
                       k.ar = 1,
                       k)),
                       F: (l = {},
                       l["page-url"] = e,
                       l["page-ref"] = g,
                       l)
                   }, c).then(function() {
                       u && p();
                       d && d()
                   });
                   return qc(a, "g.s", m, q, h)
               }
           }), mq = aa(function(a, c) {
               Ja(c) ? a.push(c) : H(r(N, fa("push", a)), c)
           }), nq = z("cl.p", function(a, c) {
               function b(m, q, p, u) {
                   void 0 === u && (u = {});
                   p ? zd(a, c, {
                       url: p,
                       Ja: !0,
                       kb: m,
                       ob: q,
                       sender: d,
                       l: u.ctx,
                       ra: u.callback,
                       title: u.title,
                       J: u.params
                   }) : f.warn("Empty link")
               }
               var d = ka(a, "2", c)
                 , e = []
                 , f = dd(a, O(c))
                 , g = O(c)
                 , h = y(a, "s.s.tr", v(Cd(a, g), tm));
               g = {
                   l: a,
                   sa: c,
                   Rd: e,
                   sender: d,
                   globalStorage: M(a),
                   Id: wc(a, c.id),
                   Ef: Gb(a),
                   Ne: v(v(g, he(a)), r(Ka, R("trackLinks")))
               };
               g = y(a, "cl.p.c", v(g, qm));
               g = ea(a).D(a, ["click"], g);
               c.wb && h(c.wb);
               var k = y(a, "file.clc", E([!0, !1], b))
                 , l = y(a, "e.l.l.clc", E([!1, !0], b));
               e = y(a, "add.f.e.clc", mq(e));
               return {
                   file: k,
                   Pd: l,
                   Ad: e,
                   wb: h,
                   Hb: g
               }
           }), oq = t(r(R("performance.memory.jsHeapSizeLimit"), fa("concat", ""))), mh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), om = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), nm = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"), mm = ["availWidth", "availHeight", "availTop"], pq = ["webgl", "experimental-webgl"], km = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], Ie = v(Wa("ccf"), wb), hm = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), bm = aa(Mb)("(ym-disable-clickmap|ym-clickmap-ignore)"), qq = z("clm.p", function(a, c) {
               if (Ld(a))
                   return A;
               var b = ka(a, "m", c), d = O(c), e = V(a), f = e(W), g = v(v(d, he(a)), r(Ka, R("clickmap"))), h, k = null;
               d = y(a, "clm.p.c", function(l) {
                   var m = g();
                   if (m) {
                       var q = M(a)
                         , p = q.o("cls", {
                           Wa: 0,
                           x: 0,
                           y: 0
                       });
                       q.C("cls", {
                           Wa: p.Wa + 1,
                           x: p.x + l.clientX,
                           y: p.y + l.clientY
                       });
                       q = "object" === typeof m ? m : {};
                       p = q.filter;
                       m = q.isTrackHash || !1;
                       var u = x(function(B) {
                           return ("" + B).toUpperCase()
                       }, q.ignoreTags || []);
                       X(h) && (h = q.quota || null);
                       var w = !!q.quota;
                       l = {
                           element: cm(a, l),
                           position: sd(a, l),
                           button: dm(l),
                           time: e(W)
                       };
                       q = P(a).href;
                       if (am(a, l, k, u, p)) {
                           if (w) {
                               if (!h)
                                   return;
                               --h
                           }
                           u = Rd(a, l.element);
                           p = u[0];
                           u = u[1];
                           w = kf(a, l.element);
                           p = ["rn", Ua(a), "x", Math.floor(65535 * (l.position.x - w.left) / (p || 1)), "y", Math.floor(65535 * (l.position.y - w.top) / (u || 1)), "t", Math.floor((l.time - f) / 100), "p", jf(a, l.element), "X", l.position.x, "Y", l.position.y];
                           p = G(":", p);
                           m && (p += ":wh:1");
                           $l(a, q, p, b, c);
                           k = l
                       }
                   }
               });
               return ea(a).D(n(a, "document"), ["click"], d)
           }), rq = t(function(a) {
               var c = M(a)
                 , b = c.o("isEU");
               if (X(b)) {
                   var d = Aa(td(a, "is_gdpr") || "");
                   if (J(d, [0, 1]))
                       c.C("isEU", d),
                       b = !!d;
                   else if (a = La(a).o("wasSynced"),
                   a = n(a, "params.eu"))
                       c.C("isEU", a),
                       b = !!a
               }
               return b
           }, function(a) {
               return M(a).o("isEU")
           }), Pj = z("i.e", rq), sq = z("pr.p", function(a, c) {
               var b, d;
               if (We(a)) {
                   var e = ka(a, "5", c)
                     , f = pa((b = {},
                   b.pq = 1,
                   b.ar = 1,
                   b));
                   e({
                       G: f,
                       F: (d = {},
                       d["page-url"] = P(a).href,
                       d["page-ref"] = n(a, "document.referrer") || "",
                       d)
                   }, c)["catch"](y(a, "pr.p.s"))
               }
           }), ib = r(ca, R("0")), tq = z("c.m.p", function(a, c) {
               var b = O(c);
               return v(Cd(a, b), Zl)
           }), uq = z("e.a.p", function(a, c) {
               var b = sa(a, c);
               b = E([r(N, xa(!0)), T(Boolean, x(v(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], x);
               c.Nd && b();
               return b
           }), vq = z("cc.i", function(a, c) {
               var b = E([a, c], Yl);
               b = E([a, b, 300], da);
               oa(a, c, b)
           }), wq = z("s.f.i", function(a, c) {
               return oa(a, c, function(b) {
                   if (n(b, "settings.button_goals") || -1 !== P(a).href.indexOf("yagoalsbuttons=1"))
                       ea(a).D(a, ["click"], y(a, "c.t.c", r(R("target"), E([a, c], $d(a, c, "", Xl))))),
                       qb(a, c, "Button goal. Counter " + c.id + ". Init.")()
               })
           }), lh, xq = z("p.ai", function(a, c) {
               return new I(function(b) {
                   (Nc(a) || Ne(a)) && b(oa(a, c, function(d) {
                       var e;
                       return (d = n(d, "settings.sbp")) ? kh(a, C({}, d, (e = {},
                       e.c = c.id,
                       e)), 10) : A
                   }));
                   b(A)
               }
               )
           }), Nf = [], Of = [], Pl = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Ql = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], jh = {
               F: {
                   t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
               }
           }, hh = {
               id: 42822899,
               N: "0"
           }, me, Wl = (me = {},
           me.s = "p",
           me["8"] = "i",
           me), Tl = Vb("csp", function(a, c) {
               return ka(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
           }), Qj = "et w v z i u vf".split(" "), Il = {
               $f: "stamp",
               yf: "frameId",
               ca: "meta",
               lf: "base",
               Df: "hasBase",
               gf: "address",
               cg: "ua",
               Wf: "prev",
               Kf: "namespace",
               Hf: "keystrokes",
               Gf: "isMeta",
               Jf: "modifier",
               Tf: "pageWidth",
               Sf: "pageHeight",
               ag: "startNode",
               uf: "endNode",
               fg: "zoomFrom",
               gg: "zoomTo",
               level: "level",
               duration: "duration",
               Ff: "i",
               Of: "o",
               n: "n",
               r: "r",
               sf: "ct",
               jf: "at",
               Lf: "nm",
               Mf: "ns",
               Rf: "pa",
               Vf: "pr",
               Nf: "nx",
               Ia: "h",
               pf: "changes",
               ff: "a",
               kf: "b",
               nf: "c",
               Qf: "op"
           }, Jl = ["attributes", "attrs"], Rj = function() {
               function a(c) {
                   this.l = c
               }
               a.prototype.na = function(c) {
                   var b = wd(c);
                   c = x(K(this.za, this), b);
                   return Yh(hb(this.l, x(function(d, e) {
                       var f;
                       return C({}, b[e], (f = {},
                       f.data = d,
                       f))
                   }, c)))
               }
               ;
               a.prototype.za = function(c) {
                   var b = c.data;
                   "string" !== typeof b && (b = hb(this.l, wd(c.data)));
                   return b
               }
               ;
               a.prototype.Ha = function(c) {
                   return encodeURIComponent(c).length
               }
               ;
               a.prototype.cd = function(c, b) {
                   for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
                       e.push(c.slice(f * d, d * (f + 1)));
                   return e
               }
               ;
               a.prototype.isEnabled = function() {
                   return !!this.l.JSON
               }
               ;
               return a
           }(), Sj = function() {
               function a(c, b, d) {
                   this.tc = 0;
                   this.Yb = 1;
                   this.Bb = 5E3;
                   this.l = c;
                   this.aa = b;
                   this.Ee = d
               }
               a.prototype.vb = function() {
                   this.tc = da(this.l, r(K(this.flush, this), K(this.vb, this)), this.Bb, "b.f")
               }
               ;
               a.prototype.send = function(c, b) {
                   var d = this.Ee(c, b || [], this.Yb);
                   this.Yb += 1;
                   return d
               }
               ;
               a.prototype.push = function() {}
               ;
               a.prototype.flush = function() {}
               ;
               return a
           }(), Pf, yq = (Pf = function(a) {
               function c(b, d, e, f) {
                   void 0 === f && (f = 0);
                   d = a.call(this, b, d, e) || this;
                   d.ec = 0;
                   d.Da = 0;
                   d.dc = 0;
                   d.buffer = [];
                   d.Bb = 2E3;
                   d.T = df(b);
                   d.vb();
                   d.dc = f;
                   return d
               }
               Zc(c, a);
               c.prototype.Ac = function(b) {
                   return T(Boolean, this.T.O("ag", b))
               }
               ;
               c.prototype.zc = function(b, d) {
                   var e = this;
                   b(yb(y(this.l, "wv2.b.st"), function(f) {
                       e.send(f, d)
                   }))
               }
               ;
               c.prototype.Fe = function(b, d) {
                   var e = this;
                   Pa(this.l, this.tc);
                   var f = Math.ceil(this.aa.Ha(d) / 63E4)
                     , g = this.aa.cd(d, f);
                   H(function(h, k) {
                       var l, m = C({}, b, (l = {},
                       l.data = h,
                       l.partNum = k + 1,
                       l.end = k + 1 === f,
                       l));
                       l = e.aa.na([m], !1);
                       e.zc(l, [m])
                   }, g);
                   this.vb()
               }
               ;
               c.prototype.send = function(b, d) {
                   var e = this;
                   this.T.O("se", d);
                   return a.prototype.send.call(this, b, d).then(N, function() {
                       e.T.O("see", d)
                   })
               }
               ;
               c.Wd = function(b, d, e, f) {
                   c.Cb["" + b + "e"] || (this.Cb.e = new c(f,e,d,0));
                   return this.Cb.e
               }
               ;
               c.prototype.je = function() {
                   return this.dc && this.ec >= this.dc
               }
               ;
               c.prototype.push = function(b) {
                   var d = this;
                   if (!this.je()) {
                       this.T.O("p", b);
                       var e = this.aa.za(b)
                         , f = this.aa.Ha(e);
                       7E5 < f ? this.Fe(b, e) : (e = this.Ac(this.buffer.concat([b])),
                       e = L(function(g, h) {
                           return g + d.aa.Ha(d.aa.za(h))
                       }, 0, e),
                       this.Da + e + f >= 7E5 * .7 && this.flush(),
                       this.buffer.push(b),
                       this.Da += f)
                   }
               }
               ;
               c.prototype.D = function(b, d) {
                   this.T.D([b], d)
               }
               ;
               c.prototype.va = function(b, d) {
                   this.T.va([b], d)
               }
               ;
               c.prototype.flush = function() {
                   var b = this.buffer.concat(this.Ac(this.buffer));
                   if (b.length) {
                       this.buffer = [];
                       this.ec += this.Da;
                       this.Da = 0;
                       var d = this.aa.na(b);
                       this.zc(d, b)
                   }
               }
               ;
               return c
           }(Sj),
           Pf.Cb = {},
           Pf), gd, Qf = (gd = {},
           gd[1] = 500,
           gd[2] = 500,
           gd[3] = 0,
           gd), Rf = function() {
               function a(c, b) {
                   var d, e = this;
                   this.id = "a";
                   this.Nb = !1;
                   this.Ga = {};
                   this.ya = {
                       "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                       Nc: ["article"]
                   };
                   this.ic = (d = {},
                   d.Answer = 3,
                   d.Review = 2,
                   d);
                   this.Gd = t(function(f, g) {
                       rb(e.l, e.ia, "Warning: content has only " + g.chars + " chars. Required " + Qf[g.type], g)
                   });
                   this.l = c;
                   this.root = Jb(c);
                   this.ia = b
               }
               a.prototype.ea = function(c) {
                   return c.element
               }
               ;
               a.prototype.Bc = function(c, b) {
                   var d = this, e;
                   y(this.l, "P.s." + b, function() {
                       e = d.Ga[b].call(d, c)
                   })();
                   return e
               }
               ;
               a.prototype.ye = function(c) {
                   var b = C({}, c);
                   this.Nb && !b.id && J(c.type, [3, 2]) && (c = G(", ", x(R("name"), b.authors || [])),
                   b.pageTitle = c + ": " + b.pageTitle);
                   b.pageTitle || (b.pageTitle = this.$d(b.Xa));
                   b.pageUrlCanonical || (c = b.id,
                   b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Zd());
                   b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                   return b
               }
               ;
               a.prototype.ba = function(c) {
                   var b = this
                     , d = {}
                     , e = this.ea(c);
                   if (!e)
                       return null;
                   d.type = c.type;
                   H(function(g) {
                       d[g] = b.Bc(c, g)
                   }, ca(this.Ga));
                   var f = V(this.l);
                   d.stamp = f(bi);
                   d.element = c.element;
                   d.Xa = e;
                   d = this.ye(d);
                   d.id = d.id ? fc(d.id) : 1;
                   d.update = function(g) {
                       return b.ea(c) ? b.Bc(c, g) : void 0
                   }
                   ;
                   return d
               }
               ;
               a.prototype.$d = function(c) {
                   for (var b = 1; 5 >= b; b += 1) {
                       var d = Na(mc("h" + b, c));
                       if (d)
                           return d
                   }
               }
               ;
               a.prototype.Zd = function() {
                   var c = mc('[rel="canonical"]', this.root);
                   if (c)
                       return c.href
               }
               ;
               a.prototype.Dc = function() {
                   return 1
               }
               ;
               a.prototype.fb = function() {
                   return []
               }
               ;
               a.prototype.Sd = function() {
                   var c = this
                     , b = this.fb()
                     , d = 1;
                   return L(function(e, f) {
                       var g = c.ba({
                           element: f,
                           type: c.Dc(f)
                       }) || [];
                       Y(g) || (g = [g]);
                       g = L(function(h, k) {
                           var l = h.values
                             , m = h.Fc;
                           k && k.chars > Qf[k.type] && !J(k.id, m) ? (l.push(k),
                           m.push(k.id)) : k && k.chars <= Qf[k.type] && c.Gd(k.id, k);
                           return {
                               values: l,
                               Fc: m
                           }
                       }, {
                           values: [],
                           Fc: x(R("id"), e)
                       }, g).values;
                       return e.concat(x(function(h) {
                           var k;
                           h = C((k = {
                               index: d,
                               $c: !1
                           },
                           k.involvedTime = 0,
                           k), h);
                           d += 1;
                           return h
                       }, g))
                   }, [], b)
               }
               ;
               return a
           }(), Tj = function(a) {
               function c() {
                   var b, d = null !== a && a.apply(this, arguments) || this;
                   d.id = "j";
                   d.Nb = !0;
                   d.sc = G(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                   d.Ga = (b = {},
                   b.id = function(e) {
                       var f = e.data["@id"];
                       e = e.data.mainEntity || e.data.mainEntityOfPage;
                       !f && e && (f = e["@id"]);
                       return f
                   }
                   ,
                   b.chars = function(e) {
                       return "string" === typeof e.data.text ? e.data.text.length : Bb(this.ea(e)).length
                   }
                   ,
                   b.authors = function(e) {
                       var f = [];
                       f = f.concat(this.eb(e.data, "author"));
                       f = f.concat(this.eb(e.data.mainEntity, "author"));
                       return f.concat(this.eb(e.data.mainEntityOfPage, "author"))
                   }
                   ,
                   b.pageTitle = function(e) {
                       var f = e.data.headline || "";
                       e.data.hf && (f += " " + e.data.alternativeHeadline);
                       "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                       3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                       return f
                   }
                   ,
                   b.updateDate = function(e) {
                       return e.data.dateModified || ""
                   }
                   ,
                   b.publicationDate = function(e) {
                       return e.data.datePublished || ""
                   }
                   ,
                   b.pageUrlCanonical = function(e) {
                       return e.data.url
                   }
                   ,
                   b.topics = function(e) {
                       return this.eb(e.data, "about", ["name", "alternateName"])
                   }
                   ,
                   b.rubric = function(e) {
                       var f = this
                         , g = this.ea(e);
                       e = T(Boolean, x(function(h) {
                           if (h = xb(f.l, Bb(h))) {
                               var k = f.Cc(h);
                               if (k)
                                   return L(function(l, m) {
                                       return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                   }, null, k);
                               if ("BreadcrumbList" === h["@type"])
                                   return h
                           }
                           return null
                       }, [e.element].concat(jb(this.sc, document.body === g ? document.documentElement : g))));
                       return e.length && (e = e[0].itemListElement,
                       Y(e)) ? T(Boolean, x(function(h) {
                           return h.item && !f.l.isNaN(h.position) ? {
                               name: h.item.name || h.name,
                               position: h.position
                           } : null
                       }, e)) : []
                   }
                   ,
                   b);
                   return d
               }
               Zc(c, a);
               c.prototype.eb = function(b, d, e) {
                   void 0 === e && (e = ["name"]);
                   if (!b || !b[d])
                       return [];
                   b = Y(b[d]) ? b[d] : [b[d]];
                   b = T(N, x(function(f) {
                       return f ? "string" === typeof f ? f : L(function(g, h) {
                           return g || "" + f[h]
                       }, "", e) : null
                   }, b));
                   return x(function(f) {
                       var g;
                       return g = {},
                       g.name = f,
                       g
                   }, b)
               }
               ;
               c.prototype.ea = function(b) {
                   var d = b.element
                     , e = b.data["@id"]
                     , f = b.data.url;
                   b = null;
                   f && "string" === typeof f && (b = this.wc(f));
                   !b && e && "string" === typeof e && (b = this.wc(e));
                   b || (b = e = d.parentNode,
                   !Hb("head", this.l, d) && e && 0 !== Bb(e).length) || (b = this.l.document.body);
                   return b
               }
               ;
               c.prototype.wc = function(b) {
                   try {
                       var d = Ad(this.l, b).hash;
                       if (d) {
                           var e = mc(d, this.l.document.body);
                           if (e)
                               return e
                       }
                   } catch (f) {}
                   return null
               }
               ;
               c.prototype.Xb = function(b) {
                   return this.ic[b["@type"]] || 1
               }
               ;
               c.prototype.ba = function(b) {
                   var d = this
                     , e = b.element;
                   if (!b.data && (b.data = xb(this.l, Bb(e)),
                   !b.data || !/schema\.org/.test(b.data["@context"]) && !Y(b.data)))
                       return null;
                   var f = this.Cc(b.data);
                   if (f)
                       return x(function(h) {
                           if (!J(h["@type"], d.ya["schema.org"]))
                               return null;
                           h = {
                               element: e,
                               data: h,
                               type: d.Xb(h)
                           };
                           return a.prototype.ba.call(d, h)
                       }, f);
                   if ("QAPage" === b.data["@type"]) {
                       var g = b.data.mainEntity || b.data.mainEntityOfPage;
                       if (!g)
                           return null
                   }
                   "Question" === b.data["@type"] && (g = b.data);
                   return g ? (b = Ib(v(g, n), ["acceptedAnswer", "suggestedAnswer"]),
                   x(function(h) {
                       var k;
                       if (!h || !J(h["@type"], d.ya["schema.org"]))
                           return null;
                       h = {
                           element: e,
                           type: d.Xb(h),
                           data: C((k = {},
                           k.parentItem = g,
                           k), h)
                       };
                       return a.prototype.ba.call(d, h)
                   }, b)) : J(b.data["@type"], this.ya["schema.org"]) ? a.prototype.ba.call(this, C(b, {
                       type: this.Xb(b.data)
                   })) : null
               }
               ;
               c.prototype.fb = function() {
                   return jb(this.sc, this.root)
               }
               ;
               c.prototype.Cc = function(b) {
                   return Y(b) && b || b && Y(b["@graph"]) && b["@graph"]
               }
               ;
               return c
           }(Rf), Sf = function(a) {
               function c() {
                   var b, d = null !== a && a.apply(this, arguments) || this;
                   d.id = "s";
                   d.Nb = !0;
                   d.Oe = fa("exec", new RegExp("schema.org\\/(" + G("|", ca(d.ic)) + ")$"));
                   d.Ga = (b = {},
                   b.id = function(e) {
                       e = e.element;
                       var f = Sa(this.l, e, "identifier");
                       return f ? Na(f) : (f = Sa(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                   }
                   ,
                   b.chars = function(e) {
                       var f = 0;
                       e = e.element;
                       for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                           var k = Sa(this.l, e, g[h]);
                           if (k) {
                               f = Na(k).length;
                               break
                           }
                       }
                       e = Bb(e);
                       0 === f && e && (f += e.length);
                       return f
                   }
                   ,
                   b.topics = function(e) {
                       var f = this
                         , g = ad(this.l, e.element, "about");
                       return x(function(h) {
                           var k = {
                               name: Na(h)
                           };
                           if (g = Sa(f.l, h, "name"))
                               k.name = Na(g);
                           return k
                       }, g)
                   }
                   ,
                   b.rubric = function(e) {
                       var f = this;
                       (e = mc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = mc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                       return e ? x(function(g) {
                           return {
                               name: Na(Sa(f.l, g, "name")),
                               position: Na(Sa(f.l, g, "position"))
                           }
                       }, ad(this.l, e, "itemListElement")) : []
                   }
                   ,
                   b.updateDate = function(e) {
                       return (e = Sa(this.l, e.element, "dateModified")) ? Ri(e) : ""
                   }
                   ,
                   b.publicationDate = function(e) {
                       return (e = Sa(this.l, e.element, "datePublished")) ? Ri(e) : ""
                   }
                   ,
                   b.pageUrlCanonical = function(e) {
                       e = ad(this.l, e.element, "url");
                       if (e.length) {
                           var f = e[0];
                           return f.href ? f.href : Na(e)
                       }
                       return null
                   }
                   ,
                   b.pageTitle = function(e) {
                       var f = ""
                         , g = e.element
                         , h = Sa(this.l, g, "headline");
                       h && (f += Na(h));
                       (h = Sa(this.l, g, "alternativeHeadline")) && (f += " " + Na(h));
                       "" === f && ((h = Sa(this.l, g, "name")) || (h = Sa(this.l, g, "itemReviewed")),
                       h && (f += Na(h)));
                       3 === e.type && (e = Hb('[itemtype$="schema.org/Question"]', this.l, g)) && (e = Sa(this.l, e, "text")) && (f += Na(e));
                       return f
                   }
                   ,
                   b.authors = function(e) {
                       var f = this;
                       e = ad(this.l, e.element, "author");
                       return x(function(g) {
                           var h, k = (h = {},
                           h.name = "",
                           h);
                           /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = Sa(f.l, g, "name")) && (k.name = Na(h));
                           k.name || (k.name = g.getAttribute("content") || Bb(g) || g.getAttribute("href"));
                           return k
                       }, e)
                   }
                   ,
                   b);
                   return d
               }
               Zc(c, a);
               c.prototype.Dc = function(b) {
                   b = b.getAttribute("itemtype") || "";
                   return (b = this.Oe(b)) ? this.ic[b[1]] : 1
               }
               ;
               c.prototype.ba = function(b) {
                   return b.element && Bb(b.element).length ? a.prototype.ba.call(this, b) : null
               }
               ;
               c.prototype.fb = function() {
                   var b = G(",", x(function(d) {
                       return '[itemtype$="schema.org/' + d + '"]'
                   }, this.ya["schema.org"]));
                   return jb(b, this.root)
               }
               ;
               return c
           }(Rf), Uj = function(a) {
               function c(b, d) {
                   var e, f = a.call(this, b, d) || this;
                   f.id = "o";
                   f.Ga = (e = {},
                   e.chars = function(g) {
                       g = this.ea(g);
                       return Bb(g).length
                   }
                   ,
                   e.authors = function(g) {
                       return this.Jb(g.data.author)
                   }
                   ,
                   e.pageTitle = function(g) {
                       return this.ib(g.data.title) || ""
                   }
                   ,
                   e.updateDate = function(g) {
                       return this.ib(g.data.modified_time)
                   }
                   ,
                   e.publicationDate = function(g) {
                       return this.ib(g.data.published_time)
                   }
                   ,
                   e.pageUrlCanonical = function(g) {
                       return this.ib(g.data.url)
                   }
                   ,
                   e.rubric = function(g) {
                       return this.Jb(g.data.section)
                   }
                   ,
                   e.topics = function(g) {
                       return this.Jb(g.data.tag)
                   }
                   ,
                   e);
                   f.Od = new RegExp("^(og:)?((" + G("|", f.ya.Nc) + "):)?");
                   return f
               }
               Zc(c, a);
               c.prototype.Jb = function(b) {
                   var d;
                   return b ? Y(b) ? x(function(e) {
                       var f;
                       return f = {},
                       f.name = e,
                       f
                   }, b) : [(d = {},
                   d.name = b,
                   d)] : []
               }
               ;
               c.prototype.ib = function(b) {
                   return Y(b) ? b.length ? b[0] : null : b
               }
               ;
               c.prototype.fb = function() {
                   var b = jb('meta[property="og:type"]', this.l.document.body);
                   return [this.l.document.head].concat(b)
               }
               ;
               c.prototype.Yd = function(b) {
                   var d = this
                     , e = b.element
                     , f = {}
                     , g = this.ea(b);
                   e = jb("meta[property]", e === this.l.document.head ? e : g);
                   if (e.length)
                       H(function(h) {
                           try {
                               if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                   var k = h.getAttribute("property").replace(d.Od, "")
                                     , l = Na(h);
                                   f[k] ? Y(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                               }
                           } catch (m) {
                               yd(d.l, "og.ed", m)
                           }
                       }, e);
                   else
                       return null;
                   return J(f.type, this.ya.Nc) ? C(b, {
                       data: f
                   }) : null
               }
               ;
               c.prototype.ea = function(b) {
                   b = b.element;
                   var d = this.l.document;
                   return b === d.head ? d.body : b.parentNode
               }
               ;
               c.prototype.ba = function(b) {
                   return (b = this.Yd(b)) ? a.prototype.ba.call(this, b) : null
               }
               ;
               return c
           }(Rf), Vj = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), zq = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "), Aq = function() {
               function a(c, b, d, e) {
                   this.lb = !1;
                   this.ca = {};
                   this.scroll = {
                       x: 0,
                       y: 0
                   };
                   this.Mb = this.Lc = 0;
                   this.Vb = this.Qc = "";
                   this.W = [];
                   this.Je = 0;
                   this.Ba = {
                       Ia: 0,
                       lc: 0
                   };
                   this.qd = zq;
                   this.buffer = d;
                   this.Ta = K(this.Ta, this);
                   this.hb = K(this.hb, this);
                   this.qb = K(this.qb, this);
                   this.l = c;
                   this.ia = e;
                   this.ub = b;
                   this.Qb = "pai" + b.id;
                   this.Kb();
                   this.vc = ea(this.l);
                   this.time = V(this.l);
                   this.jd();
                   this.Lb = M(this.l)
               }
               a.prototype.start = function() {
                   var c = this;
                   if (!this.lb) {
                       this.buffer.D("ag", this.hb);
                       this.buffer.D("se", this.qb);
                       this.Ge();
                       var b = this.Lb.o(this.Qb, [])
                         , d = !b.length;
                       b.push(K(this.le, this));
                       this.Lb.oa(this.Qb, b);
                       d && this.Wc();
                       var e = function(f, g) {
                           return (f.ac || 0) <= (g.ac || 0) ? g : f
                       };
                       ea(this.l).D(this.l, ["click"], function(f) {
                           if (c.W.length) {
                               f = nh(f);
                               var g = P(c.l).hostname, h;
                               if (h = f)
                                   h = Bd(f.hostname) === Bd(g);
                               h && (f = L(e, c.W[0], c.W).id,
                               g = Gb(c.l),
                               wc(c.l, c.ia.split(":")[0]).C("pai", f + "-" + g))
                           }
                       });
                       this.Ta({
                           type: "page",
                           target: this.l
                       })
                   }
               }
               ;
               a.prototype.stop = function() {
                   this.buffer.va("se", this.qb);
                   this.buffer.va("ag", this.hb);
                   this.Pe();
                   this.lb = !0
               }
               ;
               a.prototype.Jc = function(c) {
                   return Hb("html", this.l, c) !== this.l.document.documentElement
               }
               ;
               a.prototype.Wc = function() {
                   var c = this;
                   y(this.l, "p.ic" + this.ub.id, function() {
                       if (!c.lb) {
                           var b = c.Lb.o(c.Qb)
                             , d = c.ub.Sd();
                           H(function(e) {
                               var f = x(function(g) {
                                   return C({}, g)
                               }, d);
                               S(e) && e(f)
                           }, b);
                           c.Je = da(c.l, K(c.Wc, c), 1E3, "p")
                       }
                   })()
               }
               ;
               a.prototype.le = function(c) {
                   this.lb || (this.Qe(c),
                   this.Re(),
                   this.De())
               }
               ;
               a.prototype.Ta = function(c) {
                   var b = this;
                   y(this.l, "p.ec." + this.ub.id, function() {
                       try {
                           var d = c.type;
                           var e = c.target
                       } catch (l) {
                           return
                       }
                       var f = "page" === d;
                       if ("scroll" === d || f) {
                           var g = [b.l, b.l.document, b.l.document.documentElement, hc(b.l)];
                           J(e, g) && b.Kb()
                       }
                       ("resize" === d || f) && b.jd();
                       d = b.time(W);
                       var h = Math.min(d - b.Lc, 5E3);
                       b.Mb += Math.round(h);
                       b.Lc = d;
                       if (b.ca && b.scroll && b.Ba) {
                           var k = b.Ba.Ia * b.Ba.lc;
                           b.W = x(function(l) {
                               var m = C({}, l)
                                 , q = b.ca[m.id]
                                 , p = Sd(l.Xa);
                               if (!q || b.Jc(m.element) || !p)
                                   return m;
                               l = b.l.Math;
                               q = l.max((b.scroll.y + b.Ba.Ia - q.y) / q.height, 0);
                               var u = p.height * p.width;
                               p = b.Cd(p);
                               m.ac = p / k;
                               m.visibility = p / u;
                               if (.9 <= m.visibility || .1 <= m.ac)
                                   m.involvedTime += h;
                               m.maxScrolled = l.round(1E4 * q) / 1E4;
                               return m
                           }, b.W)
                       }
                   })()
               }
               ;
               a.prototype.Cd = function(c) {
                   var b = c.top
                     , d = c.bottom
                     , e = c.left
                     , f = this.Ba
                     , g = f.lc;
                   f = f.Ia;
                   var h = this.l.Math;
                   c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g);
                   return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c
               }
               ;
               a.prototype.Qe = function(c) {
                   var b = x(function(d) {
                       return d.id
                   }, this.W);
                   this.W = this.W.concat(T(function(d) {
                       return !J(d.id, b)
                   }, c))
               }
               ;
               a.prototype.jd = function() {
                   var c = xi(this.l) || rd(this.l);
                   this.Ba = {
                       lc: c[0],
                       Ia: c[1]
                   }
               }
               ;
               a.prototype.Re = function() {
                   var c = this;
                   y(this.l, "p.um." + this.ub.id, function() {
                       var b = [];
                       c.Kb();
                       c.ca = L(function(d, e) {
                           var f;
                           if (c.Jc(e.element))
                               b.push(e),
                               delete d[e.id];
                           else {
                               var g = (f = {},
                               f.id = e.id,
                               f.involvedTime = Math.max(e.involvedTime, 0),
                               f.maxScrolled = e.maxScrolled || 0,
                               f.chars = e.update ? e.update("chars") || 0 : 0,
                               f);
                               e.Xa && (f = Sd(e.Xa)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0),
                               g.y = Math.max(Math.round(f.top) + c.scroll.y, 0),
                               g.width = Math.round(f.width),
                               g.height = Math.round(f.height));
                               d[e.id] = g
                           }
                           return d
                       }, {}, c.W);
                       H(function(d) {
                           d = Cf(c.l)(d, c.W);
                           c.W.splice(d, 1)
                       }, b)
                   })()
               }
               ;
               a.prototype.qb = function() {
                   this.Qc = this.Vb
               }
               ;
               a.prototype.hb = function() {
                   var c, b, d = x(v(this.ca, n), ca(this.ca));
                   return d.length && (this.Vb = hb(this.l, d),
                   this.Qc !== this.Vb) ? (c = {},
                   c.type = "publishersHeader",
                   c.data = (b = {},
                   b.articleMeta = d || [],
                   b.involvedTime = this.Mb,
                   b),
                   c) : null
               }
               ;
               a.prototype.De = function() {
                   var c = this;
                   if (this.W.length) {
                       var b = T(function(d) {
                           return !d.$c
                       }, this.W);
                       H(function(d) {
                           var e, f = L(function(g, h) {
                               d[h] && (g[h] = d[h]);
                               return g
                           }, {}, c.qd);
                           c.buffer.push((e = {},
                           e.type = "articleInfo",
                           e.stamp = f.stamp,
                           e.data = f,
                           e));
                           d.$c = !0
                       }, b);
                       b.length && rb(this.l, this.ia, "Publisher content info found: ", b)
                   }
               }
               ;
               a.prototype.Ge = function() {
                   this.vc.D(this.l, Vj, this.Ta)
               }
               ;
               a.prototype.Pe = function() {
                   this.vc.Sa(this.l, Vj, this.Ta)
               }
               ;
               a.prototype.Kb = function() {
                   this.scroll = {
                       x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                       y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                   }
               }
               ;
               return a
           }(), hd = {};
           Tj && (hd.json_ld = Tj);
           Sf && (hd.schema = Sf,
           hd.microdata = Sf);
           Uj && (hd.opengraph = Uj);
           var Bq = z("p.p", function(a, c) {
               function b(l, m, q) {
                   return e(C({}, k, {
                       M: l,
                       Fd: Hl(m)
                   }), c, q)["catch"](y(a, "s.ww.p"))
               }
               if (!Ba("querySelectorAll", a.document.querySelectorAll))
                   return I.resolve();
               var d = [new Rj(a)]
                 , e = ka(a, "p", c)
                 , f = Nb(function(l) {
                   return l.isEnabled()
               }, d);
               d = pa();
               var g = wc(a, c.id)
                 , h = g.o("pai");
               h && (g.ab("pai"),
               d.C("pai", h));
               var k = {
                   F: {},
                   G: d,
                   fe: !(f instanceof Rj)
               };
               return oa(a, c, y(a, "ps.s", function(l) {
                   if (l = n(l, "settings.publisher.schema")) {
                       l = Di(c) ? "microdata" : l;
                       var m = hd[l];
                       if (m && f) {
                           var q = O(c)
                             , p = yq.Wd(q, b, f, a);
                           m = new m(a,q);
                           (new Aq(a,m,p,q)).start();
                           rb(a, q, 'Publishers analytics schema "' + l + '"')
                       }
                   }
               }))
           })
             , Cq = function() {
               function a(c, b) {
                   this.l = c;
                   this.Xd = b
               }
               a.prototype.na = function(c) {
                   return Yh(Ib(K(this.za, this), c))
               }
               ;
               a.prototype.za = function(c, b) {
                   var d = this
                     , e = []
                     , f = this.Xd(this.l, b && b.type, c.type);
                   f && (e = Ib(function(g) {
                       return g({
                           l: d.l,
                           V: c
                       }) || []
                   }, f));
                   return e
               }
               ;
               a.prototype.Ha = function(c) {
                   return c.length
               }
               ;
               a.prototype.cd = function(c) {
                   return [c]
               }
               ;
               a.prototype.isEnabled = function() {
                   return !0
               }
               ;
               return a
           }()
             , vl = function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.buffer = [];
                   b.rd = 7500;
                   b.Bb = 3E4;
                   b.vb();
                   return b
               }
               Zc(c, a);
               c.prototype.push = function(b, d) {
                   var e = this.aa.za(b, d);
                   Va(this.buffer, e);
                   this.aa.Ha(this.buffer) > this.rd && this.flush()
               }
               ;
               c.prototype.flush = function() {
                   var b = this.buffer;
                   b.length && (this.send(b),
                   this.buffer = [])
               }
               ;
               return c
           }(Sj)
             , xl = /opera mini/i
             , Wj = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" ")
             , Cl = ["email", "tel"]
             , Fl = /ym-hide-content/
             , Gl = /ym-show-content/
             , Dl = new RegExp("(" + G("|", Wj) + ")","i")
             , Si = ["password", "passwd", "pswd"]
             , El = new RegExp("(" + G("|", Wj.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) + ")","i")
             , ya = "metrikaId_" + Math.random()
             , dc = {
               Eb: 0
           }
             , Jo = t(function() {
               var a;
               return a = {},
               a.A = 1,
               a.ABBR = 2,
               a.ACRONYM = 3,
               a.ADDRESS = 4,
               a.APPLET = 5,
               a.AREA = 6,
               a.B = 7,
               a.BASE = 8,
               a.BASEFONT = 9,
               a.BDO = 10,
               a.BIG = 11,
               a.BLOCKQUOTE = 12,
               a.BODY = 13,
               a.BR = 14,
               a.BUTTON = 15,
               a.CAPTION = 16,
               a.CENTER = 17,
               a.CITE = 18,
               a.CODE = 19,
               a.COL = 20,
               a.COLGROUP = 21,
               a.DD = 22,
               a.DEL = 23,
               a.DFN = 24,
               a.DIR = 25,
               a.DIV = 26,
               a.DL = 27,
               a.DT = 28,
               a.EM = 29,
               a.FIELDSET = 30,
               a.FONT = 31,
               a.FORM = 32,
               a.FRAME = 33,
               a.FRAMESET = 34,
               a.H1 = 35,
               a.H2 = 36,
               a.H3 = 37,
               a.H4 = 38,
               a.H5 = 39,
               a.H6 = 40,
               a.HEAD = 41,
               a.HR = 42,
               a.HTML = 43,
               a.I = 44,
               a.IFRAME = 45,
               a.IMG = 46,
               a.INPUT = 47,
               a.INS = 48,
               a.ISINDEX = 49,
               a.KBD = 50,
               a.LABEL = 51,
               a.LEGEND = 52,
               a.LI = 53,
               a.LINK = 54,
               a.MAP = 55,
               a.MENU = 56,
               a.META = 57,
               a.NOFRAMES = 58,
               a.NOSCRIPT = 59,
               a.OBJECT = 60,
               a.OL = 61,
               a.OPTGROUP = 62,
               a.OPTION = 63,
               a.P = 64,
               a.PARAM = 65,
               a.PRE = 66,
               a.Q = 67,
               a.S = 68,
               a.SAMP = 69,
               a.SCRIPT = 70,
               a.SELECT = 71,
               a.SMALL = 72,
               a.SPAN = 73,
               a.STRIKE = 74,
               a.STRONG = 75,
               a.STYLE = 76,
               a.SUB = 77,
               a.SUP = 78,
               a.TABLE = 79,
               a.TBODY = 80,
               a.TD = 81,
               a.TEXTAREA = 82,
               a.TFOOT = 83,
               a.TH = 84,
               a.THEAD = 85,
               a.TITLE = 86,
               a.TR = 87,
               a.TT = 88,
               a.U = 89,
               a.UL = 90,
               a.VAR = 91,
               a.NOINDEX = 100,
               a
           })
             , Dq = function() {
               var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
               return {
                   Af: new RegExp("(" + G("|", a) + ")","i"),
                   Uf: new RegExp("(" + G("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) + ")","i"),
                   xf: /ym-record-keys/i,
                   te: "\u2022",
                   Pf: 88
               }
           }()
             , Xi = eb(v(Dq.te, N))
             , Hc = !0
             , yf = ""
             , zf = !1
             , Af = !0
             , Bf = !1
             , Al = aa(function(a, c) {
               var b = E([a, "efv." + c.event], y);
               c.H = x(r(N, b), c.H);
               return c
           })
             , Eq = t(function(a) {
               var c = []
                 , b = []
                 , d = [];
               a.document.attachEvent && !a.opera && (c.push(Ee),
               b.push(No),
               b.push(Oo));
               a.document.addEventListener ? c.push(Vi) : (b.push(Ui),
               d.push(Vi));
               c = Z([{
                   target: a,
                   type: "window",
                   event: "beforeunload",
                   H: [A]
               }, {
                   target: a,
                   type: "window",
                   event: "unload",
                   H: [A]
               }, {
                   event: "click",
                   H: [Gc]
               }, {
                   event: "dblclick",
                   H: [Gc]
               }, {
                   event: "mousedown",
                   H: [Gc]
               }, {
                   event: "mouseup",
                   H: [Qo]
               }, {
                   event: "keydown",
                   H: [Ro]
               }, {
                   event: "keypress",
                   H: [So]
               }, {
                   event: "copy",
                   H: [Zi]
               }, {
                   event: "blur",
                   H: c
               }, {
                   event: "focusin",
                   H: b
               }, {
                   event: "focusout",
                   H: d
               }], !a.document.attachEvent || a.opera ? [{
                   target: a,
                   type: "window",
                   event: "focus",
                   H: [$g]
               }, {
                   target: a,
                   type: "window",
                   event: "blur",
                   H: [Ee]
               }] : [], a.document.addEventListener ? [{
                   event: "focus",
                   H: [Ui]
               }, {
                   event: "change",
                   H: [Wi]
               }, {
                   event: "submit",
                   H: [aj]
               }] : [{
                   type: "formInput",
                   event: "change",
                   H: [Wi]
               }, {
                   type: "form",
                   event: "submit",
                   H: [aj]
               }]);
               return Xg(a, c)
           })
             , yl = t(function(a) {
               return Z(hc(a) ? [{
                   target: a,
                   type: "document",
                   event: "mouseleave",
                   H: [To]
               }] : [])
           })
             , Fq = ["submit", "beforeunload", "unload"]
             , Gq = t(function(a, c) {
               var b = c(a);
               return L(function(d, e) {
                   d[e.type + ":" + e.event] = e.H;
                   return d
               }, {}, b)
           })
             , zl = /^\s*function submit\(\)/
             , Sg = 0
             , Ae = {
               x: 0,
               y: 0
           }
             , Rg = 0
             , ze = {
               x: 0,
               y: 0
           }
             , xe = {}
             , Xj = t(function(a) {
               var c = Z([{
                   event: "mousemove",
                   H: [tl]
               }, {
                   target: a,
                   type: "window",
                   event: "scroll",
                   H: [Ng]
               }, {
                   event: "onmousewheel"in a.document ? "mousewheel" : "wheel",
                   H: [sl]
               }, {
                   target: a,
                   type: "window",
                   event: "beforeunload",
                   H: [Qg]
               }], ij(a) ? [{
                   target: a,
                   type: "window",
                   event: "unload",
                   H: [Qg]
               }] : [], [{
                   target: a,
                   type: "window",
                   event: "resize",
                   H: [rl]
               }, {
                   event: "touchmove",
                   H: [Mg]
               }, {
                   event: "touchstart",
                   H: [Mg]
               }], a.document.addEventListener ? [{
                   event: "scroll",
                   H: [ql]
               }] : []);
               return Z(Eq(a), Xg(a, c))
           })
             , Hq = v(Xj, function(a, c, b, d) {
               return Gq(c, a)[b + ":" + d] || []
           })
             , Iq = t(function(a) {
               return Z(Fq, ["beforeunload"], ij(a) ? ["unload"] : [])
           })
             , Jq = z("wv.p", function(a, c) {
               var b;
               if (!(b = !c.zb)) {
                   var d = M(a)
                     , e = !1;
                   b = d.o("hitParam", {});
                   var f = O(c);
                   b[f] && (d = d.o("counters", {}),
                   e = !(!Pi(c.N) || d[f]));
                   b[f] = 1;
                   b = e
               }
               if (b)
                   return I.resolve(A);
               b = new Cq(a,Hq);
               return ul(a, c, b, Xj, Iq(a))
           })
             , Kq = z("p.fh", function(a, c) {
               var b, d;
               void 0 === c && (c = !0);
               var e = La(a)
                 , f = V(a)
                 , g = e.o("wasSynced")
                 , h = {
                   id: 3,
                   N: "0"
               };
               return c && g && g.time + 864E5 > f(W) ? I.resolve(g) : ka(a, "f", h)({
                   G: pa((b = {},
                   b.pv = 1,
                   b)),
                   F: (d = {},
                   d["page-url"] = P(a).href,
                   d["page-ref"] = a.document.referrer,
                   d)
               }, h).then(function(k) {
                   var l;
                   k = (l = {},
                   l.time = f(W),
                   l.params = n(k, "settings"),
                   l.bkParams = n(k, "userData"),
                   l);
                   e.C("wasSynced", k);
                   return k
               })["catch"](y(a, "f.h"))
           })
             , Lq = ["ecommerce", "user_id", "fpp"]
             , Mq = z("pa.int", function(a, c) {
               return function() {
                   var b, d, e = na(arguments), f = pl(e);
                   if (!f)
                       return null;
                   e = f.Jd;
                   var g = f.J;
                   f = f.ra;
                   if (!pb(g) && !Y(g))
                       return null;
                   var h = ka(a, "1", c)
                     , k = Mc(c).url
                     , l = n(g, "__ym.user_id")
                     , m = ca(g)
                     , q = J("__ymu", m)
                     , p = J("__ym", m) && l;
                   m = !qh(c);
                   var u = g;
                   u.__ym && (u = C({}, g),
                   u.__ym = L(function(w, B) {
                       var D = n(g, "__ym." + B);
                       D && (w[B] = D);
                       return w
                   }, {}, Lq),
                   ca(u.__ym).length || delete u.__ym,
                   m = !!ca(u).length);
                   l = qb(a, c, p ? "Set user id " + l : (q ? "User p" : "P") + "arams. Counter " + c.id, p ? void 0 : JSON.stringify(u));
                   h = h({
                       J: g,
                       G: pa((b = {},
                       b.pa = 1,
                       b.ar = 1,
                       b)),
                       F: (d = {},
                       d["page-url"] = k || P(a).href,
                       d)
                   }, c).then(m ? l : A);
                   return qc(a, "p.s", h, f, e)
               }
           })
             , Nq = z("exps.int", function(a, c) {
               return function(b, d, e) {
                   var f, g;
                   void 0 === d && (d = A);
                   if (b && 0 < b.length) {
                       var h = ka(a, "e", c)
                         , k = Mc(c).url;
                       b = h({
                           G: pa((f = {},
                           f.ex = 1,
                           f.ar = 1,
                           f)),
                           F: (g = {},
                           g["page-url"] = k || P(a).href,
                           g.exp = b,
                           g)
                       }, c);
                       return qc(a, "exps.s", b, d, e)
                   }
               }
           })
             , Oq = z("y.p", function(a, c) {
               var b = Nh(a, c);
               if (b) {
                   var d = Ed(a)
                     , e = E([a, b, c], ol);
                   Ah(a, d, function(f) {
                       f.D(["params"], e)
                   });
                   b.T.D(["params"], r(R("1"), e))
               }
           })
             , ne = z("dl.w", function(a, c, b) {
               var d = 0;
               ef(a, a[c], b) || (d = da(a, function() {
                   ne(a, c, b)
               }, 1E3, "ec.dl"));
               return function() {
                   return Pa(a, d)
               }
           })
             , Pq = z("p.e", function(a, c) {
               var b = sa(a, c);
               if (b) {
                   var d = M(a);
                   b = K(b.params, b);
                   var e = y(a, "h.ee", E([a, O(c), b], kl)), f, g = function(k) {
                       f = k;
                       k.pb.D(e)
                   };
                   if (c.bb)
                       return d.C("ecs", 0),
                       ne(a, c.bb, g);
                   var h = oa(a, c, function(k) {
                       k = n(k, "settings.ecommerce");
                       d.C("ecs", 1);
                       return k ? ne(a, k, g) : A
                   });
                   return function() {
                       h.then(function(k) {
                           k();
                           f && f.unsubscribe()
                       })
                   }
               }
           })
             , Qq = z("fid", function(a) {
               var c, b = A;
               if (!S(a.PerformanceObserver))
                   return b;
               var d = M(a);
               if (d.o("fido"))
                   return b;
               d.C("fido", !0);
               var e = new a.PerformanceObserver(y(a, "fid", function(f) {
                   f = f.getEntries()[0];
                   d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                   b()
               }));
               b = function() {
                   return e.disconnect()
               }
               ;
               try {
                   e.observe((c = {},
                   c.type = "first-input",
                   c.buffered = !0,
                   c))
               } catch (f) {}
               return b
           })
             , Rq = z("ecm.a", v("add", pd))
             , Sq = z("ecm.r", v("remove", pd))
             , Tq = z("ecm.d", v("detail", pd))
             , Uq = z("ecm.p", v("purchase", pd))
             , ig = v("form", Hb)
             , $k = v("form", jb)
             , Hg = t(function(a) {
               return G("[^\\d<>]*", a.split(""))
           })
             , Wk = t(function(a) {
               return new RegExp(Hg(a),"g")
           })
             , gl = /\S/
             , Ag = v(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], lc)
             , Yj = t(function(a) {
               a = P(a);
               a = co(a.search.substring(1));
               a["_ym_status-check"] = a["_ym_status-check"] || "";
               a._ym_lang = a._ym_lang || "ru";
               return a
           })
             , wg = r(Yj, R("_ym_status-check"), Aa)
             , Vq = r(Yj, R("_ym_lang"))
             , Yk = ["https://iframe-toloka.com/"]
             , vg = Fa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/)
             , bl = ["form", "button", "phone", "status"]
             , Zk = t(function(a, c, b) {
               b.inline ? pg(a, b) : b.resource && vg(b.resource) && (a._ym__postMessageEvent = c,
               a._ym__inpageMode = b.inpageMode,
               a._ym__initMessage = b.initMessage,
               cl(a, b.resource))
           }, function(a, c, b) {
               return b.id
           })
             , Wq = z("cs.init", function(a, c) {
               var b, d = wg(a);
               d && c.id === d && "0" === c.N && (d = (b = {},
               b.lang = Vq(a),
               b.fileId = "status",
               b.id = "" + c.id,
               b),
               da(a, E([a, d], pg), 0, "cs"))
           })
             , Zj = t(function(a) {
               return Ld(a) || !Uc(a)
           })
             , Tk = t(xg)
             , og = t(xb, kb)
             , Xq = z("phc.p", function(a, c) {
               return Zj(a) ? A : oa(a, c, function(b) {
                   var d = c.id
                     , e = oc(a, void 0, d)
                     , f = e.o("phc_settings") || "";
                   if (b = n(b, "settings.phchange")) {
                       var g = hb(a, b) || "";
                       g !== f && e.C("phc_settings", g)
                   } else
                       f && (b = og(a, f));
                   e = n(b, "clientId");
                   f = n(b, "orderId");
                   b = n(b, "phones") || [];
                   e && f && b.length && (f = {
                       Fa: "",
                       La: "",
                       bd: 0,
                       X: {},
                       $: [],
                       Ic: !1,
                       Ib: !0,
                       l: a,
                       qc: c
                   },
                   C(f, {
                       Ic: !0
                   }),
                   ng(a, d, f),
                   b = Fc(a),
                   e = yg(a, b, 1E3),
                   d = K(ng, null, a, d, f),
                   e.D(d),
                   zg(a, b))
               })
           })
             , Yq = z("phc.h", function(a, c) {
               return io(a) || Zj(a) ? null : oa(a, c, function(b) {
                   if (!n(b, "settings.phchange")) {
                       var d = oc(a, "").o("yaHidePhones");
                       d = d ? xb(a, d) : "";
                       (b = n(b, "settings.phhide") || d) && ug(a, c, b)
                   }
               })
           })
             , Zq = z("up.int", function(a, c) {
               return y(a, "up.c", function(b, d, e) {
                   var f, g = sa(a, c), h = Le(a, O(c)).warn;
                   g ? pb(b) ? (b = (f = {},
                   f.__ymu = b,
                   f),
                   (f = g.params) && f(b, d || A, e)) : h("Wrong user params") : h("No counter instance found")
               })
           })
             , $q = z("trigger.in", function(a, c) {
               c.hd && cc(a, E([a, "yacounter" + c.id + "inited"], Zn), "t.i")
           })
             , ar = z("destruct.e", function(a, c, b) {
               return function() {
                   var d = M(a)
                     , e = c.id;
                   H(function(f, g) {
                       return S(f) && y(a, "dest.fr." + g, f)()
                   }, b);
                   delete d.o("counters")[O(c)];
                   delete a["yaCounter" + e]
               }
           })
             , br = z("fip", function(a, c) {
               if (!yj(a) || Qc(a)) {
                   var b = La(a);
                   if (!b.o("fip")) {
                       var d = r(eb(r(function(e, f) {
                           return z("fip." + f, e)(a)
                       }, K(Ao, null))), Lc("-"))(c);
                       b.C("fip", d)
                   }
               }
           })
             , cr = v("9-d5ve+.r%7", N)
             , dr = z("ad", function(a, c) {
               if (!c.ua) {
                   var b = M(a);
                   if (!b.o("adBlockEnabled")) {
                       var d = function(m) {
                           J(m, ["2", "1"]) && b.C("adBlockEnabled", m)
                       }
                         , e = Lb(a)
                         , f = e.o("isad");
                       if (f)
                           d(f);
                       else {
                           var g = v("adStatus", b.C)
                             , h = function(m) {
                               m = m ? "1" : "2";
                               d(m);
                               g("complete");
                               e.C("isad", m, 1200);
                               return m
                           }
                             , k = ka(a, "adb", c);
                           if (!b.o("adStatus")) {
                               g("process");
                               var l = "metrika/a" + cr().replace(/[^a-v]+/g, "") + "t.gif";
                               Qk(a, function() {
                                   return k({}, l).then(v(!1, h))["catch"](v(!0, h))
                               })
                           }
                       }
                   }
               }
           })
             , er = z("suid.int", function(a, c) {
               return function(b, d, e) {
                   var f = sa(a, c)
                     , g = dd(a, O(c));
                   Ja(b) || qd(a, b) ? (b = lc(["__ym", "user_id", b]),
                   f.params(b, d || A, e)) : g.error("Incorrect user ID")
               }
           })
             , fr = z("guid.int", function(a, c) {
               return function(b) {
                   var d = pe(a, c);
                   b && Ke(a, b, null, d);
                   return d
               }
           })
             , gr = aa(function(a, c) {
               0 === parseFloat(n(c, "settings.c_recp")) && (a.Ub.C("ymoo" + a.ia, a.ed(Za)),
               a.Fb && a.Fb.destruct && a.Fb.destruct())
           })
             , hr = z("wsa", function(a, c) {
               var b = {
                   ia: O(c),
                   Fb: sa(a, c),
                   ed: V(a),
                   Ub: La(a)
               }
                 , d = b.ed(Za);
               if (b.Ub.Ob)
                   return !1;
               var e = b.Ub.o("ymoo" + b.ia);
               if (e && 30 > d - e)
                   return !0;
               oa(a, c, gr(b))["catch"](y(a, "d.f"));
               return !1
           })
             , ir = r(function(a) {
               a = n(a, "navigator.plugins") || [];
               return va(a) ? r(Ea, pc(Boolean), Wo(function(c, b) {
                   return c.name > b.name ? 1 : 2
               }), eb(im))(a) : ""
           }, Lc(","))
             , jr = function(a) {
               return function(c) {
                   var b = fb(c);
                   if (!b)
                       return "";
                   b = b("canvas");
                   var d = []
                     , e = a()
                     , f = e.Qd;
                   e = e.Kd;
                   try {
                       var g = fa("getContext", b);
                       d = x(r(N, g), e)
                   } catch (h) {
                       return ""
                   }
                   return (g = Nb(N, d)) ? f(c, {
                       canvas: b,
                       Dd: g
                   }) : ""
               }
           }(function() {
               return {
                   Kd: pq,
                   Qd: Jk
               }
           })
             , Ek = ["name", "lang", "localService", "voiceURI", "default"]
             , zk = t(function(a, c) {
               return oa(a, c, R("settings.form_goals"))
           }, kb)
             , kr = v(!0, jg)
             , lr = z("s.f.i", function(a, c) {
               var b = [];
               ea(a).D(a, ["click"], y(a, "s.f.c", E([a, c, b], yk)));
               ea(a).D(a, ["submit"], y(a, "s.f.e", r(R("target"), E([a, c, b], kr))));
               lg(a, c, "Form goal. Counter " + c.id + ". Init.")
           })
             , ak = A
             , mr = Vb("isp.stat", function(a, c) {
               return new I(function(b, d) {
                   if (Un(a, pj, "isp")) {
                       var e = function(f) {
                           ("1" === f ? b : d)();
                           ak();
                           f = si(pj);
                           J("isp", f.wa) && (f.wa = T(r(la("isp"), zb), f.wa),
                           f.wa.length || (ec(f.ta),
                           f.ta = null))
                       };
                       ak = ea(a).D(a, ["message"], E([a, c, e], xk));
                       da(a, e, 1500)
                   } else
                       d()
               }
               )
           })
             , nr = Vb("isp", function(a, c) {
               oa(a, c, function(b) {
                   var d = Nb(function(h) {
                       return n(b, "settings." + h)
                   }, ["rt", "mf"]);
                   if (d && ae(a)) {
                       var e = ih(b) && !Gd(a)
                         , f = O(c)
                         , g = Qh(c);
                       g[f] = {
                           rb: d,
                           status: e ? 3 : 4
                       };
                       if (!e)
                           return d = wk(a, c, d),
                           mr(a, d).then(function() {
                               g[f].status = 1
                           })["catch"](function() {
                               g[f].status = 2
                           })
                   }
               })["catch"](y(a, "l.isp"))
           })
             , or = /[^\d.,]/g
             , pr = /[.,]$/
             , uk = z("ep.pp", function(a, c) {
               if (!c)
                   return 0;
               a: {
                   var b = c.replace(or, "").replace(pr, "");
                   var d = "0" === b[b.length - 1];
                   for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                       var f = b[e - 1];
                       if (J(f, [",", "."])) {
                           d = f;
                           break a
                       }
                   }
                   d = ""
               }
               b = d ? c.split(d) : [c];
               d = d ? b[1] : "00";
               b = parseFloat(vb(b[0]) + "." + vb(d));
               d = Math.pow(10, 8) - .01;
               a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d),
               b = a.Math.max(b, 0));
               return b
           })
             , qr = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]]
             , rr = t(function(a) {
               return new RegExp(a.join("|"),"i")
           })
             , sr = z("ep.cp", function(a) {
               if (!a)
                   return "643";
               var c = Bg(a);
               return (a = Nb(function(b) {
                   return rr(b[0]).test(c)
               }, qr)) ? a[1] : "643"
           })
             , tr = t(function() {
               function a() {
                   var k = h + "0"
                     , l = h + "1";
                   f[k] ? f[l] ? (h = h.slice(0, -1),
                   --g) : (e[l] = b(8),
                   f[l] = 1) : (e[k] = b(8),
                   f[k] = 1)
               }
               function c() {
                   var k = h + "1";
                   f[h + "0"] ? f[k] ? (h = h.slice(0, -1),
                   --g) : (h += "1",
                   f[h] = 1) : (h += "0",
                   f[h] = 1)
               }
               function b(k) {
                   void 0 === k && (k = 1);
                   var l = d.slice(g, g + k);
                   g += k;
                   return l
               }
               for (var d = dg("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""), e = {}, f = {}, g = 1, h = ""; g < d.length - 1; )
                   ("0" === b() ? c : a)();
               return e
           })
             , rk = z("ep.dec", function(a, c) {
               if (!c || Ld(a))
                   return [];
               var b = dg(c)
                 , d = b[1]
                 , e = b[2]
                 , f = b.slice(3);
               if (2 !== Df(b[0]))
                   return [];
               b = tr();
               f = f.join("");
               e = Df(d + e);
               var g = "";
               d = "";
               for (var h = 0; d.length < e && f[h]; )
                   g += f[h],
                   b[g] && (d += String.fromCharCode(Df(b[g])),
                   g = ""),
                   h += 1;
               b = "";
               for (f = 0; f < d.length; )
                   e = d.charCodeAt(f),
                   128 > e ? (b += String.fromCharCode(e),
                   f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1),
                   b += String.fromCharCode((e & 31) << 6 | g & 63),
                   f += 2) : (g = d.charCodeAt(f + 1),
                   b += String.fromCharCode((e & 15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63),
                   f += 3);
               d = xb(a, b);
               return Y(d) ? d : []
           })
             , tk = z("ep.ent", function(a, c, b) {
               a = "" + Ua(a, 10, 99);
               b = "" + 100 * c + b + a;
               if (16 < va(b))
                   return "";
               b = fg("0", 16, b);
               c = b.slice(0, 8);
               b = b.slice(-8);
               c = (+c ^ 92844).toString(35);
               b = (+b ^ 92844).toString(35);
               return "" + c + "z" + b
           })
             , bk = r(cg, sr)
             , ck = z("ep.ctp", function(a, c, b, d) {
               var e = bk(a, b)
                 , f = bg(a, d);
               ag(a, c, e, f);
               Ba("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                   var g = bk(a, b)
                     , h = bg(a, d);
                   if (e !== g || f !== h)
                       e = g,
                       f = h,
                       ag(a, c, e, f)
               }
               )).observe(a.document.body, {
                   attributes: !0,
                   childList: !0,
                   subtree: !0,
                   characterData: !0
               })
           })
             , ur = z("ep.chp", function(a, c, b, d, e) {
               b && se(a, c);
               return d || e ? ea(a).D(a.document, ["click"], y(a, "ep.chp.cl", E([a, c, d, e], sk))) : A
           })
             , vr = z("ep.i", function(a, c) {
               return Uc(a) ? qk(a, c).then(function(b) {
                   var d = b.Md
                     , e = d[0]
                     , f = d[1]
                     , g = d[2]
                     , h = d[3]
                     , k = d[4]
                     , l = d[5]
                     , m = d[6]
                     , q = d[7]
                     , p = d[8]
                     , u = d[9]
                     , w = d[10]
                     , B = d[11]
                     , D = d[12]
                     , Q = d[13]
                     , ha = d[14]
                     , Ia = d[15];
                   if (!b.isEnabled)
                       return I.resolve(A);
                   var Fb = id(a, e)
                     , xc = id(a, h)
                     , Hf = id(a, m)
                     , Yb = id(a, p)
                     , Zb = "" + e + f + g === "" + h + k + l;
                   return new I(function($b, yc) {
                       nd(a)(yb(yc, function() {
                           Fb && ck(a, c, f, g, w, B, D);
                           xc && !Zb && ck(a, c, k, l, Q, ha, Ia);
                           $b(ur(a, c, Hf || Yb, q, u))
                       }))
                   }
                   )
               }) : I.resolve(A)
           })
             , wr = /[\*\.\?\(\)]/g
             , xr = t(function(a, c, b) {
               try {
                   var d = b.replace("\\s", " ").replace(wr, "");
                   Le(a, "").warn('Function "' + d + '" has been overriden, this may cause issues with Metrika counter')
               } catch (e) {}
           }, kb)
             , yr = z("r.nn", function(a) {
               rh(a).isEnabled && ef(a, sf, function(c) {
                   c.pb.D(function(b) {
                       xr(a, b[1], b[0]);
                       sf.splice(100)
                   })
               })
           })
             , zr = z("lt.p", Vb("lt.p", function(a) {
               var c;
               if (Ba("PerformanceObserver", a.PerformanceObserver)) {
                   var b = 0
                     , d = new a.PerformanceObserver(y(a, "lt.o", function(e) {
                       e && e.getEntries && (e = e.getEntries(),
                       b = L(function(f, g) {
                           return f + g.duration
                       }, b, e),
                       Wb(a).C("lt", b))
                   }));
                   try {
                       d.observe((c = {},
                       c.type = "longtask",
                       c.buffered = !0,
                       c))
                   } catch (e) {
                       return A
                   }
                   return function() {
                       return d.disconnect()
                   }
               }
               return A
           }));
           "function" == typeof Promise && Promise.resolve();
           var dk = z("fbq.o", function(a, c, b) {
               var d = n(a, "fbq");
               if (d && d.callMethod) {
                   var e = function() {
                       var g = na(arguments)
                         , h = d.apply(void 0, g);
                       c(g);
                       return h
                   };
                   C(e, d);
                   b && H(c, b);
                   a.fbq = e
               } else
                   var f = da(a, E([a, c, Z(Ea(d && d.queue))], dk), 1E3, "fbq.d");
               return K(Pa, null, a, f)
           }), zc, nb, Ac, Tf = (zc = {},
           zc.add_to_wishlist = "add-to-wishlist",
           zc.begin_checkout = "begin-checkout",
           zc.generate_lead = "submit-lead",
           zc.add_payment_info = "add-payment-info",
           zc), Uf = (nb = {},
           nb.AddToCart = "add-to-cart",
           nb.Lead = "submit-lead",
           nb.InitiateCheckout = "begin-checkout",
           nb.Purchase = "purchase",
           nb.CompleteRegistration = "register",
           nb.Contact = "submit-contact",
           nb.AddPaymentInfo = "add-payment-info",
           nb.AddToWishlist = "add-to-wishlist",
           nb.Subscribe = "subscribe",
           nb), ok = (Ac = {},
           Ac["1"] = Tf,
           Ac["2"] = Tf,
           Ac["3"] = Tf,
           Ac["0"] = Uf,
           Ac), pk = [Uf.AddToCart, Uf.Purchase], Ar = aa(function(a, c) {
               var b = n(c, "ecommerce")
                 , d = n(c, "event") || "";
               if (!(b = b && d && {
                   version: "3",
                   cb: d
               }))
                   a: {
                       if (Y(c) || va(c))
                           if (b = na(c),
                           d = b[1],
                           "event" === b[0] && d) {
                               b = {
                                   version: "2",
                                   cb: d
                               };
                               break a
                           }
                       b = void 0
                   }
               b || (b = (b = n(c, "ecommerce")) && {
                   version: "1",
                   cb: G(",", ca(b))
               });
               b && a(b)
           }), Br = z("ag.e", function(a, c) {
               var b = []
                 , d = y(a, "ag.s", E([Ka, b], H));
               "0" === c.N && oa(a, c, function(e) {
                   if (n(e, "settings.auto_goals") && sa(a, c) && (e = ld(a, c, "autogoal"))) {
                       e = E([e, c.bb], nk);
                       var f = Ar(e);
                       e = E([a, e], mk);
                       b.push(dk(a, e));
                       b.push(ne(a, "dataLayer", function(g) {
                           g.pb.D(f)
                       }))
                   }
               });
               return d
           }), ek = t(function(a) {
               return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
           }), Cr = z("fpm", function(a, c) {
               if (!qj(a))
                   return A;
               var b = O(c);
               if (!ek(a))
                   return rb(a, b, "Not supported"),
                   A;
               var d = sa(a, c);
               return d ? function(e) {
                   return (new I(function(f, g) {
                       return pb(e) ? ca(e).length ? f(Xf(a, e).then(function(h) {
                           var k, l;
                           h && h.length && d.params((k = {},
                           k.__ym = (l = {},
                           l.fpp = h,
                           l),
                           k))
                       }, A)) : g(Wa("fpm.l")) : g(Wa("fpm.o"))
                   }
                   ))["catch"](y(a, "fpm.en"))
               }
               : A
           }), Dr = z("p.sci", function(a, c) {
               var b = M(a);
               return b.o("scip") ? I.resolve() : oa(a, c, N).then(function(d) {
                   d = n(d, "settings.ins");
                   return !b.o("scip") && d ? Vf(a, c, b) : null
               }, y(a, "ins.cs"))
           }), Er = Fa(/[a-z\u0430-\u044f,.]/gi), Fr = z("ice", function(a, c, b) {
               var d = sa(a, c);
               if (d) {
                   var e = n(b, "target");
                   if (e && (c = n(e, "value"),
                   (c = db(c)) && !(100 <= va(c)))) {
                       b = vb(c);
                       var f = 0 < c.indexOf("@")
                         , g = "tel" === n(e, "type") || !f && va(b);
                       if (f || g) {
                           if (g) {
                               if (Er(c))
                                   return;
                               g = c[0];
                               var h = b[0];
                               if (g !== h && "+" !== g)
                                   return;
                               var k = c[1];
                               if ("+" === g && k !== h)
                                   return;
                               c = c[va(c) - 1];
                               g = b[va(b) - 1];
                               if (c !== g)
                                   return;
                               c = b
                           }
                           b = f ? 5 : 11;
                           g = f ? 100 : 16;
                           va(c) < b || va(c) > g || Yf(a, c).then(function(l) {
                               var m, q, p, u = jf(a, e);
                               d.params((m = {},
                               m.__ym = (q = {},
                               q.fi = Oh((p = {},
                               p.a = f ? 1 : 0,
                               p.b = u,
                               p.c = l,
                               p)).na(),
                               q),
                               m))
                           }, y(a, "ice.s"))
                       }
                   }
               }
           }), Gr = ["text", "email", "tel"], Hr = ["cc-", "name", "shipping"], Ir = z("icei", function(a, c) {
               return Uc(a) && ek(a) && nd(a)(yb(A, E([a, c, function(b) {
                   var d = n(b, "settings.cf");
                   b = Pj(a) || n(b, "settings.eu");
                   if (d && !b) {
                       var e = ea(a);
                       d = jb("input", a.document.body);
                       H(function(f) {
                           Ge(a, f) || !J(f.type, Gr) || Oa(N, x(v(f.autocomplete, ac), Hr)) || e.D(f, ["blur"], E([a, c], Fr))
                       }, Vc(d))
                   }
               }
               ], oa)))
           }), Jr = Vb("gic", Ir), kc = M(window);
           kc.oa("hitParam", {});
           kc.oa("lastReferrer", window.location.href);
           kc.oa("getCounters", fq(window));
           Oe.push(Kq);
           (function() {
               var a, c, b, d = Ab([Tb]);
               C(ia, (a = {},
               a.s = d,
               a.S = d,
               a.u = vc,
               a));
               C(ja, (c = {},
               c.s = ob,
               c.S = Ma,
               c.u = ob,
               c));
               C(ta, (b = {},
               b.s = [],
               b.u = [],
               b.S = [Qb(["v", "hid", "u", "vf", "rn"])],
               b));
               Of.push(z("s", Kl))
           }
           )();
           ja["8"] = ob;
           ia["8"] = [mi];
           Of.push(function(a, c) {
               return oa(a, c, function(b) {
                   var d, e = n(b, "settings.sbp");
                   return e && gh(a, b, {
                       sa: c,
                       rb: "8",
                       data: C({}, e, (d = {},
                       d.c = c.id,
                       d)),
                       Rb: "cs"
                   })
               })
           });
           (function() {
               var a = [];
               a.push(Qb(Qj));
               a.push(Jd());
               ta.p = a;
               ja.p = Te;
               ia.p = Ab([0, Tb]);
               Nf.push(Bq)
           }
           )();
           ta["4"] = [Qb(Qj)];
           ja["4"] = Te;
           ia["4"] = Ab([0, Tb, Tc]);
           Nf.push(Jq);
           var fk = function() {
               return function(a, c, b, d) {
                   var e = this;
                   return y(window, "c.i", function() {
                       (!window || isNaN(a) && !a) && zi();
                       var f = window
                         , g = go(a, nj, c, b, d);
                       if (!window["disableYaCounter" + g.id]) {
                           var h = O(g);
                           g.id || rb(f, h, "Invalid Metrika id: " + g.id);
                           var k = kc.o("counters", {})
                             , l = []
                             , m = [cj, $d, bj];
                           m.unshift(Fo);
                           var q = function(D, Q) {
                               D && (S(D) ? l.push(D) : Q && l.push(D[Q]))
                           }
                             , p = function(D, Q) {
                               var ha = $d(f, g, "", D)(f, g);
                               ha && (S(ha.then) ? ha.then(function(Ia) {
                                   return q(Ia, Q)
                               }) : q(ha, Q));
                               return ha
                           }
                             , u = x(function(D) {
                               return v(D, p)
                           }, Nf)
                             , w = function(D, Q, ha) {
                               e[Q] = Uo(f, g, ha || m, Q, D)
                           };
                           if (k[h])
                               return rb(f, h, "Duplicate counter " + h + " initialization"),
                               k[h];
                           k[h] = e;
                           kc.C("counters", k);
                           kc.oa("counter", e);
                           var B = gq(window, g);
                           l.push(B);
                           Pj(window);
                           hr(window, g) && delete k[h];
                           p(dr);
                           br(f, [jr, ir, Nk, pm, Fk, gm, oq, lm, Ck, Ak, Hk]);
                           u.push(v(Mp, p));
                           u.push(v(Dr, p));
                           p(dq);
                           u.push(v(Rk, p));
                           u.push(v(Jr, p));
                           p(Xq);
                           p(Yq);
                           w(eq(f, g), "hit");
                           w(Mq(f, g), "params");
                           h = p(hq, ib({
                               unsubscribe: 1
                           }));
                           e.trackHash = $d(f, g, "", n(h, ib({
                               Me: 1
                           })));
                           w(ld(f, g), "reachGoal");
                           w(Nq(f, g), "experiments");
                           p($q);
                           l.push(Br(f, g));
                           h = p(kq, ib({
                               Hb: 1
                           }));
                           w(n(h, ib({
                               qe: 1
                           })), "notBounce");
                           k = p(Cr);
                           w(k, "firstPartyParams");
                           w(E([f, g], jk), "firstPartyParamsHashed");
                           w(n(h, ib({
                               Ua: 1
                           })), "accurateTrackBounce");
                           p(Oq);
                           h = p(nq, ib({
                               Hb: 1
                           }));
                           w(n(h, ib({
                               Pd: 1
                           })), "extLink");
                           w(n(h, ib({
                               Ad: 1
                           })), "addFileExtension");
                           w(n(h, ib({
                               file: 1
                           })), "file");
                           w(n(h, ib({
                               wb: 1
                           })), "trackLinks");
                           l.push(Pq(f, g));
                           l.push(Qq(f));
                           w(Rq(f, g), "ecommerceAdd");
                           w(Sq(f, g), "ecommerceRemove");
                           w(Tq(f, g), "ecommerceDetail");
                           w(Uq(f, g), "ecommercePurchase");
                           h = p(Zq);
                           w(h || A, "userParams");
                           w(ar(f, g, l), "destruct", [cj, bj]);
                           p(Fp);
                           h = p(er);
                           w(h || A, "setUserID");
                           e.getClientID = p(fr) || A;
                           p(qq);
                           w(tq(f, g), "clickmap");
                           (h = p(vr)) && h.then(fa("push", l));
                           p(sq);
                           w(uq(f, g), "enableAll");
                           p(lr);
                           p(nr);
                           p(vq);
                           p(wq);
                           p(zr);
                           u.push(v(Wq, p));
                           (w = p(xq)) && w.then(fa("push", l));
                           cc(f, E([f, u, function(D) {
                               p(D)
                           }
                           , 1, "a.i"], vn));
                           yr(f);
                           H(function(D) {
                               return p(D)
                           }, Of)
                       }
                   })()
               }
           }();
           (function(a) {
               var c = M(a);
               c.o("i") || (c.C("i", !0),
               ea(a).D(a, ["message"], v(a, Xk)))
           }
           )(window);
           if (window.Ya && fk) {
               var gk = ra.Db;
               window.Ya[gk] = fk;
               lq(window);
               var hk = window.Ya[gk];
               hk.informer = em(window);
               hk.counters = kc.o("getCounters")
           }
       }
       )()
   } catch (Vf) {}
   ;
}
).call(this)
