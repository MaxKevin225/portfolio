"use strict";exports.id=267,exports.ids=[267],exports.modules={267:(t,s,e)=>{e.d(s,{Pusher:()=>o});var i=e(1146),r=e(9097);class o extends i.L8{constructor(t){super(t),this.handleClickMode=t=>{if("push"!==t)return;let s=this.container,e=s.actualOptions.interactivity.modes.push;if(!e)return;let r=(0,i.Gu)(e.quantity);if(r<=0)return;let o=(0,i.c8)([void 0,...e.groups]),u=void 0!==o?s.actualOptions.particles.groups[o]:void 0;s.particles.push(r,s.interactivity.mouse,u,o)}}clear(){}init(){}async interact(){}isEnabled(){return!0}loadModeOptions(t,...s){for(let e of(t.push||(t.push=new r.p),s))t.push.load(e?.push)}reset(){}}}};