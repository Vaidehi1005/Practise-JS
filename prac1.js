class RailwayForm {
    submit() {
        alert(this.name + ": Your Form Submitted")
    }
    cancel() {
        alert(this.name+ ": This form is cancelled");
    }
    fill(givenname){
        this.name=givenname  //this.name k che k object ni property che name means aa object ni ek property associate thai jase name k ane enu naam je object aapse .fill(givenname) e name property ne assign karse je pn naam hase e 
    }
}
// create a form for Harry 
let harryForm = new RailwayForm()
// fill the form with Harrys's details
harryForm.fill("Harry")


// create a form for Rohan
let rohanForm = new RailwayForm()
// fill the form with Rohan's details
rohanForm.fill("Rohan")

harryForm.submit()
rohanForm.submit()
rohanForm.cancel()

