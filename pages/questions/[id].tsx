import { NextPage, NextPageContext } from "next";
import list from "../../public/questions.json"
import { useRouter } from "next/router";
import { Question } from "../model/question";

interface IProps {
	question: Question;
}

const DetailPage: NextPage<IProps> = ({ question }) => {

	return (
		<>
			<h1>質問詳細</h1>
			<p>{`ID: ${question.id} ${question.content}`}</p>
		</>
	);
};

export async function getServerSideProps(context: NextPageContext ) {
	const pageId = context.query['id']
	const question = list.questions.find(it => it.id == pageId)
	return { props: { question } }
}

export default DetailPage;