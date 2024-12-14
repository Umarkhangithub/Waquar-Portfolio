import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = (formData) => {
    const tempErrors = {};

    // Validate First Name
    if (!formData.get("firstName").trim()) {
      tempErrors.firstName = "First name is required.";
    }

    // Validate Last Name
    if (!formData.get("lastName").trim()) {
      tempErrors.lastName = "Last name is required.";
    }

    // Validate Email
    const email = formData.get("email").trim();
    if (!email) {
      tempErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      tempErrors.email = "Invalid email format.";
    }

    // Validate Phone Number
    const phoneNumber = formData.get("phoneNumber").trim();
    if (!phoneNumber) {
      tempErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{3}\d{3}\d{4}$/.test(phoneNumber)) {
      tempErrors.phoneNumber = "Phone number must be equal to 10 digits.";
    }

    // Validate Message
    if (!formData.get("message").trim()) {
      tempErrors.message = "Message is required.";
    } else if (formData.get("message").length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");

    const formData = new FormData(event.target);
    if (!validate(formData)) {
      setResult("Please fix the errors above.");
      return;
    }

    setResult("Sending...");
    formData.append("access_key", "06c0f491-8989-4072-a56e-a00e58ab8852");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
      setErrors({});
    } else {
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex w-svw items-center justify-center pt-20 pb-6">
      <div className="w-full max-w-2xl bg-transparent bg-black opacity-80 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <span className="block text-center text-sm text-green-400 mb-4">{result}</span>
        <form className="space-y-4" onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value="06c0f491-8989-4072-a56e-a00e58ab8852" />

          <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-orange-500 mb-2">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-2 bg-white text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium  text-orange-500 mb-2">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-2 bg-white text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium  text-orange-500 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 bg-white text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium  text-orange-500 mb-2">
              Phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full p-2 bg-white text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="123-456-7890"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium  text-orange-500 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 bg-white text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
