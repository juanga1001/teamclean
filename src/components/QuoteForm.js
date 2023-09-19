import React from "react";
import emailjs from "@emailjs/browser";
import validEmail from "@secretsofsume/valid-email";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function QuoteForm() {
  const shouldShowResidential  = false;

  const [size, setSize] = React.useState(700);
  const [baths, setBaths] = React.useState(1);
  const [beds, setBeds] = React.useState(1);
  const [price, setPrice] = React.useState(700);
  const [client, setClient] = React.useState("comercial");
  const [quoteStep, setQuoteStep] = React.useState(1);

  const [formData, setFormData] = React.useState({
    dimension: "",
    bathrooms: "",
    service: "",
    frecuency: "",
  });

  const [alert, setAlert] = React.useState("");
  const form = React.useRef();

  React.useEffect(() => {
    setQuote();
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function resetForm() {
    setFormData((prevFormData) => ({
      dimension: 7000,
      bathrooms: 1,
      bedrooms: 1,
      service: "standard",
      frecuency: "single",
      name: "",
      email: "",
      phone: "",
    }));
    setAlert("");
  }

  function addSize() {
    setSize((prev) => prev + 1000);
    setQuote();
  }

  function subSize() {
    setSize((prev) => {
      return prev === 700 ? 700 : prev - 1000;
    });
    setQuote();
  }

  function addBath() {
    setBaths((prev) => prev + 1);
    setQuote();
  }

  function subBath() {
    setBaths((prev) => {
      return prev === 1 ? 1 : prev - 1;
    });
    setQuote();
  }

  function addBed() {
    setBeds((prev) => prev + 1);
    setQuote();
  }

  function subBed() {
    setBeds((prev) => {
      return prev === 1 ? 1 : prev - 1;
    });
    setQuote();
  }

  function setQuote() { // RESUME HERE //
    let baseQuote = 0;
    if(client === "comercial"){
      baseQuote = size * 3.3 + baths * 60;
    } else {
      baseQuote = 90 + beds * 50 + baths * 50;
    }
    switch (formData.service) {
      case "deep":
        baseQuote = baseQuote * 1.4;
        break;
      case "move":
        baseQuote = baseQuote * 1.8;
        break;
      default:
        baseQuote = baseQuote * 1;
    }
    switch (formData.frecuency) {
      case "weekly":
        baseQuote = baseQuote * 0.7;
        break;
      case "biweekly":
        baseQuote = baseQuote * 0.8;
        break;
      case "monthly":
        baseQuote = baseQuote * 0.9;
        break;
      default:
        baseQuote = baseQuote * 1;
    }
    return setPrice(Math.round(baseQuote));
  }

  const handleBack = () => {
    setQuoteStep(1);
    setAlert("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let formTemplate = client === "comercial" ? "template_4ohjmhm" : "template_wn3kauc";
    let regex = /^[0-9]+$/;
    if (formData.name && formData.email && formData.phone) {
      if (validEmail(formData.email)) {
        if (
          formData.phone.match(regex) &&
          formData.phone.toString().length === 10
        ) {
          emailjs
            .sendForm(
              "service_f0o6qn9",
              formTemplate,
              e.target,
              "Iry_DEikXc2kzDYnN"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          e.target.reset();
          resetForm();
          setQuoteStep(3);
        } else {
          setAlert("Enter a valid phone");
        }
      } else {
        setAlert("Enter a valid email");
      }
    } else {
      setAlert("All fields are required");
    }
  };

  return (
    <div className="QuoteForm-container">
      <div>
        <h3
          onClick={() => setClient("comercial")}
          className={client === "comercial" ? "Service-selected" : ""}
        >
          COMMERCIAL
        </h3>
        {shouldShowResidential && (
          <h3
            onClick={() => setClient("residential")}
            className={client === "residential" ? "Service-selected" : ""}
          >
            RESIDENTIAL
          </h3>
        )}
      </div>
      <form onSubmit={sendEmail} ref={form} className="Quote-form">
        <input type="text" name="client" value={client} className="btn-hide" />

        <input type="text" name="price" value={price} className="btn-hide" />

        {
          <div
            className={`quote-input quote-area-A ${
              (quoteStep === 1 && client === "comercial") ? "" : "btn-hide"
            }`}
          >
            <input
              className="quote-input-box"
              type="text"
              placeholder={`${size} Square Feet`}
              onChange={handleChange}
              name="dimension"
              value={`${size} Square Feet`}
            />
            <AddIcon onClick={addSize} className="Quote-icon QuotePlus" />
            <RemoveIcon onClick={subSize} className="Quote-icon" />
          </div>
        }

        {
          <div
            className={`quote-input quote-area-A ${
              (quoteStep === 1 && client === "residential") ? "" : "btn-hide"
            }`}
          >
            <input
              className="quote-input-box"
              type="text"
              placeholder={`${beds} Bedrooms`}
              onChange={handleChange}
              name="bedrooms"
              value={`${beds} Bedrooms`}
            />
            <AddIcon onClick={addBed} className="Quote-icon QuotePlus" />
            <RemoveIcon onClick={subBed} className="Quote-icon" />
          </div>
        }

        {
          <input
            className={`quote-input quote-area-A input-box-quote ${
              quoteStep === 2 ? "" : "btn-hide"
            }`}
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
          />
        }

        {
          <div
            className={`quote-input quote-area-B ${
              quoteStep === 1 ? "" : "btn-hide"
            }`}
          >
            <input
              className="quote-input-box"
              type="text"
              placeholder={`${baths} Bathrooms`}
              onChange={handleChange}
              name="bathrooms"
              value={`${baths} Bathrooms`}
            />
            <AddIcon onClick={addBath} className="Quote-icon QuotePlus" />
            <RemoveIcon onClick={subBath} className="Quote-icon" />
          </div>
        }

        {
          <input
            className={`quote-input quote-area-B input-box-quote ${
              quoteStep === 2 ? "" : "btn-hide"
            }`}
            type="text"
            placeholder="email"
            onChange={handleChange}
            name="email"
          />
        }

        {
          <div
            className={`quote-select quote-area-C ${
              quoteStep === 1 ? "" : "btn-hide"
            }`}
          >
            <select
              onChange={handleChange}
              name="service"
              placeholder={formData.name}
              value={formData.service}
            >
              <option value="standard">Standard</option>
              <option value="deep">Deep Clean</option>
              <option value="move">Move In/Out</option>
            </select>
            <span className="select-arrow">
              {" "}
              <KeyboardArrowDownIcon />{" "}
            </span>
          </div>
        }

        {
          <div
            className={`quote-select quote-area-D ${
              quoteStep === 1 ? "" : "btn-hide"
            }`}
          >
            <select
              onChange={handleChange}
              name="frecuency"
              value={formData.frecuency}
            >
              <option value="single">One Time</option>
              <option value="weekly">Weekly</option>
              <option value="biweekly">Biweekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <span className="select-arrow">
              {" "}
              <KeyboardArrowDownIcon />{" "}
            </span>
          </div>
        }

        {
          <input
            className={`quote-input quote-area-D input-box-quote ${
              quoteStep === 2 ? "" : "btn-hide"
            }`}
            type="text"
            placeholder="phone"
            onChange={handleChange}
            name="phone"
          />
        }

        {quoteStep >= 2 && (
          <div onClick={handleBack} className="quote-form-back">
            {" "}
            <ArrowBackIosIcon /> <p>Back</p>
          </div>
        )}
        {alert && <p className="QuoteForm-alert">{alert}</p>}
        <h3
          onClick={() => setQuoteStep(2)}
          className={`btn-quote-book ${quoteStep !== 1 ? "btn-hide" : ""}`}
        >
          BOOK NOW | <span>{`$${price}`}</span>
        </h3>
        <button
          type="submit"
          className={`btn-quote-book ${quoteStep !== 2 ? "btn-hide" : ""}`}
        >
          BOOK NOW | <span>{`$${price}`}</span>
        </button>
        {quoteStep === 3 && (
          <div className="quote-form-message">
            <h4>WE'LL CONTACT YOU SOON</h4>
            <p>Final Prices Upon Walk through</p>
          </div>
        )}
      </form>
    </div>
  );
}
