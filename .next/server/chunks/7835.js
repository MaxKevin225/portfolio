"use strict";exports.id=7835,exports.ids=[7835],exports.modules={7835:(t,e,i)=>{i.d(e,{Bouncer:()=>a});var n=i(1146);class o{constructor(){this.distance=200}load(t){t&&void 0!==t.distance&&(this.distance=t.distance)}}let s="bounce";class a extends n.L8{constructor(t){super(t)}clear(){}init(){let t=this.container,e=t.actualOptions.interactivity.modes.bounce;e&&(t.retina.bounceModeDistance=e.distance*t.retina.pixelRatio)}async interact(){let t=this.container,e=t.actualOptions.interactivity.events,o=t.interactivity.status===n.Wt,a=e.onHover.enable,c=e.onHover.mode,r=e.onDiv;if(o&&a&&(0,n.dB)(s,c)){let{mouseBounce:t}=await i.e(1076).then(i.bind(i,1076));t(this.container,t=>this.isEnabled(t))}else{let{divBounce:t}=await i.e(1076).then(i.bind(i,1076));t(this.container,r,s,t=>this.isEnabled(t))}}isEnabled(t){let e=this.container,i=e.actualOptions,o=e.interactivity.mouse,a=(t?.interactivity??i.interactivity).events,c=a.onDiv;return!!o.position&&a.onHover.enable&&(0,n.dB)(s,a.onHover.mode)||(0,n.wm)(s,c)}loadModeOptions(t,...e){for(let i of(t.bounce||(t.bounce=new o),e))t.bounce.load(i?.bounce)}reset(){}}}};