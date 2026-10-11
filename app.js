const IMG={
 "reach": "assets/img/reach.webp",
 "bull": "assets/img/bull.webp",
 "chariot": "assets/img/chariot.webp",
 "team": "assets/img/team.webp",
 "pelle": "assets/img/pelle.webp",
 "cab": "assets/img/cab.webp",
 "moteur": "assets/img/moteur.webp",
 "grue": "assets/img/grue.webp",
 "maint": "assets/img/maint.webp",
 "class1": "assets/img/class1.webp",
 "charg": "assets/img/charg.webp",
 "class2": "assets/img/class2.webp",
 "benne": "assets/img/benne.webp",
 "nivel": "assets/img/nivel.webp",
 "gal_terrain1": "assets/img/gal_terrain1.webp",
 "gal_terrain2": "assets/img/gal_terrain2.webp",
 "gal_terrain3": "assets/img/gal_terrain3.webp",
 "gal_terrain4": "assets/img/gal_terrain4.webp",
 "gal_terrain5": "assets/img/gal_terrain5.webp",
 "gal_terrain6": "assets/img/gal_terrain6.webp",
 "gal_terrain7": "assets/img/gal_terrain7.webp",
 "gal_ensemble1": "assets/img/gal_ensemble1.webp",
 "gal_ensemble2": "assets/img/gal_ensemble2.webp",
 "gal_cer1": "assets/img/gal_cer1.webp",
 "gal_cer2": "assets/img/gal_cer2.webp",
 "gal_cer3": "assets/img/gal_cer3.webp"
};
const CONFIG={endpoint:"contact.php"};/* envoi par e-mail via contact.php (laisser vide pour passer par WhatsApp) */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=s=>document.querySelector(s);document.querySelectorAll('[data-img]').forEach(i=>i.src=IMG[i.dataset.img]);
const ICO={"engins": "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 19h13\"/><rect x=\"4\" y=\"13\" width=\"9\" height=\"6\" rx=\"1\"/><path d=\"M8 13V9h4l3-5 5 4-3 3\"/><path d=\"M17 11l3 6\"/></svg>", "levage": "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 21h6M8 21V8\"/><path d=\"M3 8h17M8 3l10 5\"/><path d=\"M17 8v6\"/><rect x=\"14.500\" y=\"14\" width=\"5\" height=\"4\" rx=\".8\"/></svg>", "transport": "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2 16V6h11v10\"/><path d=\"M13 9.500h4l4 4V16h-8\"/><circle cx=\"6.500\" cy=\"17.500\" r=\"2\"/><circle cx=\"17\" cy=\"17.500\" r=\"2\"/><path d=\"M8.500 16H15\"/></svg>", "meca": "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14.700 6.300a4 4 0 0 0-5.400 5.400L3 18l3 3 6.300-6.300a4 4 0 0 0 5.400-5.400l-2.600 2.600-2.400-.6-.6-2.400z\"/></svg>"};
const CATS=[["engins","Conduite d’engins",ICO.engins,"Pelle, chargeuse, niveleuse"],["levage","Levage & manutention",ICO.levage,"Reachstacker, grues, chariot"],["transport","Transport",ICO.transport,"Semi-remorque et benne"],["meca","Mécanique & hydraulique",ICO.meca,"Engins lourds"]];
const PROG=[["engins","Pelle excavatrice","Maîtrisez la pelle hydraulique : manœuvres, creusement et règles de sécurité sur chantier.","pelle"],["engins","Chargeuse et tractopelle","Chargement, transport de matériaux et déplacements maîtrisés sur chantier.","charg"],["engins","Niveleuse","Réglage de la lame, terrassement et finition : la précision au service des routes et plateformes.","nivel"],["transport","Camion semi-remorque et benne","Conduite des poids lourds, manœuvres et règles de circulation en toute sécurité.","benne"],["levage","Reachstacker","Manipulation et empilage de conteneurs, au port ou sur plateforme, sans compromis sur la sécurité.","reach"],["levage","Grue à tour et grue mobile","Levage, élingage et signalisation : des gestes précis pour des charges maîtrisées.","grue"],["levage","Chariot élévateur","Conduite, gerbage et manutention de charges en entrepôt ou sur site.","chariot"],["meca","Mécanique d’engins lourds","Diagnostiquer, entretenir et réparer les organes mécaniques des engins lourds.","moteur"],["meca","Hydraulique d’engins lourds","Comprendre les circuits hydrauliques, détecter les pannes et assurer la maintenance.","maint"]];
const icon=Object.fromEntries(CATS.map(c=>[c[0],c[2]]));
// menus
function buildMenus(){const sv=$('#fs').value;$('#mg').innerHTML=CATS.map(c=>`<a href="#formations" data-c="${c[0]}"><em>${c[2]}</em><b>${tr(c[1])}</b><span>${tr(c[3])}</span></a>`).join('');$('#mm').innerHTML=CATS.map(c=>`<a href="#formations" data-c="${c[0]}">${tr(c[1])}</a>`).join('');$('#fl').innerHTML=CATS.map(c=>`<a href="#formations" data-c="${c[0]}">${tr(c[1])}</a>`).join('');
$('#fs').innerHTML=`<option value="">${tr('Choisir…')}</option>`+PROG.map(p=>`<option value="${p[1]}">${tr(p[1])}</option>`).join('')+`<option value="Autre / renseignements">${tr('Autre / renseignements')}</option>`;$('#fs').value=sv}
buildMenus();
// tabs + cards
let cur='all',term='';const tl=$('#tl'),ind=$('#ind');
function buildTabs(){tl.querySelectorAll('[role=tab]').forEach(b=>b.remove());[["all","Toutes"],...CATS.map(c=>[c[0],c[1]])].forEach(([k,l])=>{const b=document.createElement('button');b.role='tab';b.textContent=tr(l);b.dataset.k=k;b.id='t'+k;b.setAttribute('aria-selected',k==cur);b.tabIndex=k==cur?0:-1;tl.appendChild(b)})}
buildTabs();
function moveInd(){const a=tl.querySelector('[aria-selected=true]');ind.style.left=a.offsetLeft+'px';ind.style.width=a.offsetWidth+'px'}
function setTab(k){cur=k;tl.querySelectorAll('[role=tab]').forEach(t=>{const s=t.dataset.k==k;t.setAttribute('aria-selected',s);t.tabIndex=s?0:-1});$('#cards').setAttribute('aria-labelledby','t'+k);moveInd();render()}
tl.addEventListener('click',e=>{const t=e.target.closest('[role=tab]');if(t)setTab(t.dataset.k)});
tl.addEventListener('keydown',e=>{const t=[...tl.querySelectorAll('[role=tab]')],i=t.findIndex(x=>x.dataset.k==cur);let n=e.key=='ArrowRight'?i+1:e.key=='ArrowLeft'?i-1:null;if(n!==null){n=(n+t.length)%t.length;setTab(t[n].dataset.k);t[n].focus()}});
$('#q').addEventListener('input',e=>{term=e.target.value.toLowerCase();render()});
function render(){const l=PROG.filter(p=>(cur=='all'||p[0]==cur)&&(tr(p[1])+tr(p[2])).toLowerCase().includes(term));
$('#cards').innerHTML=l.map((p,i)=>{const cv=p[3]=='charg'||p[3]=='maint'||p[3]=='benne';const ph=`<img src="${IMG[p[3]]}" alt="${tr(p[1])}">`+`<span class="no tech">N° ${String(PROG.indexOf(p)+1).padStart(2,'0')}</span><span class="ci">${icon[p[0]]}</span>`;return `<article class="card" style="animation-delay:${i*60}ms"><div class="ph${cv?' cover':''}">${ph}</div><h3>${tr(p[1])}</h3><p>${tr(p[2])}</p><div class="meta"><span>${tr('Jour et soir')}</span><span>${tr('Bilingue')}</span><span>${tr('Durée : nous consulter')}</span></div><a href="#contact" data-f="${p[1]}">${tr('Découvrir le programme')}</a></article>`}).join('');
$('#empty').style.display=l.length?'none':'block'}
addEventListener('resize',moveInd);document.fonts&&document.fonts.ready.then(moveInd);render();moveInd();
// tilt
if(!reduce&&matchMedia('(hover:hover)').matches)$('#cards').addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*10}deg) rotateX(${-y*10}deg)`});
$('#cards').addEventListener('pointerleave',()=>document.querySelectorAll('.card').forEach(c=>c.style.transform=''),true);
// category links
document.addEventListener('click',e=>{const a=e.target.closest('[data-c]');if(a){setTab(a.dataset.c);closeAll()}const f=e.target.closest('[data-f]');if(f)$('#fs').value=f.dataset.f});
// mega + mobile
const mb=$('#mb'),mega=$('#mega'),bg=$('#bg'),mob=$('#mobile');
function closeAll(){mega.classList.remove('open');mb.setAttribute('aria-expanded',false);mob.classList.remove('open');bg.setAttribute('aria-expanded',false);document.body.style.overflow=''}
mb.onclick=e=>{e.stopPropagation();const o=mega.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
bg.onclick=()=>{const o=mob.classList.toggle('open');bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
document.addEventListener('click',e=>{if(!e.target.closest('#mega'))mega.classList.remove('open'),mb.setAttribute('aria-expanded',false)});
document.addEventListener('keydown',e=>{if(e.key=='Escape')closeAll()});
mob.addEventListener('click',e=>{if(e.target.closest('a'))closeAll()});
document.querySelectorAll('nav a').forEach(a=>a.onclick=closeAll);
// reveal
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// scrollspy
const links=[...document.querySelectorAll('nav a')];
addEventListener('scroll',()=>{let id='accueil';['accueil','apropos','methode','galerie','actus','contact'].forEach(i=>{if($('#'+i).getBoundingClientRect().top<200)id=i});links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+id));
},{passive:true});
// FAQ animated
document.querySelectorAll('.faq details').forEach(d=>{const a=d.querySelector('.a');a.style.height=d.open?'auto':'0';d.querySelector('summary').addEventListener('click',e=>{e.preventDefault();if(d.open){a.style.height=a.scrollHeight+'px';requestAnimationFrame(()=>a.style.height='0');setTimeout(()=>d.open=false,reduce?0:350)}else{d.open=true;a.style.height=a.scrollHeight+'px';setTimeout(()=>a.style.height='auto',reduce?0:360)}})});
// testimonials (éditable)
const T=[
["Une formation sérieuse, où la sécurité passe avant tout. J’ai appris à manœuvrer mon engin avec confiance.","Stagiaire — Conduite d’engins",true,"A serious program where safety comes first. I learned to operate my machine with confidence.","Trainee — Equipment operation"],
["Les cours théoriques, puis la pratique sur le terrain, m’ont permis de progresser étape par étape.","Stagiaire — Pelle excavatrice",true,"Theory classes followed by field practice helped me progress step by step.","Trainee — Excavator"],
["Des cours de jour comme du soir : j’ai pu suivre la formation en l’adaptant à mon emploi du temps.","Stagiaire — Formation du soir",true,"Day and evening classes: I could follow the training around my schedule.","Trainee — Evening program"],
["La cérémonie de fin de formation a été un moment fort. Un métier, un emploi : c’est la promesse de FPT.","Ancien stagiaire",true,"The graduation ceremony was a special moment. A trade, a job: that’s FPT’s promise.","Former trainee"]];/* [FR, auteur FR, exemple?, EN, auteur EN] : exemple=true affiche l’étiquette. Remplacez par de vrais témoignages et mettez false. */let ti=0;
function showT(){const q=$('#tq'),n=$('#tn'),x=T[ti],en=lang==='en';q.textContent=en?x[3]:x[0];n.textContent=en?x[4]:x[1];$('#te').hidden=!x[2];[q,n].forEach(e=>{e.style.animation='none';void e.offsetWidth;e.style.animation=''})}
document.querySelectorAll('.car-c button').forEach(b=>b.onclick=()=>{ti=(ti+ +b.dataset.d+T.length)%T.length;showT()});
// form
const F=$('#f'),st=$('#st');const waText=d=>lang==='en'?`Hello FPT, I am ${d.nom} (${d.email}${d.tel?', '+d.tel:''}). Desired program: ${d.formation}. ${d.message}`:`Bonjour FPT, je suis ${d.nom} (${d.email}${d.tel?', '+d.tel:''}). Formation souhaitée : ${d.formation}. ${d.message}`;
F.addEventListener('submit',async e=>{e.preventDefault();st.className='';st.textContent='';let ok=true;
const chk=(n,m,t)=>{const i=F.elements[n],er=i.parentElement.querySelector('.err');const bad=t?!t(i.value):!i.value.trim();i.setAttribute('aria-invalid',bad);er&&(er.textContent=bad?m:'');if(bad)ok=false};
chk('nom',tr('Indiquez votre nom.'));chk('email',tr('Adresse e-mail invalide.'),v=>/^\S+@\S+\.\S+$/.test(v));chk('formation',tr('Choisissez une formation.'));chk('message',tr('Écrivez un court message.'));
$('#rg').textContent=F.elements.rgpd.checked?'':tr('Le consentement est requis.');if(!F.elements.rgpd.checked)ok=false;
if(!ok)return;
if(!CONFIG.endpoint){const d=Object.fromEntries(new FormData(F));const url='https://wa.me/237675762021?text='+encodeURIComponent(waText(d));st.className='ok';st.innerHTML=tr('Votre demande est prête : ')+'<a href="'+url+'" target="_blank" rel="noopener"><b>'+tr('envoyez-la sur WhatsApp')+'</b></a>.';try{window.open(url,'_blank','noopener')}catch(e){}F.reset();return}
const sb=$('#sb');sb.disabled=true;sb.textContent=tr('Envoi…');
const d=Object.fromEntries(new FormData(F));const wa='https://wa.me/237675762021?text='+encodeURIComponent(waText(d));
try{const r=await fetch(CONFIG.endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});const j=await r.json().catch(()=>({}));if(!r.ok||j.ok===false)throw 0;st.className='ok';st.textContent=tr('Merci ! Votre demande a bien été envoyée. Nous vous répondrons rapidement.');F.reset()}catch{st.className='ko';st.innerHTML=tr('L’envoi a échoué. ')+'<a href="'+wa+'" target="_blank" rel="noopener"><b>'+tr('Envoyez votre demande sur WhatsApp')+'</b></a>.'}
sb.disabled=false;sb.innerHTML=tr('Envoyer ma demande')+' <span>→</span>'});

// animations automatiques
(function(){const u=$('#mq');u.innerHTML+=u.innerHTML;const l=document.querySelector('img.mark').src;document.querySelectorAll('img[data-logo]').forEach(i=>i.src=l);
if(reduce)return;
const st=[...document.querySelectorAll('.step')];let k=0;setInterval(()=>{k=(k+1)%5;$('#fill').style.width=k*25+'%';st.forEach((e,i)=>e.classList.toggle('on',i<k));document.querySelectorAll('.strip figure').forEach((e,i)=>e.classList.toggle('on',i==(k+3)%4))},1800);
setInterval(()=>document.querySelector('.car-c button[data-d="1"]').click(),5000);
})();
(function(){const r=document.documentElement,b=$('#tg');let t;try{t=localStorage.getItem('fpt-theme')}catch(e){}
const dark=()=>r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
const set=m=>{r.dataset.theme=m;b.textContent=m==='dark'?'☀':'☾';b.setAttribute('aria-pressed',m==='dark');try{localStorage.setItem('fpt-theme',m)}catch(e){}};
if(t==='dark'||t==='light')set(t);else b.textContent=dark()?'☀':'☾';
b.onclick=()=>set(dark()?'light':'dark')})();
const v=$('#bgv');if(v){if(reduce)v.pause();else{const pl=()=>v.play().catch(()=>{});pl();document.addEventListener('visibilitychange',()=>document.hidden?v.pause():pl())}}


/* Galerie photos : onglets, agrandissement (lightbox), bandeau défilant */
(function(){
const G=[['terrain1','terrain','Prise en main d’une pelle excavatrice'],['terrain2','terrain','Séance pratique autour d’une pelle'],['terrain3','terrain','Accès à la cabine en sécurité'],['terrain4','terrain','Découverte de la cabine d’un camion'],['terrain5','terrain','Engin de chantier sur site'],['terrain6','terrain','Travaux pratiques en équipe'],['terrain7','terrain','Stagiaires autour d’une pelle'],['ensemble1','ensemble','La promotion FPT et sa bannière'],['ensemble2','ensemble','Stagiaires et formateurs sur site'],['cer1','cer','Cérémonie de fin de formation'],['cer2','cer','Remise des diplômes'],['cer3','cer','Soutenances à l’institut']];
const TABS=[['all','Toutes'],['terrain','Sur le terrain'],['ensemble','Ensemble'],['cer','Cérémonies']];
let gc='all',cur=[],idx=0,last=null;const gt=$('#gt'),gi=$('#gind'),gal=$('#gal'),lb=$('#lb'),li=lb.querySelector('img'),lp=lb.querySelector('p');
function buildG(){gt.querySelectorAll('[role=tab]').forEach(b=>b.remove());TABS.forEach(([k,l])=>{const b=document.createElement('button');b.role='tab';b.textContent=tr(l);b.dataset.k=k;b.setAttribute('aria-selected',k==gc);b.tabIndex=k==gc?0:-1;gt.appendChild(b)})}buildG();
const mv=()=>{const a=gt.querySelector('[aria-selected=true]');gi.style.left=a.offsetLeft+'px';gi.style.width=a.offsetWidth+'px'};
function draw(){cur=G.filter(g=>gc=='all'||g[1]==gc);gal.innerHTML=cur.map((g,i)=>`<figure style="animation-delay:${i*60}ms"><button class="gb" data-i="${i}" aria-label="${tr('Agrandir : ')}${tr(g[2])}"><img src="${IMG['gal_'+g[0]]}" alt="${tr(g[2])}" loading="lazy"><figcaption>${tr(g[2])}</figcaption></button></figure>`).join('')}
function setG(k){gc=k;gt.querySelectorAll('[role=tab]').forEach(t=>{const s=t.dataset.k==k;t.setAttribute('aria-selected',s);t.tabIndex=s?0:-1});mv();draw()}
gt.addEventListener('click',e=>{const t=e.target.closest('[role=tab]');if(t)setG(t.dataset.k)});
gt.addEventListener('keydown',e=>{const t=[...gt.querySelectorAll('[role=tab]')],i=t.findIndex(x=>x.dataset.k==gc);let n=e.key=='ArrowRight'?i+1:e.key=='ArrowLeft'?i-1:null;if(n!==null){n=(n+t.length)%t.length;setG(t[n].dataset.k);t[n].focus()}});
function show(i){idx=(i+cur.length)%cur.length;const g=cur[idx];li.src=IMG['gal_'+g[0]];li.alt=tr(g[2]);lp.textContent=tr(g[2])}
function open(i){last=document.activeElement;show(i);lb.classList.add('open');document.body.style.overflow='hidden';lb.querySelector('.lbx').focus()}
function close(){lb.classList.remove('open');document.body.style.overflow='';last&&last.focus()}
gal.addEventListener('click',e=>{const b=e.target.closest('.gb');if(b)open(+b.dataset.i)});
lb.addEventListener('click',e=>{if(e.target===lb||e.target.closest('.lbx'))close();else if(e.target.closest('.lbp'))show(idx-1);else if(e.target.closest('.lbn'))show(idx+1)});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key=='Escape')close();if(e.key=='ArrowLeft')show(idx-1);if(e.key=='ArrowRight')show(idx+1)});
$('#rt').innerHTML=G.concat(G).map(g=>`<img src="${IMG['gal_'+g[0]]}" alt="">`).join('');
addEventListener('resize',mv);document.fonts&&document.fonts.ready.then(mv);draw();mv();HOOKS.push(()=>{buildG();mv();draw();if(lb.classList.contains('open'))show(idx)});
})();

/* Langue : FR / EN */
HOOKS.push(()=>{buildMenus();buildTabs();moveInd();render()},showT);
$('#lg').onclick=()=>setLang(lang==='en'?'fr':'en');
HOOKS.forEach(f=>f());initLang();

/* Finitions : barre de progression + halo lumineux des cartes */
(function(){const pr=$('#prog');const f=()=>{const m=document.documentElement.scrollHeight-innerHeight;pr.style.width=(m>0?scrollY/m*100:0)+'%'};addEventListener('scroll',f,{passive:true});f();
$('#cards').addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})})();


/* Chiffres clés : compteur animé */
(function(){const els=[...document.querySelectorAll('.stats b[data-n]')];if(!els.length)return;
const run=el=>{const n=+el.dataset.n;if(reduce){el.textContent=n;return}const t0=performance.now(),d=1100;const f=t=>{const k=Math.min(1,(t-t0)/d);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)};
const io2=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){run(x.target);io2.unobserve(x.target)}}),{threshold:.6});els.forEach(e=>{e.textContent='0';io2.observe(e)})})();

/* En-tête compact au défilement */
(function(){const hd=document.querySelector('header');const f=()=>hd.classList.toggle('sm',scrollY>40);addEventListener('scroll',f,{passive:true});f()})();
