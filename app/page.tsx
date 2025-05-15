"use client"

import { useState } from "react"
import { MediaCollection } from "@/components/media-collection"
import { VideoPlayer } from "@/components/video-player"
import { mediaData } from "@/lib/data"

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  // Function to handle playing a selected video
  const playVideo = (video) => {
    setSelectedVideo(video)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Entertainment Hub</h1>

      {selectedVideo ? (
        <div className="mb-8">
          <VideoPlayer video={selectedVideo} />
          <button
            onClick={() => setSelectedVideo(null)}
            className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors"
          >
            Back to Collection
          </button>
        </div>
      ) : (
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            Browse our collection of trending videos and click on any to watch.
          </p>
        </div>
      )}

      {/* Display the media collection */}
      <MediaCollection videos={mediaData} onPlayVideo={playVideo} />
    </main>
  )
}
