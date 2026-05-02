const PHONE = "34600000000";

function waUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export function buildQuickBookingMessage(plan: string, date: string, people: string): string {
  return `Hola! Quiero reservar:\n\nPlan: ${plan}\nFecha: ${date}\nPersonas: ${people}`;
}

export function buildJetSkiMessage(date: string, people: string, duration: string): string {
  return `Hola! Quiero reservar jet ski:\n\nFecha: ${date}\nPersonas: ${people}\nDuración: ${duration}`;
}

export function buildTripPlannerMessage(
  arrival: string,
  departure: string,
  people: string,
  interests: string,
  budget: string,
): string {
  return `Hola! Quiero planificar mi viaje:\n\nLlegada: ${arrival}\nSalida: ${departure}\nPersonas: ${people}\nIntereses: ${interests}\nPresupuesto: ${budget}`;
}

export function buildRestaurantMessage(restaurant: string, date: string, people: string, time: string): string {
  return `Hola! Quiero reservar restaurante:\n\nRestaurante: ${restaurant}\nFecha: ${date}\nPersonas: ${people}\nHora: ${time}`;
}

export function buildNightlifeMessage(event: string, date: string, people: string): string {
  return `Hola! Quiero reservar:\n\nEvento: ${event}\nFecha: ${date}\nPersonas: ${people}`;
}

export function buildGenericMessage(name: string): string {
  return `Hola, quiero info sobre ${name}`;
}

export function getWhatsAppUrl(message: string): string {
  return waUrl(message);
}

export { PHONE };
