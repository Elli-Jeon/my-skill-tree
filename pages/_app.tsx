import type { AppProps } from "next/app";
import GlobalStyle from "styles/globalStyles";
import theme from "styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />;
			</ThemeProvider>
		</>
	);
}

export default MyApp;
