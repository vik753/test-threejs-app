(this["webpackJsonptest-three-app"]=this["webpackJsonptest-three-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),i=n(7),r=n.n(i),c=(n(13),n(4)),s=n(5),u=n(0),l=(n(14),function(e,t){void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new u.p,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:u.f.ROTATE,MIDDLE:u.f.DOLLY,RIGHT:u.f.PAN},this.touches={ONE:u.n.ROTATE,TWO:u.n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),c=r.NONE},this.update=function(){var t=new u.p,a=(new u.j).setFromUnitVectors(e.up,new u.p(0,1,0)),i=a.clone().inverse(),b=new u.p,f=new u.j;return function(){var e=n.object.position;return t.copy(e).sub(n.target),t.applyQuaternion(a),l.setFromVector3(t),n.autoRotate&&c===r.NONE&&N(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(l.theta+=m.theta*n.dampingFactor,l.phi+=m.phi*n.dampingFactor):(l.theta+=m.theta,l.phi+=m.phi),l.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=d,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),!0===n.enableDamping?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),t.setFromSpherical(l),t.applyQuaternion(i),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(m.theta*=1-n.dampingFactor,m.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(m.set(0,0,0),h.set(0,0,0)),d=1,!!(p||b.distanceToSquared(n.object.position)>s||8*(1-f.dot(n.object.quaternion))>s)&&(n.dispatchEvent(o),b.copy(n.object.position),f.copy(n.object.quaternion),p=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q,!1),n.domElement.removeEventListener("mousedown",_,!1),n.domElement.removeEventListener("wheel",Z,!1),n.domElement.removeEventListener("touchstart",B,!1),n.domElement.removeEventListener("touchend",V,!1),n.domElement.removeEventListener("touchmove",W,!1),document.removeEventListener("mousemove",F,!1),document.removeEventListener("mouseup",I,!1),n.domElement.removeEventListener("keydown",U,!1)};var n=this,o={type:"change"},a={type:"start"},i={type:"end"},r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},c=r.NONE,s=1e-6,l=new u.m,m=new u.m,d=1,h=new u.p,p=!1,b=new u.o,f=new u.o,E=new u.o,g=new u.o,v=new u.o,O=new u.o,y=new u.o,T=new u.o,w=new u.o;function L(){return Math.pow(.95,n.zoomSpeed)}function N(e){m.theta-=e}function P(e){m.phi-=e}var A=function(){var e=new u.p;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),h.add(e)}}(),j=function(){var e=new u.p;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),h.add(e)}}(),M=function(){var e=new u.p;return function(t,o){var a=n.domElement;if(n.object.isPerspectiveCamera){var i=n.object.position;e.copy(i).sub(n.target);var r=e.length();r*=Math.tan(n.object.fov/2*Math.PI/180),A(2*t*r/a.clientHeight,n.object.matrix),j(2*o*r/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(A(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),j(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(e){n.object.isPerspectiveCamera?d/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(e){n.object.isPerspectiveCamera?d*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function x(e){b.set(e.clientX,e.clientY)}function S(e){g.set(e.clientX,e.clientY)}function Y(e){if(1==e.touches.length)b.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);b.set(t,n)}}function C(e){if(1==e.touches.length)g.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(t,n)}}function D(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);y.set(0,o)}function H(e){if(1==e.touches.length)f.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),o=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(t,o)}E.subVectors(f,b).multiplyScalar(n.rotateSpeed);var a=n.domElement;N(2*Math.PI*E.x/a.clientHeight),P(2*Math.PI*E.y/a.clientHeight),b.copy(f)}function z(e){if(1==e.touches.length)v.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),o=.5*(e.touches[0].pageY+e.touches[1].pageY);v.set(t,o)}O.subVectors(v,g).multiplyScalar(n.panSpeed),M(O.x,O.y),g.copy(v)}function X(e){var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+o*o);T.set(0,a),w.set(0,Math.pow(T.y/y.y,n.zoomSpeed)),k(w.y),y.copy(T)}function _(e){if(!1!==n.enabled){var t;switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case u.f.DOLLY:if(!1===n.enableZoom)return;!function(e){y.set(e.clientX,e.clientY)}(e),c=r.DOLLY;break;case u.f.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;S(e),c=r.PAN}else{if(!1===n.enableRotate)return;x(e),c=r.ROTATE}break;case u.f.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;x(e),c=r.ROTATE}else{if(!1===n.enablePan)return;S(e),c=r.PAN}break;default:c=r.NONE}c!==r.NONE&&(document.addEventListener("mousemove",F,!1),document.addEventListener("mouseup",I,!1),n.dispatchEvent(a))}}function F(e){if(!1!==n.enabled)switch(e.preventDefault(),c){case r.ROTATE:if(!1===n.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),E.subVectors(f,b).multiplyScalar(n.rotateSpeed);var t=n.domElement;N(2*Math.PI*E.x/t.clientHeight),P(2*Math.PI*E.y/t.clientHeight),b.copy(f),n.update()}(e);break;case r.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY),w.subVectors(T,y),w.y>0?k(L()):w.y<0&&R(L()),y.copy(T),n.update()}(e);break;case r.PAN:if(!1===n.enablePan)return;!function(e){v.set(e.clientX,e.clientY),O.subVectors(v,g).multiplyScalar(n.panSpeed),M(O.x,O.y),g.copy(v),n.update()}(e)}}function I(e){!1!==n.enabled&&(document.removeEventListener("mousemove",F,!1),document.removeEventListener("mouseup",I,!1),n.dispatchEvent(i),c=r.NONE)}function Z(e){!1===n.enabled||!1===n.enableZoom||c!==r.NONE&&c!==r.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(a),function(e){e.deltaY<0?R(L()):e.deltaY>0&&k(L()),n.update()}(e),n.dispatchEvent(i))}function U(e){!1!==n.enabled&&!1!==n.enableKeys&&!1!==n.enablePan&&function(e){var t=!1;switch(e.keyCode){case n.keys.UP:M(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:M(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:M(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:M(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function B(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case u.n.ROTATE:if(!1===n.enableRotate)return;Y(e),c=r.TOUCH_ROTATE;break;case u.n.PAN:if(!1===n.enablePan)return;C(e),c=r.TOUCH_PAN;break;default:c=r.NONE}break;case 2:switch(n.touches.TWO){case u.n.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&D(e),n.enablePan&&C(e)}(e),c=r.TOUCH_DOLLY_PAN;break;case u.n.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&D(e),n.enableRotate&&Y(e)}(e),c=r.TOUCH_DOLLY_ROTATE;break;default:c=r.NONE}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(a)}}function W(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),c){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;H(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;z(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&X(e),n.enablePan&&z(e)}(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&X(e),n.enableRotate&&H(e)}(e),n.update();break;default:c=r.NONE}}function V(e){!1!==n.enabled&&(n.dispatchEvent(i),c=r.NONE)}function q(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",q,!1),n.domElement.addEventListener("mousedown",_,!1),n.domElement.addEventListener("wheel",Z,!1),n.domElement.addEventListener("touchstart",B,!1),n.domElement.addEventListener("touchend",V,!1),n.domElement.addEventListener("touchmove",W,!1),n.domElement.addEventListener("keydown",U,!1),-1===n.domElement.tabIndex&&(n.domElement.tabIndex=0),this.update()});(l.prototype=Object.create(u.e.prototype)).constructor=l;var m,d,h,p,b,f,E,g=function(e,t){l.call(this,e,t),this.mouseButtons.LEFT=u.f.PAN,this.mouseButtons.RIGHT=u.f.ROTATE,this.touches.ONE=u.n.PAN,this.touches.TWO=u.n.DOLLY_ROTATE};(g.prototype=Object.create(u.e.prototype)).constructor=g;var v=function(){var e=a.a.useState("cylinder"),t=Object(s.a)(e,2),n=t[0],o=t[1],i=a.a.useState(1),r=Object(s.a)(i,2),g=r[0],v=r[1],O=a.a.useState([]),y=Object(s.a)(O,2),T=y[0],w=y[1];a.a.useEffect((function(){b=document.querySelector(".scene-wrapper"),f=document.querySelector(".uuid-wrapper"),(m=new u.k).background=new u.b(3355443),(d=new u.d(16777215)).position.set(-1,2,2),m.add(d),(h=new u.i(75,b.clientWidth/b.clientHeight,.01,100)).position.set(5,5,10),(p=new u.q).setSize(b.clientWidth,b.clientHeight),b.appendChild(p.domElement),E=new l(h,p.domElement),function e(){p.render(m,h),requestAnimationFrame(e),E.update()}()}),[]);var L=function(e){console.log(e.target.dataset.uuid);var t=m.getObjectByProperty("uuid",e.target.dataset.uuid);t.geometry.dispose(),t.material.dispose(),m.remove(t),e.target.parentNode.removeChild(e.target)},N=function(){var e=new u.c(.5,.5,.5,20);e.scale(g,g,g);var t=new u.h({color:4500104}),n=new u.g(e,t),o=n.uuid;w((function(e){return[].concat(Object(c.a)(e),[o])}));var a=document.createElement("BUTTON");a.innerHTML="".concat(o),a.setAttribute("data-uuid",o),a.addEventListener("click",L),f.appendChild(a),n.position.x=Math.floor(5*Math.random()),n.position.y=Math.floor(5*Math.random()),n.position.z=Math.floor(5*Math.random()),m.add(n)},P=function(){var e=new u.a(.5,.5,.5);e.scale(g,g,g);var t=new u.h({color:4500104}),n=new u.g(e,t),o=n.uuid;w((function(e){return[].concat(Object(c.a)(e),[o])}));var a=document.createElement("BUTTON");a.innerHTML="".concat(o),a.setAttribute("data-uuid",o),a.addEventListener("click",L),f.appendChild(a),n.position.x=Math.floor(5*Math.random()),n.position.y=Math.floor(5*Math.random()),n.position.z=Math.floor(5*Math.random()),m.add(n)},A=function(){var e=new u.l(.5,20,20);e.scale(g,g,g);var t=new u.h({color:4500104}),n=new u.g(e,t),o=n.uuid;w((function(e){return[].concat(Object(c.a)(e),[o])}));var a=document.createElement("BUTTON");a.innerHTML="".concat(o),a.setAttribute("data-uuid",o),a.addEventListener("click",L),f.appendChild(a),n.position.x=Math.floor(5*Math.random()),n.position.y=Math.floor(5*Math.random()),n.position.z=Math.floor(5*Math.random()),m.add(n)};return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"figure"},"Choose a figure "),a.a.createElement("select",{name:"figures",id:"figures",onChange:function(e){var t=e.target.value;o((function(){return t}))}},a.a.createElement("option",{value:"cylinder"},"Cylinder"),a.a.createElement("option",{value:"box"},"Box"),a.a.createElement("option",{value:"sphere"},"Sphere")),a.a.createElement("br",null),a.a.createElement("label",{htmlFor:""},"Scale "),a.a.createElement("input",{id:"scale",type:"number",min:"1",max:"10",defaultValue:g,onChange:function(e){var t=+e.target.value;v((function(){return t}))}}),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return function(e){switch(console.log(T),n){case"cylinder":N();break;case"box":P();break;case"sphere":A()}}()}},"Create")),a.a.createElement("div",{className:"scene-wrapper"}),a.a.createElement("div",{className:"uuid-wrapper"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c98a4426.chunk.js.map