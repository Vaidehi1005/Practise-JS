class RailwayForm {
    submit() {
        alert(this.name + ": Your Form Submitted for train number:  " + this.trainno)//this submit function submit the name and the train no of the passenger
    }
    cancel() {
        alert(this.name + ": This form is cancelled for train number:  " + this.trainno);
    }
    fill(givenname, trainno) {
        this.name = givenname
        this.trainno = trainno
    }
}
// create a form for Vaidehi 
let harryForm = new RailwayForm()
// fill the form with Vaidehi's details
harryForm.fill("Vaidehi", 456789)


// create a form for Rohan
let rohanForm = new RailwayForm()
// fill the form with Rohan's details
rohanForm.fill("Rohan", 100200)

harryForm.submit()
rohanForm.submit()
rohanForm.cancel()

let prom1 =new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(45)
    }, 3000);
})
prom1.then((value)=>{
 console.log(value)
})
let p = fetch("https://goweather.herokuapp.com/weather/India")
p.then((response) => {
    return response.json()
}).then((value2) => {
    console.log(value2)
})

