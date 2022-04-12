function navBarFixed() {
    window.addEventListener('scroll', (event) => {
        let scrollY = this.scrollY;
        if(scrollY > 200) {
            document.querySelector('.navbar').classList.add('is-fixed-top');
        } else {
            document.querySelector('.navbar').classList.remove('is-fixed-top');
        }
    })
}

navBarFixed() 