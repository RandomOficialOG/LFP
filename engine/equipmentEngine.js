console.log("equipmentEngine cargado - Todas las categorías");

function getEquipment(country, category) {
  console.log("🔍 getEquipment llamado:", country?.name, "categoría:", category);
  
  if (!country || !country.code) {
    console.log("❌ País o código no válido");
    return null;
  }
  
  const code = country.code.toUpperCase();
  console.log("🔍 Código:", code);
  
  let result = null;
  
  switch (category) {
    // Terrestre
    case "tanks":
      result = window.tanks_data?.[code];
      break;
    case "infantry":
      result = window.infantry_data?.[code];
      break;
    case "armored":
      result = window.armored_data?.[code];
      break;
    case "artillery":
      result = window.artillery_data?.[code];
      break;
      
      // Aéreo
    case "aircraft":
      result = window.aircraft_data?.[code];
      break;
    case "fighters":
      result = window.fighters_data?.[code];
      break;
    case "helicopters":
      result = window.helicopters_data?.[code];
      break;
    case "support": // Para helicópteros de apoyo
      result = window.helicopters_data?.[code];
      break;
      
      // Naval
    case "navy":
      result = window.navy_data?.[code];
      break;
    case "frigates":
      result = window.navy_data?.[code];
      break;
    case "submarines":
      result = window.submarines_data?.[code];
      break;
    case "corvettes":
      result = window.navy_data?.[code];
      break;
    case "patrol":
      result = window.patrol_data?.[code];
      break;
      
    default:
      console.warn("⚠️ Categoría no reconocida:", category);
      result = null;
  }
  
  console.log("📦 Resultado:", result ? "Encontrado" : "No encontrado");
  return result;
}
