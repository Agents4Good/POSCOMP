from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

generate_question_prompt = (
    "You are a helpful assistant that generates multiple-choice "
    "questions on a given topic. Create a MCQ with its stem, "
    "four distractors and one key. Output this MCQ in Portuguese."
)

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", generate_question_prompt),
        ("human", "{topic}"),
    ]
)


def get_llm_chain(model="gpt-4o-mini"):
    llm = ChatOpenAI(model=model)
    chain = prompt | llm

    return chain
