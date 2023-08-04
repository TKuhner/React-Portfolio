import Card from "react-bootstrap/Card";
import {useForm} from "react-hook-form";


const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" >
      {/* HEADINGS */}
      <div id="headingsDiv">
        <div>
          <p id="contactMeP">
            <span >CONTACT ME</span> TO GET STARTED
          </p>
          <div >
            
          </div>
        </div>
      </div>

      {/* FORM */}
      <div id="formSectionDiv">
        <div>
          <img src="" alt="contact" />
        </div>

       <Card id="card">
        <Card.Body>
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
            method="POST"
          >
            <input
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p >
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email && (
              <p >
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p >
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
