#!/usr/bin/env python3
""" coroutine called async_generator that takes no arguments"""
import asyncio
import random
from typing import AsyncGenerator
import typing


async def async_generator() -> typing.AsyncGenerator[float, None]:
    """Yields a random number between 0 and 10 every second, for 10 seconds."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
