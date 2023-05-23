const convertBtn = document.getElementById('convert-btn');
const resultEl = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const scale = document.getElementById('scale').value;
  
  if (scale === 'celsius') {
    const fahrenheit = (temperature * 1.8) + 32;
    resultEl.textContent = `${fahrenheit} °F`;
  } else if (scale === 'fahrenheit') {
    const celsius = (temperature - 32) / 1.8;
    resultEl.textContent = `${celsius} °C`;
  }
});
