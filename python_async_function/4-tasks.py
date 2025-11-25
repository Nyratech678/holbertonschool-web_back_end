#!/usr/bin/env python3
"""Module for multiple concurrent tasks"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Asynchronous routine that spawns task_wait_random n times.

    Args:
        n: Number of times to spawn task_wait_random
        max_delay: Maximum delay for each task

    Returns:
        A list of all delays in ascending order
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
