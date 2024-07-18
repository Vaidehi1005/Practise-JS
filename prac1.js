class RailwayForm {
    submit() {
        alert(this.name + ": Your Form Submitted for train number:  " + this.trainno)
    }
    cancel() {
        alert(this.name + ": This form is cancelled for train number:    " + this.trainno);
    }
    fill(givenname, trainno) {
        this.name = givenname
        this.trainno = trainno
    }
}
// create a form for Harry 
let harryForm = new RailwayForm()
// fill the form with Harrys's details
harryForm.fill("Vaidhi", 456789)


// create a form for Rohan
let rohanForm = new RailwayForm()
// fill the form with Rohan's details
rohanForm.fill("Rohan", 100200)

harryForm.submit()
rohanForm.submit()
rohanForm.cancel()

