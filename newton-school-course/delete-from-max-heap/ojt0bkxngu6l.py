// ─── 2 ───
def delete_from_heap(heap):
    target = heap[0]
    heap[0], heap[-1] = heap[-1], heap[0]
    heap.pop()
    i = 0
    while i < len(heap):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < len(heap) and heap[left] > heap[largest]:
            largest = left 
        if right < len(heap) and heap[right] > heap[largest]:
            largest = right 
        if largest == i:
            break
        heap[largest], heap[i] = heap[i], heap[largest]
        i = largest
    return target

// ─── 3 ───
6
90 15 10 7 12 2

// ─── 5 ───
def delete_from_heap(heap):
    target = heap[0]
    heap[0], heap[-1] = heap[-1], heap[0]
    heap.pop()
    i = 0
    while i < len(heap):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < len(heap) and heap[left] > heap[largest]:
            largest = left 
        if right < len(heap) and heap[right] > heap[largest]:
            largest = right 
        if largest == i:
            break
        heap[largest], heap[i] = heap[i], heap[largest]
        i = largest
    return target