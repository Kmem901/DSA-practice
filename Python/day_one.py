from math import sqrt, floor
def is_prime(n):
  if n < 2:
    return False
  for num in range(2, floor(sqrt(n)) + 1):
    if n % num == 0:
      return False
  return True

def uncompress(s):
  final_string = ""
  i = 0 # use two pointers
  j = 0
  while j < len(s):
    if s[j].isnumeric():
      j += 1
    else:
      num = int(s[i:j])
      final_string += s[j] * num
      j += 1
      i = j
  return final_string

def compress(s):
  s += "!" # have to add final character so when comparing last sequence, there will be final differing character
  result = []
  i = 0
  j = 0
  count = 0
  while j < len(s):
    if s[i] == s[j]:
      j += 1
      count += 1
    else:
      if count == 1:
        result.append(s[i])
      else:
        result.append(str(count))
        result.append(s[i])
      count = 0
      i = j
  return "".join(result)
