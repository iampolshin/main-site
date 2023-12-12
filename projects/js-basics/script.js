function showResult() {
    const showResult = confirm('Показать результат?');
    if (showResult) {
        calculate();
    } else {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        const resultMsg = document.createElement('p');
        resultMsg.textContent = 'Бригада в отпуске :)';
        resultDiv.appendChild(resultMsg);

        const resultImage = document.createElement('img');
        resultImage.src = 'images/relax.png';
        resultDiv.appendChild(resultImage);

        resultDiv.classList.remove('hidden');
    }
}

function calculate() {
    const length = parseFloat(document.getElementById('length').value);
    if (isNaN(length) || length < 0) {
        alert('Пожалуйста, введите положительное число для длины канавы!');
        const resultDiv = document.getElementById('result');
        resultDiv.classList.add('hidden');
        return;
    }

    const isMechanized = document.getElementById('mechanized').checked;
    const workersPerMeter = isMechanized ? 4 : 3;
    const workersNeeded = length / workersPerMeter;

    renderCalculated(length, isMechanized, workersNeeded);
}

function renderCalculated(length, isMechanized, workersNeeded) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const canalLength = document.createElement('p');
    canalLength.textContent = `Длина: ${length} м.`;
    resultDiv.appendChild(canalLength);

    const brigadeType = document.createElement('p');
    brigadeType.textContent = `Тип бригады: ${isMechanized ? 'механизированная' : 'не механизированная'}`;
    resultDiv.appendChild(brigadeType);

    const workersNeededInfo = document.createElement('p');
    workersNeededInfo.textContent = `Нужно землекопов: ${Math.ceil(workersNeeded)}`;
    resultDiv.appendChild(workersNeededInfo);

    const resultImage = document.createElement('img');
    resultImage.src = isMechanized ? 'images/mechanized.png' : 'images/default.png';
    resultDiv.appendChild(resultImage);

    resultDiv.classList.remove('hidden');
}
