import { 
  WidgetType, 
  ViewPlugin, 
  Decoration, 
  EditorView, 
  type DecorationSet 
} from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/state";
import { createRoot, type Root } from "react-dom/client";
import { ColorPickerPopover } from "@/components/ColorPickerPopover";

class ColorWidget extends WidgetType {
  private root: Root | null = null;

  constructor(
    readonly color: string, 
    readonly from: number, 
    readonly to: number, 
    readonly view: EditorView
  ) {
    super();
  }

  toDOM() {
    const span = document.createElement("span");
    span.className = "cm-custom-color-trigger";
    span.setAttribute("contenteditable", "false");
    
    requestAnimationFrame(() => {
      this.root = createRoot(span);
      this.root.render(
        <ColorPickerPopover 
          initialColor={this.color} 
          onCommit={(finalColor: string) => {
            this.view.dispatch({
              changes: { from: this.from, to: this.to, insert: finalColor }
            });
          }} 
        />
      );
    });
    
    return span;
  }

  destroy(dom: HTMLElement) {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  // FIXED: Only compare indices, NOT the color value.
  // This prevents the widget from being destroyed when the color changes.
  eq(other: ColorWidget) { 
    return other.from === this.from && other.to === this.to; 
  }
}

export const customColorPlugin = ViewPlugin.fromClass(class {
  decorations: DecorationSet;
  
  constructor(view: EditorView) { 
    this.decorations = this.buildDeco(view); 
  }
  
  update(update: any) {
    if (update.docChanged || update.viewportChanged) {
      this.decorations = this.buildDeco(update.view);
    }
  }
  
  buildDeco(view: EditorView) {
    const builder = new RangeSetBuilder<Decoration>();
    const hexRegex = /#([a-fA-F0-9]{3,6})/g;
    
    for (let { from, to } of view.visibleRanges) {
      const text = view.state.doc.sliceString(from, to);
      let match;
      while ((match = hexRegex.exec(text))) {
        const start = from + match.index;
        const end = start + match[0].length;
        
        builder.add(start, start, Decoration.widget({
          widget: new ColorWidget(match[0], start, end, view),
          side: -1 
        }));
      }
    }
    return builder.finish();
  }
}, { decorations: v => v.decorations });