install:
	@poetry install
	@poetry run pre-commit install

start:
	@poetry run uvicorn app.server:app --reload

start-port:
	@poetry run alembic upgrade head 
	@poetry run uvicorn app.server:app --host 0.0.0.0 --port ${PORT}
