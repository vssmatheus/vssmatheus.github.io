const myFunction = () => {
    var copyText = document.getElementById("emailItem");

    copyText.click();
    navigator.clipboard.writeText(copyText.value);

    alert("Email copied: " + copyText.value);
}

