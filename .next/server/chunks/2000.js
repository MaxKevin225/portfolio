"use strict";exports.id=2e3,exports.ids=[2e3],exports.modules={2e3:(e,t,i)=>{i.d(t,{BounceOutMode:()=>o});var s=i(1146);class o{constructor(e){this.container=e,this.modes=["bounce","split"]}async update(e,t,o,n){if(!this.modes.includes(n))return;let r=this.container,a=!1;for(let[,i]of r.plugins)if(void 0!==i.particleBounce&&(a=await i.particleBounce(e,o,t)),a)break;if(a)return;let c=e.getPosition(),u=e.offset,d=e.getRadius(),l=(0,s.M_)(c,d),p=r.canvas.size,{bounceHorizontal:f,bounceVertical:h}=await i.e(979).then(i.bind(i,979));f({particle:e,outMode:n,direction:t,bounds:l,canvasSize:p,offset:u,size:d}),h({particle:e,outMode:n,direction:t,bounds:l,canvasSize:p,offset:u,size:d})}}}};