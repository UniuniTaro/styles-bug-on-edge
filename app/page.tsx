import Link from 'next/link'
import { Box, Button } from './chakra'

export default function Home() {
  return (
    <Box>
      <Button colorScheme="green">My Button</Button>
      <Link href="/client-rendered">Go to client-rendered page</Link>
    </Box>
  )
}
