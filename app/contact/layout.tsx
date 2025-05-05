import Script from 'next/script'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>{children}</section>
      <Script src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ruf2pjukxr"
              strategy="beforeInteractive"
        />
    </>
  )
}