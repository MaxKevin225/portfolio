"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4430],{4430:function(e,t,i){i.d(t,{Collider:function(){return o}});var n=i(7837);async function s(e,t,n,s){switch(e.options.collisions.mode){case"absorb":{let{absorb:o}=await i.e(3707).then(i.bind(i,3707));o(e,t,n,s);break}case"bounce":{let{bounce:n}=await i.e(4567).then(i.bind(i,4567));n(e,t);break}case"destroy":{let{destroy:n}=await i.e(346).then(i.bind(i,346));n(e,t)}}}class o extends n.$S{clear(){}init(){}async interact(e,t){if(e.destroyed||e.spawning)return;let i=this.container,o=e.getPosition(),a=e.getRadius();for(let r of i.particles.quadTree.queryCircle(o,2*a)){if(e===r||!r.options.collisions.enable||e.options.collisions.mode!==r.options.collisions.mode||r.destroyed||r.spawning)continue;let l=r.getPosition(),c=r.getRadius();!(Math.abs(Math.round(o.z)-Math.round(l.z))>a+c)&&((0,n.Sp)(o,l)>a+c||await s(e,r,t,i.retina.pixelRatio))}}isEnabled(e){return e.options.collisions.enable}reset(){}constructor(e){super(e)}}}}]);