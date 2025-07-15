// services/APISheet.js
// Ejemplo de cómo consumir una Google Sheet pública desde el frontend usando fetch


const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID // Debe estar en tu .env
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY // Debe estar en tu .env
const RANGE1 = "'cursos'!A1:BB2" // Ajusta el rango según tus datos
const RANGE2 = "'redes sociales'!A1:C100"


async function getSheetData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchGet?ranges=${RANGE1}&ranges=${RANGE2}&key=${API_KEY}`
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error('Error al obtener los datos de Google Sheets')
  }
  const data = await response.json()
  console.log("respuesta: ", data)
  // data.values es un array de arrays, cada subarray es una fila
  return [
    parseSheetData(data.valueRanges[0].values)
    , parseSheetData(data.valueRanges[1].values)
  ]
}

function parseSheetData(sheetData) {
  // Asumiendo que la primera fila contiene los encabezados 
  const headers = sheetData[0]
  return sheetData.slice(1).map(row => {
    const rowData = {}
    headers.forEach((header, index) => {
      rowData[header] = row[index]
    })
    return rowData
  })
}

export { getSheetData }