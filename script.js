const texte = document.querySelector('.texte');
const bunny = document.querySelector('.bunny');
const btn= document.querySelector('.btn')
const imgcontain=[
    {texte: 'J\'ai appris que les gens oublieront ce que vous avez dit, les gens oublieront ce que vous avez fait, mais les gens n\'oublieront jamais ce que vous leur avez fait ressentir  et je n\'ai ressenti que du positif avec toi...enfin souvent😅' ,   
    texteimg:'d49001f32e704aeebf6e14645a2e1aab.jpg'     }  ,
    {texte: 'Garde toujours ce sourire que tu as toujours eu car il illumine ☀️ la vie de ceux qui t\'entourent' ,   
    texteimg:'IMG-20250101-WA0016.jpg'     }  ,
    {texte: 'Les choses seront parfois difficile pour toi mais rapelle toi toujours que Dieu✝️ sera toujours là pour te soutenir et moi aussi bien sûr 😌' ,   
    texteimg:'IMG-20251003-WA0005 (1).jpg'     }  ,
    {texte: 'Avec toi, je n’ai jamais eu besoin de jouer un rôle. Tu m’as accepté tel que je suis. Merci pour ça🙏🥲. Il faut que tu cherche à grandir un peu aussi heinn😂'}   

];
  var compt=0;

btn.addEventListener('click',function() {
    
    const image = document.getElementById('image');
    image.classList.add('changed-image');
    const tete = document.querySelector('.header');
    tete.style.display = 'none';
    texte.textContent= imgcontain[compt].texte;
    image.src=imgcontain[compt].texteimg; 
    compt+=1;
});