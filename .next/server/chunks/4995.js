"use strict";exports.id=4995,exports.ids=[4995],exports.modules={4995:(a,t,n)=>{async function e(a,t=!0){let{PolygonDrawer:e}=await n.e(7821).then(n.bind(n,7821));await a.addShape("polygon",new e,t)}async function i(a,t=!0){let{TriangleDrawer:e}=await n.e(4363).then(n.bind(n,4363));await a.addShape("triangle",new e,t)}async function o(a,t=!0){await e(a,t),await i(a,t)}n.d(t,{loadPolygonShape:()=>o})}};