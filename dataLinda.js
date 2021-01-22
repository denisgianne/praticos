const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
// Para usar com datas menores que hoje
function dataLinda( date, hoje ){ // ou prettyDate()
	// date new Date( timestamp )
	// hoje new Date()
	let str = "";
	if(date == null )
		return 'data inválida';
	let diffDays = parseInt((hoje - date) / (1000 * 60 * 60 * 24), 10);
	let mes = meses[date.getMonth()];
	let ano = date.getFullYear().toString().substr(-2);
	let dia = date.getDate();
	let hora = date.getHours();
	let minuto = date.getMinutes();
	if( minuto == '0')
		minuto = 'h';
	else if( minuto < 10 )
		minuto = ':0'+minuto;
	else
		minuto = ':'+minuto;
		let dia_da_semana = semana[date.getDay()];
	let hora_minuto = `<br/>às ${hora}${minuto}`;
	// console.log( diffDays, dia, mes, ano, hora );
	if( diffDays > 360 ){
		return`${dia}/${mes}/${ano}${hora_minuto}`;
	}
	if( diffDays > 31 ){
		return `${dia}/${mes}${hora_minuto}`;
	}
	if( date.getMonth() != hoje.getMonth() ){
		return `${dia}/${mes}${hora_minuto}`;
	}
	if( diffDays > 6 ){
		return `dia ${dia}${hora_minuto}`;
	}
	if( (diffDays < 2) && (dia == hoje.getDate()) ){
		return `Hoje${hora_minuto}`;
	}
	return `${dia_da_semana}${hora_minuto}`;
}
// Teste simples
var hoje = new Date();
// para usar somente com datas inferiores ao agora
console.log( dataLinda( new Date('{alguma data de hoje}'), hoje ) );
console.log( dataLinda( new Date('{alguma data desta semana}'), hoje ) );
console.log( dataLinda( new Date('{alguma data deste mês}'), hoje ) );
console.log( dataLinda( new Date('{alguma data do último ano}'), hoje ) );
console.log( dataLinda( new Date('{alguma data maior que um ano}'), hoje ) );
