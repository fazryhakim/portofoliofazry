/* ====== EDIT DATA DI SINI ====== */
const D={
 name:"Fazry Nurhakim",
 photo:"images/myphoto.jpeg",
 role:"Full-Stack Developer | Software Engineer | System Development | Data Analyst | QA Tester",
 summary:"Saya membangun produk digital yang rapi, cepat, dan mudah digunakan — dari rancangan antarmuka hingga sistem di belakangnya.",
 about:"Saya adalah lulusan Teknik Informatika dari Universitas Bani Saleh yang memiliki minat besar dalam pengembangan perangkat lunak dan analisis data. Saya memiliki pengalaman menggunakan bahasa pemrograman seperti Python, PHP, MySQL, dan Microsoft SQL Server. Saya juga memiliki keterampilan dalam pengembangan web menggunakan HTML, CSS, dan JavaScript, serta familier dengan framework CodeIgniter 3 dan Laravel. Selama masa studi, saya aktif berpartisipasi dalam proyek kelompok, seperti membangun dan mengembangkan aplikasi maupun situs web. Selain itu, saya telah mengikuti kursus tambahan di bidang Data Science yang memperdalam pemahaman saya mengenai analisis data. Berbekal minat yang kuat terhadap teknologi, saya sangat antusias dengan kesempatan untuk menerapkan keterampilan teknis saya dalam lingkungan profesional serta bekerja sama secara kolaboratif, baik dalam tim maupun secara individu.",
 stats:[["1","Tahun pengalaman"],["3","Project selesai"]],
 focus:["Membangun aplikasi web yang aksesibel dan responsif","Mendalami arsitektur cloud dan otomatisasi","Berbagi ilmu lewat tulisan dan komunitas"],
 skills:["JavaScript", "React.js","Node.js","Python","SQL Server","MySQL","Git","UI/UX","REST API","Figma"],
 exp:[
  {when:"Desember 2024 – Desember 2025",title:"System Development Intern",org:"PT Denso Manufacturing Indonesia",desc:"Merancang dan mengembangkan sistem web untuk memenuhi kebutuhan pengguna di departemen QA, menggunakan bahasa pemrograman PHP, framework CodeIgniter 3, dan Microsoft SQL Server, serta melakukan analisis data."}],
 edu:[{when:"2022 – 2026 | 3.54/4.00",title:"S1 Teknik Informatika",org:"Universitas Bani Saleh"}],
 certs:["Dicoding Academy Membangun Aplikasi Gen AI dengan Microsoft Azure","Dicoding Academy Belajar Penerapan Data Science dengan Microsoft Fabric","Dicoding Academy Belajar Dasar SQL","Dicoding Academy Belajar Dasar Manajemen Proyek","Dicoding Academy Belajar Dasar Data Science","Dicoding Academy Belajar Dasar AI", "Oracle Academy Java Programming","Oracle Academy Java Fundamental","Oracle Academy Database Design","Cisco Networking Academy CCNA 1", "Cisco Networking Academy IT Essentials","DBS Foundation Financial Literacy and Job Readiness","Ioda Academy Public Speaking"],
  org:[
  {when:"September 2024 – September 2026",role:"Sekretaris",org:"Karang Taruna",desc:"Sekretaris Karang Taruna adalah individu yang bertanggung jawab mengelola administrasi dan dokumentasi organisasi. Tugasnya meliputi mencatat notulen rapat, menyusun agenda kegiatan, serta mengelola surat-menyurat. Selain itu, sekretaris berperan dalam berkomunikasi dengan anggota maupun pihak eksternal, memastikan kelancaran arus informasi, serta mendukung program-program yang dilaksanakan oleh Karang Taruna."},
  {when:"Februari 2025 – Februari 2026",role:"Ketua Divisi Literasi dan Pengembangan",org:"Himpunan Mahasiswa Teknik Informatika (HMTI)",desc:"Kepala Divisi Literasi dan Pengembangan Himpunan Mahasiswa Teknik Informatika (HMTI) bertanggung jawab untuk merancang dan melaksanakan program literasi, mengembangkan kapasitas anggota melalui pelatihan, diskusi, atau lokakarya, mengelola kegiatan pengembangan diri dan peningkatan kualitas sumber daya manusia, serta mengevaluasi dan melaporkan hasil kegiatan divisi."},
  {when:"Februari 2024 – Februari 2025",role:"Ketua Divisi Hubungan Masyarakat (Humas)",org:"Himpunan Mahasiswa Teknik Informatika (HMTI)",desc:"Ketua Divisi Hubungan Masyarakat Himpunan Mahasiswa Teknik Informatika (HMTI) bertanggung jawab mengelola komunikasi dan hubungan eksternal organisasi. Tugas utamanya meliputi penyampaian informasi mengenai kegiatan HMTI kepada anggota dan masyarakat umum, pengelolaan media sosial, serta pembangunan kemitraan dengan pihak eksternal, seperti perusahaan dan organisasi lainnya."}],
 langs:["Indonesia (native)","Inggris (intermediate)"],
 projects:[
  {t:"Dashboard Keuangan",c:"Web",d:"Aplikasi pencatat arus kas dengan grafik interaktif dan ekspor laporan.",tags:["React","Chart.js"],demo:"#",code:"#"},
  {t:"Analisis Data Penjualan",c:"Data",d:"Pipeline Python untuk membersihkan dan memvisualisasikan data penjualan bulanan.",tags:["Python","Pandas"],demo:"#",code:"#"},
  {t:"Aplikasi Kebiasaan Harian",c:"Mobile",d:"Aplikasi pelacak kebiasaan dengan pengingat dan statistik mingguan.",tags:["React Native","SQLite"],demo:"#",code:"#"},
  {t:"API Reservasi",c:"Web",d:"REST API untuk reservasi ruang dengan autentikasi dan dokumentasi lengkap.",tags:["Node.js","PostgreSQL"],demo:"#",code:"#"},
  {t:"Prediksi Harga Rumah",c:"Data",d:"Model regresi dengan evaluasi dan antarmuka sederhana untuk mencoba prediksi.",tags:["scikit-learn","Streamlit"],demo:"#",code:"#"},
  {t:"Portofolio Fotografi",c:"Web",d:"Galeri responsif dengan pemuatan gambar bertahap dan mode gelap.",tags:["HTML","CSS","JS"],demo:"#",code:"#"}],
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
function cvBody(){return `<div class="side"><div><h3>Kontak</h3><ul class="plain"><li>${D.email}</li><li>+${D.wa}</li><li>${D.links.linkedin.replace("https://www.","")}</li><li>${D.links.github.replace("https://","")}</li></ul></div>
<div><h3>Keahlian</h3><div class="chips">${D.skills.map(s=>`<span class="chip">${s}</span>`).join("")}</div></div>
<div><h3>Bahasa</h3><ul class="plain">${cvList(D.langs)}</ul></div><div><h3>Sertifikasi</h3><ul class="plain">${cvList(D.certs)}</ul></div></div>
<div class="main"><h2>${D.name}</h2><p class="role" style="margin:8px 0 14px;font-size:18px">${D.role}</p><p style="color:var(--mute);margin:0 0 30px">${D.about}</p>
<h3>Pengalaman</h3><ul class="tl" style="margin-bottom:12px">${D.exp.map(e=>`<li><span class="when">${e.when}</span><h3 style="color:var(--ink);font-size:18px;font-weight:700">${e.title}</h3><div class="org">${e.org}</div><p>${e.desc}</p></li>`).join("")}</ul>
<h3>Pendidikan</h3><ul class="tl">${D.edu.map(e=>`<li><span class="when">${e.when}</span><h3 style="color:var(--ink);font-size:18px;font-weight:700">${e.title}</h3><div class="org">${e.org}</div></li>`).join("")}</ul><h3 style="margin-top:12px">Organisasi</h3><ul class="tl">${D.org.map(o=>`<li><span class="when">${o.when}</span><h3 style="color:var(--ink);font-size:18px;font-weight:700">${o.role}</h3><div class="org">${o.org}</div><p>${o.desc}</p></li>`).join("")}</ul></div>`}
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

$("#dlHtml").onclick=()=>{const css=`body{font:15px/1.6 Segoe UI,Arial,sans-serif;color:#16202E;max-width:820px;margin:32px auto;padding:0 24px}h1{margin:0}h2{font-size:15px;border-bottom:2px solid #2457D6;padding-bottom:4px;margin:26px 0 12px;color:#2457D6}.r{color:#2457D6;font-weight:600}.m{color:#5B6677;font-size:14px}.it{margin-bottom:14px}.it b{display:block}`;
 const html=`<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><title>CV ${D.name}</title><style>${css}</style></head><body><h1>${D.name}</h1><div class="r">${D.role}</div><div class="m">${D.email} · +${D.wa} · ${D.links.linkedin.replace("https://www.","")} · ${D.links.github.replace("https://","")}</div><h2>Profil</h2><p>${D.about}</p><h2>Pengalaman</h2>${D.exp.map(e=>`<div class="it"><b>${e.title} — ${e.org}</b><span class="m">${e.when}</span><div>${e.desc}</div></div>`).join("")}<h2>Pendidikan</h2>${D.edu.map(e=>`<div class="it"><b>${e.title} — ${e.org}</b><span class="m">${e.when}</span></div>`).join("")}<h2>Organisasi</h2>${D.org.map(o=>`<div class="it"><b>${o.role} — ${o.org}</b><span class="m">${o.when}</span><div>${o.desc}</div></div>`).join("")}<h2>Keahlian</h2><p>${D.skills.join(", ")}</p><h2>Sertifikasi</h2><p>${D.certs.join("; ")}</p><h2>Bahasa</h2><p>${D.langs.join("; ")}</p></body></html>`;
 save(`CV_${slug}.html`,html)};

$("#dlMd").onclick=()=>{const md=`# ${D.name}\n**${D.role}**\n\n${D.email} · +${D.wa}\n\n## Profil\n${D.about}\n\n## Pengalaman\n${D.exp.map(e=>`### ${e.title} — ${e.org}\n_${e.when}_\n\n${e.desc}\n`).join("\n")}\n## Pendidikan\n${D.edu.map(e=>`- ${e.title}, ${e.org} (${e.when})`).join("\n")}\n\n## Organisasi\n${D.org.map(o=>`- ${o.role}, ${o.org} (${o.when})`).join("\n")}\n\n## Keahlian\n${D.skills.join(", ")}\n\n## Sertifikasi\n${D.certs.map(c=>"- "+c).join("\n")}\n`;
 save(`CV_${slug}.md`,md)};

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
 head("Sertifikasi");D.certs.forEach(c=>line("- "+c,10,"normal",ink));
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
function drawProj(){$("#filters").innerHTML=cats.map(c=>`<button aria-pressed="${c===cur}" data-c="${c}">${c}</button>`).join("");
 $("#pgrid").innerHTML=D.projects.filter(p=>cur==="Semua"||p.c===cur).map(p=>`<article class="proj"><div class="thumb" aria-hidden="true">${p.t.split(" ").map(w=>w[0]).slice(0,2).join("")}</div><div class="pb"><div class="chips"><span class="chip">${p.c}</span></div><h3>${p.t}</h3><p>${p.d}</p><div class="m" style="color:var(--mute);font-size:13px">${p.tags.join(" · ")}</div><div class="lk"><a href="${p.demo}" target="_blank" rel="noopener">Demo</a><a href="${p.code}" target="_blank" rel="noopener">Kode sumber</a></div></div></article>`).join("");
 $$("#filters button").forEach(b=>b.onclick=()=>{cur=b.dataset.c;drawProj()});window.reveal&&reveal()}
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