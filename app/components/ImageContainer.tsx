import type { Photo } from "@/models/image"
import Image from "next/image"
import Link from "next/link"

type Props = {
  photo: Photo
}

export default function ImgContainer({photo}: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio)
  const photoSpans = Math.ceil(galleryHeight / 10) + 1

  return (
    <div key={photo.id} className="w-[250px] justify-self-center" 
      style={{ gridRow: `span ${photoSpans}` }}>
      <Link href={photo.url} target="_blank" className="grid place-content-center">
        <div className="rounded-xl overflow-hidden group">
          <Image
            width={250}
            sizes="250px"
            height={galleryHeight}
            alt={photo.alt}
            src={photo.src.large}
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
          />
        </div>
      </Link>
    </div>
  )
}
