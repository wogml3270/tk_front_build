"use strict";(self.webpackChunktaekwonworld=self.webpackChunktaekwonworld||[]).push([[9209],{55054:function(t,e,n){n.d(e,{T:function(){return i}});var r=n(74165),u=n(15861),s=n(65873),i=function(){var t=(0,u.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("associ/associloginread");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},99209:function(t,e,n){n.r(e);var r=n(73418),u=n(72791),s=n(57689),i=n(56030),o=n(55054),a=n(8884),c=n(51843),l=n(80184);e.default=function(){var t=(0,s.s0)(),e=(0,i.Zl)(c.Z),n=(0,r.D)((function(){return(0,o.T)()}),{onSuccess:function(n){e(n),setTimeout((function(){t("/association/home")}),1e3)},onError:function(e){alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \n\uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694."),t("/logout")}}).mutate;return(0,u.useEffect)((function(){setTimeout((function(){n()}),500)}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.Z,{})})}},73418:function(t,e,n){n.d(e,{D:function(){return m}});var r=n(1413),u=n(29439),s=n(72791),i=n(97413),o=n(73734),a=n(15671),c=n(43144),l=n(60136),h=n(27277),f=n(89054),v=n(69538),d=function(t){(0,l.Z)(n,t);var e=(0,h.Z)(n);function n(t,r){var u;return(0,a.Z)(this,n),(u=e.call(this)).client=t,u.setOptions(r),u.bindMethods(),u.updateResult(),u}return(0,c.Z)(n,[{key:"bindMethods",value:function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}},{key:"setOptions",value:function(t){var e=this.options;this.options=this.client.defaultMutationOptions(t),(0,o.VS)(e,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this})}},{key:"onUnsubscribe",value:function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))}},{key:"onMutationUpdate",value:function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)}},{key:"getCurrentResult",value:function(){return this.currentResult}},{key:"reset",value:function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}},{key:"mutate",value:function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,(0,r.Z)((0,r.Z)({},this.options),{},{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()}},{key:"updateResult",value:function(){var t=this.currentMutation?this.currentMutation.state:(0,f.R)(),e=(0,r.Z)((0,r.Z)({},t),{},{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset});this.currentResult=e}},{key:"notify",value:function(t){var e=this;v.V.batch((function(){var n,r,u,s;if(e.mutateOptions)if(t.onSuccess)null==(n=(r=e.mutateOptions).onSuccess)||n.call(r,e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==(u=(s=e.mutateOptions).onSettled)||u.call(s,e.currentResult.data,null,e.currentResult.variables,e.currentResult.context);else if(t.onError){var i,o,a,c;null==(i=(o=e.mutateOptions).onError)||i.call(o,e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==(a=(c=e.mutateOptions).onSettled)||a.call(c,void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context)}t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))}}]),n}(n(55511).l),p=n(96403),b=n(89608);function m(t,e,n){var a=(0,o.lV)(t,e,n),c=(0,p.NL)({context:a.context}),l=s.useState((function(){return new d(c,a)})),h=(0,u.Z)(l,1)[0];s.useEffect((function(){h.setOptions(a)}),[h,a]);var f=(0,i.$)(s.useCallback((function(t){return h.subscribe(v.V.batchCalls(t))}),[h]),(function(){return h.getCurrentResult()}),(function(){return h.getCurrentResult()})),m=s.useCallback((function(t,e){h.mutate(t,e).catch(R)}),[h]);if(f.error&&(0,b.L)(h.options.useErrorBoundary,[f.error]))throw f.error;return(0,r.Z)((0,r.Z)({},f),{},{mutate:m,mutateAsync:f.mutate})}function R(){}}}]);
//# sourceMappingURL=9209.e0d54ff1.chunk.js.map