fetch('https://apitest-v4xu.onrender.com')
      .then(response => response.json())
      .then(json => console.log(json))