"use strict";exports.id=2580,exports.ids=[2580],exports.modules={2580:(e,t,r)=>{r.d(t,{Remover:()=>s});var o=r(1146),i=r(4480);class s extends o.L8{constructor(e){super(e),this.handleClickMode=e=>{let t=this.container,r=t.actualOptions;if(!r.interactivity.modes.remove||"remove"!==e)return;let i=(0,o.Gu)(r.interactivity.modes.remove.quantity);t.particles.removeQuantity(i)}}clear(){}init(){}async interact(){}isEnabled(){return!0}loadModeOptions(e,...t){for(let r of(e.remove||(e.remove=new i.J),t))e.remove.load(r?.remove)}reset(){}}}};