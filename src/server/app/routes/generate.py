from fastapi import APIRouter

from app.schemas.query import QueryInput, QueryResponse
from app.controllers.agents import get_llm_chain

router = APIRouter(prefix="/generate", tags=["generate"])


@router.post("/chat", response_model=QueryResponse)
def chat(query_input: QueryInput):
    chain = get_llm_chain()

    answer = chain.invoke(
        {
            "topic": query_input.input,
        }
    )

    return QueryResponse(answer=answer.content, model=query_input.model)
