function acender(cor) {
const todas = document.querySelectorAll('.luz');

todas.forEach(l => l.classList.remove('acesa'));

document.getElementById('luz-' + cor).classList.add('acesa');

}