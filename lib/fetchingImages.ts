import type { ImagesResults } from "@/models/image";
import { ImagesSchemaWithPhotos } from "@/models/image";
import env from "./env"

export default async function fetchImages(url: string): 
Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY
      }
    })

    if(!res.ok) throw new Error("Fetch Images error!\n"); 

    const imagesResults: ImagesResults = await res.json()

    // console.log(imagesResults)

    // Parse with data Zod schema
    const parsedData = ImagesSchemaWithPhotos.parse
    (imagesResults)

    if(parsedData.total_results === 0) return undefined
    
    return parsedData
  } catch (e) {
    // Will show in terminal console
    if (e instanceof Error) console.log(e.stack)
  }
}