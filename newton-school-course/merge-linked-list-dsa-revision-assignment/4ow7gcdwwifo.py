def merge(L1, L2):
    # If L1 is empty, the merged list is simply L2
    if not L1:
        return L2
    
    # If L2 is empty, the merged list is simply L1
    if not L2:
        return L1
    
    # Traverse to the last node of L1
    curr = L1
    while curr.next:
        curr = curr.next
    
    # Attach L2 to the end of L1
    curr.next = L2
    
    return L1