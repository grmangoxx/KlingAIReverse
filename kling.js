const express = require('express');
const { JSDOM } = require('jsdom');
const app = express();
const port = 3000;

const dom = new JSDOM('<!DOCTYPE html><p>Hello World!</p>');
const window = dom.window;
const document = window.document;
const navigator = window.navigator;
const location = window.location;
const screen = window.screen;

navigator.sendBeacon = function () {};
window.HTMLCanvasElement.prototype.getContext = () => {};

var Jose = function(e) {
    var t = {};
    function r(n) {
        var i;
        return (t[n] || (i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        },
        e[n].call(i.exports, i, i.exports, r),
        i.l = !0,
        i)).exports
    }
    return r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = 4)
}([function(e, t) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    (function() {
        var e = Object.create
          , n = [];
        t.prototypeOf = function(e) {
            return null == e ? null : e.__proto__
        }
        ,
        t.create = e,
        t.hasProp = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t) || "object" === r(e[t]) && void 0 !== e[t]
        }
        ,
        t.isArray = function() {
            if ("function" != typeof Array.isArray)
                return obj instanceof Array
        }
        ,
        t.defProp = function(e, t, r) {
            return Object.defineProperty(e, t, r)
        }
        ,
        t.checkIdentifier = function(e) {
            return n.includes(e)
        }
        ,
        t.isNaNP = function(e) {
            return e != e
        }
    }
    ).call(this)
}
, function(e, t) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (i) {
        "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (n = window)
    }
    e.exports = n
}
, function(e, t, r) {
    (function() {
        var e = r(7).VmError
          , n = {}.hasOwnProperty
          , i = function() {
            var t, r = s, i = e;
            for (t in i)
                n.call(i, t) && (r[t] = i[t]);
            function o() {
                this.constructor = r
            }
            function s(e, t) {
                this.value = e,
                this.message = null != t ? t : "iterator has stopped"
            }
            return o.prototype = i.prototype,
            r.prototype = new o,
            r.__super__ = i.prototype,
            s.display = "StopIteration",
            s
        }()
          , o = (s.prototype.next = function() {
            if (this.index >= this.elements.length)
                throw new i("array over");
            return this.elements[this.index++]
        }
        ,
        s);
        function s(e) {
            this.elements = e,
            this.index = 0
        }
        t.StopIteration = i,
        t.ArrayIterator = o
    }
    ).call(this)
}
, function(e, t, r) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    (function() {
        var e = {}.hasOwnProperty
          , i = r(0).isArray
          , o = (s.prototype.run = function() {
            for (var e = this.callStack[this.depth], t = e.error; 0 <= this.depth && e && !this.paused; )
                if ((e = t ? this.unwind(t) : e).run(),
                (t = e.error)instanceof Error && this.injectStackTrace(t),
                e.done()) {
                    if (e.guards.length) {
                        var r = e.guards.pop();
                        if (r.finalizer) {
                            e.ip = r.finalizer,
                            e.exitIp = r.end,
                            e.paused = !1;
                            continue
                        }
                    }
                    e.construct && "object" !== (r = n(this.rv)) && "function" !== r && (this.rv = e.scope.get(0)),
                    (e = this.popFrame()) && !t && (e.evalStack.push(this.rv),
                    this.rv = void 0)
                } else
                    t = (e = this.callStack[this.depth]).error;
            if (this.timedOut() && (t = new Error(this),
            this.injectStackTrace(t)),
            t)
                throw t
        }
        ,
        s.prototype.unwind = function(e) {
            for (var t = this.callStack[this.depth]; t; ) {
                t.error = e;
                var r = t.ip - 1
                  , n = t.guards.length;
                if (n && (n = t.guards[n - 1]).start <= r && r <= n.end) {
                    if (null !== n.handler)
                        if (r <= n.handler)
                            t.evalStack.push(e),
                            t.error = null,
                            t.ip = n.handler;
                        else {
                            if (!(n.finalizer && t.ip <= n.finalizer)) {
                                t = this.popFrame();
                                continue
                            }
                            t.ip = n.finalizer
                        }
                    else
                        t.ip = n.finalizer;
                    return t.paused = !1,
                    t
                }
                t = this.popFrame()
            }
            throw e
        }
        ,
        s.prototype.injectStackTrace = function(e) {
            var t, r, n, o, s, a, c, l = [], u = 0;
            for (this.depth > this.maxTraceDepth && (u = this.depth - this.maxTraceDepth),
            r = n = s = this.depth,
            a = u; s <= a ? n <= a : a <= n; r = s <= a ? ++n : --n)
                "<anonymous>" === (o = (t = this.callStack[r]).script.name) && t.fname && (o = t.fname),
                l.push({
                    at: {
                        name: o,
                        filename: t.script.filename
                    },
                    line: t.line,
                    column: t.column
                });
            if (e.trace) {
                for (c = e.trace; i(c[c.length - 1]); )
                    c = c[c.length - 1];
                c.push(l)
            } else
                e.trace = l;
            return e.stack = e.toString()
        }
        ,
        s.prototype.pushFrame = function(e, t, r, n, i, o, s) {
            if (null == o && (o = "<anonymous>"),
            null == s && (s = !1),
            this.checkCallStack())
                return (r = new h(r,e.localNames,e.localLength)).set(0, t),
                t = new a(this,e,r,this.realm,o,s),
                i && t.evalStack.push(i),
                n && t.evalStack.push(n),
                this.callStack[++this.depth] = t
        }
        ,
        s.prototype.checkCallStack = function() {
            return this.depth !== this.maxDepth || (this.callStack[this.depth].error = new Error("maximum call stack size exceeded"),
            this.pause(),
            !1)
        }
        ,
        s.prototype.popFrame = function() {
            var e = this.callStack[--this.depth];
            return e && (e.paused = !1),
            e
        }
        ,
        s.prototype.pause = function() {
            return this.paused = this.callStack[this.depth].paused = !0
        }
        ,
        s.prototype.resume = function(e) {
            if (this.timeout = null != e ? e : -1,
            this.paused = !1,
            this.callStack[this.depth].paused = !1,
            this.run(),
            !this.paused)
                return this.rexp
        }
        ,
        s.prototype.timedOut = function() {
            return 0 === this.timeout
        }
        ,
        s.prototype.send = function(e) {
            return this.callStack[this.depth].evalStack.push(e)
        }
        ,
        s.prototype.done = function() {
            return -1 === this.depth
        }
        ,
        s);
        function s(e, t) {
            this.realm = e,
            this.timeout = null != t ? t : -1,
            this.maxDepth = 1e3,
            this.maxTraceDepth = 50,
            this.callStack = [],
            this.evalStack = null,
            this.depth = -1,
            this.yielded = this.rv = void 0,
            this.paused = !1,
            this.r1 = this.r2 = this.r3 = null,
            this.rexp = null
        }
        c.prototype.run = function() {
            for (var e = this.script.instructions; this.ip !== this.exitIp && !this.paused; )
                e[this.ip++].exec(this, this.evalStack, this.scope, this.realm);
            var t = this.evalStack.len();
            if (!this.paused && !this.error && 0 !== t)
                throw new Error("Evaluation stack has " + t + " items after execution")
        }
        ,
        c.prototype.done = function() {
            return this.ip === this.exitIp
        }
        ,
        c.prototype.setLine = function(e) {
            this.line = e
        }
        ,
        c.prototype.setColumn = function(e) {
            this.column = e
        }
        ;
        var a = c;
        function c(e, t, r, n, i, o) {
            this.fiber = e,
            this.script = t,
            this.scope = r,
            this.realm = n,
            this.fname = i,
            this.construct = null != o && o,
            this.evalStack = new l(this.script.stackSize,this.fiber),
            this.ip = 0,
            this.exitIp = this.script.instructions.length,
            this.paused = !1,
            this.finalizer = null,
            this.guards = [],
            this.rv = void 0,
            this.line = this.column = -1
        }
        u.prototype.push = function(e) {
            if (this.idx === this.array.length)
                throw new Error("maximum evaluation stack size exceeded");
            return this.array[this.idx++] = e
        }
        ,
        u.prototype.pop = function() {
            return this.array[--this.idx]
        }
        ,
        u.prototype.top = function() {
            return this.array[this.idx - 1]
        }
        ,
        u.prototype.len = function() {
            return this.idx
        }
        ,
        u.prototype.clear = function() {
            return this.idx = 0
        }
        ;
        var l = u;
        function u(e, t) {
            this.fiber = t,
            this.array = new Array(e),
            this.idx = 0
        }
        d.prototype.get = function(e) {
            return this.data[e]
        }
        ,
        d.prototype.set = function(e, t) {
            return this.data[e] = t
        }
        ,
        d.prototype.name = function(t) {
            var r, n = this.names;
            for (r in n)
                if (e.call(n, r) && n[r] === t)
                    return parseInt(r);
            return -1
        }
        ;
        var h = d;
        function d(e, t, r) {
            this.parent = e,
            this.names = t,
            this.data = new Array(r)
        }
        f.prototype.get = function(e) {
            return this.object[e]
        }
        ,
        f.prototype.set = function(e, t) {
            return this.object[e] = t
        }
        ,
        f.prototype.has = function(e) {
            return e in this.object
        }
        ;
        var p = f;
        function f(e, t) {
            this.parent = e,
            this.object = t
        }
        t.Fiber = o,
        t.Scope = h,
        t.WithScope = p
    }
    ).call(this)
}
, function(e, t, r) {
    (r = new (r(5))).eval('["<script>",0,[[22]8false,15,null17]anonymous[,4,3163152,14[30721[,"$encode"1[8getCatVersi76,2049753379577389,88791625994-6-439,56919,018-52916763404582,-3064843563"c2true[j,8"ObjectjmpOnw_ms"04D"w2KsGuard6otDeviceInfo,b2sa_h2subs_h2b_xcAi,M"rdom70"tfloor"[0bx628$E"pro[1t"urlkpn90fbugnsn54mes7t0l"[l"vOu_"iIxky"tupRtEoHUDR4Baun1$HEhxf_nadniinpurvcavsdk"ou"SIG4签名信息:epr错误ng"t8Ar25"6toS0[5"3"DGuwxNYwyaAEhW5J.0."2'),
    e.exports = r
}
, function(e, t, r) {
    (function(t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        (function(i) {
            var o = r(6)
              , s = r(8)
              , a = r(3).Fiber
              , c = r(11)
              , l = r(13)
              , u = r(14);
            function h(e) {
                this.realm = new o(e),
                this.realm.global.startupRandom = (new Date).getTime(),
                this.realm.global.count = 100,
                (new l).register(),
                (new u).register(),
                "object" !== ("undefined" == typeof window ? "undefined" : n(window)) && "object" !== (void 0 === t ? "undefined" : n(t)) || (e = r(15),
                this.realm.global.KsGuard = new e)
            }
            h.prototype.eval = function(e, t) {
                e = (new c).unzip(e),
                this.run(h.fromJSON(JSON.parse(e)), t),
                this.realm.global.startupEnd = (new Date).getTime()
            }
            ,
            h.prototype.run = function(e, t) {
                if ((e = this.createFiber(e, t)).run(),
                !e.paused)
                    return e.rexp
            }
            ,
            h.prototype.call = function(e, r) {
                var n = window || t;
                if ("$encode" === e)
                    try {
                        throw new Error
                    } catch (o) {
                        var i = o.stack.length;
                        n && (n.SECS = {
                            s: 100 < i ? o.stack.substr(i - 100, 100) : o.stack,
                            c: this.realm.global.count
                        })
                    }
                return this.realm.global[e].apply(this, r)
            }
            ,
            h.prototype.createFiber = function(e, t) {
                return (t = new a(this.realm,t)).pushFrame(e, this.realm.global),
                t
            }
            ,
            h.fromJSON = s.fromJSON,
            e.exports = h
        }
        ).call(this)
    }
    ).call(this, r(1))
}
, function(e, t, r) {
    (function(t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        (function() {
            var i, o = {}.hasOwnProperty, s = (i = r(0)).prototypeOf, a = i.hasProp, c = (i = r(2)).ArrayIterator, l = i.StopIteration;
            function u(e) {
                var r, i, u = {
                    isBrowser: "undefined" == typeof window,
                    window: "undefined" == typeof window ? t : window,
                    localStorage: "object" === ("undefined" == typeof localStorage ? "undefined" : n(localStorage)) ? localStorage : {},
                    sessionStorage: "object" === ("undefined" == typeof sessionStorage ? "undefined" : n(sessionStorage)) ? sessionStorage : {},
                    document: "object" === ("undefined" == typeof document ? "undefined" : n(document)) ? document : {},
                    undefined: void 0,
                    Object: Object,
                    Function: Function,
                    Number: Number,
                    Boolean: Boolean,
                    String: String,
                    Array: Array,
                    Int8Array: Int8Array,
                    Int32Array: Int32Array,
                    Uint8Array: Uint8Array,
                    Date: Date,
                    RegExp: RegExp,
                    Error: Error,
                    StopIteration: l,
                    Math: Math,
                    JSON: JSON,
                    encodeURIComponent: encodeURIComponent,
                    unescape: unescape,
                    escape: escape,
                    decodeURIComponent: decodeURIComponent,
                    isNaN: isNaN,
                    Infinity: 1 / 0,
                    NaN: NaN,
                    parseInt: parseInt,
                    parseFloat: parseFloat,
                    isFinite: isFinite,
                    encodeURI: encodeURI,
                    decodeURI: decodeURI,
                    TypeError: TypeError,
                    URIError: URIError,
                    SyntaxError: SyntaxError,
                    ReferenceError: ReferenceError,
                    RangeError: RangeError,
                    EvalError: EvalError,
                    eval: eval,
                    console: console
                };
                for (r in this.has = function(e, t) {
                    return null != e && (!!a(e, t) || this.has(s(e), t))
                }
                ,
                this.get = function(e, t) {
                    if (null != e)
                        return e[t]
                }
                ,
                this.set = function(e, t, r) {
                    var i = n(e);
                    return ("object" === i || "function" === i) && (e[t] = r),
                    r
                }
                ,
                this.del = function(e, t) {
                    var r = n(e);
                    return "object" !== r && "function" !== r || delete e[t]
                }
                ,
                this.instanceOf = function(e, t) {
                    var r;
                    return null != t && ("object" === (r = n(t)) || "function" === r) && t instanceof e
                }
                ,
                this.enumerateKeys = function(e) {
                    var t, r = [];
                    for (t in e)
                        "__mdid__" !== t && r.push(t);
                    return new c(r)
                }
                ,
                e)
                    o.call(e, r) && (i = e[r],
                    u[r] = i);
                this.global = u
            }
            u.prototype.inv = function(e) {
                return -e
            }
            ,
            u.prototype.lnot = function(e) {
                return !e
            }
            ,
            u.prototype.ladd = function(e) {
                return +e
            }
            ,
            u.prototype.not = function(e) {
                return ~e
            }
            ,
            u.prototype.inc = function(e) {
                return ++e
            }
            ,
            u.prototype.dec = function(e) {
                return e - 1
            }
            ,
            u.prototype.add = function(e, t) {
                return t + e
            }
            ,
            u.prototype.sub = function(e, t) {
                return t - e
            }
            ,
            u.prototype.mul = function(e, t) {
                return t * e
            }
            ,
            u.prototype.div = function(e, t) {
                return t / e
            }
            ,
            u.prototype.mod = function(e, t) {
                return t % e
            }
            ,
            u.prototype.shl = function(e, t) {
                return t << e
            }
            ,
            u.prototype.sar = function(e, t) {
                return t >> e
            }
            ,
            u.prototype.shr = function(e, t) {
                return t >>> e
            }
            ,
            u.prototype.or = function(e, t) {
                return t | e
            }
            ,
            u.prototype.and = function(e, t) {
                return t & e
            }
            ,
            u.prototype.xor = function(e, t) {
                return t ^ e
            }
            ,
            u.prototype.ceq = function(e, t) {
                return t == e
            }
            ,
            u.prototype.cneq = function(e, t) {
                return t != e
            }
            ,
            u.prototype.cid = function(e, t) {
                return t === e
            }
            ,
            u.prototype.cnid = function(e, t) {
                return t !== e
            }
            ,
            u.prototype.lt = function(e, t) {
                return t < e
            }
            ,
            u.prototype.lte = function(e, t) {
                return t <= e
            }
            ,
            u.prototype.gt = function(e, t) {
                return e < t
            }
            ,
            u.prototype.gte = function(e, t) {
                return e <= t
            }
            ,
            e.exports = u
        }
        ).call(this)
    }
    ).call(this, r(1))
}
, function(e, t, r) {
    function n(e, t) {
        null == t && (t = ""),
        t += "    ";
        for (var r = "", o = 0; o < e.length; o++) {
            var s, a, c, l = e[o];
            i(l) ? r = (r += "\n\n" + t + "Rethrown:") + n(l, t) : (s = l.line,
            a = l.column,
            c = l.at.name,
            l = l.at.filename,
            r += c ? "\n" + t + "at " + c + " (" + l + ":" + s + ":" + a + ")" : "\n" + t + "at " + l + ":" + s + ":" + a)
        }
        return r
    }
    var i = r(0).isArray;
    function o(e) {
        this.trace = null,
        this.message = e
    }
    o.prototype.toString = function() {
        var e = this.constructor.display + ": " + this.message;
        return this.trace && (e += n(this.trace)),
        e
    }
    ,
    o.prototype.stackTrace = function() {
        return this.toString()
    }
    ,
    t.VmError = o
}
, function(e, t, r) {
    (function() {
        function t(e) {
            var t = e.lastIndexOf("/")
              , r = e.slice(0, t);
            e = e.slice(t + 1);
            return new RegExp(r,e)
        }
        var n = r(9)
          , i = (o.fromJSON = function e(r) {
            for (var o = function(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    for (var i = e[r], o = n[i[0]], s = [], a = 1, c = 1, l = i.length; 1 <= l ? c < l : l < c; a = 1 <= l ? ++c : --c)
                        s.push(i[a]);
                    o = new o(s.length ? s : null),
                    t.push(o)
                }
                return t
            }(r[2]), s = [], a = r[3], c = 0; c < a.length; c++) {
                var l = a[c];
                s.push(e(l))
            }
            for (var u = r[4], h = u.length, d = [], p = r[5], f = 0; f < p.length; f++) {
                var m = p[f];
                d.push({
                    start: -1 !== m[0] ? m[0] : null,
                    handler: -1 !== m[1] ? m[1] : null,
                    finalizer: -1 !== m[2] ? m[2] : null,
                    end: -1 !== m[3] ? m[3] : null
                })
            }
            for (var g = r[6], _ = r[7], v = [], y = r[8], E = 0; E < y.length; E++) {
                var b = y[E];
                v.push(t(b))
            }
            return new i(null,null,o,s,u,h,d,g,_,v,null)
        }
        ,
        o);
        function o(e, t, r, n, i, o, s, a, c, l, u) {
            this.filename = e,
            this.name = t,
            this.instructions = r,
            this.scripts = n,
            this.localNames = i,
            this.localLength = o,
            this.guards = s,
            this.stackSize = a,
            this.strings = c,
            this.regexps = l,
            this.source = u
        }
        e.exports = i
    }
    ).call(this)
}
, function(module, exports, __webpack_require__) {
    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    (function() {
        var ref = __webpack_require__(2)
          , StopIteration = ref.StopIteration
          , ref1 = __webpack_require__(0);
        ref1.defProp;
        var hasProp = ref1.hasProp
          , ref3 = __webpack_require__(3)
          , Fiber = ref3.Fiber
          , Scope = ref3.Scope
          , WithScope = ref3.WithScope
          , OpcodeClassFactory = function() {
            var e = 0;
            return function(t, r, n) {
                function i(e) {
                    e && (this.args = e)
                }
                return i.prototype.id = e++,
                i.prototype.exec = r,
                i.prototype.calculateFactor = n || function() {
                    return 2
                }
                ,
                i
            }
        }();
        __webpack_require__(10);
        var Op = function(e, t, r) {
            return OpcodeClassFactory(e, t, r)
        }
          , opcodes = [new Op("",function(e, t, r) {
            return ret(e)
        }
        ), new Op("",function(e, t, r) {
            return t.pop()
        }
        ), new Op("",function(e, t, r) {
            return t.push(t.top())
        }
        ), new Op("",function(e, t, r) {
            var n = t.pop()
              , i = t.pop();
            return t.push(n),
            t.push(i)
        }
        ), new Op("",function(e, t, r) {
            return e.fiber.rv = t.pop(),
            ret(e)
        }
        ), new Op("",function(e, t) {
            return e.paused = !0
        }
        ), new Op("",function(e, t) {
            return e.fiber.yielded = t.pop(),
            e.fiber.pause()
        }
        ), new Op("",function(e, t, r) {
            return throwErr(e, t.pop())
        }
        ), new Op("",function(e) {
            return e.guards.push(e.script.guards[this.args[0]])
        }
        ), new Op("",function(e) {
            var t = e.guards[e.guards.length - 1];
            if (e.script.guards[this.args[0]] === t)
                return e.guards.pop()
        }
        ), new Op("",function(e, t, r) {
            return e.fiber.r1 = t.pop()
        }
        ), new Op("",function(e, t, r) {
            return e.fiber.r2 = t.pop()
        }
        ), new Op("",function(e, t, r) {
            return e.fiber.r3 = t.pop()
        }
        ), new Op("",function(e, t, r) {
            return t.push(e.fiber.r1)
        }
        ), new Op("",function(e, t, r) {
            return t.push(e.fiber.r2)
        }
        ), new Op("",function(e, t, r) {
            return t.push(e.fiber.r3)
        }
        ), new Op("",function(e, t, r) {
            return t.push(+e.fiber.r3)
        }
        ), new Op("",function(e, t, r) {
            return t.fiber.rexp = t.pop()
        }
        ), new Op("",function(e, t, r) {
            return callm(e, 0, "iterator", t.pop())
        }
        ), new Op("",function(e, t, r, n) {
            return t.push(n.enumerateKeys(t.pop()))
        }
        ), new Op("",function(e, t, r) {
            if (callm(e, 0, "next", t.pop()),
            e.error instanceof StopIteration)
                return e.error = null,
                e.paused = !1,
                e.ip = this.args[0]
        }
        ), new Op("",function(e, t, r) {
            if (r.set(1, t.pop()),
            t = t.pop(),
            this.args[0])
                return r.set(2, t)
        }
        ), new Op("",function(e, t, r, n) {
            return t.push(n.global)
        }
        ), new Op("",function(e, t, r, n) {
            var i = this.args[0]
              , o = this.args[1]
              , s = r.get(1);
            if (i < s.length)
                return r.set(o, Array.prototype.slice.call(s, i))
        }
        ), new Op("",function(e, t, r) {
            return call(e, this.args[0], t.pop(), null, null, !0)
        }
        ), new Op("",function(e, t, r) {
            return call(e, this.args[0], t.pop(), null, this.args[1])
        }
        ), new Op("",function(e, t, r) {
            return callm(e, this.args[0], t.pop(), t.pop(), this.args[1])
        }
        ), new Op("",function(e, t, r, n) {
            var i = t.pop()
              , o = t.pop();
            return null == i ? throwErr(e, new TypeError("Cannot read property '" + o + "' of " + i)) : "function" == typeof i && "length" === o && void 0 !== i.originFnLength ? t.push(n.get(i, "originFnLength")) : t.push(n.get(i, o))
        }
        ), new Op("",function(e, t, r, n) {
            var i = t.pop()
              , o = t.pop()
              , s = t.pop();
            return null == i ? throwErr(e, new TypeError("Cannot set property '" + o + "' of " + i)) : Object.isExtensible(i) || "__proto__" !== o ? t.push(n.set(i, o, s)) : throwErr(e, new Error("#<Object> is not extensible at set __proto__[as __proto__]"))
        }
        ), new Op("",function(e, t, r, n) {
            var i = t.pop()
              , o = t.pop();
            return null == i ? throwErr(e, new Error("Cannot convert null to object")) : t.push(n.del(i, o))
        }
        ), new Op("",function(e, t, r) {
            try {
                for (var n = this.args[0], i = this.args[1], o = r; n--; )
                    o = o.parent;
                return t.push(o.get(i))
            } catch (s) {
                return throwErr(e, s)
            }
        }
        ), new Op("",function(e, t, r) {
            for (var n = this.args[0], i = this.args[1], o = r; n--; )
                o = o.parent;
            return t.push(o.set(i, t.pop()))
        }
        ), new Op("",function(e, t, r, n) {
            try {
                for (var i, o = this.args[0]; r instanceof WithScope; ) {
                    if (r.has(o))
                        return t.push(r.get(o));
                    r = r.parent
                }
                for (; r instanceof Scope; ) {
                    if (0 <= (i = r.name(o)))
                        return t.push(r.get(i));
                    r = r.parent
                }
                return hasProp(n.global, o) || this.args[1] ? t.push(n.global[o]) : throwErr(e, new Error(o + " is not defined"))
            } catch (s) {
                return throwErr(e, s)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                for (var i, o = this.args[0], s = t.pop(); r instanceof WithScope; ) {
                    if (r.has(o))
                        return t.push(r.set(o, s));
                    r = r.parent
                }
                for (; r instanceof Scope; ) {
                    if (0 <= (i = r.name(o)))
                        return t.push(r.set(i, s));
                    r = r.parent
                }
                return t.push(n.global[o] = s)
            } catch (a) {
                return throwErr(e, a)
            }
        }
        ), new Op("",function(e, t, r, n) {
            return hasProp(n.global, this.args[0]) || this.args[1] ? t.push(n.global[this.args[0]]) : "this" === this.args[0] ? t.push(n.global) : throwErr(e, new Error(this.args[0] + " is not defined"))
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.global[this.args[0]] = t.pop())
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e) {
            return e.scope = new Scope(e.scope,e.script.localNames,e.script.localLength)
        }
        ), new Op("",function(e) {
            return e.scope = e.scope.parent
        }
        ), new Op("",function(e, t) {
            return e.scope = new WithScope(e.scope,t.pop())
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.inv(t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.lnot(t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.ladd(t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.not(t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.inc(t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.dec(t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.add(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.sub(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.mul(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.div(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.mod(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.shl(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.sar(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.shr(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.or(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.and(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.xor(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.ceq(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.cneq(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.cid(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.cnid(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.lt(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.lte(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.gt(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.gte(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.has(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(n.instanceOf(t.pop(), t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t, r, n) {
            try {
                return t.push(_typeof(t.pop()))
            } catch (i) {
                return throwErr(e, i)
            }
        }
        ), new Op("",function(e, t) {
            return t.pop(),
            t.push(void 0)
        }
        ), new Op("",function(e, t, r) {
            return e.ip = this.args[0]
        }
        ), new Op("",function(e, t, r) {
            if (t.pop())
                return e.ip = this.args[0]
        }
        ), new Op("",function(e, t, r) {
            if (!t.pop())
                return e.ip = this.args[0]
        }
        ), new Op("",function(e, t) {
            return t.push(void 0)
        }
        ), new Op("",function(e, t, r) {
            return t.push(this.args[0])
        }
        ), new Op("",function(e, t, r) {
            return t.push(this.args[0] ? 1 / 0 : -1 / 0)
        }
        ), new Op("",function(e, t, r) {
            return t.push(NaN)
        }
        ), new Op("",function(e, t, r) {
            return t.push(-0)
        }
        ), new Op("",function(e, t, r) {
            return t.push(e.script.strings[this.args[0]])
        }
        ), new Op("",function(e, t, r, n) {
            return t.push(e.script.regexps[this.args[0]], n)
        }
        ), new Op("",function(e, t, r, n) {
            for (var i = this.args[0], o = {}; i--; ) {
                var s = t.pop()
                  , a = t.pop();
                o.hasOwnProperty(s) || n.set(o, s, a)
            }
            return t.push(o)
        }
        ), new Op("",function(e, t, r, n) {
            for (var i = this.args[0], o = new Array(i); i--; )
                o[i] = t.pop();
            return t.push(o)
        }
        ), new Op("",function(e, t, r, n) {
            var i = this.args[0];
            return t.push(createFunction(e.script.scripts[i], r, n, this.args[1]))
        }
        ), new Op("",function(e) {
            return e.setLine(this.args[0])
        }
        ), new Op("",function(e) {
            return e.setColumn(this.args[0])
        }
        ), new Op("",function(e, t, r) {
            return debug()
        }
        )]
          , callm = function(e, t, r, n, i) {
            var o, s = e.evalStack, a = e.realm;
            return null == n ? throwErr(e, new Error("Cannot call method '" + r + "' of " + (void 0 === n ? "undefined" : "null"))) : (o = n.constructor.name || "Object",
            (a = a.get(n, r))instanceof Function ? call(e, t, a, n) : null == a ? (s.pop(),
            throwErr(e, new Error("Object #<" + o + "> has no method '" + r + "'"))) : (s.pop(),
            throwErr(e, new Error("Property '" + r + "' of object #<" + o + "> is not a function"))))
        }
          , call = function(e, t, r, n, i, o) {
            if ("function" != typeof r)
                return throwErr(e, new Error("object is not a function"));
            for (var s = e.evalStack, a = e.fiber, c = e.realm, l = {
                length: t,
                callee: r
            }; t; )
                l[--t] = s.pop();
            n = void 0 === n ? c.global : n,
            l = Array.prototype.slice.call(l);
            try {
                var u = o ? createNativeInstance(r, l) : r.apply(n, l);
                if (!a.paused)
                    return s.push(u)
            } catch (h) {
                throwErr(e, h)
            }
        }
          , createFunction = function(e, t, r, n, i) {
            function o() {
                var n, i, s, a = !1;
                if ((i = o.__fiber__) ? (i.callStack[i.depth].paused = !0,
                o.__fiber__ = null,
                n = o.__construct__,
                o.__construct__ = null) : (i = new Fiber(r),
                a = !0),
                s = o.__callname__ || e.name,
                o.__callname__ = null,
                i.pushFrame(e, this, t, arguments, o, s, n),
                a)
                    return i.run(),
                    i.rv
            }
            return o.originFnLength = i,
            o
        }
          , callArrayConstructor = function(e) {
            return 1 === e.length && (0 | e[0]) === e[0] ? new Array(e[0]) : e.slice()
        }
          , callRegExpConstructor = function(e) {
            return 1 === e.length ? new RegExp(e[0]) : new RegExp(e[0],e[1])
        }
          , createNativeInstance = function(e, t) {
            var r;
            return e === Array ? callArrayConstructor(t) : e === Date ? 0 === t.length ? new Date : new Date(t[0]) : e === RegExp ? callRegExpConstructor(t) : e === Number ? 0 === t.length ? new Number : new Number(t[0]) : e === Boolean ? 0 === t.length ? new Boolean : new Boolean(t[0]) : e === Uint8Array ? new Uint8Array(t[0]) : e === Int8Array ? new Int8Array(t[0]) : e === Int32Array ? new Int32Array(t[0]) : e === String ? new String(t[0] || "") : ((r = function() {
                return e.apply(this, t)
            }
            ).prototype = e.prototype,
            new r)
        }
          , ret = function(e) {
            return e.evalStack.clear(),
            e.exitIp = e.ip
        }
          , throwErr = function(e, t) {
            return e.error = t,
            e.paused = !0
        }
          , debug = function debug() {
            eval("debugger;")
        };
        module.exports = opcodes
    }
    ).call(this)
}
, function(e, t) {
    e.exports = function(e, t) {
        this.__proto__ = RegExp.prototype,
        Object.defineProperties(this, {
            global: {
                value: e.global
            },
            ignoreCase: {
                value: e.ignoreCase
            },
            multiline: {
                value: e.multiline
            },
            source: {
                value: e.source
            },
            hasIndices: {
                value: e.hasIndices
            },
            dotAll: {
                value: e.dotAll
            },
            flags: {
                value: e.flags
            },
            sticky: {
                value: e.sticky
            },
            unicode: {
                value: e.unicode
            }
        })
    }
}
, function(e, t, r) {
    function n() {}
    var i;
    i = r(12),
    n.prototype.zip = function(e) {
        return i.encode(e)
    }
    ,
    n.prototype.unzip = function(e) {
        return i.decode(e)
    }
    ,
    e.exports = n
}
, function(e, t) {
    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    e.exports.encode = function(e) {
        try {
            var t, r = {}, n = [], i = e[0], o = 57344;
            e = (e + "").split("");
            for (var s = 1; s < e.length; s++)
                null != r[i + (t = e[s])] && i + t !== "toString" ? i += t : (n.push(1 < i.length ? r[i] : i.codePointAt(0)),
                r[i + t] = o,
                o++,
                i = t);
            return n.push(1 < i.length ? r[i] : i.codePointAt(0)),
            n.map(function(e) {
                return String.fromCodePoint(e)
            }).join("")
        } catch (a) {
            throw new Error(a)
        }
    }
    ,
    e.exports.decode = function(e) {
        try {
            for (var t = function(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return r(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    var n;
                    if (e)
                        return "string" == typeof e ? r(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }(e).map(function(e) {
                return e.codePointAt(0)
            }), n = {}, i = String.fromCodePoint(t[0]), o = i, s = [i], a = 57344, c = 1; c < t.length; c++) {
                var l, u = t[c];
                s += l = u < 57344 ? String.fromCodePoint(t[c]) : n[u] || o + i,
                i = l[0],
                n[a] = o + i,
                a++,
                o = l
            }
            return s
        } catch (h) {
            throw new Error(h)
        }
    }
}
, function(e, t) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var n, i, o, s, a, c, l, u, h, d, p, f, m, g, _, v, y;
    function E(e, t) {
        return e >>> t & 4294967295 | e << 32 - t & 4294967295
    }
    function b(e, t, r, n, i, o, s) {
        for (e[t] = e[t] + e[r] & 4294967295,
        e[t] = e[t] + o & 4294967295,
        e[i] ^= e[t],
        e[i] = E(e[i], 16),
        e[n] = e[n] + e[i] & 4294967295,
        e[r] ^= e[n],
        e[r] = E(e[r], 12); ; ) {
            e[t] = e[t] + e[r] & 4294967295;
            break
        }
        for (e[t] = e[t] + s,
        e[i] ^= e[t],
        e[i] = E(e[i], 8),
        e[n] = e[n] + e[i] & 4294967295; ; ) {
            e[r] ^= e[n];
            break
        }
        e[r] = E(e[r], 7)
    }
    function S(e, t, r, i, o, s, a) {
        for (var c = new Array(16), l = new Array(16), u = 0; u < 16; ++u)
            l[u] = 0;
        for (u = 0; u < 8; u++)
            c[u] = e[u];
        for (; ; ) {
            for (u = 0; u < 8; u++)
                c[u + 8] = 4294967295 & a[u];
            break
        }
        for (c[12] ^= i; ; ) {
            s && (c[14] ^= 4294967295);
            break
        }
        for (; ; ) {
            for (u = 0; u < o; u++)
                l[u % 16] ^= t[r + u];
            break
        }
        for (; ; ) {
            for (u = 0; u < n; u++) {
                for (b(c, 0, 4, 8, 12, l[G[u][0]], l[G[u][1]]),
                b(c, 1, 5, 9, 13, l[G[u][2]], l[G[u][3]]); ; ) {
                    b(c, 2, 6, 10, 14, l[G[u][4]], l[G[u][5]]);
                    break
                }
                b(c, 3, 7, 11, 15, l[G[u][6]], l[G[u][7]]),
                b(c, 0, 5, 10, 15, l[G[u][8]], l[G[u][9]]),
                b(c, 1, 6, 11, 12, l[G[u][10]], l[G[u][11]]),
                b(c, 2, 7, 8, 13, l[G[u][12]], l[G[u][13]]),
                b(c, 3, 4, 9, 14, l[G[u][14]], l[G[u][15]])
            }
            break
        }
        for (u = 0; u < 8; u++)
            e[u] ^= c[u] ^ c[u + 8];
        return e
    }
    function x(e) {
        var t = e.split("").map(function(e) {
            return e.codePointAt(0) || 0
        });
        return new Int8Array(t)
    }
    function T(e) {
        var t, r, n = 0;
        t = 1 & s;
        for (var i, _ = 1 & a, v = 0; v < 8; v++) {
            for (; ; ) {
                if (1 & o)
                    if (o = o ^ c >> 1 & 4294967295 | f,
                    1 & s) {
                        for (; ; ) {
                            s = s ^ l >> 1 & 4294967295 | m;
                            break
                        }
                        t = 1
                    } else
                        s = s >> 1 & 4294967295 & d,
                        t = 0;
                else
                    for (o = o >> 1 & 4294967295 & h; ; ) {
                        if (1 & a) {
                            for (; ; ) {
                                a = a ^ u >> 1 & 4294967295 | g;
                                break
                            }
                            _ = 1
                        } else {
                            for (; ; ) {
                                a = a >> 1 & 4294967295 & p;
                                break
                            }
                            _ = 0
                        }
                        break
                    }
                break
            }
            n = 127 < (i = n << 1 & 4294967295 | t ^ _) ? i - 256 : i < -128 ? i + 256 : i
        }
        for (; ; ) {
            r = e;
            break
        }
        for (r ^= n += 3; ; )
            return r
    }
    function A(e) {
        return e = unescape(encodeURIComponent(e)),
        new Int8Array(e.split("").map(function(e) {
            return e.charCodeAt(0) || 0
        }))
    }
    function w(e, t) {
        for (var r = ""; ; ) {
            for (var n = 0; n < t; n++)
                r += e;
            break
        }
        return r
    }
    function R(e) {
        var t, r, n, i = A(e);
        t = i.length % 4 == 0 ? 0 : 4 - i.length % 4,
        r = new Int8Array(i.length + t);
        for (var o = 0; o < i.length; ++o)
            r[o] = i[o];
        for (n = new Array(r.length / 4); ; ) {
            for (o = 0; o < r.length; o += 4)
                n[o / 4] = new Int32Array(r.slice(o, o + 4).buffer)[0];
            break
        }
        for (; ; )
            return n
    }
    function P(e, t) {
        var r, n;
        for (r = 0,
        n = new Int8Array(e.length); ; ) {
            for (; r < e.length; )
                for (var i = 0; i < t.length; i++)
                    n[r] = e[r] ^ 255 & t[i],
                    r++;
            break
        }
        return n
    }
    function C(e) {
        for (var t = parseInt(e, 16), r = Math.pow(2, e.length / 2 * 8); ; ) {
            r / 2 - 1 < t && (t -= r);
            break
        }
        for (; ; )
            return t
    }
    function O(e) {
        var t;
        for (t = []; ; ) {
            for (var r = 0; r < e.length; r += 2)
                t.push(C(e.substr(r, 2)));
            break
        }
        return t
    }
    function I(e, t) {
        for (var r = [], n = (t = t || 4) - 1; 0 <= n; n--)
            r[t - 1 - n] = e >>> 8 * n & 255;
        return r
    }
    function L(e, t) {
        var r = [];
        if (4 < (t = t || 4) && 4294967295 < e) {
            var n, i = e.toString(2);
            n = parseInt(i.substr(0, i.length - 16), 2);
            for (var o = 0; o <= t - 1; o++)
                r[o] = 0 === o || 1 === o ? parseInt(i.substr(i.length - 8 * (o + 1), 8), 2) : n >>> 8 * (o - 2) & 255
        } else
            for (o = 0; o <= t - 1; o++)
                r[o] = e >>> 8 * o & 255;
        for (; ; )
            return r
    }
    function M(e, t, r) {
        var n, i;
        for (n = "",
        i = [],
        i = (t ? I : L)(e, r); ; ) {
            for (var o = 0; o < i.length; o++)
                n += 0 === i[o] ? "00" : (i[o] < 16 ? "0" : "") + i[o].toString(16);
            break
        }
        return n
    }
    function D(e) {
        for (var t = "", r = 0; r < e.length; r++)
            t += 255 & e[r] ? ((255 & e[r]) < 16 ? "0" : "") + (255 & e[r]).toString(16) : "00";
        return t
    }
    function N() {
        return "e0000000000000"
    }
    function k(e) {
        for (var t, r; ; ) {
            t = R(e);
            break
        }
        for (r = function(e) {
            for (var t; ; ) {
                t = "";
                break
            }
            return e.forEach(function(e) {
                for (var r = (e >>> 0).toString(16), n = 8 - r.length; ; ) {
                    t += 0 < n ? w("0", n) + r : r;
                    break
                }
            }),
            t
        }(function(e) {
            var t, r = 0, n = e.length, i = 0;
            for ((t = V.slice())[0] ^= 16842784; 64 < n; )
                n -= 64,
                S(t, e, i, r += 64, 64, !1, V),
                i += 64;
            for (r += n; ; )
                return S(t, e, i, r, n, !0, V)
        }(t)); ; )
            return r
    }
    function $(e) {
        for (var t = k(e); ; )
            return A(t)
    }
    function F(e) {
        var t;
        for (o = new Int32Array(_.slice(12, 16).buffer)[0],
        s = new Int32Array(_.slice(8, 12).buffer)[0],
        a = new Int32Array(_.slice(4, 8).buffer)[0],
        c = new Int32Array(_.slice(0, 4).buffer)[0],
        l = new Int32Array(_.slice(16, 20).buffer)[0],
        u = new Int32Array(_.slice(20, 24).buffer)[0],
        h = new Int32Array(_.slice(24, 28).buffer)[0],
        d = new Int32Array(_.slice(28, 32).buffer)[0],
        p = new Int32Array(_.slice(44, 48).buffer)[0],
        f = new Int32Array(_.slice(40, 44).buffer)[0],
        m = new Int32Array(_.slice(36, 40).buffer)[0],
        g = new Int32Array(_.slice(32, 36).buffer)[0],
        function(e) {
            var t, r, n;
            for (i = e,
            r = e.length; ; ) {
                n = x(i).slice(0, r);
                break
            }
            for (t = 0; t < 4; t++) {
                for (; ; ) {
                    o = (o <<= 8) | n[t + 4];
                    break
                }
                s = (s <<= 8) | n[t + 4],
                a = (a <<= 8) | n[t + 4]
            }
            for (; ; ) {
                0 == o && (o = 324508639);
                break
            }
            for (; ; ) {
                0 == s && (s = 610839776);
                break
            }
            for (; ; ) {
                0 == a && (a = 4256789809);
                break
            }
        }("Vuz4fCHxn1CO"),
        t = new Int8Array(e.length); ; ) {
            for (var r = 0; r < e.length; r++)
                t[r] = T(e[r]);
            break
        }
        return t
    }
    function B(e) {
        var t, n, i;
        for (e && r(e); ; ) {
            e.url && e.query;
            break
        }
        return e.query.caver,
        t = function(e) {
            var t, r, n, i;
            for (t = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/; ; ) {
                r = new RegExp(t);
                break
            }
            return n = e,
            r.test(e) && (i = (e = e.split("//"))[1].indexOf("/"),
            !0) && (n = e[1].substring(i)),
            -1 != n.indexOf("?") ? n.split("?")[0] : n
        }(e.url),
        n = function(e) {
            for (var t = Object.keys(e).reduce(function(t, n) {
                var i;
                return ~n.indexOf(v) || (null == e[n] ? t.push(i = n + "=") : ("object" !== r(e[n]) || e[n]instanceof Array ? i = n + "=" + e[n] : i = n + "=[object Object]",
                t.push(i))),
                t
            }, []); ; )
                return t
        }(n = Object.assign({}, e.query, e.form || {})),
        i = (document && document.cookie.split(";") || []).map(function(e) {
            return [(e = e.split("="))[0].trim(), e.slice(1).join("=").trim()]
        }).filter(function(e) {
            return ~y.indexOf(e[0]) && !!e[1]
        }).map(function(e) {
            return e[0] + "=" + e[1]
        }, []),
        t += n.concat(i).sort(function(e, t) {
            for (; ; ) {
                if (e === t)
                    return 0;
                break
            }
            return e < t ? -1 : 1
        }).join(""),
        e.requestBody && (t += JSON.stringify(e.requestBody)),
        t
    }
    function U(e, t) {
        e = e.toString(2),
        t = t.toString(2),
        e = (w("0", (n = Math.max(e.length, t.length)) - e.length) + e).split("");
        var r = (w("0", n - t.length) + t).split("")
          , n = e.map(function(e, t) {
            return "0" === e && "0" === r[t] || !("0" === e && "1" === r[t] || "1" === e && "0" === r[t]) ? "0" : "1"
        }).join("");
        return parseInt(n, 2)
    }
    for (var H = function() {}, G = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3], [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4], [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8], [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13], [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9], [12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11], [13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10], [6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5], [10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0]], V = [2837534710, 2845986804, 2436420605, 706843635, 719254516, 2557931286, 2596197199, 2432949778], j = 0; j < 8; ++j)
        V[j] &= 4294967295;
    n = 10,
    f = 0,
    g = m = p = d = h = u = l = c = a = s = o = 0,
    _ = new Int8Array([98, 0, 0, 128, 49, 117, 185, 253, 224, 172, 104, 36, 223, 155, 87, 19, 32, 0, 0, 64, 2, 0, 0, 16, 255, 255, 255, 127, 255, 255, 255, 63, 0, 0, 0, 240, 0, 0, 0, 192, 0, 0, 0, 128, 255, 255, 255, 15]),
    v = "__NS",
    y = [],
    H.prototype.register = function() {
        Object.defineProperties(Object, {
            jmpOnw_b2sa: {
                writable: !0,
                configurable: !0,
                value: $
            },
            jmpOnw_b2has: {
                writable: !0,
                configurable: !0,
                value: k
            },
            jmpOnw_cts: {
                writable: !0,
                configurable: !0,
                value: F
            },
            jmpOnw_xcb: {
                writable: !0,
                configurable: !0,
                value: P
            },
            jmpOnw_h2b: {
                writable: !0,
                configurable: !0,
                value: O
            },
            jmpOnw_b2h: {
                writable: !0,
                configurable: !0,
                value: D
            },
            jmpOnw_i2h: {
                writable: !0,
                configurable: !0,
                value: M
            },
            jmpOnw_bxor: {
                writable: !0,
                configurable: !0,
                value: U
            },
            jmpOnw_i2b1: {
                writable: !0,
                configurable: !0,
                value: L
            },
            jmpOnw_s2ua: {
                writable: !0,
                configurable: !0,
                value: A
            },
            jmpOnw_geh: {
                writable: !0,
                configurable: !0,
                value: N
            },
            jmpOnw_ms: {
                writable: !0,
                configurable: !0,
                value: B
            }
        })
    }
    ,
    e.exports = H
}
, function(e, t) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function n() {}
    var i = {
        prod: "log-sdk.ksapisrv.com",
        oversea: "logsdk.kwai-pro.com"
    }
      , o = {
        prod: "914e7528de",
        oversea: "602a26d3bn"
    };
    function s(e) {
        try {
            var t = {
                data: [{
                    key: "event",
                    value: e.duration ? {
                        duration: e.duration
                    } : {},
                    dimension: {
                        event_client_timestamp: Date.now(),
                        collect_version: "1.2.9",
                        collect_name: "RadarSeedCollect",
                        name: e.name || "",
                        message: "object" === r(e.value) ? JSON.stringify(e.value) : e.value,
                        category: e.projectInfo.appKey || e.projectInfo.appkey || "",
                        sample_rate: 1,
                        other_session_increase_id: 2
                    },
                    h5_extra_attr: e.log ? JSON.stringify(e.log) : "",
                    refer_url_package: {
                        page: location && location.href || ""
                    },
                    url_package: {
                        page: ""
                    },
                    project_id: e.projectInfo.radarId || o[e.projectInfo.oversea ? "oversea" : "prod"],
                    radar_session_id: ""
                }]
            }
              , n = {
                common: {
                    identity_package: {
                        device_id: e.projectInfo.did || "",
                        global_id: "",
                        user_id: e.projectInfo.uid || ""
                    },
                    app_package: {
                        language: "zh-CN",
                        version_name: ""
                    },
                    device_package: {
                        ua: ""
                    },
                    service_name: "radarSDK",
                    network_package: {
                        type: 3
                    },
                    h5_extra_attr: e.log ? JSON.stringify(e.log) : ""
                },
                logs: [{
                    client_timestamp: Date.now(),
                    stat_package: {
                        custom_stat_event: {
                            key: "radar_log",
                            value: JSON.stringify(t)
                        }
                    }
                }]
            }
              , s = "https://" + i[e.projectInfo.oversea ? "oversea" : "prod"] + "/rest/wd/common/log/collect/radar";
            (null == e.projectInfo.sampling || Math.random() < +e.projectInfo.sampling) && navigator.sendBeacon(s, JSON.stringify(n))
        } catch (a) {}
    }
    n.prototype.register = function() {
        Object.defineProperties(Object, {
            jmpOnw_send: {
                writable: !0,
                configurable: !0,
                value: s
            }
        })
    }
    ,
    e.exports = n
}
, function(e, t, r) {
    (function(n) {
        var i;
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        i = function() {
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(t)
            }
            function t(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function r(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, function(e) {
                        return e = function(e) {
                            if ("object" != o(e) || null === e)
                                return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 === t)
                                return String(e);
                            if ("object" != o(t = t.call(e, "string")))
                                return t;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }(e),
                        "symbol" == o(e) ? e : String(e)
                    }(n.key), n)
                }
            }
            function i(e, t, n) {
                t && r(e.prototype, t),
                n && r(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }
            function s(e, t) {
                if (e !== t)
                    throw new TypeError("Cannot instantiate an arrow function")
            }
            function a(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return c(e)
                }(e) || function() {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }() || function(e) {
                    var t;
                    if (e)
                        return "string" == typeof e ? c(e, void 0) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(e, void 0) : void 0
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++)
                    n[r] = e[r];
                return n
            }
            function l(e) {
                return e ? Object.getOwnPropertyDescriptors(e) : null
            }
            function u(e) {
                var t = this;
                return Array.from(e).map(function(e) {
                    return s(this, t),
                    e.codePointAt(0) || 0
                }
                .bind(this))
            }
            function h(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 4;
                if (4 <= t && e >= Math.pow(2, 32))
                    return [255, 255, 255, 255];
                for (var r = [], n = 0; n <= t - 1; n++)
                    r[n] = e >>> 8 * n & 255;
                return r
            }
            i(p, [{
                key: "getSensorInfo",
                value: function() {
                    return {
                        oI: this.oI,
                        mI: this.mI
                    }
                }
            }, {
                key: "resetSensorInfo",
                value: function() {
                    this.oI = {
                        doa: 0
                    },
                    this.mI = {
                        dma: 0
                    }
                }
            }, {
                key: "cdoa",
                value: function() {
                    try {
                        this.oI.doa++
                    } catch (e) {}
                }
            }, {
                key: "cdma",
                value: function() {
                    try {
                        this.mI.dma++
                    } catch (e) {}
                }
            }, {
                key: "cdmaHandler",
                value: function(e) {
                    var t;
                    null != (t = p.getInstance()) && t.cdma()
                }
            }, {
                key: "cdoaHandler",
                value: function(e) {
                    var t;
                    null != (t = p.getInstance()) && t.cdoa()
                }
            }, {
                key: "startdoadma",
                value: function() {
                    var e = window.addEventListener;
                    e && (window.DeviceOrientationEvent && e("deviceorientation", this.cdoaHandler, !0),
                    window.DeviceMotionEvent) && e("devicemotion", this.cdmaHandler, !0)
                }
            }, {
                key: "stopdoadma",
                value: function() {
                    var e = window.removeEventListener;
                    e && (e("deviceorientation", this.cdoaHandler, !0),
                    e("devicemotion", this.cdmaHandler, !0))
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return p.instance || (p.instance = new p),
                    this.instance
                }
            }]);
            var d = p;
            function p() {
                return t(this, p),
                this.mI = {
                    dma: 0
                },
                this.oI = {
                    doa: 0
                },
                p.instance = p.instance ? p.instance : this
            }
            d.instance = null,
            i(m, [{
                key: "getTraceInfo",
                value: function() {
                    return {
                        mE: this.mE,
                        tE: this.tE,
                        pE: this.pE,
                        kE: this.kE
                    }
                }
            }, {
                key: "resetTraceInfo",
                value: function() {
                    this.mE = {
                        mm: 0,
                        ck: 0,
                        md: 0,
                        mu: 0
                    },
                    this.tE = {
                        tm: 0,
                        ts: 0,
                        te: 0,
                        tc: 0
                    },
                    this.pE = {
                        pd: 0,
                        pu: 0
                    },
                    this.kE = {
                        kd: 0,
                        ku: 0,
                        kp: 0
                    }
                }
            }, {
                key: "cma",
                value: function(e, t) {
                    m.leftCount = 100;
                    try {
                        switch (t) {
                        case 1:
                            this.mE.mm = 16777215 <= this.mE.mm ? 16777215 : this.mE.mm + 1;
                            break;
                        case 2:
                            this.mE.ck = 16777215 <= this.mE.ck ? 16777215 : this.mE.ck + 1;
                            break;
                        case 3:
                            this.mE.md = 16777215 <= this.mE.md ? 16777215 : this.mE.md + 1;
                            break;
                        case 4:
                            this.mE.mu = 16777215 <= this.mE.mu ? 16777215 : this.mE.mu + 1
                        }
                    } catch (r) {}
                }
            }, {
                key: "cta",
                value: function(e, t) {
                    m.leftCount = 100;
                    try {
                        switch (t) {
                        case 1:
                            this.tE.tm = 16777215 <= this.tE.tm ? 16777215 : this.tE.tm + 1;
                            break;
                        case 2:
                            this.tE.ts = 16777215 <= this.tE.ts ? 16777215 : this.tE.ts + 1;
                            break;
                        case 3:
                            this.tE.te = 16777215 <= this.tE.te ? 16777215 : this.tE.te + 1;
                            break;
                        case 4:
                            this.tE.tc = 16777215 <= this.tE.tc ? 16777215 : this.tE.tc + 1
                        }
                    } catch (r) {}
                }
            }, {
                key: "cpa",
                value: function(e, t) {
                    m.leftCount = 100;
                    try {
                        switch (t) {
                        case 1:
                            this.pE.pd = 16777215 <= this.pE.pd ? 16777215 : this.pE.pd + 1;
                            break;
                        case 2:
                            this.pE.pu = 16777215 <= this.pE.pu ? 16777215 : this.pE.pu + 1
                        }
                    } catch (r) {}
                }
            }, {
                key: "cka",
                value: function(e, t) {
                    m.leftCount = 100;
                    try {
                        switch (t) {
                        case 1:
                            this.kE.kd = 16777215 <= this.kE.kd ? 16777215 : this.kE.kd + 1;
                            break;
                        case 2:
                            this.kE.ku = 16777215 <= this.kE.ku ? 16777215 : this.kE.ku + 1;
                            break;
                        case 3:
                            this.kE.kp = 16777215 <= this.kE.kp ? 16777215 : this.kE.kp + 1
                        }
                    } catch (r) {}
                }
            }, {
                key: "touchmoveHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cta(e, 1)
                }
            }, {
                key: "touchstartHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cta(e, 2)
                }
            }, {
                key: "touchendHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cta(e, 3)
                }
            }, {
                key: "touchcancelHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cta(e, 4)
                }
            }, {
                key: "mousemoveHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cma(e, 1)
                }
            }, {
                key: "clickHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cma(e, 2)
                }
            }, {
                key: "mousedownHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cma(e, 3)
                }
            }, {
                key: "mouseupHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cma(e, 4)
                }
            }, {
                key: "pointerdownHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cpa(e, 3)
                }
            }, {
                key: "pointerupHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cpa(e, 4)
                }
            }, {
                key: "keydownHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cka(e, 1)
                }
            }, {
                key: "keyupHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cka(e, 2)
                }
            }, {
                key: "keypressHandler",
                value: function(e) {
                    var t;
                    null != (t = m.instance) && t.cka(e, 3)
                }
            }, {
                key: "startTracking",
                value: function() {
                    var e = (t = window.document).addEventListener
                      , t = t.attachEvent;
                    (e = e || t)("touchmove", this.touchmoveHandler, !0),
                    e("touchstart", this.touchstartHandler, !0),
                    e("touchend", this.touchendHandler, !0),
                    e("touchcancel", this.touchcancelHandler, !0),
                    e("mousemove", this.mousemoveHandler, !0),
                    e("click", this.clickHandler, !0),
                    e("mousedown", this.mousedownHandler, !0),
                    e("mouseup", this.mouseupHandler, !0),
                    e("pointerdown", this.pointerdownHandler, !0),
                    e("pointerup", this.pointerupHandler, !0),
                    e("keydown", this.keydownHandler, !0),
                    e("keyup", this.keyupHandler, !0),
                    e("keypress", this.keypressHandler, !0)
                }
            }, {
                key: "stopTracking",
                value: function() {
                    var e = (t = window.document).removeEventListener
                      , t = t.detachEvent;
                    (e = e || t)("touchmove", this.touchmoveHandler, !0),
                    e("touchstart", this.touchstartHandler, !0),
                    e("touchend", this.touchendHandler, !0),
                    e("touchcancel", this.touchcancelHandler, !0),
                    e("mousemove", this.mousemoveHandler, !0),
                    e("click", this.clickHandler, !0),
                    e("mousedown", this.mousedownHandler, !0),
                    e("mouseup", this.mouseupHandler, !0),
                    e("pointerdown", this.pointerdownHandler, !0),
                    e("pointerup", this.pointerupHandler, !0),
                    e("keydown", this.keydownHandler, !0),
                    e("keyup", this.keyupHandler, !0),
                    e("keypress", this.keypressHandler, !0)
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return m.instance || (m.instance = new m),
                    this.instance
                }
            }]);
            var f = m;
            function m() {
                return t(this, m),
                this.mE = {
                    mm: 0,
                    ck: 0,
                    md: 0,
                    mu: 0
                },
                this.tE = {
                    tm: 0,
                    ts: 0,
                    te: 0,
                    tc: 0
                },
                this.pE = {
                    pd: 0,
                    pu: 0
                },
                this.kE = {
                    kd: 0,
                    ku: 0,
                    kp: 0
                },
                m.instance = m.instance ? m.instance : this
            }
            function g(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 4;
                if (4 <= t && e >= Math.pow(2, 32))
                    return [255, 255, 255, 255];
                for (var r = [], n = 0; n <= t - 1; n++)
                    r[n] = e >>> 8 * n & 255;
                return r
            }
            f.instance = null,
            f.leftCount = 100;
            var _ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {};
            function v(e, t) {
                var r = 0
                  , n = new Array(16)
                  , i = new Array(16)
                  , o = e
                  , s = t;
                function a(e, t) {
                    return e << t & 4294967295 | e >>> 32 - t
                }
                function c(e, t, r, n, i) {
                    e[t] = e[t] + e[r] & 4294967295,
                    e[i] ^= e[t],
                    e[i] = a(e[i], 16),
                    e[n] = e[n] + e[i] & 4294967295,
                    e[r] ^= e[n],
                    e[r] = a(e[r], 12),
                    e[t] = e[t] + e[r] & 4294967295,
                    e[i] ^= e[t],
                    e[i] = a(e[i], 8),
                    e[n] = e[n] + e[i] & 4294967295,
                    e[r] ^= e[n],
                    e[r] = a(e[r], 7)
                }
                function l() {
                    for (var e = new Array(n.length), t = 0; t < n.length; ++t)
                        e[t] = n[t];
                    for (t = 0; t < 20; t += 2)
                        c(e, 0, 4, 8, 12),
                        c(e, 1, 5, 9, 13),
                        c(e, 2, 6, 10, 14),
                        c(e, 3, 7, 11, 15),
                        c(e, 0, 5, 10, 15),
                        c(e, 1, 6, 11, 12),
                        c(e, 2, 7, 8, 13),
                        c(e, 3, 4, 9, 14);
                    for (t = 0; t < 16; ++t)
                        i[t] = e[t] + n[t] & 4294967295
                }
                v.prototype.chachaEncrypt = function(e) {
                    n[r = 0] = 394484062,
                    n[1] = 2378328696,
                    n[2] = 630790222,
                    n[3] = 1922531795;
                    for (var t = 0; t < 8; t++)
                        n[t + 4] = o[t];
                    n[12] = 1,
                    n[13] = s[0],
                    n[14] = s[1],
                    n[15] = s[2],
                    l();
                    for (var a = new Array(e.length), c = 0; c < e.length; c++) {
                        var u = e[c] ^ (u = void 0,
                        64 === r && (++n[12],
                        l(),
                        r = 0),
                        u = i[r >> 2] >> ((3 & r) << 3) & 255,
                        ++r,
                        127 < u ? u - 256 : u < -128 ? 256 + u : u);
                        a[c] = 127 < u ? u - 256 : u < -128 ? 256 + u : u
                    }
                    return a
                }
                ,
                v.prototype.chachaDecrypt = v.prototype.chachaEncrypt
            }
            (function(e) {
                function t(e) {
                    for (var t = {}, r = 0; r < e.length; r++)
                        t[e[r].toUpperCase()] = e[r];
                    return t
                }
                function r(e, t) {
                    return o(e) === g && -1 !== z(t).indexOf(z(e))
                }
                function n(e, t) {
                    if (o(e) === g)
                        return e = e.replace(/^\s\s*/, ""),
                        o(t) === f ? e : e.substring(0, 500)
                }
                function i(e, t) {
                    for (var r, n, i, s, a, c, l = 0; l < t.length && !a; ) {
                        var u = t[l]
                          , h = t[l + 1];
                        for (r = n = 0; r < u.length && !a && u[r]; )
                            if (a = u[r++].exec(e))
                                for (i = 0; i < h.length; i++)
                                    c = a[++n],
                                    o(s = h[i]) === m && 0 < s.length ? 2 === s.length ? o(s[1]) == p ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : 3 === s.length ? o(s[1]) !== p || s[1].exec && s[1].test ? this[s[0]] = c ? c.replace(s[1], s[2]) : d : this[s[0]] = c ? s[1].call(this, c, s[2]) : d : 4 === s.length && (this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : d) : this[s] = c || d;
                        l += 2
                    }
                }
                function s(e, t) {
                    for (var n in t)
                        if (o(t[n]) === m && 0 < t[n].length) {
                            for (var i = 0; i < t[n].length; i++)
                                if (r(t[n][i], e))
                                    return "?" === n ? d : n
                        } else if (r(t[n], e))
                            return "?" === n ? d : n;
                    return e
                }
                function a(e, t) {
                    var r, s, c, l, u;
                    return o(e) === m && (t = e,
                    e = d),
                    this instanceof a ? (r = o(h) !== f && h.navigator ? h.navigator : d,
                    s = e || (r && r.userAgent ? r.userAgent : ""),
                    c = r && r.userAgentData ? r.userAgentData : d,
                    l = t ? function(e, t) {
                        var r, n = {};
                        for (r in e)
                            t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                        return n
                    }(Y, t) : Y,
                    u = r && r.userAgent == s,
                    this.getBrowser = function() {
                        var e, t = {};
                        return t[y] = d,
                        t[S] = d,
                        i.call(t, s, l.browser),
                        t.major = o(e = t[S]) === g ? e.replace(/[^\d\.]/g, "").split(".")[0] : d,
                        u && r && r.brave && o(r.brave.isBrave) == p && (t[y] = "Brave"),
                        t
                    }
                    ,
                    this.getCPU = function() {
                        var e = {};
                        return e[x] = d,
                        i.call(e, s, l.cpu),
                        e
                    }
                    ,
                    this.getDevice = function() {
                        var e = {};
                        return e[b] = d,
                        e[v] = d,
                        e[E] = d,
                        i.call(e, s, l.device),
                        u && !e[E] && c && c.mobile && (e[E] = A),
                        u && "Macintosh" == e[v] && r && o(r.standalone) !== f && r.maxTouchPoints && 2 < r.maxTouchPoints && (e[v] = "iPad",
                        e[E] = w),
                        e
                    }
                    ,
                    this.getEngine = function() {
                        var e = {};
                        return e[y] = d,
                        e[S] = d,
                        i.call(e, s, l.engine),
                        e
                    }
                    ,
                    this.getOS = function() {
                        var e = {};
                        return e[y] = d,
                        e[S] = d,
                        i.call(e, s, l.os),
                        u && !e[y] && c && "Unknown" != c.platform && (e[y] = c.platform.replace(/chrome os/i, W).replace(/macos/i, "Mac OS")),
                        e
                    }
                    ,
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }
                    ,
                    this.getUA = function() {
                        return s
                    }
                    ,
                    this.setUA = function(e) {
                        return s = o(e) === g && 500 < e.length ? n(e, 500) : e,
                        this
                    }
                    ,
                    this.setUA(s),
                    this) : new a(e,t).getResult()
                }
                var c, l = e = {
                    exports: {}
                }, u = e.exports, h = "object" == ("undefined" == typeof window ? "undefined" : o(window)) ? window : _, d = void 0, p = "function", f = "undefined", m = "object", g = "string", v = "model", y = "name", E = "type", b = "vendor", S = "version", x = "architecture", T = "console", A = "mobile", w = "tablet", R = "smarttv", P = "wearable", C = "embedded", O = "Amazon", I = "Apple", L = "BlackBerry", M = "Browser", D = "Chrome", N = "Firefox", k = "Google", $ = "Microsoft", F = "Motorola", B = "Opera", U = "Samsung", H = "Sony", G = "Xiaomi", V = "Zebra", j = "Facebook", W = "Chromium OS", z = function(e) {
                    return e.toLowerCase()
                }, X = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }, Y = {
                    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [S, [y, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [S, [y, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [y, S], [/opios[\/ ]+([\w\.]+)/i], [S, [y, B + " Mini"]], [/\bopr\/([\w\.]+)/i], [S, [y, B]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [S, [y, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [y, S], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [S, [y, "UC" + M]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [S, [y, "WeChat"]], [/konqueror\/([\w\.]+)/i], [S, [y, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [S, [y, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [S, [y, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [S, [y, "Smart Lenovo " + M]], [/(avast|avg)\/([\w\.]+)/i], [[y, /(.+)/, "$1 Secure " + M], S], [/\bfocus\/([\w\.]+)/i], [S, [y, N + " Focus"]], [/\bopt\/([\w\.]+)/i], [S, [y, B + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [S, [y, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [S, [y, "Dolphin"]], [/coast\/([\w\.]+)/i], [S, [y, B + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [S, [y, "MIUI " + M]], [/fxios\/([-\w\.]+)/i], [S, [y, N]], [/\bqihu|(qi?ho?o?|360)browser/i], [[y, "360 " + M]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[y, /(.+)/, "$1 " + M], S], [/samsungbrowser\/([\w\.]+)/i], [S, [y, U + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[y, /_/g, " "], S], [/metasr[\/ ]?([\d\.]+)/i], [S, [y, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[y, "Sogou Mobile"], S], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [y, S], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [y], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[y, j], S], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [y, S], [/\bgsa\/([\w\.]+) .*safari\//i], [S, [y, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [S, [y, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [S, [y, D + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[y, D + " WebView"], S], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [S, [y, "Android " + M]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [y, S], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [S, [y, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [S, y], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [y, [S, s, {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]], [/(webkit|khtml)\/([\w\.]+)/i], [y, S], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[y, "Netscape"], S], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [S, [y, N + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [y, S], [/(cobalt)\/([\w\.]+)/i], [y, [S, /master.|lts./, ""]]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[x, "amd64"]], [/(ia32(?=;))/i], [[x, z]], [/((?:i[346]|x)86)[;\)]/i], [[x, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[x, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[x, "armhf"]], [/windows (ce|mobile); ppc;/i], [[x, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[x, /ower/, "", z]], [/(sun4\w)[;\)]/i], [[x, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[x, z]]],
                    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [v, [b, U], [E, w]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [v, [b, U], [E, A]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [v, [b, I], [E, A]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [v, [b, I], [E, w]], [/(macintosh);/i], [v, [b, I]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [v, [b, "Sharp"], [E, A]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [v, [b, "Huawei"], [E, w]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [v, [b, "Huawei"], [E, A]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[v, /_/g, " "], [b, G], [E, A]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[v, /_/g, " "], [b, G], [E, w]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [v, [b, "OPPO"], [E, A]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [v, [b, "Vivo"], [E, A]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [v, [b, "Realme"], [E, A]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [v, [b, F], [E, A]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [v, [b, F], [E, w]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [v, [b, "LG"], [E, w]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [v, [b, "LG"], [E, A]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [v, [b, "Lenovo"], [E, w]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[v, /_/g, " "], [b, "Nokia"], [E, A]], [/(pixel c)\b/i], [v, [b, k], [E, w]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [v, [b, k], [E, A]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [v, [b, H], [E, A]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[v, "Xperia Tablet"], [b, H], [E, w]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [v, [b, "OnePlus"], [E, A]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [v, [b, O], [E, w]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[v, /(.+)/g, "Fire Phone $1"], [b, O], [E, A]], [/(playbook);[-\w\),; ]+(rim)/i], [v, b, [E, w]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [v, [b, L], [E, A]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [v, [b, "ASUS"], [E, w]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [v, [b, "ASUS"], [E, A]], [/(nexus 9)/i], [v, [b, "HTC"], [E, w]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [b, [v, /_/g, " "], [E, A]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [v, [b, "Acer"], [E, w]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [v, [b, "Meizu"], [E, A]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [v, [b, "Ulefone"], [E, A]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [b, v, [E, A]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [b, v, [E, w]], [/(surface duo)/i], [v, [b, $], [E, w]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [v, [b, "Fairphone"], [E, A]], [/(u304aa)/i], [v, [b, "AT&T"], [E, A]], [/\bsie-(\w*)/i], [v, [b, "Siemens"], [E, A]], [/\b(rct\w+) b/i], [v, [b, "RCA"], [E, w]], [/\b(venue[\d ]{2,7}) b/i], [v, [b, "Dell"], [E, w]], [/\b(q(?:mv|ta)\w+) b/i], [v, [b, "Verizon"], [E, w]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [v, [b, "Barnes & Noble"], [E, w]], [/\b(tm\d{3}\w+) b/i], [v, [b, "NuVision"], [E, w]], [/\b(k88) b/i], [v, [b, "ZTE"], [E, w]], [/\b(nx\d{3}j) b/i], [v, [b, "ZTE"], [E, A]], [/\b(gen\d{3}) b.+49h/i], [v, [b, "Swiss"], [E, A]], [/\b(zur\d{3}) b/i], [v, [b, "Swiss"], [E, w]], [/\b((zeki)?tb.*\b) b/i], [v, [b, "Zeki"], [E, w]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[b, "Dragon Touch"], v, [E, w]], [/\b(ns-?\w{0,9}) b/i], [v, [b, "Insignia"], [E, w]], [/\b((nxa|next)-?\w{0,9}) b/i], [v, [b, "NextBook"], [E, w]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[b, "Voice"], v, [E, A]], [/\b(lvtel\-)?(v1[12]) b/i], [[b, "LvTel"], v, [E, A]], [/\b(ph-1) /i], [v, [b, "Essential"], [E, A]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [v, [b, "Envizen"], [E, w]], [/\b(trio[-\w\. ]+) b/i], [v, [b, "MachSpeed"], [E, w]], [/\btu_(1491) b/i], [v, [b, "Rotor"], [E, w]], [/(shield[\w ]+) b/i], [v, [b, "Nvidia"], [E, w]], [/(sprint) (\w+)/i], [b, v, [E, A]], [/(kin\.[onetw]{3})/i], [[v, /\./g, " "], [b, $], [E, A]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [v, [b, V], [E, w]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [v, [b, V], [E, A]], [/smart-tv.+(samsung)/i], [b, [E, R]], [/hbbtv.+maple;(\d+)/i], [[v, /^/, "SmartTV"], [b, U], [E, R]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[b, "LG"], [E, R]], [/(apple) ?tv/i], [b, [v, I + " TV"], [E, R]], [/crkey/i], [[v, D + "cast"], [b, k], [E, R]], [/droid.+aft(\w+)( bui|\))/i], [v, [b, O], [E, R]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [v, [b, "Sharp"], [E, R]], [/(bravia[\w ]+)( bui|\))/i], [v, [b, H], [E, R]], [/(mitv-\w{5}) bui/i], [v, [b, G], [E, R]], [/Hbbtv.*(technisat) (.*);/i], [b, v, [E, R]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[b, n], [v, n], [E, R]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[E, R]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [b, v, [E, T]], [/droid.+; (shield) bui/i], [v, [b, "Nvidia"], [E, T]], [/(playstation [345portablevi]+)/i], [v, [b, H], [E, T]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [v, [b, $], [E, T]], [/((pebble))app/i], [b, v, [E, P]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [v, [b, I], [E, P]], [/droid.+; (glass) \d/i], [v, [b, k], [E, P]], [/droid.+; (wt63?0{2,3})\)/i], [v, [b, V], [E, P]], [/(quest( 2| pro)?)/i], [v, [b, j], [E, P]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [b, [E, C]], [/(aeobc)\b/i], [v, [b, O], [E, C]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [v, [E, A]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [v, [E, w]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[E, w]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[E, A]], [/(android[-\w\. ]{0,9});.+buil/i], [v, [b, "Generic"]]],
                    engine: [[/windows.+ edge\/([\w\.]+)/i], [S, [y, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [S, [y, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [y, S], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [S, y]],
                    os: [[/microsoft (windows) (vista|xp)/i], [y, S], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [y, [S, s, X]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[S, s, X], [y, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[S, /_/g, "."], [y, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[y, "Mac OS"], [S, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [S, y], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [y, S], [/\(bb(10);/i], [S, [y, L]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [S, [y, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [S, [y, N + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [S, [y, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [S, [y, "watchOS"]], [/crkey\/([\d\.]+)/i], [S, [y, D + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[y, W], S], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [y, S], [/(sunos) ?([\w\.\d]*)/i], [[y, "Solaris"], S], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [y, S]]
                }, K = (a.VERSION = "1.0.37",
                a.BROWSER = t([y, S, "major"]),
                a.CPU = t([x]),
                a.DEVICE = t([v, b, E, T, A, R, w, P, C]),
                a.ENGINE = a.OS = t([y, S]),
                (u = l.exports ? l.exports = a : u).UAParser = a,
                o(h) !== f && (h.jQuery || h.Zepto));
                return K && !K.ua && (c = new a,
                K.ua = c.getResult(),
                K.ua.get = function() {
                    return c.getUA()
                }
                ,
                K.ua.set = function(e) {
                    c.setUA(e);
                    var t, r = c.getResult();
                    for (t in r)
                        K.ua[t] = r[t]
                }
                ),
                e.exports
            }
            )().UAParser;
            for (var y = window, E = [], b = 2147483647, S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", x = 0; x < 64; ++x)
                E[x] = S[x],
                S.charCodeAt(x);
            function T(e, t, r) {
                for (var n, i = [], o = t; o < r; o += 3)
                    n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]),
                    i.push(E[n >> 18 & 63] + E[n >> 12 & 63] + E[n >> 6 & 63] + E[63 & n]);
                return i.join("")
            }
            (function(e) {
                var t = this
                  , r = (s(this, y),
                {
                    "+": "-",
                    "/": "_",
                    "=": "."
                });
                return e.replace(/[+/=]/g, function(e) {
                    return s(this, t),
                    r[e]
                }
                .bind(this))
            }
            ).bind(window),
            i(w, [{
                key: "stopCollectEnvInfo",
                value: function() {
                    this.traceInstance.stopTracking(),
                    this.sensorInstance.stopdoadma()
                }
            }, {
                key: "init",
                value: function() {
                    function t(e, t) {
                        return String.fromCharCode.apply(null, (e = function(e) {
                            for (var t = [], r = 0; r < e.length; ++r)
                                t.push(e.charCodeAt(r));
                            return t
                        }(e),
                        r = t,
                        e.map(function(e) {
                            var t = (255 & r) >> 3
                              , n = 1 & r;
                            return r >>>= 1,
                            n && (r |= 32768),
                            e ^ t
                        })));
                        var r
                    }
                    for (var r, n, i, o, c, d, p, f, m, _, v, y = 25; ; ) {
                        switch (y) {
                        case 31:
                            try {
                                for (var E, b, S, x, T, A, w, R, P, C, O, I, L, M, D, N, k, $, F = 106; ; ) {
                                    switch (F) {
                                    case -111:
                                        try {
                                            Navigator.prototype.languages()
                                        } catch (j) {
                                            ($ = this.infoCache).push.apply($, [118, 1].concat(a(h(100, 2)), a(u(j.stack.substr(0, 100) || ""))))
                                        }
                                        F |= 4;
                                        continue;
                                    case 166:
                                        U = B = void 0;
                                        var B, U = [];
                                        try {
                                            new Function("module")(),
                                            U.push(46, 2, 1)
                                        } catch (W) {
                                            U.push(46, 2, 0)
                                        }
                                        try {
                                            new Function("spawn")(),
                                            U.push(47, 2, 1)
                                        } catch (W) {
                                            U.push(47, 2, 0)
                                        }
                                        try {
                                            new Function("emit")(),
                                            U.push(48, 2, 1)
                                        } catch (W) {
                                            U.push(48, 2, 0)
                                        }
                                        (B = this.infoCache).push.apply(B, U),
                                        F -= 175;
                                        continue;
                                    case -113:
                                        (C = this.infoCache).push.apply(C, [77, 0].concat(a(h(+this.getElementTest(), 4)))),
                                        F |= 16 | (t("'-", 64925),
                                        29);
                                        continue;
                                    case 106:
                                        this.setEnter(localStorage),
                                        F ^= 2;
                                        continue;
                                    case 122:
                                        this.getAudioTest(),
                                        F |= 57;
                                        continue;
                                    case -142:
                                        (I = this.infoCache).push.apply(I, [79, 0].concat(a(h(k ? Number(k) : 0, 4)))),
                                        F += 12 | (t("41", 58369),
                                        31);
                                        continue;
                                    case -9:
                                        V = H = G = void 0;
                                        var H = [];
                                        try {
                                            webdriver,
                                            H.push(49, 2, 1)
                                        } catch (z) {
                                            H.push(49, 2, 0)
                                        }
                                        try {
                                            domAutomationController,
                                            domAutomation,
                                            H.push(50, 2, 1)
                                        } catch (z) {
                                            H.push(50, 2, 0)
                                        }
                                        H.push(51, 2, "object" === ("undefined" == typeof navigator ? "undefined" : e(navigator)) && (void 0 !== (null == (G = l(navigator)) ? void 0 : G.webdriver) || null != (G = l(navigator.__proto__)) && null != (G = G.webdriver) && null != (G = G.get) && G.toString()) ? 1 : 0);
                                        var G = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"].some(function(e) {
                                            return !window || !!window.document[e]
                                        })
                                          , V = ["phantom", "_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder", "$cdc_asdjflasutopfhvcZLmcfl_"].some(function(e) {
                                            return !window || !!window[e]
                                        });
                                        H.push(53, 2, G ? 1 : 0),
                                        H.push(54, 2, V ? 1 : 0),
                                        H.push(55, 2, !1 === (null == (G = window) || null == (V = G.navigator) ? void 0 : V.webdriver) ? 1 : 0),
                                        H.push(56, 2, Array.isArray(null == (G = window) || null == (V = G.navigator) ? void 0 : V.languages) && null != (G = window) && null != (V = G.navigator) && null != (G = V.languages) && G.length ? 1 : 0),
                                        H.push(57, 2, null != (V = window) && null != (G = V.navigator) && G.language ? 1 : 0),
                                        H.push(58, 2, null != (V = window) && V.innerWidth && null != (G = window) && G.matchMedia("(min-width: " + ((null == (V = window) ? void 0 : V.innerWidth) - 1) + "px)").matches ? 1 : 0),
                                        H.push(59, 2, (null == (G = window) || null == (V = G.screen) ? void 0 : V.availWidth) > (null == (G = window) || null == (V = G.screen) ? void 0 : V.width) || (null == (G = window) || null == (V = G.screen) ? void 0 : V.availHeight) > (null == (G = window) ? void 0 : G.screen.height) ? 1 : 0),
                                        H.push.apply(H, [61, 0].concat(a(g((null === eval || void 0 === eval || null == (V = eval.toString()) ? void 0 : V.length) || 0, 4)))),
                                        (G = this.infoCache).push.apply(G, H),
                                        F -= 24;
                                        continue;
                                    case -130:
                                        this.infoCache.push(74, 2, null != (R = window) && R.DeviceOrientationEvent ? 1 : 0),
                                        F ^= 1;
                                        continue;
                                    case -128:
                                        (D = this.infoCache).push.apply(D, [126, 0].concat(a(h((null == (N = navigator) ? void 0 : N.hardwareConcurrency) || 0, 4)))),
                                        F |= 5;
                                        continue;
                                    case 104:
                                        this.frameTest(),
                                        F |= 6;
                                        continue;
                                    case -97:
                                        k = (null == (O = localStorage) ? void 0 : O.getItem("SEE")) || "",
                                        F -= 13 | (t(" :", 39595),
                                        41);
                                        continue;
                                    case 110:
                                        this.getVideoTest(),
                                        F ^= 20;
                                        continue;
                                    case 4:
                                        (x = this.infoCache).push.apply(x, [70, 0].concat(a(h((null == (T = navigator) ? void 0 : T.deviceMemory) || 0, 4)))),
                                        F ^= 5 | t('"+', 61363);
                                        continue;
                                    case 41:
                                        (A = this.infoCache).push.apply(A, [72, 0].concat(a(h((null == (w = navigator) ? void 0 : w.maxTouchPoints) || 0, 4)))),
                                        F -= 171;
                                        continue;
                                    case -33:
                                        (v = []).push(62, 2, /^(?!.*Function).*[native code].*/.test((_ = Function).prototype.toString()) ? 1 : 0),
                                        v.push(63, 2, void 0 === (null == (_ = l(_.prototype)) || null == (_ = _.toString) || null == (_ = _.value) ? void 0 : _.prototype) ? 1 : 0),
                                        (_ = this.infoCache).push.apply(_, v),
                                        F |= 21 | t("62", 56350);
                                        continue;
                                    case -5:
                                        m = f = p = d = void 0,
                                        m = (m = (null == (m = null == (m = document) ? void 0 : m.createElement("canvas")) ? void 0 : m.getContext("webgl")) || (null == m ? void 0 : m.getContext("experimental-webgl"))) ? (p = d = "",
                                        null !== (f = m.getExtension("WEBGL_debug_renderer_info")) && (d = m.getParameter(f.UNMASKED_RENDERER_WEBGL) || "",
                                        p = m.getParameter(f.UNMASKED_VENDOR_WEBGL) || ""),
                                        f = {
                                            glRenderer: m.getParameter(m.RENDERER),
                                            glVendor: m.getParameter(m.VENDOR),
                                            unmaskRenderer: d,
                                            unmaskVendor: p
                                        },
                                        JSON.stringify(f)) : "webgl not support",
                                        (d = this.infoCache).push.apply(d, [124, 1].concat(a(h(m.length, 2)), a(u(m)))),
                                        F ^= 20 | t("*7", 55549);
                                        continue;
                                    case -59:
                                        (E = this.infoCache).push.apply(E, [68, 0].concat(a(h(null == (b = document) || null == (S = b.scripts) ? void 0 : S.length, 4)))),
                                        F &= 4;
                                        continue;
                                    case 123:
                                        this.getCanvasTest(),
                                        F += 43;
                                        continue;
                                    case -129:
                                        this.infoCache.push(75, 2, null != (P = window) && P.DeviceMotionEvent ? 1 : 0),
                                        F += (25 ^ t("5'", 45836)) % 19;
                                        continue;
                                    case -1:
                                        (c = (c = this).infoCache).push.apply(c, [64, 0].concat(a(g((null == (c = window) || null == (c = c.navigator) || null == (c = c.plugins) ? void 0 : c.length) || 0, 4)))),
                                        F ^= (22 ^ t("$(", 63367)) % 23;
                                        continue;
                                    case -123:
                                        window.addEventListener(t("kn~i`", 42071), function() {
                                            for (var e = 25; ; ) {
                                                switch (e) {
                                                case 9:
                                                    return this.stopCollectEnvInfo();
                                                case 25:
                                                    s(this, r),
                                                    e &= (37 ^ t("=$", 60743)) % 12;
                                                    continue
                                                }
                                                break
                                            }
                                        }
                                        .bind(this)),
                                        F ^= 31;
                                        continue;
                                    case -17:
                                        n = screen,
                                        i = void 0,
                                        i = (null == n ? void 0 : n.width) || 0,
                                        n = (null == n ? void 0 : n.height) || 0,
                                        o = "".concat(i, "*").concat(n),
                                        (i = this.infoCache).push.apply(i, [130, 1].concat(a(g(o.length, 2)), a(function() {
                                            var e = this;
                                            return Array.from(o).map(function(t) {
                                                return s(this, e),
                                                t.codePointAt(0) || 0
                                            }
                                            .bind(this))
                                        }()))),
                                        F ^= (27 ^ t("!.", 59813)) % 25;
                                        continue;
                                    case -107:
                                        (L = this.infoCache).push.apply(L, [125, 0].concat(a(h((null == (M = navigator) ? void 0 : M.oscpu) || 0, 4)))),
                                        F ^= 21;
                                        continue
                                    }
                                    break
                                }
                            } catch (j) {}
                            y -= 12 | (t(" +", 49590),
                            42);
                            continue;
                        case 25:
                            r = this,
                            y |= 22;
                            continue
                        }
                        break
                    }
                }
            }, {
                key: "setEnter",
                value: function(e) {
                    var t;
                    e.getItem("SEE") ? (t = e.getItem("SEE") || "",
                    e.setItem("SEE", String(16777215 < +t + 1 ? 16777215 : +t + 1))) : e.setItem("SEE", "1")
                }
            }, {
                key: "getElementTest",
                value: function() {
                    var e = document.getElementsByTagName("body")[0]
                      , t = document.createElement("div");
                    return (e = (t.setAttribute("id", "fake"),
                    t.style.visibility = "hidden",
                    t.style.height = "0px",
                    e.appendChild(t),
                    document.getElementById("fake"))) && (null == (t = window) || null == (t = t.getComputedStyle(e)) || null == (e = t.width) ? void 0 : e.split("px")[0]) || 0
                }
            }, {
                key: "frameTest",
                value: function() {
                    var t = document.createElement("iframe");
                    t.srcdoc = "blank page",
                    document.body.appendChild(t),
                    window.SETEST = "object" === e(null == t ? void 0 : t.contentWindow) ? "1" : "0",
                    t.remove()
                }
            }, {
                key: "getVideoTest",
                value: function() {
                    var e = document.createElement("video");
                    window.SETEST && (window.SETEST += "probably" === (null == e ? void 0 : e.canPlayType('video/mp4; codecs="avc1.42E01E"')) ? "1" : "0")
                }
            }, {
                key: "getAudioTest",
                value: function() {
                    var e = document.createElement("audio");
                    window.SETEST && (window.SETEST += "probably" === (null == e ? void 0 : e.canPlayType("audio/mpeg;")) ? "1" : "0")
                }
            }, {
                key: "getCanvasTest",
                value: function() {
                    var e = null == (e = document.createElement("canvas").getContext("2d")) ? void 0 : e.getImageData(0, 0, 1, 1);
                    window.SETEST && (window.SETEST += null != e && e.data[3] ? "1" : "0")
                }
            }, {
                key: "collectDeviceInfo",
                value: function() {
                    for (var e, t, r, n, i, o, c, l, d = 94; ; ) {
                        switch (d) {
                        case 40:
                            return l(c);
                        case 94:
                            e = this,
                            d -= 4;
                            continue;
                        case 42:
                            r = this.traceInstance.getTraceInfo(),
                            d -= 16;
                            continue;
                        case 50:
                            window.SECS = {
                                s: "",
                                c: 0
                            },
                            d += 7;
                            continue;
                        case 26:
                            try {
                                for (var p, m, g, _, y, S, x, A, w, R = 82; ; ) {
                                    switch (R) {
                                    case -100:
                                        C = [45, 61, 0, 2].concat(a(this.infoCache), [82, 0].concat(a(h(r ? r.mE.mm : 0, 4))), [84, 0].concat(a(h(r ? r.mE.ck : 0, 4))), [90, 0].concat(a(h(r ? r.tE.tm : 0, 4))), [108, 0].concat(a(h(t ? t.oI.doa : 0, 4))), [112, 0].concat(a(h(w || 0, 4))), [113, 0].concat(a(h(!(f.leftCount < 0) && --f.leftCount || 0, 4))), [114, 1].concat(a(h((null == (p = window.SECS) || null == (m = p.s) ? void 0 : m.length) || 0, 2)), a(u((null == (g = window.SECS) ? void 0 : g.s) || ""))), [115, 0].concat(a(h((null == (_ = window.SECS) ? void 0 : _.c) || 0, 4))), [-111, 2, 170 < (null == (y = window) ? void 0 : y.outerWidth) - (null == (S = window) ? void 0 : S.innerWidth) || 170 < (null == (x = window) ? void 0 : x.outerHeight) - (null == (A = window) ? void 0 : A.innerHeight) ? 1 : 0]),
                                        R -= 14;
                                        continue;
                                    case 82:
                                        w = this.count,
                                        R += 1;
                                        continue;
                                    case 83:
                                        this.count += 1,
                                        R -= 183;
                                        continue
                                    }
                                    break
                                }
                            } catch (I) {
                                var P, C = [45, 61, 0, 2].concat([117, 1].concat(a(h(100, 2)), a(u((null == I || null == (P = I.stack) ? void 0 : P.substr(0, 100)) || ""))))
                            }
                            d += 24;
                            continue;
                        case 157:
                            l = function(t) {
                                for (var r, n, i = 46; ; ) {
                                    switch (i) {
                                    case 40:
                                        s(this, e),
                                        i -= 7;
                                        continue;
                                    case 46:
                                        r = this,
                                        i ^= 6;
                                        continue;
                                    case 63:
                                        return t.replace(/[+/=]/g, function(e) {
                                            for (var t = 93; ; ) {
                                                switch (t) {
                                                case 93:
                                                    s(this, r),
                                                    t -= 188;
                                                    continue;
                                                case -95:
                                                    return n[e]
                                                }
                                                break
                                            }
                                        }
                                        .bind(this));
                                    case 33:
                                        n = {
                                            "+": "-",
                                            "/": "_",
                                            "=": "."
                                        },
                                        i |= 31;
                                        continue
                                    }
                                    break
                                }
                            }
                            .bind(this),
                            d ^= 181;
                            continue;
                        case 59:
                            for (var O = 0; O < C.length; O++)
                                n.push(35 ^ C[O]);
                            d |= 47;
                            continue;
                        case 90:
                            t = this.sensorInstance.getSensorInfo(),
                            d -= 48;
                            continue;
                        case 63:
                            i = new v([4183807412, 394484062, 1106561997, 2378328696, 630790222, 2546784104, 2891127470, 1922531795],[2215853858, 1643070585, 1849059804]),
                            d -= 54;
                            continue;
                        case 188:
                            c = function(e) {
                                for (var t, r = e.length, n = r % 3, i = [], o = 0, s = r - n; o < s; o += 16383)
                                    i.push(T(e, o, s < o + 16383 ? s : o + 16383));
                                return 1 == n ? (t = e[r - 1],
                                i.push(E[t >> 2] + E[t << 4 & 63] + "==")) : 2 == n && (t = (e[r - 2] << 8) + e[r - 1],
                                i.push(E[t >> 10] + E[t >> 4 & 63] + E[t << 2 & 63] + "=")),
                                i.join("")
                            }(function(e) {
                                for (var t = e.length < 0 ? 0 : 0 | function(e) {
                                    if (b <= e)
                                        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + b.toString(16) + " bytes");
                                    return 0 | e
                                }(e.length), r = function(e) {
                                    if (b < e)
                                        throw new RangeError('The value "' + e + '" is invalid for option "size"');
                                    return new ("undefined" != typeof Uint8Array ? Uint8Array : Array)(e)
                                }(t), n = 0; n < t; n += 1)
                                    r[n] = 255 & e[n];
                                return r
                            }(o)),
                            d -= 31;
                            continue;
                        case 57:
                            n = [],
                            d |= 2;
                            continue;
                        case 9:
                            o = i.chachaEncrypt(n),
                            d ^= 181;
                            continue
                        }
                        break
                    }
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return w.instance || (w.instance = new w),
                    this.instance
                }
            }]);
            var A = w;
            function w() {
                var e;
                return t(this, w),
                this.count = 100,
                this.isFirstEnter = !1,
                this.infoCache = [],
                this.sensorInstance = new d,
                this.traceInstance = new f,
                w.instance || ((w.instance = this).init(),
                null != (e = this.sensorInstance) && e.startdoadma(),
                null == (e = this.traceInstance)) || e.startTracking(),
                w.instance
            }
            return A.instance = null,
            A
        }
        ,
        "object" == o(t) && void 0 !== e ? e.exports = i() : void 0 !== (i = "function" == typeof i ? i.call(t, r, t, e) : i) && (e.exports = i)
    }
    ).call(this, r(1))
}
]);

function getSig4(reqData){

    e = {
    "url": "/pass/ksi18n/web/login/emailPassword",
    "query": {
        "caver": "2"
    },
    "form": reqData.form,
    "requestBody": null,
    "projectInfo": {
        "appKey": "q5yq4bjUut",
        "radarId": "0abb8037ac"
        }
    }

    var sig4;

    Jose.call("$encode", [e, {
        suc(e) {
            sig4 = e
        }
    }])

    return sig4;
}



function followSig4(reqData) {


    e = {
    "url": "/api/user_follow/follow",
    "query": {
        "caver": "2"
    },
    "form": null,
    "requestBody": {
        "dstId": parseInt(reqData.userId),
        "followScene": "web_user_home",
        "followId": reqData.userId
    },
    "projectInfo": {
        "appKey": "8M3oUipD76",
        "radarId": "5a39174a1m",
        "debug": false
        }
    }

    var sig4;

    Jose.call("$encode", [e, {
        suc(e) {
            sig4 = e;
        }
    }])

return sig4;

}

function point() {
    e = {
    "url": "/api/account/pointAndTicket",
    "query": {
        "caver": "2"
    },
    "form": null,
    "requestBody": null,
    "projectInfo": {
        "appKey": "8M3oUipD76",
        "radarId": "5a39174a1m",
        "debug": false
        }
    }

    var sig4;

    Jose.call("$encode", [e, {
        suc(e) {
            sig4 = e;
        }
    }])
    return sig4;
}

app.get('/point', (req, res) => {
    const sig4 = point(); 
    return res.json({ sig4 });
});

app.post('/gen',express.json(), (req, res) => {
    const { form } = req.body;
    if (!form) {
        return res.status(400).json({ error: 'Form data is required' });
    }

    const sig4 = getSig4({ form });
    return res.json({ sig4 });
});

app.post('/follow', express.json(), (req, res) => {


    const { userId } = req.body; 

    if (!userId) {
        return res.status(400).json({ error: 'userId is required' });
    }

    const reqData = {
        userId: userId
    };


    const sig4 = followSig4(reqData);

    return res.json({ sig4 });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

