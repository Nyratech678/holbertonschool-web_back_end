#!/usr/bin/env python3
"""Module for concurrent coroutines"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Asynchronous routine that spawns wait_random n times.

    Args:
        n: Number of times to spawn wait_random
        max_delay: Maximum delay for each wait_random call

    Returns:
        A list of all delays in ascending order
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
