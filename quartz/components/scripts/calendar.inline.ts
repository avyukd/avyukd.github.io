type IndexPayload = { dates: string[] }
const PAD = (n: number) => String(n).padStart(2, "0")
const fmt = (y: number, m: number, d: number) => `${y}-${PAD(m + 1)}-${PAD(d)}`
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

let dateSet: Set<string> = new Set()
let viewYear = 0
let viewMonth = 0

async function loadIndex(): Promise<void> {
  if (dateSet.size > 0) return
  try {
    const res = await fetch("/static/journal-index.json")
    if (!res.ok) return
    const payload: IndexPayload = await res.json()
    dateSet = new Set(payload.dates)
  } catch {
    /* ignore */
  }
}

function renderGrid(root: HTMLElement) {
  const grid = root.querySelector(".calendar-grid") as HTMLElement
  const label = root.querySelector(".calendar-month-label") as HTMLElement
  if (!grid || !label) return

  label.textContent = `${MONTH_NAMES[viewMonth]} ${viewYear}`
  grid.innerHTML = ""

  ;["S", "M", "T", "W", "T", "F", "S"].forEach((d) => {
    const h = document.createElement("span")
    h.className = "calendar-dow"
    h.textContent = d
    grid.appendChild(h)
  })

  const firstDow = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  for (let i = 0; i < firstDow; i++) {
    const blank = document.createElement("span")
    blank.className = "calendar-blank"
    grid.appendChild(blank)
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = fmt(viewYear, viewMonth, d)
    const cell = document.createElement(dateSet.has(dateStr) ? "a" : "span")
    cell.className = "calendar-day"
    cell.textContent = String(d)
    if (dateSet.has(dateStr)) {
      cell.classList.add("has-entry")
      ;(cell as HTMLAnchorElement).href = `/journal/${dateStr}`
    }
    grid.appendChild(cell)
  }
}

function attach(root: HTMLElement) {
  const toggle = root.querySelector(".calendar-toggle") as HTMLButtonElement
  const popup = root.querySelector(".calendar-popup") as HTMLElement
  const prev = root.querySelector(".calendar-prev") as HTMLButtonElement
  const next = root.querySelector(".calendar-next") as HTMLButtonElement
  if (!toggle || !popup || !prev || !next) return

  if ((root as any)._calendarBound) return
  ;(root as any)._calendarBound = true

  toggle.addEventListener("click", async () => {
    await loadIndex()
    if (popup.hasAttribute("hidden")) {
      const now = new Date()
      viewYear = now.getFullYear()
      viewMonth = now.getMonth()
      renderGrid(root)
      popup.removeAttribute("hidden")
    } else {
      popup.setAttribute("hidden", "")
    }
  })
  prev.addEventListener("click", () => {
    viewMonth -= 1
    if (viewMonth < 0) {
      viewMonth = 11
      viewYear -= 1
    }
    renderGrid(root)
  })
  next.addEventListener("click", () => {
    viewMonth += 1
    if (viewMonth > 11) {
      viewMonth = 0
      viewYear += 1
    }
    renderGrid(root)
  })
}

document.addEventListener("nav", () => {
  document.querySelectorAll<HTMLElement>(".calendar").forEach(attach)
})
