import{d as A,ag as S,ah as b,b as i,c as u,n as c,aA as e,ac as x,j as D,t as $,f as m,e as f,g as C,F as B,a8 as E,a9 as h,aa as _,a4 as j,af as ie,w as O,aC as le,l as ce,ad as ue,ae as Z,a5 as q,G as U,aD as N,ak as H,y as M,aE as de,aF as pe,r as P,N as ge,aG as me,aH as ye,u as fe,aI as be,k as ve,v as he,aJ as ee,aK as ke,aL as xe,ap as te,aM as ae,aN as _e,aO as we,s as ne,aP as $e}from"./entry.aU2SqquO.js";import Ce from"./ContentRenderer.l9ia_zuW.js";import"./ContentRendererMarkdown.vue.CxDhiHun.js";import"./MDCRenderer._YQ6XM-u.js";const Ae={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:"border-t",vertical:"border-s"},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm"},Se={class:"flex flex-col lg:flex-row items-start gap-6"},Ue={class:"flex-1"},Oe=A({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-4 text-sm font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=t,{ui:s,attrs:a}=S("page.header",b(l,"ui"),o,b(l,"class"),!0);return(r,n)=>{var g;const p=j,y=ie;return i(),u("div",_({class:e(s).wrapper},e(a)),[t.headline||r.$slots.headline?(i(),u("div",{key:0,class:c(e(s).headline)},[x(r.$slots,"headline",{},()=>[D($(t.headline),1)])],2)):m("",!0),f("div",Se,[t.icon||r.$slots.icon?(i(),u("div",{key:0,class:c(e(s).icon.wrapper)},[x(r.$slots,"icon",{},()=>[C(p,{name:t.icon,class:c(e(s).icon.base)},null,8,["name","class"])])],2)):m("",!0),f("div",Ue,[f("div",{class:c(e(s).container)},[f("h1",{class:c(e(s).title)},[x(r.$slots,"title",{},()=>[D($(t.title),1)])],2),(g=t.links)!=null&&g.length||r.$slots.links?(i(),u("div",{key:0,class:c(e(s).links)},[x(r.$slots,"links",{},()=>[(i(!0),u(B,null,E(t.links,(v,d)=>(i(),h(y,_({key:d},{...v,target:v.target||"_blank",color:v.color||"white"},{onClick:v.click}),null,16,["onClick"]))),128))])],2)):m("",!0)],2),t.description||r.$slots.description?(i(),u("p",{key:0,class:c(e(s).description)},[x(r.$slots,"description",{},()=>[D($(t.description),1)])],2)):m("",!0),x(r.$slots,"default")])])],16)}}}),je=A({inheritAttrs:!1,__name:"DocsSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=t,{ui:s,attrs:a}=S("docs.surround.link",b(l,"ui"),o,b(l,"class"),!0);return(r,n)=>{const p=j,y=le;return i(),h(y,_({to:t.link._path,class:e(s).wrapper},e(a)),{default:O(()=>[t.icon||t.link.icon?(i(),u("div",{key:0,class:c(e(s).icon.wrapper)},[C(p,{name:t.icon||t.link.icon,class:c(e(s).icon.base)},null,8,["name","class"])],2)):m("",!0),f("p",{class:c(e(s).title)},$(t.link.title),3),f("p",{class:c(e(s).description)},$(t.link.description),3)]),_:1},16,["to","class"])}}}),Ie={key:1,class:"hidden sm:block"},ze=A({inheritAttrs:!1,__name:"DocsSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=t,{ui:s,attrs:a}=S("docs.surround",b(l,"ui"),o,b(l,"class"),!0),[r,n]=l.surround||[];return(p,y)=>{const g=je;return i(),u("div",_({class:e(s).wrapper},e(a)),[e(r)?(i(),h(g,{key:0,link:e(r),ui:e(s).link,icon:e(s).icon.prev},null,8,["link","ui","icon"])):(i(),u("span",Ie," ")),e(n)?(i(),h(g,{key:2,link:e(n),ui:e(s).link,icon:e(s).icon.next,class:"text-right"},null,8,["link","ui","icon"])):m("",!0)],16)}}}),De=A({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=t,{ui:s,attrs:a}=S("page.body",b(l,"ui"),o,b(l,"class"),!0);return(r,n)=>(i(),u("div",_({class:[e(s).wrapper,t.prose&&e(s).prose]},e(a)),[x(r.$slots,"default")],16))}}),Le=ue(Z.ui.strategy,Z.ui.divider,Ae),Pe=A({components:{UIcon:j,UAvatar:q},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},orientation:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},type:{type:String,default:"solid",validator:t=>["solid","dotted","dashed"].includes(t)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:o,attrs:l}=S("divider",b(t,"ui"),Le),s=U(()=>N(H(o.value.wrapper.base,o.value.wrapper[t.orientation]),t.class)),a=U(()=>H(o.value.container.base,o.value.container[t.orientation])),r=U(()=>H(o.value.border.base,o.value.border[t.orientation],o.value.border.size[t.orientation],o.value.border.type[t.type]));return{ui:o,attrs:l,wrapperClass:s,containerClass:a,borderClass:r}}});function Be(t,o,l,s,a,r){const n=j,p=q;return i(),u("div",_({class:t.wrapperClass},t.attrs),[f("div",{class:c(t.borderClass)},null,2),t.label||t.icon||t.avatar||t.$slots.default?(i(),u(B,{key:0},[f("div",{class:c(t.containerClass)},[x(t.$slots,"default",{},()=>[t.label?(i(),u("span",{key:0,class:c(t.ui.label)},$(t.label),3)):t.icon?(i(),h(n,{key:1,name:t.icon,class:c(t.ui.icon.base)},null,8,["name","class"])):t.avatar?(i(),h(p,_({key:2},{size:t.ui.avatar.size,...t.avatar},{class:t.ui.avatar.base}),null,16,["class"])):m("",!0)])],2),f("div",{class:c(t.borderClass)},null,2)],64)):m("",!0)],16)}const Te=ce(Pe,[["render",Be]]),He=A({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o=M(),l=U(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:o.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),s=t,{ui:a,attrs:r}=S("page.links",b(s,"ui"),l,b(s,"class"),!0);return(n,p)=>{const y=j,g=q,v=pe;return i(),u("div",_({class:e(a).wrapper},e(r)),[t.title||n.$slots.title?(i(),u("p",{key:0,class:c(e(a).title)},[x(n.$slots,"title",{},()=>[D($(t.title),1)])],2)):m("",!0),f("div",{class:c(e(a).container)},[x(n.$slots,"default",{},()=>[(i(!0),u(B,null,E(t.links,(d,k)=>(i(),h(v,_({key:k},e(de)(d),{class:e(a).base,"active-class":e(a).active,"inactive-class":e(a).inactive,onClick:d.click}),{default:O(()=>[d.icon?(i(),h(y,{key:0,name:d.icon,class:c(e(N)(e(a).icon.base,d.iconClass))},null,8,["name","class"])):m("",!0),d.avatar?(i(),h(g,_({key:1},{size:e(a).avatar.size,...d.avatar},{class:e(N)(e(a).avatar.base,d.avatarClass)}),null,16,["class"])):m("",!0),f("span",{class:c(e(a).label)},[D($(d.label)+" ",1),d.target==="_blank"?(i(),h(y,{key:0,name:e(a).externalIcon.name,class:c(e(a).externalIcon.base)},null,8,["name","class"])):m("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),Ne=()=>{const t=P(),o=P([]),l=P([]),s=r=>{r.forEach(n=>{const p=n.target.id;n.isIntersecting?o.value=[...o.value,p]:o.value=o.value.filter(y=>y!==p)})},a=r=>{r.forEach(n=>{t.value&&t.value.observe(n)})};return ge(o,(r,n)=>{r.length===0?l.value=n:l.value=r}),me(()=>t.value=new IntersectionObserver(s)),ye(()=>{var r;return(r=t.value)==null?void 0:r.disconnect()}),{visibleHeadings:o,activeHeadings:l,updateHeadings:a}},Ee=["href","onClick"],se=A({inheritAttrs:!1,__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(t,{emit:o}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},s=t,a=o,r=fe(),n=ve(),{activeHeadings:p,updateHeadings:y}=Ne(),{ui:g,attrs:v}=S("docs.toc.links",b(s,"ui"),l,b(s,"class"),!0);n.hooks.hookOnce("page:finish",()=>{y([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const d=k=>{const I=encodeURIComponent(k);r.push(`#${I}`),a("move",k)};return(k,I)=>{var L;const T=se;return(L=t.links)!=null&&L.length?(i(),u("ul",_({key:0,class:e(g).wrapper},e(v)),[(i(!0),u(B,null,E(t.links,w=>(i(),u("li",{key:w.text,class:c([e(g).wrapper,w.depth===3&&e(g).depth])},[f("a",{href:`#${w.id}`,class:c([e(g).base,e(p).includes(w.id)?e(g).active:e(g).inactive]),onClick:be(R=>d(w.id),["prevent"])},$(w.text),11,Ee),w.children?(i(),h(T,{key:0,links:w.children},null,8,["links"])):m("",!0)],2))),128))],16)):m("",!0)}}}),qe=A({inheritAttrs:!1,__name:"DocsToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o=M(),l=U(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:o.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),s=t,{ui:a,attrs:r}=S("docs.toc",b(s,"ui"),l,b(s,"class"),!0),n=P(!1);return(p,y)=>{var d,k;const g=j,v=se;return i(),u("nav",_({class:e(a).wrapper},e(r)),[f("div",{class:c([(d=t.links)!=null&&d.length?e(a).container.base:e(a).container.empty])},[x(p.$slots,"top"),(k=t.links)!=null&&k.length?(i(),u("button",{key:0,class:c(e(a).button.base),tabindex:"-1",onClick:y[0]||(y[0]=I=>n.value=!e(n))},[f("span",{class:c(e(a).button.label)},$(t.title),3),C(g,{name:e(a).button.trailingIcon.name,class:c(["lg:!hidden",[e(a).button.trailingIcon.base,e(n)?e(a).button.trailingIcon.active:e(a).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):m("",!0),C(v,{links:t.links,ui:e(a).links,class:c([e(n)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),x(p.$slots,"bottom")],2)],16)}}}),Me={key:1},Je=A({__name:"[...slug]",async setup(t){let o,l;const s=he(),{toc:a,seo:r}=M(),{data:n}=([o,l]=ee(()=>ae(s.path,()=>ne(s.path).findOne(),"$aROEKgqrzL")),o=await o,l(),o);if(!n.value)throw ke({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:p}=([o,l]=ee(()=>ae(`${s.path}-surround`,()=>ne().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround($e(s.path)))),o=await o,l(),o);xe({titleTemplate:`%s - ${r==null?void 0:r.siteName}`,title:n.value.title,ogTitle:`${n.value.title} - ${r==null?void 0:r.siteName}`,description:n.value.description,ogDescription:n.value.description});const y=U(()=>_e(n.value)),g=U(()=>{var v,d,k;return[((v=a==null?void 0:a.bottom)==null?void 0:v.edit)&&{icon:"i-heroicons-pencil-square",label:"Edit this page",to:`${a.bottom.edit}/${(d=n==null?void 0:n.value)==null?void 0:d._file}`,target:"_blank"},...((k=a==null?void 0:a.bottom)==null?void 0:k.links)||[]].filter(Boolean)});return(v,d)=>{const k=Oe,I=Ce,T=ze,L=De,w=Te,R=He,re=qe,oe=we;return i(),h(oe,null,te({default:O(()=>[C(k,{title:e(n).title,description:e(n).description,links:e(n).links,headline:e(y)},null,8,["title","description","links","headline"]),C(L,{prose:""},{default:O(()=>{var z;return[e(n).body?(i(),h(I,{key:0,value:e(n)},null,8,["value"])):m("",!0),(z=e(p))!=null&&z.length?(i(),u("hr",Me)):m("",!0),C(T,{surround:e(p)},null,8,["surround"])]}),_:1})]),_:2},[e(n).toc!==!1?{name:"right",fn:O(()=>{var z,V,F,G;return[C(re,{title:(z=e(a))==null?void 0:z.title,links:(F=(V=e(n).body)==null?void 0:V.toc)==null?void 0:F.links},te({_:2},[(G=e(a))!=null&&G.bottom?{name:"bottom",fn:O(()=>{var J,K,Q,W,X,Y;return[f("div",{class:c(["hidden lg:block space-y-6",{"!mt-6":(Q=(K=(J=e(n).body)==null?void 0:J.toc)==null?void 0:K.links)==null?void 0:Q.length}])},[(Y=(X=(W=e(n).body)==null?void 0:W.toc)==null?void 0:X.links)!=null&&Y.length?(i(),h(w,{key:0,type:"dashed"})):m("",!0),C(R,{title:e(a).bottom.title,links:e(g)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{Je as default};
