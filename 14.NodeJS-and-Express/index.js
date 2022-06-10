const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert('Click en el botón');
})

// jQuery
$(() => {
    $("#btn-jquery").click(() => {
        console.log('Hola, estoy utilizando jQuery');
    })
})