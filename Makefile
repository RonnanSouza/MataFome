
.PHONY: backend
backend:
	cd ./backend && npm start

.PHONY: frontend
frontend:
	cd ./frontend && npm start

.PHONY: setup
setup:
	docker-compose -f ./backend/docker-compose.yaml up -d
	cd ./backend && npm install
	cd ./frontend && npm install