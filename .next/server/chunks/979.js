"use strict";exports.id=979,exports.ids=[979],exports.modules={979:(t,i,o)=>{o.d(i,{bounceHorizontal:()=>n,bounceVertical:()=>r});var e=o(1146);function n(t){if("bounce"!==t.outMode&&"split"!==t.outMode||"left"!==t.direction&&"right"!==t.direction)return;t.bounds.right<0&&"left"===t.direction?t.particle.position.x=t.size+t.offset.x:t.bounds.left>t.canvasSize.width&&"right"===t.direction&&(t.particle.position.x=t.canvasSize.width-t.size-t.offset.x);let i=t.particle.velocity.x,o=!1;if("right"===t.direction&&t.bounds.right>=t.canvasSize.width&&i>0||"left"===t.direction&&t.bounds.left<=0&&i<0){let i=(0,e.Gu)(t.particle.options.bounce.horizontal.value);t.particle.velocity.x*=-i,o=!0}if(!o)return;let n=t.offset.x+t.size;t.bounds.right>=t.canvasSize.width&&"right"===t.direction?t.particle.position.x=t.canvasSize.width-n:t.bounds.left<=0&&"left"===t.direction&&(t.particle.position.x=n),"split"===t.outMode&&t.particle.destroy()}function r(t){if("bounce"!==t.outMode&&"split"!==t.outMode||"bottom"!==t.direction&&"top"!==t.direction)return;t.bounds.bottom<0&&"top"===t.direction?t.particle.position.y=t.size+t.offset.y:t.bounds.top>t.canvasSize.height&&"bottom"===t.direction&&(t.particle.position.y=t.canvasSize.height-t.size-t.offset.y);let i=t.particle.velocity.y,o=!1;if("bottom"===t.direction&&t.bounds.bottom>=t.canvasSize.height&&i>0||"top"===t.direction&&t.bounds.top<=0&&i<0){let i=(0,e.Gu)(t.particle.options.bounce.vertical.value);t.particle.velocity.y*=-i,o=!0}if(!o)return;let n=t.offset.y+t.size;t.bounds.bottom>=t.canvasSize.height&&"bottom"===t.direction?t.particle.position.y=t.canvasSize.height-n:t.bounds.top<=0&&"top"===t.direction&&(t.particle.position.y=n),"split"===t.outMode&&t.particle.destroy()}}};