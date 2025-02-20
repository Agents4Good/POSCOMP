from pydantic import BaseModel, Field
from enum import Enum


class ModelName(str, Enum):
    GPT4_O = "gpt-4o"
    GPT4_O_MINI = "gpt-4o-mini"


class QueryInput(BaseModel):
    input: str
    model: ModelName = Field(default=ModelName.GPT4_O_MINI)


class QueryResponse(BaseModel):
    answer: str
    model: ModelName
