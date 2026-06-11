import { useStudio } from "~/routes/studio/StudioContext"

export function RootVariablePanel() {
  const { rootCss, setRootCss } = useStudio()

  return (
    <div className="fixed left-0 top-0 h-full w-64 border-r bg-background p-4 z-50">
      <h2 className="mb-4 font-semibold text-sm tracking-wide text-foreground">ROOT VARIABLES</h2>
      <textarea
        className="h-full w-full rounded border border-input bg-background p-3 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-ring"
        value={rootCss}
        onChange={(e) => setRootCss(e.target.value)}
        spellCheck={false}
      />
    </div>
  )
}