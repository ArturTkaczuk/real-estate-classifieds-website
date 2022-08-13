import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const OfferDetails = (): JSX.Element => {
  const [backendOfferFetchStatus, setBackendOfferFetchStatus] = useState<'fetching' | 'fetched'>(
    'fetching',
  )

  const { id } = useParams()

  useEffect(() => {
    const fetchOfferOnAppLoad = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setBackendOfferFetchStatus('fetched')
    }

    fetchOfferOnAppLoad()
  }, [])

  return (
    <Container>
      {backendOfferFetchStatus === 'fetched' ? <p>Fetched</p> : <p>Fetching</p>}
    </Container>
  )
}
