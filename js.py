def replase(arr):

    min_number = min(arr)
    max_number = max(arr)


    idx_min = arr.index(min_number)
    idx_max = arr.index(max_number)

    arr[idx_min], arr[idx_max] = arr[idx_max], arr[idx_min]

    return arr


arr = [5, 2, 8, 15, 3, 7, 10]
ans = replase(arr)
print("Almashtirilgan arr:", ans)
