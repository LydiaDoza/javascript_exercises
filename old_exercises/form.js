document.getElementById("btnSubmit").addEventListener("click",handleSubmit);

function handleSubmit(event) {
    var input_name = document.getElementById("name").value;
    var input_email = document.getElementById("email").value;
    var input_feedback = document.getElementById("feedback").value;
    if (input_feedback === ""){
        input_feedback = "No feedback was provided.";
    }
    
    var input_newsletter = document.getElementById("newsletter").checked;
    if (input_newsletter){
        input_newsletter = "Yes, join newsletter."
    } else {
        input_newsletter = "No, thank you."
    }

    var strOutput = 
        ` Form input received
        Name: ${input_name}
        Email: ${input_email}
        Feedback: ${input_feedback}
        Singup for Newsletter: ${input_newsletter}
        `;
    
    console.log(strOutput);
}