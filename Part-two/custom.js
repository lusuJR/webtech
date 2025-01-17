function create() {
    var nameField = document.getElementById('name');
    var addSpan = document.getElementById('add');
    
    if (nameField.value == '') {
        nameField.style.backgroundColor = "#f8d7da"; // Light red
    } else {
        addSpan.innerHTML = " " + nameField.value;
        nameField.style.backgroundColor = "#fff"; // White background
        nameField.value = "";
    }
}