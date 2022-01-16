// Make 16x16 grids.
// Press button to reset
// Make grid number adjustable


//make 16x16 grid
let box_area = 16;
let width_height = 500/ (box_area);
let bg_color;
let contianer = document.querySelector('main.div_containers');


let createBoxes= (box_number) =>{
    for(let i = 0; i < box_number; i++){
        for(let j = 0; j < box_number; j++){
            
            width_height = 500/(box_number);
            let box = document.createElement('div');
            let css_content = "width: " + width_height + "px; height: " + width_height + "px;";
            box.style.cssText = css_content;
            box.classList.add("box");
            contianer.appendChild(box);
            console.log("running");
        }
    }

    // Make Black when hover
    const boxes = document.querySelectorAll("div.box");

    boxes.forEach((box)=>{
        box.addEventListener('mouseenter', ()=>{
            box.classList.add("hover_black");
        });
    });

    // Press button to reset
    const reset = document.querySelector("button.reset");

    reset.addEventListener("click", ()=>{
        boxes.forEach((box) =>{
            box.classList.remove("hover_black");
        });
    });

    // // Change Sizes using button
    // const buttons = document.querySelectorAll('button');
    // buttons.forEach((button)=>{
    //     button.addEventListener('click', ()=>{
    //         console.log(button.id)
    //         if(button.id == "100"){
    //             box_area = 100;
    //             while(contianer.firstChild){
    //                 contianer.removeChild(contianer.firstChild);
    //             }
    //             createBoxes(box_area);
    //         }
            
    //     });
    // });

    // Change Sizes using a value in input box
    const submit = document.querySelector("#submit");
    submit.addEventListener('click', ()=>{
        let user_input = document.querySelector('#user_input');
        let value = user_input.value;
        if(value != '' && (value > 0 && value <= 100)){
            while(contianer.firstChild){
                contianer.removeChild(contianer.firstChild);
            }
             createBoxes(value);
        } else {
            alert('Put in value between 1 and 100')
        }
    });
}




createBoxes(box_area);