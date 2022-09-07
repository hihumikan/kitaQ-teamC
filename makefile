include docker/.env.sample

name_database := $(NAME_DATABASE)
name_api := $(NAME_API)

file_database := $(if $(FILE_DATABASE),$(FILE_DATABASE),"./docker/docker-compose-db.yml")
file_api := $(if $(FILE_API),$(FILE_API),"./docker/docker-compose-api.yml")


db-up: ## Start database
	docker-compose -f $(file_database) -p $(name_database) up -d

api-up: ## Start the API
	docker-compose -f $(file_api) -p $(name_api) up -d

api-stop: ## Stop the API
	docker-compose -f $(file_api) -p $(name_api) stop

db-stop: ## Stop the database
	docker-compose -f $(file_database) -p $(name_database) stop

api-down: ## Stop and remove containers, networks, images, and volumes
	docker-compose -f $(file_api) -p $(name_api) down

db-down: ## Stop and remove containers, networks, images, and volumes
	docker-compose -f $(file_database) -p $(name_database) down

up: ## Start the API and database
	docker-compose -f $(file_database) -p $(name_database) up -d
	docker-compose -f $(file_api) -p $(name_api) up -d

build: ## サービスの構築
	docker-compose -f $(file_database) -p $(name_database) build
	docker-compose -f $(file_api) -p $(name_api) build

stop: ## サービスを停止
	docker-compose -f $(file_database) -p $(name_database) stop
	docker-compose -f $(file_api) -p $(name_api) stop

kill: ## サービスを強制停止
	docker-compose -f $(file_database) -p $(name_database) kill
	docker-compose -f $(file_api) -p $(name_api) kill

down: ## サービスの停止とコンテナの削除
	docker-compose -f $(file_database) -p $(name_database) down
	docker-compose -f $(file_api) -p $(name_api) down

restart: ## サービスの再起動
	docker-compose -f $(file_database) -p $(name_database) restart
	docker-compose -f $(file_api) -p $(name_api) restart
