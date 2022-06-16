PY = $(shell which python3)
VENV = venv
YARN = yarn
APP_ROOT = backend
WEBAPP_ROOT = frontend
REQUIREMENTS_TXT = requirements.txt

.phony: venv-activate


all:
	@echo "No action to be taken..."


venv-activate:
	@echo "Activating venv..."
	@$(shell source $(VENV)/Scripts/activate)


install-app:
	@echo "Installing..."
	@$(PY) -m pip install --upgrade pip
	@$(PY) -m pip install -r $(REQUIREMENTS_TXT)


start-app:
	@echo "Starting backend app..."
	@flask run


start-web:
	@echo "Starting frontend webapp..."
	@cd $(WEBAPP_ROOT) && $(YARN) run start


install-web:
	@echo "Installing web packages for frontend app..."
	@cd $(WEBAPP_ROOT) && $(YARN) install


build:
	@echo "Building web packages for frontend app..."
	@cd $(WEBAPP_ROOT) && $(YARN) run build	


cleanup:
	@echo "Cleaning project..."
	@rm -rf $(WEBAPP_ROOT)/node_modules
	@cd $(APP_ROOT) && find . -name "*.pyc" -type f -delete
	@cd $(APP_ROOT) && find . -name "__pycache__" -type d -delete
