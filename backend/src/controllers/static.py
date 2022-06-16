import logging

from flask import Blueprint, abort, render_template, send_file

from src.utils.static import get_static_file_path
from src.utils.settings import TEMPLATE_ROOT, STATIC_ROOT


bp = Blueprint('static', __name__)
log = logging.getLogger('backend.controllers.static')


@bp.route("/", defaults={'path': ''})
@bp.route("/<path:path>")
def index(path: str):
    if path == "":
        return render_template('index.html')
    
    if "." not in path:
        return render_template('index.html')
    
    root = path.rsplit("/", maxsplit=1)[0]    
    if root == "/" or root == "" or root == path:
        root = TEMPLATE_ROOT
    else:
        root = STATIC_ROOT
        
    fp = get_static_file_path(root, path)
    if not fp:
        log.error(f"File not found: {path}")
        abort(404)
    return send_file(fp)

