function appendValue(val) {
    document.getElementById('result').innerText += val;
}

function clearResult() {
    document.getElementById('result').innerText = '';
}

function calculate() {
    try {
        let expression = document.getElementById('result').innerText;
        let result = eval(expression);
        document.getElementById('result').innerText = result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}