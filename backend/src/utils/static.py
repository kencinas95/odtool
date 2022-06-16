import os
import pathlib
import typing

from src.utils.settings import ENABLE_STATIC


def get_static_file_path(root: str, path: str) -> typing.Optional[pathlib.Path]:    
    if ENABLE_STATIC:
        path = os.path.join(root, path)
        fp = pathlib.Path(path)
        if fp.exists() and fp.is_file():
            return fp
