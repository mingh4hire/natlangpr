function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (!Client.checkForName(formText)) {
        alert('Must be at least 5 characers long and less than 100 characters long');
        return;
    }
    const formdata = new FormData();
    formdata.append('message', formText)
    console.log("::: Form Submitted :::")
    fetch('/sentiment', {
            method: 'POST',
            body: JSON.stringify({
                message: formText
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).catch(err => {
            alert('Error is ' + err);
            console.log('err mess is ', err);
            document.x = err;
        })
        .then(res => res.json()).catch(err => {
            alert(err);
            console.log('err is ', err);
            document.x = err;
        })
        .then(function (res) {
            if (res && res.meta && res.meta.code === 400) {
                console.error('Error')
                console.log(JSON.stringify(res.meta))
                alert(res)
                return;
            }
            document.getElementById('polarity').innerHTML = res.polarity;
            document.getElementById('subjectivity').innerHTML = res.subjectivity;
            document.getElementById('text').innerHTML = res.text;
            document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence;
            document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;


        }).catch(err => {
            alert('Error: ' + err);
        })
}


export {
    handleSubmit,
}