function hide() {
    if (col1.style.display != 'block') {
        col1.style.display = 'block';
        col2.style.display = 'none';
        document.getElementById("btn").innerHTML = "हिंदी";
    }
    else {
        col1.style.display = 'none';
        col2.style.display = 'block';
        document.getElementById("btn").innerHTML = "English";
    }
}

