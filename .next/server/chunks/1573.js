"use strict";exports.id=1573,exports.ids=[1573],exports.modules={5823:(t,i,s)=>{s.d(i,{z:()=>n});var o=s(3254);class n{constructor(){this.distance=100,this.links=new o.p}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),this.links.load(t.links))}}},3254:(t,i,s)=>{s.d(i,{p:()=>n});var o=s(1146);class n{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(t){t&&(void 0!==t.blink&&(this.blink=t.blink),void 0!==t.color&&(this.color=o.Oz.create(this.color,t.color)),void 0!==t.consent&&(this.consent=t.consent),void 0!==t.opacity&&(this.opacity=t.opacity))}}},1573:(t,i,s)=>{async function o(t,i=!0){await t.addInteractor("externalGrab",async t=>{let{Grabber:i}=await s.e(9378).then(s.bind(s,9378));return new i(t)},i)}s.d(i,{loadExternalGrabInteraction:()=>o}),s(5823),s(3254)}};