function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    const formdata = new FormData();
    formdata.append('message', formText)
    console.log("::: Form Submitted :::")
    fetch('/sentiment', {
            method: 'POST',
            body: JSON.stringify({
                message: formText + 'text'
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('polarity').innerHTML = res.polarity;
            document.getElementById('subjectivity').innerHTML = res.subjectivity;
            document.getElementById('text').innerHTML = res.text;
            document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence;
            document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;


        })
}

function doit() {
    alert('doit');
}
export {
    handleSubmit,
    doit
}