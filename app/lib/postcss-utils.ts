import postcss, { Root, Declaration } from "postcss"

export const sanitizeCss = async (css: string, strict = false) => {
  const processor = postcss((root: Root) => {
    root.walkDecls((decl: Declaration) => {
      const forbidden = ["expression", "behavior", "-moz-binding"]
      
      if (forbidden.some((f) => decl.value.toLowerCase().includes(f))) {
        decl.remove()
        return
      }

      if (strict) {
        const isBackgroundProp = decl.prop === 'background' || decl.prop === 'background-image'
        if (decl.value.toLowerCase().includes("url(") && !isBackgroundProp) {
          decl.remove()
        }
      }
    })
  })
  try {
    const result = await processor.process(css, { from: undefined })
    return result.css
  } catch {
    return css
  }
}