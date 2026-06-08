import toml from "toml"
import { z } from "zod"

const PresetMetaSchema = z.object({
  title: z.string(),
  thumbnail: z.string().optional(),
  author: z.object({
    name: z.string(),
    gaia_id: z.string().optional(),
  }).optional(),
})

export interface Preset {
  id: string
  name: string
  category: string
  cssPath: string
  meta: z.infer<typeof PresetMetaSchema>
}

// Update this specific line in app/lib/presets.ts
const modules = import.meta.glob("/app/presets/**/preset.toml", {
  query: "?raw",
  import: "default",
  eager: true,
})

export const PRESETS: Preset[] = Object.entries(modules)
  .map(([path, content]) => {
    try {
      const parsed = toml.parse(content as string)
      const validation = PresetMetaSchema.safeParse(parsed)

      if (!validation.success) throw new Error(validation.error.message)

      const pathParts = path.split("/")
      const id = pathParts.at(-2) ?? "unknown"
      const category = pathParts.at(-3) ?? "uncategorized"

      return {
        id,
        name: id.split(/[-_ ]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        category,
        meta: validation.data,
        cssPath: `/presets/${category}/${id}/preset.css`
      }
    } catch (e) {
      console.error(`Error processing preset at ${path}:`, e)
      return null
    }
  })
  .filter((p): p is Preset => p !== null)

export const CATEGORIES = ["all", ...Array.from(new Set(PRESETS.map((p) => p.category)))]