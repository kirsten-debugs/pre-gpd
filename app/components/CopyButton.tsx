import { useState, useCallback } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CopyButtonProps {
  text: string
}

export const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  return (
    <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
      {copied ? (
        <>
          <Check className="size-3 text-emerald-500" />
          <span className="text-xs text-emerald-500 font-medium">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="size-3" />
          <span className="text-xs">Copy</span>
        </>
      )}
    </Button>
  )
}