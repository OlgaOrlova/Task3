var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function () {
    for (var name = 0; name < names.length; name++) {
        var allNames = {};//Object
        allNames.everyWord = names[name];
        var firstLetter = allNames.everyWord.charAt(0);// the first character in the word
        
        if (firstLetter == 'J' || firstLetter == 'j') {
        
            byeSpeaker.speak(allNames.everyWord);//call
        }
        else {
          
            helloSpeaker.speak(allNames.everyWord);//call
        }
    }
    window.allNames = allNames;
})();