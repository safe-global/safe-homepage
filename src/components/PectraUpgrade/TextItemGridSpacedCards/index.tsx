import { Container, Divider, Grid, Typography } from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import Card from '@/components/PectraUpgrade/Card'
import css from './styles.module.css'

type TextItemGridSpacedCardsProps = BaseBlock & {
    id: string;
    compactItems: BaseBlock['items'];
    columnWidth?: number;
    last?: boolean;
}

const TextItemGridSpacedCards = ({ id, title, text, elements, compactItems, columnWidth, last }: TextItemGridSpacedCardsProps) => {
    return (
        <Container className={layoutCss.containerMedium} style={{ marginTop: '80px' }} id={id}>
            <div style={{ maxWidth: '1045px', margin: '0' }}>
                <Typography variant="h3" textAlign="left">
                    {title}
                </Typography>
                {text}
            </div>
            <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '20px' }} className={css.newGridContainer} >
                {elements?.map((item, cindex) => (
                    <Grid container className='' mt={{ xs: 3, md: 7 }}>
                        {item.group?.map((subitem, index) => (
                            <Grid key={index} item xs={12} md={columnWidth}>
                                <Card title={subitem.title} text={subitem.text} />
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>

            {last && <Divider sx={{ mt: 10 }} />}
        </Container>
    )
}

export default TextItemGridSpacedCards