const dataAtual = new Date();
const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getDate();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();

const msg = `${weeksDay(diaSemana)}, dia ${diaMes} de ${getMonth(mes)} de ${ano}.`;

function weeksDay (dayIndex) {
    const textoSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaExtenso = textoSemana[dayIndex];
    return diaExtenso;
}

function getMonth (monthIndex) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const monthName = meses[monthIndex];
    return monthName;
}

const text = document.querySelector('#shownText');
text.innerHTML = msg;