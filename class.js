class RailwayForm {
    submit() {
        alert("Form Submitted")
    }
    cancel() {
        alert(this.name+ ": This form is cancelled");
    }
    fill(givenname){
        this.name=givenname  //this.name k che k object ni property che name means aa object ni ek property associate thai jase name k ane enu naam je object aapse .fill(givenname) e name property ne assign karse je pn naam hase e 
    }
}

let harryForm = new RailwayForm()
harryForm.fill("Harry")
let rohanForm = new RailwayForm()
rohanForm.fill("Rohan")

harryForm.submit()
rohanForm.submit()
rohanForm.cancel()

