import TextBlockImageCampaign, {
  type TextBlockImageCampaignProps,
} from '@/components/GasStation/TextBlockImageCampaign'
import PartnersElement from '@/components/GasStation/TextBlockImagePartners/PartnersElement'

const TextBlockImagePartners = (props: TextBlockImageCampaignProps) => (
  <TextBlockImageCampaign {...props}>
    <PartnersElement image={props.image} />
  </TextBlockImageCampaign>
)

export default TextBlockImagePartners
