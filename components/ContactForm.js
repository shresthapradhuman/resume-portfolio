import { Formik, Form, Field, ErrorMessage } from "formik";
export default function ContactForm() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 20) {
      errors.name = "Must be 20 characters or less";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };
  const onSubmit = (values, submitProps) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else if (response.ok) {
          alert("Message Successfully Sent.");
          submitProps.resetForm();
        } else {
          alert("Oops! error has occurred");
        }
        return response;
      })
      .catch((error) => alert(error));
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="xl:basis-6/12 basis-full py-10"
      >
        <div>
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="name" className="pb-2 text-xl font-light">
            Name *
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="form-input px-2 py-2 placeholder:text-gray-400 outline-0"
          />
          <div className="text-red-400 my-2">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="pb-2 text-xl font-light">
            Email *
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="form-input px-2 py-2 placeholder:text-gray-400 outline-0"
          />
          <div className="text-red-400 my-2">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="message" className="pb-2 text-xl font-light">
            Message *
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Enter your message"
            cols="30"
            rows="10"
            className="form-textarea"
          />
          <div className="text-red-400 my-2">
            <ErrorMessage name="message" />
          </div>
        </div>
        <button className="py-2 px-4 bg-indigo-600 text-xl text-white rounded-sm"type="submit">Send Message</button>
      </Form>
    </Formik>
  );
}
