
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Avis = () => {
  const [poids, setPoids] = useState(0);
  const [taille, setTaille] = useState(0);
  const [imc, setImc] = useState(null);
  const [avis, setAvis] = useState('');
  const [valid, setValid] = useState(true);

  const handleclick =()=> {
 
    if (isNaN(poids) || isNaN(taille) || taille === 0 || poids === 0) {
      setValid(false);
    } else {
      setImc((10000 * poids) / (taille * taille).toFixed(2));
  
      if (imc < 16.5) {
        setAvis('Maigre');
      } else if (imc >= 16.5 && imc < 18.5) {
        setAvis('Corpulence normale');
      } else if (imc >= 18.5 && imc < 25) {
        setAvis('Surpoids');
      } else if (imc >= 25 && imc < 30) {
        setAvis('Obésité modérée');
      } else if (imc >= 30 && imc < 35) {
        setAvis('Obésité sévère');
      } else if (imc >= 35 && imc < 40) {
        setAvis('Obésité morbide');
      } else {
        setAvis('Obésité morbide ou massive');
      }
  
      setValid(true);
    }
  }

  return (
    <div className='m-auto'>
      <form>
        <label>
          Poids (en kg):
          <input type="text" value={poids} onChange={(e) => setPoids(e.target.value)} />
        </label>
        <br />
        <label>
          Taille (en cm):
          <input type="text" value={taille} onChange={(e) => setTaille(e.target.value)} />
        </label>
        <br />
        <button type='button' onClick={handleclick}>
          Calculate
        </button>
      </form>
      {valid && imc && (
        <div>
          <h2>Résultat :</h2>
          <p>IMC : {imc}</p>
          <p>Interprétation : {avis}</p>
        </div>
      )}
      {!valid && <p>Données incorrectes!</p>}
    </div>
  );
};

export default Avis;
