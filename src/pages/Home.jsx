import { useEffect, useState } from "react";

import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";

import { getVehicles, saveVehicles } from "../services/storageService";

export default function Home() {
  const [vehicles, setVehicles] = useState(() => getVehicles());

  // Araçlar değişince otomatik kaydet
  useEffect(() => {
    saveVehicles(vehicles);
  }, [vehicles]);

 function addVehicle(vehicle) {
  console.log("EKLENEN ARAÇ:", vehicle);

  setVehicles((prev) => {
    const updated = [...prev, vehicle];
    console.log("YENİ LİSTE:", updated);
    return updated;
  });
}

  function deleteVehicle(id) {
    if (!confirm("Bu aracı silmek istiyor musunuz?")) return;

    setVehicles((prev) => prev.filter((v) => v.id !== id));
  }

  return (
    <main className="max-w-xl mx-auto p-4 pb-20">
      <Header />

      <Dashboard vehicles={vehicles} />

      <VehicleForm onSave={addVehicle} />

      <VehicleList
        vehicles={vehicles}
        onDelete={deleteVehicle}
      />
    </main>
  );
}