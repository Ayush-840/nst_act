def partition(arr,lo,hi):
    pivot=arr[hi]
    pos=lo -1
    for k in range(lo,hi+1):
        if arr[k] <= pivot:
            pos +=1
            arr[pos],arr[k]=arr[k],arr[pos]
    return pos

def quick_sort(arr,lo,hi):
    if lo >= hi:
        return
    pos=partition(arr,lo,hi)
    quick_sort(arr,lo,pos-1)
    quick_sort(arr,pos+1,hi)

quick_sort(arr,0,len(arr)-1)