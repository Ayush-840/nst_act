def delete_from_heap(heap):
    target = heap[0]
    heap[0], heap[-1] = heap[-1], heap[0]
    heap.pop()
    i = 0
    while i < len(heap):
        parent= i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < len(heap) and heap[left] < heap[parent]:
            parent = left 
        if right < len(heap) and heap[right] < heap[parent]:
            parent = right 
        if parent == i:
            break
        heap[parent], heap[i] = heap[i], heap[parent]
        i = parent
    return target