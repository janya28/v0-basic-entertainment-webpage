// Function to play selected video items
export function VideoPlayer({ video }) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
        <video src={video.videoUrl} poster={video.thumbnail} controls className="w-full h-full" autoPlay>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{video.title}</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">{video.creator}</p>
            <p className="text-sm text-muted-foreground">{video.views} views</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-muted rounded text-xs">{video.category}</span>
            <span className="text-sm">{video.duration}</span>
          </div>
        </div>
        <p className="text-muted-foreground pt-2 border-t mt-4">{video.description}</p>
      </div>
    </div>
  )
}
