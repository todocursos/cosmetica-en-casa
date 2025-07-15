import { JWT } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID
const CLIENT_EMAIL = import.meta.env.VITE_GOOGLE_USER_EMAIL
const PRIVATE_KEY = import.meta.env.VITE_GOOGLE_SECRET_KEY

export async function getCursos() {
  ServiceAccountAuth = new JWT({
    email: CLIENT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  
  const doc = new GoogleSpreadsheet(SHEET_ID, ServiceAccountAuth)
  

  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  const rows = await sheet.getRows()
  return rows.map(row => ({
    id: row.id,
    titulo: row.titulo,
    descripcion: row.descripcion,
    imagen: row.imagen,
    bonos: row.bonos ? row.bonos.split(',') : []
  }))
}
