let counter = 0
let id = ''
function startInterval() {
	id = setInterval(function () {
		counter++
		if (counter <= 1) {
			inter = 'Прошла ' + counter + ' секунда'
			document.getElementById('Interval').innerHTML = inter
		} else if (counter <= 4) {
			inter = 'Прошло ' + counter + ' секунды'
			document.getElementById('Interval').innerHTML = inter
		} else {
			inter = 'Прошло ' + counter + ' секунд'
			document.getElementById('Interval').innerHTML = inter
		}
	}, 1000)
}

function stopInterval() {
	clearInterval(id)
	inter = 'Прошло ' + counter + ' секунд'
	document.getElementById('Interval').innerHTML = inter
}

function clearIntervals() {
	counter = 0
	inter = 'Очищено'
	document.getElementById('Interval').innerHTML = inter
}
