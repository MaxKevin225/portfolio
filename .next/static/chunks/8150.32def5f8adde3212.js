"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8150],{8150:function(e,t,a){a.d(t,{EmojiDrawer:function(){return l}});var i=a(7837),n=a(3335);let o='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class l{destroy(){for(let[e,t]of this._emojiShapeDict)t instanceof ImageBitmap&&(null==t||t.close(),this._emojiShapeDict.delete(e))}async draw(e){let{drawEmoji:t}=await a.e(6184).then(a.bind(a,3785));t(e)}async init(e){let t=e.actualOptions;if(!n.h.find(e=>(0,i.dB)(e,t.particles.shape.type)))return;let a=[(0,i.mx)(o)],l=n.h.map(e=>t.particles.shape.options[e]).find(e=>!!e);l&&(0,i.KH)(l,e=>{e.font&&a.push((0,i.mx)(e.font))}),await Promise.all(a)}particleDestroy(e){delete e.emojiData}async particleInit(e,t){var a;let n;let l=t.shapeData;if(!(null==l?void 0:l.value))return;let r=(0,i.wA)(l.value,t.randomIndexData),s=null!==(a=l.font)&&void 0!==a?a:o;if(!r)return;let c="".concat(r,"_").concat(s),f=this._emojiShapeDict.get(c);if(f){t.emojiData=f;return}let m=2*(0,i.KI)(t.size.value),p=(0,i.KI)(t.size.value);if("undefined"!=typeof OffscreenCanvas){let e=new OffscreenCanvas(m,m),t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*p,"px ").concat(s),t.textBaseline="middle",t.textAlign="center",t.fillText(r,p,p),n=e.transferToImageBitmap()}else{let e=document.createElement("canvas");e.width=m,e.height=m;let t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*p,"px ").concat(s),t.textBaseline="middle",t.textAlign="center",t.fillText(r,p,p),n=e}this._emojiShapeDict.set(c,n),t.emojiData=n,await Promise.resolve()}constructor(){this._emojiShapeDict=new Map}}}}]);