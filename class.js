class RailwayForm {
    submit() {
        alert("Form Submitted")
    }
    cancel() {
        alert("This form is cancelled");
    }
}

let harry = new RailwayForm()
let rohan = new RailwayForm()

harry.submit()
rohan.submit()
rohan.cancel()

