import os
import pathlib


# App root path
ROOT_PATH = pathlib.Path(__file__).parent.parent.parent.parent


# Enable static
ENABLE_STATIC = os.environ.get('ENABLE_STATIC', '0')
ENABLE_STATIC = True if ENABLE_STATIC == '1' else False

STATIC_ROOT = None
TEMPLATE_ROOT = None
STATIC_URL = None

if ENABLE_STATIC:
    #Static URL
    STATIC_URL = os.environ.get('STATIC_URL', '/static')
    
    # Static root path
    static_root_path = os.environ.get('STATIC_ROOT')
    if static_root_path:    
        STATIC_ROOT = os.path.join(ROOT_PATH, static_root_path)    

    # Static template root path
    template_root_path = os.environ.get('TEMPLATE_ROOT')
    if template_root_path:
        TEMPLATE_ROOT = os.path.join(ROOT_PATH, template_root_path)
