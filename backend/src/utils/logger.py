import logging.config

from src.utils import settings


_initialized = False

_default_logging_config = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "default": {
            "format": "%(asctime)s [%(levelname)s]  %(name)-s  %(lineno)d - %(message)s",
            "datefmt": "%Y-%m-%d %H:%M:%S"
        }
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "default",
            "level": "INFO",
            "stream": "ext://sys.stdout"
        }
    },
    "loggers": {
        "console": {
            "level": "INFO",
            "handlers": ["console"],
            "propagate": False
        }
    },
    'root': {
        'level': 'INFO',
        'handlers': ['console'],
        'propagate': False
    }
}


def init():
    global _initialized
    if not _initialized:
        raw_logging_config = getattr(settings, 'LOGGING', _default_logging_config)
        logging.config.dictConfig(raw_logging_config)
        _initialized = True
