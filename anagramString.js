var findAnagrams = function(s, p) {
    var map = {}, result = [], count = 0;
    s = s.split(''); p = p.split('');
    p.forEach(letter => {
        map[letter] = map[letter] || 0;
        map[letter]--;
    })
    var size = Object.keys(map).length;
    var change = (letter, action) => {
        if (map[letter] === undefined) return;
        var wasMatched = map[letter] === 0;
        action === 'up' ? map[letter]++ : map[letter]--;
        map[letter] === 0 ? count++ : wasMatched ? count-- : null;
    }
    for (var i = 0; i < s.length; i++) {
        change(s[i], 'up');
        i >= p.length ? change(s[i - p.length], 'down') : null;
        count === size ? result.push(i-p.length+1) : null;
    }
    return result; 
};

console.log(findAnagrams('bcbabcbbbddbcaaabc', 'abc'));
