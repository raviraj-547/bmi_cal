const form=document.querySelector('form')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseFloat(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if (height===''||height<0||isNaN(height)) {
        results.innerHTML = `invalid input ${height}`;
    } else if (weight===''||weight<0||isNaN(weight)) {
        results.innerHTML = `invalid input ${weight}`;
    }
    else{
        const bmi=((weight)/((height*height)/10000)).toFixed(3)
        results.innerHTML= `BMI=${bmi}`
        
    }
})