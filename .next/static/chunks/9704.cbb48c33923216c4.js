"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9704],{6089:function(e,t,n){n.d(t,{y:function(){return a}});var r=n(7837);class a{async draw(e){let{particle:t,radius:r}=e,a=this.getCenter(t,r),u=this.getSidesData(t,r),{drawPolygon:s}=await n.e(6415).then(n.bind(n,339));s(e,a,u)}getSidesCount(e){var t;let n=e.shapeData;return Math.round((0,r.Gu)(null!==(t=null==n?void 0:n.sides)&&void 0!==t?t:5))}}},9704:function(e,t,n){n.d(t,{TriangleDrawer:function(){return a}});var r=n(6089);class a extends r.y{getCenter(e,t){return{x:-t,y:t/1.66}}getSidesCount(){return 3}getSidesData(e,t){return{count:{denominator:2,numerator:3},length:2*t}}}}}]);