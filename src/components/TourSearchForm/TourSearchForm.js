import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css"; // Ensure DatePicker styling
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Example type options (define as needed)
const travelers = [
  { value: "No. of travelers", label: "No. of travelers" },
  { value: "1 traveler", label: "1 traveler" },
  { value: "2 traveler", label: "2 traveler" },
  { value: "3 traveler", label: "3 traveler" },
  { value: "4 traveler", label: "4 traveler" },
  { value: "5 traveler", label: "5 traveler" },
  { value: "6 traveler", label: "6 traveler" },
  { value: "6+ traveler", label: "6+ traveler" },
];
const destinations = [
  { value: "Where do you want to go?", label: "Where do you want to go?" },
  { value: "North India", label: "North India" },
  { value: "South India", label: "South India" },
  { value: "Central & West India", label: "Central & West India" },
  { value: "East India", label: "East India" },
  { value: "Himalayas", label: "Himalayas" },
  { value: "Islands & Beaches", label: "Islands & Beaches" },
];
const interest = [
  { value: "Your Interests?", label: "Your Interests?" },
  { value: "Adventure & Outdoors", label: "Adventure & Outdoors" },
  { value: "Heritage & Culture", label: "Heritage & Culture" },
  { value: "Nature & Landscapes", label: "Nature & Landscapes" },
  { value: "Wildlife & Safaris", label: "Wildlife & Safaris" },
  { value: "Wine & Food", label: "Wine & Food" },
  { value: "Beaches", label: "Beaches" },
];

const TourSearchForm = () => {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("");


  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", { startDate });
    handleClose();
  };

  // Style for the custom Select component
  const customStyle = {
    container: (provided) => ({
      ...provided,
      zIndex: 1000,
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
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
    }),
    option: (provided, state) => ({
      ...provided,
      color: "white",
      padding: "2px 10px",
      backgroundColor: state.isSelected ? "#0668E1" : "#313041",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#0668E1",
      },
      fontSize: 14,
      fontWeight: 500,
    }),
    control: (base) => ({
      ...base,
      borderColor: "transparent",
      boxShadow: "none",
      borderRadius: "5px",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
  };

  const handleSelectChange = ({ value }) => {
    setSelected(value);
  };
  const handleDestinationChange = ({ value }) => {
    setSelectedDestination(value);
  };
  const handleInterestchange = ({ value }) => {
    setSelectedInterest(value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     type: selected,
  //     date: startDate,
  //     place: selectedDestination,
  //   };
  //   console.log(data);
  // };

  return (
    <div>
      <div className="tour-search-one">
        <div className="tour-search-one__inner">
          <div className="tour-search-one__inputs">
            <div className="tour-search-one__input-box">
              <Select
                defaultValue={destinations[0]}
                name="type"
                options={destinations}
                onChange={handleDestinationChange}
                styles={customStyle}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                instanceId="tourTypeDest"
              />
            </div>
            <div className="tour-search-one__input-box">
              <Select
                defaultValue={interest[0]}
                name="type"
                options={interest}
                onChange={handleInterestchange}
                styles={customStyle}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                instanceId="tourTypeInterest"
              />
            </div>
            <div className="tour-search-one__input-box tour-search-one__input-box-last">
              <Select
                defaultValue={travelers[0]}
                name="type"
                options={travelers}
                onChange={handleSelectChange}
                styles={customStyle}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                instanceId="tourTypeSelect"
              />
            </div>
          </div>
          <div className="tour-search-one__btn-wrap">
            <button onClick={handleShow} className="thm-btn tour-search-one__btn">
              Create My Trip Now
            </button>
          </div>
        </div>
      </div>
      <div>
      <Modal show={show} onHide={handleClose} centered className="popup_form13">
        <Modal.Header closeButton>
          <Modal.Title>Almost There!</Modal.Title>
          <p>We need a bit more info to create your itinerary:</p>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formName">
                
                <Form.Control type="text" placeholder="Full name" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPhone">
                
                <Form.Control type="tel" placeholder="Phone Number" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formStartDate">
                <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)} // Update state when a date is selected
                className="form-control" // Style the DatePicker with Bootstrap's form control
                dateFormat="MM/dd/yyyy" // Format the date
                placeholderText="When?"
                required
              />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formComments">
                
                <Form.Control as="textarea" rows="15"  placeholder="Notes" />
              </Form.Group>
            </Row>
            <Button type="submit" variant="primary">
                Submit
              </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    </div>
  );
};

export default TourSearchForm;
