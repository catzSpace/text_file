const send = document.querySelector('.send');

send.addEventListener('click', () => {
    const actions = document.querySelector('.event');
    const name = document.querySelector('.name').value;
    const pass = document.querySelector('.pass').value;
    if (name == '' || pass == ''){
        actions.innerHTML = `<p class="red">please fill in the fields</p>`
    } else {
        actions.innerHTML = ''
    }
})
