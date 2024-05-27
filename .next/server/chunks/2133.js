"use strict";exports.id=2133,exports.ids=[2133],exports.modules={2133:(i,e,t)=>{t.d(e,{LinkInstance:()=>l});var n=t(1146);function s(i,e){var t;let s=((t=i.map(i=>i.id)).sort((i,e)=>i-e),t.join("_")),l=e.get(s);return void 0===l&&(l=(0,n.sZ)(),e.set(s,l)),l}class l{constructor(i){this.container=i,this._drawLinkLine=(i,e)=>{let t=i.options.links;if(!t?.enable)return;let s=this.container,l=s.actualOptions,o=e.destination,a=i.getPosition(),r=o.getPosition(),d=e.opacity;s.canvas.draw(e=>{let c;let k=i.options.twinkle?.lines;if(k?.enable){let i=k.frequency,e=(0,n.tX)(k.color);(0,n.sZ)()<i&&e&&(c=e,d=(0,n.Gu)(k.opacity))}if(!c){let e=void 0!==t.id?s.particles.linksColors.get(t.id):s.particles.linksColor;c=(0,n.BE)(i,o,e)}if(!c)return;let p=i.retina.linksWidth??0,y=i.retina.linksDistance??0,{backgroundMask:h}=l;!function(i){let e=!1,{begin:t,end:s,maxDistance:l,context:o,canvasSize:a,width:r,backgroundMask:d,colorLine:c,opacity:k,links:p}=i;if((0,n.Sp)(t,s)<=l)(0,n.pS)(o,t,s),e=!0;else if(p.warp){let i,r;let d={x:s.x-a.width,y:s.y},c=(0,n.oW)(t,d);if(c.distance<=l){let e=t.y-c.dy/c.dx*t.x;i={x:0,y:e},r={x:a.width,y:e}}else{let e={x:s.x,y:s.y-a.height},o=(0,n.oW)(t,e);if(o.distance<=l){let e=-(t.y-o.dy/o.dx*t.x)/(o.dy/o.dx);i={x:e,y:0},r={x:e,y:a.height}}else{let e={x:s.x-a.width,y:s.y-a.height},o=(0,n.oW)(t,e);if(o.distance<=l){let e=t.y-o.dy/o.dx*t.x;r={x:(i={x:-e/(o.dy/o.dx),y:e}).x+a.width,y:i.y+a.height}}}}i&&r&&((0,n.pS)(o,t,i),(0,n.pS)(o,s,r),e=!0)}if(!e)return;o.lineWidth=r,d.enable&&(o.globalCompositeOperation=d.composite),o.strokeStyle=(0,n.iz)(c,k);let{shadow:y}=p;if(y.enable){let i=(0,n.tX)(y.color);i&&(o.shadowBlur=y.blur,o.shadowColor=(0,n.iz)(i))}o.stroke()}({context:e,width:p,begin:a,end:r,maxDistance:y,canvasSize:s.canvas.size,links:t,backgroundMask:h,colorLine:c,opacity:d})})},this._drawLinkTriangle=(i,e,t)=>{let s=i.options.links;if(!s?.enable)return;let l=s.triangles;if(!l.enable)return;let o=this.container,a=o.actualOptions,r=e.destination,d=t.destination,c=l.opacity??(e.opacity+t.opacity)*.5;c<=0||o.canvas.draw(e=>{let t=i.getPosition(),k=r.getPosition(),p=d.getPosition(),y=i.retina.linksDistance??0;if((0,n.Sp)(t,k)>y||(0,n.Sp)(p,k)>y||(0,n.Sp)(p,t)>y)return;let h=(0,n.tX)(l.color);if(!h){let e=void 0!==s.id?o.particles.linksColors.get(s.id):o.particles.linksColor;h=(0,n.BE)(i,r,e)}h&&function(i){let{context:e,pos1:t,pos2:s,pos3:l,backgroundMask:o,colorTriangle:a,opacityTriangle:r}=i;e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(s.x,s.y),e.lineTo(l.x,l.y),e.closePath(),o.enable&&(e.globalCompositeOperation=o.composite),e.fillStyle=(0,n.iz)(a,r),e.fill()}({context:e,pos1:t,pos2:k,pos3:p,backgroundMask:a.backgroundMask,colorTriangle:h,opacityTriangle:c})})},this._drawTriangles=(i,e,t,n)=>{let s=t.destination;if(!(i.links?.triangles.enable&&s.options.links?.triangles.enable))return;let l=s.links?.filter(i=>{let e=this._getLinkFrequency(s,i.destination);return s.options.links&&e<=s.options.links.frequency&&n.findIndex(e=>e.destination===i.destination)>=0});if(l?.length)for(let n of l){let l=n.destination;this._getTriangleFrequency(e,s,l)>i.links.triangles.frequency||this._drawLinkTriangle(e,t,n)}},this._getLinkFrequency=(i,e)=>s([i,e],this._freqs.links),this._getTriangleFrequency=(i,e,t)=>s([i,e,t],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}async drawParticle(i,e){let{links:t,options:n}=e;if(!t?.length)return;let s=t.filter(i=>n.links&&this._getLinkFrequency(e,i.destination)<=n.links.frequency);for(let i of s)this._drawTriangles(n,e,i,s),i.opacity>0&&(e.retina.linksWidth??0)>0&&this._drawLinkLine(e,i);await Promise.resolve()}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(i){if(i.links=[],!i.options.links)return;let e=this.container.retina.pixelRatio,{retina:t}=i,{distance:n,width:s}=i.options.links;t.linksDistance=n*e,t.linksWidth=s*e}particleDestroyed(i){i.links=[]}}}};