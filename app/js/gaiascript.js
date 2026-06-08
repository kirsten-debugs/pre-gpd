document.addEventListener("click", (evt) => {
  const target = evt.target.closest("button.spoiler-control");
  if (!target) return;

  const wrapper = target.closest(".spoiler-wrapper");
  if (wrapper) {
    // Toggle between revealed and hidden
    const isHidden = wrapper.classList.contains("spoiler-hidden");
    wrapper.classList.toggle("spoiler-hidden", !isHidden);
    wrapper.classList.toggle("spoiler-revealed", isHidden);
    
    evt.preventDefault();
  }
});