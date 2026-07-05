export default function Dashboard({ vehicles }) {
  return (
    <section className="grid grid-cols-3 gap-3 mt-5">

      <div className="bg-white rounded-2xl shadow p-4 text-center">
        <p className="text-gray-500 text-sm">Araç</p>
        <h2 className="text-3xl font-bold">{vehicles.length}</h2>
      </div>

      <div className="bg-white rounded-2xl shadow p-4 text-center">
        <p className="text-gray-500 text-sm">Yaklaşan</p>
        <h2 className="text-3xl font-bold text-yellow-500">0</h2>
      </div>

      <div className="bg-white rounded-2xl shadow p-4 text-center">
        <p className="text-gray-500 text-sm">Geçen</p>
        <h2 className="text-3xl font-bold text-red-500">0</h2>
      </div>

    </section>
  );
}