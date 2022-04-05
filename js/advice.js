document.addEventListener('DOMContentLoaded', () => {
  const adviceBtn = document.getElementById('adviceBtn');
  const adviceDiv = document.getElementById('adviceContent');
  const adviceSpan = document.getElementById('adviceId');
  
  adviceBtn.addEventListener('click', () => {
    const http = new XMLHttpRequest();
    const url = 'https://api.adviceslip.com/advice';
    http.responseType = 'json';
    http.open('GET', url);

    http.onload = (e) => {
      const { currentTarget } = e;
      if (currentTarget.status === 200) {
        adviceSpan.innerHTML = currentTarget.response.slip.id;
        adviceDiv.innerHTML = `"${currentTarget.response.slip.advice}"`;
      } else {
        console.log('Error in GET response!');
      }
    };

    http.send();
  });
});