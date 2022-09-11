// This function is used to validate the URL
const checkUrl = (url) => {
  var regex = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if(regex == null){
    alert('Please enter a valid URL');
    // Div with results appear in app
    document.querySelector('#nlpResult').style.opacity = '1';
    // Add text in div result
    document.querySelector('#results').innerHTML = 'Please enter a valid URL';
    return false;
   } else
    return true;
}


export { checkUrl }
