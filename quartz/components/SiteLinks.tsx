import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SiteLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <ul class={classNames(displayClass, "site-links")}>
      <li>
        <a href="https://www.linkedin.com/in/avyuk-dixit-a362a4156/" target="_blank" rel="noopener">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="/resume.pdf" target="_blank" rel="noopener">
          Resume
        </a>
      </li>
    </ul>
  )
}

SiteLinks.css = `
.site-links {
  list-style: none;
  padding: 0;
  margin: 0.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.85rem;
}
.site-links li { margin: 0; }
.site-links a { color: var(--gray); }
.site-links a:hover { color: var(--secondary); }

/* On the landing page, the left sidebar becomes a horizontal top strip,
   so render site-links inline as a row with separators. */
body:has(article.graph-landing) .site-links {
  flex-direction: row;
  gap: 0.75rem;
  margin: 0;
  align-items: center;
}
body:has(article.graph-landing) .site-links li:not(:last-child)::after {
  content: "·";
  color: var(--lightgray);
  margin-left: 0.75rem;
}
`

export default ((opts?: Record<string, unknown>) => SiteLinks) satisfies QuartzComponentConstructor
