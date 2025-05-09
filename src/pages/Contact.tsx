import "../styles/contact.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../contactSchema";
import { StructureContactForm } from "../interfaces";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StructureContactForm>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <section className="contact-container">
      <h2>Contact</h2>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          alert("Congrats! your contact data has been sent");
        })}
        className="contact-form"
      >
        <div className="row-field-form">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="spanError">{errors.name.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="lastName">Lastname</label>
            <input type="text" id="lastName" {...register("lastName")} />
            {errors.lastName && (
              <span className="spanError">{errors.lastName.message}</span>
            )}
          </div>
        </div>

        <div className="row-field-form">
          <div>
            <label htmlFor="age">Age</label>
            <input type="text" id="age" {...register("age")} />
            {errors.age && (
              <span className="spanError">{errors.age.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email && (
              <span className="spanError">{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="row-field-form">
          <div>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" {...register("country")} />
            {errors.country && (
              <span className="spanError">{errors.country.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" {...register("address")} />
            {errors.address && (
              <span className="spanError">{errors.address.message}</span>
            )}
          </div>
        </div>

        <div className="gender-field-form">
          <label>Gender</label>
          <fieldset>
            <div className="option">
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                value="male"
                {...register("gender")}
              />
            </div>

            <div className="option">
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="female"
                value="female"
                {...register("gender")}
              />
            </div>

            <div className="option">
              <label htmlFor="other">Other</label>
              <input
                type="radio"
                id="other"
                value="other"
                {...register("gender")}
              />
            </div>
          </fieldset>
          {errors.gender && (
            <span className="spanError">{errors.gender.message}</span>
          )}
        </div>

        <div className="textarea-field-form">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="field-text-form"
            {...register("message")}
          ></textarea>
          {errors.message && (
            <span className="spanError span-error-textarea">
              {errors.message.message}
            </span>
          )}
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};
