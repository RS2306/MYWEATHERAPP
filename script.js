const apiKey = "36f70a20bb1348d2a9150614251203"; // Replace with your API Key

async function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        // Updating UI with location details
        document.getElementById("location").innerText = `📍 ${data.location.name}`;
        document.getElementById("region-country").innerText = `${data.location.region}, ${data.location.country}`;
        document.getElementById("temperature").innerText = `🌡 Temperature: ${data.current.temp_c}°C`;
        document.getElementById("condition").innerText = `☁ ${data.current.condition.text}`;

        // Display Weather Icon
        const icon = document.getElementById("weather-icon");
        icon.src = `https:${data.current.condition.icon}`;
        icon.style.display = "block";
    } catch (error) {
        document.getElementById("weather-result").innerHTML = "<p style='color: red;'>City not found! Please try again.</p>";
    }
}
