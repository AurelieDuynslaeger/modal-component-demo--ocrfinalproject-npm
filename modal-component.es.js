import cr, { useEffect as $r } from "react";
function Dr(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Me = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Mr() {
  if (Ze) return ge;
  Ze = 1;
  var s = cr, D = Symbol.for("react.element"), I = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, _ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(d, v, S) {
    var c, h = {}, x = null, M = null;
    S !== void 0 && (x = "" + S), v.key !== void 0 && (x = "" + v.key), v.ref !== void 0 && (M = v.ref);
    for (c in v) l.call(v, c) && !u.hasOwnProperty(c) && (h[c] = v[c]);
    if (d && d.defaultProps) for (c in v = d.defaultProps, v) h[c] === void 0 && (h[c] = v[c]);
    return { $$typeof: D, type: d, key: x, ref: M, props: h, _owner: _.current };
  }
  return ge.Fragment = I, ge.jsx = C, ge.jsxs = C, ge;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Fr() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var s = cr, D = Symbol.for("react.element"), I = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), J = Symbol.iterator, F = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = J && e[J] || e[F];
      return typeof r == "function" ? r : null;
    }
    var U = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          a[f - 1] = arguments[f];
        N("error", e, a);
      }
    }
    function N(e, r, a) {
      {
        var f = U.ReactDebugCurrentFrame, j = f.getStackAddendum();
        j !== "" && (r += "%s", a = a.concat([j]));
        var $ = a.map(function(P) {
          return String(P);
        });
        $.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, $);
      }
    }
    var q = !1, o = !1, ne = !1, ye = !1, be = !1, ue;
    ue = Symbol.for("react.module.reference");
    function he(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === u || be || e === _ || e === S || e === c || ye || e === M || q || o || ne || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === h || e.$$typeof === C || e.$$typeof === d || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function ce(e, r, a) {
      var f = e.displayName;
      if (f)
        return f;
      var j = r.displayName || r.name || "";
      return j !== "" ? a + "(" + j + ")" : a;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function G(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case I:
          return "Portal";
        case u:
          return "Profiler";
        case _:
          return "StrictMode";
        case S:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return fe(r) + ".Consumer";
          case C:
            var a = e;
            return fe(a._context) + ".Provider";
          case v:
            return ce(e, e.render, "ForwardRef");
          case h:
            var f = e.displayName || null;
            return f !== null ? f : G(e.type) || "Memo";
          case x: {
            var j = e, $ = j._payload, P = j._init;
            try {
              return G(P($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, Z, re, oe, le, t, i, E;
    function m() {
    }
    m.__reactDisabledLog = !0;
    function p() {
      {
        if (ae === 0) {
          Z = console.log, re = console.info, oe = console.warn, le = console.error, t = console.group, i = console.groupCollapsed, E = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: m,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ae++;
      }
    }
    function O() {
      {
        if (ae--, ae === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: Z
            }),
            info: X({}, e, {
              value: re
            }),
            warn: X({}, e, {
              value: oe
            }),
            error: X({}, e, {
              value: le
            }),
            group: X({}, e, {
              value: t
            }),
            groupCollapsed: X({}, e, {
              value: i
            }),
            groupEnd: X({}, e, {
              value: E
            })
          });
        }
        ae < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var y = U.ReactCurrentDispatcher, b;
    function g(e, r, a) {
      {
        if (b === void 0)
          try {
            throw Error();
          } catch (j) {
            var f = j.stack.trim().match(/\n( *(at )?)/);
            b = f && f[1] || "";
          }
        return `
` + b + e;
      }
    }
    var w = !1, T;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      T = new B();
    }
    function n(e, r) {
      if (!e || w)
        return "";
      {
        var a = T.get(e);
        if (a !== void 0)
          return a;
      }
      var f;
      w = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = y.current, y.current = null, p();
      try {
        if (r) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (H) {
              f = H;
            }
            Reflect.construct(e, [], P);
          } else {
            try {
              P.call();
            } catch (H) {
              f = H;
            }
            e.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            f = H;
          }
          e();
        }
      } catch (H) {
        if (H && f && typeof H.stack == "string") {
          for (var R = H.stack.split(`
`), K = f.stack.split(`
`), W = R.length - 1, L = K.length - 1; W >= 1 && L >= 0 && R[W] !== K[L]; )
            L--;
          for (; W >= 1 && L >= 0; W--, L--)
            if (R[W] !== K[L]) {
              if (W !== 1 || L !== 1)
                do
                  if (W--, L--, L < 0 || R[W] !== K[L]) {
                    var ee = `
` + R[W].replace(" at new ", " at ");
                    return e.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", e.displayName)), typeof e == "function" && T.set(e, ee), ee;
                  }
                while (W >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        w = !1, y.current = $, O(), Error.prepareStackTrace = j;
      }
      var pe = e ? e.displayName || e.name : "", se = pe ? g(pe) : "";
      return typeof e == "function" && T.set(e, se), se;
    }
    function Q(e, r, a) {
      return n(e, !1);
    }
    function de(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return n(e, de(e));
      if (typeof e == "string")
        return g(e);
      switch (e) {
        case S:
          return g("Suspense");
        case c:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Q(e.render);
          case h:
            return ie(e.type, r, a);
          case x: {
            var f = e, j = f._payload, $ = f._init;
            try {
              return ie($(j), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, We = {}, qe = U.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var r = e._owner, a = ie(e.type, e._source, r ? r.type : null);
        qe.setExtraStackFrame(a);
      } else
        qe.setExtraStackFrame(null);
    }
    function dr(e, r, a, f, j) {
      {
        var $ = Function.call.bind(me);
        for (var P in e)
          if ($(e, P)) {
            var R = void 0;
            try {
              if (typeof e[P] != "function") {
                var K = Error((f || "React class") + ": " + a + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              R = e[P](r, P, f, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              R = W;
            }
            R && !(R instanceof Error) && (Re(j), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", a, P, typeof R), Re(null)), R instanceof Error && !(R.message in We) && (We[R.message] = !0, Re(j), Y("Failed %s type: %s", a, R.message), Re(null));
          }
      }
    }
    var vr = Array.isArray;
    function Se(e) {
      return vr(e);
    }
    function pr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function yr(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function Ue(e) {
      if (yr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(e)), Le(e);
    }
    var Ee = U.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, Ve, Oe;
    Oe = {};
    function hr(e) {
      if (me.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function mr(e) {
      if (me.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Er(e, r) {
      if (typeof e.ref == "string" && Ee.current && r && Ee.current.stateNode !== r) {
        var a = G(Ee.current.type);
        Oe[a] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Ee.current.type), e.ref), Oe[a] = !0);
      }
    }
    function gr(e, r) {
      {
        var a = function() {
          Ne || (Ne = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Tr(e, r) {
      {
        var a = function() {
          Ve || (Ve = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Rr = function(e, r, a, f, j, $, P) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: P,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function _r(e, r, a, f, j) {
      {
        var $, P = {}, R = null, K = null;
        a !== void 0 && (Ue(a), R = "" + a), mr(r) && (Ue(r.key), R = "" + r.key), hr(r) && (K = r.ref, Er(r, j));
        for ($ in r)
          me.call(r, $) && !br.hasOwnProperty($) && (P[$] = r[$]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for ($ in W)
            P[$] === void 0 && (P[$] = W[$]);
        }
        if (R || K) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          R && gr(P, L), K && Tr(P, L);
        }
        return Rr(e, R, K, j, f, Ee.current, P);
      }
    }
    var Pe = U.ReactCurrentOwner, ze = U.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var r = e._owner, a = ie(e.type, e._source, r ? r.type : null);
        ze.setExtraStackFrame(a);
      } else
        ze.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Je() {
      {
        if (Pe.current) {
          var e = G(Pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Sr(e) {
      return "";
    }
    var Be = {};
    function Or(e) {
      {
        var r = Je();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Or(r);
        if (Be[a])
          return;
        Be[a] = !0;
        var f = "";
        e && e._owner && e._owner !== Pe.current && (f = " It was passed a child from " + G(e._owner.type) + "."), ve(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, f), ve(null);
      }
    }
    function Ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Se(e))
          for (var a = 0; a < e.length; a++) {
            var f = e[a];
            we(f) && Ke(f, r);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var j = V(e);
          if (typeof j == "function" && j !== e.entries)
            for (var $ = j.call(e), P; !(P = $.next()).done; )
              we(P.value) && Ke(P.value, r);
        }
      }
    }
    function Pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          a = r.propTypes;
        else
          return;
        if (a) {
          var f = G(r);
          dr(a, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var j = G(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var f = r[a];
          if (f !== "children" && f !== "key") {
            ve(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ve(null);
            break;
          }
        }
        e.ref !== null && (ve(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var Xe = {};
    function He(e, r, a, f, j, $) {
      {
        var P = he(e);
        if (!P) {
          var R = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Sr();
          K ? R += K : R += Je();
          var W;
          e === null ? W = "null" : Se(e) ? W = "array" : e !== void 0 && e.$$typeof === D ? (W = "<" + (G(e.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, R);
        }
        var L = _r(e, r, a, j, $);
        if (L == null)
          return L;
        if (P) {
          var ee = r.children;
          if (ee !== void 0)
            if (f)
              if (Se(ee)) {
                for (var pe = 0; pe < ee.length; pe++)
                  Ge(ee[pe], e);
                Object.freeze && Object.freeze(ee);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(ee, e);
        }
        if (me.call(r, "key")) {
          var se = G(e), H = Object.keys(r).filter(function(Ir) {
            return Ir !== "key";
          }), xe = H.length > 0 ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xe[se + xe]) {
            var kr = H.length > 0 ? "{" + H.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, se, kr, se), Xe[se + xe] = !0;
          }
        }
        return e === l ? Cr(L) : Pr(L), L;
      }
    }
    function wr(e, r, a) {
      return He(e, r, a, !0);
    }
    function xr(e, r, a) {
      return He(e, r, a, !1);
    }
    var jr = xr, Ar = wr;
    Te.Fragment = l, Te.jsx = jr, Te.jsxs = Ar;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Me.exports = Mr() : Me.exports = Fr();
var te = Me.exports, Fe = { exports: {} }, _e = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Yr() {
  if (er) return A;
  er = 1;
  var s = typeof Symbol == "function" && Symbol.for, D = s ? Symbol.for("react.element") : 60103, I = s ? Symbol.for("react.portal") : 60106, l = s ? Symbol.for("react.fragment") : 60107, _ = s ? Symbol.for("react.strict_mode") : 60108, u = s ? Symbol.for("react.profiler") : 60114, C = s ? Symbol.for("react.provider") : 60109, d = s ? Symbol.for("react.context") : 60110, v = s ? Symbol.for("react.async_mode") : 60111, S = s ? Symbol.for("react.concurrent_mode") : 60111, c = s ? Symbol.for("react.forward_ref") : 60112, h = s ? Symbol.for("react.suspense") : 60113, x = s ? Symbol.for("react.suspense_list") : 60120, M = s ? Symbol.for("react.memo") : 60115, J = s ? Symbol.for("react.lazy") : 60116, F = s ? Symbol.for("react.block") : 60121, V = s ? Symbol.for("react.fundamental") : 60117, U = s ? Symbol.for("react.responder") : 60118, Y = s ? Symbol.for("react.scope") : 60119;
  function N(o) {
    if (typeof o == "object" && o !== null) {
      var ne = o.$$typeof;
      switch (ne) {
        case D:
          switch (o = o.type, o) {
            case v:
            case S:
            case l:
            case u:
            case _:
            case h:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case c:
                case J:
                case M:
                case C:
                  return o;
                default:
                  return ne;
              }
          }
        case I:
          return ne;
      }
    }
  }
  function q(o) {
    return N(o) === S;
  }
  return A.AsyncMode = v, A.ConcurrentMode = S, A.ContextConsumer = d, A.ContextProvider = C, A.Element = D, A.ForwardRef = c, A.Fragment = l, A.Lazy = J, A.Memo = M, A.Portal = I, A.Profiler = u, A.StrictMode = _, A.Suspense = h, A.isAsyncMode = function(o) {
    return q(o) || N(o) === v;
  }, A.isConcurrentMode = q, A.isContextConsumer = function(o) {
    return N(o) === d;
  }, A.isContextProvider = function(o) {
    return N(o) === C;
  }, A.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === D;
  }, A.isForwardRef = function(o) {
    return N(o) === c;
  }, A.isFragment = function(o) {
    return N(o) === l;
  }, A.isLazy = function(o) {
    return N(o) === J;
  }, A.isMemo = function(o) {
    return N(o) === M;
  }, A.isPortal = function(o) {
    return N(o) === I;
  }, A.isProfiler = function(o) {
    return N(o) === u;
  }, A.isStrictMode = function(o) {
    return N(o) === _;
  }, A.isSuspense = function(o) {
    return N(o) === h;
  }, A.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === S || o === u || o === _ || o === h || o === x || typeof o == "object" && o !== null && (o.$$typeof === J || o.$$typeof === M || o.$$typeof === C || o.$$typeof === d || o.$$typeof === c || o.$$typeof === V || o.$$typeof === U || o.$$typeof === Y || o.$$typeof === F);
  }, A.typeOf = N, A;
}
var k = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Wr() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    var s = typeof Symbol == "function" && Symbol.for, D = s ? Symbol.for("react.element") : 60103, I = s ? Symbol.for("react.portal") : 60106, l = s ? Symbol.for("react.fragment") : 60107, _ = s ? Symbol.for("react.strict_mode") : 60108, u = s ? Symbol.for("react.profiler") : 60114, C = s ? Symbol.for("react.provider") : 60109, d = s ? Symbol.for("react.context") : 60110, v = s ? Symbol.for("react.async_mode") : 60111, S = s ? Symbol.for("react.concurrent_mode") : 60111, c = s ? Symbol.for("react.forward_ref") : 60112, h = s ? Symbol.for("react.suspense") : 60113, x = s ? Symbol.for("react.suspense_list") : 60120, M = s ? Symbol.for("react.memo") : 60115, J = s ? Symbol.for("react.lazy") : 60116, F = s ? Symbol.for("react.block") : 60121, V = s ? Symbol.for("react.fundamental") : 60117, U = s ? Symbol.for("react.responder") : 60118, Y = s ? Symbol.for("react.scope") : 60119;
    function N(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === S || n === u || n === _ || n === h || n === x || typeof n == "object" && n !== null && (n.$$typeof === J || n.$$typeof === M || n.$$typeof === C || n.$$typeof === d || n.$$typeof === c || n.$$typeof === V || n.$$typeof === U || n.$$typeof === Y || n.$$typeof === F);
    }
    function q(n) {
      if (typeof n == "object" && n !== null) {
        var Q = n.$$typeof;
        switch (Q) {
          case D:
            var de = n.type;
            switch (de) {
              case v:
              case S:
              case l:
              case u:
              case _:
              case h:
                return de;
              default:
                var ie = de && de.$$typeof;
                switch (ie) {
                  case d:
                  case c:
                  case J:
                  case M:
                  case C:
                    return ie;
                  default:
                    return Q;
                }
            }
          case I:
            return Q;
        }
      }
    }
    var o = v, ne = S, ye = d, be = C, ue = D, he = c, ce = l, fe = J, G = M, X = I, ae = u, Z = _, re = h, oe = !1;
    function le(n) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(n) || q(n) === v;
    }
    function t(n) {
      return q(n) === S;
    }
    function i(n) {
      return q(n) === d;
    }
    function E(n) {
      return q(n) === C;
    }
    function m(n) {
      return typeof n == "object" && n !== null && n.$$typeof === D;
    }
    function p(n) {
      return q(n) === c;
    }
    function O(n) {
      return q(n) === l;
    }
    function y(n) {
      return q(n) === J;
    }
    function b(n) {
      return q(n) === M;
    }
    function g(n) {
      return q(n) === I;
    }
    function w(n) {
      return q(n) === u;
    }
    function T(n) {
      return q(n) === _;
    }
    function B(n) {
      return q(n) === h;
    }
    k.AsyncMode = o, k.ConcurrentMode = ne, k.ContextConsumer = ye, k.ContextProvider = be, k.Element = ue, k.ForwardRef = he, k.Fragment = ce, k.Lazy = fe, k.Memo = G, k.Portal = X, k.Profiler = ae, k.StrictMode = Z, k.Suspense = re, k.isAsyncMode = le, k.isConcurrentMode = t, k.isContextConsumer = i, k.isContextProvider = E, k.isElement = m, k.isForwardRef = p, k.isFragment = O, k.isLazy = y, k.isMemo = b, k.isPortal = g, k.isProfiler = w, k.isStrictMode = T, k.isSuspense = B, k.isValidElementType = N, k.typeOf = q;
  }()), k;
}
var tr;
function fr() {
  return tr || (tr = 1, process.env.NODE_ENV === "production" ? _e.exports = Yr() : _e.exports = Wr()), _e.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var je, nr;
function qr() {
  if (nr) return je;
  nr = 1;
  var s = Object.getOwnPropertySymbols, D = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
  function l(u) {
    if (u == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(u);
  }
  function _() {
    try {
      if (!Object.assign)
        return !1;
      var u = new String("abc");
      if (u[5] = "de", Object.getOwnPropertyNames(u)[0] === "5")
        return !1;
      for (var C = {}, d = 0; d < 10; d++)
        C["_" + String.fromCharCode(d)] = d;
      var v = Object.getOwnPropertyNames(C).map(function(c) {
        return C[c];
      });
      if (v.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        S[c] = c;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return je = _() ? Object.assign : function(u, C) {
    for (var d, v = l(u), S, c = 1; c < arguments.length; c++) {
      d = Object(arguments[c]);
      for (var h in d)
        D.call(d, h) && (v[h] = d[h]);
      if (s) {
        S = s(d);
        for (var x = 0; x < S.length; x++)
          I.call(d, S[x]) && (v[S[x]] = d[S[x]]);
      }
    }
    return v;
  }, je;
}
var Ae, ar;
function Ye() {
  if (ar) return Ae;
  ar = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ae = s, Ae;
}
var ke, or;
function lr() {
  return or || (or = 1, ke = Function.call.bind(Object.prototype.hasOwnProperty)), ke;
}
var Ie, ir;
function Lr() {
  if (ir) return Ie;
  ir = 1;
  var s = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var D = Ye(), I = {}, l = lr();
    s = function(u) {
      var C = "Warning: " + u;
      typeof console < "u" && console.error(C);
      try {
        throw new Error(C);
      } catch {
      }
    };
  }
  function _(u, C, d, v, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in u)
        if (l(u, c)) {
          var h;
          try {
            if (typeof u[c] != "function") {
              var x = Error(
                (v || "React class") + ": " + d + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            h = u[c](C, c, v, d, null, D);
          } catch (J) {
            h = J;
          }
          if (h && !(h instanceof Error) && s(
            (v || "React class") + ": type specification of " + d + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in I)) {
            I[h.message] = !0;
            var M = S ? S() : "";
            s(
              "Failed " + d + " type: " + h.message + (M ?? "")
            );
          }
        }
    }
  }
  return _.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (I = {});
  }, Ie = _, Ie;
}
var $e, sr;
function Ur() {
  if (sr) return $e;
  sr = 1;
  var s = fr(), D = qr(), I = Ye(), l = lr(), _ = Lr(), u = function() {
  };
  process.env.NODE_ENV !== "production" && (u = function(d) {
    var v = "Warning: " + d;
    typeof console < "u" && console.error(v);
    try {
      throw new Error(v);
    } catch {
    }
  });
  function C() {
    return null;
  }
  return $e = function(d, v) {
    var S = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function h(t) {
      var i = t && (S && t[S] || t[c]);
      if (typeof i == "function")
        return i;
    }
    var x = "<<anonymous>>", M = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: N,
      element: q(),
      elementType: o(),
      instanceOf: ne,
      node: he(),
      objectOf: be,
      oneOf: ye,
      oneOfType: ue,
      shape: fe,
      exact: G
    };
    function J(t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    }
    function F(t, i) {
      this.message = t, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    F.prototype = Error.prototype;
    function V(t) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, E = 0;
      function m(O, y, b, g, w, T, B) {
        if (g = g || x, T = T || b, B !== I) {
          if (v) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = g + ":" + b;
            !i[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[Q] = !0, E++);
          }
        }
        return y[b] == null ? O ? y[b] === null ? new F("The " + w + " `" + T + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new F("The " + w + " `" + T + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : t(y, b, g, w, T);
      }
      var p = m.bind(null, !1);
      return p.isRequired = m.bind(null, !0), p;
    }
    function U(t) {
      function i(E, m, p, O, y, b) {
        var g = E[m], w = Z(g);
        if (w !== t) {
          var T = re(g);
          return new F(
            "Invalid " + O + " `" + y + "` of type " + ("`" + T + "` supplied to `" + p + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return V(i);
    }
    function Y() {
      return V(C);
    }
    function N(t) {
      function i(E, m, p, O, y) {
        if (typeof t != "function")
          return new F("Property `" + y + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var b = E[m];
        if (!Array.isArray(b)) {
          var g = Z(b);
          return new F("Invalid " + O + " `" + y + "` of type " + ("`" + g + "` supplied to `" + p + "`, expected an array."));
        }
        for (var w = 0; w < b.length; w++) {
          var T = t(b, w, p, O, y + "[" + w + "]", I);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return V(i);
    }
    function q() {
      function t(i, E, m, p, O) {
        var y = i[E];
        if (!d(y)) {
          var b = Z(y);
          return new F("Invalid " + p + " `" + O + "` of type " + ("`" + b + "` supplied to `" + m + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(t);
    }
    function o() {
      function t(i, E, m, p, O) {
        var y = i[E];
        if (!s.isValidElementType(y)) {
          var b = Z(y);
          return new F("Invalid " + p + " `" + O + "` of type " + ("`" + b + "` supplied to `" + m + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(t);
    }
    function ne(t) {
      function i(E, m, p, O, y) {
        if (!(E[m] instanceof t)) {
          var b = t.name || x, g = le(E[m]);
          return new F("Invalid " + O + " `" + y + "` of type " + ("`" + g + "` supplied to `" + p + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return V(i);
    }
    function ye(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), C;
      function i(E, m, p, O, y) {
        for (var b = E[m], g = 0; g < t.length; g++)
          if (J(b, t[g]))
            return null;
        var w = JSON.stringify(t, function(B, n) {
          var Q = re(n);
          return Q === "symbol" ? String(n) : n;
        });
        return new F("Invalid " + O + " `" + y + "` of value `" + String(b) + "` " + ("supplied to `" + p + "`, expected one of " + w + "."));
      }
      return V(i);
    }
    function be(t) {
      function i(E, m, p, O, y) {
        if (typeof t != "function")
          return new F("Property `" + y + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var b = E[m], g = Z(b);
        if (g !== "object")
          return new F("Invalid " + O + " `" + y + "` of type " + ("`" + g + "` supplied to `" + p + "`, expected an object."));
        for (var w in b)
          if (l(b, w)) {
            var T = t(b, w, p, O, y + "." + w, I);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return V(i);
    }
    function ue(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && u("Invalid argument supplied to oneOfType, expected an instance of array."), C;
      for (var i = 0; i < t.length; i++) {
        var E = t[i];
        if (typeof E != "function")
          return u(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(E) + " at index " + i + "."
          ), C;
      }
      function m(p, O, y, b, g) {
        for (var w = [], T = 0; T < t.length; T++) {
          var B = t[T], n = B(p, O, y, b, g, I);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && w.push(n.data.expectedType);
        }
        var Q = w.length > 0 ? ", expected one of type [" + w.join(", ") + "]" : "";
        return new F("Invalid " + b + " `" + g + "` supplied to " + ("`" + y + "`" + Q + "."));
      }
      return V(m);
    }
    function he() {
      function t(i, E, m, p, O) {
        return X(i[E]) ? null : new F("Invalid " + p + " `" + O + "` supplied to " + ("`" + m + "`, expected a ReactNode."));
      }
      return V(t);
    }
    function ce(t, i, E, m, p) {
      return new F(
        (t || "React class") + ": " + i + " type `" + E + "." + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function fe(t) {
      function i(E, m, p, O, y) {
        var b = E[m], g = Z(b);
        if (g !== "object")
          return new F("Invalid " + O + " `" + y + "` of type `" + g + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var w in t) {
          var T = t[w];
          if (typeof T != "function")
            return ce(p, O, y, w, re(T));
          var B = T(b, w, p, O, y + "." + w, I);
          if (B)
            return B;
        }
        return null;
      }
      return V(i);
    }
    function G(t) {
      function i(E, m, p, O, y) {
        var b = E[m], g = Z(b);
        if (g !== "object")
          return new F("Invalid " + O + " `" + y + "` of type `" + g + "` " + ("supplied to `" + p + "`, expected `object`."));
        var w = D({}, E[m], t);
        for (var T in w) {
          var B = t[T];
          if (l(t, T) && typeof B != "function")
            return ce(p, O, y, T, re(B));
          if (!B)
            return new F(
              "Invalid " + O + " `" + y + "` key `" + T + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(E[m], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var n = B(b, T, p, O, y + "." + T, I);
          if (n)
            return n;
        }
        return null;
      }
      return V(i);
    }
    function X(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(X);
          if (t === null || d(t))
            return !0;
          var i = h(t);
          if (i) {
            var E = i.call(t), m;
            if (i !== t.entries) {
              for (; !(m = E.next()).done; )
                if (!X(m.value))
                  return !1;
            } else
              for (; !(m = E.next()).done; ) {
                var p = m.value;
                if (p && !X(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(t, i) {
      return t === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function Z(t) {
      var i = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : ae(i, t) ? "symbol" : i;
    }
    function re(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var i = Z(t);
      if (i === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function oe(t) {
      var i = re(t);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function le(t) {
      return !t.constructor || !t.constructor.name ? x : t.constructor.name;
    }
    return M.checkPropTypes = _, M.resetWarningCache = _.resetWarningCache, M.PropTypes = M, M;
  }, $e;
}
var De, ur;
function Nr() {
  if (ur) return De;
  ur = 1;
  var s = Ye();
  function D() {
  }
  function I() {
  }
  return I.resetWarningCache = D, De = function() {
    function l(C, d, v, S, c, h) {
      if (h !== s) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    l.isRequired = l;
    function _() {
      return l;
    }
    var u = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: _,
      element: l,
      elementType: l,
      instanceOf: _,
      node: l,
      objectOf: _,
      oneOf: _,
      oneOfType: _,
      shape: _,
      exact: _,
      checkPropTypes: I,
      resetWarningCache: D
    };
    return u.PropTypes = u, u;
  }, De;
}
if (process.env.NODE_ENV !== "production") {
  var Vr = fr(), zr = !0;
  Fe.exports = Ur()(Vr.isElement, zr);
} else
  Fe.exports = Nr()();
var Jr = Fe.exports;
const z = /* @__PURE__ */ Dr(Jr), Br = ({
  isOpen: s,
  title: D,
  text: I,
  onClose: l,
  primaryButton: _,
  secondaryButton: u,
  backgroundColor: C = "white",
  textColor: d = "black",
  buttonStyle: v = {},
  borderRadius: S = "4px",
  padding: c = "20px",
  boxShadow: h = "0 2px 10px rgba(0,0,0,0.1)"
}) => ($r(() => {
  const x = (M) => {
    M.key === "Escape" && l();
  };
  return s && window.addEventListener("keydown", x), () => {
    window.removeEventListener("keydown", x);
  };
}, [s, l]), s ? /* @__PURE__ */ te.jsx("div", { className: "modal-overlay", onClick: l, role: "presentation", children: /* @__PURE__ */ te.jsxs(
  "div",
  {
    className: "modal-container",
    onClick: (x) => x.stopPropagation(),
    style: {
      backgroundColor: C,
      color: d,
      borderRadius: S,
      padding: c,
      boxShadow: h
    },
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description",
    children: [
      /* @__PURE__ */ te.jsxs("div", { className: "modal-header", children: [
        D && /* @__PURE__ */ te.jsx("h2", { id: "modal-title", children: D }),
        /* @__PURE__ */ te.jsx("button", { className: "modal-close", onClick: l, "aria-label": "Close modal", children: "×" })
      ] }),
      /* @__PURE__ */ te.jsx("div", { className: "modal-body", id: "modal-description", children: /* @__PURE__ */ te.jsx("p", { children: I }) }),
      /* @__PURE__ */ te.jsxs("div", { className: "modal-footer", children: [
        _ && /* @__PURE__ */ te.jsx(
          "button",
          {
            style: v.primary,
            onClick: _.onClick,
            "aria-label": _.label,
            children: _.label
          }
        ),
        u && /* @__PURE__ */ te.jsx(
          "button",
          {
            style: v.secondary,
            onClick: u.onClick,
            "aria-label": u.label,
            children: u.label
          }
        )
      ] })
    ]
  }
) }) : null);
Br.propTypes = {
  isOpen: z.bool.isRequired,
  title: z.string,
  text: z.string.isRequired,
  onClose: z.func.isRequired,
  primaryButton: z.shape({
    label: z.string.isRequired,
    onClick: z.func.isRequired
  }),
  secondaryButton: z.shape({
    label: z.string.isRequired,
    onClick: z.func.isRequired
  }),
  backgroundColor: z.string,
  textColor: z.string,
  buttonStyle: z.shape({
    primary: z.object,
    secondary: z.object
  }),
  borderRadius: z.string,
  padding: z.string,
  boxShadow: z.string
};
export {
  Br as default
};
