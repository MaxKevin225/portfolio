(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1555],{249:function(t,e,n){Promise.resolve().then(n.bind(n,5462))},5462:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(3827),a=n(703),i=n(2876);function s(){return(0,r.jsx)(i.i,{position:"bottom",className:"bottom-0 right-0 hidden md:inline-block md:absolute ",children:(0,r.jsx)(a.default,{src:"/home-4.png",width:"400",height:"400",className:"w-full h-full ",alt:"Particles ",style:{opacity:"0.2"}})})}var o=t=>{let{children:e}=t;return(0,r.jsx)("div",{className:"w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6",children:e})},l=n(6806),u=n(5036),c=()=>(0,r.jsx)("div",{className:"grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:flex md:grid-cols-4 md:gap-6",children:l.nT.map(t=>{let{id:e,endCounter:n,text:a,lineRight:i,lineRightMobile:s}=t;return(0,r.jsx)("div",{className:"".concat(i&&"ltr"),children:(0,r.jsxs)("div",{className:"".concat(i&&"px-4 border-2 border-transparent md:border-e-gray-100"," ").concat(s&&"border-e-gray-100"),children:[(0,r.jsxs)("p",{className:"flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary",children:["+ ",(0,r.jsx)(u.ZP,{end:n,start:0,duration:5})]}),(0,r.jsx)("p",{className:"text-xs uppercase max-w-[100px]",children:a})]})},e)})}),f=()=>(0,r.jsx)("div",{className:"flex flex-col justify-center divide-y divide-slate-200",children:(0,r.jsx)("div",{className:"w-full max-w-3xl mx-auto md:pb-40 md:pt-20",children:(0,r.jsx)("div",{className:"-my-6",children:l.zP.map(t=>(0,r.jsxs)("div",{className:"relative py-6 pl-8 sm:pl-32 group",children:[(0,r.jsx)("h3",{className:"mb-1 text-2xl font-bold sm:mb-0",children:t.title}),(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-start mb-1  group-last:before:hidden before:absolute  before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem]  before:self-start before:-translate-x-1/2  before:translate-y-3 after:absolute after:left-2  sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600  after:border-4 after:box-content after:border-slate-50  after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2  after:translate-y-1.5",children:[(0,r.jsx)("time",{className:"sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full",children:t.date}),(0,r.jsx)("div",{className:"text-xl font-bold text-gray-400",children:t.subtitle})]}),(0,r.jsx)("div",{className:"text-slate-400",children:t.description})]},t.id))})})}),d=n(8112),p=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.default,{}),(0,r.jsxs)(o,{children:[(0,r.jsx)(s,{}),(0,r.jsxs)("h1",{className:"text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10",children:["Toda mi"," ",(0,r.jsx)("span",{className:"font-bold text-secondary",children:"trayectoria profesional"})]}),(0,r.jsx)(c,{}),(0,r.jsx)(f,{})]})]})},8112:function(t,e,n){"use strict";n.r(e);var r=n(3827),a=n(8647),i=n(1348),s=n(1840);e.default=()=>(0,r.jsx)(i.M,{mode:"wait",children:(0,r.jsx)("div",{children:(0,r.jsx)(s.E.div,{className:"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]",variants:a.ap,initial:"initial",animate:"animate",exit:"exit",transition:{delay:.2,duration:.6,ease:"easeInOut"}})})})},375:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return a}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},a=function(){function t(t,e,n){var a=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var e=t-a.startTime;a.remaining=a.duration-e,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(e,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(e,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(e/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),e<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,i=(Math.abs(t).toFixed(a.options.decimalPlaces)+"").split(".");if(e=i[0],n=i.length>1?a.options.decimal+i[1]:"",a.options.useGrouping){r="";for(var s=3,o=0,l=0,u=e.length;l<u;++l)a.options.useIndianSeparators&&4===l&&(s=2,o=1),0!==l&&o%s==0&&(r=a.options.separator+r),o++,r=e[u-l-1]+r;e=r}return a.options.numerals&&a.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return a.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return a.options.numerals[+t]})),(t<0?"-":"")+a.options.prefix+e+n+a.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return a.handleScroll(a)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<e&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},5036:function(t,e,n){"use strict";var r=n(4090),a=n(375);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){var r,a;r=e,a=n[e],(r=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(r))in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var c=void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return c(function(){e.current=t}),r.useCallback(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)},[])}var d=function(t,e){var n=e.decimal,r=e.decimals,i=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,f=e.separator,d=e.start,p=e.suffix,m=e.useEasing,h=e.useGrouping,b=e.useIndianSeparators,g=e.enableScrollSpy,y=e.scrollSpyDelay,x=e.scrollSpyOnce,v=e.plugin;return new a.CountUp(t,o,{startVal:d,duration:i,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:p,plugin:v,useEasing:m,useIndianSeparators:b,useGrouping:h,enableScrollSpy:g,scrollSpyDelay:y,scrollSpyOnce:x})},p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},h=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i,s,o=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(t){u=!0,a=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw a}}return o}}(t,2)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return s(s({},m),e)},[t]),a=n.ref,i=n.startOnMount,o=n.enableReinitialize,c=n.delay,h=n.onEnd,b=n.onStart,g=n.onPauseResume,y=n.onReset,x=n.onUpdate,v=l(n,p),V=r.useRef(),w=r.useRef(),j=r.useRef(!1),E=f(function(){return d("string"==typeof a?a:a.current,v)}),O=f(function(t){var e=V.current;if(e&&!t)return e;var n=E();return V.current=n,n}),S=f(function(){var t=function(){return O(!0).start(function(){null==h||h({pauseResume:N,reset:F,start:A,update:P})})};c&&c>0?w.current=setTimeout(t,1e3*c):t(),null==b||b({pauseResume:N,reset:F,update:P})}),N=f(function(){O().pauseResume(),null==g||g({reset:F,start:A,update:P})}),F=f(function(){O().el&&(w.current&&clearTimeout(w.current),O().reset(),null==y||y({pauseResume:N,start:A,update:P}))}),P=f(function(t){O().update(t),null==x||x({pauseResume:N,reset:F,start:A})}),A=f(function(){F(),S()}),R=f(function(t){i&&(t&&F(),S())});return r.useEffect(function(){j.current?o&&R(!0):(j.current=!0,R())},[o,j,R,c,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect(function(){return function(){F()}},[F]),{start:A,pauseResume:N,reset:F,update:P,getCountUp:O}},b=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,a=t.containerProps,i=t.children,u=t.style,c=l(t,b),d=r.useRef(null),p=r.useRef(!1),m=h(s(s({},c),{},{ref:d,startOnMount:"function"!=typeof i||0===t.delay,enableReinitialize:!1})),g=m.start,y=m.reset,x=m.update,v=m.pauseResume,V=m.getCountUp,w=f(function(){g()}),j=f(function(e){t.preserveValue||y(),x(e)}),E=f(function(){if("function"==typeof t.children&&!(d.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}V()});r.useEffect(function(){E()},[E]),r.useEffect(function(){p.current&&j(t.end)},[t.end,j]);var O=n&&t;return(r.useEffect(function(){n&&p.current&&w()},[w,n,O]),r.useEffect(function(){!n&&p.current&&w()},[w,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect(function(){p.current=!0},[]),"function"==typeof i)?i({countUpRef:d,start:g,reset:y,update:x,pauseResume:v,getCountUp:V}):r.createElement("span",o({className:e,ref:d,style:u},a),void 0!==t.start?V().formattingFn(t.start):"")}}},function(t){t.O(0,[7958,8414,7108,2971,8069,1744],function(){return t(t.s=249)}),_N_E=t.O()}]);