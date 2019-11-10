(function(t){function e(e){for(var n,o,a=e[0],c=e[1],u=e[2],d=0,_=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&_.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(_.length)_.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"21bb":function(t,e,r){"use strict";var n=r("2dad"),s=r.n(n);s.a},"2dad":function(t,e,r){},"32f8":function(t,e,r){},"33fd":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],o={mounted:function(){}},a=o,c=(r("5c0b"),r("2877")),u=Object(c["a"])(a,s,i,!1,null,null,null),l=u.exports,d=r("8c4f"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-view"},[t._m(0),r("div",{staticClass:"home-view__body"},[r("create-story"),r("story")],1)])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-view__header"},[n("img",{attrs:{src:r("cda7"),alt:"Instagram"}}),t._v(" "),n("span",[t._v(" Stories ")])])}],O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-component"},[r("div",{staticClass:"create-story"},[t._m(0),r("div",{staticClass:"create-story__name"},[r("label",[t._v("Name")]),r("input",{attrs:{placeholder:"Codesm"},domProps:{value:t.name},on:{input:t.updateStoryName}})]),r("div",{staticClass:"create-story__add"},[r("button",[r("input",{attrs:{type:"file",accept:".png, .jpg, .jpeg, .mp4"},on:{change:t.addStory}}),t._v(" Add Story ")])]),r("div",{staticClass:"create-story__items"},t._l(t.stories,(function(e,n){return r("div",{key:n,staticClass:"create-story__items__story"},[r("i",{staticClass:"fas fa-times-circle",on:{click:function(e){return t.removeStory(n)}}}),t._v(" "+t._s(e.name)+" ")])})),0)])])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"create-story__header"},[r("h2",[t._v("Create Your Own Story")])])}],p=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("841c"),r("159b"),r("ddb0"),r("2b3d"),r("2fa7")),T=r("2f62"),S={STORY_NAME:"STORY_NAME",STORY_ADD:"STORY_ADD",STORY_DELETE:"STORY_DELETE",STORY_UPDATE_PROGRESS:"STORY_UPDATE_PROGRESS",STORY_UPDATE_INDEX:"STORY_UPDATE_INDEX",STORY_UPDATE_INTERVAL_ID:"STORY_UPDATE_INTERVAL_ID",STORY_UPDATE_VIDEO_DURATION:"STORY_UPDATE_VIDEO_DURATION",STORY_PREV:"STORY_PREV",STORY_NEXT:"STORY_NEXT"};function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(r,!0).forEach((function(e){Object(p["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var E={name:"CreateStory",methods:{addStory:function(t){if(t.target.files&&0!==t.target.files.length){var e=t.target.files[0],r={id:this.maxStoryId+1,name:e.name,url:URL.createObjectURL(e),type:"image",mime:e.type,progress:0};-1===e.type.search("image/")&&(r.type="video",r.duration=-1),this.$store.dispatch(S.STORY_ADD,{story:r})}},updateStoryName:function(t){this.$store.dispatch(S.STORY_NAME,{name:t.target.value})},removeStory:function(t){this.$store.dispatch(S.STORY_DELETE,{index:t})}},computed:y({},Object(T["b"])(["stories","name","maxStoryId"]))},m=E,R=(r("d0b4"),Object(c["a"])(m,O,h,!1,null,"49d8ca28",null)),D=R.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"story-component"},[r("div",{staticClass:"story"},[r("div",{staticClass:"story__indicators"},t._l(t.stories,(function(e,n){return r("div",{key:n,class:{story__indicator:!0,last:t.stories.length-1===n}},[r("span",{staticClass:"story__indicator__fill",style:"width:"+e.progress+"%"})])})),0),t.stories.length>0?r("div",{staticClass:"story__meta"},[t._m(0),r("div",{staticClass:"story__meta__author"},[r("span",{staticClass:"story__meta__author__name"},[t._v(t._s(t.name))]),r("span",{staticClass:"story__meta__date"},[t._v("8m ago")])])]):t._e(),0===t.stories.length?r("div",{staticClass:"story__placeholder"},[r("i",{staticClass:"fas fa-images"})]):r("div",{staticClass:"story__media"},t._l(t.stories,(function(e,n){return r("div",{key:e.id,class:{story__media__item:!0,current:n===t.index}},["image"===e.type?r("img",{attrs:{src:e.url}}):"video"===e.type?r("video",{ref:"video"+e.id,refInFor:!0,on:{loadeddata:function(e){return t.onLoadedData(e,n)}}},[r("source",{attrs:{src:e.url,type:e.mime}}),t._v(" Your browser does not support the video tag. ")]):t._e()])})),0),r("div",{staticClass:"story__overlay",on:{mousedown:t.onStoryTouchStart,mouseup:t.onStoryTouchEnd}})])])},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"story__meta__avatar"},[r("img",{attrs:{src:"https://instagram.fdel11-1.fna.fbcdn.net/vp/beca63fedef3f442c0a525e7239407f7/5E47F369/t51.2885-19/s150x150/64974692_661204254341795_2793570488801034240_n.jpg?_nc_ht=instagram.fdel11-1.fna.fbcdn.net"}})])}];r("0d03");function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(r,!0).forEach((function(e){Object(p["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P={name:"Story",data:function(){return{delay:5e3,paused:!1,touchStartTime:null}},methods:{startStory:function(){var t=this.$refs["video".concat(this.currentStory.id)],e=.2,r=this.delay*e/100;this.pauseVideoStories(),("video"!==this.currentStory.type||t)&&("video"===this.currentStory.type&&t[0]&&(r=this.currentStory.duration*e/100,t[0].currentTime=0,t[0].play()),this.playStory(r,e))},nextStory:function(){var t=this;clearInterval(this.intervalId),this.$store.dispatch(S.STORY_UPDATE_INTERVAL_ID,{intervalId:null}),this.index!==this.stories.length-1&&this.$store.dispatch(S.STORY_UPDATE_INDEX,{index:this.index+1}).then((function(){t.startStory()}))},playStory:function(t,e){var r=this;clearInterval(this.intervalId),this.$store.dispatch(S.STORY_UPDATE_INTERVAL_ID,{intervalId:setInterval((function(){if(r.currentStory.progress>=100)return r.$store.dispatch(S.STORY_UPDATE_PROGRESS,{progress:100}),void r.nextStory();r.paused||r.$store.dispatch(S.STORY_UPDATE_PROGRESS,{progress:r.currentStory.progress+e})}),t)})},pauseVideoStories:function(){for(var t=this.stories.filter((function(t){return"video"===t.type})),e=0;e<t.length;e+=1){var r=t[e],n=this.$refs["video".concat(r.id)];n&&n[0]&&n[0].pause()}},onLoadedData:function(t,e){var r=this;-1===this.stories[e].duration&&this.$store.dispatch(S.STORY_UPDATE_VIDEO_DURATION,{index:e,duration:1e3*t.target.duration}).then((function(){r.startStory()}))},onTouch:function(t,e){var r=this,n=t.target.offsetWidth,s=[0,.3333*n],i=[s[1],.6666*n],o=[i[1],n];if("start"===e&&t.layerX>=s[0]&&t.layerX<s[1]){if(this.stories.length<=1||0===this.index)return;this.$store.dispatch(S.STORY_PREV).then((function(){r.startStory()}))}else if("start"===e&&t.layerX>=o[0]&&t.layerX<o[1]){if(this.stories.length<=1||this.index>=this.stories.length-1)return;this.$store.dispatch(S.STORY_NEXT).then((function(){r.startStory()}))}else if(t.layerX>=i[0]&&t.layerX<i[1]){var a=(Date.now()-this.touchStartTime)/1e3;a<.1&&"end"===e&&this.stories.length>1&&this.index<this.stories.length-1&&this.$store.dispatch(S.STORY_NEXT).then((function(){r.startStory()})),this.paused="start"===e;var c=this.$refs["video".concat(this.currentStory.id)];if("video"!==this.currentStory.type)return;if("end"===e)return void c[0].play();c[0].pause()}},onStoryTouchStart:function(t){0!==this.stories.length&&1===t.which&&(t.preventDefault(),this.touchStartTime=Date.now(),this.onTouch(t,"start"))},onStoryTouchEnd:function(t){0!==this.stories.length&&1===t.which&&(t.preventDefault(),this.onTouch(t,"end"))}},computed:I({},Object(T["b"])(["stories","name","index","intervalId"]),{currentStory:function(){return-1===this.index?null:this.stories[this.index]}}),watch:{stories:function(){0!==this.stories.length&&this.currentStory&&this.startStory()}}},A=P,j=(r("fe40"),Object(c["a"])(A,b,g,!1,null,"27f164ac",null)),x=j.exports,N={name:"home",components:{"create-story":D,Story:x}},U=N,w=(r("21bb"),Object(c["a"])(U,_,f,!1,null,null,null)),C=w.exports;n["a"].use(d["a"]);var V,X,$=[{path:"/",name:"home",component:C}],L=new d["a"]({mode:"history",base:"/",routes:$}),M=L,k={STORY_NAME:"STORY_NAME",STORY_ADD:"STORY_ADD",STORY_DELETE:"STORY_DELETE",STORY_UPDATE_PROGRESS:"STORY_UPDATE_PROGRESS",STORY_UPDATE_INDEX:"STORY_UPDATE_INDEX",STORY_UPDATE_INTERVAL_ID:"STORY_UPDATE_INTERVAL_ID",STORY_UPDATE_VIDEO_DURATION:"STORY_UPDATE_VIDEO_DURATION",STORY_PREV:"STORY_PREV",STORY_NEXT:"STORY_NEXT"};n["a"].use(T["a"]);var G=new T["a"].Store({state:{stories:[],index:-1,name:"Aqib",intervalId:null},getters:{stories:function(t){return t.stories},name:function(t){return t.name},index:function(t){return t.index},intervalId:function(t){return t.intervalId},maxStoryId:function(t){for(var e=-1,r=0;r<t.stories.length;r+=1)e<t.stories[r].id&&(e=t.stories[r].id);return e}},mutations:(V={},Object(p["a"])(V,k.STORY_ADD,(function(t,e){t.intervalId&&(clearInterval(t.intervalId),t.intervalId=null),t.index=0;for(var r=0;r<t.stories.length;r+=1)n["a"].set(t.stories[r],"progress",0);t.stories.push(e.story)})),Object(p["a"])(V,k.STORY_DELETE,(function(t,e){t.intervalId&&(clearInterval(t.intervalId),t.intervalId=null),t.index=t.stories.length<=1?-1:0;for(var r=0;r<t.stories.length;r+=1)n["a"].set(t.stories[r],"progress",0);n["a"].delete(t.stories,e.index)})),Object(p["a"])(V,k.STORY_NAME,(function(t,e){t.name=e.name})),Object(p["a"])(V,k.STORY_UPDATE_PROGRESS,(function(t,e){0===t.stories.length||t.index<0||n["a"].set(t.stories[t.index],"progress",e.progress)})),Object(p["a"])(V,k.STORY_UPDATE_INDEX,(function(t,e){t.index=e.index})),Object(p["a"])(V,k.STORY_UPDATE_INTERVAL_ID,(function(t,e){t.intervalId=e.intervalId})),Object(p["a"])(V,k.STORY_UPDATE_VIDEO_DURATION,(function(t,e){n["a"].set(t.stories[e.index],"duration",e.duration)})),Object(p["a"])(V,k.STORY_PREV,(function(t){t.intervalId&&(clearInterval(t.intervalId),t.intervalId=null),t.index-=1;for(var e=t.index;e<t.stories.length;e+=1)n["a"].set(t.stories[e],"progress",0)})),Object(p["a"])(V,k.STORY_NEXT,(function(t){t.intervalId&&(clearInterval(t.intervalId),t.intervalId=null),t.index+=1;for(var e=0;e<t.index;e+=1)n["a"].set(t.stories[e],"progress",100);for(var r=t.index;r<t.stories.length;r+=1)n["a"].set(t.stories[r],"progress",0)})),V),actions:(X={},Object(p["a"])(X,S.STORY_ADD,(function(t,e){t.commit(k.STORY_ADD,e)})),Object(p["a"])(X,S.STORY_DELETE,(function(t,e){t.commit(k.STORY_DELETE,e)})),Object(p["a"])(X,S.STORY_NAME,(function(t,e){t.commit(k.STORY_NAME,e)})),Object(p["a"])(X,S.STORY_UPDATE_PROGRESS,(function(t,e){t.commit(k.STORY_UPDATE_PROGRESS,e)})),Object(p["a"])(X,S.STORY_UPDATE_INDEX,(function(t,e){t.commit(k.STORY_UPDATE_INDEX,e)})),Object(p["a"])(X,S.STORY_UPDATE_INTERVAL_ID,(function(t,e){t.commit(k.STORY_UPDATE_INTERVAL_ID,e)})),Object(p["a"])(X,S.STORY_UPDATE_VIDEO_DURATION,(function(t,e){t.commit(k.STORY_UPDATE_VIDEO_DURATION,e)})),Object(p["a"])(X,S.STORY_PREV,(function(t){t.commit(k.STORY_PREV)})),Object(p["a"])(X,S.STORY_NEXT,(function(t){t.commit(k.STORY_NEXT)})),X),modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:M,store:G,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),s=r.n(n);s.a},"9c0c":function(t,e,r){},cda7:function(t,e,r){t.exports=r.p+"img/instagram.fb3178d0.png"},d0b4:function(t,e,r){"use strict";var n=r("32f8"),s=r.n(n);s.a},fe40:function(t,e,r){"use strict";var n=r("33fd"),s=r.n(n);s.a}});
//# sourceMappingURL=app.dee33f50.js.map