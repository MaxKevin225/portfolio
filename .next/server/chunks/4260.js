"use strict";exports.id=4260,exports.ids=[4260],exports.modules={4260:(t,o,e)=>{e.d(o,{drawPolygon:()=>a});var n=e(1146);let r={x:0,y:0};function a(t,o,e){let{context:a}=t,l=e.count.numerator*e.count.denominator,i=e.count.numerator/e.count.denominator,s=Math.PI-(0,n.Id)(180*(i-2)/i);if(a){a.beginPath(),a.translate(o.x,o.y),a.moveTo(r.x,r.y);for(let t=0;t<l;t++)a.lineTo(e.length,r.y),a.translate(e.length,r.y),a.rotate(s)}}}};