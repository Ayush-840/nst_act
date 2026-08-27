// ─── 2 ───
def delete_from_heap(heap):
    max_heap = heap[0]
    heap[0], heap[-1] = heap[-1], heap[0]
    heap.pop()
    idx = 0
    while True:
        left = 2 * idx + 1
        right = 2 * idx + 2
        if left >= len(heap):
            break
        if right >= len(heap):
            if heap[idx] < heap[left]:
                heap[idx], heap[left] = heap[left], heap[idx]
            break
        if heap[idx] >= heap[left] and heap[idx] >= heap[right]:
            break
        if heap[left] > heap[right]:
            heap[idx], heap[left] = heap[left], heap[idx]
            idx = left
        else:
            heap[idx], heap[right] = heap[right], heap[idx]
            idx = right
    return max_heap
    

// ─── 7 ───
90
90 15 10 7 12 2