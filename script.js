let input = document.querySelector('#search');
let error = document.querySelector('.error');
let form_wrapper = document.querySelector('.form-wrapper');
let output_image = document.querySelector('#image');

let img = document.querySelector('#image');
let name = document.querySelector('.name');
let weather = document.querySelector('.weather');
let description = document.querySelector('.description');
let temperature = document.querySelector('.temperature');
input.focus();
document.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		if (input.value === '') {
			input.focus();
		} else {
			api();
			input.focus();
		}
	}
});

function api() {
	fetch(
		'https://api.openweathermap.org/data/2.5/weather?q=' +
			input.value +
			'&appid=173348e99908fa7fa51e0639a86d0f19'
	)
		.then((response) => response.json())
		.then((data) => {
			let name_value = 'Place:' + data.name;
			let temp_value = 'Temp:' + data.main.temp + 'F';
			let weather_value = 'Weather:' + data['weather'][0]['main'];
			let desc_value = 'Description:' + data['weather'][0]['description'];
			let icon_value = data['weather'][0]['icon'];
			let img_value =
				'http://openweathermap.org/img/wn/' + icon_value + '@4x.png';
			name.innerText = name_value;
			weather.innerText = weather_value;
			description.innerText = desc_value;
			temperature.innerHTML = temp_value;
			img.src = img_value;
		})
		.catch((err) => (error.innerText = 'Some Error Occur'));
}
