import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  let router = useRouter();
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
    <>
      <section className="w-full xl:px-20 px-5 py-5">
        <h2 className="title text-l font-medium mb-10 capitalize">
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href={router.pathname}>
            <a>{router.pathname}</a>
          </Link>
        </h2>
        <div className="contact-wrapper">
          <h2 className="text-4xl font-medium mb-2">Get In Touch</h2>
          <span className="text-xl font-medium">
            Looking forward to hearing from you.
          </span>
          <div className="flex flex-wrap">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
