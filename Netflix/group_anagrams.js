// FEATURE: ENABLE USERS TO SEE RELEVANT SEARCH RESULTS DESPITE MINOR TYPOS

/* Split an array of titles into sets of words so that all words in a set are anagrams
ergo the frequency of each letter in words belonging to the same group is equal.

For each title, compute a 26-element vector, with each element representing the 
frequency of a letter in the corresponding title. 
This frequency count will be represented as a string delimited with # characters. 
This mapping will generate identical vectors for strings that are anagrams.

Use this vector as a key to insert the titles into a Hash Map. 
All anagrams will be mapped to the same entry in this Hash Map. 
When a user searches a word, compute the 26-element letter frequency vector based on the word. 
Search in the Hash Map using this vector and return all the map entries.
Store the vector of the calculated character counts in the same Hash Map as a key.
Assign the respective set of anagrams as its value.
Return the values of the Hash Map since each value will be an individual set. */

function groupTitles(strs) {
    var res = {}
    for(var s of strs) {
      var count = new Array(26).fill(0); 
      for (var c of s) {
        index = c.charCodeAt(0) - 'a'.charCodeAt(0)
        count[index] += 1
      }
      var key = count
      if(key in res) {
        res[key].push(s)
      } else {
        res[key] = [s]
      }
    }
    var result = [];
    for (var key in res) {
        result.push(res[key]);
    }
    return result;
  }
  
  var titles = ["duel","dule","speed","spede","deul","cars"]
  var gt = groupTitles(titles)
  var query = "spede" 
  
  for (var [_, g] of Object.entries(gt)) {
      if (g.includes(query)){
          console.log(g)
      }
  }

