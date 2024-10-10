function horasVividas(fechaNacimiento) {
    const ahora = new Date();
    const nacimiento = new Date(fechaNacimiento);
    
    // Diferencia en milisegundos
    const diferenciaMs = ahora - nacimiento;
    
    // Convertir la diferencia en horas (1 hora = 1000 ms * 60 seg * 60 min)
    const horas = Math.floor(diferenciaMs / (1000 * 60 * 60));
    
    return `¡Has vivido aproximadamente ${horas.toLocaleString()} horas hasta ahora!`;
}

const miCumple = '2023-02-09';
console.log(horasVividas(miCumple));
