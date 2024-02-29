import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [probleme, setProbleme] = useState("");
  const [autreDocteur, setAutreDocteur] = useState(false);
  const [reference, setReference] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      prenom,
      nom,
      age,
      probleme,
      autreDocteur,
      reference,
    });
  };

  return (
    <div className="w-50 border border-2 border-primary m-auto my-2">
      <h3 className="bg-primary text-white text-center">Patient Admission</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Full Name<span className="text-danger">*</span></label>
              <table>

          <tr>
            <td>
              
            <form.control
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="w-100"
              required
              />
            
              </td>
              <td>

            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-100"
              required
              />
            
              </td>
          </tr>
          <tr>
            <td><label htmlFor="prenom">First</label></td>
            <td><label htmlFor="nom">Last</label></td>
          </tr>
          </table>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age<span className="text-danger">*</span></label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-100 mb-2"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="probleme">What's bothering you? <span className="text-danger">*</span></label>
          <input
            type="text"
            id="probleme"
            value={probleme}
            onChange={(e) => setProbleme(e.target.value)}
            className="w-100 mb-2"
            required
          />
        </div>
        <div className="form-group">
          <label>Have you consulted any other doctor?<span className="text-danger">*</span></label>
          <div className="form-check">
            <input
              type="radio"
              id="oui"
              name="autreDocteur"
              value="oui"
              checked={autreDocteur}
              onChange={() => setAutreDocteur(true)}
              className="form-check-input"
              required
            />
            <label className="form-check-label" htmlFor="oui">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="non"
              name="autreDocteur"
              value="non"
              checked={!autreDocteur}
              onChange={() => setAutreDocteur(false)}
              className="form-check-input"
              required
            />
            <label className="form-check-label" htmlFor="non">
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="reference">Who referred you to me?<span className="text-danger">*</span></label>
          <input
            type="text"
            id="reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="w-100 mb-2"
          />
        </div>
        
      </form>
    </div>
  );
};

export default ContactForm;

