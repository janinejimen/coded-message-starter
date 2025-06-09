function translateNumbers(msg) {
    let output = '';

    for(let i = 0; i < msg.length; i++) {
        if(msg[i] === '3') {
            output += 'w';
        } else if(msg[i] === '7') {
            output += 'l';
        } else {
            output += msg[i];
        }
    }

    return output;
}

function reverseWords(msg) {
    let split_words = msg.split(' ');
    let output_string = '';

    for(let i = split_words.length - 1; i >= 0; i--) {
        output_string += split_words[i];
        output_string += " ";
    }

    console.log(output_string);
    return output_string;
}

function shiftCharacters(msg) {
    let result = '';

    for(let i = 0; i < msg.length; i++) {
        let char = msg.charAt(i);
        let charCode = msg.charCodeAt(i);

        //takes care of uppercase letters
        if(charCode >= 65 && charCode <= 90) {
            let newCharCode = charCode - 3;

            if(newCharCode < 65) {
                newCharCode = 90 - (65 - newCharCode - 1);
            }

            result += String.fromCharCode(newCharCode);
        } else if (charCode >= 97 && charCode <= 122) {
            let newCharCode = charCode - 3;
            if (newCharCode < 97) {
                newCharCode = 122 - (97 - newCharCode - 1);
            }
            result += String.fromCharCode(newCharCode);
        }else {
                result += char;
        }
    }

    return result;
}

decodeButton.addEventListener ("click", (e) => {
        let inputmsg = document.getElementById('encodedInput').value;
        let outputmsg = translateNumbers(inputmsg);

        outputmsg = reverseWords(outputmsg);
        outputmsg = shiftCharacters(outputmsg);
        document.getElementById('decodedOutput').innerText = outputmsg;
     }
)

