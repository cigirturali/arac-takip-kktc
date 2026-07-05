import { useState } from "react";

const emptyVehicle = {
  plate: "",
  brand: "",
  model: "",
  year: "",
  inspection: "",
  insurance: "",
  registration: "",
};

export default function VehicleForm({ onSave }) {
  const [vehicle, setVehicle] = useState(emptyVehicle);

  function handleChange(e) {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!vehicle.plate.trim()) {
      alert("Plaka zorunludur.");
      return;
    }

    onSave({
      id: Date.now(),
      ...vehicle,
    });

    setVehicle(emptyVehicle);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow p-5 mt-5"
    >
      <h2 className="text-xl font-bold mb-4">🚗 Yeni Araç</h2>

      <div className="grid gap-3">

        <input
          name="plate"
          placeholder="Plaka"
          value={vehicle.plate}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <input
          name="brand"
          placeholder="Marka"
          value={vehicle.brand}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <input
          name="model"
          placeholder="Model"
          value={vehicle.model}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <input
          name="year"
          placeholder="Model Yılı"
          value={vehicle.year}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <label>Muayene</label>
        <input
          type="date"
          name="inspection"
          value={vehicle.inspection}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <label>Sigorta</label>
        <input
          type="date"
          name="insurance"
          value={vehicle.insurance}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <label>Seyrüsefer</label>
        <input
          type="date"
          name="registration"
          value={vehicle.registration}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <button
          className="bg-blue-600 text-white rounded-xl p-3 font-bold"
        >
          Kaydet
        </button>

      </div>
    </form>
  );
}