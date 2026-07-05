const STORAGE_KEY = "aracTakipKKTC";

export function getVehicles() {
  const data = localStorage.getItem(STORAGE_KEY);
  console.log("OKUNAN:", data);
  return data ? JSON.parse(data) : [];
}

export function saveVehicles(vehicles) {
  console.log("KAYDEDİLEN:", vehicles);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
}