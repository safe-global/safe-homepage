import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  List,
  ListItem,
  FormControlLabel,
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
    <Accordion className={css.accordion}>
      <AccordionSummary expandIcon={<ChevronDownIcon />}>
        <Typography variant="caption" color="text.primary">
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <List className={css.list}>
          {items.map((item) => (
            <ListItem key={item} disablePadding>
              <FormControlLabel
                label={item}
                labelPlacement="start"
                value={item}
                control={
                  <Checkbox
                    onChange={(_, checked) => onChange(item, checked)}
                    checked={selectedItems.includes(item)}
                    edge="end"
                  />
                }
                componentsProps={{ typography: { variant: 'body2' } }}
                className={css.label}
              />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  )
}
