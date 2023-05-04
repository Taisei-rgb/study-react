
import Head from 'next/head'

export function Header(props: any) {
	console.log(props);
  return(
    <Head>
      {props.children}
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}
