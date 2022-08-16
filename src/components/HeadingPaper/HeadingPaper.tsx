import { styled } from '@mui/material/styles'
import { Container, Paper, Typography, experimental_sx as sx, Box } from '@mui/material'

const PaperWrapper = styled(Paper)(
  sx({
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '25px',
    margin: '24px 0 100px 0',
    width: { md: '300px' },
  }),
)

export const HeadingPaper = (): JSX.Element => {
  return (
    <Box>
      <PaperWrapper elevation={4}>
        <Typography component='h1' variant='h3'>
          The best real estate classifieds platform in Poland
        </Typography>
      </PaperWrapper>
    </Box>
  )
}
