function fetchWeather() {
    fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Cairo&lang=ar')
    .then(response => response.json())
    .then(data => {
        document.getElementById('weather-result').innerText =
            `الحرارة: ${data.current.temp_c}°C - ${data.current.condition.text}`;
    })
    .catch(error => {
        document.getElementById('weather-result').innerText = "حدث خطأ!";
    });
}

function fetchAI() {
    fetch('https://api.example.com/ai?query=Hello')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ai-result').innerText = data.reply;
    })
    .catch(error => {
        document.getElementById('ai-result').innerText = "حدث خطأ!";
    });
}
