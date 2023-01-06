def anagrams(s1, s2):
  s1_dict = {}
  for letter in s1:
    if letter not in s1_dict:
      s1_dict[letter] = 1
    else:
      s1_dict[letter] += 1
  s2_dict = {}
  for letter in s2:
    if letter not in s2_dict:
      s2_dict[letter] = 1
    else:
      s2_dict[letter] += 1

  return s2_dict == s1_dict
