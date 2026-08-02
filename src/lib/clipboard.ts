/** Copy text to the clipboard, falling back to a hidden textarea. */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const ta = document.createElement("textarea")
      ta.value = text
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      ta.remove()
      return true
    } catch {
      return false
    }
  }
}

/** Run a brief "Copied" acknowledgement on a copy button. */
export function flashCopied(button: HTMLButtonElement, label = "Copied"): void {
  const original = button.textContent ?? ""
  button.textContent = label
  button.classList.add("is-copied")
  window.setTimeout(() => {
    button.textContent = original
    button.classList.remove("is-copied")
  }, 2000)
}
