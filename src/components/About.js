import React from "react";
import "./About.css";
import team from "../assets/team.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-text">
        <h2>About Us</h2>
        <p className="description">
          Welcome to IBOZA Pharmacy, your trusted online destination for
          affordable ,high-quality healthcare products.Founded in 2024, we are
          committed to providing easy access to prescription medications,
          over-the-counter-drugs, and health supplements-all from the comfort of
          your home. At RIBOZA Pharmacy, our mission is to empower individuals
          with reliable healthcare solutions while prioritizing safety,
          convenience, and customer satisfaction
        </p>
        <h2>Licensed & Accredited</h2>
        <p>
          IBOZA Pharmacy is a fully licensed and accredited online pharmacy. We
          comply with all federal and state regulations to ensure the safety and
          legitimacy of our products. our pharmacy is certified by Rwanda FDA
          and follows stringent quality control standards to meet the
          expectation of our customers
        </p>
        <h2>Products & services</h2>
        <ul>
          <li>Prescription medications</li>
          <li>over-the-counter treatments</li>
          <li>vitamins and health supplement</li>
          <li>Medical devices and equipment</li>
        </ul>
        <h2>Expert Pharmacist Team</h2>
        <p>
          Our team of licensed and experienced pharmacists is always available
          to answer your questions and provide expert adviceon medication use,
          side effects, and drug interactions. with a lot experience, our
          pharmacists are committed to offering personalised care and attention
          to each customer
        </p>
      </div>
    </section>
  );
};

export default About;
