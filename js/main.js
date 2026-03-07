
async function loadTools(){
const res = await fetch('js/tools.json');
const tools = await res.json();

const grid = document.getElementById('tools');

tools.forEach(t=>{
const card=document.createElement('div');
card.className='card';
card.dataset.search=(t.name+' '+t.desc).toLowerCase();

card.innerHTML=`
<h3>${t.name}</h3>
<p>${t.desc}</p>
<a class="open" href="tools/${t.slug}.html">Open Tool</a>
`;

grid.appendChild(card);
});
}

function searchTools(){
let q=document.getElementById('search').value.toLowerCase();

document.querySelectorAll('.card').forEach(c=>{
c.style.display=c.dataset.search.includes(q) ? 'block' : 'none';
});
}

loadTools();
