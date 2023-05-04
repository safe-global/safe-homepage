import {
  Typography,
  SvgIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

import ChevronDownIcon from '@/public/images/chevron-down.svg'

import css from './styles.module.css'

export const SidebarAccordion = ({
  title,
  items,
  selectedItems,
  onChange,
}: {
  title: string
  items: string[]
  selectedItems: string[]
  onChange: (item: string, checked: boolean) => void
}) => {
  return (
    <Accordion defaultExpanded className={css.accordion}>
      <AccordionSummary
        expandIcon={<SvgIcon component={ChevronDownIcon} fontSize="small" color="inherit" inheritViewBox />}
      >
        <Typography variant="caption" color="text.primary">
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <List className={css.list}>
          {items.map((item) => {
            return (
              <ListItem
                key={item}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={(_, checked) => onChange(item, checked)}
                    checked={selectedItems.includes(item)}
                  />
                }
                disablePadding
              >
                <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
              </ListItem>
            )
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  )
}
