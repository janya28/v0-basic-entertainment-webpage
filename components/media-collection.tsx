"use client"

import Image from "next/image"
import { Play } from "lucide-react"

// Function to display the media collection
export function MediaCollection({ videos, onPlayVideo }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Featured Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => onPlayVideo(video)}
          >
            <div className="relative aspect-video">
              <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <div className="bg-white/90 rounded-full p-3">
                  <Play className="h-8 w-8 text-slate-800 fill-slate-800" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1 line-clamp-1">{video.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{video.creator}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <span>{video.views} views</span>
                <span className="mx-2">•</span>
                <span>{video.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
