var lights = document.querySelectorAll('.light');
var i;
let init_time;
let interval_time;

const data = [];
var j = 0;

function changeColor() {
    lights[i].style.background = '#54AD98';
    lights[i].style.boxShadow = '0px 0px 20px 10px #E1E1E1'
    setTimeout(() => {
        i++;
        if (i <= lights.length) changeColor();
    }, 1000);

    setTimeout(() => {
        lights.forEach(x => {
            x.style.background = '#303030'
            x.style.boxShadow = '0px 0px 20px 5px #252525'
        });
    }, 3100);
}

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(interval_time);
    let a = document.getElementById('time').textContent;
    let b = document.getElementById('ms').textContent;
    j++;
    actTable(j, a+b);
});

document.getElementById('init').addEventListener('click', () => {
    init_time = 0;
    i = 0;
    document.getElementById('time').textContent = '00:00:';
    document.getElementById('ms').textContent = '000';
    changeColor();
    clearInterval(interval_time);
    setTimeout(() => {
        init_time = Date.now() - (init_time ? init_time : 0);
        interval_time = setInterval(actualizarCronometro, 10);
    }, 3100);
});

function actualizarCronometro() {
    const tiempoActual = Date.now() - init_time;
    const milisegundos = tiempoActual % 1000;
    const segundos = Math.floor(tiempoActual / 1000) % 60;
    const minutos = Math.floor(tiempoActual / 60000);

    document.getElementById('time').textContent = `${f1(minutos)}:${f1(segundos)}`;
    document.getElementById('ms').textContent = `:${f2(milisegundos)}`;
}

function f1(valor) {
    return valor < 10 ? `0${valor}` : valor;
}

function f2(valor) {
    if (valor < 10) return `00${valor}`;
    else if (valor < 100) return `0${valor}`;
    else return valor;
}

function actTable(ite, time) {
    const tabla = document.getElementById('data');
    const tbody = tabla.querySelector('tbody');

    const fila = document.createElement('tr');
    const iterator = document.createElement('td');
    const times = document.createElement('td');

    iterator.textContent = ite;
    times.textContent = time;

    fila.appendChild(iterator);
    fila.appendChild(times);
    tbody.appendChild(fila);
}
