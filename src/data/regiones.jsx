export const regionesComunas = {
  "Región Metropolitana de Santiago": ["Santiago", "Providencia", "Las Condes", "Maipú", "Puente Alto"],
  "Región de Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "San Antonio"],
  "Región del Biobío": ["Concepción", "Talcahuano", "Chillán", "Los Ángeles"],
  "Región de la Araucanía": ["Temuco", "Villarrica", "Angol"],
  "Región de Ñuble": ["Chillán", "San Carlos"],
  "Región de Coquimbo": ["La Serena", "Coquimbo", "Ovalle"],
};

export function obtenerComunas(region) {
  return regionesComunas[region] ?? [];
}