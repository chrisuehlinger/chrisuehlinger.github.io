(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{HkEK:function(e,t,n){},"M/hg":function(e,t,n){},MV3M:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("/MKj"),i=n("wEEd"),l=n("vrFN"),o=n("947B");function u(e){var t=e.root,n=void 0===t?null:t,r=e.rootMargin,c=e.threshold,i=void 0===c?[0]:c,l=Object(a.useState)({}),o=l[0],u=l[1],s=Object(a.useState)(null),m=s[0],d=s[1],f=Object(a.useRef)(null);return Object(a.useEffect)((function(){f.current&&f.current.disconnect(),f.current=new window.IntersectionObserver((function(e){var t=e[0];return u(t)}),{root:n,rootMargin:r,threshold:i});var e=f.current;return m&&e.observe(m),function(){return e.disconnect()}}),[m,n,r,i]),[d,o]}var s=function(e){var t=e.zone,n=e.children,i=Object(c.b)(),l=function(){var e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(a.useState)(t),r=n[0],c=n[1];return Object(a.useEffect)((function(){if(!e)return!1;function n(){c(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),r}(),s=Object(a.useRef)(null),m=Object(a.useState)(.5),d=m[0],f=m[1],E=u({threshold:Object(a.useMemo)((function(){return[d]}),[d])}),g=E[0],b=E[1];Object(a.useEffect)((function(){if(s.current){g(s.current);var e=s.current.offsetHeight,t=l.height;if(e>t)f(t/(2*e));else f(.5)}}),[l,s]);var h=Object(a.useState)(!1),p=h[0],v=h[1];return Object(a.useEffect)((function(){b.target&&(console.log("ENTRY "+t,b),b.isIntersecting&&!p?(v(!0),i(Object(o.j)(t))):!b.isIntersecting&&p&&(v(!1),i(Object(o.k)(t))))}),[t,i,b,p]),Object(a.useEffect)((function(){return function(){p&&(console.log("UNMOUNT",t),v(!1),i(Object(o.k)(t)))}}),[]),r.a.createElement("div",{ref:s},n)},m=(n("xn6b"),function(){return r.a.createElement(s,{zone:"INTRO"},r.a.createElement("div",{className:"intro-page",id:"intro"},r.a.createElement("h1",{className:"intro-title"},"Chris Uehlinger")))}),d=n("Wbzz"),f=n("9eSz"),E=n.n(f),g=(n("Y+9B"),function(){return r.a.createElement(s,{zone:"ABOUT"},r.a.createElement("div",{className:"about-page",id:"about"},r.a.createElement("div",{className:"about-card"},r.a.createElement("div",{className:"about-image-wrapper"},r.a.createElement(d.StaticQuery,{query:"3067133372",render:function(e){return r.a.createElement(E.a,{className:"about-image",fluid:e.file.childImageSharp.fluid})}}),r.a.createElement("p",{className:"about-image-caption"},"Credit: ",r.a.createElement("a",{href:"https://www.shealynjaephotography.com/",target:"_blank"},"Shealyn Jae"))),r.a.createElement("div",{className:"about-blurb"},r.a.createElement("p",null,"Hi there! My name is Chris Uehlinger. I'm a... well I do a lot of stuff, including web development, projection/video design for theatre, VR development, voiceover work, 3D graphics and I've taught programming both abroad (at โรงเรียนเซนต์คาเบรียล in Bangkok) and stateside (through talks at charmCityJS and volunteering for Baltimore NodeSchool).")))))}),b=(n("A2+M"),n("HkEK"),function(e){var t=e.clip,n=e.muted,c=e.isPlaying,i=e.onEnded,l=t.id,o=t.src,u=Object(a.useRef)(null);return Object(a.useEffect)((function(){u.current&&(c?u.current.play():(u.current.pause(),u.current.currentTime=0))}),[u,c]),r.a.createElement("div",{className:"video-clip"},r.a.createElement("video",{className:c?"playing":"hidden",id:l,src:o,ref:u,crossOrigin:"anonymous",preload:"auto",playsInline:!0,onEnded:i,muted:n}))}),h=(n("MV3M"),function(e){var t=e.clip,n=e.isPlaying,a=(e.onEnded,t.id),c=t.image;return r.a.createElement("div",{className:"image-clip"},r.a.createElement(E.a,{className:n?"playing":"hidden",id:a,fluid:c.childImageSharp.fluid}))}),p=(n("M/hg"),{image:h,video:b}),v=function(e){var t=e.id,n=e.clips,i=e.title,l=e.company,s=e.description,m=e.url,d=Object(c.b)(),f=Object(c.c)((function(e){return e})).isMuted,E=Object(a.useState)(.5),g=E[0],b=(E[1],u({threshold:Object(a.useMemo)((function(){return[g]}),[g])})),h=b[0],v=b[1],O=Object(a.useState)(0),j=O[0],y=O[1],w=Object(a.useState)(!1),N=w[0],S=w[1];function k(e){v.isIntersecting&&(d(Object(o.p)(n[j])),d(Object(o.l)(n[e])),y(e))}Object(a.useEffect)((function(){v.target&&(v.isIntersecting&&!N?(S(!0),n[j]&&d(Object(o.l)(n[j]))):!v.isIntersecting&&N&&(S(!1),n[j]&&d(Object(o.p)(n[j]))))}),[e,d,v,N]),Object(a.useEffect)((function(){return function(){N&&(console.log("UNMOUNT "+t),S(!1),n[j]&&d(Object(o.p)(n[j])))}}),[]);var M=n.reduce((function(e,t){return e||"video"===t.type}),!1),I=n.map((function(e,t){var a=p[e.type];return r.a.createElement(a,{key:e.id,clip:e,muted:f,isPlaying:j===t&&v.isIntersecting,onEnded:function(){return k((j+1)%n.length)}})}));return r.a.createElement("div",{className:"show-card",ref:h},m?r.a.createElement("a",{href:m,target:"_blank",className:"clips-wrapper"},I):r.a.createElement("div",{className:"clips-wrapper"},I),r.a.createElement("div",{className:"show-blurb"},r.a.createElement("h3",null,m?r.a.createElement("a",{href:m,target:"_blank"},i):i),r.a.createElement("h4",null,l),!!n.length&&r.a.createElement("div",{className:"clip-controls"},M&&r.a.createElement("button",{onClick:function(){return d(Object(o.o)(!f))}},r.a.createElement("i",{className:"material-icons"},f?"volume_off":"volume_up")),n.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return k((j-1+n.length)%n.length)}},r.a.createElement("i",{className:"material-icons"},"fast_rewind")),r.a.createElement("button",{onClick:function(){return k((j+1)%n.length)}},r.a.createElement("i",{className:"material-icons"},"fast_forward")),r.a.createElement("div",null,"Playing "+(j+1)+" of "+n.length))),s.map((function(e,t){return r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:"<p>"+e+"</p>"}})}))))},O=(n("tgC3"),function(){return r.a.createElement(s,{zone:"SHOWS"},r.a.createElement("div",{className:"shows-page",id:"shows"},r.a.createElement("h2",null,"Shows"),r.a.createElement(d.StaticQuery,{query:"3721747753",render:function(e){return e.allShowsYaml.nodes.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))}))}})))}),j=(n("VHcF"),function(){return r.a.createElement(s,{zone:"DEMOS"},r.a.createElement("div",{className:"demos-page",id:"demos"},r.a.createElement("h2",null,"Demos"),r.a.createElement(d.StaticQuery,{query:"3464210355",render:function(e){return e.allDemosYaml.nodes.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))}))}})))}),y=(n("yESS"),function(){return r.a.createElement(s,{zone:"TALKS"},r.a.createElement("div",{className:"talks-page",id:"talks"},r.a.createElement("h2",null,"Talks"),r.a.createElement(d.StaticQuery,{query:"2643687651",render:function(e){return e.allTalksYaml.nodes.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))}))}})))}),w=n("ugZ0"),N=n("Xj0o");t.default=function(e){console.log("INDEX PROPS",e);var t=Object(c.c)((function(e){return e})),n=t.isLoaded,a=t.loadingProgress,o=Object(i.c)(!n,null,{from:{opacity:1},enter:{opacity:1},leave:{opacity:0},config:i.b.molasses});return r.a.createElement(N.a,{transitionComponent:w.a},r.a.createElement("main",{className:"homepage-body "+(n?"has-loaded":"is-loading")},o.map((function(e){var t=e.item,n=e.key,c=e.props;return t&&r.a.createElement(i.a.div,{key:n,style:c,className:"loading-indicator"},"Loading "+a+"%")})),r.a.createElement(l.a,{title:"Home"}),r.a.createElement(m,null),r.a.createElement(g,null),r.a.createElement(O,null),r.a.createElement(j,null),r.a.createElement(y,null)))}},VHcF:function(e,t,n){},"Y+9B":function(e,t,n){},tgC3:function(e,t,n){},xn6b:function(e,t,n){},yESS:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-ab2f20a99e8e29d82e98.js.map