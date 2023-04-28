"use strict";(self.webpackChunktaekwonworld=self.webpackChunktaekwonworld||[]).push([[3830],{73830:function(e,n,t){t.d(n,{Y2:function(){return re}});var r=t(72791),i=t(8983),a=t(54753),o=t(80184),u=t(66706),l=t(86344),s=t(73339),d=t(76817),c=t(47226);function f(e){return e.innerRadius}function g(e){return e.outerRadius}function v(e){return e.startAngle}function h(e){return e.endAngle}function p(e){return e&&e.padAngle}function R(e,n,t,r,i,a,o,u){var l=t-e,s=r-n,d=o-i,f=u-a,g=f*l-d*s;if(!(g*g<c.Ho))return[e+(g=(d*(n-a)-f*(e-i))/g)*l,n+g*s]}function A(e,n,t,r,i,a,o){var u=e-t,l=n-r,s=(o?a:-a)/(0,c._b)(u*u+l*l),d=s*l,f=-s*u,g=e+d,v=n+f,h=t+d,p=r+f,R=(g+h)/2,A=(v+p)/2,x=h-g,L=p-v,m=x*x+L*L,y=i-a,b=g*p-h*v,k=(L<0?-1:1)*(0,c._b)((0,c.Fp)(0,y*y*m-b*b)),M=(b*L-x*k)/m,C=(-b*x-L*k)/m,O=(b*L+x*k)/m,I=(-b*x+L*k)/m,T=M-R,w=C-A,j=O-R,W=I-A;return T*T+w*w>j*j+W*W&&(M=O,C=I),{cx:M,cy:C,x01:-d,y01:-f,x11:M*(i/y-1),y11:C*(i/y-1)}}function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}var L={pointerEvents:"none"},m=function(e){var n=e.label,t=e.style,r=(0,i.Fg)();return(0,o.jsx)(a.animated.g,{transform:t.transform,opacity:t.progress,style:L,children:(0,o.jsx)(a.animated.text,{textAnchor:"middle",dominantBaseline:"central",style:x({},r.labels.text,{fill:t.textColor}),children:n})})},y=function(e){var n=e%(2*Math.PI);return n<0&&(n+=2*Math.PI),n},b=function(e,n){return e.filter((function(e){return Math.abs((0,i.vi)(e.arc.endAngle-e.arc.startAngle))>=n}))},k={startAngle:{enter:function(e){return x({},e,{endAngle:e.startAngle})},update:function(e){return e},leave:function(e){return x({},e,{startAngle:e.endAngle})}},middleAngle:{enter:function(e){var n=e.startAngle+(e.endAngle-e.startAngle)/2;return x({},e,{startAngle:n,endAngle:n})},update:function(e){return e},leave:function(e){var n=e.startAngle+(e.endAngle-e.startAngle)/2;return x({},e,{startAngle:n,endAngle:n})}},endAngle:{enter:function(e){return x({},e,{startAngle:e.endAngle})},update:function(e){return e},leave:function(e){return x({},e,{endAngle:e.startAngle})}},innerRadius:{enter:function(e){return x({},e,{outerRadius:e.innerRadius})},update:function(e){return e},leave:function(e){return x({},e,{innerRadius:e.outerRadius})}},centerRadius:{enter:function(e){var n=e.innerRadius+(e.outerRadius-e.innerRadius)/2;return x({},e,{innerRadius:n,outerRadius:n})},update:function(e){return e},leave:function(e){var n=e.innerRadius+(e.outerRadius-e.innerRadius)/2;return x({},e,{innerRadius:n,outerRadius:n})}},outerRadius:{enter:function(e){return x({},e,{innerRadius:e.outerRadius})},update:function(e){return e},leave:function(e){return x({},e,{outerRadius:e.innerRadius})}},pushIn:{enter:function(e){return x({},e,{innerRadius:e.innerRadius-e.outerRadius+e.innerRadius,outerRadius:e.innerRadius})},update:function(e){return e},leave:function(e){return x({},e,{innerRadius:e.outerRadius,outerRadius:e.outerRadius+e.outerRadius-e.innerRadius})}},pushOut:{enter:function(e){return x({},e,{innerRadius:e.outerRadius,outerRadius:e.outerRadius+e.outerRadius-e.innerRadius})},update:function(e){return e},leave:function(e){return x({},e,{innerRadius:e.innerRadius-e.outerRadius+e.innerRadius,outerRadius:e.innerRadius})}}},M=function(e,n){return(0,r.useMemo)((function(){var t=k[e];return{enter:function(e){return x({progress:0},t.enter(e.arc),n?n.enter(e):{})},update:function(e){return x({progress:1},t.update(e.arc),n?n.update(e):{})},leave:function(e){return x({progress:0},t.leave(e.arc),n?n.leave(e):{})}}}),[e,n])},C=function(e,n){var t=(0,i.Vp)(e)-Math.PI/2,r=e.innerRadius+(e.outerRadius-e.innerRadius)*n;return(0,i.re)(t,r)},O=function(e){return function(n,t,r,i){return(0,a.to)([n,t,r,i],(function(n,t,r,i){var a=C({startAngle:n,endAngle:t,innerRadius:r,outerRadius:i},e);return"translate("+a.x+","+a.y+")"}))}},I=function(e){var n=e.center,t=e.data,l=e.transitionMode,s=e.label,d=e.radiusOffset,c=e.skipAngle,f=e.textColor,g=e.component,v=void 0===g?m:g,h=(0,i.LR)(s),p=(0,i.Fg)(),R=(0,u.Bf)(f,p),A=(0,r.useMemo)((function(){return t.filter((function(e){return Math.abs((0,i.vi)(e.arc.endAngle-e.arc.startAngle))>=c}))}),[t,c]),L=function(e,n,t,r){void 0===n&&(n=.5),void 0===t&&(t="innerRadius");var o=(0,i.tf)(),u=o.animate,l=o.config,s=M(t,r);return{transition:(0,a.useTransition)(e,{keys:function(e){return e.id},initial:s.update,from:s.enter,enter:s.update,update:s.update,leave:s.leave,config:l,immediate:!u}),interpolate:O(n)}}(A,d,l),y=L.transition,b=L.interpolate,k=v;return(0,o.jsx)("g",{transform:"translate("+n[0]+","+n[1]+")",children:y((function(e,n){return(0,r.createElement)(k,{key:n.id,datum:n,label:h(n),style:x({},e,{transform:b(e.startAngle,e.endAngle,e.innerRadius,e.outerRadius),textColor:R(n)})})}))})},T=function(e){var n=e.label,t=e.style,r=(0,i.Fg)();return(0,o.jsxs)(a.animated.g,{opacity:t.opacity,children:[(0,o.jsx)(a.animated.path,{fill:"none",stroke:t.linkColor,strokeWidth:t.thickness,d:t.path}),(0,o.jsx)(a.animated.text,{transform:t.textPosition,textAnchor:t.textAnchor,dominantBaseline:"central",style:x({},r.labels.text,{fill:t.textColor}),children:n})]})},w=function(e,n,t,r){var a,o,u=y(e.startAngle+(e.endAngle-e.startAngle)/2-Math.PI/2),l=(0,i.re)(u,e.outerRadius+n),s=(0,i.re)(u,e.outerRadius+n+t);return u<Math.PI/2||u>1.5*Math.PI?(a="after",o={x:s.x+r,y:s.y}):(a="before",o={x:s.x-r,y:s.y}),{side:a,points:[l,s,o]}},j=(0,l.Z)().x((function(e){return e.x})).y((function(e){return e.y})),W=function(e,n,t,r,i,o,u){return(0,a.to)([e,n,t,r,i,o,u],(function(e,n,t,r,i,a,o){var u=w({startAngle:e,endAngle:n,innerRadius:t,outerRadius:r},i,a,o).points;return j(u)}))},H=function(e,n,t,r){return(0,a.to)([e,n,t,r],(function(e,n,t,r){return function(e){var n=y(e.startAngle+(e.endAngle-e.startAngle)/2-Math.PI/2);return n<Math.PI/2||n>1.5*Math.PI?"start":"end"}({startAngle:e,endAngle:n,innerRadius:t,outerRadius:r})}))},Z=function(e,n,t,r,i,o,u,l){return(0,a.to)([e,n,t,r,i,o,u,l],(function(e,n,t,r,i,a,o,u){var l=w({startAngle:e,endAngle:n,innerRadius:t,outerRadius:r},i,a,o),s=l.points,d=l.side,c=s[2];return"before"===d?c.x-=u:c.x+=u,"translate("+c.x+","+c.y+")"}))},V=function(e){var n=e.center,t=e.data,l=e.label,s=e.skipAngle,d=e.offset,c=e.diagonalLength,f=e.straightLength,g=e.strokeWidth,v=e.textOffset,h=e.textColor,p=e.linkColor,R=e.component,A=void 0===R?T:R,L=(0,i.LR)(l),m=function(e){var n=e.data,t=e.offset,o=void 0===t?0:t,l=e.diagonalLength,s=e.straightLength,d=e.skipAngle,c=void 0===d?0:d,f=e.textOffset,g=e.linkColor,v=e.textColor,h=(0,i.tf)(),p=h.animate,R=h.config,A=(0,i.Fg)(),x=(0,u.Bf)(g,A),L=(0,u.Bf)(v,A),m=function(e,n){return(0,r.useMemo)((function(){return b(e,n)}),[e,n])}(n,c),y=function(e){var n=e.offset,t=e.diagonalLength,i=e.straightLength,a=e.textOffset,o=e.getLinkColor,u=e.getTextColor;return(0,r.useMemo)((function(){return{enter:function(e){return{startAngle:e.arc.startAngle,endAngle:e.arc.endAngle,innerRadius:e.arc.innerRadius,outerRadius:e.arc.outerRadius,offset:n,diagonalLength:0,straightLength:0,textOffset:a,linkColor:o(e),textColor:u(e),opacity:0}},update:function(e){return{startAngle:e.arc.startAngle,endAngle:e.arc.endAngle,innerRadius:e.arc.innerRadius,outerRadius:e.arc.outerRadius,offset:n,diagonalLength:t,straightLength:i,textOffset:a,linkColor:o(e),textColor:u(e),opacity:1}},leave:function(e){return{startAngle:e.arc.startAngle,endAngle:e.arc.endAngle,innerRadius:e.arc.innerRadius,outerRadius:e.arc.outerRadius,offset:n,diagonalLength:0,straightLength:0,textOffset:a,linkColor:o(e),textColor:u(e),opacity:0}}}}),[t,i,a,o,u])}({offset:o,diagonalLength:l,straightLength:s,textOffset:f,getLinkColor:x,getTextColor:L});return{transition:(0,a.useTransition)(m,{keys:function(e){return e.id},initial:y.update,from:y.enter,enter:y.update,update:y.update,leave:y.leave,config:R,immediate:!p}),interpolateLink:W,interpolateTextAnchor:H,interpolateTextPosition:Z}}({data:t,skipAngle:s,offset:d,diagonalLength:c,straightLength:f,textOffset:v,linkColor:p,textColor:h}),y=m.transition,k=m.interpolateLink,M=m.interpolateTextAnchor,C=m.interpolateTextPosition,O=A;return(0,o.jsx)("g",{transform:"translate("+n[0]+","+n[1]+")",children:y((function(e,n){return(0,r.createElement)(O,{key:n.id,datum:n,label:L(n),style:x({},e,{thickness:g,path:k(e.startAngle,e.endAngle,e.innerRadius,e.outerRadius,e.offset,e.diagonalLength,e.straightLength),textAnchor:M(e.startAngle,e.endAngle,e.innerRadius,e.outerRadius),textPosition:C(e.startAngle,e.endAngle,e.innerRadius,e.outerRadius,e.offset,e.diagonalLength,e.straightLength,e.textOffset)})})}))})},B=function(e){var n=e.datum,t=e.style,i=e.onClick,u=e.onMouseEnter,l=e.onMouseMove,s=e.onMouseLeave,d=(0,r.useCallback)((function(e){return null==i?void 0:i(n,e)}),[i,n]),c=(0,r.useCallback)((function(e){return null==u?void 0:u(n,e)}),[u,n]),f=(0,r.useCallback)((function(e){return null==l?void 0:l(n,e)}),[l,n]),g=(0,r.useCallback)((function(e){return null==s?void 0:s(n,e)}),[s,n]);return(0,o.jsx)(a.animated.path,{d:t.path,opacity:t.opacity,fill:n.fill||t.color,stroke:t.borderColor,strokeWidth:t.borderWidth,onClick:i?d:void 0,onMouseEnter:u?c:void 0,onMouseMove:l?f:void 0,onMouseLeave:s?g:void 0})},P=function(e,n,t,r,i){return(0,a.to)([e,n,t,r],(function(e,n,t,r){return i({startAngle:e,endAngle:n,innerRadius:Math.max(0,t),outerRadius:Math.max(0,r)})}))},S=function(e){var n=e.center,t=e.data,l=e.arcGenerator,s=e.borderWidth,d=e.borderColor,c=e.onClick,f=e.onMouseEnter,g=e.onMouseMove,v=e.onMouseLeave,h=e.transitionMode,p=e.component,R=void 0===p?B:p,A=(0,i.Fg)(),L=(0,u.Bf)(d,A),m=function(e,n,t){void 0===n&&(n="innerRadius");var r=(0,i.tf)(),o=r.animate,u=r.config,l=M(n,t);return{transition:(0,a.useTransition)(e,{keys:function(e){return e.id},initial:l.update,from:l.enter,enter:l.update,update:l.update,leave:l.leave,config:u,immediate:!o}),interpolate:P}}(t,h,{enter:function(e){return{opacity:0,color:e.color,borderColor:L(e)}},update:function(e){return{opacity:1,color:e.color,borderColor:L(e)}},leave:function(e){return{opacity:0,color:e.color,borderColor:L(e)}}}),y=m.transition,b=m.interpolate,k=R;return(0,o.jsx)("g",{transform:"translate("+n[0]+","+n[1]+")",children:y((function(e,n){return(0,r.createElement)(k,{key:n.id,datum:n,style:x({},e,{borderWidth:s,path:b(e.startAngle,e.endAngle,e.innerRadius,e.outerRadius,l)}),onClick:c,onMouseEnter:f,onMouseMove:g,onMouseLeave:v})}))})},E=function(e){var n=void 0===e?{}:e,t=n.cornerRadius,i=void 0===t?0:t,a=n.padAngle,o=void 0===a?0:a;return(0,r.useMemo)((function(){return function(){var e=f,n=g,t=(0,d.Z)(0),r=null,i=v,a=h,o=p,u=null;function l(){var l,d,f=+e.apply(this,arguments),g=+n.apply(this,arguments),v=i.apply(this,arguments)-c.ou,h=a.apply(this,arguments)-c.ou,p=(0,c.Wn)(h-v),x=h>v;if(u||(u=l=(0,s.Z)()),g<f&&(d=g,g=f,f=d),g>c.Ho)if(p>c.BZ-c.Ho)u.moveTo(g*(0,c.mC)(v),g*(0,c.O$)(v)),u.arc(0,0,g,v,h,!x),f>c.Ho&&(u.moveTo(f*(0,c.mC)(h),f*(0,c.O$)(h)),u.arc(0,0,f,h,v,x));else{var L,m,y=v,b=h,k=v,M=h,C=p,O=p,I=o.apply(this,arguments)/2,T=I>c.Ho&&(r?+r.apply(this,arguments):(0,c._b)(f*f+g*g)),w=(0,c.VV)((0,c.Wn)(g-f)/2,+t.apply(this,arguments)),j=w,W=w;if(T>c.Ho){var H=(0,c.ZR)(T/f*(0,c.O$)(I)),Z=(0,c.ZR)(T/g*(0,c.O$)(I));(C-=2*H)>c.Ho?(k+=H*=x?1:-1,M-=H):(C=0,k=M=(v+h)/2),(O-=2*Z)>c.Ho?(y+=Z*=x?1:-1,b-=Z):(O=0,y=b=(v+h)/2)}var V=g*(0,c.mC)(y),B=g*(0,c.O$)(y),P=f*(0,c.mC)(M),S=f*(0,c.O$)(M);if(w>c.Ho){var E,F=g*(0,c.mC)(b),$=g*(0,c.O$)(b),G=f*(0,c.mC)(k),_=f*(0,c.O$)(k);if(p<c.pi&&(E=R(V,B,G,_,F,$,P,S))){var D=V-E[0],Y=B-E[1],X=F-E[0],N=$-E[1],U=1/(0,c.O$)((0,c.Kh)((D*X+Y*N)/((0,c._b)(D*D+Y*Y)*(0,c._b)(X*X+N*N)))/2),K=(0,c._b)(E[0]*E[0]+E[1]*E[1]);j=(0,c.VV)(w,(f-K)/(U-1)),W=(0,c.VV)(w,(g-K)/(U+1))}}O>c.Ho?W>c.Ho?(L=A(G,_,V,B,g,W,x),m=A(F,$,P,S,g,W,x),u.moveTo(L.cx+L.x01,L.cy+L.y01),W<w?u.arc(L.cx,L.cy,W,(0,c.fv)(L.y01,L.x01),(0,c.fv)(m.y01,m.x01),!x):(u.arc(L.cx,L.cy,W,(0,c.fv)(L.y01,L.x01),(0,c.fv)(L.y11,L.x11),!x),u.arc(0,0,g,(0,c.fv)(L.cy+L.y11,L.cx+L.x11),(0,c.fv)(m.cy+m.y11,m.cx+m.x11),!x),u.arc(m.cx,m.cy,W,(0,c.fv)(m.y11,m.x11),(0,c.fv)(m.y01,m.x01),!x))):(u.moveTo(V,B),u.arc(0,0,g,y,b,!x)):u.moveTo(V,B),f>c.Ho&&C>c.Ho?j>c.Ho?(L=A(P,S,F,$,f,-j,x),m=A(V,B,G,_,f,-j,x),u.lineTo(L.cx+L.x01,L.cy+L.y01),j<w?u.arc(L.cx,L.cy,j,(0,c.fv)(L.y01,L.x01),(0,c.fv)(m.y01,m.x01),!x):(u.arc(L.cx,L.cy,j,(0,c.fv)(L.y01,L.x01),(0,c.fv)(L.y11,L.x11),!x),u.arc(0,0,f,(0,c.fv)(L.cy+L.y11,L.cx+L.x11),(0,c.fv)(m.cy+m.y11,m.cx+m.x11),x),u.arc(m.cx,m.cy,j,(0,c.fv)(m.y11,m.x11),(0,c.fv)(m.y01,m.x01),!x))):u.arc(0,0,f,M,k,x):u.lineTo(P,S)}else u.moveTo(0,0);if(u.closePath(),l)return u=null,l+""||null}return l.centroid=function(){var t=(+e.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +a.apply(this,arguments))/2-c.pi/2;return[(0,c.mC)(r)*t,(0,c.O$)(r)*t]},l.innerRadius=function(n){return arguments.length?(e="function"===typeof n?n:(0,d.Z)(+n),l):e},l.outerRadius=function(e){return arguments.length?(n="function"===typeof e?e:(0,d.Z)(+e),l):n},l.cornerRadius=function(e){return arguments.length?(t="function"===typeof e?e:(0,d.Z)(+e),l):t},l.padRadius=function(e){return arguments.length?(r=null==e?null:"function"===typeof e?e:(0,d.Z)(+e),l):r},l.startAngle=function(e){return arguments.length?(i="function"===typeof e?e:(0,d.Z)(+e),l):i},l.endAngle=function(e){return arguments.length?(a="function"===typeof e?e:(0,d.Z)(+e),l):a},l.padAngle=function(e){return arguments.length?(o="function"===typeof e?e:(0,d.Z)(+e),l):o},l.context=function(e){return arguments.length?(u=null==e?null:e,l):u},l}().innerRadius((function(e){return e.innerRadius})).outerRadius((function(e){return e.outerRadius})).cornerRadius(i).padAngle(o)}),[i,o])},F=t(63126);function $(e,n){return n<e?-1:n>e?1:n>=e?0:NaN}function G(e){return e}var _=t(51153);function D(){return D=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},D.apply(this,arguments)}function Y(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var X,N=function(e){var n=e.width,t=e.height,r=e.legends,i=e.data,a=e.toggleSerie;return(0,o.jsx)(o.Fragment,{children:r.map((function(e,r){var u;return(0,o.jsx)(F.$6,D({},e,{containerWidth:n,containerHeight:t,data:null!=(u=e.data)?u:i,toggleSerie:e.toggleSerie?a:void 0}),r)}))})},U={id:"id",value:"value",sortByValue:!1,innerRadius:0,padAngle:0,cornerRadius:0,layers:["arcLinkLabels","arcs","arcLabels","legends"],startAngle:0,endAngle:360,fit:!0,activeInnerRadiusOffset:0,activeOuterRadiusOffset:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableArcLabels:!0,arcLabel:"formattedValue",arcLabelsSkipAngle:0,arcLabelsRadiusOffset:.5,arcLabelsTextColor:{theme:"labels.text.fill"},enableArcLinkLabels:!0,arcLinkLabel:"id",arcLinkLabelsSkipAngle:0,arcLinkLabelsOffset:0,arcLinkLabelsDiagonalLength:16,arcLinkLabelsStraightLength:24,arcLinkLabelsThickness:1,arcLinkLabelsTextOffset:6,arcLinkLabelsTextColor:{theme:"labels.text.fill"},arcLinkLabelsColor:{theme:"axis.ticks.line.stroke"},colors:{scheme:"nivo"},defs:[],fill:[],isInteractive:!0,animate:!0,motionConfig:"gentle",transitionMode:"innerRadius",tooltip:function(e){var n=e.datum;return(0,o.jsx)(_._5,{id:n.id,value:n.formattedValue,enableChip:!0,color:n.color})},legends:[],role:"img",pixelRatio:"undefined"!=typeof window&&null!=(X=window.devicePixelRatio)?X:1},K=["points"],q=function(e){var n=e.data,t=e.id,a=void 0===t?U.id:t,o=e.value,l=void 0===o?U.value:o,s=e.valueFormat,d=e.colors,c=void 0===d?U.colors:d,f=(0,i.LR)(a),g=(0,i.LR)(l),v=(0,i.O_)(s),h=(0,u.U)(c,"id");return(0,r.useMemo)((function(){return n.map((function(e){var n,t=f(e),r=g(e),i={id:t,label:null!=(n=e.label)?n:t,hidden:!1,value:r,formattedValue:v(r),data:e};return D({},i,{color:h(i)})}))}),[n,f,g,v,h])},z=function(e){var n=e.data,t=e.startAngle,a=e.endAngle,o=e.innerRadius,u=e.outerRadius,l=e.padAngle,s=e.sortByValue,f=e.activeId,g=e.activeInnerRadiusOffset,v=e.activeOuterRadiusOffset,h=e.hiddenIds,p=(0,r.useMemo)((function(){var e=function(){var e=G,n=$,t=null,r=(0,d.Z)(0),i=(0,d.Z)(c.BZ),a=(0,d.Z)(0);function o(o){var u,l,s,d,f,g=o.length,v=0,h=new Array(g),p=new Array(g),R=+r.apply(this,arguments),A=Math.min(c.BZ,Math.max(-c.BZ,i.apply(this,arguments)-R)),x=Math.min(Math.abs(A)/g,a.apply(this,arguments)),L=x*(A<0?-1:1);for(u=0;u<g;++u)(f=p[h[u]=u]=+e(o[u],u,o))>0&&(v+=f);for(null!=n?h.sort((function(e,t){return n(p[e],p[t])})):null!=t&&h.sort((function(e,n){return t(o[e],o[n])})),u=0,s=v?(A-g*L)/v:0;u<g;++u,R=d)l=h[u],d=R+((f=p[l])>0?f*s:0)+L,p[l]={data:o[l],index:u,value:f,startAngle:R,endAngle:d,padAngle:x};return p}return o.value=function(n){return arguments.length?(e="function"===typeof n?n:(0,d.Z)(+n),o):e},o.sortValues=function(e){return arguments.length?(n=e,t=null,o):n},o.sort=function(e){return arguments.length?(t=e,n=null,o):t},o.startAngle=function(e){return arguments.length?(r="function"===typeof e?e:(0,d.Z)(+e),o):r},o.endAngle=function(e){return arguments.length?(i="function"===typeof e?e:(0,d.Z)(+e),o):i},o.padAngle=function(e){return arguments.length?(a="function"===typeof e?e:(0,d.Z)(+e),o):a},o}().value((function(e){return e.value})).startAngle((0,i.Ht)(t)).endAngle((0,i.Ht)(a)).padAngle((0,i.Ht)(l));return s||e.sortValues(null),e}),[t,a,l,s]);return(0,r.useMemo)((function(){var e=n.filter((function(e){return!h.includes(e.id)}));return{dataWithArc:p(e).map((function(e){var n=Math.abs(e.endAngle-e.startAngle);return D({},e.data,{arc:{index:e.index,startAngle:e.startAngle,endAngle:e.endAngle,innerRadius:f===e.data.id?o-g:o,outerRadius:f===e.data.id?u+v:u,thickness:u-o,padAngle:e.padAngle,angle:n,angleDeg:(0,i.vi)(n)}})})),legendData:n.map((function(e){return D({},e,{hidden:h.includes(e.id)})}))}}),[p,n,h,f,o,g,u,v])},J=function(e){var n=e.data,t=e.width,a=e.height,o=e.innerRadius,u=void 0===o?U.innerRadius:o,l=e.startAngle,s=void 0===l?U.startAngle:l,d=e.endAngle,c=void 0===d?U.endAngle:d,f=e.padAngle,g=void 0===f?U.padAngle:f,v=e.sortByValue,h=void 0===v?U.sortByValue:v,p=e.cornerRadius,R=void 0===p?U.cornerRadius:p,A=e.fit,x=void 0===A?U.fit:A,L=e.activeInnerRadiusOffset,m=void 0===L?U.activeInnerRadiusOffset:L,y=e.activeOuterRadiusOffset,b=void 0===y?U.activeOuterRadiusOffset:y,k=(0,r.useState)(null),M=k[0],C=k[1],O=(0,r.useState)([]),I=O[0],T=O[1],w=(0,r.useMemo)((function(){var e,n=Math.min(t,a)/2,r=n*Math.min(u,1),o=t/2,l=a/2;if(x){var d=function(e,n,t,r,a,o){void 0===o&&(o=!0);var u=[],l=(0,i.re)((0,i.Ht)(r),t);u.push([l.x,l.y]);var s=(0,i.re)((0,i.Ht)(a),t);u.push([s.x,s.y]);for(var d=Math.round(Math.min(r,a));d<=Math.round(Math.max(r,a));d++)if(d%90==0){var c=(0,i.re)((0,i.Ht)(d),t);u.push([c.x,c.y])}u=u.map((function(t){var r=t[0],i=t[1];return[e+r,n+i]})),o&&u.push([e,n]);var f=u.map((function(e){return e[0]})),g=u.map((function(e){return e[1]})),v=Math.min.apply(Math,f),h=Math.max.apply(Math,f),p=Math.min.apply(Math,g);return{points:u,x:v,y:p,width:h-v,height:Math.max.apply(Math,g)-p}}(o,l,n,s-90,c-90),f=d.points,g=Y(d,K),v=Math.min(t/g.width,a/g.height),h={width:g.width*v,height:g.height*v};h.x=(t-h.width)/2,h.y=(a-h.height)/2,o=(o-g.x)/g.width*g.width*v+h.x,l=(l-g.y)/g.height*g.height*v+h.y,e={box:g,ratio:v,points:f},n*=v,r*=v}return{centerX:o,centerY:l,radius:n,innerRadius:r,debug:e}}),[t,a,u,s,c,x,R]),j=z({data:n,startAngle:s,endAngle:c,innerRadius:w.innerRadius,outerRadius:w.radius,padAngle:g,sortByValue:h,activeId:M,activeInnerRadiusOffset:m,activeOuterRadiusOffset:b,hiddenIds:I}),W=(0,r.useCallback)((function(e){T((function(n){return n.indexOf(e)>-1?n.filter((function(n){return n!==e})):[].concat(n,[e])}))}),[]);return D({arcGenerator:E({cornerRadius:R,padAngle:(0,i.Ht)(g)}),setActiveId:C,toggleSerie:W},j,w)},Q=function(e){var n=e.center,t=e.data,i=e.arcGenerator,a=e.borderWidth,u=e.borderColor,l=e.isInteractive,s=e.onClick,d=e.onMouseEnter,c=e.onMouseMove,f=e.onMouseLeave,g=e.setActiveId,v=e.tooltip,h=e.transitionMode,p=(0,_.lL)(),R=p.showTooltipFromEvent,A=p.hideTooltip,x=(0,r.useMemo)((function(){if(l)return function(e,n){null==s||s(e,n)}}),[l,s]),L=(0,r.useMemo)((function(){if(l)return function(e,n){R((0,r.createElement)(v,{datum:e}),n),g(e.id),null==d||d(e,n)}}),[l,R,g,d,v]),m=(0,r.useMemo)((function(){if(l)return function(e,n){R((0,r.createElement)(v,{datum:e}),n),null==c||c(e,n)}}),[l,R,c,v]),y=(0,r.useMemo)((function(){if(l)return function(e,n){A(),g(null),null==f||f(e,n)}}),[l,A,g,f]);return(0,o.jsx)(S,{center:n,data:t,arcGenerator:i,borderWidth:a,borderColor:u,transitionMode:h,onClick:x,onMouseEnter:L,onMouseMove:m,onMouseLeave:y})},ee=["isInteractive","animate","motionConfig","theme","renderWrapper"],ne=function(e){var n=e.data,t=e.id,a=void 0===t?U.id:t,u=e.value,l=void 0===u?U.value:u,s=e.valueFormat,d=e.sortByValue,c=void 0===d?U.sortByValue:d,f=e.layers,g=void 0===f?U.layers:f,v=e.startAngle,h=void 0===v?U.startAngle:v,p=e.endAngle,R=void 0===p?U.endAngle:p,A=e.padAngle,x=void 0===A?U.padAngle:A,L=e.fit,m=void 0===L?U.fit:L,y=e.innerRadius,b=void 0===y?U.innerRadius:y,k=e.cornerRadius,M=void 0===k?U.cornerRadius:k,C=e.activeInnerRadiusOffset,O=void 0===C?U.activeInnerRadiusOffset:C,T=e.activeOuterRadiusOffset,w=void 0===T?U.activeOuterRadiusOffset:T,j=e.width,W=e.height,H=e.margin,Z=e.colors,B=void 0===Z?U.colors:Z,P=e.borderWidth,S=void 0===P?U.borderWidth:P,E=e.borderColor,F=void 0===E?U.borderColor:E,$=e.enableArcLabels,G=void 0===$?U.enableArcLabels:$,_=e.arcLabel,D=void 0===_?U.arcLabel:_,Y=e.arcLabelsSkipAngle,X=void 0===Y?U.arcLabelsSkipAngle:Y,K=e.arcLabelsTextColor,z=void 0===K?U.arcLabelsTextColor:K,ee=e.arcLabelsRadiusOffset,ne=void 0===ee?U.arcLabelsRadiusOffset:ee,te=e.arcLabelsComponent,re=e.enableArcLinkLabels,ie=void 0===re?U.enableArcLinkLabels:re,ae=e.arcLinkLabel,oe=void 0===ae?U.arcLinkLabel:ae,ue=e.arcLinkLabelsSkipAngle,le=void 0===ue?U.arcLinkLabelsSkipAngle:ue,se=e.arcLinkLabelsOffset,de=void 0===se?U.arcLinkLabelsOffset:se,ce=e.arcLinkLabelsDiagonalLength,fe=void 0===ce?U.arcLinkLabelsDiagonalLength:ce,ge=e.arcLinkLabelsStraightLength,ve=void 0===ge?U.arcLinkLabelsStraightLength:ge,he=e.arcLinkLabelsThickness,pe=void 0===he?U.arcLinkLabelsThickness:he,Re=e.arcLinkLabelsTextOffset,Ae=void 0===Re?U.arcLinkLabelsTextOffset:Re,xe=e.arcLinkLabelsTextColor,Le=void 0===xe?U.arcLinkLabelsTextColor:xe,me=e.arcLinkLabelsColor,ye=void 0===me?U.arcLinkLabelsColor:me,be=e.arcLinkLabelComponent,ke=e.defs,Me=void 0===ke?U.defs:ke,Ce=e.fill,Oe=void 0===Ce?U.fill:Ce,Ie=e.isInteractive,Te=void 0===Ie?U.isInteractive:Ie,we=e.onClick,je=e.onMouseEnter,We=e.onMouseMove,He=e.onMouseLeave,Ze=e.tooltip,Ve=void 0===Ze?U.tooltip:Ze,Be=e.transitionMode,Pe=void 0===Be?U.transitionMode:Be,Se=e.legends,Ee=void 0===Se?U.legends:Se,Fe=e.role,$e=void 0===Fe?U.role:Fe,Ge=(0,i.Bs)(j,W,H),_e=Ge.outerWidth,De=Ge.outerHeight,Ye=Ge.margin,Xe=Ge.innerWidth,Ne=Ge.innerHeight,Ue=q({data:n,id:a,value:l,valueFormat:s,colors:B}),Ke=J({data:Ue,width:Xe,height:Ne,fit:m,innerRadius:b,startAngle:h,endAngle:R,padAngle:x,sortByValue:c,cornerRadius:M,activeInnerRadiusOffset:O,activeOuterRadiusOffset:w}),qe=Ke.dataWithArc,ze=Ke.legendData,Je=Ke.arcGenerator,Qe=Ke.centerX,en=Ke.centerY,nn=Ke.radius,tn=Ke.innerRadius,rn=Ke.setActiveId,an=Ke.toggleSerie,on=(0,i.yU)(Me,qe,Oe),un={arcLinkLabels:null,arcs:null,arcLabels:null,legends:null};ie&&g.includes("arcLinkLabels")&&(un.arcLinkLabels=(0,o.jsx)(V,{center:[Qe,en],data:qe,label:oe,skipAngle:le,offset:de,diagonalLength:fe,straightLength:ve,strokeWidth:pe,textOffset:Ae,textColor:Le,linkColor:ye,component:be},"arcLinkLabels")),g.includes("arcs")&&(un.arcs=(0,o.jsx)(Q,{center:[Qe,en],data:qe,arcGenerator:Je,borderWidth:S,borderColor:F,isInteractive:Te,onClick:we,onMouseEnter:je,onMouseMove:We,onMouseLeave:He,setActiveId:rn,tooltip:Ve,transitionMode:Pe},"arcs")),G&&g.includes("arcLabels")&&(un.arcLabels=(0,o.jsx)(I,{center:[Qe,en],data:qe,label:D,radiusOffset:ne,skipAngle:X,textColor:z,transitionMode:Pe,component:te},"arcLabels")),Ee.length>0&&g.includes("legends")&&(un.legends=(0,o.jsx)(N,{width:Xe,height:Ne,data:ze,legends:Ee,toggleSerie:an},"legends"));var ln=function(e){var n=e.dataWithArc,t=e.arcGenerator,i=e.centerX,a=e.centerY,o=e.radius,u=e.innerRadius;return(0,r.useMemo)((function(){return{dataWithArc:n,arcGenerator:t,centerX:i,centerY:a,radius:o,innerRadius:u}}),[n,t,i,a,o,u])}({dataWithArc:qe,arcGenerator:Je,centerX:Qe,centerY:en,radius:nn,innerRadius:tn});return(0,o.jsx)(i.tM,{width:_e,height:De,margin:Ye,defs:on,role:$e,children:g.map((function(e,n){return void 0!==un[e]?un[e]:"function"==typeof e?(0,o.jsx)(r.Fragment,{children:(0,r.createElement)(e,ln)},n):null}))})},te=function(e){var n=e.isInteractive,t=void 0===n?U.isInteractive:n,r=e.animate,a=void 0===r?U.animate:r,u=e.motionConfig,l=void 0===u?U.motionConfig:u,s=e.theme,d=e.renderWrapper,c=Y(e,ee);return(0,o.jsx)(i.W2,{animate:a,isInteractive:t,motionConfig:l,renderWrapper:d,theme:s,children:(0,o.jsx)(ne,D({isInteractive:t},c))})},re=function(e){return(0,o.jsx)(i.d,{children:function(n){var t=n.width,r=n.height;return(0,o.jsx)(te,D({width:t,height:r},e))}})}}}]);
//# sourceMappingURL=3830.922d356e.chunk.js.map