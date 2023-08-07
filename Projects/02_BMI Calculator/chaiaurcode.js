const form = document.querySelector('form');


// // const weight = parseInt(document.querySelector('#weight'.value))     
// // this will give empty value 

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if (height === ' ' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if (weight ==='' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid height ${weight}`;
    }
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);

        if(bmi< 18.6){
            results.innerHTML = `<span>${bmi}</span> <br> <span> Under Weight  </span>`;
        }
        else if (bmi < 24.9 && bmi>18.6){
            results.innerHTML = `<span>${bmi}</span> <br> <span> Normal range </span>`;
        }
        else{
            results.innerHTML = `<span>${bmi}</span> <br> <span> Over Weight </span>`;
        }
        
    }
});




