const paragraphs = document.querySelectorAll('.p');
const sections = document.querySelectorAll('.section');
const bin = document.querySelector('#bin');

paragraphs.forEach(p => {
    p.addEventListener('dragstart', e => {
        console.log('Estoy arrastrando el párrafo: '+ p.innerText);
        p.classList.add('draggin');
        e.dataTransfer.setData('id', p.id);
        const phantomImg = document.querySelector('.phantom-img');
        e.dataTransfer.setDragImage(phantomImg, 0, 0);
    })
    
    p.addEventListener('dragend', () => {
        console.log('Estoy soltando el párrafo: '+ p.innerText);
        p.classList.remove('draggin');
    })
});

sections.forEach(section => {
    section.addEventListener('dragover', e => {
        e.preventDefault();
        // e.dataTransfer.dropEffect = 'move';
    })

    section.addEventListener('drop', e => {
        console.log('Drop');
        const idP = e.dataTransfer.getData('id');
        const p = document.querySelector('#'+idP);
        section.appendChild(p);
    })
});

bin.addEventListener('dragover', e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
})

bin.addEventListener('drop', e => {

    const idP = e.dataTransfer.getData('id');
    const p = document.querySelector('#'+idP);
    const parent = p.parentNode;
    console.log(p)
    parent.removeChild(p);
})