import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const darkModernTheme = createTheme({
  type: 'dark',
  className: 'dark-modern',
  theme: {
    colors: {
      primary: '#7928CA',
      primaryLight: '#582A87',
      text: "#ffff",
      success: '#FF1CF7'
    }
  }
});

const lightModernTheme = createTheme({
  type: 'light',
  className: 'light-modern',
  theme: {
    colors: {
      primary: '#7928CA',
      primaryLight: '#d9c2f0',
      text: "#ffff",
      success: '#FF1CF7'
    }
  }
});


export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextThemesProvider
			defaultTheme="dark"
			attribute="class"
			value={{
				light: lightModernTheme.className,
				dark: darkModernTheme.className,
			}}
		>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	);
}
