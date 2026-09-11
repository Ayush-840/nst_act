// ─── 2 ───
'''
class Node:
    def __init__(self, x):
        self.data = x
        self.next = None
'''

def deleteAtTail(head):
    if not head or not head.next:
        return None
    curr = head
    while curr.next.next:
        curr = curr.next
    curr.next = None
    return head

// ─── 3 ───
4
5 10 15 20