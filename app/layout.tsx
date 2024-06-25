import ThemeRegistry from "@/theme/ThemeRegistry";
import { Box, Container, Link, Stack } from "@mui/material";
import type { Metadata } from "next";
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: "Discount shop",
  description: "Pet project site on Next.js. Created by Vlashex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeRegistry>
      <html lang="en">
        <body>
          <Box sx={{width: '100%', height: '70px', p: '10px 30px', bgcolor: '#000'}}>
            <Container maxWidth='lg' sx={{height: '100%'}}>
              <Stack direction='row' alignItems='center' sx={{height: '100%'}}>
                <Link component={NextLink} href='/' color={'white'}>
                  Vlashex
                </Link>
              </Stack>
            </Container>
          </Box>
          <Container maxWidth='xl'>
            {children}
          </Container>
        </body>
      </html>
    </ThemeRegistry>
  );
}
