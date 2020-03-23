function character() {
    let urlQueryParameters = new URLSearchParams(window.location.search),
    QueryParametersName = urlQueryParameters.get("name"),
    name = document.getElementById("name").Value;

    // console.log("name");

    if (queryParametersName !== null && queryParametersName !== "") {
        document.getElementById("name").value = queryParametersName;
        Connection();
    }   else if (name !== null && name !=="") {
        document
        .getElementById("connectionForm")
        .addEventListener("submit", Connection);
    } else {
        document.getElementById("characterSection").innerHTML =
            '<h2 id="characterMainTitle>Enter search term above...</h2>';
    }  
}

function Connection() {
    document.getElementById("characterSpinnerSection").innerHTML = "";
    document.getElementById("comicsSpinnerSection").innerHTML = "";

    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'marvel.com1aa6ca1bd69bea46d9f7d6fbb2af4c59', true)
    xhr.onloadstart = () => {
        document.getElementById("characterSpinnerSection").innerHTML =
        '<strong id="spinnerText" class="text-primary">Loading character...</strong>' +
        '<div class="text-primary spinner-border ml-auto" role="status" ' +
        'aria-hidden="true"id=spinner"></div>';

    }
    xhr.onerror = () => {
        document.getElementById("characterSection").innerHTML = '<h2 id="characterMainTitle">An error has occured, check connection</h2>';
    }
    xhr.onload = () => {
        if (this.status == 200) {
            console.log(this.textResponse)
            const results = JSON.parsel(this.responseText);

        } else {
            document.getElementById("characterSection").innerHTML = '<h2 id="characterMainTitle">Request not received</h2>';

        }

    } 
    xhr.onloadend = () => {
        document.getElementById("characterSpinnerSection").innerHTML = ""; 

    }
    xhr.send() 
}