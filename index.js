const Toggle = document.querySelector('.toggle');
const Links = document.querySelectorAll('.nav_link')
Toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

Links.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
})