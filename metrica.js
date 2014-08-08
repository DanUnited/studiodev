(function (f, d, ga) {
    function E(a, b) {
        return function () {
            try {
                return a.apply(this, arguments)
            } catch (c) {
                ("string" != typeof c.message || -1 == c.message.indexOf("NPObject") && -1 == c.message.indexOf("Too much time spent in unload handler")) && qa(c, b)
            }
        }
    }

    function qa(a, b) {
        if (0.01 > Math.random()) {
            var c = ["cp: " + b, a.name + ": " + a.message, "debug: " + Ba, "code: " + Oa, "stack: " + a.stack];
            (new Image).src = "//an.yandex.ru/jserr/101500?cnt-class=100&errmsg=" + encodeURIComponent(c.join("; ").replace(/\r?\n/g, "\\n"))
        }
    }

    function O(a, b, c) {
        return f.setTimeout(E(a,
            c || "setTimeout"), b)
    }

    function B() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, d = c; d--;)a[b[d]] = "";
        try {
            for (var g = f.location, d = c; d--;) {
                var h = b[d];
                a[h] = "" + g[h]
            }
        } catch (l) {
            D && (a = D)
        }
        return a
    }

    function nb(a) {
        return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }

    function Ca(a) {
        return-1 !== ("" + f.navigator.userAgent).toLowerCase().search(a)
    }

    function sa(a) {
        try {
            delete f[a]
        } catch (b) {
            f[a] = ga
        }
    }

    function ta(a) {
        var b = d.createElement("script");
        b.type = "text/javascript";
        b.async = !0;
        b.src = a;
        try {
            var c = d.getElementsByTagName("html")[0];
            d.getElementsByTagName("head")[0] || c.appendChild(d.createElement("head"));
            var f = d.getElementsByTagName("head")[0];
            f.insertBefore(b, f.firstChild)
        } catch (g) {
        }
    }

    function ha() {
        if (top != f && parent == top && f.postMessage && !Ya.Metrika_visorPlayerOn) {
            Ya.Metrika_visorPlayerOn = !0;
            var a = d.createElement("div");
            a.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
            var b = a.firstChild;
            O(function () {
                var c = d.body || d.documentElement;
                a.webkitCreateShadowRoot && (c.appendChild(a), c = a.webkitCreateShadowRoot(), Ya.Metrika_shadowAppRoot = c);
                c.appendChild(b);
                try {
                    var v = b.contentWindow.document
                } catch (g) {
                }
                v && (c = Math.random(), f[c] = function (a, b, c, g, d) {
                    try {
                        c.postMessage && (a.onmessage = function (c) {
                            c = c || a.event;
                            try {
                                var f = JSON.parse(c.data)
                            } catch (v) {
                                return
                            }
                            if (/(^|\.)yandex\.(ru|com|ua|kz|by|com\.tr)(:\d{4})?$/.test(c.origin) && f && "script" == f.name && f.data) {
                                c = g.getElementsByTagName("head")[0];
                                var h = g.createElement("base");
                                h.href = f.data;
                                c.appendChild(h);
                                h = g.createElement("script");
                                h.src = f.data;
                                c.appendChild(h);
                                -1 < d.userAgent.indexOf("Firefox/3.6.") && b.removeEventListener("message", a.onmessage, !1);
                                a.onmessage = null
                            }
                        }, -1 < d.userAgent.indexOf("Firefox/3.6.") && b.addEventListener("message", a.onmessage, !1), c.postMessage('{"name":"ping"}', "*"))
                    } catch (f) {
                    }
                }, v.open(), v.write('<!doctype html><html><head><meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7,IE=edge" /></head><body><script type="text/javascript">eval("(" + Function.prototype.toString.call(parent[' +
                    c + ']) + ")")(window, parent, top, document, navigator);\x3c/script></body></html>'), v.close())
            }, 500)
        }
    }

    function Xa(a, b, c, v, g, ra) {
        function mb(a) {
            var e = (new Date).getTime();
            a && e < a && (Za += a - e + r);
            O(function () {
                mb(e)
            }, r, "timeCorrector")
        }

        function Pa() {
            var a = (new Date).getTime() + Za;
            a < $a && (a = $a + r / 2);
            return $a = a
        }

        function s() {
            return Math.round((Pa() - Ja) / M)
        }

        function p(a, e) {
            e = Math.max(0, Math.min(e, 65535));
            l.mergeArrays(a, [e >> 8, e & 255])
        }

        function y(a, e) {
            l.mergeArrays(a, [e & 255])
        }

        function n(a, e) {
            for (e = Math.max(0, e | 0); 127 <
                e;)l.mergeArrays(a, [e & 127 | 128]), e >>= 7;
            l.mergeArrays(a, [e])
        }

        function E(a, e) {
            255 < e.length && (e = e.substr(0, 255));
            l.mergeArrays(a, [e.length]);
            for (var b = 0; b < e.length; b++)p(a, e.charCodeAt(b))
        }

        function D(a, e) {
            n(a, e.length);
            for (var b = 0; b < e.length; b++)n(a, e.charCodeAt(b))
        }

        function A(a, e, b, c, k, t) {
            for (; b && (!b.offsetWidth || !b.offsetHeight);)b = m.getElementParent(b);
            if (!b)return null;
            var w = b[F];
            if (!w || 0 > w)return null;
            var g = {mousemove: tb, click: sa, dblclick: ta, mousedown: ub, mouseup: qa, touch: vb}[e];
            if (!g)return null;
            var d = m.getElementXY(b);
            b = [];
            y(b, g);
            n(b, a);
            n(b, w);
            n(b, Math.max(0, c[0] - d[0]));
            n(b, Math.max(0, c[1] - d[1]));
            /^mouse(up|down)|click$/.test(e) && (a = k || t, y(b, 2 > a ? ha : a == (k ? 2 : 4) ? Va : la));
            return b
        }

        function L(a, e, b, c) {
            e = e[F];
            if (!e || 0 > e)return null;
            var k = [];
            y(k, Oa);
            n(k, a);
            n(k, e);
            n(k, b[0]);
            n(k, b[1]);
            y(k, 0);
            y(k, 0);
            y(k, c);
            return k
        }

        function J(a, e) {
            var b = [];
            y(b, wb);
            n(b, a);
            n(b, e[0]);
            n(b, e[1]);
            return b
        }

        function K(a, e, b) {
            var k = [];
            b = b[F];
            if (!b || 0 > b)return null;
            y(k, xb);
            n(k, a);
            n(k, e[0]);
            n(k, e[1]);
            n(k, b);
            return k
        }

        function U(a, e, b) {
            var k = [];
            y(k, La);
            n(k, a);
            n(k, e[0]);
            n(k, e[1]);
            n(k, b[0]);
            n(k, b[1]);
            return k
        }

        function aa(a, e, b, k) {
            var c = [];
            y(c, R);
            n(c, a);
            p(c, e);
            y(c, b);
            a = k[F];
            if (!a || 0 > a)a = 0;
            n(c, a);
            return c
        }

        function ea(a, e) {
            var b, k;
            0 == e.length ? k = b = "" : 100 >= e.length ? (b = e, k = "") : 200 >= e.length ? (b = e.substr(0, 100), k = e.substr(100)) : (b = e.substr(0, 97), k = e.substr(e.length - 97));
            var c = [];
            y(c, Na);
            n(c, a);
            D(c, b);
            D(c, k);
            return c
        }

        function X(a) {
            var e = [];
            y(e, Ka);
            n(e, a);
            return e
        }

        function ia(a) {
            var e = [];
            y(e, yb);
            n(e, a);
            return e
        }

        function ga(a) {
            var e = [];
            y(e, C);
            n(e, a);
            return e
        }

        function ka(a, e) {
            var b = [];
            y(b, zb);
            n(b, a);
            n(b, e[F]);
            return b
        }

        function Z(a, e) {
            var b = [];
            y(b, Ca);
            n(b, a);
            n(b, e[F]);
            return b
        }

        function $(a, e, b) {
            var k = [];
            y(k, Ha);
            n(k, a);
            n(k, e[F]);
            E(k, String(b));
            return k
        }

        function ma(a) {
            var e = a[F];
            if (!e || 0 > e || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || m.classNameExists(a.form, "-metrika-noform"))return null;
            var b = m.getFormNumber(a.form);
            if (0 > b)return null;
            var k;
            k = "INPUT" == a.nodeName ? {text: 0, color: 0, date: 0, datetime: 0, "datetime-local": 0, email: 0,
                number: 0, range: 0, search: 0, tel: 0, time: 0, url: 0, month: 0, week: 0, password: 2, radio: 3, checkbox: 4, file: 6, image: 7}[a.type] : {SELECT: 1, TEXTAREA: 5}[a.nodeName];
            if ("number" != typeof k)return null;
            for (var c = -1, t = a.form.elements, w = t.length, g = 0, d = 0; g < w; g++)if (t[g].name == a.name) {
                if (t[g] == a) {
                    c = d;
                    break
                }
                d++
            }
            if (0 > c)return null;
            t = [];
            y(t, H);
            n(t, e);
            n(t, b);
            n(t, k);
            D(t, a.name || "");
            n(t, c);
            return t
        }

        function xa(a, e) {
            var b = m.getFormNumber(e);
            if (0 > b)return null;
            for (var k = e.elements, c = k.length, t = [], w = 0; w < c; w++)if (!m.isEmptyField(k[w])) {
                var g =
                    k[w][F];
                g && 0 < g && l.mergeArrays(t, [g])
            }
            k = [];
            y(k, q);
            n(k, a);
            n(k, b);
            n(k, t.length);
            for (b = 0; b < t.length; b++)n(k, t[b]);
            return k
        }

        function za() {
            var a = [];
            y(a, Ab);
            return a
        }

        function z(a, e, b) {
            a = a.apply(f, e);
            S.append(a, b)
        }

        function G(a) {
            if (a[F])a:{
                var e = s(), b = a[F];
                if (0 < b) {
                    var k = [];
                    a = m.getElementRegion(a);
                    var c = Qa[b], t = a[0] + "x" + a[1], w = a[2] + "x" + a[3];
                    t != c.pos && (c.pos = t, y(k, ja), n(k, e), n(k, b), n(k, a[0]), n(k, a[1]));
                    w != c.size && (c.size = w, y(k, V), n(k, e), n(k, b), n(k, a[2]), n(k, a[3]));
                    if (k.length) {
                        a = k;
                        break a
                    }
                }
                a = null
            } else {
                (b = m.getElementParent(a)) &&
                G(b);
                a[F] = ab;
                Qa[ab] = {};
                ab++;
                if (a.nodeName)if (b = +a[F], !isFinite(b) || 0 >= b)e = null; else {
                    var k = Xa, c = 0, g = m.getElementParent(a), t = g && g[F] ? g[F] : 0;
                    0 > t && (t = 0);
                    var w = a.nodeName.toUpperCase(), d = ya[w];
                    d || (k |= Aa);
                    var f = m.getElementNeighborPosition(a);
                    f || (k |= Wa);
                    var v = m.getElementRegion(a);
                    (g = g ? m.getElementRegion(g) : null) && v[0] == g[0] && v[1] == g[1] && v[2] == g[2] && v[3] == g[3] && (k |= Ma);
                    Qa[b].pos = v[0] + "x" + v[1];
                    Qa[b].size = v[2] + "x" + v[3];
                    a.id && "string" == typeof a.id && (k |= ob);
                    (g = m.calcTextChecksum(a)) && (k |= Ba);
                    var r = m.calcAttribChecksum(a);
                    r && (c |= lb);
                    var x;
                    b:{
                        x = m.getElementChildren(m.getElementParent(a), a.tagName);
                        for (var h = 0; h < x.length; h++)if ((!x[h].id || "string" != typeof x[h].id) && m.calcAttribChecksum(x[h]) == r && m.calcTextChecksum(x[h]) == g) {
                            x = !0;
                            break b
                        }
                        x = !1
                    }
                    x && (k |= fa, e = m.calcChildrenChecksum(a));
                    x = [];
                    y(x, Bb);
                    n(x, b);
                    y(x, k);
                    n(x, t);
                    d ? y(x, d) : E(x, w);
                    f && n(x, f);
                    k & Ma || (n(x, v[0]), n(x, v[1]), n(x, v[2]), n(x, v[3]));
                    k & ob && E(x, a.id);
                    g && p(x, g);
                    k & fa && p(x, e);
                    y(x, c);
                    r && p(x, r);
                    e = x
                } else a[F] = -1, e = null;
                S.append(e, void 0);
                a = ma(a)
            }
            S.append(a, void 0)
        }

        function ba(a) {
            var e =
                I.getTarget(a);
            if (e && "SCROLLBAR" != e.nodeName) {
                if (e && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(e.tagName))if (e[F])G(e); else {
                    var b = e.form;
                    if (b)for (var b = b.elements, k = b.length, c = 0; c < k; c++)/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[c].tagName) && !b[c][F] && G(b[c]); else G(e)
                } else G(e);
                z(A, [s(), a.type, e, I.getPos(a), a.which, a.button])
            }
        }

        function W(a) {
            ba(a);
            var e, b;
            f.getSelection ? (a = f.getSelection(), e = a.toString(), b = a.anchorNode) : d.selection && d.selection.createRange && (a = d.selection.createRange(), e = a.text, b = a.parentElement());
            if ("string" == typeof e) {
                for (; b && 1 != b.nodeType;)b = b.parentNode;
                b && "INPUT" == b.tagName && "password" == b.type || b && (/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(b.className) || m.getElementsByClassName("-metrika-nokeys", b).length) || e == bb || (bb = e, z(ea, [s(), e]))
            }
        }

        function ua(a) {
            var e = Pa(), b = e - pb;
            if (!(b < P)) {
                var k = I.getPos(a), c = cb[0] - k[0], t = cb[1] - k[1], c = c * c + t * t;
                0 >= c || 16 > c && 100 > b || 20 > b && 256 > c || (pb = e, cb = k, ba(a))
            }
        }

        function ca() {
            var a = m.getDocumentScroll(), e = Pa();
            e - qb < P || 10 > Math.abs(a[0] - db[0]) && 10 > Math.abs(a[1] - db[1]) ||
            (qb = e, db = a, z(J, [s(), a]))
        }

        function Da(a) {
            a = I.getTarget(a);
            var e = Math.random(), b = [a.scrollLeft, a.scrollTop];
            if (a.localId) {
                if (e = eb[a.localId], !e || 10 > Math.abs(b[0] - e[0]) && 10 > Math.abs(b[1] - e[1]))return
            } else {
                for (; eb[e];)e = Math.random();
                a.localId = e
            }
            eb[a.localId] = b;
            a !== d && (G(a), z(K, [s(), b, a]))
        }

        function va() {
            z(U, [s(), m.getViewportSize(), m.getDocumentSize()])
        }

        function u() {
            z(za, [], !0)
        }

        function wa(a) {
            return(a.shiftKey ? rb : 0) | (a.ctrlKey ? fb : 0) | (a.altKey ? sb : 0) | (a.metaKey ? Ia : 0) | (a.ctrlKey || a.altKey ? Ra : 0)
        }

        function na(a, e, b) {
            a = I.getTarget(a);
            "INPUT" == a.tagName && "password" == a.type || /(?:^|\s)-metrika-nokeys(?:\s|$)/.test(a.className) || (G(a), z(aa, [s(), e, b, a]))
        }

        function oa(a) {
            var e = a.keyCode, b = wa(a);
            if ({3: 1, 8: 1, 9: 1, 13: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 27: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 45: 1, 46: 1, 91: 1, 92: 1, 93: 1, 106: 1, 110: 1, 111: 1, 144: 1, 145: 1}[e] || 112 <= e && 123 >= e || 96 <= e && 105 >= e || b & Ra)19 == e && (b & ~Ra) == fb && (e = 144), na(a, e, b | Ra), gb = !1, O(function () {
                gb = !0
            }, 1), 67 == e && b & fb && !(b & sb || b & rb) && Y()
        }

        function pa(a) {
            gb && !hb && 0 !== a.which &&
            (na(a, a.charCode || a.keyCode, wa(a)), hb = !0, O(function () {
                hb = !1
            }, 1))
        }

        function Y() {
            ib || (ib = !0, bb && z(X, [s()]), O(function () {
                ib = !1
            }, 1))
        }

        function N() {
            Ea || (Ea = !0, z(ia, [s()]))
        }

        function T() {
            Ea && (Ea = !1, z(ga, [s()]))
        }

        function da(a) {
            (!Ea || a && !a.fromElement) && N()
        }

        function Fa(a) {
            a && !a.toElement && T()
        }

        function Q(a) {
            if ((a = I.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[F])G(a); else {
                    var e = a.form;
                    if (e)for (var e = e.elements, b = e.length, k = 0; k < b; k++)/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(e[k].tagName) && !e[k][F] && G(e[k]); else G(a)
                }
                z(ka, [s(), a])
            }
        }

        function e(a) {
            (a = I.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (G(a), z(Z, [s(), a]))
        }

        function k(a) {
            a = I.getTarget(a);
            if (!("INPUT" == a.tagName && "password" == a.type || a && /(?:^|\s)-metrika-nokeys(?:\s|$)/.test(a.className)) && a && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var e = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value;
                G(a);
                z($, [s(), a, e])
            }
        }

        function t(a) {
            a = I.getTarget(a);
            if (!m.classNameExists(a, "-metrika-noform") && "FORM" == a.nodeName) {
                for (var e =
                    a.elements, b = 0; b < e.length; b++)m.isEmptyField(e[b]) || G(e[b]);
                z(xa, [s(), a], !0)
            }
        }

        function w(a) {
            ca();
            if (a.touches && a.touches.length) {
                var e = I.getTarget(a);
                if (e) {
                    G(e);
                    for (var b = 0; b < a.touches.length; b++)z(A, [s(), "touch", e, [a.touches[b].pageX, a.touches[b].pageY], 0, 0])
                }
            }
        }

        function x(a) {
            var e = I.getTarget(a);
            if (e) {
                var b;
                "wheel" == a.type ? b = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (b = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                b && (G(e), z(L, [s(), e, I.getPos(a), b]))
            }
        }

        var S = new Sa({protocol: a, counterId: b, counterType: c,
            meta: {url: B().href, hitId: g, timezone: Ta, timestamp: Ga}}), r = 20, M = 50, P = 10, Bb = 1, tb = 2, wb = 3, xb = 16, ub = 4, R = 5, H = 7, ja = 9, V = 10, q = 11, vb = 12, Ab = 13, yb = 14, C = 15, zb = 17, Ca = 18, Ha = 19, Ka = 27, La = 28, Na = 29, qa = 30, Oa = 31, sa = 32, ta = 33, ha = 1, la = 2, Va = 4, fa = 1, Aa = 2, Wa = 4, Ma = 8, Ba = 16, ob = 32, Xa = 64, lb = 2, sb = 1, rb = 2, fb = 4, Ia = 8, Ra = 16, ya = {A: 1, ABBR: 2, ACRONYM: 3, ADDRESS: 4, APPLET: 5, AREA: 6, B: 7, BASE: 8, BASEFONT: 9, BDO: 10, BIG: 11, BLOCKQUOTE: 12, BODY: 13, BR: 14, BUTTON: 15, CAPTION: 16, CENTER: 17, CITE: 18, CODE: 19, COL: 20, COLGROUP: 21, DD: 22, DEL: 23, DFN: 24, DIR: 25, DIV: 26,
            DL: 27, DT: 28, EM: 29, FIELDSET: 30, FONT: 31, FORM: 32, FRAME: 33, FRAMESET: 34, H1: 35, H2: 36, H3: 37, H4: 38, H5: 39, H6: 40, HEAD: 41, HR: 42, HTML: 43, I: 44, IFRAME: 45, IMG: 46, INPUT: 47, INS: 48, ISINDEX: 49, KBD: 50, LABEL: 51, LEGEND: 52, LI: 53, LINK: 54, MAP: 55, MENU: 56, META: 57, NOFRAMES: 58, NOSCRIPT: 59, OBJECT: 60, OL: 61, OPTGROUP: 62, OPTION: 63, P: 64, PARAM: 65, PRE: 66, Q: 67, S: 68, SAMP: 69, SCRIPT: 70, SELECT: 71, SMALL: 72, SPAN: 73, STRIKE: 74, STRONG: 75, STYLE: 76, SUB: 77, SUP: 78, TABLE: 79, TBODY: 80, TD: 81, TEXTAREA: 82, TFOOT: 83, TH: 84, THEAD: 85, TITLE: 86, TR: 87, TT: 88, U: 89,
            UL: 90, VAR: 91, NOINDEX: 100}, Za = 0;
        mb(0);
        var $a = 0, ab = 1, pb = 0, cb = [0, 0], qb = 0, db = [0, 0], eb = {}, gb = !0, hb = !1, bb = "", ib = !1, Ea = !0, Ja = Pa(), F = "metrikaId_" + Math.random(), Qa = {}, Ua = ":submit" + Math.random();
        if ("MetrikaPlayer" != f.name) {
            h.on(d, "mousemove", ua);
            h.on(d, "click,dblclick,mousedown", ba);
            h.on(d, "mouseup", W);
            h.on(f, "scroll", ca);
            if ("onmousewheel"in d)h.on(d, "mousewheel", x); else h.on(d, "wheel", x);
            h.on(f, "beforeunload", u);
            if (!jb)h.on(f, "unload", u);
            h.on(f, "resize", va);
            h.on(d, "keydown", oa);
            h.on(d, "keypress", pa);
            h.on(d,
                "copy", Y);
            h.on(d, "touchmove,touchstart", w);
            d.attachEvent && !f.opera ? (h.on(d, "focusin", da), h.on(d, "focusout", Fa)) : (h.on(f, "focus", N), h.on(f, "blur", T), h.on(d, "blur", T));
            d.addEventListener ? (h.on(d, "scroll", Da), h.on(d, "focus", Q), h.on(d, "blur", e), h.on(d, "change", k), h.on(d, "submit", t)) : d.attachEvent && (h.on(d, "focusin", Q), h.on(d, "focusout", e), function () {
                for (var a = d.getElementsByTagName("form"), e = 0; e < a.length; e++) {
                    for (var b = a[e].getElementsByTagName("*"), c = 0; c < b.length; c++)if (/^INPUT|SELECT|TEXTAREA$/.test(b[c].tagName))h.on(b[c],
                        "change", k);
                    h.on(a[e], "submit", t)
                }
            }());
            (function () {
                var a = d.getElementsByTagName("form");
                if (a.length)for (var e = 0; e < a.length; e++) {
                    var b = a[e].submit;
                    if ("function" == typeof b || "object" == typeof b && /^\s*function submit\(\)/.test(String(b)))a[e][Ua] = b, a[e].submit = function () {
                        t({target: this});
                        return this[Ua]()
                    }
                }
            })();
            "0:0" != m.getDocumentScroll().join(":") && ca();
            va();
            ra.uploadPage = function (e) {
                if ("function" == typeof f.toStaticHTML && -1 < f.toStaticHTML.toString().indexOf("NoScript"))return!1;
                var k = d.documentElement;
                if (k && 19E4 < ("" + k.innerHTML).length)return!1;
                var t = f.XMLHttpRequest ? new f.XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"), w = m.getDocumentCharset(), k = "text/html" + (w ? ";charset=" + w : ""), v = new kb({protocol: a, counterId: b, counterType: c});
                if ("html" == e)return e = RegExp("<script [^>]*?//mc\\.yandex\\.ru/watch/.*?\x3c/script>", "gi"), v.sendContent(m.getDocumentHTML().replace(e, ""), k, g, Ta, Ga), !0;
                t && (t.open("get", B().href, !0), t.onreadystatechange = function () {
                    4 == t.readyState && v.sendContent(t.responseText, t.getResponseHeader("content-type"),
                        g, Ta, Ga)
                }, t.overrideMimeType && w && t.overrideMimeType(k), t.send(null));
                return!0
            }
        }
        return{start: function () {
            S.activate()
        }, stop: function () {
            S.clear();
            h.un(d, "mousemove", ua);
            h.un(d, "click,dblclick,mousedown", ba);
            h.un(d, "mouseup", W);
            h.un(d, "mousewheel,wheel", x);
            h.un(f, "scroll", ca);
            h.un(f, "beforeunload", u);
            h.un(f, "unload", u);
            h.un(f, "resize", va);
            h.un(d, "keydown", oa);
            h.un(d, "keypress", pa);
            h.un(d, "copy", Y);
            h.un(d, "touchmove,touchstart", w);
            h.un(d, "focusin", da);
            h.un(d, "focusout", Fa);
            h.un(f, "focus", N);
            h.un(f, "blur",
                T);
            h.un(d, "blur", T);
            d.removeEventListener ? (h.un(d, "scroll", Da), h.un(d, "focus", Q), h.un(d, "blur", e), h.un(d, "change", k), h.un(d, "submit", t)) : d.detachEvent && (h.un(d, "focusin", Q), h.un(d, "focusout", e), function () {
                for (var a = d.getElementsByTagName("form"), e = 0; e < a.length; e++) {
                    for (var b = a[e].getElementsByTagName("*"), c = 0; c < b.length; c++)/^INPUT|SELECT|TEXTAREA$/.test(b[c].tagName) && h.un(b[c], "change", k);
                    h.un(a[e], "submit", t)
                }
            }());
            (function () {
                for (var a = d.getElementsByTagName("form"), e = 0; e < a.length; e++)a[e][Ua] &&
                (a[e].submit = a[e][Ua])
            })()
        }, uploadPages: function (a, e) {
            function b() {
                h.un(d, "DOMContentLoaded", b);
                h.un(f, "load", b);
                for (var k = a.split(/\n/), c = B().href, t = /regexp:/, w = 0; w < k.length; w++) {
                    var g = k[w];
                    if (g)if (t.test(g)) {
                        g = nb(g.replace(t, ""));
                        try {
                            var v = RegExp(g)
                        } catch (x) {
                        }
                        if (v && v.test(c)) {
                            ra.uploadPage(e);
                            break
                        }
                    } else if (-1 !== c.indexOf(g)) {
                        ra.uploadPage(e);
                        break
                    }
                }
            }

            "complete" == d.readyState ? b() : (h.on(d, "DOMContentLoaded", b), h.on(f, "load", b))
        }}
    }

    var lb = !1, Ba = "", jb = !Ca(/webkit/) && Ca(/gecko/), m = {getDocumentCharset: function () {
        return("" +
            (d.characterSet || d.charset || "")).toLowerCase()
    }, getDocumentHTML: function () {
        var a = "", b = "", a = d.documentElement, c = a.outerHTML;
        if (c)a = c; else {
            for (var c = a.attributes, f = "", g = 0; g < c.length; g++) {
                var h = c[g];
                h && (f += " " + h.name + '="' + (h.value || "") + '"')
            }
            a = "<html" + f + ">" + a.innerHTML + "</html>"
        }
        (c = d.doctype) && (b = "<!DOCTYPE " + c.name + (c.publicId ? ' PUBLIC "' + c.publicId + '"' : "") + (c.systemId ? ' "' + c.systemId + '"' : "") + ">\n");
        return b + a
    }, getRootElement: function () {
        var a = d.documentElement;
        return"CSS1Compat" == d.compatMode ? a : d.body ||
            a
    }, getViewportSize: function () {
        var a = m.getRootElement();
        return[a.clientWidth, a.clientHeight]
    }, getDocumentSize: function () {
        var a = m.getRootElement(), b = m.getViewportSize();
        return[Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
    }, getDocumentScroll: function () {
        return[f.pageXOffset || d.documentElement && d.documentElement.scrollLeft || d.body && d.body.scrollLeft || 0, f.pageYOffset || d.documentElement && d.documentElement.scrollTop || d.body && d.body.scrollTop || 0]
    }, getElementXY: function (a) {
        if (!a.ownerDocument ||
            "PARAM" == a.tagName || a == d.body || a == d.documentElement)return[0, 0];
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            var b = m.getDocumentScroll();
            return[Math.round(a.left + b[0]), Math.round(a.top + b[1])]
        }
        for (var c = b = 0; a;)b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
        return[b, c]
    }, getElementParent: function (a) {
        return a == d.documentElement ? null : a == d.body ? d.documentElement : a.parentNode
    }}, l = {isArray: function (a) {
        return"function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.toString.call(a)
    },
        mergeArrays: function (a) {
            for (var b = 1; b < arguments.length; b++)if (l.isArray(arguments[b]))for (var c = 0; c < arguments[b].length; c++)a[a.length] = arguments[b][c]
        }};
    m.getElementChildren = function (a, b) {
        var c = [];
        if (a) {
            var d = a.childNodes;
            if (d)for (var g = 0, f = d.length; g < f; g++) {
                var h = d[g];
                "INPUT" == h.nodeName && h.type && "hidden" == h.type.toLocaleLowerCase() || b && h.nodeName != b || l.mergeArrays(c, [h])
            }
        }
        return c
    };
    m.getElementNeighborPosition = function (a) {
        for (var b = m.getElementChildren(m.getElementParent(a), a.nodeName), c = 0; c < b.length; c++)if (b[c] ==
            a)return c;
        return 0
    };
    m.getElementRegion = function (a) {
        var b = m.getElementXY(a);
        a = a == d.body || a == d.documentElement ? m.getDocumentSize() : [a.offsetWidth, a.offsetHeight];
        return[b[0], b[1], a[0], a[1]]
    };
    l.fletcher = function (a) {
        for (var b = a.length, c = 0, d = 255, g = 255; b;) {
            var f = 21 < b ? 21 : b, b = b - f;
            do {
                var h = "string" == typeof a ? a.charCodeAt(c) : a[c];
                c++;
                if (255 < h)var l = h >> 8, h = h & 255, h = h ^ l;
                d += h;
                g += d
            } while (--f);
            d = (d & 255) + (d >> 8);
            g = (g & 255) + (g >> 8)
        }
        a = (d & 255) + (d >> 8) << 8 | (g & 255) + (g >> 8);
        return 65535 == a ? 0 : a
    };
    m.calcTextChecksum = function (a) {
        var b =
            "";
        a = a.childNodes;
        for (var c = 0, d = a.length; c < d; c++)a[c] && 3 == a[c].nodeType && (b += a[c].nodeValue);
        return l.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    m.calcAttribChecksum = function (a) {
        var b = "", c = "width height align title alt name".split(" ");
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        for (var b = b + String(a.className || "").toLowerCase(), d = 0; d < c.length; d++)a.getAttribute && (b += String(a.getAttribute(c[d]) || "").toLowerCase());
        return l.fletcher(b.replace(/[\u0000-\u0020]+/g,
            ""))
    };
    m.calcChildrenChecksum = function (a) {
        return l.fletcher((a.innerHTML || "").replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    };
    m.getFormNumber = function (a) {
        for (var b = d.getElementsByTagName("form"), c = 0, f = b.length; c < f; c++)if (b[c] == a)return c;
        return-1
    };
    m.classNameExists = function (a, b) {
        return RegExp("(?:^|\\s)" + b + "(?:\\s|$)").test(a.className)
    };
    m.isEmptyField = function (a) {
        return"INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" ==
            a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
    };
    m.getElementsByClassName = function (a, b) {
        b = b || d;
        for (var c = b.getElementsByTagName("*"), f = [], g = 0; g < c.length; g++)m.classNameExists(c[g], a) && f.push(c[g]);
        return f
    };
    var I = {getPos: function (a) {
        var b = m.getRootElement(), c = m.getDocumentScroll();
        return[a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0]
    }, getTarget: function (a) {
        return a.target || a.srcElement
    }};
    l.mixin = function (a) {
        for (var b = 1; b < arguments.length; b++)if (arguments[b]) {
            for (var c in arguments[b])arguments[b].hasOwnProperty(c) &&
            (a[c] = arguments[b][c]);
            arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
        }
        return a
    };
    var J = function (a) {
        a = a || {};
        l.mixin(this, a);
        this._initComponent()
    };
    J.prototype._initComponent = function () {
    };
    J.inherit = function (a) {
        a = a || {};
        var b = "function" == typeof this ? this : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function () {
            b.apply(this, arguments)
        });
        var c = function () {
        };
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        l.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor =
            a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = J.inherit;
        return a.constructor
    };
    var h = J.inherit({_initComponent: function () {
        h.superclass._initComponent.apply(this, arguments);
        this._listeners = []
    }, on: function (a, b, c, d, g) {
        g = 5 > arguments.length ? !0 : !!g;
        for (var h = b.split(","), l = 0; l < h.length; l++) {
            var m = h[l], s = function (a) {
                c.call(d || this, a || f.event)
            };
            this._listeners[this._listeners.length] = [a, m, c, d, g, s];
            a.addEventListener ? a.addEventListener(m, s, g) : a.attachEvent && a.attachEvent("on" + m, s)
        }
    },
        un: function (a, b, c, d, g) {
            g = 5 > arguments.length ? !0 : !!g;
            for (var f = b.split(","), h = 0; h < f.length; h++)for (var l = f[h], m = 0; m < this._listeners.length; m++) {
                var p = this._listeners[m];
                if (p[0] == a && p[1] == l && p[2] == c && p[3] == d && p[4] == g) {
                    this._listeners.splice(m, 1);
                    this._removeListener(a, l, p[5], g);
                    return
                }
            }
        }, unAll: function () {
            for (var a = 0; a < this._listeners.length; a++) {
                var b = this._listeners[a];
                this._removeListener(b[0], b[1], b[5], b[4])
            }
            this._listeners.length = 0
        }, _removeListener: function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b,
                c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }});
    h.on = function (a, b, c, d, g) {
        h._instance || (h._instance = new h);
        h._instance.on.apply(h._instance, arguments)
    };
    h.un = function (a, b, c, d, g) {
        h._instance && h._instance.un.apply(h._instance, arguments)
    };
    h.onDocumentVisible = function (a, b) {
        if ("prerender" == d.webkitVisibilityState) {
            var c = function () {
                "prerender" != d.webkitVisibilityState && (h.un(d, "webkitvisibilitychange", c), a.call(b, !0))
            };
            h.on(d, "webkitvisibilitychange", c)
        } else a.call(b, !1)
    };
    var Ha = null, ea = J.inherit({counterId: "",
        _initComponent: function () {
            ea.superclass._initComponent.apply(this, arguments);
            this._ls = null;
            try {
                this._ls = f.localStorage
            } catch (a) {
            }
        }, set: function (a, b) {
            if (this.isEnabled())try {
                !b || b && l.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), JSON.stringify(b))
            } catch (c) {
            }
        }, get: function (a) {
            if (this.isEnabled())try {
                return JSON.parse(this._ls.getItem(this._getLsKey(a)))
            } catch (b) {
            }
            return null
        }, remove: function (a) {
            if (this.isEnabled())try {
                this._ls.removeItem(this._getLsKey(a))
            } catch (b) {
            }
        }, isEnabled: function () {
            return this._ls &&
                f.JSON && "object" == typeof this._ls && "object" == typeof f.JSON
        }, getStorageId: function () {
            var a = this.get("lsid");
            a || (a = Math.round(Math.random() * new Date), this.set("lsid", a));
            return a
        }, clearStorageId: function () {
            this.remove("lsid")
        }, _getLsKey: function (a) {
            return"_ym" + this.counterId + "_" + a
        }}), ka = J.inherit({counterId: "", onlyCurrentDomain: !1, skipPrefix: !1, _initComponent: function () {
        ka.superclass._initComponent.apply(this, arguments);
        this._domain = null;
        if (!this.onlyCurrentDomain)for (var a = D.host.split("."), b = 2; ;)if (b <=
            a.length) {
            if (this._domain = "." + a.slice(-b).join("."), b++, this.isEnabled())break
        } else {
            this._domain = null;
            break
        }
    }, create: function (a, b, c) {
        a = [this._prepareName(a) + "=" + encodeURIComponent(b)];
        c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires=" + b.toGMTString()));
        this._domain && a.push("domain=" + this._domain);
        a.push("path=/");
        try {
            d.cookie = a.join(";")
        } catch (f) {
        }
    }, read: function (a) {
        try {
            var b = d.cookie
        } catch (c) {
        }
        return b && b.match(RegExp("(?:^|;\\s*)" + this._prepareName(a) + "=([^;]*)")) ? decodeURIComponent(RegExp.$1) :
            null
    }, erase: function (a) {
        this.create(a, "", -1)
    }, isEnabled: function () {
        this.create("metrika_enabled", "1", 60);
        var a = !!this.read("metrika_enabled");
        this.erase("metrika_enabled");
        return a
    }, _prepareName: function (a) {
        return(this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
    }});
    ka.isEnabled = function () {
        return(new ka({onlyCurrentDomain: !0})).isEnabled()
    };
    var A = J.inherit({transports: [], postParams: [], send: function (a, b, c, d) {
        c = c || function () {
        };
        (function ra(f) {
            if (f < this.transports.length)try {
                var h =
                    new this.transports[f]({postParams: this.postParams});
                h.request(a, b, function (a, b) {
                    a ? c.call(d, b) : ra.call(this, f + 1)
                }, this)
            } catch (l) {
                qa(l, "send by " + (h && h.id)), ra.call(this, f + 1)
            }
        }).call(this, 0)
    }}), la = {stringify: function (a) {
        var b = [], c;
        for (c in a)if (a.hasOwnProperty(c)) {
            var d = a[c];
            if (l.isArray(d))for (var g = 0; g < d.length; g++)b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d[g]))); else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        }
        return b.join("&")
    }};
    l.forEachKey = function (a, b, c) {
        for (var d in a)a.hasOwnProperty(d) && b.call(c, d, a[d], a)
    };
    l.inArray = function (a, b) {
        for (var c = 0; c < a.length; c++)if (a[c] == b)return!0;
        return!1
    };
    var xa = J.inherit({postParams: [], _buildUrl: function (a, b) {
        return a + (-1 < a.indexOf("?") ? "&" : "?") + la.stringify(b)
    }, _splitParams: function (a) {
        var b = {}, c = {};
        l.forEachKey(a, function (a, d) {
            l.inArray(this.postParams, a) ? c[a] = d : b[a] = d
        }, this);
        return{get: b, post: c}
    }}), K = xa.inherit({id: "XHR", request: function (a, b, c, d) {
        if (f.opera && "function" == typeof f.opera.version) {
            var g = f.opera.version();
            if ("string" == typeof g && "12" == g.split(".")[0] && /[^a-z0-9.:-]/.test(D.host))return c.call(d, !1)
        }
        if (f.XMLHttpRequest) {
            var h = new XMLHttpRequest;
            if ("withCredentials"in h) {
                b = this._splitParams(b);
                a = this._buildUrl(a, b.get);
                h.open("POST", a, !0);
                h.withCredentials = !0;
                h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                h.send(la.stringify(b.post));
                (function () {
                    4 == h.readyState ? c.call(d, 200 == h.status) : O(arguments.callee, 50, "TransportXHR.request")
                })();
                return
            }
        }
        c.call(d, !1)
    }});
    l.random = function (a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    var Z = xa.inherit({id: "form", enctype: "application/x-www-form-urlencoded", htmlfileOnly: !1, _initComponent: function () {
        Z.superclass._initComponent.apply(this, arguments);
        "_htmlfile"in Z.prototype || (Z.prototype._htmlfile = this._createHtmlfile());
        this._doc = this._htmlfile || (this.htmlfileOnly ? null : d)
    }, request: function (a, b, c, d) {
        var g = this._doc;
        if (!g)return c.call(d, !1);
        b = this._splitParams(b);
        var f = "ifr" +
            l.random(), h = g.createElement("div");
        h.style.position = "absolute";
        h.style.left = "-99999px";
        h.style.top = "-99999px";
        var m = ['<iframe name="', f, '"></iframe>', '<form action="', this._buildUrl(a, b.get), '" method="post" target="', f, '" enctype="', this.enctype, '">'];
        l.forEachKey(b.post, function (a) {
            l.mergeArrays(m, ['<textarea name="', a, '"></textarea>'])
        });
        l.mergeArrays(m, ["</form>"]);
        h.innerHTML = m.join("");
        g.body.appendChild(h);
        var p = h.getElementsByTagName("form")[0];
        l.forEachKey(b.post, function (a, b) {
            p[a].value =
                b
        });
        p.submit();
        O(function () {
            g.body.removeChild(h)
        }, 1E4, "TransportForm.request.2");
        return c.call(d, !0)
    }, _createHtmlfile: function () {
        try {
            if (f.ActiveXObject) {
                var a = new ActiveXObject("htmlfile");
                a.open();
                a.write("<html><body></body></html>");
                a.close();
                return a
            }
        } catch (b) {
        }
        return null
    }}), X = Z.inherit({id: "htmlfile", htmlfileOnly: !0}), Va = xa.inherit({id: "img", request: function (a, b, c, d) {
        a = this._buildUrl(a, b);
        b = new Image;
        b.onload = E(function () {
            c.call(d, !0)
        }, "TransportImage.request");
        b.onerror = E(function () {
            c.call(d,
                !1)
        }, "TransportImage.request");
        b.src = a
    }});
    l.defer = function (a, b, c, d, g) {
        return O(function () {
            a.apply(c, d || [])
        }, b, g)
    };
    var U = A.inherit({protocol: "", host: "mc.yandex.ru", resource: "", counterId: "", counterType: 0, retry: !1, transports: [K, X, Va], _initComponent: function () {
        U.superclass._initComponent.apply(this, arguments);
        this.retry && (this._storage = new ea)
    }, send: function (a, b, c, d) {
        if (this.retry && this._storage.isEnabled()) {
            b.rqnl = b.rqnl || 0;
            b.rqnl++;
            for (var g = this._storage.get("retryReqs") || {}, f = 0; g[f];)f++;
            g[f] = {protocol: this.protocol,
                host: this.host, resource: this.resource, counterId: this.counterId, counterType: this.counterType, postParams: this.postParams, params: a, browserInfo: b, ghid: Ya._globalMetrikaHitId, time: +new Date};
            this._storage.set("retryReqs", g)
        }
        g = {};
        this.counterType && (g["cnt-class"] = this.counterType);
        l.mixin(g, a);
        b.st = Math.round((new Date).getTime() / 1E3);
        a = [this.protocol, "//", this.host, "/" + this.resource + "/" + this.counterId].join("");
        var h = [];
        b && (l.forEachKey(b, function (a, b) {
            "t" != a && l.mergeArrays(h, [a, b])
        }), b.t && l.mergeArrays(h,
            ["t", b.t]));
        h.length && (g["browser-info"] = h.join(":"));
        if (this.retry && this._storage.isEnabled())var m = l.defer(function () {
        }, 1E4, this, [], "SenderBK.timeout");
        return U.superclass.send.call(this, a, g, function () {
            if (this.retry && this._storage.isEnabled()) {
                clearTimeout(m);
                var a = this._storage.get("retryReqs") || {};
                a[f] && (delete a[f], this._storage.set("retryReqs", a))
            }
            c && c.apply(d, arguments)
        }, this)
    }});
    U.retransmit = function () {
        var a = new ea, b = a.get("retryReqs") || {};
        a.remove("retryReqs");
        l.forEachKey(b, function (a, b) {
            b.ghid &&
                b.ghid != Ya._globalMetrikaHitId && b.time && b.time + 864E5 > +new Date && 2 >= b.browserInfo.rqnl && (new U({protocol: b.protocol, host: b.host, resource: b.resource, counterId: b.counterId, counterType: b.counterType, postParams: b.postParams || [], retry: !0})).send(b.params, b.browserInfo)
        })
    };
    var $ = {abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", tail: "+/=", tailSafe: "*-_", encode: function (a, b) {
        for (var c = ($.abc + (b ? $.tailSafe : $.tail)).split(""), d = a.length, g = [], f = d - d % 3, h, m = 0; m < f; m += 3)h = (a[m] << 16) + (a[m + 1] <<
            8) + a[m + 2], l.mergeArrays(g, [c[h >> 18 & 63], c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63]]);
        switch (d - f) {
            case 1:
                h = a[f] << 4;
                l.mergeArrays(g, [c[h >> 6 & 63], c[h & 63], c[64], c[64]]);
                break;
            case 2:
                h = (a[f] << 10) + (a[f + 1] << 2), l.mergeArrays(g, [c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63], c[64]])
        }
        return g.join("")
    }}, Ia = {encode: function (a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) {
            var g = a.charCodeAt(c);
            128 > g ? b.push(g) : (127 < g && 2048 > g ? b.push(g >> 6 | 192) : (b.push(g >> 12 | 224), b.push(g >> 6 & 63 | 128)), b.push(g & 63 | 128))
        }
        return b
    }}, kb = U.inherit({resource: "webvisor", transports: [K,
        Z], postParams: ["wv-data"], sendContent: function (a, b, c, d, g, f, h) {
        if (!a)return!1;
        -1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
        a = {"wv-type": 1, "page-url": B().href, "wv-hit": c, "wv-data": $.encode(Ia.encode(a))};
        return this.send(a, {z: d, i: g, pct: b || ""}, f, h)
    }});
    l.throttle = function (a, b, c, d) {
        var g, f, h;
        return function () {
            f = arguments;
            h = this;
            g || function () {
                g = null;
                f && (a.apply(c || h, f), f = null, g = O(arguments.callee, b, d))
            }()
        }
    };
    var fa = J.inherit({storage: null, storageKey: "dataBuffer", maxBufferSize: 255, flushTimeout: 1E4, active: !0,
        meta: null, onFlush: function () {
        }, onFlushCtx: null, bufferExpireTime: 864E5, _initComponent: function () {
            fa.superclass._initComponent.apply(this, arguments);
            this._data = [];
            this._packetNumber = 0;
            this._flushTID = null;
            this._saveToStorageThrottled = l.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
            if (this.storage) {
                var a = this.storage.get(this.storageKey);
                a && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +new Date && this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum);
                this.clear()
            }
        },
        append: function (a, b) {
            l.mergeArrays(this._data, a);
            this._saveToStorageThrottled();
            this.active && ((b || this._data.length >= this.maxBufferSize) && this._flush(), this._flushTID || (this._flushTID = l.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush")))
        }, activate: function () {
            this.active || (this.active = !0, this.append([]))
        }, clear: function () {
            this._data.length = 0;
            this._flushTID = null;
            this.storage && this.storage.remove(this.storageKey)
        }, _flush: function () {
            this.onFlush.call(this.onFlushCtx || this, this._data, this.meta,
                this._packetNumber);
            this._packetNumber++;
            this.clear()
        }, _saveToStorage: function () {
            this.storage && this._data.length && this.storage.set(this.storageKey, {data: this._data, meta: this.meta, pnum: this._packetNumber, time: +new Date})
        }}), ya = U.inherit({resource: "webvisor", retry: !0, postParams: ["wv-data"], sendPacket: function (a, b, c, d, g, f, h, m) {
        if (!a || !a.length)return!1;
        a = {rn: l.random(), "page-url": b, wmode: 0, "wv-type": 0, "wv-hit": c, "wv-part": d + 1, "wv-check": l.fletcher(a), "wv-data": $.encode(a, !0)};
        return this.send(a, {z: g,
            i: f}, h, m)
    }}), Sa = fa.inherit({protocol: "", counterId: "", counterType: "", meta: null, maxBufferSize: 7500, flushTimeout: 3E4, storageKey: "visorbuff", active: !1, _initComponent: function () {
        this.storage = new ea({counterId: this.counterId});
        this._sender = new ya({protocol: this.protocol, counterId: this.counterId, counterType: this.counterType});
        Sa.superclass._initComponent.apply(this, arguments)
    }, onFlush: function (a, b, c) {
        this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
    }});
    l.toJSON = function (a) {
        if (a === ga)return"";
        if (null === a)return"null";
        switch (a.constructor) {
            case Boolean:
                return a.toString();
            case Number:
                return isFinite(a) ? a.toString() : "null";
            case String:
                return'"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
            case Array:
                for (var b = [], c = 0, d = a.length; c < d; c++)b[b.length] = l.toJSON(a[c]);
                return"[" + b.join(",") + "]";
            case Object:
                b = [];
                for (c in a)a.hasOwnProperty(c) && a[c] !== ga && (b[b.length] = l.toJSON(c) + ":" + l.toJSON(a[c]));
                return"{" + b.join(",") + "}";
            default:
                return"null"
        }
    };
    var p = {_jScriptVersion: 0, getJScriptVersion: function () {
        p._jScriptVersion ||
        (p._jScriptVersion = (new Function("return /*@cc_on @_jscript_version @*/;"))());
        return p._jScriptVersion
    }}, za = {log: function () {
        f.console && console.log && (-1 < D.href.indexOf("_ym_debug=1") || f._ym_debug) && console.log.apply(console, arguments)
    }};
    l.bind = function (a, b) {
        return function () {
            return a.apply(b || this, arguments)
        }
    };
    var Ja = J.inherit({_initComponent: function () {
        Ja.superclass._initComponent.apply(this, arguments);
        this._origErrorHandler = f.onerror;
        f.onerror = l.bind(this._errorHandler, this)
    }, _errorHandler: function (a, b, c) {
        if ("function" == typeof this._origErrorHandler)return this._origErrorHandler.apply(f, arguments)
    }}), Aa = J.inherit({_initComponent: function () {
        Aa.superclass._initComponent.apply(this, arguments);
        this._executedMsgs = {};
        h.on(f, "message", this.RemoteControl__onMessage, this)
    }, RemoteControl__onMessage: function (a) {
        if (/^https?:\/\/metrika(-(dev|test))?\.yandex\.(ru|com|com\.tr|ua|kz)(:\d+)?$/.test(a.origin)) {
            try {
                var b = JSON.parse(a.data)
            } catch (c) {
            }
            b && b.id && b.code && !this._executedMsgs[b.id] && (this._executedMsgs[b.id] = !0, (new Function("evt", b.code))(a))
        }
    }});
    f.Ya = f.Ya || {};
    Ya._metrika = Ya._metrika || {};
    Ya._metrika.counters = Ya._metrika.counters || {};
    Ya._metrika.hitParam = Ya._metrika.hitParam || {};
    Ya._globalMetrikaHitId = l.random();
    var D = B(), Ta, Ga, L = f.navigator, ma = f.screen, aa = "https:" == D.protocol ? "https:" : "http:", Oa = 548, na = 5.8 >= p.getJScriptVersion(), Ka = na ? 512 : 2048, Fb = na ? 512 : 2048, Wa = na ? 100 : 400, La = "noindex", oa = 50, Ma = RegExp("\\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|pdf|phps|png|ppt(x|m|b)?|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|xls(x|m|b)?|xpi|g?zip)$",
        "i"), Gb = +new Date, Na, pa;
    f.Ya.Metrika = function (a, b, c, v) {
        var g = this;
        return E(function () {
            function A(a, b) {
                if (!a || !b)return!1;
                for (var c = [], d = 0; d < b.length; d++)c.push(b[d].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
                return RegExp("\\.(" + c.join("|") + ")$", "i").test(a)
            }

            function J(a) {
                a =
                    a.target || a.srcElement;
                if (!a)return!1;
                3 == a.nodeType && (a = a.parentNode);
                for (var b = a.nodeName.toString().toLowerCase(); a.parentNode && a.parentNode.nodeName && ("a" != b && "area" != b || !a.href);)a = a.parentNode, b = a.nodeName.toString().toLowerCase();
                return a.href ? a : !1
            }

            function I(a, b) {
                return(a ? a.replace(/^www\./, "") : "") == (b ? b.replace(/^www\./, "") : "")
            }

            function s(a, b) {
                function c(a) {
                    a = a.split(":");
                    a = a[1] || "";
                    a = a.replace(/^\/*/, "").replace(/^www\./, "");
                    return a.split("/")[0]
                }

                return a && b ? c(a) == c(b) : a || b ? !1 : !0
            }

            function K(a, b) {
                var c = b.target, d = !1;
                if (!b.hostname)return!1;
                c && "_self" != c && "_top" != c && "_parent" != c || (d = !0);
                (c = a.shiftKey || a.ctrlKey || a.altKey) || a.modifiers && f.Event && (c = a.modifiers & f.Event.CONTROL_MASK || a.modifiers & f.Event.SHIFT_MASK || a.modifiers & f.Event.ALT_MASK);
                return d && !c
            }

            function y(e, b, c) {
                function d(a, e) {
                    a && e && (c ? S[a] = e : S[S.length] = [a, e].join(":"))
                }

                function h(a) {
                    d(a, b[a] ? "1" : "")
                }

                b = b || {};
                var S = c ? {} : [], r = -1 * (new Date).getTimezoneOffset(), M = X();
                Ga || (Ga = M, Ta = r);
                d("j", p.getJavaEnabled() ? "1" : "");
                ma && d("s", ma.width +
                    "x" + ma.height + "x" + (ma.colorDepth || ma.pixelDepth));
                f.devicePixelRatio && d("sk", f.devicePixelRatio);
                d("f", p.getFlashVersion());
                d("l", p.getSilverlightVersion());
                d("fpr", p.getFingerPrint());
                b.pa || d("w", Z() + "x" + $());
                d("z", r);
                d("i", M);
                d("et", Math.round((new Date).getTime() / 1E3));
                d("en", m.getDocumentCharset());
                d("v", Oa);
                d("c", L.cookieEnabled ? "1" : "");
                d("jv", p.getJScriptVersion());
                d("la", p.getLanguage());
                Q && d("wh", "1");
                M = "ar ln dl ad nb pa".split(" ");
                for (r = 0; r < M.length; r++)h(M[r]);
                M = ["va", "vt", "sn", "sa", "he"];
                b.nb && M.push("cl");
                for (r = 0; r < M.length; r++) {
                    var P = M[r];
                    d(P, b[P])
                }
                b.reqNum && (r = new ea({counterId: a}), r.isEnabled() && (M = r.getStorageId(), (P = r.get("reqNum")) ? P++ : P = 1, r.set("reqNum", P), r.get("reqNum") == P ? (d("ls", M), d("rqn", P)) : (r.remove("reqNum"), r.clearStorageId(), 1 < P && (d("ls", M), d("rqn", 0)))));
                d("rn", l.random());
                d("hid", ba);
                d("ds", qa());
                g._firstPaint || (g._firstPaint = sa(), d("fp", g._firstPaint));
                if (g._webvisor) {
                    f.name || (f.name = Math.round(65535 * Math.random()));
                    if (r = +f.name)0 > r && (r *= -1), r %= 65535;
                    d("wn",
                        r || l.fletcher(f.name));
                    try {
                        f.history && d("hl", String(f.history.length))
                    } catch (v) {
                    }
                }
                e = "undefined" == typeof e ? (e = n()) ? l.trim(e, Wa) : "" : l.trim(e, Wa);
                d("t", e);
                return c ? S : S.join(":")
            }

            function n() {
                var a = d.title;
                "string" != typeof a && (a = (a = d.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
                return a
            }

            function X() {
                for (var a = new Date, a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()], b = "", c = 0; c < a.length; c++)b += 10 > a[c] ? "0" + a[c] : a[c];
                return b
            }

            function Z() {
                var a = -1;
                d.documentElement && "CSS1Compat" == d.compatMode ? a = d.documentElement.clientWidth : d.body && (a = d.body.clientWidth);
                return a
            }

            function $() {
                var a = -1;
                d.documentElement && "CSS1Compat" == d.compatMode ? a = d.documentElement.clientHeight : d.body && (a = d.body.clientHeight);
                return a
            }

            function fa() {
                var a = f.performance || f.webkitPerformance, b = [];
                if (a = a && a.timing) {
                    var c = a.navigationStart;
                    if (c)for (b = [a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart,
                        a.fetchStart - c, a.redirectEnd - a.redirectStart, a.redirectCount], b.push(a.domInteractive && a.domLoading ? a.domInteractive - a.domLoading : null), b.push(a.domContentLoadedEventStart && a.domContentLoadedEventEnd ? a.domContentLoadedEventEnd - a.domContentLoadedEventStart : null), b.push(a.domComplete ? a.domComplete - c : null), b.push(a.loadEventStart ? a.loadEventStart - c : null), b.push(a.loadEventStart && a.loadEventEnd ? a.loadEventEnd - a.loadEventStart : null), b.push(a.domContentLoadedEventStart ? a.domContentLoadedEventStart - c : null),
                                   a = 0; a < b.length; a++)c = b[a], null !== c && (0 > c || 36E5 < c) && (b[a] = null)
                }
                return b
            }

            function qa() {
                var a = [], b = g._lastPerformanceTiming, c = fa();
                if (b)for (var d = 0, f = b.length; d < f; d++)null === c[d] ? a.push(c[d]) : a.push(b[d] === c[d] ? "" : c[d]); else a = c;
                g._lastPerformanceTiming = c;
                return a.join(",")
            }

            function sa() {
                var a;
                if ("object" == typeof f.chrome && f.chrome.loadTimes) {
                    if (a = f.chrome.loadTimes(), a.requestTime && a.firstPaintTime)return~~(1E3 * (a.firstPaintTime - a.requestTime))
                } else if (f.performance && f.performance.timing && (a = f.performance.timing,
                    a.navigationStart && a.msFirstPaint))return a.msFirstPaint - a.navigationStart;
                return null
            }

            function ta(a) {
                var b = d.referrer || "";
                if (RegExp("^https?://" + D.host + "/").test(b))return!1;
                for (var c = a.patterns, g = 0; g < c.length; g++)if (b.match(RegExp(c[g], "i"))) {
                    var f = a.params || [];
                    if (f.length)for (var h = ia((RegExp.$1 || "").replace(/\+/g, "%20")), r = 0; r < f.length; r++) {
                        if (h == ia(f[r]))return!0
                    } else return!0
                }
                return!1
            }

            function ha(a, b) {
                var c = !1;
                if (a && "string" != typeof a && a.length)for (var g = 0; g < a.length; g++) {
                    var f = a[g].selector,
                        h = a[g].text, r = f.charAt(0), f = f.slice(1);
                    if ("#" == r) {
                        if (r = d.getElementById(f))c = !0, b && Y.unshift([r, r.innerHTML]), r.innerHTML = h
                    } else if ("." == r)for (r = m.getElementsByClassName(f), f = 0; f < r.length; f++) {
                        var c = !0, l = r[f], n = h;
                        b && Y.unshift([l, l.innerHTML]);
                        l.innerHTML = n
                    }
                }
                return c
            }

            function la() {
                for (var a = 0; a < Y.length; a++)Y[a][0].innerHTML = Y[a][1]
            }

            function Aa(a, b) {
                a = a && a.replace(/^\?/, "");
                b = b && b.replace(/^#/, "");
                var c = "";
                if (a)for (var d = a.split("&"), f = 0; f < d.length; f++) {
                    var g = d[f].split("=");
                    "_openstat" == g[0] && (c =
                        g[1])
                }
                b && 0 == b.indexOf("_openstat=") && (c = b.slice(10));
                c && (c = -1 < c.indexOf(";") ? ia(c) : Ba(c.replace(/[-*_]/g, function (a) {
                    return{"*": "+", "-": "/", _: "="}[a] || a
                })));
                return c && (c = c.split(";"), 4 == c.length) ? {service: c[0], campaign: c[1], ad: c[2], source: c[3]} : null
            }

            function ia(a) {
                try {
                    return decodeURIComponent(a)
                } catch (b) {
                    return""
                }
            }

            function Ba(a) {
                for (; a.length % 4;)a += "=";
                var b, c, d, f, g, h = 0, l = "";
                do {
                    b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
                    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
                    f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
                    g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
                    if (0 > b || 0 > c || 0 > f || 0 > g)return null;
                    d = b << 18 | c << 12 | f << 6 | g;
                    b = d >> 16 & 255;
                    c = d >> 8 & 255;
                    d &= 255;
                    l = 64 == f ? l + String.fromCharCode(b) : 64 == g ? l + String.fromCharCode(b, c) : l + String.fromCharCode(b, c, d)
                } while (h < a.length);
                a = l;
                f = "";
                for (b = l = h = g = 0; g < a.length;)h = a.charCodeAt(g), 128 > h ? (f += String.fromCharCode(h), g++) : 191 < h && 224 > h ? (l = a.charCodeAt(g +
                    1), f += String.fromCharCode((h & 31) << 6 | l & 63), g += 2) : (l = a.charCodeAt(g + 1), b = a.charCodeAt(g + 2), f += String.fromCharCode((h & 15) << 12 | (l & 63) << 6 | b & 63), g += 3);
                return f
            }

            function Ia(e) {
                var k = !1;
                if (Ya._metrika.hitParam[W]) {
                    if (1 != c || Ya._metrika.counters[W])return!1;
                    k = !0
                }
                Ya._metrika.counters[W] = g;
                Ya._metrika.hitParam[W] = 1;
                g._webvisor = !v && (u && u.webvisor || lb);
                g._directCampaign = u && u.directCampaign;
                u && u.trackHash && g.trackHash(!0);
                if (!v && !k) {
                    g.replacePhones();
                    var t = new ka({counterId: a}), w = t.read("visorc");
                    "b" != w && "w" != w &&
                    (w = "");
                    if (!t.isEnabled() || Ca("opera mini"))w = "b";
                    Na = +new Date;
                    var k = new Db({protocol: aa, counterType: c, counterId: a}), x = {ut: ua, he: u ? ~~u.httpError : 0, ad: 1 == c && f.Ya && f.Ya.Direct ? !0 : !1, saveRef: !0};
                    za.log("PageView. Counter " + a + ". URL: " + D.href + ". Referer: " + d.referrer);
                    k.sendHit(D.href, n(), d.referrer, b, x, w, e, function (a) {
                        pa || (pa = +new Date);
                        a = a || {};
                        var b = a.webvisor || {};
                        if (T) {
                            var e = +b.recp;
                            if (!isFinite(e) || 0 > e || 1 < e)w = "w";
                            w || (w = ba % 1E4 / 1E4 < e ? "w" : "b");
                            t.create("visorc", w, 30);
                            "w" == w ? (T.start(), e = b.arch_type, (b =
                                b.urls) && e && T.uploadPages(b, e)) : T.stop()
                        }
                        b = a.mp2;
                        a = g;
                        t.erase("mp2_substs");
                        if (b) {
                            b:if ((e = b.conditions) && e.length)for (var c = 0; c < e.length; c++) {
                                var k;
                                if ("ref" == e[c].type)k = ta(e[c]); else if (k = "adv" == e[c].type) {
                                    var x = e[c], m = Ya._metrika.counter._directCampaign, n = x.ServiceNamePattern, p = x.RefererPattern;
                                    k = m ? x.direct_orders : x.direct_camp;
                                    var R = d.referrer, H = D.search, H = H && H.replace(/^\?/, ""), ja = {};
                                    if (H)for (var H = H.split("&"), V = 0; V < H.length; V++) {
                                        var q = H[V].split("=");
                                        ja[ia(q[0])] = ia(q[1])
                                    }
                                    for (var H = Aa(D.search,
                                        D.hash), V = {}, q = ["source", "medium", "campaign", "term", "content"], v = 0; v < q.length; v++)ja["utm_" + q[v]] && (V[q[v]] = ja["utm_" + q[v]]);
                                    v = m ? "direct.yandex.ru" : H && H.service || V.source;
                                    q = !1;
                                    if (!q && n && n.length)for (var y = 0; y < n.length; y++)if (RegExp(n[y], "i").test(v)) {
                                        q = !0;
                                        break
                                    }
                                    if (!q && p && p.length)for (n = 0; n < p.length; n++)if (RegExp(p[n], "i").test(R)) {
                                        q = !0;
                                        break
                                    }
                                    !q && x.google_adwords && ja.gclid && (q = !0);
                                    !q && x.yandex_direct && ja.yclid && (q = !0);
                                    if (q && k && k.length && (q = !1, x = m || H && H.campaign || V && V.campaign))for (m = 0; m < k.length; m++)if (k[m] ==
                                        x) {
                                        q = !0;
                                        break
                                    }
                                    k = q
                                }
                                if (k) {
                                    e[c].track_id && t.create("mp2_track", e[c].track_id, 43200);
                                    break b
                                }
                            }
                            e = t.read("mp2_track");
                            b = b.substs && b.substs[e];
                            e && b ? (t.create("mp2_substs", l.toJSON(b)), b = ha(b), a.params("__ym", b ? "mp_trackid" : "mp_trackid_bad", e)) : la()
                        } else la();
                        h.on(f, "load", g.replacePhones, g);
                        g._inited = !0
                    })
                }
                Ja();
                u && (u.enableAll ? g.enableAll() : (u.clickmap && g.clickmap(u.clickmap), u.trackLinks && g.trackLinks(u.trackLinks), u.accurateTrackBounce && g.accurateTrackBounce(u.accurateTrackBounce), u.ad && ad()));
                g._webvisor &&
                (T = new Xa(aa, a, c, u, ba, g))
            }

            function ya(a) {
                var b = {delay: oa};
                switch (typeof a) {
                    case "string":
                        b.on = !0;
                        break;
                    case "object":
                        b.on = !0;
                        b.delay = "number" != typeof a.delay ? oa : a.delay;
                        break;
                    case "boolean":
                        b.on = a;
                        break;
                    default:
                        return
                }
                g._trackLinks = b
            }

            function Ja() {
                ya(!1);
                h.on(d, "click", function (a) {
                    g._trackLinks.on && Sa(a)
                })
            }

            function Sa(a) {
                var b = J(a);
                if (b) {
                    var c = !1, d = "" + b.href, f = d ? d.split(/\?/)[0] : "", h = function (a) {
                        var e = nb(b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        N.sendClickLink(d, d == e ? "" : e, a)
                    }, l = function () {
                        return K(a,
                            b) ? g._trackLinks.delay : 0
                    };
                    if (Ma.test(f) || Ma.test(d) || A(d, da) || A(f, da))c = !0;
                    var n = m.classNameExists(b, "ym-disable-tracklink"), f = m.classNameExists(b, "ym-external-link");
                    n || (n = {ln: !0, dl: c}, f ? (n.delay = l(), h(n)) : I(B().hostname, b.hostname) ? c && (n.ln = !1, n.delay = l(), h(n)) : d && -1 != d.search(/^ *(data|javascript):/i) || (n.ut = La, n.delay = l(), h(n)))
                }
            }

            function jb(a, b) {
                function c() {
                    if (!z) {
                        s && clearTimeout(s);
                        var d = b, f;
                        f = y ? u : u + +new Date - B;
                        d -= f;
                        0 > d && (d = 0);
                        s = O(function () {
                            z = !0;
                            n(!1);
                            a()
                        }, d, "trackUserTime")
                    }
                }

                function g() {
                    y =
                        p = v = !0;
                    u += +new Date - B;
                    B = +new Date;
                    c()
                }

                function l() {
                    p || v || (u = 0);
                    B = +new Date;
                    p = v = !0;
                    y = !1;
                    c()
                }

                function m() {
                    v || (p = !0, y = !1, v = !0, c())
                }

                function n(a) {
                    for (var b = 0; b < R.length; b += 3)if (a)h.on(R[b], R[b + 1], R[b + 2]); else h.un(R[b], R[b + 1], R[b + 2])
                }

                var p = !1, v = !1, y = !0, u = 0, B = +new Date, s = null, z = !1;
                if (na)O(a, b, "trackUserTime"); else {
                    var R = [f, "blur", g, f, "focus", l, d, "click", m, d, "mousemove", m, d, "keydown", m, d, "scroll", m];
                    n(!0);
                    c()
                }
            }

            function kb(a) {
                function b() {
                    var a = B().hash.split("#")[1];
                    if ("undefined" == typeof a)return!1;
                    var e =
                        a.indexOf("?");
                    0 < e && (a = a.substring(0, e));
                    return a
                }

                var c = b();
                (function x() {
                    var d = b();
                    d !== c && (a(), c = d);
                    Fa = O(x, 200, "trackHash")
                })()
            }

            function z() {
                va = lastReferrer = Da;
                var a = {ut: ua, ad: 1 == c && f.Ya && f.Ya.Direct ? !0 : !1, wh: !0, saveRef: !0};
                N.sendAjaxHit(B().href, n(), va, a);
                Da = B().href
            }

            function G(b) {
                function k() {
                    var a = d.documentElement;
                    return Math.max(a.scrollWidth, d.body.scrollWidth, a.clientWidth)
                }

                function g(a) {
                    function b(a) {
                        a = a.getBoundingClientRect();
                        var e = d.body, c = d.documentElement, k = a.left + (f.pageXOffset || c.scrollLeft ||
                            e.scrollLeft) - (c.clientLeft || e.clientLeft || 0);
                        return{top: Math.round(a.top + (f.pageYOffset || c.scrollTop || e.scrollTop) - (c.clientTop || e.clientTop || 0)), left: Math.round(k)}
                    }

                    return a.getBoundingClientRect ? b(a) : function (a) {
                        for (var b = 0, e = 0; a;)b += parseInt(a.offsetTop), e += parseInt(a.offsetLeft), a = a.offsetParent;
                        return{top: b, left: e}
                    }(a)
                }

                function w(a) {
                    return a.toString().toUpperCase()
                }

                function n(a) {
                    if (null == a.pageX && null != a.clientX) {
                        var b = d.documentElement, e = d.body;
                        a.pageX = a.clientX + (b && b.scrollLeft || e && e.scrollLeft ||
                            0) - (b.clientLeft || 0);
                        a.pageY = a.clientY + (b && b.scrollTop || e && e.scrollTop || 0) - (b.clientTop || 0)
                    }
                    return{x: a.pageX, y: a.pageY}
                }

                function p(a) {
                    for (var b = w(a.nodeName); a.parentNode && "BODY" != b && "HTML" != b;) {
                        if ("A" == b || "INPUT" == b || "TEXTAREA" == b)return!0;
                        a = a.parentNode;
                        b = a.nodeName
                    }
                    return!1
                }

                for (var r = this, v = 0, y = null, u = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN".split(" "),
                         s = 59, z = String.fromCharCode, E = {}, A = 0; A < u.length; A++)E[u[A]] = z(s), z(s), s++;
                this.handler = function (b) {
                    var e, h = d.getElementsByTagName("body")[0];
                    if (!f.ymDisabledClickmap && !m.classNameExists(h, "ym-clickmap-ignore")) {
                        if (r._prefs.hasQuota) {
                            if (!r._prefs.quota)return;
                            r._prefs.quota--
                        }
                        var u = b.target || b.srcElement;
                        3 == u.nodeType && (u = u.parentNode);
                        h = w(u.nodeName);
                        e = n(b);
                        var q;
                        b.which || b.button === ga || (b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0);
                        q = b.which;
                        if (q = 2 != q && 3 != q || "A" == h)if (q = u.offsetHeight, q = !(0 ===
                            u.offsetWidth && 0 === q || u.style && "none" === u.style.display)) {
                            b:{
                                for (q = u; q.parentNode;) {
                                    if (m.classNameExists(q, "ym-clickmap-ignore")) {
                                        q = !0;
                                        break b
                                    }
                                    q = q.parentNode
                                }
                                q = !1
                            }
                            if (q = !q) {
                                b:{
                                    q = r._prefs.ignoreTags;
                                    for (var s = 0; s < q.length; s++)if (w(q[s]) == w(h)) {
                                        q = !0;
                                        break b
                                    }
                                    q = !1
                                }
                                q = !q && r._prefs.filter(u, h)
                            }
                        }
                        if (q) {
                            h = +new Date;
                            u = {dom: u, x: e.x, y: e.y, time: h};
                            if ((e = 50 < h - v) && !(e = !r._prefs.ignoreSameClicks)) {
                                if (e = y) {
                                    q = Math.abs(e.x - u.x);
                                    var s = Math.abs(e.y - u.y), z = u.time - e.time;
                                    e = e.dom == u.dom && 2 > q && 2 > s && 1E3 > z
                                } else e = !1;
                                e = !e
                            }
                            if (e &&
                                "MetrikaPlayer" != f.name) {
                                if (e = b.target || b.srcElement) {
                                    3 == e.nodeType && (e = e.parentNode);
                                    for (q = w(e.nodeName); e.parentNode && e.parentNode.nodeName && ("A" != q && "AREA" != q || !e.href);)e = e.parentNode, q = w(e.nodeName);
                                    e = e.href ? e : !1
                                } else e = !1;
                                e && K(b, e) && I(B().hostname, e.hostname);
                                q = n(b);
                                e = q.x;
                                q = q.y;
                                var s = b.target || b.srcElement, A = r._prefs, z = g(s), C = "";
                                b = B().href;
                                switch (A.mode) {
                                    case "fixed":
                                        C = "0";
                                        p(s) && (C += "u");
                                        break;
                                    case "centered":
                                        C = "1";
                                        z = Math.floor(k() / 2);
                                        e = e > z ? e - z + 32768 : e;
                                        p(s) && (C += "u");
                                        break;
                                    default:
                                        C = w(s.nodeName);
                                        C = "BODY" == C || "HTML" == C ? k() : s.offsetWidth;
                                        A = w(s.nodeName);
                                        "BODY" == A || "HTML" == A ? (A = d.documentElement, A = Math.max(A.scrollHeight, d.body.scrollHeight, A.clientHeight)) : A = s.offsetHeight;
                                        C || (C = 1);
                                        A || (A = 1);
                                        e = Math.floor(65535 * (e - z.left) / C);
                                        q = Math.floor(65535 * (q - z.top) / A);
                                        for (z = ""; s.parentNode && "BODY" != w(s.nodeName) && "HTML" != w(s.nodeName);) {
                                            z += E[s.nodeName] || "*";
                                            b:{
                                                for (var C = s.parentNode, D = A = 0; D < C.childNodes.length; D++)if (s.nodeName == C.childNodes[D].nodeName) {
                                                    if (s == C.childNodes[D]) {
                                                        C = A;
                                                        break b
                                                    }
                                                    A++
                                                }
                                                C = 0
                                            }
                                            z += C ||
                                                "";
                                            s = s.parentNode
                                        }
                                        C = l.trim(z, 128)
                                }
                                e = ["rn", l.random(), "x", e, "y", q, "t", Math.floor(Math.floor(+new Date - Gb) / 100), "p", C];
                                Q ? e = e.concat("wh", "1") : b = b ? b.replace(/\#.*$/, "") : b;
                                "function" == typeof r._prefs.urlFilter && (b = r._prefs.urlFilter(b));
                                b = l.trim(b, Ka);
                                e = e.join(":");
                                (new Eb({protocol: ca, counterId: a, counterType: c})).sendClick(b, e)
                            }
                            v = h;
                            y = u
                        }
                    }
                };
                this.setPrefs = function (a) {
                    function b(a, e) {
                        return!0
                    }

                    this._prefs = "undefined" == typeof a || !1 === a || !0 === a ? {filter: b, ignoreTags: [], mode: "", delay: oa, quota: 0, hasQuota: !1, ignoreSameClicks: !0} :
                    {filter: a.filter || b, ignoreTags: a.ignoreTags || [], mode: a.mode || "", delay: "undefined" == typeof a.delay ? oa : a.delay, quota: a.quota || 0, hasQuota: !!a.quota, ignoreSameClicks: "undefined" == typeof a.ignoreSameClicks, urlFilter: a.urlFilter}
                };
                this.updateStatus = function (a) {
                    switch (typeof a) {
                        case "undefined":
                            this.start(!0);
                            break;
                        case "boolean":
                            a ? this.start(a) : this.stop();
                            break;
                        case "object":
                            this.start(a)
                    }
                };
                this._start = !1;
                this.start = function (a) {
                    this.setPrefs(a);
                    if (!this._start)h.on(d, "click", this.handler);
                    this._start = !0
                };
                this.stop = function () {
                    this._start && h.un(d, "click", this.handler);
                    this._start = !1
                };
                this.start(b)
            }

            var ba = Math.round(1073741824 * Math.random()), W, ua = "", ca = aa, Da = Ha = D.href, va = "", u;
            Ya._metrika.counter || (Ya._metrika.counter = g);
            "object" == typeof a && (u = a, v = a.defer, ua = a.ut, c = a.type, b = a.params, ca = a.onlyHttps ? "https:" : aa, a = a.id);
            a = a || 0;
            /^\d+$/.test(a) || (a = 0);
            c = c || 0;
            W = a + ":" + c;
            if (Ya._metrika.counters[W])return Ya._metrika.counters[W];
            l.trim = function (a, b) {
                a = String(a).replace(/^\s+|\s+$/g, "");
                b && a.length > b && (a = a.substr(0,
                    b));
                return a
            };
            p._silverlightVersion = "";
            p.getSilverlightVersion = function () {
                if (!p._silverlightVersion)if (f.ActiveXObject)try {
                    var a = new ActiveXObject("AgControl.AgControl"), b = function (a, b, e, c) {
                        for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);)b[e] += c;
                        b[e] -= c
                    }, c = [1, 0, 0, 0];
                    b(a, c, 0, 1);
                    b(a, c, 1, 1);
                    b(a, c, 2, 1E4);
                    b(a, c, 2, 1E3);
                    b(a, c, 2, 100);
                    b(a, c, 2, 10);
                    b(a, c, 2, 1);
                    b(a, c, 3, 1);
                    p._silverlightVersion = c.join(".")
                } catch (d) {
                } else if (a = L.plugins["Silverlight Plug-In"])p._silverlightVersion = a.description;
                return p._silverlightVersion ||
                    ""
            };
            p._flashVersion = 0;
            p.getFlashVersion = function () {
                if (!p._flashVersion) {
                    var a = f.navigator;
                    if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
                        var b = a.plugins["Shockwave Flash"].description;
                        b && (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) && (p._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
                    } else if ("undefined" != typeof f.ActiveXObject)try {
                        if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                            var c =
                                b.GetVariable("$version");
                            c && (p._flashVersion = c.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, ""))
                        }
                    } catch (d) {
                    }
                }
                return p._flashVersion
            };
            p.getLanguage = function () {
                return(f.navigator && (L.language || L.browserLanguage) || "").toLowerCase()
            };
            p.getJavaEnabled = function () {
                try {
                    return L.javaEnabled()
                } catch (a) {
                    return!1
                }
            };
            l.fnv32a = function (a) {
                for (var b = 2166136261, c = 0, d = a.length; c < d; ++c)b ^= a.charCodeAt(c), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
                return b >>> 0
            };
            p.getFingerPrint = function () {
                var a = [];
                if (L.plugins && L.plugins.length)for (var b =
                    0; b < L.plugins.length; b++) {
                    var c = L.plugins[b];
                    l.mergeArrays(a, [c.name, c.version, c.description, c.filename])
                }
                if (L.mimeTypes && L.mimeTypes.length)for (b = 0; b < L.mimeTypes.length; b++)c = L.mimeTypes[b], l.mergeArrays(a, [c.type, c.description, c.suffixes]);
                return l.fnv32a(a.join(";")) + "01"
            };
            var wa = U.inherit({trimParams: !1, resource: "watch", retry: !0, postParams: ["site-info"], sendHit: function (a, b, c, d, f) {
                this._hitExt(a, b, c, d, {ut: f, ar: !0, saveRef: !0})
            }, sendAjaxHit: function (a, b, c, d) {
                this._hitExt(a, b, c, null, d)
            }, sendParams: function (a) {
                this._hitExt(B().href,
                    "", "", a, {ar: !0, pa: !0, onlyData: !0})
            }, sendGoal: function (a, b) {
                if (!/[\/&=?#]/.test(a)) {
                    var c = a ? "goal://" + B().hostname + "/" + encodeURIComponent(a) : B().href, f = n(), g = a ? B().href : d.referrer;
                    this._hitExt(c, f, g, b, {ar: !0})
                }
            }, sendClickLink: function (a, b, c) {
                this._hitExt(a, b, B().href, null, c)
            }, sendExtLink: function (a, b, c, d) {
                this._hitExt(a, "", B().href, d, {ar: !0, ln: !0, ut: La})
            }, sendFileUpload: function (a, b, c, d) {
                this._hitExt(a, "", B().href, d, {ar: !0, ln: !0, dl: !0})
            }, sendNotBounce: function (a) {
                this._hitExt(B().href, "", "", null, {cl: a,
                    ar: !0, nb: !0, onlyData: !0})
            }, sendVideoAction: function (a, b, c, d) {
                this._hitExt(c, d || "", "", null, {ar: !0, va: a, vt: +b})
            }, sendSocialClick: function (a, b, c) {
                this._hitExt(c || B().href, "", "", null, {ar: !0, sn: l.trim(a, 64), sa: l.trim(b, 64)})
            }, _hitExt: function (a, b, c, d, g, h, m, n) {
                function p(a, b) {
                    b && (v[a] = b)
                }

                g = g || {};
                h = h || {};
                if ("MetrikaPlayer" != f.name) {
                    c = "undefined" != typeof c ? c : Ha;
                    var v = {};
                    g.ar && !g.onlyData && (c = this._prepareHitUrl(c), a = this._prepareHitUrl(a));
                    g.reqNum = !0;
                    p("page-ref", l.trim(c, Ka));
                    p("page-url", l.trim(a, Ka));
                    -1 != B().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/) ? p("ut", La) : "undefined" != typeof g.ut && p("ut", l.trim(g.ut, 64));
                    if (d)if (a = l.toJSON(d), this.trimParams && a.length > Fb)var s = !0; else p("site-info", a);
                    g.saveRef && (Ha = c);
                    l.mixin(h, y(b, g, !0));
                    this.send(v, h, function () {
                        s && (new wa({protocol: this.protocol, counterType: this.counterType, counterId: this.counterId})).sendParams(d);
                        m && m.apply(n, arguments)
                    }, this)
                }
            }, _prepareHitUrl: function (a) {
                var b = B(), c = b.host, b = b.href;
                if (!a)return b;
                if (-1 !=
                    a.search(/^\w+:\/\//))return a;
                var d = a.charAt(0);
                if ("?" == d)return d = b.search(/\?/), -1 == d ? b + a : b.substr(0, d) + a;
                if ("#" == d)return d = b.search(/#/), -1 == d ? b + a : b.substr(0, d) + a;
                if ("/" == d) {
                    if (d = b.search(c), -1 != d)return b.substr(0, d + c.length) + a
                } else return c = b.split("/"), c[c.length - 1] = a, c.join("/");
                return a
            }}), Cb = xa.inherit({id: "script", request: function (a, b, c, g) {
                var h = "_ymjsp" + l.random(), m = d.createElement("script");
                f[h] = E(function (a) {
                        try {
                            delete f[h]
                        } catch (b) {
                            f[h] = ga
                        }
                        c.call(g, !0, a);
                        m.parentNode && m.parentNode.removeChild(m)
                    },
                    "transport.script");
                m.type = "text/javascript";
                m.src = this._buildUrl(a, l.mixin({wmode: 5, callback: h}, b));
                a = d.getElementsByTagName("head")[0];
                a.insertBefore(m, a.firstChild);
                return!0
            }}), Db = wa.inherit({transports: [Cb], trimParams: !0, sendHit: function (a, b, c, d, g, f, h, l, m) {
                var n = {};
                f && (n.vc = f);
                h && (n.pr = 1);
                this._hitExt(a, b, c, d, g, n, l, m)
            }}), Eb = U.inherit({resource: "clmap", retry: !0, transports: [Va], sendClick: function (a, b, c, d) {
                this.send({"page-url": a, "pointer-click": b}, {}, c, d)
            }}), Y = [];
            U.retransmit();
            var N = new wa({protocol: ca,
                counterType: c, counterId: a}), T;
            g.replacePhones = E(function () {
                try {
                    var b = (new ka({counterId: a})).read("mp2_substs");
                    if (b) {
                        var c = (new Function("return " + b))();
                        c && ha(c, !0)
                    }
                } catch (d) {
                }
            }, "counter.replacePhones");
            g.reachGoal = E(function (b, c) {
                za.log("Reach goal. Counter: " + a + ". Goal id: " + b);
                N.sendGoal(b, c);
                return!0
            }, "counter.reachGoal");
            g.trackLinks = E(ya, "counter.trackLinks");
            g.hit = E(function (b, c, d, g, f) {
                b && (za.log("PageView. Counter " + a + ". URL: " + b + ". Referer: " + d), N.sendHit(b, c, d, g, f))
            }, "counter.hit");
            g.params =
                E(function (b) {
                    if (b) {
                        var c = arguments.length;
                        if (1 < c) {
                            for (var d = {}, g = d, f = 0; f < c - 1; f++) {
                                var h = "" + arguments[f];
                                g[h] = {};
                                f < c - 2 && (g = g[h])
                            }
                            g[h] = arguments[c - 1];
                            b = d
                        }
                        za.log("User params. Counter " + a + ". Params: ", b);
                        N.sendParams(b)
                    }
                }, "counter.params");
            g.file = E(function (a, b, c, d) {
                a && N.sendFileUpload(a, b, c, d)
            }, "counter.file");
            g.extLink = E(function (a, b, c, d) {
                a && N.sendExtLink(a, b, c, d)
            }, "counter.extLink");
            g.notBounce = E(function () {
                var a = 0;
                Na && pa && (a = pa - Na);
                N.sendNotBounce(a)
            }, "counter.notBounce");
            var da = [];
            g.addFileExtension =
                function (a) {
                    "string" == typeof a ? da.push(a) : da = da.concat(a)
                };
            g.clickmap = function (a) {
                g._clickmap ? g._clickmap.updateStatus(a) : g._clickmap = new G(a)
            };
            g.accurateTrackBounce = function (b) {
                "number" != typeof b && (b = 15E3);
                if (!g._isAccurateTrackBounce) {
                    g._isAccurateTrackBounce = !0;
                    var c = new ea({counterId: a}), f = c.get("lastHit");
                    c.set("lastHit", +new Date);
                    ((c = c.get("lastHit")) && (!f || f < c - 18E5) || !s(d.referrer, B().href) || 0.1 > Math.random()) && jb(function () {
                        g.notBounce()
                    }, b)
                }
            };
            var Fa = null, Q = !1;
            g.trackHash = function (a) {
                if (!1 ===
                    a)Q && ("onhashchange"in f ? h.un(f, "hashchange", z) : clearInterval(Fa), Q = !1); else if (!Q) {
                    if ("onhashchange"in f)h.on(f, "hashchange", z); else kb(z);
                    Q = !0
                }
                g._trackHash = Q
            };
            g.video = E(function (a, b, c, d) {
                var g = ["end", "play", "pause", "seek"];
                if (a && c) {
                    a:{
                        for (var f = 0, h = g.length; f < h; f += 1)if (a === g[f]) {
                            g = f;
                            break a
                        }
                        g = -1
                    }
                    -1 !== g && N.sendVideoAction(a, b, c, d)
                }
            }, "counter.video");
            g.social = E(function (a, b, c) {
                a && b && N.sendSocialClick(a, b, c)
            }, "counter.social");
            g.enableAll = function () {
                g.trackLinks(!0);
                g.clickmap(!0);
                g.accurateTrackBounce()
            };
            g.uploadPage = function () {
            };
            g._performanceTiming = fa;
            if (a)h.onDocumentVisible(Ia)
        }, "init")()
    };
    f.Ya.Metrika.remoteCtrlInited || (f.Ya.Metrika.remoteCtrlInited = !0, new Aa);
    f.Ya.Metrika.counters = function () {
        var a = [];
        l.forEachKey(f.Ya._metrika.counters, function (b, c) {
            var d = b.split(":");
            a.push({id: +d[0], type: +d[1], accurateTrackBounce: c._isAccurateTrackBounce, clickmap: c._clickmap && c._clickmap._start, oldCode: !!f.ya_cid, trackHash: !!c._trackHash, trackLinks: c._trackLinks && c._trackLinks.on, webvisor: !!c._webvisor})
        });
        return a
    };
    f.ya_cid && new Ya.Metrika(f.ya_cid, f.ya_params, f.ya_class);
    f.ya_cid && !f.ya_hit && (f.ya_hit = function (a, b) {
        Ya._metrika.counter && Ya._metrika.counter.reachGoal(a, b)
    });
    A = f.yandex_metrika_callback;
    K = f.yandex_metrika_callbacks;
    "function" == typeof A && A();
    if ("object" == typeof K)for (A = 0; A < K.length; A++)if (X = K[A])K[A] = null, X();
    sa("yandex_metrika_callback");
    sa("yandex_metrika_callbacks");
    K = ["link", "click", "scroll", "res"];
    for (A = 0; A < K.length; A++)if (X = K[A] + "map", -1 != D.href.search("ym_playback=" + X)) {
        ta(aa + "//metrika.yandex.ru/js/" +
            X + "/_loader.js");
        break
    }
    f.Ya.Metrika.informer = function (a) {
        var b = !!Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        b || ta(aa + "//mc.yandex.ru/metrika/informer.js")
    };
    (function () {
        var a = p.getJScriptVersion();
        if (!a || 5.8 < a)if ("complete" == d.readyState)ha(); else h.on(f, "load", ha)
    })();
    (function () {
        var a = function () {
            var a = d.getElementsByTagName("body")[0], b = d.createElement("iframe");
            b.src = "http://awaps.yandex.ru/0/2153/0.htm?ad=165746&pl=93829&rnd=" + l.random();
            b.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;visibility:hidden");
            a.appendChild(b);
            O(function () {
                a.removeChild(b)
            }, 1E4, "ad")
        }, b = function () {
            f.removeEventListener("load", b, !1);
            a()
        }, c = f.performance;
        l.random(200) || Ya._metrika.isAd || (Ya._metrika.isAd = !0, "http:" == aa && "object" == typeof c && f.addEventListener && (c.timing && c.timing.loadEventStart ? a() : f.addEventListener("load", b, !1)))
    })()
})(this, this.document);