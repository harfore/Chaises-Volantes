// Import du module React
import React from "react";

// Composant MainChoice
const MainChoice = () => {
  // Rendu du composant MainChoice
  return (
    <div className="grid grid-cols-2 grid-rows-[300px_300px] gap-4 mt-10 ml-60 mr-60">
      {/* Choix de la cuisine */}
      <div
        id="Kitchen"
        className="bg-[url('..\img\img1.jpg')] bg-cover rounded-full shadow-2xl"
      >
        <h1 class="bg-transparent text-center font-AMERSN__">Cuisine</h1>
      </div>
      {/* Choix de la chambre */}
      <div
        id="Bedroom"
        className="bg-[url('..\img\img2.jpg')] bg-cover bg-center rounded-full  shadow-2xl"
      >
        <h1 class="bg-transparent text-center font-AMERSN__">Bedroom</h1>
      </div>
      {/* Choix du salon */}
      <div
        id="Livingroom"
        className="bg-[url('..\img\img3.jpg')] bg-cover rounded-full  shadow-2xl"
      >
        <h1 class="bg-transparent text-center font-AMERSN__">Salon</h1>
      </div>
      {/* Choix de la salle de bain */}
      <div
        id="Bathroom"
        className="bg-[url('..\img\img4.jpg')] bg-cover rounded-full  shadow-2xl"
      >
        <h1 class="bg-transparent text-center font-AMERSN__">Salle de bain</h1>
      </div>
    </div>
  );
};

// Export du composant MainChoice
export default MainChoice;
