const outputScreen = document.querySelector('input');

function Clear() {
    outputScreen.value = "";
}
function display(num) {
    outputScreen.value += num;
}
function Del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (error) {
        alert('invalid')
    }

}
