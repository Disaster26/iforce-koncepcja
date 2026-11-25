// lista produktow (ceny i opisy z obecnego sklepu)
var P=[
 [312,'Kubek ceramiczny','kubki','Uniwersalny kubek do kawy, herbaty i innych gorących napojów.','96,00'],
 [306,'Kubek 190 ml','kubki','Kompaktowy kubek do mocniejszej kawy, espresso lungo lub mniejszych porcji herbaty.','169,00'],
 [305,'Kubek 220 ml','kubki','Uniwersalny kubek o średniej pojemności, do kawy i herbaty.','124,00'],
 [308,'Kubek 220 ml, pasy','kubki','Kubek o klasycznej pojemności do napojów gorących i zimnych.','96,00'],
 [301,'Filiżanka do kawy','filizanki','Filiżanka o klasycznym kształcie, na co dzień i na specjalne okazje.','330,00'],
 [302,'Talerz 14 cm','talerze','Mały talerz do deserów, przystawek i drobnych przekąsek.','170,00'],
 [304,'Talerz 12 cm','talerze','Mały talerz deserowy do ciast, owoców i drobnych przekąsek.','81,00'],
 [309,'Talerz 12 cm, biały','talerze','Mały talerz do deserów i dodatków.','80,00'],
 [311,'Talerz 23 cm','talerze','Talerz obiadowy do codziennych posiłków i eleganckiego nakrycia stołu.','75,00'],
 [313,'Talerz 23 cm, kwiat','polmiski','Talerz w kształcie kwiatu do podawania dań i przekąsek.','130,00'],
 [307,'Miska 15 cm','polmiski','Praktyczna miska do zup, sałatek, płatków i deserów.','160,00'],
 [310,'Wazon ceramiczny','wazony','Wazon do kwiatów ciętych, suchych bukietów i aranżacji wnętrz.','290,00'],
 [303,'Szklany wazon','wazony','Przezroczysty wazon do świeżych kwiatów, gałązek i prostych kompozycji.','60,00']
];
var L=document.getElementById('lista');
L.innerHTML=P.map(function(p){return '<article class="karta" data-k="'+p[2]+'"><div class="foto"><img src="img/p'+p[0]+'-480.webp" srcset="img/p'+p[0]+'-480.webp 480w, img/p'+p[0]+'-800.webp 800w" sizes="(max-width:899px) 46vw, (min-width:1900px) 18vw, 24vw" width="480" height="466" loading="lazy" alt="'+p[1]+'"></div><div class="karta-in"><h3>'+p[1]+'</h3><p class="opis">'+p[3]+'</p><div class="dol"><span class="cena">'+p[4]+' zł</span><button class="dodaj" type="button">Do koszyka</button></div></div></article>'}).join('');
var licz=0,lc=document.getElementById('licznik');
L.addEventListener('click',function(e){var b=e.target.closest('.dodaj');if(!b)return;licz++;lc.textContent=licz;b.classList.add('ok');b.textContent='W koszyku';});
function filtruj(k){document.querySelectorAll('.filtr button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.f===k)});
 document.querySelectorAll('.karta').forEach(function(c){c.hidden=!(k==='wszystko'||c.dataset.k===k)});}
document.querySelector('.filtr').addEventListener('click',function(e){var b=e.target.closest('button');if(b)filtruj(b.dataset.f)});
document.querySelectorAll('[data-k]').forEach(function(a){if(a.tagName==='A')a.addEventListener('click',function(){filtruj(a.dataset.k);zamknij()})});
// menu mobilne
var hb=document.querySelector('.hamb'),mm=document.getElementById('mobmenu');
function zamknij(){mm.classList.remove('otw');hb.setAttribute('aria-expanded','false')}
hb.addEventListener('click',function(){var o=mm.classList.toggle('otw');hb.setAttribute('aria-expanded',o)});
mm.addEventListener('click',function(e){if(e.target.closest('a'))zamknij()});
// pasek na telefonie dopiero po minieciu przyciskow pierwszego ekranu
var mob=document.getElementById('mob'),hbt=document.getElementById('heroBtny');
if('IntersectionObserver' in window){new IntersectionObserver(function(w){var e=w[0];mob.classList.toggle('widac',!e.isIntersecting&&e.boundingClientRect.top<0)}).observe(hbt)}
// formularz pokazowy
var f=document.getElementById('formularz');
f.addEventListener('submit',function(e){e.preventDefault();if(!f.querySelector('.form-ok')){var p=document.createElement('p');p.className='form-ok';p.textContent='Dziękujemy, odpowiemy najszybciej, jak to możliwe. (Podgląd: formularz nie wysyła wiadomości.)';f.appendChild(p)}});
