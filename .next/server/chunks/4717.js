"use strict";exports.id=4717,exports.ids=[4717],exports.modules={722:(i,t,e)=>{e.d(t,{y:()=>a});var s=e(1146),o=e(1212),n=e(8652);class a{constructor(){this.blink=!1,this.color=new s.Oz,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new o.u,this.triangles=new n.e,this.width=1,this.warp=!1}load(i){i&&(void 0!==i.id&&(this.id=i.id),void 0!==i.blink&&(this.blink=i.blink),this.color=s.Oz.create(this.color,i.color),void 0!==i.consent&&(this.consent=i.consent),void 0!==i.distance&&(this.distance=i.distance),void 0!==i.enable&&(this.enable=i.enable),void 0!==i.frequency&&(this.frequency=i.frequency),void 0!==i.opacity&&(this.opacity=i.opacity),this.shadow.load(i.shadow),this.triangles.load(i.triangles),void 0!==i.width&&(this.width=i.width),void 0!==i.warp&&(this.warp=i.warp))}}},1212:(i,t,e)=>{e.d(t,{u:()=>o});var s=e(1146);class o{constructor(){this.blur=5,this.color=new s.Oz,this.color.value="#000",this.enable=!1}load(i){i&&(void 0!==i.blur&&(this.blur=i.blur),this.color=s.Oz.create(this.color,i.color),void 0!==i.enable&&(this.enable=i.enable))}}},8652:(i,t,e)=>{e.d(t,{e:()=>o});var s=e(1146);class o{constructor(){this.enable=!1,this.frequency=1}load(i){i&&(void 0!==i.color&&(this.color=s.Oz.create(this.color,i.color)),void 0!==i.enable&&(this.enable=i.enable),void 0!==i.frequency&&(this.frequency=i.frequency),void 0!==i.opacity&&(this.opacity=i.opacity))}}},4717:(i,t,e)=>{async function s(i,t=!0){await i.addInteractor("particlesLinks",async i=>{let{Linker:t}=await e.e(9474).then(e.bind(e,9474));return new t(i)},t)}e.d(t,{loadParticlesLinksInteraction:()=>a});class o{constructor(){this.id="links"}async getPlugin(i){let{LinkInstance:t}=await e.e(2133).then(e.bind(e,2133));return new t(i)}loadOptions(){}needsPlugin(){return!0}}async function n(i,t=!0){let e=new o;await i.addPlugin(e,t)}async function a(i,t=!0){await s(i,t),await n(i,t)}e(722),e(1212),e(8652)}};