require 'pry'

def is_palindrome?(word)
  if word.class == String
    if word.length > 0
      trimmed_word = word.delete(" ")
     trimmed_word == trimmed_word.reverse
   else
     false
   end
  else
    raise ArgumentError
  end
end
