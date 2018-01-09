
//Figure out how to make it one at a time!

class State {
    constructor(stateName) {
        this.stateButton = document.getElementById("state_" + stateName);
        this.stateButtonTags = document.getElementById("state_" + stateName).classList;
        this.selected = false;

        //Flips the button (grey/green), not the flipButton() method because that causes errors (?)
        this.stateButton.addEventListener("click", ()=> {
            if (this.selected) {
                this.stateButtonTags.remove("btn-success");
                this.stateButtonTags.add("btn-secondary");
            } else {
                this.stateButtonTags.remove("btn-secondary");
                this.stateButtonTags.add("btn-success");
            }
            this.selected = !this.selected;
        });
    }

    setInactive(){
        this.stateButtonTags.remove("btn-secondary");
        this.stateButtonTags.add("btn-success");
        this.selected = false;
    }
}



const fault = new State("fault");
const idle = new State("idle");
const ready = new State("ready");
const pushing = new State("pushing");
const coasting = new State("coasting");
const braking = new State("braking");


const stateList = [fault,idle,ready,pushing,coasting,braking];
