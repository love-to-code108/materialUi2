import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4">h4 Heading</Typography>
        <Typography variant="h5" component='h1' >h5 Heading</Typography>
        <Typography variant="h6" gutterBottom>h6 Heading</Typography>

        <Typography variant="subtitle1">Subtitle 1 and 2</Typography>
        <Typography variant="subtitle2">Subtitle 1 and 2</Typography>

        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque facere, obcaecati doloremque rerum blanditiis necessitatibus, autem commodi accusamus totam voluptatem omnis temporibus iste cum vitae, placeat tempora error molestias id itaque aliquid.</Typography>
        <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque facere, obcaecati doloremque rerum blanditiis necessitatibus, autem commodi accusamus totam voluptatem omnis temporibus iste cum vitae, placeat tempora error molestias id itaque aliquid.</Typography>
    </div>
  )
}
