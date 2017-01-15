var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];
    var map = {};
    var result = [];
    s = s.split(''); p = p.split('');

    p.forEach(letter => {
        map[letter] = map[letter] || [0, 0];
        map[letter][0]++;
    })

    var count = 0;
    var size = Object.keys(map).length;
    
    var change = (letter, action) => {
        if (!map[letter]) return;
        var pair = map[letter];
        var wasMatched = false;
        if (pair[0] === pair[1]) wasMatched = true;
        action === 'up' ? pair[1]++ : pair[1]--;
        pair[0] === pair[1] ? count++ : wasMatched ? count-- : null;

    }

    p.forEach( (l, i) => change(s[i], 'up'))
    count === size && result.push(0);

    for (var i = 1; i < s.length - p.length + 1; i++) {
        change(s[i + p.length - 1], 'up');
        change(s[i - 1], 'down');
        count === size && result.push(i);
    }
    return result; 
};

console.log(findAnagrams('bcbabcbbbddbcaaabc', 'abc'));