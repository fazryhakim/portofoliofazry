/* ====== EDIT DATA DI SINI ====== */
const D={
 name:"Fazry Nurhakim",
 photo:"images/myphoto.jpeg",
 role:"Full-Stack Developer | Software Engineer | System Development | Data Analyst | QA Tester",
 summary:"I build polished, fast, and user-friendly digital products, ranging from interface design to the underlying systems.",
 about:"I am an Informatics Engineering graduate from Bani Saleh University with a strong interest in software development and data analysis. I have experience working with programming languages ​​such as Python, PHP, MySQL, and Microsoft SQL Server. I am also skilled in web development using HTML, CSS, and JavaScript, and I am familiar with frameworks like CodeIgniter 3 and Laravel. During my studies, I actively participated in group projects, including the creation and development of various applications and websites. Furthermore, I have completed additional coursework in Data Science, which has deepened my understanding of data analysis. Driven by a keen interest in technology, I am highly enthusiastic about the opportunity to apply my technical skills in a professional environment and to work collaboratively, whether as part of a team or independently.",
 stats:[["1","Years of experience"],["3","Project completed"]],
 focus:["Building accessible and responsive web applications", "Delving into cloud architecture and automation", "Sharing knowledge through writing and community"],
 skills:["JavaScript", "React.js","Node.js","Python","SQL Server","MySQL","Git","UI/UX","REST API","Figma"],
 exp:[
  {when:"December 2024 – December 2025",title:"System Development Intern",org:"PT Denso Manufacturing Indonesia",desc:"Designed, developed, tested, and maintained systems and applications to meet user needs and company objectives, covering requirements analysis, system design, coding, UAT, maintenance, and documentation. Built with PHP, Python, CodeIgniter 3, Microsoft SQL Server, and Git."}],
 edu:[{when:"2022 – 2026 | 3.54/4.00",title:"Bachelor’s Degree in Informatics Engineering",org:"Universitas Bani Saleh"}],
 certs:[
  {name:"Cisco-CCNA1",issuer:"Cisco Networking Academy",year:"2024",file:"sertifikat/Cisco-CCNA1.PDF"},
  {name:"Cisco-ITE",issuer:"Cisco Networking Academy",year:"2023",file:"sertifikat/Cisco-ITE.PDF"},
  {name:"DBS Foundation-Financial Literasi and Job Readiness",issuer:"DBS Foundation",year:"2026",file:"sertifikat/DBS Foundation-Financial Literasi and Job Readiness.pdf"},
  {name:"Dicoding-Learning the Application of Data Science with Microsoft Fabric",issuer:"Dicoding Academy",year:"2026",file:"sertifikat/Dicoding-Learning the Application of Data Science with Microsoft Fabric.pdf"},
  {name:"Dicoding-Building Gen AI Applications with Microsoft Azure",issuer:"Dicoding Academy",year:"2026",file:"sertifikat/Dicoding-Building Gen AI Applications with Microsoft Azure.pdf"},
  {name:"Dicoding-Learning AI Basics",issuer:"Dicoding Academy",year:"2024",file:"sertifikat/Dicoding-Learning AI Basics.PDF"},
  {name:"Dicoding-Learning the Basics of Data Science",issuer:"Dicoding Academy",year:"2024",file:"sertifikat/Dicoding-Learning the Basics of Data Science.PDF"},
  {name:"Dicoding-Learning the Basics of Project Management",issuer:"Dicoding Academy",year:"2024",file:"sertifikat/Dicoding-Learning the Basics of Project Management.PDF"},
  {name:"Dicoding-Learning SQL Basics",issuer:"Dicoding Academy",year:"2024",file:"sertifikat/Dicoding-Learning SQL Basics.PDF"},
  {name:"Ioda-Public Speaking",issuer:"Ioda Academy",year:"2026",file:"sertifikat/Ioda-Public Speaking.pdf"},
  {name:"Oracle-DATABASE DESIGN",issuer:"Oracle Academy",year:"2026",file:"sertifikat/Oracle-DATABASE DESIGN.PDF"},
  {name:"Oracle-JAVA FUNDAMENTAL",issuer:"Oracle Academy",year:"2024",file:"sertifikat/Oracle-JAVA FUNDAMENTAL.PDF"},
  {name:"Oracle-JAVA PROGRAMMING",issuer:"Oracle Academy",year:"2026",file:"sertifikat/Oracle-JAVA PROGRAMMING.pdf"}],
  org:[
  {when:"September 2024 – September 2026",role:"Secretary",org:"Karang Taruna",desc:"The Secretary of Karang Taruna is the individual responsible for managing the organization's administration and documentation. Their duties include recording meeting minutes, drafting activity agendas, and handling correspondence. Furthermore, the secretary plays a role in communicating with both members and external parties, ensuring a smooth flow of information, and supporting the programs implemented by Karang Taruna."},
  {when:"February 2025 – February 2026",role:"Head of the Literacy and Development Division",org:"Himpunan Mahasiswa Teknik Informatika (HMTI)",desc:"The Head of the Literacy and Development Division of the Informatics Engineering Student Association (HMTI) is responsible for designing and implementing literacy programs, developing members' capabilities through training, discussions, or workshops, managing personal development and human resource quality-enhancement activities, as well as evaluating and reporting on the outcomes of the division's initiatives."},
  {when:"February 2024 – February 2025",role:"Head of the Public Relations Division",org:"Himpunan Mahasiswa Teknik Informatika (HMTI)",desc:"The Head of the Public Relations Division of the Informatics Engineering Student Association (HMTI) is responsible for managing the organization's communications and external relations. Their primary duties include disseminating information about HMTI activities to members and the general public, managing social media, and building partnerships with external entities, such as companies and other organizations."}],
 langs:["Indonesian (native)","English (intermediate)"],
 projects:[
  {t:"Umkm POS",c:"Web",d:"A POS system for UMKM featuring fast transaction processing, cashier shift management, payment gateway integration, and the ability to export net profit reports in PDF or Excel format.",tags:["Laravel","Livewire","Microsoft SQL Server","Tailwind CSS"],demo:"#",code:"#",video:"videos/umkm-pos.mp4",poster:"images/umkm-pos.jpeg"}],
 email:"fazrynurhakim170904@gmail.com",
 wa:"6282137064800",
 links:{linkedin:"https://www.linkedin.com/in/fazry-nurhakim-999b932aa",instagram:"https://www.instagram.com/aboutzry_",github:"https://github.com/fazryhakim"}
};
/* ================================ */

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const initials=D.name.split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
let toastT;
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),3200)}

/* ---------- Render konten ---------- */
$("#logo").textContent=D.name.split(" ")[0]+".";
$("#h-name").textContent=D.name;$("#h-role").textContent=D.role;$("#h-sum").textContent=D.summary;$("#h-about").textContent=D.about;
$("#stats").innerHTML=D.stats.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");
$("#skills").innerHTML=D.skills.map(s=>`<span class="chip">${s}</span>`).join("");
$("#focus").innerHTML="<ul style='margin:0;padding-left:18px;display:grid;gap:8px'>"+D.focus.map(f=>`<li>${f}</li>`).join("")+"</ul>";
$("#exp").innerHTML=D.exp.map(e=>`<li><span class="when">${e.when}</span><h3>${e.title}</h3><div class="org">${e.org}</div><p>${e.desc}</p></li>`).join("");
$("#orgs").innerHTML=D.org.map(o=>`<article class="card org-card"><span class="when">${o.when}</span><h3>${o.role}</h3><div class="org">${o.org}</div><p>${o.desc}</p></article>`).join("");
$("#copy").textContent="© "+new Date().getFullYear()+" "+D.name;

/* ---------- Foto ---------- */
function setPhoto(){
 const box=$("#photoBox");
 box.innerHTML=`<div class="ph"><b>${initials}</b></div>`;   // tampil sementara / jika foto tidak ditemukan
 const img=new Image();
 img.alt="Foto "+D.name;
 img.decoding="async";
 img.onload=()=>{box.innerHTML="";box.appendChild(img)};
 img.src=D.photo;
}
setPhoto();

/* ---------- Halaman CV ---------- */
const cvList=a=>a.map(x=>`<li>${x}</li>`).join("");
function cvBody(){return `<div class="side"><div><h3>Contact</h3><ul class="plain"><li>${D.email}</li><li>+${D.wa}</li><li>${D.links.linkedin.replace("https://www.","")}</li><li>${D.links.github.replace("https://","")}</li></ul></div>
<div><h3>Skill</h3><div class="chips">${D.skills.map(s=>`<span class="chip">${s}</span>`).join("")}</div></div>
<div><h3>Language</h3><ul class="plain">${cvList(D.langs)}</ul></div><div><h3>Sertifikasi</h3><ul class="plain">${D.certs.map(c=>`<li><a class="cert" href="${c.file}" target="_blank" rel="noopener"><span><b>${c.name}</b><small>${c.issuer} · ${c.year}</small></span><svg class="i" viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg></a></li>`).join("")}</ul></div></div>
<div class="main"><h2>${D.name}</h2><p class="role" style="margin:8px 0 14px;font-size:18px">${D.role}</p><p style="color:var(--mute);margin:0 0 30px">${D.about}</p>
<h3>Experience</h3><ul class="tl" style="margin-bottom:12px">${D.exp.map(e=>`<li><span class="when">${e.when}</span><h3 style="color:var(--ink);font-size:18px;font-weight:700">${e.title}</h3><div class="org">${e.org}</div><p>${e.desc}</p></li>`).join("")}</ul>
<h3>Education</h3><ul class="tl">${D.edu.map(e=>`<li><span class="when">${e.when}</span><h3 style="color:var(--ink);font-size:18px;font-weight:700">${e.title}</h3><div class="org">${e.org}</div></li>`).join("")}</ul><h3 style="margin-top:12px">Organization</h3><ul class="tl">${D.org.map(o=>`<li><span class="when">${o.when}</span><h3 style="color:var(--ink);font-size:18px;font-weight:700">${o.role}</h3><div class="org">${o.org}</div><p>${o.desc}</p></li>`).join("")}</ul></div>`}
$("#cvsheet").innerHTML=cvBody();

/* ---------- Unduh berkas ---------- */
const MIME={pdf:"application/pdf",html:"text/html;charset=utf-8",md:"text/markdown;charset=utf-8"};
async function save(filename,data){
 try{
  const d=window.claude&&await claude.use("downloads");
  if(d){await d.save({filename,data})}
  else{ /* unduhan browser biasa (untuk hosting sendiri) */
   const ext=filename.split(".").pop();
   const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([data],{type:MIME[ext]||"text/plain"}));
   a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1500)}
  toast("CV berhasil disimpan.")
 }catch(e){if(e&&e.code==="declined")return;toast("Gagal menyimpan berkas. Coba lagi.")}}
const slug=D.name.replace(/\s+/g,"_");

// $("#dlHtml").onclick=()=>{const css=`body{font:15px/1.6 Segoe UI,Arial,sans-serif;color:#16202E;max-width:820px;margin:32px auto;padding:0 24px}h1{margin:0}h2{font-size:15px;border-bottom:2px solid #2457D6;padding-bottom:4px;margin:26px 0 12px;color:#2457D6}.r{color:#2457D6;font-weight:600}.m{color:#5B6677;font-size:14px}.it{margin-bottom:14px}.it b{display:block}`;
//  const html=`<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><title>CV ${D.name}</title><style>${css}</style></head><body><h1>${D.name}</h1><div class="r">${D.role}</div><div class="m">${D.email} · +${D.wa} · ${D.links.linkedin.replace("https://www.","")} · ${D.links.github.replace("https://","")}</div><h2>Profil</h2><p>${D.about}</p><h2>Pengalaman</h2>${D.exp.map(e=>`<div class="it"><b>${e.title} — ${e.org}</b><span class="m">${e.when}</span><div>${e.desc}</div></div>`).join("")}<h2>Pendidikan</h2>${D.edu.map(e=>`<div class="it"><b>${e.title} — ${e.org}</b><span class="m">${e.when}</span></div>`).join("")}<h2>Organisasi</h2>${D.org.map(o=>`<div class="it"><b>${o.role} — ${o.org}</b><span class="m">${o.when}</span><div>${o.desc}</div></div>`).join("")}<h2>Keahlian</h2><p>${D.skills.join(", ")}</p><h2>Sertifikasi</h2><p>${D.certs.map(c=>`${c.name} (${c.issuer}, ${c.year})`).join("; ")}</p><h2>Bahasa</h2><p>${D.langs.join("; ")}</p></body></html>`;
//  save(`CV_${slug}.html`,html)};

// $("#dlMd").onclick=()=>{const md=`# ${D.name}\n**${D.role}**\n\n${D.email} · +${D.wa}\n\n## Profil\n${D.about}\n\n## Pengalaman\n${D.exp.map(e=>`### ${e.title} — ${e.org}\n_${e.when}_\n\n${e.desc}\n`).join("\n")}\n## Pendidikan\n${D.edu.map(e=>`- ${e.title}, ${e.org} (${e.when})`).join("\n")}\n\n## Organisasi\n${D.org.map(o=>`- ${o.role}, ${o.org} (${o.when})`).join("\n")}\n\n## Keahlian\n${D.skills.join(", ")}\n\n## Sertifikasi\n${D.certs.map(c=>`- ${c.name} — ${c.issuer} (${c.year})`).join("\n")}\n`;
//  save(`CV_${slug}.md`,md)};

/* ---------- Pembuat PDF (jsPDF) ---------- */
function makePdf(){const d=new window.jspdf.jsPDF({unit:"pt",format:"a4"});const W=595,H=842,M=48,CW=W-2*M;let y=M;const acc=[36,87,214],ink=[22,32,46],mute=[91,102,119];
 const line=(t,s,st,c,x=M)=>{d.setFont("helvetica",st);d.setFontSize(s);d.setTextColor(...c);d.splitTextToSize(t,CW-(x-M)).forEach(l=>{const lh=s*1.45;if(y+lh>H-M){d.addPage();y=M}d.text(l,x,y+s);y+=lh})};
 const head=t=>{if(y+50>H-M){d.addPage();y=M}y+=16;line(t.toUpperCase(),10,"bold",acc);d.setDrawColor(...acc);d.setLineWidth(.8);d.line(M,y+1,W-M,y+1);y+=10};
 line(D.name,26,"bold",ink);line(D.role,12,"normal",acc);y+=2;
 line(D.email+"  |  +"+D.wa+"  |  "+D.links.linkedin.replace("https://www.","")+"  |  "+D.links.github.replace("https://",""),9,"normal",mute);
 head("Profil");line(D.about,10.5,"normal",ink);
 head("Pengalaman");D.exp.forEach(e=>{line(e.title+" - "+e.org,11,"bold",ink);line(e.when,9,"normal",mute);line(e.desc,10,"normal",ink);y+=8});
 head("Pendidikan");D.edu.forEach(e=>{line(e.title+" - "+e.org,11,"bold",ink);line(e.when,9,"normal",mute);y+=6});
 head("Organisasi");D.org.forEach(o=>{line(o.role+" - "+o.org,11,"bold",ink);line(o.when,9,"normal",mute);line(o.desc,10,"normal",ink);y+=8});
 head("Keahlian");line(D.skills.join(", "),10,"normal",ink);
 head("Sertifikasi");D.certs.forEach(c=>line("- "+c.name+" ("+c.issuer+", "+c.year+")",10,"normal",ink));
 head("Bahasa");line(D.langs.join("; "),10,"normal",ink);
 return d.output("arraybuffer")}
$("#dlPdf").onclick=()=>{if(!(window.jspdf&&window.jspdf.jsPDF)){toast("Pustaka PDF belum termuat. Muat ulang halaman lalu coba lagi.");return}save(`CV_${slug}.pdf`,makePdf())};

/* ---------- Animasi scroll (dua arah) ---------- */
(function(){const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
 const sel=".hero>div,.stats div,section.blk>h2,section.blk>.sub,.card,.tl li,.proj,.cvhead,.cvsheet,.filters,.fgrid>div,.soc a";
 let last=scrollY,dir=1;const prog=$("#prog"),hd=document.querySelector("header.top");
 addEventListener("scroll",()=>{const y=scrollY;if(Math.abs(y-last)>3){dir=y>last?1:-1;hd.classList.toggle("hide",dir===1&&y>140);last=y}
  const h=document.documentElement.scrollHeight-innerHeight;prog.style.transform="scaleX("+(h>0?Math.min(1,y/h):0)+")"},{passive:true});
 const io="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{const t=e.target;
  if(e.isIntersecting){t.style.setProperty("--dy",(dir>0?30:-30)+"px");requestAnimationFrame(()=>t.classList.add("in"))}else t.classList.remove("in")}),{threshold:.12,rootMargin:"0px 0px -5% 0px"}):null;
 window.reveal=()=>{if(!io||reduce)return;$$(sel).forEach(el=>{if(el.__r)return;el.__r=1;el.classList.add("rv");el.style.setProperty("--d",Math.min([...el.parentNode.children].indexOf(el),6)*70+"ms");io.observe(el)})}})();

/* ---------- Project + filter ---------- */
const cats=["Semua",...new Set(D.projects.map(p=>p.c))];let cur="Semua";

function drawProj(){
 $("#filters").innerHTML=cats.map(c=>`<button aria-pressed="${c===cur}" data-c="${c}">${c}</button>`).join("");
 $("#pgrid").innerHTML=D.projects.filter(p=>cur==="Semua"||p.c===cur).map(p=>{
  const i=D.projects.indexOf(p),ini=p.t.split(" ").map(w=>w[0]).slice(0,2).join("");
  const thumb=p.video
   ?`<button class="thumb has-video" data-v="${i}" aria-label="Putar video demo ${p.t}"${p.poster?` style="background-image:url('${p.poster}')"`:""}>${p.poster?"":ini}<span class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span></button>`
   :`<div class="thumb" aria-hidden="true">${ini}</div>`;
  return `<article class="proj">${thumb}<div class="pb"><div class="chips"><span class="chip">${p.c}</span></div><h3>${p.t}</h3><p>${p.d}</p><div class="m" style="color:var(--mute);font-size:13px">${p.tags.join(" · ")}</div><div class="lk">${p.video?`<button class="vbtn" data-v="${i}">▶ Video demo</button>`:""}`}).join("");
 $$("#filters button").forEach(b=>b.onclick=()=>{cur=b.dataset.c;drawProj()});
 $$("[data-v]").forEach(b=>b.onclick=()=>openVideo(+b.dataset.v));
 window.reveal&&reveal()}

/* ---------- Pemutar video demo ---------- */
function ytEmbed(u){const m=u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);return m?`https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`:null}
function openVideo(i){
 const p=D.projects[i],yt=ytEmbed(p.video);
 $("#vbody").innerHTML=yt
  ?`<iframe src="${yt}" title="Video demo ${p.t}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
  :`<video src="${p.video}" controls autoplay playsinline preload="metadata"${p.poster?` poster="${p.poster}"`:""}></video>`;
 $("#vtitle").textContent=p.t;
 $("#vmodal").hidden=false;document.body.style.overflow="hidden";$("#vclose").focus()}
function closeVideo(){$("#vbody").innerHTML="";$("#vmodal").hidden=true;document.body.style.overflow=""}
$("#vclose").onclick=closeVideo;
$("#vmodal").onclick=e=>{if(e.target.id==="vmodal")closeVideo()};
addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#vmodal").hidden)closeVideo()});

drawProj();

/* ---------- Ikon media sosial ---------- */
const IC={
linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
instagram:'<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4zM17.5 6.5h.01"/>',
gmail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7"/>',
whatsapp:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.7c-.8-.3-1.6-1.100-1.900-1.900l.7-.8-1-2z"/>',
github:'<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.250-.3-2.500-1-3.500.3-1.150.3-2.350 0-3.500 0 0-1 0-3 1.500-2.600-.5-5.400-.5-8 0C6 2 5 2 5 2c-.3 1.150-.3 2.350 0 3.500A5.400 5.400 0 0 0 4 9c0 3.500 3 5.500 6 5.500-.4.500-.7 1.050-.85 1.650-.17.600-.22 1.230-.15 1.850v4M9 18c-4.500 2-5-2-7-2"/>'};
const S=[["LinkedIn","linkedin",D.links.linkedin],["Instagram","instagram",D.links.instagram],["Gmail","gmail","mailto:"+D.email],["WhatsApp","whatsapp","https://wa.me/"+D.wa],["GitHub","github",D.links.github]];
$("#soc").innerHTML=S.map(s=>`<a href="${s[2]}" target="_blank" rel="noopener" aria-label="${s[0]}" title="${s[0]}"><svg class="i" viewBox="0 0 24 24">${IC[s[1]]}</svg></a>`).join("");

/* ---------- Formulir pesan ---------- */
$("#fm").oninput=e=>$("#cnt").textContent=e.target.value.length;
function msg(){const n=$("#fn").value.trim(),e=$("#fe").value.trim(),m=$("#fm").value.trim();
 if(!n||!m){toast("Isi nama dan pesan terlebih dahulu.");return null}
 if(e&&!/^\S+@\S+\.\S+$/.test(e)){toast("Format email belum benar.");return null}
 return{n,e,m}}
function open_(url){const a=document.createElement("a");a.href=url;a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove()}
$("#sendMail").onclick=()=>{const x=msg();if(!x)return;open_(`mailto:${D.email}?subject=${encodeURIComponent("Pesan dari portofolio — "+x.n)}&body=${encodeURIComponent(x.m+"\n\n— "+x.n+(x.e?" ("+x.e+")":""))}`);toast("Membuka aplikasi email Anda…")};
$("#sendWa").onclick=()=>{const x=msg();if(!x)return;open_(`https://wa.me/${D.wa}?text=${encodeURIComponent("Halo, saya "+x.n+".\n\n"+x.m)}`);toast("Membuka WhatsApp…")};

/* ---------- Tema & navigasi halaman ---------- */
$("#theme").onclick=()=>{const r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=dark?"light":"dark"};
const R={"/":"home","/cv":"cv","/project":"project"};
function route(){const p=(location.hash.replace("#","")||"/");const k=R[p]||"home";
 $$(".view").forEach(v=>v.classList.toggle("on",v.id==="v-"+k));
 $$("nav .nv").forEach(b=>b.setAttribute("aria-current",R[b.dataset.go]===k?"page":"false"));
 document.title=D.name+" — "+({home:"Portofolio",cv:"CV",project:"Project"})[k];scrollTo(0,0);window.reveal&&setTimeout(reveal,30)}
$$("[data-go]").forEach(b=>b.onclick=()=>{location.hash="#"+b.dataset.go});
addEventListener("hashchange",route);route();