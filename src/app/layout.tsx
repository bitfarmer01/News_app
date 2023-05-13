import Link from "next/link"
import "./globals.css"
import Header from "./Header"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="zh-CN">
			<head>
				<title>My News APP</title>
				<meta name="description" content="111" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width, user-scalable=0"
				/>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<Header />

				{children}
			</body>
		</html>
	)
}
