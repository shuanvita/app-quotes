import type { RouteLocationRaw } from 'vue-router'

export interface BaseLinkProps {
  target?: '_blank' | '_self' | '_parent' | '_top'
  href?: string
  to?: RouteLocationRaw
  icon?: string
  preIcon?: string
  postIcon?: string
  iconSize?: string
}
