import OgpTemplate from "components/OgpTemplate/OgpTemplate";
import list from "../../../public/questions.json"
import { NextPage, NextPageContext } from "next";
import { Question } from "model/question";

interface Props {
  question: Question;
}

const QuestionOgImage: NextPage<Props> = ({ question }) => {
  return (
    <OgpTemplate content={question.content}/>
  );
}

export async function getServerSideProps(context: NextPageContext ) {
	const pageId = context.query['id']
	const question = list.questions.find(it => it.id == pageId)
	return { props: { question } }
}

export default QuestionOgImage;