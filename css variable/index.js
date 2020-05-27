const control = document.querySelectorAll('input');

function HandleUpdate()
{
    let suffix = this.dataset.sizing || ' ';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

control.forEach(input => input.addEventListener('mousemove', HandleUpdate));

