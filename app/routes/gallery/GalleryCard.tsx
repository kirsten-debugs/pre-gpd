import { useState, memo } from "react"
import { Link } from "react-router"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const PresetCard = memo(function PresetCard({ preset }: { preset: any }) {
    const [imageError, setImageError] = useState(false)

    const isRemote = preset.meta.thumbnail?.startsWith("http")
    const imageSrc = isRemote
        ? preset.meta.thumbnail
        : `/presets/${preset.category}/${preset.id}/${preset.meta.thumbnail}`

    return (
        <Card className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-2 transition-all duration-500 ease-out hover:border-primary/50">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary">
                {preset.meta.thumbnail && !imageError ? (
                    <img
                        src={imageSrc}
                        alt={preset.meta.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground/30">
                        <span className="text-xs font-bold uppercase tracking-widest">No Preview</span>
                    </div>
                )}
                <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-md border-border text-foreground">
                        {preset.category}
                    </Badge>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold tracking-tight text-foreground">{preset.meta.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 font-medium">by {preset.meta.author.name}</p>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground/60 uppercase">ID: {preset.id}</span>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest h-8 text-muted-foreground hover:text-foreground">
                            Preview
                        </Button>
                        <Link
                            to={`/studio?id=${preset.id}&category=${preset.category}`}
                            className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline"
                        >
                            Edit →
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    )
})
PresetCard.displayName = "PresetCard"