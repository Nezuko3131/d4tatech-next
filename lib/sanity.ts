const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '330d9rwq'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const API_URL = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}`

export async function getProyectos() {
  const query = encodeURIComponent('*[_type == "proyecto"] | order(_createdAt desc)')
  const response = await fetch(`${API_URL}?query=${query}`)
  const data = await response.json()
  return data.result || []
}

export async function getSoluciones() {
  const query = encodeURIComponent('*[_type == "solucion"] | order(_createdAt asc)')
  const response = await fetch(`${API_URL}?query=${query}`)
  const data = await response.json()
  return data.result || []
}

export async function getSobreMi() {
  const query = encodeURIComponent('*[_type == "sobreMi"][0]')
  const response = await fetch(`${API_URL}?query=${query}`)
  const data = await response.json()
  return data.result || null
}

export function getImageUrl(image: any) {
  if (!image?.asset) return '/placeholder.jpg'
  const ref = image.asset._ref || image.asset._id
  if (!ref) return '/placeholder.jpg'
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${ref.replace('image-', '').replace(/-(\w+)$/, '.$1')}`
}
