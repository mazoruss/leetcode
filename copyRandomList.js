var copyRandomList = function(head) {
    if (head === null) return null;
    var newList = new RandomListNode(head.label);
    var tracker = newList;
    var origin = head;
    
    var map = {};
    map[head.label] = [];
    map[head.label].push(newList);
    
    while(origin.next) {
        origin = origin.next;
        tracker.next = new RandomListNode(origin.label);
        tracker = tracker.next;
        map[tracker.label] = map[tracker.label] || [];
        map[tracker.label].push(tracker);
    }
    tracker.next = null;
    
    var original = head;
    var copy = newList;
    
    while (copy) {
        var random = original.random
        var candidates = random ? map[random.label] : null;
        if (candidates) {
            copy.random = candidates.length === 1 ? candidates[0] : null;
        }
        original = original.next;
        copy = copy.next;
    }
    return newList;
};