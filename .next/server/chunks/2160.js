"use strict";exports.id=2160,exports.ids=[2160],exports.modules={1099:(e,s,t)=>{t.d(s,{H:()=>o});var a=t(1146);class i{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing="ease-out-quad"}load(e){e&&(void 0!==e.distance&&(this.distance=e.distance),void 0!==e.duration&&(this.duration=e.duration),void 0!==e.easing&&(this.easing=e.easing),void 0!==e.factor&&(this.factor=e.factor),void 0!==e.speed&&(this.speed=e.speed),void 0!==e.maxSpeed&&(this.maxSpeed=e.maxSpeed))}}class d extends i{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&void 0!==e.selectors&&(this.selectors=e.selectors)}}class o extends i{load(e){super.load(e),e&&(this.divs=(0,a.KH)(e.divs,e=>{let s=new d;return s.load(e),s}))}}},30:(e,s,t)=>{async function a(e,s=!0){await e.addInteractor("externalRepulse",async s=>{let{Repulser:a}=await t.e(6388).then(t.bind(t,6388));return new a(e,s)},s)}t.d(s,{loadExternalRepulseInteraction:()=>a}),t(1099)}};