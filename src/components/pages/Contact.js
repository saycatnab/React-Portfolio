import React from "react";

function Contact() {
    return (
        <div>
      <div className="text-bg-info p3 text-center mb-3 font-monospace">
             <h1>Contact Me</h1>
         </div>
        <div className="text-info p3 text-center mb-3 font-monospace">
             <h2>Saynab Good</h2>
        </div>
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/8740/8740316.png" class="rounded mx-auto d-block" width="20%" alt="image of a cartoon cat"></img>
      </div>
      <div className="text-info p3 text-center mb-3 font-monospace">
        <p>
        Here are ways you can contact me! 
        </p>
      </div>
      <div>
      <a class="btn btn-info btn-lg d-grid gap-2 col-6 mx-auto m-3 text-white" href="mailto:saysaygood83@gmail.com.com" role="button">Gmail</a>
      </div>
      <div>
      <a class="btn btn-info btn-lg d-grid gap-2 col-6 mx-auto m-3 text-white" target="blank" href="https://github.com/saycatnab" role="button">Github</a>
      </div>
      <div>
      <a class="btn btn-info btn-lg d-grid gap-2 col-6 mx-auto m-3 text-white" target="blank" href="https://www.linkedin.com/in/saynab-good-49432b269/" role="button">LinkedIn</a>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="text-info p3 text-center mb-3 font-monospace">
        <h2>Contact Form</h2>
      </div>
      <form className="form d-grid gap-2 col-6 mx-auto">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <input
            name="Email"
            type="text"
            placeholder="Email"
          />
          <button className="btn btn-info d-grid gap-2 col-6 mx-auto">Submit</button>
        </form>
        <br></br>
        <br></br>
        <br></br>
    </div>
    )
    
}
//   <div>
//     
//     <div className="text-info p3 text-center mb-3 font-monospace">
//         <h2>Saynab Good</h2>
//     </div>
//     <div>
//     <p>

//     </p>
//     </div>
//   </div>


export default Contact;