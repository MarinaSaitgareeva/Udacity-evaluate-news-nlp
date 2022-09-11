function handleSubmit(event) {
    event.preventDefault();

    // Check what text was put into the form field
    let url  = document.querySelector('#url').value;

    if(Client.checkUrl(url)) {
      fetch('http://localhost:8080/apiData', {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },       
        body: JSON.stringify({url}),
    })
    .then(res => res.json())
    .then(res => {
      // Div with results appear in app
      document.querySelector('#nlpResult').style.opacity = '1';
      // Smoothly scrolls to Div with results
      document.querySelector('#nlpResult').scrollIntoView(false, {
        behavior: 'smooth',
        block: 'end'
      });
      // Add data in HTML result section
      document.querySelector('#text').innerHTML = `<a href="${url}" target="_blank">Your article's URL</a>`;
      document.querySelector('#score').innerHTML = `<strong>Score: </strong>${res.score_tag}`;
      document.querySelector('#subjectivity').innerHTML = `<strong>Subjectivity: </strong>${res.subjectivity}`
      document.querySelector('#irony').innerHTML = `<strong>Irony: </strong>${res.irony}`;
      document.querySelector('#confidence').innerHTML = `<strong>Confidence: </strong>${res.confidence}`;
    })
    console.log('::: Form Submitted :::');
    } else {
        alert('Please enter a valid URL');
        console.log('Not valid url');
      }
}

export { handleSubmit }
