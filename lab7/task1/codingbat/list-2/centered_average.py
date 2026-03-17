def centered_average(nums):
    nums_copy = nums[:]

    nums_copy.remove(min(nums_copy))
    nums_copy.remove(max(nums_copy))

    return sum(nums_copy) // len(nums_copy)