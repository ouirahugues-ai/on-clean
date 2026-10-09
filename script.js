const nav=document.querySelector('.nav');
const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quote-form').addEventListener('submit',function(e){
  e.preventDefault();
  const d=new FormData(this);
  const subject=encodeURIComponent("Demande de devis - ON'CLEAN");
  const body=encodeURIComponent(
    `Bonjour,\n\nJe souhaite obtenir un devis auprès d'ON'CLEAN.\n\n`+
    `Nom / entreprise : ${d.get('nom')}\n`+
    `Téléphone : ${d.get('telephone')||'Non renseigné'}\n`+
    `Ville / secteur : ${d.get('ville')||'Non renseigné'}\n`+
    `Prestation : ${d.get('prestation')}\n\n`+
    `Besoin :\n${d.get('message')}\n\nCordialement`
  );
  window.location.href=`mailto:huguesouirapro@gmail.com?subject=${subject}&body=${body}`;
});