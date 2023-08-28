fetch('https://apitest-v4xu.onrender.com/data')
      .then(response => response.json())
      .then(json => console.log(json))