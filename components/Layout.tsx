import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import path from "path";
import { ReactNode } from "react";

interface IProps {
	children?: ReactNode
  isTwitterCrowler?: boolean
  contentUrl?: string,
  ogpImageUrl?: string,
  isQuestionPages?: boolean
}

const Layout: NextPage<IProps> = ({ children, contentUrl, ogpImageUrl, isQuestionPages }) => {
	return (
		<>
			<Head>
				<title>dynamic OGP test site</title>
			</Head>
			{children}
		</>
	);
}

export default Layout;