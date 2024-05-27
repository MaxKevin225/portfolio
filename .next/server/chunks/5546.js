"use strict";exports.id=5546,exports.ids=[5546],exports.modules={5546:(e,i,t)=>{t.d(i,{Bubbler:()=>u});var b=t(1146),l=t(6913);function o(e,i,t,l){return i>=t?(0,b.uZ)(e+(i-t)*l,e,i):i<t?(0,b.uZ)(e-(t-i)*l,i,e):void 0}let a="bubble";class u extends b.L8{constructor(e){super(e),this._clickBubble=()=>{let e=this.container,i=e.actualOptions,t=e.interactivity.mouse.clickPosition,l=i.interactivity.modes.bubble;if(!l||!t)return;e.bubble||(e.bubble={});let o=e.retina.bubbleModeDistance;if(!o||o<0)return;let a=e.particles.quadTree.queryCircle(t,o,e=>this.isEnabled(e)),{bubble:u}=e;for(let i of a){if(!u.clicking)continue;i.bubble.inRange=!u.durationEnd;let a=i.getPosition(),n=(0,b.Sp)(a,t),s=(new Date().getTime()-(e.interactivity.mouse.clickTime??0))/b.X5;s>l.duration&&(u.durationEnd=!0),s>2*l.duration&&(u.clicking=!1,u.durationEnd=!1);let r={bubbleObj:{optValue:e.retina.bubbleModeSize,value:i.bubble.radius},particlesObj:{optValue:(0,b.KI)(i.options.size.value)*e.retina.pixelRatio,value:i.size.value},type:"size"};this._process(i,n,s,r);let c={bubbleObj:{optValue:l.opacity,value:i.bubble.opacity},particlesObj:{optValue:(0,b.KI)(i.options.opacity.value),value:i.opacity?.value??1},type:"opacity"};this._process(i,n,s,c),!u.durationEnd&&n<=o?this._hoverBubbleColor(i,n):delete i.bubble.color}},this._hoverBubble=()=>{let e=this.container,i=e.interactivity.mouse.position,t=e.retina.bubbleModeDistance;if(t&&!(t<0)&&i)for(let l of e.particles.quadTree.queryCircle(i,t,e=>this.isEnabled(e))){l.bubble.inRange=!0;let o=l.getPosition(),a=(0,b.Sp)(o,i),u=1-a/t;a<=t?u>=0&&e.interactivity.status===b.Wt&&(this._hoverBubbleSize(l,u),this._hoverBubbleOpacity(l,u),this._hoverBubbleColor(l,u)):this.reset(l),e.interactivity.status===b.aM&&this.reset(l)}},this._hoverBubbleColor=(e,i,t)=>{let l=this.container.actualOptions,o=t??l.interactivity.modes.bubble;if(o){if(!e.bubble.finalColor){let i=o.color;if(!i)return;let t=(0,b.wA)(i);e.bubble.finalColor=(0,b.lN)(t)}if(e.bubble.finalColor){if(o.mix){e.bubble.color=void 0;let t=e.getFillColor();e.bubble.color=t?(0,b.lC)((0,b.oc)(t,e.bubble.finalColor,1-i,i)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}}},this._hoverBubbleOpacity=(e,i,t)=>{let l=this.container.actualOptions,a=t?.opacity??l.interactivity.modes.bubble?.opacity;if(!a)return;let u=e.options.opacity.value,n=o(e.opacity?.value??1,a,(0,b.KI)(u),i);void 0!==n&&(e.bubble.opacity=n)},this._hoverBubbleSize=(e,i,t)=>{let l=this.container,a=t?.size?t.size*l.retina.pixelRatio:l.retina.bubbleModeSize;if(void 0===a)return;let u=(0,b.KI)(e.options.size.value)*l.retina.pixelRatio,n=o(e.size.value,a,u,i);void 0!==n&&(e.bubble.radius=n)},this._process=(e,i,t,b)=>{let l=this.container,o=b.bubbleObj.optValue,a=l.actualOptions.interactivity.modes.bubble;if(!a||void 0===o)return;let u=a.duration,n=l.retina.bubbleModeDistance,s=b.particlesObj.optValue,r=b.bubbleObj.value,c=b.particlesObj.value??0,d=b.type;if(n&&!(n<0)&&o!==s){if(l.bubble||(l.bubble={}),l.bubble.durationEnd)r&&("size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity);else if(i<=n){if((r??c)!==o){let i=c-t*(c-o)/u;"size"===d&&(e.bubble.radius=i),"opacity"===d&&(e.bubble.opacity=i)}}else"size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity}},this._singleSelectorHover=(e,i,t)=>{let l=this.container,o=document.querySelectorAll(i),a=l.actualOptions.interactivity.modes.bubble;a&&o.length&&o.forEach(i=>{let o=l.retina.pixelRatio,u={x:(i.offsetLeft+.5*i.offsetWidth)*o,y:(i.offsetTop+.5*i.offsetHeight)*o},n=.5*i.offsetWidth*o,s="circle"===t.type?new b.Cd(u.x,u.y,n):new b.Ae(i.offsetLeft*o,i.offsetTop*o,i.offsetWidth*o,i.offsetHeight*o);for(let t of l.particles.quadTree.query(s,e=>this.isEnabled(e))){if(!s.contains(t.getPosition()))continue;t.bubble.inRange=!0;let l=a.divs,o=(0,b.iC)(l,i);t.bubble.div&&t.bubble.div===i||(this.clear(t,e,!0),t.bubble.div=i),this._hoverBubbleSize(t,1,o),this._hoverBubbleOpacity(t,1,o),this._hoverBubbleColor(t,1,o)}})},e.bubble||(e.bubble={}),this.handleClickMode=i=>{i===a&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,i,t){(!e.bubble.inRange||t)&&(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){let e=this.container,i=e.actualOptions.interactivity.modes.bubble;i&&(e.retina.bubbleModeDistance=i.distance*e.retina.pixelRatio,void 0!==i.size&&(e.retina.bubbleModeSize=i.size*e.retina.pixelRatio))}async interact(e){let i=this.container.actualOptions.interactivity.events,t=i.onHover,l=i.onClick,o=t.enable,u=t.mode,n=l.enable,s=l.mode,r=i.onDiv;o&&(0,b.dB)(a,u)?this._hoverBubble():n&&(0,b.dB)(a,s)?this._clickBubble():(0,b.XD)(a,r,(i,t)=>this._singleSelectorHover(e,i,t)),await Promise.resolve()}isEnabled(e){let i=this.container,t=i.actualOptions,l=i.interactivity.mouse,{onClick:o,onDiv:u,onHover:n}=(e?.interactivity??t.interactivity).events,s=(0,b.wm)(a,u);return(!!s||!!n.enable&&!!l.position||!!o.enable&&!!l.clickPosition)&&((0,b.dB)(a,n.mode)||(0,b.dB)(a,o.mode)||s)}loadModeOptions(e,...i){for(let t of(e.bubble||(e.bubble=new l.x),i))e.bubble.load(t?.bubble)}reset(e){e.bubble.inRange=!1}}}};