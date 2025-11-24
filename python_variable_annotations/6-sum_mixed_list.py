#!/usr/bin/env python3
"""type-annotated function sum_mixed_list which takes a list mxd_lst"""


from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """Returns the sum of a list of mixed integers and floats."""
    return float(sum(mxd_list))
