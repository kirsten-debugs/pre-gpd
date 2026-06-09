import { HexColorPicker } from "react-colorful"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"

interface PopoverPickerProps {
  color: string
  onChange: (color: string) => void
}

export const PopoverPicker = ({ color, onChange }: PopoverPickerProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <button
          type="button"
          className="size-5 rounded-full border border-border cursor-pointer transition-all hover:ring-2 hover:ring-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ backgroundColor: color }}
          aria-label="Pick a color"
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-none bg-transparent shadow-none" align="start">
        <div className="custom-layout p-4 rounded-xl backdrop-blur-md bg-[#33333a]/80 border border-white/10 flex flex-col gap-3">
          <HexColorPicker color={color} onChange={onChange} />
          
          <input
            type="text"
            className="w-full px-3 py-1.5 rounded bg-white/10 border border-white/10 text-white text-xs font-mono focus:outline-none focus:ring-1 focus:ring-primary"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            placeholder="#ffffff, rgba(0,0,0,1)"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}