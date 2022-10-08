const Number = {
  search(number, choice) {
    let endpoint  = ``;
    switch(choice) {
      default:
        endpoint = `//numbersapi.com/${number}?json`;
        break;
      case ('math'):
        endpoint = `//numbersapi.com/${number}/math?json`;
        break;
      case ('year'):
        endpoint = `//numbersapi.com/${number}/year?json`;
        break;
      }
    return fetch(endpoint).then(response => {
        return response.json();
    }).then(response => {
      return response.text;
    }).catch(error => {
      console.log(error);
    })
  }
}

export default Number;