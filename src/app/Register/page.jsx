"use client";

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "../abstract/page.css";
import "./page.css";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import Image from "next/image";

const stripePromise = loadStripe("pk_live_51NI3kpSJK88knjYmtyhvaIWqcao2Of3JwX49UqnIaL4VkNEbmfKzvCcaXcpGdZ5Cn522RpxFmUzQXG6ZlCdQ9qbD00tI3YPqJf"); // Replace with your Stripe publishable key

export default function PlansPage() {
  const [plans, setPlans] = useState([]);
  const [activePlanId, setActivePlanId] = useState(null);
  const [selectedParticipants, setSelectedParticipants] = useState({});
  const [accommodations, setAccommodations] = useState([]);
  const [selectedAccommodations, setSelectedAccommodations] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [formData, setFormData] = useState({
    title: "Dr.",
    name: "",
    email: "",
    organization: "",
    phone: "",
    city: "",
    country: "",
    interestedIn: "Poster Presentation",
    address: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fetch plans and accommodations
  useEffect(() => {
    const today = new Date();

    axios.get("https://admin.emdcconference.com/api/getPlans").then((response) => {
      const updatedPlans = response.data.map((plan) => ({
        ...plan,
        isActive:
          new Date(plan.startDate) <= today && new Date(plan.endDate) >= today,
      }));
      setPlans(updatedPlans);

      const activePlan = updatedPlans.find((plan) => plan.isActive);
      if (activePlan) setActivePlanId(activePlan._id);
    });

    axios.get("https://admin.emdcconference.com/api/getAccommodations").then((response) => setAccommodations(response.data));
  }, []);

  // Handle participant selection
  const handleParticipantSelection = (planId, participantId, price) => {
    setSelectedParticipants({
      [planId]: { participantId, price },
    });
  };

  // Handle accommodation selection
  const toggleAccommodationSelection = (accommodationId, name, price) => {
    setSelectedAccommodations((prev) => {
      const isSelected = prev.find((acc) => acc.id === accommodationId);

      if (isSelected) {
        return prev.filter((acc) => acc.id !== accommodationId); // Deselect
      } else {
        return [...prev, { id: accommodationId, name, price }]; // Select
      }
    });
  };

  // Calculate total price
  useEffect(() => {
    const planPrice = selectedParticipants[activePlanId]?.price || 0;
    const accommodationPrice = selectedAccommodations.reduce(
      (sum, acc) => sum + acc.price,
      0
    );
    const total = planPrice + accommodationPrice;
    const totalWithProcessingFee = total + total * 0.02; // Add 2% processing fee
    setTotalPrice(totalWithProcessingFee.toFixed(2));
  }, [selectedParticipants, selectedAccommodations, activePlanId]);

  // Validate form inputs and selected plan
  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.country ||
      !formData.address ||
      !selectedParticipants[activePlanId]
    ) {
      alert("Please fill out all required fields and select a plan.");
      return false;
    }
    return true;
  };

  // Submit form data and initiate payment
  const handleStripePayment = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    const stripe = await stripePromise;

    try {
      // Prepare selected plan details
      const selectedPlanDetails = {
        planId: activePlanId,
        planName: plans.find((plan) => plan._id === activePlanId)?.name || "",
        participantType: selectedParticipants[activePlanId]?.participantId || "",
        price: selectedParticipants[activePlanId]?.price || 0,
      };

      // Send data to the backend
      const response = await axios.post("https://admin.emdcconference.com/api/register-and-pay", {
        formData,
        selectedPlan: selectedPlanDetails,
        selectedAccommodations,
        lineItems: [
          {
            name: "Conference Plan and Accommodations",
            price: totalPrice, // Do not multiply by 100 here
            currency: "eur",
            quantity: 1,
          },
        ],
      });

      // Redirect to Stripe checkout
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error initiating payment:", error.message);
      alert("Failed to start payment. Please try again.");
    }
  };


  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Plans and Accommodations"
        shortText="Choose Your Plan"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Plans"
        bgImg="/images/main-bg4.jpg"
      />
      <div className="plans-container">
        <form className="form-section">
          <h1 style={{ marginBottom: "50px" }}>Registration Form</h1>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <select id="title" name="title" value={formData.title} onChange={handleInputChange}>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Prof.">Prof.</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization/Institution</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Organization/Institution"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter your city name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select id="country" name="country" required value={formData.country} onChange={handleInputChange}>
              <option value="">Select country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="interestedIn">Interested In</label>
            <select id="interestedIn" name="interestedIn" required value={formData.interestedIn} onChange={handleInputChange}>
              <option value="Poster Presentation">Poster Presentation</option>
              <option value="Oral Presentation">Oral Presentation</option>
              <option value="Workshop">Workshop</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address">Billing Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your Billing Address"
              required
            />
          </div>



          {/* Plan Selection Table */}
          <div className="plansSubCon">

            <h1 className="plan-head">Plans</h1>
            {plans.length > 0 ? (
              <table className="plans-table">
                <thead>
                  <tr>
                    <th>Type of Participation</th>
                    {plans.map((plan) => (
                      <th key={plan._id} className={plan.isActive ? "active-plan" : "inactive-plan"}>
                        <div>{plan.name}</div>
                        <div>Before {new Date(plan.endDate).toLocaleDateString()}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plans[0].prices.map((participant, index) => (
                    <tr key={index}>
                      <td>{participant.participationType.name}</td>
                      {plans.map((plan) => {
                        const priceObj = plan.prices.find(
                          (p) => p.participationType._id === participant.participationType._id
                        );
                        return (
                          <td key={plan._id}>
                            {priceObj ? (
                              <label>
                                <input
                                  type="radio"
                                  name={`participant-${participant.participationType._id}`}
                                  value={priceObj._id}
                                  disabled={!plan.isActive}
                                  checked={selectedParticipants[plan._id]?.participantId === priceObj._id}
                                  onChange={() =>
                                    handleParticipantSelection(plan._id, priceObj._id, priceObj.price)
                                  }
                                />
                                €{priceObj.price}
                              </label>
                            ) : (
                              "-"
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No plans available.</p>
            )}

            <h1 className="plan-head">Accommodations</h1>
            {accommodations.length > 0 ? (
              <table className="accommodations-table">
                <thead>
                  <tr>
                    <th>Accommodation</th>
                    <th>Price (€)</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {accommodations.map((acc) => (
                    <tr key={acc._id}>
                      <td>{acc.name}</td>
                      <td>{acc.price}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedAccommodations.some((selected) => selected.id === acc._id)}
                          onChange={() => toggleAccommodationSelection(acc._id, acc.name, acc.price)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No accommodations available.</p>
            )}

            {/* Display Total Price */}
            <div className="total-price-container">
              <Image
               src={'/images/own/stripe.png'}
               alt={"stripe"}
               width={200}
               height={250}
               className="img-fluid"
              />
              {/* <h2>Total Price: €{totalPrice}</h2> */}
              <p>Note : (Includes 2% processing fee)</p>
            </div>
          </div>

          {/* <div className="form-group"> */}
          <button onClick={(e) => handleStripePayment(e)} className="submit-button">
            pay
          </button>
          {/* </div> */}

        <div className="total-price-container">
        <p>
            By clicking "pay", you agree to the<span> </span>  
            <Link href="/policy/privacy/"> Privacy Policy</Link>,<span> </span> 
            <Link href="/policy/termsConditions/">Terms & conditions</Link>, and <span> </span> 
            <Link href="/policy/cancellation/">Cancellation Policy</Link>.
        </p>
    </div>
        </form>




      </div>
      <Footer />
    </>
  );
}
