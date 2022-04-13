import type { AppProps } from "next/app";
import GlobalStyle from "styles/globalStyles";
import theme from "styles/theme";
import { ThemeProvider } from "styled-components";
import BasicLayout from "layout";
import "css/antd.less";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<BasicLayout>
					<Component {...pageProps} />
				</BasicLayout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
