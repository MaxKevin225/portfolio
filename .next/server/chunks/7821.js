"use strict";exports.id=7821,exports.ids=[7821],exports.modules={7821:(e,t,s)=>{s.d(t,{PolygonDrawer:()=>a});var r=s(8722);class a extends r.y{getCenter(e,t){return{x:-t/(e.sides/3.5),y:-t/.76}}getSidesData(e,t){let s=e.sides;return{count:{denominator:1,numerator:s},length:2.66*t/(s/3)}}}},8722:(e,t,s)=>{s.d(t,{y:()=>a});var r=s(1146);class a{async draw(e){let{particle:t,radius:r}=e,a=this.getCenter(t,r),n=this.getSidesData(t,r),{drawPolygon:d}=await s.e(4260).then(s.bind(s,4260));d(e,a,n)}getSidesCount(e){let t=e.shapeData;return Math.round((0,r.Gu)(t?.sides??5))}}}};