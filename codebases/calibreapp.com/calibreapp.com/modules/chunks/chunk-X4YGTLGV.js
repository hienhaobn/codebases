import{b as o,o as v,r as l,v as y}from"./chunk-BBW4QHNN.js";import{f as d,i as x}from"./chunk-ORNWO27Z.js";var t=d(x());var D=d(x());function q(u,n){var e=(0,D.useRef)();return(!e.current||!v(n,e.current.key))&&(e.current={key:n,value:u()}),e.current.value}function O(u,n,e){e===void 0&&(e=!1);var i=(0,t.useContext)(l()),m=(0,t.useReducer)(function(w){return w+1},0),R=m[0],p=m[1],c=n?o(o({},n),{query:u}):{query:u},f=(0,t.useRef)(),r=f.current||(f.current=new y({options:c,context:i,onNewData:function(){r.ssrInitiated()?p():Promise.resolve().then(function(){return f.current&&p()})}}));r.setOptions(c),r.context=i;var k={options:o(o({},c),{onError:void 0,onCompleted:void 0}),context:i,tick:R},s=q(function(){return e?r.executeLazy():r.execute()},k),a=e?s[1]:s;return(0,t.useEffect)(function(){return function(){return r.cleanup()}},[]),(0,t.useEffect)(function(){return r.afterExecute({lazy:e})},[a.loading,a.networkStatus,a.error,a.data]),s}export{O as a};
//# sourceMappingURL=chunk-X4YGTLGV.js.map