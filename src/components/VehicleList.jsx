import VehicleCard from "./VehicleCard";

export default function VehicleList({ vehicles, onDelete }) {
  if (vehicles.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 mt-5 shadow text-center">
        <h3 className="text-xl font-semibold">
          Henüz araç eklenmedi
        </h3>

        <p className="text-gray-500 mt-2">
          İlk aracınızı ekleyin.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-4">
      {vehicles.map(vehicle => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}