import { daysRemaining } from "../utils/dateUtils";

function getBadgeColor(days) {
  if (days === null) return "bg-gray-200 text-gray-700";

  if (days < 0) return "bg-red-100 text-red-700";
  if (days <= 15) return "bg-red-100 text-red-700";
  if (days <= 30) return "bg-yellow-100 text-yellow-700";

  return "bg-green-100 text-green-700";
}

function StatusRow({ title, date }) {
  const days = daysRemaining(date);

  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-gray-600">{title}</span>

      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getBadgeColor(days)}`}>
        {days === null
          ? "-"
          : days < 0
          ? `${Math.abs(days)} gün geçti`
          : `${days} gün`}
      </span>
    </div>
  );
}

export default function VehicleCard({ vehicle, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-xl font-bold">
            {vehicle.brand} {vehicle.model}
          </h2>

          <p className="text-gray-500">
            {vehicle.plate}
          </p>
        </div>

        <button
          onClick={() => onDelete(vehicle.id)}
          className="text-red-600 font-semibold"
        >
          Sil
        </button>

      </div>

      <div className="mt-4">

        <StatusRow
          title="Muayene"
          date={vehicle.inspection}
        />

        <StatusRow
          title="Sigorta"
          date={vehicle.insurance}
        />

        <StatusRow
          title="Seyrüsefer"
          date={vehicle.registration}
        />

      </div>

    </div>
  );
}