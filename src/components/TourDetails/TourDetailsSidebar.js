import { tourDetailsSidebar } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";

const typeOptions = ["Adventure", "Wildlife", "Sightseeing"].map((it) => ({
  value: it,
  label: it,
}));

const customStyle = {
  valueContainer: (provided) => ({
    ...provided,
    color: "#787780",
    fontSize: 13,
    fontWeight: 500,
  }),
  singleValue: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 5,
    border: "none",
    boxShadow: "none",
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    color: "white",
    padding: "4px 20px",
    backgroundColor: state.isSelected ? "#e8604c" : "#313041",
    transition: "all 0.4s ease",
    cursor: "pointer",
    borderBottom:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "none"
        : "0.5px solid #ffffff33",
    "&:hover": {
      backgroundColor: "#e8604c",
    },
    borderRadius:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "0 0 8px 8px"
        : 0,
    fontSize: 16,
    fontWeight: 500,
  }),
  control: (base) => ({
    ...base,
    borderColor: "transparent",
    boxShadow: "none",
    borderRadius: "8px",
    "&:hover": {
      borderColor: "transparent",
    },
    padding: 14,
  }),
};

const TourDetailsSidebar = () => {
  const [type, setType] = useState("Adventure");
  const [ticket, setTicket] = useState("Adventure");
  const [startDate, setStartDate] = useState(new Date());

  const handleSelectType = ({ value }) => {
    setType(value);
  };

  const handleSelectTicket = ({ value }) => {
    setTicket(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      type,
      ticket,
      place: formData.get("place"),
      when: formData.get("when"),
      date: startDate,
    };
    console.log(data);
  };

  return (
    <div className="tour-details-two__sidebar">
      <div className="tour-details-two__book-tours">
        <h3 className="tour-details-two__sidebar-title">Enquiry Form</h3>
        <form
          onSubmit={handleSubmit}
          className="tour-details-two__sidebar-form"
        >
          <div className="tour-details-two__sidebar-form-input">
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="tour-details-two__sidebar-form-input">
            <input type="text" placeholder="Email" name="email" />
          </div>
          <div className="tour-details-two__sidebar-form-input">
            <input type="text" placeholder="Phone" name="phone" />
          </div>

          <div className="tour-details-two__sidebar-form-input">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select date"
              id="datepicker"
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
          <div className="tour-details-two__sidebar-form-input">
            <textarea
              name="Extra comments"
              placeholder="Enter your comments here"
              rows="4"
              className="textarea-area"
            />
          </div>

          <button
            style={{ zIndex: 0 }}
            type="submit"
            className="thm-btn tour-details-two__sidebar-btn"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TourDetailsSidebar;
