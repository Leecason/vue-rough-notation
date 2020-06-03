const t={animate:!0,animationDuration:800,animationDelay:0,color:"currentColor",strokeWidth:1,padding:5},e="http://www.w3.org/2000/svg";class s{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function n(t,e,s,n,i){return{type:"path",ops:c(t,e,s,n,i)}}function i(t,e){return function(t,e,s){const i=(t||[]).length;if(i>2){const e=[];for(let n=0;n<i-1;n++)e.push(...c(t[n][0],t[n][1],t[n+1][0],t[n+1][1],s));return e.push(...c(t[i-1][0],t[i-1][1],t[0][0],t[0][1],s)),{type:"path",ops:e}}return 2===i?n(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}(t,0,e)}function o(t,e,s,n,o){return i([[t,e],[t+s,e],[t+s,e+n],[t,e+n]],o)}function a(t,e,s,n,i){return function(t,e,s,n){const[i,o]=p(n.increment,t,e,n.rx,n.ry,1,n.increment*r(.1,r(.4,1,s),s),s);let a=l(i,null,s);if(!s.disableMultiStroke){const[i]=p(n.increment,t,e,n.rx,n.ry,1.5,0,s),o=l(i,null,s);a=a.concat(o)}return{estimatedPoints:o,opset:{type:"path",ops:a}}}(t,e,i,function(t,e,s){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),i=Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*n),o=2*Math.PI/i;let a=Math.abs(t/2),h=Math.abs(e/2);const r=1-s.curveFitting;return a+=u(a*r,s),h+=u(h*r,s),{increment:o,rx:a,ry:h}}(s,n,i)).opset}function h(t){return t.randomizer||(t.randomizer=new s(t.seed||0)),t.randomizer.next()}function r(t,e,s,n=1){return s.roughness*n*(h(s)*(e-t)+t)}function u(t,e,s=1){return r(-t,t,e,s)}function c(t,e,s,n,i,o=!1){const a=o?i.disableMultiStrokeFill:i.disableMultiStroke,h=d(t,e,s,n,i,!0,!1);if(a)return h;const r=d(t,e,s,n,i,!0,!0);return h.concat(r)}function d(t,e,s,n,i,o,a){const r=Math.pow(t-s,2)+Math.pow(e-n,2),c=Math.sqrt(r);let d=1;d=c<200?1:c>500?.4:-.0016668*c+1.233334;let l=i.maxRandomnessOffset||0;l*l*100>r&&(l=c/10);const p=l/2,f=.2+.2*h(i);let g=i.bowing*i.maxRandomnessOffset*(n-e)/200,m=i.bowing*i.maxRandomnessOffset*(t-s)/200;g=u(g,i,d),m=u(m,i,d);const w=[],_=()=>u(p,i,d),v=()=>u(l,i,d);return o&&(a?w.push({op:"move",data:[t+_(),e+_()]}):w.push({op:"move",data:[t+u(l,i,d),e+u(l,i,d)]})),a?w.push({op:"bcurveTo",data:[g+t+(s-t)*f+_(),m+e+(n-e)*f+_(),g+t+2*(s-t)*f+_(),m+e+2*(n-e)*f+_(),s+_(),n+_()]}):w.push({op:"bcurveTo",data:[g+t+(s-t)*f+v(),m+e+(n-e)*f+v(),g+t+2*(s-t)*f+v(),m+e+2*(n-e)*f+v(),s+v(),n+v()]}),w}function l(t,e,s){const n=t.length,i=[];if(n>3){const o=[],a=1-s.curveTightness;i.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<n;e++){const s=t[e];o[0]=[s[0],s[1]],o[1]=[s[0]+(a*t[e+1][0]-a*t[e-1][0])/6,s[1]+(a*t[e+1][1]-a*t[e-1][1])/6],o[2]=[t[e+1][0]+(a*t[e][0]-a*t[e+2][0])/6,t[e+1][1]+(a*t[e][1]-a*t[e+2][1])/6],o[3]=[t[e+1][0],t[e+1][1]],i.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(e&&2===e.length){const t=s.maxRandomnessOffset;i.push({op:"lineTo",data:[e[0]+u(t,s),e[1]+u(t,s)]})}}else 3===n?(i.push({op:"move",data:[t[1][0],t[1][1]]}),i.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===n&&i.push(...c(t[0][0],t[0][1],t[1][0],t[1][1],s));return i}function p(t,e,s,n,i,o,a,h){const r=[],c=[],d=u(.5,h)-Math.PI/2;c.push([u(o,h)+e+.9*n*Math.cos(d-t),u(o,h)+s+.9*i*Math.sin(d-t)]);for(let a=d;a<2*Math.PI+d-.01;a+=t){const t=[u(o,h)+e+n*Math.cos(a),u(o,h)+s+i*Math.sin(a)];r.push(t),c.push(t)}return c.push([u(o,h)+e+n*Math.cos(d+2*Math.PI+.5*a),u(o,h)+s+i*Math.sin(d+2*Math.PI+.5*a)]),c.push([u(o,h)+e+.98*n*Math.cos(d+a),u(o,h)+s+.98*i*Math.sin(d+a)]),c.push([u(o,h)+e+.9*n*Math.cos(d+.5*a),u(o,h)+s+.9*i*Math.sin(d+.5*a)]),[c,r]}const f={maxRandomnessOffset:2,roughness:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1},g=JSON.parse(JSON.stringify(f));g.disableMultiStroke=!0;const m=JSON.parse(JSON.stringify(f));m.roughness=3,m.disableMultiStroke=!0;class w{constructor(t,e){this._state="unattached",this._resizing=!1,this._animationGroupDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{if(this._resizing=!1,"showing"===this._state){const t=this.computeSize();t&&this.hasRectChanged(t)&&this.show()}},400))},this._e=t,this._config=e,this.attach()}get config(){return this._config}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rough_notation_keyframe_styles){const t=window.__rough_notation_keyframe_styles=document.createElement("style");t.textContent="\n    @keyframes rough-notation-dash {\n      to {\n        stroke-dashoffset: 0;\n      }\n    }\n    ",document.head.appendChild(t)}}();const t=this._svg=document.createElementNS(e,"svg"),s=t.style;s.position="absolute",s.top="0",s.left="0",s.overflow="visible",s.pointerEvents="none",s.width="100px",s.height="100px";const n="highlight"===this._config.type;if(this._e.insertAdjacentElement(n?"beforebegin":"afterend",t),this._state="not-showing",n){const t=window.getComputedStyle(this._e).position;(!t||"static"===t)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._resizeObserver&&this._resizeObserver.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._resizeObserver&&"ResizeObserver"in window&&(this._resizeObserver=new window.ResizeObserver(t=>{for(const e of t){let t=!0;if(e.contentRect){const s=this.computeSizeWithBounds(e.contentRect);s&&!this.hasRectChanged(s)&&(t=!1)}t&&this._resizeListener()}})),this._resizeObserver&&this._resizeObserver.observe(this._e)}sameInteger(t,e){return Math.round(t)===Math.round(e)}hasRectChanged(t){return!this._lastSize||!t||!(this.sameInteger(t.x,this._lastSize.x)&&this.sameInteger(t.y,this._lastSize.y)&&this.sameInteger(t.w,this._lastSize.w)&&this.sameInteger(t.h,this._lastSize.h))}isShowing(){return"not-showing"!==this._state}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this.show();break;case"not-showing":this.attach(),this._svg&&this.render(this._svg)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t){const s=this.computeSize();s&&(function(t,s,i,h){const r=[];let u=i.strokeWidth||2;const c=0===i.padding?0:i.padding||5,d=void 0===i.animate||!!i.animate,l=i.iterations||2;switch(i.type){case"underline":{const t=s.y+s.h+c;for(let e=0;e<l;e++)e%2?r.push(n(s.x+s.w,t,s.x,t,g)):r.push(n(s.x,t,s.x+s.w,t,g));break}case"strike-through":{const t=s.y+s.h/2;for(let e=0;e<l;e++)e%2?r.push(n(s.x+s.w,t,s.x,t,g)):r.push(n(s.x,t,s.x+s.w,t,g));break}case"box":{const t=s.x-c,e=s.y-c,n=s.w+2*c,i=s.h+2*c;for(let s=0;s<l;s++)r.push(o(t,e,n,i,g));break}case"crossed-off":{const t=s.x,e=s.y,i=t+s.w,o=e+s.h;for(let s=0;s<l;s++)s%2?r.push(n(i,o,t,e,g)):r.push(n(t,e,i,o,g));for(let s=0;s<l;s++)s%2?r.push(n(t,o,i,e,g)):r.push(n(i,e,t,o,g));break}case"circle":{const t=2*c,e=s.w+2*t,n=s.h+2*t,i=s.x-t+e/2,o=s.y-t+n/2,h=Math.floor(l/2),u=l-2*h;for(let t=0;t<h;t++)r.push(a(i,o,e,n,f));for(let t=0;t<u;t++)r.push(a(i,o,e,n,g));break}case"highlight":{u=.95*s.h;const t=s.y+s.h/2;for(let e=0;e<l;e++)e%2?r.push(n(s.x+s.w,t,s.x,t,m)):r.push(n(s.x,t,s.x+s.w,t,m));break}}if(r.length){const s=function(t){const e=[];for(const s of t){let t="";for(const n of s.ops){const s=n.data;switch(n.op){case"move":t.trim()&&e.push(t.trim()),t=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `}}t.trim()&&e.push(t.trim())}return e}(r),n=[],o=[];let a=0;const c=0===i.animationDuration?0:i.animationDuration||800,l=(0===i.animationDelay?0:i.animationDelay||0)+(h||0);for(const h of s){const s=document.createElementNS(e,"path");if(s.setAttribute("d",h),s.setAttribute("fill","none"),s.setAttribute("stroke",i.color||"currentColor"),s.setAttribute("stroke-width",""+u),d){const t=s.getTotalLength();n.push(t),a+=t}t.appendChild(s),o.push(s)}if(d){let t=0;for(let e=0;e<o.length;e++){const s=o[e],i=n[e],h=a?c*(i/a):0,r=l+t,u=s.style;u.strokeDashoffset=""+i,u.strokeDasharray=""+i,u.animation=`rough-notation-dash ${h}ms ease-out ${r}ms forwards`,t+=h}}}}(t,s,this._config,this._animationGroupDelay),this._lastSize=s,this._state="showing")}computeSize(){return this.computeSizeWithBounds(this._e.getBoundingClientRect())}computeSizeWithBounds(t){if(this._svg){const e=this._svg.getBoundingClientRect(),s=t;return{x:(s.x||s.left)-(e.x||e.left),y:(s.y||s.top)-(e.y||e.top),w:s.width,h:s.height}}return null}}const _=["underline","box","circle","highlight","strike-through","crossed-off"];var v=t=>({name:"RoughNotation",props:{type:{type:String,required:!0,validator:t=>_.indexOf(t)>-1},tag:{type:String,default:"span"},isShow:{type:Boolean,default:!1},animate:{type:Boolean,default:()=>t.animate},animationDuration:{type:Number,default:()=>t.animationDuration},animationDelay:{type:Number,default:()=>t.animationDelay},color:{type:String,default:()=>t.color},strokeWidth:{type:Number,default:()=>t.strokeWidth},padding:{type:Number,default:()=>t.padding}},mounted(){this.annotation=function(t,e){return new w(t,e)}(this.$el,{type:this.type,animate:this.animate,animationDuration:this.animationDuration,animationDelay:this.animationDelay,color:this.color,strokeWidth:this.strokeWidth,padding:this.padding}),this.$emit("init",this.annotation),this.$_dispatchGroup("annotation:add"),this.$watch("isShow",t=>{t?this.show():this.hide()},{immediate:!0})},beforeDestroy(){this.$_dispatchGroup("annotation:remove"),this.annotation&&this.annotation.remove()},methods:{show(){this.annotation&&this.annotation.show()},hide(){this.annotation&&this.annotation.hide()},isShowing(){return!(!this.annotation||!this.annotation.isShowing())},$_dispatchGroup(t){let e=this.$parent||this.$root,s=e.$options.name;for(;e&&(!s||"RoughNotationGroup"!==s);)e=e.$parent,e&&(s=e.$options.name);e&&e.$emit.call(e,t,this.annotation)}},render(t){const e=this.$slots.default;return this.tag?t(this.tag,null,e):e&&e[0]}}),y={name:"RoughNotationGroup",props:{isShow:{type:Boolean,default:!1},tag:{type:String,default:"div"}},data:()=>({annotations:[]}),watch:{isShow(t){t?this.show():this.hide()},annotations(t){this.group=function(t){let e=0;for(const s of t){const t=s;t._animationGroupDelay=e,e+=0===t.config.animationDuration?0:t.config.animationDuration||800}const s=[...t];return{show(){for(const t of s)t.show()},hide(){for(const t of s)t.hide()}}}(t)}},created(){this.$on("annotation:add",t=>{this.$_add(t)}),this.$on("annotation:remove",t=>{this.$_remove(t)})},mounted(){this.isShow&&this.show()},methods:{show(){this.group&&this.group.show()},hide(){this.group&&this.group.hide()},$_add(t){this.annotations.push(t)},$_remove(t){const e=this.annotations.indexOf(t);e>-1&&this.annotations.splice(e,1)}},render(t){const e=this.$slots.default;return this.tag?t(this.tag,null,e):e&&e[0]}};const b={install(e,s={}){const n={...t,...s},i=v(n);e.component("rough-notation",i),e.component("RoughNotation",i),e.component("rough-notation-group",y),e.component("RoughNotationGroup",y)}};!function(){let t;"undefined"!=typeof window?t=window:"undefined"!=typeof global&&(t=global),t&&t.Vue&&t.Vue.use(b)}();export default b;
