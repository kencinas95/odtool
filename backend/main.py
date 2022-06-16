from flask import Flask

from src.utils import logger
from src.utils import settings

logger.init()

app = Flask('backend')

if getattr(settings, 'ENABLE_STATIC', False):
    from src.controllers import static
    
    app.register_blueprint(static.bp)
    app.static_url_path = getattr(settings, 'STATIC_URL')
    app.static_folder = getattr(settings, 'STATIC_ROOT')
    app.template_folder = getattr(settings, 'TEMPLATE_ROOT')
    
