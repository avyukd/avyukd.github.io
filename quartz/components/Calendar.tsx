import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/calendar.inline"
import style from "./styles/calendar.scss"
import { classNames } from "../util/lang"

const Calendar: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "calendar")}>
      <button class="calendar-toggle" aria-label="Open calendar">
        📅
      </button>
      <div class="calendar-popup" hidden>
        <div class="calendar-header">
          <button class="calendar-prev" aria-label="Previous month">
            ‹
          </button>
          <span class="calendar-month-label"></span>
          <button class="calendar-next" aria-label="Next month">
            ›
          </button>
        </div>
        <div class="calendar-grid"></div>
      </div>
    </div>
  )
}

Calendar.css = style
Calendar.afterDOMLoaded = script

export default ((opts?: Record<string, unknown>) => Calendar) satisfies QuartzComponentConstructor
